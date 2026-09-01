import { NextRequest } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Recipe } from '@/models/Recipe';
import { CreateRecipeSchema, RecipeQuerySchema } from '@/lib/validations/recipe';
import { initialRecipes } from '@/scripts/seed-data';
import {
  apiSuccess,
  apiCreated,
  apiBadRequest,
  apiServerError,
} from '@/lib/api-response';

/**
 * GET /api/recipes
 * Fetches recipes with optional filters (category, search, pagination, sort)
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const queryValidation = RecipeQuerySchema.safeParse({
    category: searchParams.get('category') || undefined,
    search: searchParams.get('search') || undefined,
    page: searchParams.get('page') || undefined,
    limit: searchParams.get('limit') || undefined,
    sort: searchParams.get('sort') || undefined,
  });

  if (!queryValidation.success) {
    return apiBadRequest('Invalid query parameters', queryValidation.error.flatten());
  }

  const { category, search, page = 1, limit = 50, sort } = queryValidation.data;

  try {
    await connectToDatabase();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filter: Record<string, any> = {};

    if (category && category.toLowerCase() !== 'all') {
      filter.category = new RegExp(category, 'i');
    }

    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { ingredients: { $elemMatch: { $regex: search, $options: 'i' } } },
      ];
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let sortOptions: Record<string, any> = { createdAt: -1 };
    if (sort === 'oldest') sortOptions = { createdAt: 1 };
    else if (sort === 'title-asc') sortOptions = { title: 1 };
    else if (sort === 'title-desc') sortOptions = { title: -1 };

    const skip = (page - 1) * limit;

    const [recipes, total] = await Promise.all([
      Recipe.find(filter).sort(sortOptions).skip(skip).limit(limit).lean(),
      Recipe.countDocuments(filter),
    ]);

    if (recipes && recipes.length > 0) {
      return apiSuccess(recipes, undefined, {
        count: recipes.length,
        total,
        page,
        limit,
      });
    }
  } catch (error) {
    console.warn('MongoDB recipes query failed, falling back to initial recipes dataset:', error);
  }

  // Fallback to initialRecipes
  let filtered = [...initialRecipes];
  if (category && category.toLowerCase() !== 'all') {
    filtered = filtered.filter(r => r.category?.toLowerCase() === category.toLowerCase());
  }
  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(r =>
      r.title.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      r.ingredients.some(ing => ing.toLowerCase().includes(q))
    );
  }
  const skip = (page - 1) * limit;
  const paginated = filtered.slice(skip, skip + limit);

  return apiSuccess(paginated, undefined, {
    count: paginated.length,
    total: filtered.length,
    page,
    limit,
  });
}

/**
 * POST /api/recipes
 * Creates a new Bengali recipe in MongoDB
 */
export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const body = await request.json();
    const validation = CreateRecipeSchema.safeParse(body);

    if (!validation.success) {
      return apiBadRequest('Validation failed', validation.error.flatten());
    }

    // Check if ID slug already exists
    const existing = await Recipe.findOne({ id: validation.data.id });
    if (existing) {
      return apiBadRequest(`A recipe with ID '${validation.data.id}' already exists.`);
    }

    const newRecipe = await Recipe.create(validation.data);

    return apiCreated(newRecipe, 'Recipe created successfully');
  } catch (error: any) {
    return apiServerError('Failed to create recipe', error.message || error);
  }
}

import { NextRequest } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Fact } from '@/models/Fact';
import { CreateFactSchema, FactQuerySchema } from '@/lib/validations/fact';
import {
  apiSuccess,
  apiCreated,
  apiBadRequest,
  apiServerError,
} from '@/lib/api-response';

/**
 * GET /api/facts
 * Fetches facts with optional filters (category, search, pagination, sort)
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const queryValidation = FactQuerySchema.safeParse({
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

    // Build filter
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filter: Record<string, any> = {};

    if (category && category.toLowerCase() !== 'all') {
      filter.category = new RegExp(`^${category}$`, 'i');
    }

    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { details: { $regex: search, $options: 'i' } },
      ];
    }

    // Build sorting
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let sortOptions: Record<string, any> = { createdAt: -1 };
    if (sort === 'oldest') sortOptions = { createdAt: 1 };
    else if (sort === 'title-asc') sortOptions = { title: 1 };
    else if (sort === 'title-desc') sortOptions = { title: -1 };

    const skip = (page - 1) * limit;

    const [facts, total] = await Promise.all([
      Fact.find(filter).sort(sortOptions).skip(skip).limit(limit).lean(),
      Fact.countDocuments(filter),
    ]);

    return apiSuccess(facts || [], undefined, {
      count: (facts || []).length,
      total: total || 0,
      page,
      limit,
    });
  } catch (error: any) {
    return apiServerError('Failed to fetch facts from database', error.message || error);
  }
}

/**
 * POST /api/facts
 * Creates a new cultural fact in MongoDB
 */
export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const body = await request.json();
    const validation = CreateFactSchema.safeParse(body);

    if (!validation.success) {
      return apiBadRequest('Validation failed', validation.error.flatten());
    }

    // Check if ID slug already exists
    const existing = await Fact.findOne({ id: validation.data.id });
    if (existing) {
      return apiBadRequest(`A fact with ID '${validation.data.id}' already exists.`);
    }

    const newFact = await Fact.create(validation.data);

    return apiCreated(newFact, 'Fact created successfully');
  } catch (error: any) {
    return apiServerError('Failed to create fact', error.message || error);
  }
}

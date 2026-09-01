import { NextRequest } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Fact } from '@/models/Fact';
import { Recipe } from '@/models/Recipe';
import { apiSuccess, apiBadRequest, apiServerError } from '@/lib/api-response';

/**
 * POST /api/seed
 * Populates MongoDB Atlas from request payload.
 * Idempotent: Uses upsert to avoid duplicate key errors.
 */
export async function POST(request: NextRequest) {
  try {
    const isDev = process.env.NODE_ENV !== 'production';
    const secret = process.env.SEED_SECRET;
    const providedSecret = request.headers.get('x-seed-secret');

    // Protect in production unless correct secret is supplied
    if (!isDev && secret && providedSecret !== secret) {
      return apiBadRequest('Unauthorized: Invalid or missing x-seed-secret header');
    }

    await connectToDatabase();
    const body = await request.json().catch(() => ({}));
    const factsList = Array.isArray(body.facts) ? body.facts : [];
    const recipesList = Array.isArray(body.recipes) ? body.recipes : [];

    // 1. Seed Facts
    const factOperations = factsList.map((fact: any) => ({
      updateOne: {
        filter: { id: fact.id },
        update: { $set: fact },
        upsert: true,
      },
    }));

    // 2. Seed Recipes
    const recipeOperations = recipesList.map((recipe: any) => ({
      updateOne: {
        filter: { id: recipe.id },
        update: { $set: recipe },
        upsert: true,
      },
    }));

    let factsUpserted = 0;
    let factsModified = 0;
    let recipesUpserted = 0;
    let recipesModified = 0;

    if (factOperations.length > 0) {
      const res = await Fact.bulkWrite(factOperations);
      factsUpserted = res.upsertedCount;
      factsModified = res.modifiedCount;
    }
    if (recipeOperations.length > 0) {
      const res = await Recipe.bulkWrite(recipeOperations);
      recipesUpserted = res.upsertedCount;
      recipesModified = res.modifiedCount;
    }

    const totalFacts = await Fact.countDocuments();
    const totalRecipes = await Recipe.countDocuments();

    return apiSuccess(
      {
        facts: {
          upserted: factsUpserted,
          modified: factsModified,
          total: totalFacts,
        },
        recipes: {
          upserted: recipesUpserted,
          modified: recipesModified,
          total: totalRecipes,
        },
      },
      'Database seeded successfully'
    );
  } catch (error: any) {
    return apiServerError('Database seeding failed', error.message || error);
  }
}

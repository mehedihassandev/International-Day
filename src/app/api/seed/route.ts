import { NextRequest } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Fact } from '@/models/Fact';
import { Recipe } from '@/models/Recipe';
import { initialFacts, initialRecipes } from '@/scripts/seed-data';
import { apiSuccess, apiBadRequest, apiServerError } from '@/lib/api-response';

/**
 * POST /api/seed
 * Populates MongoDB Atlas with cultural facts and traditional recipes.
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

    // 1. Seed Facts
    const factOperations = initialFacts.map((fact) => ({
      updateOne: {
        filter: { id: fact.id },
        update: { $set: fact },
        upsert: true,
      },
    }));

    // 2. Seed Recipes
    const recipeOperations = initialRecipes.map((recipe) => ({
      updateOne: {
        filter: { id: recipe.id },
        update: { $set: recipe },
        upsert: true,
      },
    }));

    const [factsResult, recipesResult] = await Promise.all([
      Fact.bulkWrite(factOperations),
      Recipe.bulkWrite(recipeOperations),
    ]);

    const totalFacts = await Fact.countDocuments();
    const totalRecipes = await Recipe.countDocuments();

    return apiSuccess(
      {
        facts: {
          upserted: factsResult.upsertedCount,
          modified: factsResult.modifiedCount,
          total: totalFacts,
        },
        recipes: {
          upserted: recipesResult.upsertedCount,
          modified: recipesResult.modifiedCount,
          total: totalRecipes,
        },
      },
      'Database seeded successfully from MongoDB Atlas'
    );
  } catch (error: any) {
    return apiServerError('Database seeding failed', error.message || error);
  }
}

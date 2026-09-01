import { NextRequest } from 'next/server';
import mongoose from 'mongoose';
import { connectToDatabase } from '@/lib/mongodb';
import { Recipe } from '@/models/Recipe';
import { UpdateRecipeSchema } from '@/lib/validations/recipe';
import {
  apiSuccess,
  apiNotFound,
  apiBadRequest,
  apiServerError,
} from '@/lib/api-response';

interface RouteContext {
  params: Promise<{ id: string }>;
}

import { initialRecipes } from '@/scripts/seed-data';

function buildIdQuery(id: string) {
  if (mongoose.Types.ObjectId.isValid(id)) {
    return { $or: [{ id }, { _id: id }] };
  }
  return { id };
}

/**
 * GET /api/recipes/[id]
 * Retrieves a single recipe by slug or _id
 */
export async function GET(_request: NextRequest, context: RouteContext) {
  const { id } = await context.params;

  try {
    await connectToDatabase();
    const recipe = await Recipe.findOne(buildIdQuery(id)).lean();
    if (recipe) {
      return apiSuccess(recipe);
    }
  } catch (error) {
    console.warn(`Recipe ${id} query error, checking static fallback:`, error);
  }

  const fallback = initialRecipes.find((r) => r.id === id);
  if (fallback) {
    return apiSuccess(fallback);
  }

  return apiNotFound(`Recipe with identifier '${id}' not found`);
}

/**
 * PUT /api/recipes/[id]
 * Updates an existing recipe
 */
export async function PUT(request: NextRequest, context: RouteContext) {
  try {
    await connectToDatabase();
    const { id } = await context.params;

    const body = await request.json();
    const validation = UpdateRecipeSchema.safeParse(body);

    if (!validation.success) {
      return apiBadRequest('Validation failed', validation.error.flatten());
    }

    const updatedRecipe = await Recipe.findOneAndUpdate(
      buildIdQuery(id),
      { $set: validation.data },
      { new: true, runValidators: true }
    ).lean();

    if (!updatedRecipe) {
      return apiNotFound(`Recipe with identifier '${id}' not found`);
    }

    return apiSuccess(updatedRecipe, 'Recipe updated successfully');
  } catch (error: any) {
    return apiServerError('Failed to update recipe', error.message || error);
  }
}

/**
 * DELETE /api/recipes/[id]
 * Deletes a recipe by id
 */
export async function DELETE(_request: NextRequest, context: RouteContext) {
  try {
    await connectToDatabase();
    const { id } = await context.params;

    const deleted = await Recipe.findOneAndDelete(buildIdQuery(id)).lean();

    if (!deleted) {
      return apiNotFound(`Recipe with identifier '${id}' not found`);
    }

    return apiSuccess(deleted, 'Recipe deleted successfully');
  } catch (error: any) {
    return apiServerError('Failed to delete recipe', error.message || error);
  }
}

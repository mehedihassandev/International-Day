import { NextRequest } from 'next/server';
import mongoose from 'mongoose';
import { connectToDatabase } from '@/lib/mongodb';
import { Fact } from '@/models/Fact';
import { UpdateFactSchema } from '@/lib/validations/fact';
import {
  apiSuccess,
  apiNotFound,
  apiBadRequest,
  apiServerError,
} from '@/lib/api-response';

interface RouteContext {
  params: Promise<{ id: string }>;
}

/**
 * Helper to query by slug ID or MongoDB ObjectId
 */
function buildIdQuery(id: string) {
  if (mongoose.Types.ObjectId.isValid(id)) {
    return { $or: [{ id }, { _id: id }] };
  }
  return { id };
}

/**
 * GET /api/facts/[id]
 * Retrieves a single fact by slug or _id
 */
export async function GET(_request: NextRequest, context: RouteContext) {
  const { id } = await context.params;

  try {
    await connectToDatabase();
    const fact = await Fact.findOne(buildIdQuery(id)).lean();
    if (!fact) {
      return apiNotFound(`Fact with identifier '${id}' not found`);
    }
    return apiSuccess(fact);
  } catch (error: any) {
    return apiServerError(`Failed to retrieve fact '${id}'`, error.message || error);
  }
}

/**
 * PUT /api/facts/[id]
 * Updates an existing fact
 */
export async function PUT(request: NextRequest, context: RouteContext) {
  try {
    await connectToDatabase();
    const { id } = await context.params;

    const body = await request.json();
    const validation = UpdateFactSchema.safeParse(body);

    if (!validation.success) {
      return apiBadRequest('Validation failed', validation.error.flatten());
    }

    const updatedFact = await Fact.findOneAndUpdate(
      buildIdQuery(id),
      { $set: validation.data },
      { new: true, runValidators: true }
    ).lean();

    if (!updatedFact) {
      return apiNotFound(`Fact with identifier '${id}' not found`);
    }

    return apiSuccess(updatedFact, 'Fact updated successfully');
  } catch (error: any) {
    return apiServerError('Failed to update fact', error.message || error);
  }
}

/**
 * DELETE /api/facts/[id]
 * Deletes a fact by id
 */
export async function DELETE(_request: NextRequest, context: RouteContext) {
  try {
    await connectToDatabase();
    const { id } = await context.params;

    const deleted = await Fact.findOneAndDelete(buildIdQuery(id)).lean();

    if (!deleted) {
      return apiNotFound(`Fact with identifier '${id}' not found`);
    }

    return apiSuccess(deleted, 'Fact deleted successfully');
  } catch (error: any) {
    return apiServerError('Failed to delete fact', error.message || error);
  }
}

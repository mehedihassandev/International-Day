import { NextRequest } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Fact } from '@/models/Fact';
import { apiSuccess, apiServerError } from '@/lib/api-response';

/**
 * GET /api/facts/random
 * Returns N random facts from MongoDB (defaults to 1, or count query param)
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const countParam = parseInt(searchParams.get('count') || '1', 10);
  const count = isNaN(countParam) || countParam < 1 ? 1 : Math.min(countParam, 50);

  try {
    await connectToDatabase();
    const randomFacts = await Fact.aggregate([{ $sample: { size: count } }]);
    if (count === 1) {
      return apiSuccess(randomFacts[0] || null);
    }
    return apiSuccess(randomFacts || [], undefined, { count: (randomFacts || []).length });
  } catch (error: any) {
    return apiServerError('Failed to fetch random facts from database', error.message || error);
  }
}

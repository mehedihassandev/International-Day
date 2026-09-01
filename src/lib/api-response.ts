import { NextResponse } from 'next/server';

export interface ApiResponseOptions<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  count?: number;
  total?: number;
  page?: number;
  limit?: number;
}

export function apiSuccess<T>(data: T, message?: string, meta?: { count?: number; total?: number; page?: number; limit?: number }) {
  return NextResponse.json(
    {
      success: true,
      message,
      data,
      ...meta,
    },
    { status: 200 }
  );
}

export function apiCreated<T>(data: T, message: string = 'Resource created successfully') {
  return NextResponse.json(
    {
      success: true,
      message,
      data,
    },
    { status: 201 }
  );
}

export function apiBadRequest(error: string = 'Bad request', details?: unknown) {
  return NextResponse.json(
    {
      success: false,
      error,
      details,
    },
    { status: 400 }
  );
}

export function apiNotFound(error: string = 'Resource not found') {
  return NextResponse.json(
    {
      success: false,
      error,
    },
    { status: 404 }
  );
}

export function apiServerError(error: string = 'Internal server error', details?: unknown) {
  console.error('[API Server Error]:', error, details);
  return NextResponse.json(
    {
      success: false,
      error,
      message: typeof details === 'string' ? details : undefined,
      details: process.env.NODE_ENV !== 'production' ? details : undefined,
    },
    { status: 500 }
  );
}

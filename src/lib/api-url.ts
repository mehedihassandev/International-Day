/**
 * Helper to dynamically determine the base API URL across
 * Development (localhost:3000), Vercel Production, and Custom Domains.
 */
export function getBaseUrl(): string {
  // In the browser, relative paths (e.g., /api/facts) work automatically
  if (typeof window !== 'undefined') {
    return '';
  }

  // Explicitly configured public URL (e.g. https://international-day-three.vercel.app)
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL.replace(/\/$/, '');
  }

  // Automatically provided by Vercel during deployment/SSR
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // Local development fallback for server-side fetches
  const port = process.env.PORT || 3000;
  return `http://localhost:${port}`;
}

/**
 * Builds a full API path
 * Example: getApiUrl('/api/facts') -> 'http://localhost:3000/api/facts' (on server) or '/api/facts' (in browser)
 */
export function getApiUrl(path: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const base = getBaseUrl();
  return `${base}${normalizedPath}`;
}

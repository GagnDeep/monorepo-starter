interface Bucket { count: number; resetAt: number }
const buckets = new Map<string, Bucket>();

export interface RateLimitResult { ok: boolean; remaining: number; resetAt: number }

// Swap for Upstash in prod via env.UPSTASH_REDIS_REST_URL.
export function rateLimit(key: string, opts: { limit: number; windowMs: number }): RateLimitResult {
  const now = Date.now();
  const bucket = buckets.get(key);
  if (!bucket || bucket.resetAt < now) {
    const fresh = { count: 1, resetAt: now + opts.windowMs };
    buckets.set(key, fresh);
    return { ok: true, remaining: opts.limit - 1, resetAt: fresh.resetAt };
  }
  bucket.count += 1;
  return { ok: bucket.count <= opts.limit, remaining: Math.max(0, opts.limit - bucket.count), resetAt: bucket.resetAt };
}

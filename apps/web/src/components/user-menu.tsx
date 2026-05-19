'use client';

import { useSession, signOut } from '@/lib/auth-client';
import { Link } from '@/i18n/navigation';

// AGENT-NOTE: Client-side session example. Server components should use
// `getSession()` / `requireSession()` from `@/lib/auth-session` instead.
export function UserMenu() {
  const { data: session, isPending } = useSession();

  if (isPending) return <span className="text-sm text-muted-foreground">…</span>;

  if (!session) {
    return (
      <Link href="/sign-in" className="text-sm text-muted-foreground hover:text-foreground">
        Sign in
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-muted-foreground">{session.user.email}</span>
      <button
        onClick={() => signOut()}
        className="text-muted-foreground hover:text-foreground"
      >
        Sign out
      </button>
    </div>
  );
}

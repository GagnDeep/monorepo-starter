import { cn } from '@/lib/utils';

type MaxWidth = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
const widths: Record<MaxWidth, string> = {
  sm: 'max-w-2xl', md: 'max-w-3xl', lg: 'max-w-4xl', xl: 'max-w-5xl', '2xl': 'max-w-6xl',
};

export function PageShell({
  title, children, maxWidth = 'lg', className,
}: {
  title?: string;
  children: React.ReactNode;
  maxWidth?: MaxWidth;
  className?: string;
}) {
  return (
    <div className={cn('mx-auto w-full', widths[maxWidth], className)}>
      {title ? <h1 className="mb-6 text-3xl font-bold tracking-tight">{title}</h1> : null}
      {children}
    </div>
  );
}

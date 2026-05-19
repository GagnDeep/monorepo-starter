import { ImageResponse } from 'next/og';
import { siteConfig } from '@/config/site';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title')?.slice(0, 120) ?? siteConfig.name;
  const locale = searchParams.get('locale') ?? siteConfig.defaultLocale;
  const subtitle = siteConfig.description[locale] ?? siteConfig.description.en!;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background: siteConfig.brand.background,
          color: siteConfig.brand.foreground,
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 32 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: siteConfig.brand.primary,
            }}
          />
          <span style={{ fontWeight: 700 }}>{siteConfig.name}</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            {title}
          </div>
          <div style={{ fontSize: 28, color: '#52525b' }}>{subtitle}</div>
        </div>
      </div>
    ),
    {
      width: siteConfig.og.width,
      height: siteConfig.og.height,
    },
  );
}

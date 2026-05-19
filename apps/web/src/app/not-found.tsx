// Fallback 404 for non-locale paths. Locale-aware 404 lives at app/[locale]/not-found.tsx.
export default function NotFound() {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: 'system-ui, sans-serif',
          display: 'flex',
          minHeight: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        <h1 style={{ fontSize: 32, margin: 0 }}>404</h1>
        <p style={{ margin: 0, color: '#666' }}>Page not found.</p>
        <a href="/">Go home</a>
      </body>
    </html>
  );
}

import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export function GET() {
  const robots = `
    User-agent: *
    Allow: /
    Sitemap: https://getsumu.xyz/sitemap.xml
  `;

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}

import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export function GET() {
  const baseUrl = 'https://getsumu.xyz';

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${baseUrl}/</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>${baseUrl}/blog/posts/sumu-fees-vs-patreon</loc>
      <lastmod>2024-02-24</lastmod>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>${baseUrl}/blog/posts/payment-processing-fees</loc>
      <lastmod>2024-02-24</lastmod>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>${baseUrl}/blog/posts/how-creators-fight-back</loc>
      <lastmod>2024-02-27</lastmod>
      <priority>0.8</priority>
    </url>
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
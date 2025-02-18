export const dynamic = 'force-dynamic';

export function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://getsumu.xyz/sitemap.xml',
  };
}

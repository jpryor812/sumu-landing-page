export const dynamic = 'force-dynamic';

export default async function sitemap() {
  return [
    {
      url: 'https://getsumu.xyz',
      lastModified: new Date().toISOString(),
      priority: 1.0,
    },
    {
      url: 'https://getsumu.xyz/blog/posts/sumu-fees-vs-patreon',
      lastModified: new Date('2024-02-24').toISOString(),
      priority: 0.8,
    },
    {
      url: 'https://getsumu.xyz/blog/posts/payment-processing-fees',
      lastModified: new Date('2024-02-24').toISOString(),
      priority: 0.8,
    },

  ];
}

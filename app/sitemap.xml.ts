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
      lastModified: new Date('2024-02-17').toISOString(),
      priority: 0.8,
    },
    // Add more URLs as needed
  ];
}

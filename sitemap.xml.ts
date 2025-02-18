
export default async function sitemap() {
    return [
      {
        url: 'https://getsumu.xyz',
        lastModified: new Date(),
        priority: 1.0
      },
      {
        url: 'https://getsumu.xyz/blog/posts/sumu-fees-vs-patreon',
        lastModified: new Date('2024-02-17'), // Use the actual publish date
        priority: 0.8
      },
      // Add more URLs as you create more blog posts
    ]
  }
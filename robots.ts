// app/robots.ts
export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
      },
      sitemap: 'https://getsumu.xyz/sitemap.xml',
    }
  }
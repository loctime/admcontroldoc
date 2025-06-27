/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://controldoc.app',
  generateRobotsTxt: true,
  exclude: ['/admin', '/login', '/dashboard'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/login', '/dashboard'],
      },
    ],
  },
} 
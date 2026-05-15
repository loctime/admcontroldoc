/** @type {import('next-sitemap').IConfig} */
const aiBots = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'GoogleOther',
  'Applebot-Extended',
  'Bytespider',
  'CCBot',
  'Meta-ExternalAgent',
  'Meta-ExternalFetcher',
  'DuckAssistBot',
  'YouBot',
  'cohere-ai',
  'Amazonbot',
  'Diffbot',
];

const privatePaths = ['/admin', '/login', '/dashboard'];

module.exports = {
  siteUrl: 'https://controldoc.app',
  generateRobotsTxt: true,
  exclude: privatePaths,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/', disallow: privatePaths },
      ...aiBots.map((bot) => ({
        userAgent: bot,
        allow: '/',
        disallow: privatePaths,
      })),
    ],
  },
}

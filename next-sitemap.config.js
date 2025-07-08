/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://paintball-seven.vercel.app/',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://gromzone.com',
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
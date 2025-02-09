export default defineEventHandler((event) => {
    const robotsTxt = `User-agent: *
    Allow: /
    Disallow: /private/
    Sitemap: https://mmorshed.me/sitemap.xml`;

    event.node.res.setHeader('Content-Type', 'text/plain');
    event.node.res.end(robotsTxt);
});
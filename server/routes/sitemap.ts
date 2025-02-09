import portfolio from '../../data/portfolio.json';

export default defineEventHandler(async (event) => {
    // Generate the sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <!-- Static URLs -->
      <url>
        <loc>https://mmorshed.me/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://mmorshed.me/about</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://mmorshed.me/services</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://mmorshed.me/blog</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://mmorshed.me/contact</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://mmorshed.me/projects</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
  
      <!-- Dynamic Blog URLs -->
      ${portfolio.blogPosts
            .map(
                (post) => `
        <url>
          <loc>https://mmorshed.me/blog/${post.id}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
        </url>`
            )
            .join('')}
  
      <!-- Dynamic Project URLs -->
      ${portfolio.projects
            .map(
                (project) => `
        <url>
          <loc>https://mmorshed.me/project/${project.id}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
        </url>`
            )
            .join('')}

        <!-- Dynamic Blog Category URLs -->
      ${portfolio.blogCategories
            .map(
                (blog) => `
        <url>
          <loc>https://mmorshed.me/blog/category/${blog.name}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
        </url>`
            )
            .join('')}
    </urlset>`;

    // Set the response headers and return the sitemap
    event.node.res.setHeader('Content-Type', 'text/xml');
    event.node.res.end(sitemap);
});


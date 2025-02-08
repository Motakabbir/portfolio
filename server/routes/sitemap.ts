import { eventHandler } from 'h3';
import portfolio from '../../data/portfolio.json';

export default eventHandler(async () => {
    const projectUrls = portfolio.projects.map(projects => ({
        loc: `/projects/${projects.id}`, // Dynamic URL
        lastmod: new Date().toISOString(),  // Use lastmod from JSON
        priority: 0.8,
        changefreq: 'weekly'
    }))

    const blogUrls = portfolio.blogPosts.map(blog => ({
        loc: `/blog/${blog.id}`,
        lastmod: new Date().toISOString(),
        priority: 0.9,
        changefreq: 'weekly'
    }));

    const blogCatUrls = portfolio.blogCategories.map(blog => ({
        loc: `/blog/category/${blog.name}`, // Dynamic URL for blogs
        lastmod: new Date().toISOString(),
        priority: 0.9,
        changefreq: 'weekly'
    }));

    return [...blogUrls, ...projectUrls, ...blogCatUrls];

});

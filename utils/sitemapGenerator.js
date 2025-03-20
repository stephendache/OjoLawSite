const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, '../public', 'sitemap.xml'); // Adjust path as needed

async function generateSitemap() {
    const sitemap = new SitemapStream({ hostname: 'https://www.ojolaw.com' });

    // Add static pages
    const pages = [
        { url: '/', changefreq: 'daily', priority: 1.0 },
        { url: '/about', changefreq: 'monthly', priority: 0.8 },
        { url: '/services', changefreq: 'weekly', priority: 0.9 },
        { url: '/contact', changefreq: 'yearly', priority: 0.6 },
        { url: '/consultation', changefreq: 'monthly', priority: 0.7 }
    ];

    // Dynamically add pages to the sitemap
    pages.forEach(page => sitemap.write(page));

    sitemap.end();

    // Convert stream to XML and save to file
    const xml = await streamToPromise(sitemap);
    fs.writeFileSync(sitemapPath, xml.toString());
    console.log('✅ Sitemap generated and saved to public/sitemap.xml');
}

module.exports = generateSitemap;

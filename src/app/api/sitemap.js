export default function handler(req, res) {
    res.setHeader("Content-Type", "application/xml");
    res.status(200).send(`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://phonevox-group-landing-page.vercel.app/</loc>
            <lastmod>2025-01-30</lastmod>
            <changefreq>daily</changefreq>
            <priority>1.0</priority>
        </url>
        <url>
            <loc>https://phonevox-group-landing-page.vercel.app/solucoes</loc>
            <lastmod>2025-01-30</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
        </url>
        <url>
            <loc>https://phonevox-group-landing-page.vercel.app/callcenter</loc>
            <lastmod>2025-01-30</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
        </url>
    </urlset>`);
}

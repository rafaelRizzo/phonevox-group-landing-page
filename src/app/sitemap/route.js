export async function GET() {
    const urls = [
        {
            url: 'https://phonevox-group-landing-page.vercel.app',
            lastModified: new Date().toISOString(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://phonevox-group-landing-page.vercel.app/callcenter',
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://phonevox-group-landing-page.vercel.app/solucoes',
            lastModified: new Date().toISOString(),
            changeFrequency: 'weekly',
            priority: 0.6,
        },
        {
            url: 'https://phonevox-group-landing-page.vercel.app/sobre',
            lastModified: new Date().toISOString(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls
            .map(
                (url) => `
        <url>
            <loc>${url.url}</loc>
            <lastmod>${url.lastModified}</lastmod>
            <changefreq>${url.changeFrequency}</changefreq>
            <priority>${url.priority}</priority>
        </url>`
            )
            .join('')}
    </urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}

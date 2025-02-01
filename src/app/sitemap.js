export default function sitemap() {
    return [
        {
            url: 'https://phonevox-group-landing-page.vercel.app',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://phonevox-group-landing-page.vercel.app/callcenter',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://phonevox-group-landing-page.vercel.app/solucoes',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.6,
        },
        {
            url: 'https://phonevox-group-landing-page.vercel.app/sobre',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
    ]
}
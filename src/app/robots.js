export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/private/'],
            },
        ],
        sitemap: 'https://reviontech.com/sitemap.xml',
    };
}








export default function manifest() {
    return {
        name: 'RevionTech - Technology Solutions Provider',
        short_name: 'RevionTech',
        description: 'RevionTech provides cutting-edge web development, app development, AI solutions, graphic design, and digital marketing services.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#1E8A8A',
        orientation: 'portrait-primary',
        icons: [
            {
                src: '/favicon.ico',
                sizes: '64x64 32x32 24x24 16x16',
                type: 'image/x-icon',
            },
            {
                src: '/images/icons/192X192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable any',
            },
            {
                src: '/images/icons/512X512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable any',
            },
        ],
        categories: ['business', 'technology', 'productivity'],
        screenshots: [],
    };
}

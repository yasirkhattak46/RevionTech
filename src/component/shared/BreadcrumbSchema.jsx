'use client';
import { usePathname } from 'next/navigation';

export default function BreadcrumbSchema() {
    const pathname = usePathname();
    
    const generateBreadcrumbs = () => {
        const paths = pathname.split('/').filter(Boolean);
        const breadcrumbs = [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.reviontech.com'
            }
        ];

        let currentPath = 'https://www.reviontech.com';
        paths.forEach((path, index) => {
            currentPath += `/${path}`;
            const name = path
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            
            breadcrumbs.push({
                '@type': 'ListItem',
                position: index + 2,
                name: name,
                item: currentPath
            });
        });

        return breadcrumbs;
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: generateBreadcrumbs()
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
    );
}

export default function ServiceSchema({ serviceData }) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': serviceData.url,
        name: serviceData.name,
        description: serviceData.description,
        provider: {
            '@type': 'Organization',
            name: 'RevionTech',
            url: 'https://www.reviontech.com',
            logo: 'https://www.reviontech.com/images/RevionTech-Logo.webp',
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+92-330-5858969',
                contactType: 'Customer Service',
                email: 'contact@reviontech.com',
            }
        },
        serviceType: serviceData.serviceType,
        areaServed: {
            '@type': 'Place',
            name: 'Worldwide'
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: serviceData.name,
            itemListElement: serviceData.subServices?.map((subService, index) => ({
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: subService.name,
                    description: subService.description
                }
            })) || []
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

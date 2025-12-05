export default function StructuredData() {
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'RevionTech',
        url: 'https://reviontech.com',
        logo: 'https://reviontech.com/images/RevionTech-Logo.webp',
        description: 'RevionTech provides professional Website Development Services, Mobile App Development, AI & SaaS solutions, Graphic Design, and Digital Marketing. Empowering businesses with high-performing, modern, and scalable digital solutions.',
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+92-330-5858969',
            contactType: 'Customer Service',
            email: 'contact@reviontech.com',
            areaServed: 'Worldwide',
            availableLanguage: ['English']
        },
        sameAs: [
            'https://www.facebook.com/reviontech',
            'https://www.linkedin.com/company/reviontech',
            'https://www.instagram.com/revion_tech'
        ],
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'PK'
        }
    };

    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'RevionTech',
        image: 'https://reviontech.com/images/RevionTech-Logo.webp',
        '@id': 'https://reviontech.com',
        url: 'https://reviontech.com',
        telephone: '+92-330-5858969',
        email: 'contact@reviontech.com',
        priceRange: '$$',
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'PK'
        },
        geo: {
            '@type': 'GeoCoordinates'
        },
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            opens: '00:00',
            closes: '23:59'
        }
    };

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'RevionTech',
        url: 'https://reviontech.com',
        potentialAction: {
            '@type': 'SearchAction',
            target: 'https://reviontech.com/search?q={search_term_string}',
            'query-input': 'required name=search_term_string'
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
        </>
    );
}

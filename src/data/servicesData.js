import {
    CodeXml, BrushIcon, ShieldCheck, TabletSmartphone, Headset, SmartphoneIcon, LayoutTemplate, Gauge, AppWindow,
    Users, Zap, Code, Palette, LightbulbIcon, TrendingUp, Brain, Layers, Megaphone,
     PenTool,  PieChart, Target, Sparkles, Headphones, LayoutGrid, Lightbulb
} from 'lucide-react';

export const servicesWhyChooseUsData = {
    'web-development': {
        title: "Why Choose Us",
        subtitle: "Get reliable, fast, and high-performing website development services designed to grow your business online. Our expert team creates responsive, modern, and user-friendly websites that drive engagement, improve conversions, and help your brand succeed in the digital world.",
        features: [
            {
                icon: CodeXml,
                title: 'Modern & Clean Development',
                description: "We build fast, scalable, and modern websites using the latest technologies."
            },
            {
                icon: BrushIcon,
                title: 'Custom UI/UX Design',
                description: "Unique, user-friendly designs tailored to your brand and business goals."
            },
            {
                icon: Zap,
                title: 'High Performance & Speed',
                description: "Optimized websites that load fast and deliver smooth user experiences."
            },
            {
                icon: ShieldCheck,
                title: 'Strong Security & Protection',
                description: "Every website is built with advanced security measures for long-term safety."
            },
            {
                icon: TabletSmartphone,
                title: '100% Responsive',
                description: "Fully responsive layouts that look perfect on mobile, tablet, and desktop."
            },
            {
                icon: Headset,
                title: 'Dedicated Support & Maintenance',
                description: "Reliable ongoing support to keep your website updated and performing well."
            }
        ]
    },
    'app-development': {
        title: "Why Choose Us",
        subtitle: "Get powerful, secure, and high-performing mobile app development services that help your business grow. From concept to launch, every app is crafted with smooth performance, modern design, and a user-first approach.",
        features: [
            {
                icon: SmartphoneIcon,
                title: 'Custom App Development',
                description: "Tailored mobile applications built to match your business vision and goals."
            },
            {
                icon: LayoutTemplate,
                title: 'Intuitive UI/UX Design',
                description: "Clean, user-friendly designs crafted for seamless navigation and engagement."
            },
            {
                icon: Gauge,
                title: 'High Performance Apps',
                description: "Fast, reliable, and optimized apps built for smooth performance on all devices."
            },
            {
                icon: ShieldCheck,
                title: 'Secure & Scalable',
                description: "Advanced security and scalable architecture designed to grow with your business."
            },
            {
                icon: AppWindow,
                title: 'Cross-Platform Support',
                description: "Apps built for iOS and Android with consistent performance and design."
            },
            {
                icon: Headset,
                title: 'Ongoing Support & Updates',
                description: "Continuous improvement, maintenance, and new feature updates whenever needed."
            }
        ]
    },
    'digital-marketing': {
        title: "Why Choose Us",
        subtitle: "Grow your brand with powerful digital marketing strategies designed to boost visibility, attract quality leads, and increase conversions. We deliver data-driven campaigns that maximize ROI and help your business stay ahead in a competitive online landscape.",
        features: [
            {
                icon: TrendingUp,
                title: 'Result Driven Strategies',
                description: "We create data-backed marketing strategies built to increase traffic, leads, and sales."
            },
            {
                icon: PieChart,
                title: 'Advanced Analytics',
                description: "Track performance with clear insights that help improve campaigns continuously."
            },
            {
                icon: Megaphone,
                title: 'Brand Visibility Boost',
                description: "Enhance your online presence with SEO, social media, and targeted advertising."
            },
            {
                icon: Target,
                title: 'Precise Audience Targeting',
                description: "Reach the right audience at the right time for higher conversions and engagement."
            },
            {
                icon: Sparkles,
                title: 'Creative Content Marketing',
                description: "Engaging content crafted to attract, educate, and convert your ideal customers."
            },
            {
                icon: Headphones,
                title: 'Dedicated Support',
                description: "Full assistance throughout your campaigns to ensure consistent growth and success."
            }
        ]
    },
    'graphic-design': {
        title: "Why Choose Us",
        subtitle: "Get creative, impactful, and professional graphic design services that elevate your brand identity. From logos to marketing assets, every design is crafted with precision to engage your audience and strengthen your visual presence.",
        features: [
            {
                icon: Palette,
                title: 'Creative & Modern Designs',
                description: "Fresh, unique, and visually appealing designs tailored to your brand."
            },
            {
                icon: PenTool,
                title: 'Brand-Focused Approach',
                description: "Every design aligns with your brand story for consistent visual identity."
            },
            {
                icon: LayoutGrid,
                title: 'High-Quality Deliverables',
                description: "Print-ready and web-optimized files delivered in premium quality formats."
            },
            {
                icon: Lightbulb,
                title: 'Concept to Completion',
                description: "From brainstorming to final design, everything is crafted with detail."
            },
            {
                icon: Layers,
                title: 'Versatile Design Solutions',
                description: "Logos, social media, brochures, banners, ads, and complete branding kits."
            },
            {
                icon: Headset,
                title: 'Responsive Communication',
                description: "Smooth workflow with quick updates, revisions, and dedicated support."
            }
        ]
    },
    'ai-solutions': {
        title: "Why Choose Our AI Solutions",
        subtitle: "Harness the power of artificial intelligence to transform your business operations, automate processes, and gain competitive advantages in your industry.",
        features: [
            {
                icon: Brain,
                title: 'AI Expertise',
                description: 'Our team of AI specialists brings deep expertise in machine learning, natural language processing, and computer vision to solve complex business challenges.'
            },
            {
                icon: LightbulbIcon,
                title: 'Innovative Solutions',
                description: 'We develop cutting-edge AI solutions that leverage the latest advancements in artificial intelligence to deliver tangible business value.'
            },
            {
                icon: Zap,
                title: 'Rapid Implementation',
                description: 'Our agile approach enables quick deployment of AI solutions, allowing you to start realizing benefits faster.'
            },
            {
                icon: Code,
                title: 'Custom AI Models',
                description: 'We build custom AI models tailored to your specific business needs and data, ensuring optimal performance and accuracy.'
            },
            {
                icon: Users,
                title: 'Ethical AI Practices',
                description: 'We implement responsible AI practices that ensure fairness, transparency, and compliance with industry regulations.'
            },
            {
                icon: ShieldCheck,
                title: 'Secure & Private',
                description: 'We prioritize data security and privacy in all our AI solutions, implementing robust measures to protect your sensitive information.'
            }
        ]
    }
};

// Sub-services data for each main service
export const subServicesData = {
    'web-development': {
        title: "Website Development",
        services: [

            {
                "id": 1,
                "title": "Custom Website Development",
                "description": "Fully tailored websites built from scratch to match your brand, goals, and user needs. Designed for performance, scalability, and a smooth user experience that helps your business stand out online.",
                "image": "https://images.unsplash.com/photo-1502882707212-44ec4f6b78c8?w=800&h=600&fit=crop",
                "features": ["Custom Design", "Scalable Architecture", "SEO Optimized", "Fast Performance"]
            },
            {
                "id": 2,
                "title": "eCommerce Website Development",
                "description": "High-performing online stores with secure checkout, easy product management, and smooth shopping experiences. Designed to increase conversions, improve customer trust, and scale with your business growth.",
                "image": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
                "features": ["Secure Payments", "Product Management", "Conversion Ready", "Mobile Optimized"]
            },
            {
                "id": 3,
                "title": "Web Application Development",
                "description": "Powerful, feature-rich web applications built for speed, security, and seamless user experience. Ideal for businesses needing complex workflows, automation, or custom digital tools.",
                "image": "https://images.unsplash.com/photo-1556484687-30636164638b?w=800&h=600&fit=crop",
                "features": ["Custom Logic", "High Security", "API Ready", "Real-Time Features"]
            },
            {
                "id": 4,
                "title": "Business Portals Development",
                "description": "Robust business portals designed to streamline operations, automate processes, and deliver a seamless interaction experience for customers, employees, or partners.",
                "image": "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
                "features": ["User Management", "Role-Based Access", "Secure Data", "Workflow Automation"]
            },
            {
                "id": 5,
                "title": "WordPress Website Development",
                "description": "Flexible and easy-to-manage WordPress websites that offer complete control over content, design, and scalability. Ideal for blogs, portfolios, business websites, and landing pages.",
                "image": "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
                "features": ["Easy Management", "Custom Themes", "Plugin Integration", "SEO Ready"]
            },
            {
                "id": 6,
                "title": "CMS Website Development",
                "description": "Custom CMS platforms tailored to your business needs, giving you complete control over content and structure. Built for flexibility, easy updates, and long-term scalability.",
                "image": "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=800&h=600&fit=crop",
                "features": ["Content Control", "Secure Backend", "Custom Modules", "Multi-User Access"]
            },
            {
                "id": 7,
                "title": "API Integration Services",
                "description": "Seamless integration of third-party APIs to boost functionality, automate workflows, and improve system connectivity. Perfect for payment gateways, CRMs, ERPs, and custom tools.",
                "image": "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&h=600&fit=crop",
                "features": ["Secure Integration", "Custom Endpoints", "Automation Ready", "Reliable Performance"]
            },
            {
                "id": 8,
                "title": "Website Support and Maintenance",
                "description": "Reliable maintenance services to keep your website updated, secure, and running smoothly. Includes backups, monitoring, bug fixes, and regular performance improvements.",
                "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
                "features": ["Regular Updates", "Security Checks", "Bug Fixes", "Performance Monitoring"]
            }
        ]
    },
    'app-development': {
            title: "Mobile App Development",
            services: [
                {
                    "id": 1,
                    "title": "Custom Mobile Apps",
                    "description": "Tailored mobile applications built from the ground up to match your business needs. Designed for smooth performance, modern UI, and seamless functionality on both Android and iOS platforms.",
                    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
                    "features": ["Custom UI UX", "High Performance", "Future Ready", "Cross Platform"]
                },
                {
                    "id": 2,
                    "title": "iOS App Development",
                    "description": "High quality iOS applications built with Apple guidelines in mind. Optimized for speed, security, and user experience to ensure top performance on all iPhone and iPad devices.",
                    "image": "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a1?w=800&h=600&fit=crop",
                    "features": ["Swift Development", "Secure Architecture", "Smooth Performance", "App Store Ready"]
                },
                {
                    "id": 3,
                    "title": "Android App Development",
                    "description": "Powerful and scalable Android applications built for all device types. Crafted for smooth navigation, fast load time, and compatibility with the latest Android versions.",
                    "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop",
                    "features": ["Java Kotlin", "Device Compatibility", "Optimized UI", "High Scalability"]
                },
                {
                    "id": 4,
                    "title": "Cross Platform Apps",
                    "description": "Develop once and launch everywhere with efficient cross-platform mobile applications. Built with modern frameworks for consistent performance on both Android and iOS.",
                    "image": "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=800&h=600&fit=crop",
                    "features": ["React Native", "Cost Efficient", "Unified Codebase", "Fast Deployment"]
                },
                {
                    "id": 5,
                    "title": "Mobile App UI UX Design",
                    "description": "User centered mobile app designs focused on clarity, simplicity, and engagement. Crafted to deliver seamless interactions and a visually appealing experience.",
                    "image": "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop",
                    "features": ["Clean Interface", "User Research", "Interactive Prototypes", "Modern Aesthetics"]
                },
                {
                    "id": 6,
                    "title": "App Maintenance Support",
                    "description": "Reliable post launch support to ensure your app stays updated, secure, and fully optimized. Includes bug fixes, updates, improvements, and long term monitoring.",
                    "image": "https://images.unsplash.com/photo-1587620931284-4b8b3aa0bbd5?w=800&h=600&fit=crop",
                    "features": ["24 7 Support", "Regular Updates", "Bug Fixing", "Performance Tracking"]
                }
            ]

        },
    'digital-marketing': {
        title: "Digital Marketing",
        services: [
            {
                "id": 1,
                "title": "Social Media Marketing",
                "description": "Strategic social media campaigns that build engagement, grow your audience, and strengthen your brand presence across all major platforms through creative content and data-driven results.",
                "image": "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&h=600&fit=crop",
                "features": ["Creative Strategies", "Audience Targeting", "Brand Awareness", "Performance Tracking"]
            },
            {
                "id": 2,
                "title": "Search Engine Optimization",
                "description": "SEO solutions focused on improving keyword rankings, boosting organic traffic, and helping your business appear where your customers are searching the most.",
                "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
                "features": ["On-Page SEO", "Technical SEO", "Keyword Research", "Analytics Tracking"]
            },
            {
                "id": 3,
                "title": "Paid Advertising Campaigns",
                "description": "Targeted PPC and paid ads on Google, Facebook, and Instagram that maximize visibility, attract quality leads, and deliver measurable ROI through optimized ad strategies.",
                "image": "https://images.unsplash.com/photo-1551817958-20204d6ab4c0?w=800&h=600&fit=crop",
                "features": ["High ROI", "Targeted Ads", "Budget Optimization", "Real-Time Reports"]
            },
            {
                "id": 4,
                "title": "Content Marketing",
                "description": "High quality content that educates, inspires, and converts. From blogs to landing pages, each piece is crafted to strengthen your brand and improve search visibility.",
                "image": "https://images.unsplash.com/photo-1522199710521-72d69614c702?w=800&h=600&fit=crop",
                "features": ["SEO Content", "Brand Voice", "Topic Research", "High Engagement"]
            },
            {
                "id": 5,
                "title": "Email Marketing Automation",
                "description": "Smart email campaigns that nurture leads, boost conversions, and maintain customer relationships using automated flows and targeted messaging.",
                "image": "https://images.unsplash.com/photo-1581091012160-1c66179d891b?w=800&h=600&fit=crop",
                "features": ["Automated Flows", "Lead Nurturing", "Personalized Emails", "Performance Reports"]
            }
        ]

    },
    'graphic-design': {
        title: "Graphic Design",
        services: [
                {
                    "id": 1,
                    "title": "Brand Identity Design",
                    "description": "Professional brand identity design that builds trust and creates a powerful visual presence. From logos to complete brand systems, everything is crafted to match your business style and connect strongly with your target audience.",
                    "image": "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&h=600&fit=crop",
                    "features": ["Custom Concepts", "Brand Guidelines", "High-Quality Vector Files", "Consistent Branding"]
                },
                {
                    "id": 2,
                    "title": "Logo Design Services",
                    "description": "Creative and memorable logo designs that represent your brand’s personality. Each logo is carefully crafted to be modern, versatile, and suitable for print, digital platforms, and long-term brand recognition.",
                    "image": "https://images.unsplash.com/photo-1586717791821-3f44a03a6bb7?w=800&h=600&fit=crop",
                    "features": ["Multiple Variations", "Modern Styles", "Editable Source Files", "High Resolution"]
                },
                {
                    "id": 3,
                    "title": "Social Media Graphics",
                    "description": "High-quality and eye-catching social media designs tailored for engagement. Perfect for boosting your online presence with beautifully crafted posts, ads, stories, and banners that strengthen your brand identity.",
                    "image": "https://images.unsplash.com/photo-1603898037225-1bea5d5a9ecc?w=800&h=600&fit=crop",
                    "features": ["Platform Optimized", "Ad-Ready Designs", "Custom Templates", "High Engagement"]
                },
                {
                    "id": 4,
                    "title": "Print and Marketing Design",
                    "description": "Professional print design services including brochures, flyers, business cards, and marketing materials. Each design combines creativity and clarity to ensure your message stands out both online and offline.",
                    "image": "https://images.unsplash.com/photo-1584267385494-9fddf0d0c1d1?w=800&h=600&fit=crop",
                    "features": ["Print-Ready Files", "Premium Layouts", "Clear Messaging", "High-Resolution Output"]
                },
                {
                    "id": 5,
                    "title": "UI UX Design",
                    "description": "User-centered UI UX design for websites, apps, and digital products. Clean, intuitive, and modern interfaces built to improve user engagement, reduce friction, and elevate the overall customer experience.",
                    "image": "https://images.unsplash.com/photo-1559027615-9731d6f3eabd?w=800&h=600&fit=crop",
                    "features": ["User Research", "Interactive Prototypes", "Modern Layouts", "Improved Usability"]
                }
            ]

    },
    'ai-solutions': {
        title: "Ai-Solutions",
        services:[
            {
                "id": 1,
                "title": "AI Automation Systems",
                "description": "Smart AI-driven automation tools that reduce manual workload, optimize workflows, and improve overall business efficiency with intelligent decision-making capabilities.",
                "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
                "features": ["Process Automation", "Smart Decision Making", "Scalable Architecture", "Fast Performance"]
            },
            {
                "id": 2,
                "title": "Custom AI Development",
                "description": "Tailor-made AI solutions built around your business needs, including prediction models, intelligent analysis, and smart automation to boost growth and performance.",
                "image": "https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=800&h=600&fit=crop",
                "features": ["Custom Models", "Predictive Analytics", "High Accuracy", "Future-Proof"]
            },
            {
                "id": 3,
                "title": "Chatbot and Virtual Assistants",
                "description": "AI-powered chatbots designed to improve customer support, automate conversations, and deliver instant responses across websites, apps, and social platforms.",
                "image": "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800&h=600&fit=crop",
                "features": ["24/7 Support", "Multi-Platform", "Human-Like Interaction", "High Engagement"]
            },
            {
                "id": 4,
                "title": "AI Data Analytics",
                "description": "Powerful AI analytics to turn raw data into insights, helping businesses improve decision-making, identify trends, and operate with greater clarity.",
                "image": "https://images.unsplash.com/photo-1539586345401-42c212d4c1b2?w=800&h=600&fit=crop",
                "features": ["Data Insights", "Trend Analysis", "Accurate Reporting", "Smart Predictions"]
            },
            {
                "id": 5,
                "title": "Machine Learning Solutions",
                "description": "ML-based systems that learn from your data and enhance business operations, from recommendation engines to intelligent prediction models.",
                "image": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop",
                "features": ["Self-Learning Models", "High Performance", "Advanced Algorithms", "Scalable Solutions"]
            }
        ]

    }
};

// Helper function to get sub-services
export const getSubServices = (serviceSlug) => {
    return subServicesData[serviceSlug] || [];
};

// Helper function to get service data
export const getWhyChooseUsData = (serviceSlug) => {
    return servicesWhyChooseUsData[serviceSlug] || servicesWhyChooseUsData['web-development'];
};
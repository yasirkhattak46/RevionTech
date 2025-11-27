import {
    Award, Users, Zap, Code, Palette, Clock,
    Monitor, Search, Shield, Smartphone, TrendingUp, Brain, ShoppingCart
} from 'lucide-react';

export const servicesWhyChooseUsData = {
    'web-development': {
        title: "Why Choose Our Web Development Services",
        subtitle: "Partner with a team that combines technical expertise with creative innovation to deliver exceptional web solutions that drive business growth and exceed expectations.",
        features: [
            {
                icon: Award,
                title: 'Award-Winning Solutions',
                description: 'Our innovative web solutions have been recognized with industry awards, demonstrating our commitment to excellence and cutting-edge technology implementation.'
            },
            {
                icon: Users,
                title: 'Expert Team',
                description: 'Work with certified web development professionals who bring years of experience across diverse industries, ensuring tailored solutions that drive real business results.'
            },
            {
                icon: Zap,
                title: 'Lightning Fast Delivery',
                description: 'Our agile development process ensures rapid project completion without compromising on quality, getting your web solutions to market faster.'
            },
            {
                icon: Code,
                title: 'Clean Code Practices',
                description: 'We follow industry best practices with clean, maintainable code that ensures scalability, security, and easy future enhancements for your web applications.'
            },
            {
                icon: Palette,
                title: 'Pixel-Perfect Design',
                description: 'Our design team creates visually stunning interfaces that perfectly balance aesthetics with user experience for maximum engagement.'
            },
            {
                icon: Monitor,
                title: 'Fully Responsive',
                description: 'All our web development projects are built with responsive design principles, ensuring optimal viewing experience across all devices and screen sizes.'
            }
        ]
    },
    'app-development': {
        title: "Why Choose Our App Development Services",
        subtitle: "Experience cutting-edge mobile application development that transforms your ideas into powerful, user-friendly apps that captivate your audience and drive business growth.",
        features: [
            {
                icon: Award,
                title: 'Award-Winning Solutions',
                description: 'Our innovative app solutions have been recognized with industry awards, demonstrating our commitment to excellence and cutting-edge technology implementation.'
            },
            {
                icon: Smartphone,
                title: 'Cross-Platform Expertise',
                description: 'We build native and cross-platform mobile applications for iOS and Android, ensuring optimal performance and user experience on all devices.'
            },
            {
                icon: Zap,
                title: 'Rapid Prototyping',
                description: 'Our agile development process enables quick prototyping and iterative development, allowing you to see and test your app early in the development cycle.'
            },
            {
                icon: Code,
                title: 'Clean Code Practices',
                description: 'We follow industry best practices with clean, maintainable code that ensures scalability, security, and easy future enhancements for your mobile apps.'
            },
            {
                icon: Users,
                title: 'User-Centered Design',
                description: 'Our design team focuses on creating intuitive, engaging user interfaces that enhance user experience and drive app adoption.'
            },
            {
                icon: Shield,
                title: 'Secure & Scalable',
                description: 'We implement robust security measures and scalable architecture to ensure your app can grow with your business needs.'
            }
        ]
    },
    'digital-marketing': {
        title: "Why Choose Our Digital Marketing Services",
        subtitle: "Leverage data-driven digital marketing strategies that boost your online visibility, attract qualified leads, and maximize your return on investment.",
        features: [
            {
                icon: Award,
                title: 'Proven Results',
                description: 'Our data-driven marketing strategies have consistently delivered measurable results for businesses across various industries.'
            },
            {
                icon: TrendingUp,
                title: 'Performance Focused',
                description: 'We focus on key performance indicators that matter to your business, ensuring every marketing dollar delivers maximum ROI.'
            },
            {
                icon: Search,
                title: 'SEO Expertise',
                description: 'Our SEO specialists stay updated with the latest algorithm changes to ensure your website ranks higher in search results.'
            },
            {
                icon: Users,
                title: 'Targeted Campaigns',
                description: 'We create highly targeted campaigns that reach your ideal customers at the right time with the right message.'
            },
            {
                icon: Zap,
                title: 'Real-Time Analytics',
                description: 'Access real-time analytics and insights to track campaign performance and make data-driven decisions.'
            },
            {
                icon: Clock,
                title: '24/7 Campaign Management',
                description: 'Our team monitors and optimizes your campaigns around the clock to ensure maximum performance and results.'
            }
        ]
    },
    'ui-ux-design': {
        title: "Why Choose Our UI/UX Design Services",
        subtitle: "Transform your digital products with user-centered design solutions that enhance engagement, improve usability, and drive business success.",
        features: [
            {
                icon: Award,
                title: 'Award-Winning Designs',
                description: 'Our innovative design solutions have been recognized with industry awards, demonstrating our commitment to excellence and creativity.'
            },
            {
                icon: Palette,
                title: 'User-Centered Approach',
                description: 'We put users at the center of our design process, creating intuitive interfaces that enhance user experience and satisfaction.'
            },
            {
                icon: Users,
                title: 'Expert Design Team',
                description: 'Work with certified UI/UX designers who bring years of experience across diverse industries and design challenges.'
            },
            {
                icon: Zap,
                title: 'Rapid Prototyping',
                description: 'Our design process includes rapid prototyping and user testing to validate concepts early and reduce development risks.'
            },
            {
                icon: Code,
                title: 'Design-Development Bridge',
                description: 'We create detailed design specifications and collaborate closely with development teams to ensure perfect implementation.'
            },
            {
                icon: Monitor,
                title: 'Cross-Platform Consistency',
                description: 'We design consistent experiences across all platforms and devices, maintaining brand integrity and user familiarity.'
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
                icon: Award,
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
                icon: Shield,
                title: 'Secure & Private',
                description: 'We prioritize data security and privacy in all our AI solutions, implementing robust measures to protect your sensitive information.'
            }
        ]
    }
};

// Helper function to get service data
export const getWhyChooseUsData = (serviceSlug) => {
    return servicesWhyChooseUsData[serviceSlug] || servicesWhyChooseUsData['web-development'];
};
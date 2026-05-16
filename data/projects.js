/**
 * MAX DEV - Projects Data Configuration
 * All projects with metadata for portfolio showcase
 * Pricing in Kenyan Shillings (KES) - Max 50,000 KES per project
 * Pricing in Kenyan Shillings (KES) - Max 50,000 KES per project
 */

export const projectsData = [
    {
        id: 1,
        emoji: "🛒",
        title: "CHUKA WHOLESALERS",
        subtitle: "E-Commerce System",
        description: "Full-scale online retail and wholesale e-commerce platform with product browsing, category navigation, and order management. Scalable architecture optimized for performance and user experience.",
        fullDescription: "This comprehensive e-commerce solution provides a complete shopping experience with inventory management, secure payment processing, and order tracking. Built with modern web technologies for reliability and performance.",
        category: "e-commerce",
        price: "$800",
        priceValue: 800,
        tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
        techDetails: {
            frontend: "React with Tailwind CSS for responsive design",
            backend: "Node.js/Express RESTful API",
            database: "PostgreSQL with optimized queries",
            payment: "Stripe integration for secure transactions",
            hosting: "Vercel + Railway"
        },
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGKrwOC0HJI4QsKvtHto1hrh8xjPAaysKj41Ap-4ZSe0jN5SNc6EzmSlfc__5VVxU11lKOs3MHeFnlEtBKAuq8l-JR7IpRz5ht9xr0WavCA0h5sDGC1j04xj0KATJCRL2rJKCx5CVu-zWHR_lhJLRqpavHO5xI_99qAQP3cM1hRqw-0gZikjpJUfCZ0hQIu03s_wAcSYVqelVpp-u_ghRCNt4yy1JXnJiVnIcX7txCm7xxgd3vGVUa71LDqWRshn_YsXSeREbBjQ",
        liveUrl: "https://chukawholesalers.vercel.app/",
        githubUrl: "#",
        caseStudyUrl: "#",
        featured: true,
        highlights: [
            "95%+ performance score",
            "Sub-second page load time",
            "Mobile-first responsive design",
            "SEO optimized"
        ],
        metrics: {
            users: "10K+ active",
            products: "5,000+",
            orders: "Monthly transactions",
            conversionRate: "3.2%"
        }
    },
    {
        id: 2,
        emoji: "📊",
        title: "BUSINESS SOLUTION PLATFORM",
        subtitle: "Financial Management System",
        description: "Digital business management system for tracking profits, losses, and financial performance. Clean dashboard interface for comprehensive business analytics and data visualization.",
        fullDescription: "Enterprise-grade financial management platform with real-time analytics, reporting, and forecasting capabilities. Designed for businesses of all sizes to track financial health and make data-driven decisions.",
        category: "business",
        price: "$600",
        priceValue: 600,
        tech: ["Next.js", "Chart.js", "Firebase", "Tailwind"],
        techDetails: {
            frontend: "Next.js for SSR and SSG",
            charts: "Chart.js for rich data visualization",
            database: "Firebase Firestore for real-time updates",
            styling: "Tailwind CSS with custom design system",
            hosting: "Vercel with edge functions"
        },
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALCJdgLcc2bwuGFa6fZCyAgGT8_2VZqduU7vd4B2KhQgQaZtW0GxOzZyGq3IjxPnuV9aJRyXZOeMkCmxwuq1KZzOengwdQ8_hTPJFCtiwMEZvGHwcITv-YduIGXgK6NKx53_-eFLVA0vg8HXFSzf3as3C4QbYfpaeyeSeLNDJKnvNecdqn05nvi4LIiAbvxqoymuCun0S4Ptr5TUq9D7C8YiKjTrhEmhh-7VCl5f_RFIojWCZEQtdG33-uuylSAR7GzKjR6SdfoQ",
        liveUrl: "https://business-solution-seven.vercel.app/index.html",
        githubUrl: "#",
        caseStudyUrl: "#",
        featured: false,
        highlights: [
            "Real-time analytics dashboard",
            "Profit/Loss tracking",
            "Financial forecasting",
            "Expense categorization"
        ],
        metrics: {
            businesses: "500+",
            transactions: "100K+",
            uptime: "99.9%",
            avgDailyUsers: "2K+"
        }
    },
    {
        id: 3,
        emoji: "🍪",
        title: "MITAI DELIGHT",
        subtitle: "Landing Page",
        description: "Modern Swahili snack landing page built for branding and product marketing. Features smooth UI transitions and visually appealing product presentation.",
        fullDescription: "Premium landing page for a Kenyan snack brand with engaging product showcases, customer testimonials, and conversion-optimized call-to-action sections.",
        category: "e-commerce",
        price: "$400",
        priceValue: 400,
        tech: ["HTML5", "CSS3", "JavaScript", "Swiper.js"],
        techDetails: {
            markup: "Semantic HTML5",
            styling: "Advanced CSS3 animations",
            interactivity: "Vanilla JavaScript",
            carousel: "Swiper.js for product gallery",
            hosting: "Vercel CDN for fast delivery"
        },
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrWazNxuUVh8qEX4RxfraxRfrue34xkMB-BqnQGI8ws-_H6kuigqHSo-siuv6yfAMt-VF6aK8spD5q1vVZiOASa9S7PraQ4K1El7IN8jr_uCm3zb1LysJ_OxaI35aavLc3tyKT0dkSzoSDI2U6vZ94iKAo4I7AsOMi8TavgX_R12dfhL26h9-2KReomcobxdhnzraYKuWy-i_90TmUUkY-MUKJSTfP4YwFOYh5eKJ5DgsMbg9ckjlauxRqJo96yiAmoH1NpbXWyQ",
        liveUrl: "https://mitai-delight.vercel.app/",
        githubUrl: "#",
        caseStudyUrl: "#",
        featured: false,
        highlights: [
            "Smooth scroll animations",
            "Product showcase carousel",
            "Mobile-optimized",
            "Fast load times"
        ],
        metrics: {
            visitors: "5K/month",
            avgSessionDuration: "2m 30s",
            bounceRate: "22%",
            conversionRate: "4.1%"
        }
    },
    {
        id: 4,
        emoji: "🎂",
        title: "HAPPY BIRTHDAY PROGRAMMER",
        subtitle: "Interactive Website",
        description: "Interactive celebration website designed for personalized birthday experiences with animations, storytelling UI, and creative visual effects.",
        fullDescription: "A delightful interactive experience combining advanced animations, 3D effects, and personalized messaging to create memorable birthday celebrations.",
        category: "event",
        price: "$350",
        priceValue: 350,
        tech: ["React", "Framer Motion", "Tailwind", "Three.js"],
        techDetails: {
            frontend: "React component architecture",
            animations: "Framer Motion for fluid interactions",
            styling: "Tailwind CSS with custom animations",
            3d: "Three.js for 3D visual effects",
            hosting: "Vercel with optimized bundle"
        },
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1wN-rqglZTwipdcitldTo8hm0Vqd1rC7rAwHHumPfsKbKmvB2NR2heMj5DvTOaFpbIKaJcumx5F5Tbe4vmuumTZxvPxM5XjTmJ4VEBtG81NMA1BxG1tqU2Yc9gWkw7f_MAX0l-OCqyKi_qig-FWdbyyZPHEJagb1Bkfl5hu_i1QNAfLPozh_WzZwIv_BBYhXVKaSHR9F3BHjZtJ96aUhdeAnUrCpja285hcI1bk2oOpHsf0H621oHyI5DI5dLK-br2lN81o-r1w",
        liveUrl: "https://rono-birthday.vercel.app/",
        githubUrl: "#",
        caseStudyUrl: "#",
        featured: false,
        highlights: [
            "Advanced animations",
            "Personalized messages",
            "3D visual effects",
            "Share functionality"
        ],
        metrics: {
            events: "100+",
            avgDuration: "3m 45s",
            socialShares: "250+",
            returning: "35%"
        }
    },
    {
        id: 5,
        emoji: "🎥",
        title: "MAXMOVIES STREAMING",
        subtitle: "Entertainment Platform",
        description: "Modern entertainment streaming platform with channel navigation, embedded media, and structured video browsing experience for content discovery.",
        fullDescription: "Full-featured streaming platform with adaptive bitrate streaming, content recommendations, and user watchlist management for seamless media consumption.",
        category: "entertainment",
        price: "$950",
        priceValue: 950,
        tech: ["Next.js", "HLS Streaming", "AWS", "Redis"],
        techDetails: {
            frontend: "Next.js with incremental static generation",
            streaming: "HLS protocol for adaptive quality",
            infrastructure: "AWS EC2 + S3 for media storage",
            caching: "Redis for content recommendations",
            hosting: "Vercel with AWS origin"
        },
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBESd6uYnY-eWdLhXqTj4xwhsorHp1weAkygGT3N4VHfy_fSxzlirw_W5_kzMOoINGw_X7pieJjqhYY2dv7IHOzTb0HGb00anEt3jjnK8E--efkml4W7Fe5PwxCihUdw1Ro52PC0Toc4C56BQV-zxBOucLKjkS64HoLvtMSel-SaF7pRoSQ__fEyzXkvqRNTdv335Hq2HEZMA89VdnqgMcwTGLAG5CRL1ECFNnFjHsujXXLD6lZZiJL8zi0WzljWOmIrKlZzg6lhg",
        liveUrl: "https://maxmovies-254.vercel.app/channels.html",
        githubUrl: "#",
        caseStudyUrl: "#",
        featured: true,
        highlights: [
            "4K streaming support",
            "Smart recommendations",
            "Offline downloads",
            "Multi-device sync"
        ],
        metrics: {
            videoHours: "1000+",
            activeUsers: "15K+",
            avgWatchtime: "4h/week",
            retention: "78%"
        }
    },
    {
        id: 6,
        emoji: "📲",
        title: "MAXMOVIES APP",
        subtitle: "Installation Page",
        description: "Dedicated installation page for the MaxMovies AI app, allowing users to access setup instructions and install the application smoothly.",
        fullDescription: "Streamlined installation experience with system requirement checks, one-click installation, and automatic updates for the MaxMovies desktop application.",
        category: "entertainment",
        price: "$450",
        priceValue: 450,
        tech: ["React", "Electron", "WebPack", "Auto-Update"],
        techDetails: {
            framework: "Electron for cross-platform desktop app",
            bundler: "Webpack with code splitting",
            updates: "Electron-updater for auto-updates",
            installation: "NSIS installer for Windows",
            hosting: "GitHub releases with Vercel landing"
        },
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCY5DB8wPxFdQtyyXIuABxr22S0PueN1Glp1gxJs40BIz4wxknLgjQWKj5RcZLWJjN5ZDxmZefD3LdbHposwsmvkkwMdtlsvM-sMH_LpOIdARUAAW9E45o5dMuJ3kM0Yz2XSa9bNhOLh2BI9DsgY4UYdVurQR9CvptIMjqrf5Vx5EYkdC-2FyfeZ7T15limgd0aVv_6zJUCrPgimmItfEz73td90qevixUHh1hds4RCJmI-ZY4BAoY7U5_m_Pnv9XmRqoGoLn8ScQ",
        liveUrl: "https://maxmovies-254.vercel.app/install.html",
        githubUrl: "#",
        caseStudyUrl: "#",
        featured: false,
        highlights: [
            "One-click installation",
            "Auto-updates",
            "System requirements check",
            "Multi-platform support"
        ],
        metrics: {
            downloads: "25K+",
            activeInstalls: "8K+",
            avgRating: "4.7/5",
            updateFrequency: "Monthly"
        }
    },
    {
        id: 7,
        emoji: "🎓",
        title: "CRIMINOLOGY HUB",
        subtitle: "Education Platform",
        description: "Online learning platform where students can upload resources, chat, and collaborate in real time with comprehensive educational content sharing and community features.",
        fullDescription: "Interactive learning ecosystem with live chatrooms, resource libraries, assignment submissions, and peer-to-peer collaboration tools for criminology students.",
        category: "education",
        price: "$850",
        priceValue: 850,
        tech: ["React", "Socket.io", "MongoDB", "Express"],
        techDetails: {
            frontend: "React with Redux state management",
            realtime: "Socket.io for live messaging",
            database: "MongoDB for flexible data storage",
            backend: "Express.js REST API",
            hosting: "Vercel frontend + Railway backend"
        },
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsGcpFvw4r4HdUzczSpyVkRZphAq_Zw3KLMooHPa5gc_-ReaazTNeI51C0TPZ8mKB5pA5-VvJol68QfFGvfqWRv5GDMa6o0mdZiYBXY8znBJFDxSJwD-IFzwZHlArdzvaaVO-koszY8Bhc_Nsm1BvYcm0Dujo6g_n0-w9JWhhB2FHcU_OIxt1b3EQfXwvhiKSeNw8QCSvd-JgdfOJx0myO7bhgqmFVBuadNW6hViGHQMZ4SeO43gnsNqbN_G5hVbFLAZSCip633w",
        liveUrl: "https://criminologyhub.vercel.app/",
        githubUrl: "#",
        caseStudyUrl: "#",
        featured: false,
        highlights: [
            "Real-time chat",
            "Resource sharing",
            "Assignment tracking",
            "Discussion forums"
        ],
        metrics: {
            students: "2K+",
            courses: "50+",
            resources: "5K+",
            activeDaily: "400+"
        }
    },
    {
        id: 8,
        emoji: "🛍",
        title: "E-COMMERCE DEMO",
        subtitle: "Sofas Store",
        description: "Sample e-commerce platform showcasing product browsing, shopping flow, and modern UI design for premium online retail systems.",
        fullDescription: "High-end furniture retail platform with detailed product catalogs, interactive product visualization, and streamlined checkout experience.",
        category: "e-commerce",
        price: "$700",
        priceValue: 700,
        tech: ["React", "Stripe API", "Node.js", "PostgreSQL"],
        techDetails: {
            frontend: "React with hooks and context API",
            payments: "Stripe payment gateway integration",
            backend: "Node.js/Express REST API",
            database: "PostgreSQL with Redis caching",
            hosting: "Vercel + Railway"
        },
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfy7ROEqSZpraRNtBT9ga32QYtMNUKBuf4AAgRsRphoTHt9xVL2lRQ_XygDIdtqw65VFVLw569HrzAQKtnXw3t6c5hhPvjrMTjyXcXkP_SDHLV5h5buS9UNuj--3PwH4ERUev1-zfZp3hC536Yu5Ihx5CYMOZU59X4xPl95PV6hXLaFQ5Ho1FCDyLAA5nuUL0VMyl9P79VzxBm7_FcetsUTIeO5EhTi9OnWO1V1yfmUnl33NLXiDABUUUSOXiIAXSBw4w0aAyrXg",
        liveUrl: "https://e-commerce-alpha-seven-86.vercel.app/",
        githubUrl: "#",
        caseStudyUrl: "#",
        featured: false,
        highlights: [
            "Product catalog",
            "Shopping cart",
            "Secure checkout",
            "Order tracking"
        ],
        metrics: {
            products: "200+",
            monthlyVisitors: "8K",
            conversionRate: "2.8%",
            avgOrderValue: "KES 15,000"
        }
    },
    {
        id: 9,
        emoji: "🎟",
        title: "TICKETING SYSTEM",
        subtitle: "Booking Platform",
        description: "Booking system designed for managing event tickets, reservations, and user-friendly booking workflows with payment integration.",
        fullDescription: "Enterprise ticketing solution with dynamic pricing, seat selection, QR code generation, and comprehensive event management dashboard.",
        category: "business",
        price: "$650",
        priceValue: 650,
        tech: ["Next.js", "Stripe", "PostgreSQL", "QR Code Gen"],
        techDetails: {
            frontend: "Next.js with incremental static regeneration",
            payments: "Stripe for secure transactions",
            database: "PostgreSQL with JSONB for flexibility",
            qrcodes: "QR code generation with node-qrcode",
            hosting: "Vercel with serverless functions"
        },
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFGp8rAs48sKlnbf4fSEgYed2xez1G1a4LdHpozGCIPRxnXrbfXU2iXyjjC2SjlkVtChbMyx3LcuJh3Mq3LLJAKgb_E3XWFILqSv_ZP_ll4N_xS1sJovj2ctz-70sXQKJrgP7BthCJnOz7lSnc2hiwbxJYwWC2KpoZERhO4KIuX2DE7Qqj1lIEqxASvrpWkm1jNwvKOFBIFYKrr1B9S4pGvBll_lIlIdYlZx833hLEukXcOn-WH8dHgQnZs1kRDwPhDxMOXWSCXw",
        liveUrl: "https://ticketingsample.vercel.app/",
        githubUrl: "#",
        caseStudyUrl: "#",
        featured: false,
        highlights: [
            "Seat selection",
            "QR tickets",
            "Dynamic pricing",
            "Email confirmation"
        ],
        metrics: {
            events: "150+",
            ticketsSold: "50K+",
            avgTicketPrice: "KES 2,500",
            systemUptime: "99.99%"
        }
    },
    {
        id: 10,
        emoji: "🎉",
        title: "BIRTHDAY EVENT WEBSITE",
        subtitle: "Celebration Platform",
        description: "Creative event-based website for birthday celebrations with animations, visuals, and interactive UI components for memorable experiences.",
        fullDescription: "Immersive birthday celebration platform with countdown timers, guest galleries, interactive games, and social sharing capabilities.",
        category: "event",
        price: "$400",
        priceValue: 400,
        tech: ["React", "Gsap", "Three.js", "Tailwind"],
        techDetails: {
            frontend: "React with functional components",
            animations: "GSAP for complex timeline animations",
            3d: "Three.js for immersive 3D elements",
            styling: "Tailwind CSS with custom animations",
            hosting: "Vercel with edge caching"
        },
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVawKL66L96HlgHYN3drrMImVLyDec-b7xv8WovJEdAm4VyltWFsP75ckiVN0q0QqcYfj2HFuVrLcFQgpmkSvPD9aFKoXIhz8QLqghvLGZ--MwWsF6XD-L2bW2sdJCA-uAVep0rqgxlCV9ribA3RTK7UuIUT0Fh-l18aYfJXY9miQCT7dGCyULECnVP6B4UwwiufXVGvYl4xCo9ToYu_5H5CRVhaOQXrQrXwuRS23oR7weGPQO5rGYiD-pPVnNwwyJiUlSP-aChg",
        liveUrl: "https://birthdaywebsite-seven.vercel.app/",
        githubUrl: "#",
        caseStudyUrl: "#",
        featured: false,
        highlights: [
            "Countdown timer",
            "Photo gallery",
            "Interactive games",
            "Social sharing"
        ],
        metrics: {
            events: "75+",
            totalGuests: "1K+",
            avgPhotos: "50/event",
            sharing: "120 per event"
        }
    },
    {
        id: 11,
        emoji: "🎁",
        title: "BONUS ENTERTAINMENT",
        subtitle: "Streaming Platform",
        description: "Streaming-style entertainment platform for browsing and accessing media content with a modern UI and seamless user experience.",
        fullDescription: "Comprehensive entertainment platform featuring curated content, personalized recommendations, and social features for media discovery and sharing.",
        category: "entertainment",
        price: "$800",
        priceValue: 800,
        tech: ["Next.js", "TMDB API", "Video.js", "Redis"],
        techDetails: {
            frontend: "Next.js with ISR for content freshness",
            api: "TMDB API integration for content",
            player: "Video.js for adaptive streaming",
            recommendations: "ML-based with Redis caching",
            hosting: "Vercel with CDN optimization"
        },
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBW9u-CgTOtNRncuV_yWoHax20fEhThaYKVdwjdTNYFXiXsxitPQhCPpZaSNr1IY6XGb3k7Rjkz5BSSEcieItcj4ORS8PGyv6EYFkRJJtdSHOGv17fg008OP-5Uu5A1PQahiw8DjYSL9E70wF8dsNIrOATgT-AhkkAQzuop-Y1SnxAZw-wVaxAY_xlz3PEOK7EkggRKCUT-PRVqw4kvxsE2iFC2nugdHzTaDwSs0Kg5W0C2otRM5rxtIVVsdg5t7EaPE1sjdFfBiQ",
        liveUrl: "https://maxmovies-254.vercel.app/",
        githubUrl: "#",
        caseStudyUrl: "#",
        featured: false,
        highlights: [
            "Content discovery",
            "Personalization",
            "Watchlists",
            "Social sharing"
        ],
        metrics: {
            contentItems: "3K+",
            monthlyUsers: "12K",
            avgSessionLength: "45min",
            retention: "72%"
        }
    }
];

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { projectsData };
}

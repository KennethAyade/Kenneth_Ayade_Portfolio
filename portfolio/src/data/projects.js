export const projects = [
  {
    id: 1,
    title: "Blue Payment Systems",
    category: "Fintech/Payment Solutions",
    description: "Professional payment processing website built with WordPress, featuring comprehensive payment solutions for businesses. Utilized custom themes and plugins to provide secure, fast, and reliable payment processing services.",
    longDescription: "Blue Payment Systems is a comprehensive fintech platform developed using WordPress with custom functionality to revolutionize payment processing for businesses of all sizes. The platform features advanced security protocols, real-time transaction monitoring, and seamless integration capabilities through custom WordPress development and third-party API integrations.",
    technologies: ["WordPress", "Custom PHP", "Payment Gateway APIs", "Custom Themes", "Responsive Design", "Security Plugins", "Database Optimization"],
    liveUrl: "https://bluepaymentsystems.com/",
    githubUrl: "#", // Replace with actual GitHub URL if available
    image: "/images/projects/blue-payment-systems.png",
    features: [
      "Custom WordPress payment processing",
      "Real-time transaction monitoring", 
      "Multi-payment method support",
      "Custom admin dashboard",
      "API integration capabilities"
    ],
    challenges: "Implementing secure payment flows within WordPress while maintaining optimal user experience and ensuring PCI compliance through custom development.",
    results: "Successfully launched a robust WordPress-based payment platform serving multiple businesses with 99.9% uptime.",
    status: "Live",
    featured: true,
    year: "2024"
  },
  {
    id: 2,
    title: "Global Marketing Network",
    category: "Digital Marketing",
    description: "Comprehensive digital marketing agency website built with WordPress, showcasing innovative marketing solutions and strategies. Features modern design with interactive elements through custom WordPress development.",
    longDescription: "Global Marketing Network represents the evolution of digital marketing services, built on WordPress with extensive customizations. The platform showcases advanced marketing strategies, analytics dashboards, and client success stories through an intuitive and visually compelling interface developed using custom WordPress themes and plugins.",
    technologies: ["WordPress", "Custom Themes", "Advanced Custom Fields", "Analytics Integration", "SEO Optimization", "Performance Optimization"],
    liveUrl: "https://globalmktgnetwork.com/",
    githubUrl: "#", // Replace with actual GitHub URL if available
    image: "/images/projects/global-marketing-network.png",
    features: [
      "Custom service portfolio showcase",
      "Client testimonials system",
      "Interactive analytics dashboard",
      "Lead generation forms",
      "Advanced SEO optimization"
    ],
    challenges: "Creating an engaging user experience within WordPress that effectively communicates complex marketing concepts and services through custom development.",
    results: "Increased client engagement by 40% and improved lead generation through optimized WordPress conversion funnels.",
    status: "Live",
    featured: true,
    year: "2024"
  },
  {
    id: 3,
    title: "Wearcon",
    category: "E-commerce/Fashion",
    description: "Modern fashion e-commerce platform built with WordPress and WooCommerce, featuring cutting-edge design and seamless shopping experience. Developed with performance optimization and mobile-first approach.",
    longDescription: "Wearcon represents the future of fashion e-commerce, built on WordPress with WooCommerce and extensive customizations. The platform features advanced product filtering, personalized recommendations, and a streamlined checkout process through custom WordPress development and optimized plugins.",
    technologies: ["WordPress", "WooCommerce", "Custom PHP", "Payment Integration", "Product Management", "Mobile Optimization"],
    liveUrl: "https://wearcon.com/",
    githubUrl: "#", // Replace with actual GitHub URL if available
    image: "/images/projects/wearcon.png",
    features: [
      "Advanced WooCommerce catalog",
      "Shopping cart & wishlist",
      "Secure payment processing",
      "User account management",
      "Mobile-optimized interface"
    ],
    challenges: "Optimizing WordPress performance for large product catalogs while maintaining smooth user interactions and fast loading times through custom development.",
    results: "Achieved 98% mobile performance score and increased conversion rates by 35% through WordPress UX improvements.",
    status: "Live",
    featured: true,
    year: "2024"
  },
  {
    id: 4,
    title: "DDS Group KC",
    category: "Professional Services",
    description: "Corporate website for professional business services built with WordPress, featuring clean design and comprehensive service information. Developed to establish trust and credibility in the business services sector.",
    longDescription: "DDS Group KC serves as a digital headquarters for a leading professional services firm, built with WordPress and custom functionality. The website showcases comprehensive business solutions, team expertise, and client success stories through a sophisticated and trustworthy design that reflects the company's professional standards.",
    technologies: ["WordPress", "Custom Themes", "Contact Forms", "SEO Optimization", "Performance Optimization", "Security Hardening"],
    liveUrl: "https://ddsgroupkc.com/",
    githubUrl: "#", // Replace with actual GitHub URL if available
    image: "/images/projects/dds-group-kc.png",
    features: [
      "Custom service portfolio",
      "Team member profiles",
      "Client case studies",
      "Contact & inquiry forms",
      "Professional branding"
    ],
    challenges: "Balancing professional aesthetics with user engagement while ensuring easy navigation for diverse service offerings within WordPress framework.",
    results: "Enhanced company credibility and increased client inquiries by 50% through improved WordPress-based online presence.",
    status: "Live",
    featured: true,
    year: "2024"
  },
  {
    id: 5,
    title: "Trusted Restorer",
    category: "Home Services",
    description: "Service-focused website for restoration services built with WordPress, emphasizing trust, reliability, and expertise. Features before/after galleries and comprehensive service information for homeowners.",
    longDescription: "Trusted Restorer bridges the gap between homeowners and professional restoration services through a comprehensive WordPress platform. The website emphasizes trust-building through detailed service information, expert profiles, and impressive before/after project galleries developed with custom WordPress functionality.",
    technologies: ["WordPress", "Custom Gallery Plugins", "Form Handling", "Mobile Optimization", "Trust Badges", "Service Booking System"],
    liveUrl: "https://trustedrestorer.com/",
    githubUrl: "#", // Replace with actual GitHub URL if available
    image: "/images/projects/trusted-restorer.png",
    features: [
      "Service area coverage",
      "Before/after project galleries",
      "Emergency contact system",
      "Insurance claim assistance",
      "Customer testimonials"
    ],
    challenges: "Creating a trustworthy online presence for a service-based business while effectively showcasing work quality and expertise through WordPress development.",
    results: "Improved customer trust metrics and increased service bookings by 60% through enhanced WordPress-based online credibility.",
    status: "Live",
    featured: true,
    year: "2024"
  }
];

export const projectCategories = [
  "All",
  "Fintech/Payment Solutions",
  "Digital Marketing", 
  "E-commerce/Fashion",
  "Professional Services",
  "Home Services"
];

export const technologies = [
  "WordPress",
  "WooCommerce", 
  "Custom PHP",
  "Custom Themes",
  "Advanced Custom Fields",
  "Payment Gateway APIs",
  "Security Plugins",
  "Performance Optimization",
  "SEO Optimization",
  "Mobile Optimization",
  "Database Optimization",
  "Contact Forms",
  "Gallery Plugins"
];

export const featuredProjects = projects.filter(project => project.featured); 
export const projects = [
  {
    id: 1,
    title: "Blue Payment Systems",
    category: "Fintech/Payment Solutions",
    description: "Professional payment processing website featuring comprehensive payment solutions for businesses. Built with modern web technologies to provide secure, fast, and reliable payment processing services.",
    longDescription: "Blue Payment Systems is a comprehensive fintech platform that revolutionizes payment processing for businesses of all sizes. The platform features advanced security protocols, real-time transaction monitoring, and seamless integration capabilities. Built with a focus on user experience and enterprise-grade reliability, it serves as a complete payment ecosystem for modern businesses.",
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "Stripe API", "JWT Authentication", "Responsive Design"],
    liveUrl: "https://bluepaymentsystems.com/",
    githubUrl: "#", // Replace with actual GitHub URL if available
    image: "/images/projects/blue-payment-systems.png",
    features: [
      "Secure payment processing",
      "Real-time transaction monitoring", 
      "Multi-payment method support",
      "Enterprise dashboard",
      "API integration capabilities"
    ],
    challenges: "Implementing secure payment flows while maintaining optimal user experience and ensuring PCI compliance.",
    results: "Successfully launched a robust payment platform serving multiple businesses with 99.9% uptime.",
    status: "Live",
    featured: true,
    year: "2024"
  },
  {
    id: 2,
    title: "Global Marketing Network",
    category: "Digital Marketing",
    description: "Comprehensive digital marketing agency website showcasing innovative marketing solutions and strategies. Features modern design with interactive elements to demonstrate marketing capabilities.",
    longDescription: "Global Marketing Network represents the evolution of digital marketing services, offering comprehensive solutions for businesses looking to expand their online presence. The platform showcases advanced marketing strategies, analytics dashboards, and client success stories through an intuitive and visually compelling interface.",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Analytics Integration", "CMS"],
    liveUrl: "https://globalmktgnetwork.com/",
    githubUrl: "#", // Replace with actual GitHub URL if available
    image: "/images/projects/global-marketing-network.png",
    features: [
      "Service portfolio showcase",
      "Client testimonials system",
      "Interactive analytics dashboard",
      "Lead generation forms",
      "SEO optimization"
    ],
    challenges: "Creating an engaging user experience that effectively communicates complex marketing concepts and services.",
    results: "Increased client engagement by 40% and improved lead generation through optimized conversion funnels.",
    status: "Live",
    featured: true,
    year: "2024"
  },
  {
    id: 3,
    title: "Wearcon",
    category: "E-commerce/Fashion",
    description: "Modern fashion e-commerce platform featuring cutting-edge design and seamless shopping experience. Built with performance optimization and mobile-first approach for the fashion industry.",
    longDescription: "Wearcon represents the future of fashion e-commerce, combining sophisticated design with powerful functionality. The platform features advanced product filtering, personalized recommendations, and a streamlined checkout process. Built with modern web technologies to deliver exceptional performance across all devices.",
    technologies: ["React.js", "Redux", "Styled Components", "Payment Integration", "Product Management", "Responsive Design"],
    liveUrl: "https://wearcon.com/",
    githubUrl: "#", // Replace with actual GitHub URL if available
    image: "/images/projects/wearcon.png",
    features: [
      "Advanced product catalog",
      "Shopping cart & wishlist",
      "Secure payment processing",
      "User account management",
      "Mobile-optimized interface"
    ],
    challenges: "Optimizing performance for large product catalogs while maintaining smooth user interactions and fast loading times.",
    results: "Achieved 98% mobile performance score and increased conversion rates by 35% through UX improvements.",
    status: "Live",
    featured: true,
    year: "2024"
  },
  {
    id: 4,
    title: "DDS Group KC",
    category: "Professional Services",
    description: "Corporate website for professional business services featuring clean design and comprehensive service information. Built to establish trust and credibility in the business services sector.",
    longDescription: "DDS Group KC serves as a digital headquarters for a leading professional services firm. The website showcases comprehensive business solutions, team expertise, and client success stories through a sophisticated and trustworthy design that reflects the company's professional standards and industry leadership.",
    technologies: ["React.js", "CSS3", "JavaScript", "Contact Forms", "SEO Optimization", "Professional Design"],
    liveUrl: "https://ddsgroupkc.com/",
    githubUrl: "#", // Replace with actual GitHub URL if available
    image: "/images/projects/dds-group-kc.png",
    features: [
      "Service portfolio presentation",
      "Team member profiles",
      "Client case studies",
      "Contact & inquiry forms",
      "Professional branding"
    ],
    challenges: "Balancing professional aesthetics with user engagement while ensuring easy navigation for diverse service offerings.",
    results: "Enhanced company credibility and increased client inquiries by 50% through improved online presence.",
    status: "Live",
    featured: true,
    year: "2024"
  },
  {
    id: 5,
    title: "Trusted Restorer",
    category: "Home Services",
    description: "Service-focused website for restoration services emphasizing trust, reliability, and expertise. Features before/after galleries and comprehensive service information for homeowners.",
    longDescription: "Trusted Restorer bridges the gap between homeowners and professional restoration services through a comprehensive digital platform. The website emphasizes trust-building through detailed service information, expert profiles, and impressive before/after project galleries that demonstrate quality workmanship.",
    technologies: ["React.js", "Image Galleries", "Form Handling", "Mobile Optimization", "Trust Badges", "Service Booking"],
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
    challenges: "Creating a trustworthy online presence for a service-based business while effectively showcasing work quality and expertise.",
    results: "Improved customer trust metrics and increased service bookings by 60% through enhanced online credibility.",
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
  "React.js",
  "Next.js", 
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "Styled Components",
  "Framer Motion",
  "Redux",
  "JWT Authentication",
  "Stripe API",
  "Responsive Design",
  "SEO Optimization"
];

export const featuredProjects = projects.filter(project => project.featured); 
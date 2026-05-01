import {
  Code2,
  Cpu,
  BarChart3,
  Megaphone,
  Heart,
  Compass,
  Search,
  Pencil,
  Rocket,
  GraduationCap,
  Award,
  Zap,
  Users,
  Clock,
  ShieldCheck,
  Landmark,
  ShoppingBag,
  Stethoscope,
  Factory,
  Plane,
  Target,
  Lightbulb,
} from "lucide-react";

export const SITE_DATA = {
  name: "NexGen Digital",
  contact: {
    whatsapp: "919876543210",
  },
};

export const ABOUT_DATA = {
  badge: "About Us",
  heading: "Accelerating Growth Through Intelligent Technology",
  desc: "NexGen Digital is a next-generation technology and AI consulting firm delivering intelligent, scalable, and future-proof digital solutions to ambitious businesses worldwide.",
};

export const ABOUT_PAGE_DATA = {
  hero: {
    badge: "About NexGen Digital",
    heading1: "Triple-Threat Expertise.",
    heading2: "Infinite Growth.",
    subtext: "We harmonize Strategy, Design, and Engineering to architect intelligent systems that propel businesses into the next era of digital excellence.",
  },
  intro: {
    content: "At NexGen Digital, we believe that breakthrough innovation happens at the intersection of deep technical mastery, user-centric design, and sharp business strategy. We are not just a service provider — we are a strategic ally helping global organizations conceptualize, engineer, and scale high-impact digital products and AI-powered ecosystems.",
    approach: [
      "Strategic Business Diagnosis",
      "Human-Centric Design Architecture",
      "High-Performance Digital Engineering",
    ],
  },
  edge: {
    title: "OUR EDGE",
    subtitle: "15+ Years of Deep-Tech Mastery",
    desc: "Our core team brings together decades of hands-on experience engineering complex systems, building AI-native platforms, and scaling high-growth digital products.",
    benefits: [
      "Solve real business pain points (not just write code)",
      "Build AI-native, enterprise-grade architectures",
      "Foresee bottlenecks before they surface",
      "Ship faster with laser-focused precision",
    ],
  },
  leadership: {
    title: "Leadership DNA",
    desc: "Our leadership has architected and scaled products powering millions of users — across fintech, SaaS, and enterprise verticals.",
    highlights: [
      "Architected and scaled high-traffic digital platforms",
      "Led cross-functional engineering, product, and AI teams",
      "Delivered solutions across fintech, SaaS, healthtech, and D2C verticals",
      "Built products from 0 → 1 and scaled mature platforms to millions",
      "Championed data-driven decision making and AI-first innovation",
    ],
    closing: "This caliber of experience enables us to bring enterprise rigor with startup velocity",
  },
  philosophy: {
    title: "OUR PHILOSOPHY",
    desc: "We don't just build software — we engineer intelligent systems that drive tangible business outcomes.",
    values: [
      "Outcome-first engineering",
      "User-obsessed design",
      "AI-native architecture",
      "Continuous innovation",
    ],
    closing: "We believe technology should not just support your business — it should be your competitive moat.",
  },
  segments: {
    title: "Who We Partner With",
    list: [
      { name: "Startups", desc: "Launching their MVP and scaling from 0 to 1" },
      { name: "Growth-Stage Companies", desc: "Accelerating rapidly in competitive markets" },
      { name: "Enterprises", desc: "Undergoing AI-driven digital transformation" },
    ],
  },
  mission: {
    title: "OUR MISSION",
    content: "To empower organizations with intelligent, scalable, and AI-driven technology solutions that accelerate growth and competitive advantage.",
  },
  vision: {
    title: "OUR VISION",
    content: "To become the most trusted global partner for AI innovation, digital engineering, and next-gen business transformation.",
  },
  trust: {
    title: "Why Clients Choose Us",
    points: [
      "Proven track record with high-growth companies",
      "Exceptional engineering capability",
      "Radically transparent communication",
      "Outcome-driven execution model",
      "Long-term strategic partnership mindset",
    ],
  },
  closing: {
    line: "When you partner with NexGen Digital, you're not hiring a vendor — you're gaining a dedicated technology ally that understands AI, engineering, and growth at scale.",
  }
};

export const SERVICES_SECTION_DATA = {
  heading: "Full-Spectrum AI & Digital Solutions",
  intro: "We blend intelligent automation, robust engineering, and growth strategy to solve complex business challenges and deliver exponential results.",
};

export const VALUES_DATA = [
  {
    icon: Target,
    title: "Precision",
    desc: "Data-driven strategies and meticulous engineering for measurable, high-impact outcomes.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Harnessing cutting-edge AI and emerging technologies for transformative digital experiences.",
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    desc: "Building lasting partnerships through radical transparency, unwavering reliability, and enterprise-grade security.",
    gradient: "from-violet-500 to-purple-500",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Case Studies", href: "/case-studies" },
  { 
    label: "Explore", 
    children: [
      { label: "Our Team", href: "/#team" },
      { label: "Our Process", href: "/#process" },
      { label: "Why Choose Us", href: "/#why-us" },
      { label: "Industries", href: "/#industries" },
    ]
  },
  { label: "Contact", href: "/#contact" },
];

export const CASE_STUDIES_DATA = [
  {
    id: "fintech-scale",
    category: "Fintech Platform",
    title: "Scaling a Fintech App to 500K+ Active Users",
    context: "A fintech startup needed to rebuild its core platform to handle explosive user growth while maintaining regulatory compliance.",
    problem: [
      "Legacy monolith couldn't handle traffic spikes",
      "Slow onboarding flow causing 45% drop-offs",
      "Manual KYC verification creating bottlenecks",
      "Zero real-time analytics for business decisions"
    ],
    solution: [
      {
        step: "Architecture Overhaul",
        details: "Migrated from monolith to microservices with event-driven architecture on AWS."
      },
      {
        step: "AI-Powered KYC",
        details: "Implemented ML-based document verification reducing onboarding time by 80%."
      },
      {
        step: "Performance Optimization",
        details: "Rebuilt frontend with Next.js SSR and edge caching for sub-second load times."
      },
      {
        step: "Real-time Analytics",
        details: "Deployed Kafka-based streaming pipeline for live business intelligence dashboards."
      }
    ],
    results: [
      { label: "User Growth", value: "+500K" },
      { label: "Onboarding", value: "80% Faster" },
      { label: "Uptime", value: "99.99%" },
      { label: "Load Time", value: "<1s" }
    ],
    takeaway: "Scalable architecture + AI automation unlocks exponential growth without proportional cost increases.",
    color: "from-pink-500 to-rose-500"
  },
  {
    id: "ai-operations",
    category: "Enterprise AI",
    title: "Cutting Operational Costs by 55% with Intelligent Automation",
    context: "A logistics enterprise was drowning in manual processes, leading to high operational costs and delayed decision-making.",
    problem: [
      "Over 200 manual workflows across departments",
      "$2M+ annual operational overhead",
      "24-hour average response time for customer queries",
      "No predictive capabilities for demand forecasting"
    ],
    solution: [
      {
        step: "Process Intelligence",
        details: "Mapped and scored 200+ workflows for automation potential using process mining."
      },
      {
        step: "AI Automation Engine",
        details: "Built custom RPA + ML pipeline automating 85% of repetitive tasks."
      },
      {
        step: "Predictive Analytics",
        details: "Deployed forecasting models for demand prediction and resource optimization."
      },
      {
        step: "Conversational AI",
        details: "Launched GPT-powered customer support handling 70% of queries autonomously."
      }
    ],
    results: [
      { label: "Cost Savings", value: "-55%" },
      { label: "Response Time", value: "90% Faster" },
      { label: "Automation", value: "85% Tasks" },
      { label: "Forecast Accuracy", value: "94%" }
    ],
    takeaway: "Intelligent automation is not just efficiency — it's a fundamental business transformation lever.",
    color: "from-blue-500 to-indigo-500"
  },
  {
    id: "saas-product",
    category: "SaaS Platform",
    title: "Orchestrating a B2B SaaS Launch to $1M ARR in 8 Months",
    context: "A startup had a compelling vision for a B2B analytics SaaS but lacked technical cofounders and product engineering capability.",
    problem: [
      "No technical team or architecture",
      "Undefined product roadmap and GTM strategy",
      "Complex multi-tenant requirements",
      "Tight runway requiring rapid market validation"
    ],
    solution: [
      {
        step: "Product Discovery",
        details: "Ran intensive discovery sprints to define MVP scope, user personas, and monetization model."
      },
      {
        step: "Cloud-Native Architecture",
        details: "Designed multi-tenant SaaS architecture with role-based access and usage-based billing."
      },
      {
        step: "Rapid Engineering",
        details: "2-week sprint cycles with continuous deployment, achieving MVP in 10 weeks."
      },
      {
        step: "Growth Engineering",
        details: "Built product-led growth loops, self-serve onboarding, and in-app analytics."
      }
    ],
    results: [
      { label: "Time to MVP", value: "10 Weeks" },
      { label: "ARR", value: "$1M+" },
      { label: "Retention", value: "92%" },
      { label: "NPS Score", value: "72" }
    ],
    takeaway: "Deep product thinking + rapid engineering execution = market-beating SaaS launches.",
    color: "from-indigo-500 to-violet-500"
  }
];

export const HERO_DATA = {
  badge: "Intelligence · Automation · Growth",
  heading: {
    line1: "Intelligent Digital & AI Solutions",
    line2: "for Tomorrow's Leaders",
  },
  subtext: "At NexGen Digital, we partner with startups and enterprises to design, build, and scale intelligent technology solutions — from AI-powered platforms to full-stack digital transformation.",
  tags: [
    "AI-Powered Systems",
    "Intelligent Automation",
    "Cloud-Native Architecture",
    "Scalable Growth",
  ],
  cta: {
    primary: "Explore Solutions",
    secondary: "Get Free Consultation",
  },
};

export const TRUST_STRIP_DATA = {
  headline: "Powering ambitious businesses across the globe",
  stats: [
    { label: "75+ Projects Shipped" },
    { label: "15+ Industries Served" },
    { label: "97% Client Retention" },
    { label: "Full-Stack Execution" },
  ],
};

export const DASHBOARD_DATA = {
  title: "NexGen Command Center",
  projects: [
    {
      type: "AI Platform",
      title: "Predictive Analytics Engine",
      tech: "Python · TensorFlow · AWS",
      progress: 85,
      color: "blue",
    },
    {
      type: "SaaS",
      title: "Multi-Tenant Dashboard",
      tech: "Next.js · PostgreSQL · Redis",
      progress: 92,
      color: "violet",
    },
    {
      type: "Cloud",
      title: "Infrastructure Migration",
      tech: "AWS · Terraform · K8s",
      completed: true,
      color: "emerald",
    },
    {
      type: "Growth",
      title: "Performance Marketing Hub",
      tech: "Analytics · Meta · Google",
      progress: 58,
      color: "pink",
    },
    {
      type: "Design",
      title: "Product UX Overhaul",
      tech: "Figma · Research · Testing",
      progress: 73,
      color: "amber",
    },
    {
      type: "Strategy",
      title: "Digital Roadmap",
      tech: "Advisory · GTM · OKRs",
      completed: true,
      color: "cyan",
    },
  ],
  analytics: {
    revenue: "+67%",
    conversion: "12.3%",
    users: "28.4K",
  },
};

export const SERVICES_DATA = [
  {
    title: "AI & Intelligent Automation",
    desc: "Harness the power of artificial intelligence to automate operations, predict outcomes, and unlock hidden business insights.",
    icon: Cpu,
    color: "from-violet-500 to-purple-500",
    tags: ["ML", "NLP", "GPT", "Automation"],
    subServices: [
      "Custom AI/ML Model Development",
      "Predictive Analytics & Forecasting",
      "Intelligent Process Automation (RPA+AI)",
      "Conversational AI & Chatbots",
      "Computer Vision Solutions",
      "Recommendation Engines",
      "AI-Powered Decision Systems",
      "LLM Fine-tuning & Integration",
    ],
  },
  {
    title: "Full-Stack Digital Engineering",
    desc: "Build scalable, secure, and high-performance applications engineered for growth and resilience.",
    icon: Code2,
    color: "from-blue-500 to-indigo-500",
    tags: ["React", "Next.js", "Node", "Cloud"],
    subServices: [
      "Custom Web Application Development",
      "Mobile App Development (iOS & Android)",
      "SaaS Product Engineering",
      "API Architecture & Microservices",
      "Cloud-Native Development",
      "Legacy System Modernization",
      "Enterprise Software Solutions",
    ],
  },
  {
    title: "Cloud & DevOps Excellence",
    desc: "Architect resilient cloud infrastructure with automated CI/CD pipelines and zero-downtime deployments.",
    icon: Compass,
    color: "from-indigo-500 to-violet-500",
    tags: ["AWS", "Docker", "K8s", "Terraform"],
    subServices: [
      "Cloud Migration & Architecture",
      "DevOps Pipeline Setup (CI/CD)",
      "Infrastructure as Code (Terraform)",
      "Kubernetes Orchestration",
      "Security & Compliance Hardening",
      "Performance Monitoring & Optimization",
      "Disaster Recovery Planning",
    ],
  },
  {
    title: "Growth Marketing & Acquisition",
    desc: "Accelerate customer acquisition and revenue with data-driven, performance marketing at scale.",
    icon: Megaphone,
    color: "from-pink-500 to-rose-500",
    tags: ["SEO", "Paid Ads", "CRO", "Analytics"],
    subServices: [
      "Performance Marketing (Google & Meta)",
      "Advanced SEO & Content Strategy",
      "Marketing Automation & Funnels",
      "Conversion Rate Optimization",
      "Growth Analytics & Attribution",
      "Social Media & Brand Strategy",
      "Product-Led Growth Engineering",
    ],
  },
  {
    title: "Product Design & Experience",
    desc: "Craft delightful, conversion-focused user experiences through research-backed design and rapid prototyping.",
    icon: Heart,
    color: "from-rose-500 to-orange-500",
    tags: ["UX", "UI", "Research", "Figma"],
    subServices: [
      "User Research & Journey Mapping",
      "UI/UX Design & Prototyping",
      "Design System Architecture",
      "Accessibility & Inclusivity Audits",
      "Conversion-Focused Landing Pages",
      "Brand Identity & Visual Systems",
      "Usability Testing & Iteration",
    ],
  },
  {
    title: "Strategic Consulting & Advisory",
    desc: "Navigate digital transformation with expert advisory on technology strategy, product roadmaps, and AI adoption.",
    icon: BarChart3,
    color: "from-amber-500 to-yellow-500",
    tags: ["Strategy", "GTM", "Roadmap", "AI"],
    subServices: [
      "Digital Transformation Strategy",
      "AI Readiness & Adoption Consulting",
      "Product Strategy & GTM Planning",
      "Technology Due Diligence",
      "Data Strategy & Governance",
      "Startup & Enterprise Advisory",
    ],
  },
  {
    title: "Data Engineering & Intelligence",
    desc: "Build robust data pipelines, warehouses, and real-time analytics platforms that turn raw data into competitive advantage.",
    icon: Users,
    color: "from-cyan-500 to-blue-500",
    tags: ["ETL", "BigQuery", "Spark", "BI"],
    subServices: [
      "Data Pipeline Architecture",
      "Data Warehouse & Lake Setup",
      "Real-time Streaming Analytics",
      "Business Intelligence Dashboards",
      "Customer Data Platforms (CDP)",
      "Data Quality & Governance",
    ],
  },
];

export const WORKFLOW_STEPS = [
  {
    icon: Search,
    title: "Discovery & Diagnosis",
    desc: "Deep-dive into your business landscape, pain points, and growth objectives to craft a precision roadmap.",
    terminal: "nexgen discover --audit --roadmap",
  },
  {
    icon: Pencil,
    title: "Design & Architecture",
    desc: "Engineer pixel-perfect experiences and bulletproof system architecture built for scale and speed.",
    terminal: "nexgen design --ux --architecture",
  },
  {
    icon: Code2,
    title: "Agile Engineering",
    desc: "Rapid sprint cycles with continuous integration, automated testing, and transparent stakeholder reviews.",
    terminal: "nexgen build --agile --ci-cd",
  },
  {
    icon: Rocket,
    title: "Deploy & Accelerate",
    desc: "Battle-tested deployment with real-time monitoring, performance optimization, and 24/7 managed support.",
    terminal: "nexgen deploy --production --monitor",
  },
];

export const STATS_DATA = [
  {
    value: 75,
    suffix: "+",
    label: "Projects Shipped",
    sub: "Mission-Critical",
  },
  {
    value: 40,
    suffix: "+",
    label: "Global Clients",
    sub: "Across 15+ Industries",
  },
  { value: 97, suffix: "%", label: "Client Retention", sub: "Industry Best" },
  { value: 24, suffix: "/7", label: "Support & Monitoring", sub: "Always On" },
];

export const INDUSTRIES_DATA = [
  {
    icon: Landmark,
    title: "Fintech & Banking",
    desc: "Digital banking platforms, payment systems, and AI-driven risk analytics built for regulatory compliance.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce & D2C",
    desc: "Intelligent commerce platforms with personalized shopping experiences and predictive inventory management.",
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Biotech",
    desc: "Telemedicine platforms, clinical AI, and HIPAA-compliant solutions for modern healthcare delivery.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: GraduationCap,
    title: "EdTech & Learning",
    desc: "Adaptive learning engines, AI tutors, and analytics-driven education platforms for the future of learning.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Factory,
    title: "Manufacturing & Supply Chain",
    desc: "IoT-driven operations, predictive maintenance, and AI-optimized supply chain management for Industry 4.0.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Plane,
    title: "Travel & Hospitality",
    desc: "Smart booking systems, revenue optimization engines, and AI-powered guest experience platforms.",
    color: "from-rose-500 to-orange-500",
  },
];

export const WHY_CHOOSE_DATA = [
  {
    icon: GraduationCap,
    title: "Elite Engineering DNA",
    desc: "Led by engineers and strategists from top-tier tech companies with proven track records at scale.",
  },
  {
    icon: Target,
    title: "End-to-End Ownership",
    desc: "From initial concept to production deployment and beyond — we own the entire lifecycle.",
  },
  {
    icon: Cpu,
    title: "AI-Native Thinking",
    desc: "Every solution we build is designed with intelligence at its core, not as an afterthought.",
  },
  {
    icon: Rocket,
    title: "Rapid Time-to-Market",
    desc: "Agile engineering sprints ensure lightning-fast delivery without sacrificing quality or stability.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Standards",
    desc: "Scalable, secure, and battle-tested solutions architected for long-term resilience and growth.",
  },
  {
    icon: BarChart3,
    title: "ROI-Focused Execution",
    desc: "Every line of code, every design decision is aligned with measurable business outcomes and growth.",
  },
];

export const TEAM_DATA = [
  {
    name: "Arjun Mehta",
    role: "Founder & CEO",
    specialization: "Product Strategy & AI",
    image: "/team/aman.jpg",
    linkedin: "#",
  },
  {
    name: "Priya Sharma",
    role: "Co-Founder & CTO",
    specialization: "Engineering & Cloud",
    image: "/team/akshay.jpg",
    linkedin: "#",
  },
  {
    name: "Vikram Desai",
    role: "VP of Growth",
    specialization: "Digital Marketing & GTM",
    image: "/team/rahul.jpg",
    linkedin: "#",
  },
];

export const FAQS_DATA = [
  {
    q: "What industries does NexGen Digital specialize in?",
    a: "We serve Fintech, E-commerce, Healthcare, EdTech, Manufacturing, and Travel & Hospitality with deep domain expertise and AI-native solutions tailored to each vertical.",
  },
  {
    q: "How do you ensure world-class project quality?",
    a: "We follow enterprise-grade engineering standards with rigorous code reviews, automated testing, CI/CD pipelines, real-time monitoring, and continuous security audits. Quality is non-negotiable.",
  },
  {
    q: "Can you handle complex enterprise-scale projects?",
    a: "Absolutely. Our leadership team has built and scaled systems serving millions of users. From startup MVPs to large-scale enterprise transformations — we handle it all.",
  },
  {
    q: "What is your core technology stack?",
    a: "We work with modern technologies including React, Next.js, Node.js, Python, TensorFlow, AWS, GCP, Docker, Kubernetes, and leading AI/ML frameworks. Our stack is always chosen to best fit your specific needs.",
  },
  {
    q: "Do you provide post-launch support and maintenance?",
    a: "Yes, we provide 24/7 monitoring, dedicated account managers, SLA-backed response times, and proactive performance optimization to ensure your systems run flawlessly at all times.",
  },
];

export const CONTACT_INFO = {
  email: "hello@nexgendigital.io",
  phone: "+919876543210",
  phoneDisplay: "+91 9876 543 210",
  whatsapp: "919876543210",
  linkedin: "https://www.linkedin.com/company/nexgen-digital",
  address: "12th Floor, Cyber Hub Tower, Sector 24, Gurugram – 122002",
};

export const DETAILED_SERVICES_DATA: Record<string, any> = {
  "product": {
    heading: "Engineering Scalable Digital Products from Vision to Growth",
    description: "At NexGen Digital, we transform ambitious ideas into powerful digital products. From initial discovery to full-scale deployment, we focus on building intelligent solutions that are scalable, user-centric, and aligned with business impact.",
    features: [
      "Product Discovery & Strategy",
      "MVP Engineering (0 → 1 Launch)",
      "UI/UX Design & Rapid Prototyping",
      "Full-Stack Product Development",
      "Product Scaling & Performance",
      "Growth Engineering & Experimentation"
    ],
    impact: [
      "50% faster time-to-market",
      "Scalable architecture from day one",
      "Higher user engagement & retention",
      "Reduced development risks & costs"
    ],
    color: "from-blue-500 to-indigo-500"
  },
  "technology-solutions": {
    heading: "Robust, Scalable & Intelligent Technology Solutions",
    description: "We design and develop high-performance systems tailored to complex, evolving business needs. Our technology solutions are built with AI-readiness, scalability, security, and long-term sustainability at their core.",
    features: [
      "Custom Software Engineering",
      "Progressive Web Applications",
      "Native & Cross-Platform Mobile Apps",
      "API Architecture & Microservices",
      "Legacy System Modernization",
      "Enterprise Application Development"
    ],
    impact: [
      "40% improvement in operational efficiency",
      "Seamless system interoperability",
      "Eliminated technical debt",
      "Future-ready, AI-compatible infrastructure"
    ],
    color: "from-indigo-500 to-violet-500"
  },
  "ai-analytics": {
    heading: "Unlock the Power of AI & Data for Smarter Decisions",
    description: "We leverage artificial intelligence and advanced analytics to help businesses automate at scale, uncover actionable insights, and make data-driven decisions with confidence.",
    features: [
      "Custom AI/ML Model Development",
      "Predictive Analytics & Forecasting",
      "Real-time BI Dashboards",
      "Data Engineering & Lake Architecture",
      "Intelligent Process Automation",
      "LLM Integration & Fine-tuning"
    ],
    impact: [
      "3x faster data-driven decisions",
      "85% reduction in manual effort",
      "94% forecasting accuracy",
      "Transformed customer experience"
    ],
    color: "from-violet-500 to-purple-500"
  },
  "cloud-services": {
    heading: "Resilient, Secure & High-Performance Cloud Infrastructure",
    description: "We architect, migrate, and optimize cloud infrastructure ensuring maximum availability, ironclad security, and effortless scalability for mission-critical workloads.",
    features: [
      "Cloud Migration & Re-architecture",
      "Cloud-Native Application Design",
      "DevOps & CI/CD Automation",
      "Infrastructure as Code (Terraform)",
      "Security Hardening & Compliance",
      "24/7 Monitoring & Incident Response"
    ],
    impact: [
      "45% reduction in infrastructure costs",
      "99.99% system availability",
      "10x faster deployment cycles",
      "Enterprise-grade security posture"
    ],
    color: "from-purple-500 to-pink-500"
  },
  "digital-marketing": {
    heading: "Driving Explosive Growth with Performance Marketing",
    description: "We help ambitious businesses acquire, engage, and convert customers at scale through data-driven digital marketing strategies laser-focused on measurable ROI.",
    features: [
      "Performance Marketing (Google, Meta, LinkedIn)",
      "Advanced SEO & Technical Optimization",
      "Social Media & Content Strategy",
      "Marketing Automation & Nurture Flows",
      "Conversion Rate Optimization (CRO)",
      "Growth Analytics & Multi-touch Attribution"
    ],
    impact: [
      "3x increase in customer acquisition",
      "67% higher ROI on ad spend",
      "2x improvement in conversion rates",
      "Dominant brand presence in target markets"
    ],
    color: "from-pink-500 to-rose-500"
  }
};

export const FOOTER_LINKS = {
  company: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/#services" },
    { name: "Industries", href: "/#industries" },
    { name: "Contact", href: "/#contact" },
  ],
  services: [
    { name: "Product Engineering", href: "/services/product" },
    { name: "Technology Solutions", href: "/services/technology-solutions" },
    { name: "AI & Analytics", href: "/services/ai-analytics" },
    { name: "Cloud & DevOps", href: "/services/cloud-services" },
    { name: "Growth Marketing", href: "/services/digital-marketing" },
  ],
};

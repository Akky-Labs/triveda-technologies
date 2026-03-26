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
  name: "Triveda Technologies",
  contact: {
    whatsapp: "919973243422",
  },
};

export const ABOUT_DATA = {
  badge: "About Us",
  heading: "Transforming Businesses Through Digital Excellence",
  desc: "Triveda Technologies is a modern technology and digital transformation company specializing in enterprise-grade software solutions, AI-driven automation, and scalable cloud infrastructures.",
};

export const VALUES_DATA = [
  {
    icon: Target,
    title: "Precision",
    desc: "Data-driven strategies and meticulous execution for measurable outcomes.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Leveraging cutting-edge technologies for transformative digital experiences.",
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    desc: "Lasting partnerships through transparency, reliability, and enterprise-grade security.",
    gradient: "from-violet-500 to-purple-500",
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

export const HERO_DATA = {
  badge: "Engineering the Future of Digital",
  heading: {
    line1: "Engineering Intelligent",
    line2: "Digital Transformation",
  },
  tags: [
    "Enterprise Software",
    "AI Solutions",
    "Cloud Systems",
    "Secure Scalability",
  ],
  cta: {
    primary: "Explore Services",
    secondary: "Get Consultation",
  },
};

export const DASHBOARD_DATA = {
  title: "Triveda Command Center",
  projects: [
    {
      type: "Enterprise",
      title: "E-Commerce Platform",
      tech: "Next.js · React · AWS",
      progress: 78,
      color: "blue",
    },
    {
      type: "AI / ML",
      title: "AI Chatbot Integration",
      tech: "NLP · Python · GPT",
      progress: 92,
      color: "violet",
    },
    {
      type: "Cloud",
      title: "Cloud Migration",
      tech: "AWS · Docker · K8s",
      completed: true,
      color: "emerald",
    },
    {
      type: "Marketing",
      title: "SEO & Ads Campaign",
      tech: "Google Ads · Meta · SEO",
      progress: 45,
      color: "pink",
    },
    {
      type: "CX Design",
      title: "UX Redesign",
      tech: "Figma · User Research",
      progress: 60,
      color: "amber",
    },
    {
      type: "Consulting",
      title: "Digital Strategy",
      tech: "Roadmap · Advisory",
      completed: true,
      color: "cyan",
    },
  ],
  analytics: {
    revenue: "+42%",
    conversion: "8.4%",
    users: "12.5K",
  },
};

export const SERVICES_DATA = [
  {
    title: "Technology & Digital Solutions",
    desc: "Custom software, web & mobile apps, cloud migration, and enterprise-grade integrations built for scale.",
    icon: Code2,
    color: "from-blue-500 to-indigo-500",
    tags: ["Next.js", "React", "Cloud", "APIs"],
    subServices: [
      "Custom Software Development",
      "Web Application Development",
      "Mobile App Development",
      "Cloud Solutions & Migration",
      "API Development & Integration",
      "Enterprise Application Development",
      "SaaS Product Development",
    ],
  },
  {
    title: "End-to-End Implementation",
    desc: "From requirement gathering to go-live — agile execution, vendor management, and managed services.",
    icon: Compass,
    color: "from-indigo-500 to-violet-500",
    tags: ["Agile", "DevOps", "CI/CD", "Managed"],
    subServices: [
      "Requirement Gathering & Solution Design",
      "Project Planning & Roadmapping",
      "Agile & Waterfall Execution",
      "Vendor & Stakeholder Management",
      "Go-Live & Post-Implementation Support",
      "Managed Services & AMC",
      "Digital Transformation Programs",
    ],
  },
  {
    title: "AI, Data & Advanced Analytics",
    desc: "Machine learning, predictive analytics, BI dashboards, chatbots, and intelligent automation.",
    icon: Cpu,
    color: "from-violet-500 to-purple-500",
    tags: ["ML", "NLP", "Analytics", "AI"],
    subServices: [
      "AI & Machine Learning Solutions",
      "Predictive Analytics & Forecasting",
      "Business Intelligence Dashboards",
      "Data Engineering & Warehousing",
      "AI-Powered Automation (RPA)",
      "Chatbots & Conversational AI",
      "Recommendation Engines",
      "Computer Vision & NLP Solutions",
    ],
  },
  {
    title: "Digital Marketing & Growth",
    desc: "Performance marketing, SEO, social media, content strategy, and conversion optimization.",
    icon: Megaphone,
    color: "from-pink-500 to-rose-500",
    tags: ["SEO", "Ads", "Social", "Growth"],
    subServices: [
      "Performance Marketing (Google, Meta)",
      "Search Engine Optimization (SEO)",
      "Social Media Marketing",
      "Marketing Automation",
      "Content Strategy & Branding",
      "Conversion Rate Optimization (CRO)",
      "Funnel & Growth Analytics",
    ],
  },
  {
    title: "Customer Experience Transformation",
    desc: "Journey mapping, CX strategy, omnichannel design, personalization, and retention management.",
    icon: Heart,
    color: "from-rose-500 to-orange-500",
    tags: ["UX", "CX", "Omnichannel", "Design"],
    subServices: [
      "Customer Journey Mapping",
      "CX Strategy & Consulting",
      "Omnichannel Experience Design",
      "CRM Implementation & Optimization",
      "Personalization & Customer Insights",
      "Experience Analytics & Voice of Customer",
      "Retention & Lifecycle Management",
    ],
  },
  {
    title: "Consulting & Strategy",
    desc: "Strategic advisory for digital transformation, product strategy, and enterprise growth.",
    icon: BarChart3,
    color: "from-amber-500 to-yellow-500",
    tags: ["Strategy", "Advisory", "Growth", "Digital"],
    subServices: [
      "Digital & Technology Consulting",
      "Product Strategy & GTM Advisory",
      "Data & Analytics Consulting",
      "Martech & Adtech Consulting",
      "Process Optimization & Automation",
      "Startup & Enterprise Advisory",
    ],
  },
];

export const WORKFLOW_STEPS = [
  {
    icon: Search,
    title: "Discovery & Strategy",
    desc: "Deep-dive into your business needs, goals, and technical landscape to craft the perfect roadmap.",
    terminal: "triveda discover --audit --roadmap",
  },
  {
    icon: Pencil,
    title: "Design & Architecture",
    desc: "Craft pixel-perfect designs and scalable system architecture tailored for growth.",
    terminal: "triveda design --ux --architecture",
  },
  {
    icon: Code2,
    title: "Agile Development",
    desc: "Iterative development sprints with continuous integration, testing, and stakeholder reviews.",
    terminal: "triveda build --agile --ci-cd",
  },
  {
    icon: Rocket,
    title: "Launch & Scale",
    desc: "Battle-tested deployment with monitoring, optimization, and 24/7 managed support.",
    terminal: "triveda deploy --production --monitor",
  },
];

export const STATS_DATA = [
  {
    value: 100,
    suffix: "+",
    label: "Projects Delivered",
    sub: "Enterprise Scale",
  },
  {
    value: 50,
    suffix: "+",
    label: "Enterprise Clients",
    sub: "Global Reach",
  },
  { value: 98, suffix: "%", label: "Client Satisfaction", sub: "Gold Standard" },
  { value: 24, suffix: "/7", label: "Support Availability", sub: "Always On" },
];

export const INDUSTRIES_DATA = [
  {
    icon: Landmark,
    title: "Financial Services",
    desc: "Digital banking, risk analytics, and fintech platforms built for compliance and scale.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-commerce",
    desc: "Omnichannel commerce and personalized customer journeys that drive conversion.",
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Life Sciences",
    desc: "Telemedicine, clinical analytics, and HIPAA-compliant solutions.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: GraduationCap,
    title: "Education & EdTech",
    desc: "LMS platforms, adaptive learning, and student analytics for modern education.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Factory,
    title: "Manufacturing & Logistics",
    desc: "IoT-driven operations and supply chain optimization for Industry 4.0.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Plane,
    title: "Travel & Hospitality",
    desc: "Booking engines, revenue management, and AI-powered guest experiences.",
    color: "from-rose-500 to-orange-500",
  },
];

export const WHY_CHOOSE_DATA = [
  {
    icon: GraduationCap,
    title: "IIM & IIT Alumni Leadership",
    desc: "Guided by leaders from India's most prestigious institutions with deep industry expertise.",
  },
  {
    icon: Award,
    title: "Quality First Approach",
    desc: "Enterprise-grade standards across every deliverable — no shortcuts, no compromises.",
  },
  {
    icon: Zap,
    title: "Startup Agility",
    desc: "Move fast without sacrificing quality or governance. Rapid prototyping to production.",
  },
  {
    icon: Users,
    title: "Client-Centric Focus",
    desc: "Your success metrics are our KPIs. We align deeply with your business goals.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    desc: "On-time, on-budget, every single time. Predictable outcomes you can count on.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    desc: "Security integrated from the start — not bolted on as an afterthought.",
  },
];

export const FAQS_DATA = [
  {
    q: "What industries do you specialize in?",
    a: "We serve Financial Services, Retail & E-commerce, Healthcare, Education, Manufacturing, and Travel & Hospitality with deep domain expertise in each vertical.",
  },
  {
    q: "How do you ensure project quality?",
    a: "We follow enterprise-grade development standards with rigorous code reviews, automated testing, CI/CD pipelines, and continuous monitoring. Our Quality First approach means zero compromises on deliverables.",
  },
  {
    q: "Can you handle enterprise-scale projects?",
    a: "Absolutely. With IIM & IIT alumni leadership and a team experienced in building scalable cloud architectures, we handle projects from startup MVPs to large enterprise transformations.",
  },
  {
    q: "What is your technology stack?",
    a: "We work with modern technologies including React, Next.js, Node.js, Python, AWS, GCP, Azure, Docker, Kubernetes, and leading AI/ML frameworks. Our stack is always chosen to best fit your project needs.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes, we provide 24/7 support availability with dedicated account managers, SLA-backed response times, and proactive monitoring to ensure your systems run smoothly.",
  },
];

export const CONTACT_INFO = {
  email: "sales@trivedatechnologies.in",
  phone: "+919973243422",
  phoneDisplay: "+91 9973243422",
  whatsapp: "919973243422",
  linkedin: "https://www.linkedin.com/company/triveda-technologies",
  address: "3rd Floor, Plot 1A, Surat Nagar Phase 1, Gurugram – 122006",
};

export const FOOTER_LINKS = {
  company: [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Industries", href: "#industries" },
    { name: "Contact", href: "#contact" },
  ],
  services: [
    { name: "Enterprise Software", href: "#services" },
    { name: "AI Solutions", href: "#services" },
    { name: "Cloud Systems", href: "#services" },
    { name: "Digital Marketing", href: "#services" },
    { name: "Consulting", href: "#services" },
  ],
};

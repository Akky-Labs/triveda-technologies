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
  desc: "Triveda Technologies is a technology consulting company delivering scalable digital, AI, and growth solutions to businesses worldwide.",
};

export const ABOUT_PAGE_DATA = {
  hero: {
    badge: "About Triveda Technologies",
    heading1: "Built on Experience.",
    heading2: "Driven by Innovation.",
    subtext: "We combine technology, data, and strategy to build solutions that truly move businesses forward.",
  },
  intro: {
    content: "At Triveda Technologies, we combine deep industry experience with modern technology to build solutions that truly move businesses forward. We are not just another tech services company — we are a strategic technology partner helping organizations design, build, and scale impactful digital products, AI solutions, and growth systems.",
    approach: [
      "Understand the business deeply",
      "Build scalable and future-ready solutions",
      "Deliver measurable outcomes",
    ],
  },
  edge: {
    title: "OUR EDGE",
    subtitle: "20+ Years of Strategic Leadership",
    desc: "Our team brings together decades of hands-on experience working across complex systems, large-scale platforms, and high-growth environments.",
    benefits: [
      "Solve real business problems (not just write code)",
      "Build scalable and enterprise-grade systems",
      "Anticipate challenges before they arise",
      "Deliver faster with clarity and precision",
    ],
  },
  leadership: {
    title: "Leadership Experience",
    desc: "Our leadership has been part of the journey of building and scaling products used by thousands — and in some cases, millions — of users.",
    highlights: [
      "Built and scaled large-scale digital platforms",
      "Led cross-functional teams across engineering, product, and growth",
      "Delivered solutions across multiple industries including eCommerce, telecom, and enterprise systems",
      "Worked on 0 → 1 product journeys as well as scaling mature systems",
      "Driven data-led decision making and product innovation",
    ],
    closing: "This depth of experience allows us to bring enterprise thinking with startup agility",
  },
  philosophy: {
    title: "OUR PHILOSOPHY",
    desc: "We don’t just build technology — we build solutions that drive business outcomes.",
    values: [
      "Business-first thinking",
      "User-centric design",
      "Scalable architecture",
      "Growth mindset",
    ],
    closing: "We believe that technology should not just support your business — it should accelerate it.",
  },
  segments: {
    title: "Who We Work With",
    list: [
      { name: "Startups", desc: "Building their first product (0 to 1)" },
      { name: "D2C Brands", desc: "Scaling rapidly in competitive markets" },
      { name: "Enterprises", desc: "Undergoing digital transformation" },
    ],
  },
  mission: {
    title: "OUR MISSION",
    content: "To empower businesses with scalable, intelligent, and future-ready technology solutions.",
  },
  vision: {
    title: "OUR VISION",
    content: "To become a trusted global partner for digital transformation, AI innovation, and growth acceleration.",
  },
  trust: {
    title: "Why Clients Trust Us",
    points: [
      "Proven experience from top-tier organizations",
      "Strong execution capability",
      "Transparent communication",
      "Outcome-driven approach",
      "Long-term partnership mindset",
    ],
  },
  closing: {
    line: "When you work with Triveda Technologies, you’re not just hiring a vendor — you’re partnering with a team that understands technology, business, and growth at scale.",
  }
};

export const SERVICES_SECTION_DATA = {
  heading: "End-to-End Technology & Growth Solutions",
  intro: "We combine technology, data, and strategy to solve complex business problems and drive measurable growth.",
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
    id: "ecommerce-growth",
    category: "D2C eCommerce",
    title: "Driving 32% Conversion Uplift for a D2C Brand",
    context: "A fast-growing D2C brand was struggling with low conversion rates and high cart abandonment despite strong traffic.",
    problem: [
      "High drop-offs during checkout",
      "Poor mobile experience",
      "Lack of visibility into user behavior",
      "Inefficient retargeting (High CAC, low ROI)"
    ],
    solution: [
      {
        step: "Funnel Diagnosis",
        details: "Implemented GA4 + funnel analytics to identify specific drop-off points."
      },
      {
        step: "Conversion Optimization",
        details: "Redesigned mobile-first checkout UX with trust signals and urgency elements."
      },
      {
        step: "A/B Experimentation",
        details: "Tested CTA placements, pricing displays, and checkout layouts."
      },
      {
        step: "Retargeting",
        details: "Integrated automated WhatsApp and email abandoned cart journeys."
      }
    ],
    results: [
      { label: "Conversion Rate", value: "+32%" },
      { label: "Revenue Lift", value: "+25%" },
      { label: "Abandonment", value: "-18%" },
      { label: "Checkout Speed", value: "Faster" }
    ],
    takeaway: "Data-driven funnel optimization can unlock massive revenue without increasing traffic spend.",
    color: "from-pink-500 to-rose-500"
  },
  {
    id: "ai-automation",
    category: "Enterprise AI",
    title: "Reducing Operational Cost by 40% with AI Automation",
    context: "A mid-sized enterprise faced inefficiencies due to manual processes across operations and customer handling.",
    problem: [
      "Heavy dependency on manual workflows",
      "High operational costs",
      "Delays in response time",
      "Limited scalability"
    ],
    solution: [
      {
        step: "Process Mapping",
        details: "Identified repetitive workflows and mapped automation opportunities."
      },
      {
        step: "AI Implementation",
        details: "Built rule-based and ML-based automation systems for core operations."
      },
      {
        step: "System Integration",
        details: "Integrated APIs across CRM and backend systems for seamless data flow."
      },
      {
        step: "Smart Assist",
        details: "Deployed AI chatbots to handle routine queries and reduce human load."
      }
    ],
    results: [
      { label: "Op. Cost", value: "-40%" },
      { label: "Execution", value: "60% Faster" },
      { label: "Productivity", value: "Significant" },
      { label: "Decision Making", value: "Data-led" }
    ],
    takeaway: "AI is not just innovation — it’s a direct lever for cost efficiency and scalability.",
    color: "from-blue-500 to-indigo-500"
  },
  {
    id: "saas-launch",
    category: "SaaS Product",
    title: "Building a Scalable SaaS Platform for 10,000+ Users",
    context: "A startup wanted to launch a SaaS product but lacked technical expertise and scalable architecture.",
    problem: [
      "No product architecture",
      "Undefined roadmap",
      "Scalability concerns",
      "Limited technical resources"
    ],
    solution: [
      {
        step: "Product Strategy",
        details: "Defined roadmap and prioritized MVP features using business goals."
      },
      {
        step: "Architecture Design",
        details: "Designed scalable, cloud-native modular systems for future-ready growth."
      },
      {
        step: "Full-Stack Dev",
        details: "API-first development focusing on performance and modularity."
      },
      {
        step: "Cloud Scaling",
        details: "Optimized deployment for high performance and near-zero downtime."
      }
    ],
    results: [
      { label: "Launch", value: "Record Time" },
      { label: "User Base", value: "10,000+" },
      { label: "Uptime", value: "High Perf" },
      { label: "Scalability", value: "Proven" }
    ],
    takeaway: "Strong product thinking + scalable tech = successful SaaS launch.",
    color: "from-indigo-500 to-violet-500"
  }
];

export const HERO_DATA = {
  badge: "Innovation · Scale · Excellence",
  heading: {
    line1: "Build Scalable Digital & AI Solutions",
    line2: "for Modern Businesses",
  },
  subtext: "At Triveda Technologies, we help startups and enterprises design, build, and scale powerful technology solutions — from custom software to AI-driven transformation.",
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

export const TRUST_STRIP_DATA = {
  headline: "Trusted by growing businesses across industries",
  stats: [
    { label: "50+ Projects Delivered" },
    { label: "10+ Industries Served" },
    { label: "95% Client Satisfaction" },
    { label: "End-to-End Execution" },
  ],
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
    desc: "Build scalable, secure, and high-performance applications tailored to your business needs.",
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
    title: "AI & Data Solutions",
    desc: "Leverage AI and analytics to automate workflows, uncover insights, and make smarter decisions.",
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
    desc: "Accelerate customer acquisition and revenue with performance-driven marketing strategies.",
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
  {
    title: "CX & Loyalty Platforms",
    desc: "Enhance customer engagement, retention, and lifetime value through personalized experiences.",
    icon: Users,
    color: "from-cyan-500 to-blue-500",
    tags: ["Loyalty", "CRM", "Retention", "Personalization"],
    subServices: [
      "Loyalty Program Design",
      "Rewards & Incentives Management",
      "Customer Data Platform (CDP)",
      "Omnichannel Engagement",
      "Retention Analytics",
      "Membership Management",
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
    icon: Target,
    title: "End-to-End Ownership",
    desc: "From ideation to execution and scaling — we handle everything.",
  },
  {
    icon: Cpu,
    title: "AI-First Approach",
    desc: "We embed intelligence into every solution we build.",
  },
  {
    icon: Rocket,
    title: "Faster Time-to-Market",
    desc: "Agile execution ensures rapid delivery without compromising quality.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Execution",
    desc: "Scalable, secure, and robust solutions designed for long-term growth.",
  },
  {
    icon: BarChart3,
    title: "Growth-Focused Thinking",
    desc: "Every solution is aligned with business outcomes and ROI.",
  },
];

export const TEAM_DATA = [
  {
    name: "Aman Tripathi",
    role: "Founder & CEO",
    specialization: "Product & Strategy",
    image: "/team/aman.jpg",
    linkedin: "#",
  },
  {
    name: "Akshay Singh",
    role: "Co-Founder & CTO",
    specialization: "Technology & AI",
    image: "/team/akshay.jpg",
    linkedin: "#",
  },
  {
    name: "Rahul Mehra",
    role: "Head of Growth",
    specialization: "Digital Transformation",
    image: "/team/rahul.jpg",
    linkedin: "#",
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
  email: "care@trivedatechnologies.com",
  phone: "+919973243422",
  phoneDisplay: "+91 9973243422",
  whatsapp: "919973243422",
  linkedin: "https://www.linkedin.com/company/triveda-technologies",
  address: "3rd Floor, Plot 1A, Surat Nagar Phase 1, Gurugram – 122006",
};

export const DETAILED_SERVICES_DATA: Record<string, any> = {
  "product": {
    heading: "Building Scalable Digital Products from Idea to Growth",
    description: "At Triveda Technologies, we help businesses transform ideas into powerful digital products. From initial concept to full-scale deployment, we focus on building solutions that are scalable, user-centric, and aligned with business goals.",
    features: [
      "Product Strategy & Roadmapping",
      "MVP Development (0 → 1 Launch)",
      "UI/UX Design & Prototyping",
      "Full-Stack Product Development",
      "Product Scaling & Optimization",
      "Performance & Conversion Optimization"
    ],
    impact: [
      "Faster time-to-market",
      "Scalable architecture from day one",
      "Higher user engagement & retention",
      "Reduced development risks"
    ],
    color: "from-blue-500 to-indigo-500"
  },
  "technology-solutions": {
    heading: "Robust, Scalable & Enterprise-Grade Technology Solutions",
    description: "We design and develop high-performance systems tailored to complex business needs. Our technology solutions are built with scalability, security, and long-term sustainability in mind.",
    features: [
      "Custom Software Development",
      "Web Application Development",
      "Mobile App Development (Android & iOS)",
      "API Development & Integration",
      "Legacy System Modernization",
      "Enterprise Application Development"
    ],
    impact: [
      "Improved operational efficiency",
      "Seamless system integration",
      "Reduced technical debt",
      "Future-ready infrastructure"
    ],
    color: "from-indigo-500 to-violet-500"
  },
  "ai-analytics": {
    heading: "Unlock the Power of Data & AI for Smarter Decisions",
    description: "We leverage artificial intelligence and advanced analytics to help businesses automate processes, gain actionable insights, and drive smarter decision-making.",
    features: [
      "AI & Machine Learning Solutions",
      "Predictive Analytics & Forecasting",
      "Business Intelligence Dashboards",
      "Data Engineering & Warehousing",
      "AI-Powered Automation (RPA)",
      "Chatbots & Conversational AI"
    ],
    impact: [
      "Data-driven decision making",
      "Reduced manual effort through automation",
      "Improved forecasting accuracy",
      "Enhanced customer experience"
    ],
    color: "from-violet-500 to-purple-500"
  },
  "cloud-services": {
    heading: "Scalable, Secure & High-Performance Cloud Infrastructure",
    description: "We help businesses migrate, manage, and optimize their infrastructure on the cloud, ensuring high availability, security, and scalability.",
    features: [
      "Cloud Migration & Deployment",
      "Cloud Architecture Design",
      "DevOps & CI/CD Setup",
      "Infrastructure Optimization",
      "Security & Compliance",
      "Monitoring & Performance Management"
    ],
    impact: [
      "Reduced infrastructure cost",
      "High system availability & scalability",
      "Faster deployment cycles",
      "Enhanced security & reliability"
    ],
    color: "from-purple-500 to-pink-500"
  },
  "digital-marketing": {
    heading: "Driving Growth with Performance-Driven Marketing",
    description: "We help businesses acquire, engage, and convert customers through data-driven digital marketing strategies focused on measurable outcomes.",
    features: [
      "Performance Marketing (Google, Meta, LinkedIn)",
      "Search Engine Optimization (SEO)",
      "Social Media Marketing",
      "Marketing Automation",
      "Conversion Rate Optimization (CRO)",
      "Funnel & Growth Analytics"
    ],
    impact: [
      "Increased customer acquisition",
      "Higher ROI on marketing spend",
      "Improved conversion rates",
      "Stronger brand presence"
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
    { name: "Product Design", href: "/services/product" },
    { name: "Technology Solutions", href: "/services/technology-solutions" },
    { name: "AI & Analytics", href: "/services/ai-analytics" },
    { name: "Cloud Services", href: "/services/cloud-services" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
  ],
};

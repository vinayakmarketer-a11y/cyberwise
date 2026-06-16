export interface Course {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  duration: string;
  modulesCount: number;
  skillsAcquired: string[];
  learningFormat: string;
  iconName: string;
  detailedDescription: string;
  outcomes: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  image: string;
  gender: 'male' | 'female';
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'courses' | 'careers' | 'admissions';
}

export interface CareerRole {
  role: string;
  salaryEntry: string;
  salaryExperienced: string;
  growthRate: string;
  description: string;
  skills: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  views: string;
  image: string;
}

export interface SuccessStory {
  id: string;
  name: string;
  previousRole: string;
  placedRole: string;
  placedAt: string;
  salaryHike: string;
  testimonial: string;
  avatarSeed: string;
}

export const STATS = [
  { value: "500+", suffix: "Trained", label: "Students Empowered", subtitle: "Building real-world careers" },
  { value: "100+", suffix: "Projects", label: "Live Client Projects", subtitle: "Hands-on implementation" },
  { value: "95%", suffix: "Success", label: "Career Support", subtitle: "Placement & mock interviews" },
  { value: "10+", suffix: "Modules", label: "Marketing Modules", subtitle: "From beginner to advanced AI" }
];

export const COURSES_DATA: Course[] = [
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    slug: "search-engine-optimization",
    shortDescription: "Rank on the first page of Google. Master core keyword research, local search ranking, off-page strategies, tracking & technical frameworks.",
    duration: "4 Weeks",
    modulesCount: 6,
    skillsAcquired: ["On-Page SEO", "Technical Audit", "Backlinking", "Google Search Console", "Screaming Frog", "Local SEO (GMB)"],
    learningFormat: "Practical Training & Live Audits",
    iconName: "Search",
    detailedDescription: "Learn to systematically diagnose, plan, and optimize websites for higher organic search engine page ranks. Master semantic SEO, mobile SEO, schema markup, Core Web Vitals, and competitor analysis using premium platforms such as Semrush and Ahrefs.",
    outcomes: ["Conduct end-to-end SEO audits", "Rank local businesses on Google Maps", "Leverage organic traffic to reduce ad costs"]
  },
  {
    id: "smm",
    title: "Social Media Marketing (SMM)",
    slug: "social-media-marketing",
    shortDescription: "Dominate Facebook, Instagram, LinkedIn, and YouTube. Craft viral growth strategies, run hyper-targeted campaigns, and build loyal online communities.",
    duration: "5 Weeks",
    modulesCount: 8,
    skillsAcquired: ["Meta Business Suite", "LinkedIn Ads", "Content Planning", "Community Moderation", "Influencer Strategy", "Sprout Social"],
    learningFormat: "Real Campaign Budgets & Post Designing",
    iconName: "Share2",
    detailedDescription: "This module covers modern social algorithms, organic brand positioning, social selling, community building, and creative design standards. Learn how to transform followers into paying brand advocates with data-tested SMM methodologies.",
    outcomes: ["Build full-funnel content calendars", "Run retargeting structures on Instagram", "Scale high-conversion organic channels"]
  },
  {
    id: "content",
    title: "Content Creation & Marketing",
    slug: "content-creation-marketing",
    shortDescription: "Master copywriting, scriptwriting, SEO blogging, storytelling, and high-impact visual design. Produce content that consistently sells.",
    duration: "3 Weeks",
    modulesCount: 5,
    skillsAcquired: ["Copywriting Hooks", "Scriptwriting for Reels", "Brand Tone Guidelines", "Blog Structure", "Canva Pro", "SEO Writing"],
    learningFormat: "Portfolio Assignment Reviews",
    iconName: "Edit3",
    detailedDescription: "Unlock the human psychology behind digital content. Learn to structure landing page copy, video marketing scripts, case studies, and email copies that create strong emotional connections and drive conversions.",
    outcomes: ["Write highly clickable ad captions", "Produce shareable vertical video outlines", "Rank informative long-form articles"]
  },
  {
    id: "ppc",
    title: "Pay Per Click Advertising (PPC)",
    slug: "pay-per-click-advertising",
    shortDescription: "Design high-ROI Google Ads, Meta Ads, and LinkedIn Campaigns. Optimize bidding strategy, dynamic search ads, and custom conversions.",
    duration: "6 Weeks",
    modulesCount: 9,
    skillsAcquired: ["Google Search & Display Ads", "Meta Ads Manager", "A/B Testing", "Pixel & API Tracking", "Remarketing Funnels", "ROAS Optimization"],
    learningFormat: "Live Budget Management Simulator",
    iconName: "TrendingUp",
    detailedDescription: "Master the intricacies of paid acquisition. From media planning and audience research to campaign set-up, ad-copy variation testing, conversion tracking implementation, and performance monitoring for peak Return on Ad Spend (ROAS).",
    outcomes: ["Build and run dynamic product ads", "Deploy pixel setup with exact custom events", "Execute performance audits with confidence"]
  },
  {
    id: "email",
    title: "Email Marketing & Automation",
    slug: "email-marketing-automation",
    shortDescription: "Deploy smart, personalized marketing workflows, automated lead nurturing grids, customer retention sequences, and trigger-behavior lists.",
    duration: "3 Weeks",
    modulesCount: 4,
    skillsAcquired: ["Mailchimp / Brevo", "Drip Workflows", "A/B Subject Tests", "Spam-Filter Compliance", "Audience Segmentation"],
    learningFormat: "Sandbox Automation setups",
    iconName: "Mail",
    detailedDescription: "Understand list acquisition guidelines, clean deliverability standards, email design psychology, conditional branch marketing automation, and how to analyze open/click-through parameters.",
    outcomes: ["Draft fully automated cart recovery flows", "Write high-delivery newsletters", "Segment passive vs active user bases"]
  },
  {
    id: "analytics",
    title: "Web Analytics & Reporting",
    slug: "web-analytics-reporting",
    shortDescription: "Unlock user behavior, conversion pathways, digital attribution, and visual metrics with Google Analytics (GA4) and Google Looker Studio.",
    duration: "4 Weeks",
    modulesCount: 6,
    skillsAcquired: ["Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Looker Studio Dashboarding", "UTM Tracking Parameters", "Funnel Analytics"],
    learningFormat: "Dashboard Construction Lab",
    iconName: "BarChart3",
    detailedDescription: "Data rules the digital world. Learn custom configuration in GA4, trigger-based tracking with Google Tag Manager, creating clean performance summaries for executive review, and measuring cross-channel attribution.",
    outcomes: ["Create custom executive KPI dashboards", "Analyze detailed cross-page dropoffs", "Setup tracking pixels via Google Tag Manager"]
  },
  {
    id: "ai",
    title: "AI Tools for Digital Marketing",
    slug: "ai-tools-digital-marketing",
    shortDescription: "Lead the future! Integrate ChatGPT, Midjourney, AI automation, semantic keyword generators, dynamic ad templates, and rapid workflows.",
    duration: "3 Weeks",
    modulesCount: 5,
    skillsAcquired: ["Prompt Engineering", "AI Video Scripting", "AI Voice Generation", "GPT-powered Data Wrangling", "Content Scale Workflows"],
    learningFormat: "Co-Pilot Marketing Exercises",
    iconName: "Cpu",
    detailedDescription: "Transform into a highly advanced digital marketer who generates high-quality campaigns in minutes. Learn smart prompts, personalized GPT creation, synthetic voice-over scripting, and smart image tools to boost marketing efficiency by 10x.",
    outcomes: ["Synthesize highly targeted landing page assets", "Automate personalized email drafts", "Analyze market competitors utilizing generative AI"]
  },
  {
    id: "web-basics",
    title: "Website Development Fundamentals",
    slug: "website-development-fundamentals",
    shortDescription: "Create gorgeous, loading-optimized WordPress websites, high-converting landing pages, and master basic UI/UX principles.",
    duration: "4 Weeks",
    modulesCount: 6,
    skillsAcquired: ["WordPress & Elementor", "Domain & Hosting setup", "On-Page Schema Integration", "Speed Optimization", "Landing Page UX Basics"],
    learningFormat: "Build Your Own Live Portfolio Website",
    iconName: "Globe",
    detailedDescription: "No coding skills required! Learn domain-mapping, template layouts, wireframing, secure server-hosting, plugin integrations, form capture setups, and speed optimization criteria to build high-converting landing nodes.",
    outcomes: ["Build and publish client sites", "Optimize load speeds under 2 seconds", "Install SSL and secure admin doors"]
  }
];

export const WHY_CHOOSE_DATA = [
  {
    title: "Industry-Oriented Curriculum",
    description: "Get trained with practical skills designed directly around current market demands, updated quarterly to sync with algorithmic shifts.",
    iconName: "BookOpen"
  },
  {
    title: "Expert Trainers",
    description: "Learn directly from active digital practitioners who manage active domestic and global marketing campaigns daily.",
    iconName: "Award"
  },
  {
    title: "Hands-On Practical Training",
    description: "We bypass boring standard theories. 85% of your classroom program consists of real-world system workshops and direct campaign management.",
    iconName: "Sliders"
  },
  {
    title: "Live Project Experience",
    description: "Gain dynamic authority by implementing strategies and ad funds on actual client brands backed by CyberWise Info Solutions' active client network.",
    iconName: "FileSpreadsheet"
  },
  {
    title: "Placement Assistance",
    description: "Prepare thoroughly with dedicated resume building workshops, simulated mock interviewer sessions, and exclusive placement networks.",
    iconName: "Briefcase"
  },
  {
    title: "Certifications",
    description: "Earn valuable Google, Meta, HubSpot, and CyberWise Skillsversity institutional credentials to instantly elevate your professional profile.",
    iconName: "CheckCircle2"
  },
  {
    title: "Freelancing Guidance",
    description: "Learn to build high-income profiles on Upwork and Fiverr, write competitive client Proposals, manage invoices, and convert target international leads.",
    iconName: "DollarSign"
  },
  {
    title: "AI Marketing Training",
    description: "Stay years ahead of others. Experience our unique integrated AI training, learning advanced prompts to create, scale, and audit campaigns dynamically.",
    iconName: "Sparkles"
  }
];

export const CAREER_ROLES_DATA: CareerRole[] = [
  {
    role: "Digital Marketing Executive",
    salaryEntry: "₹2.4 - ₹3.6 LPA",
    salaryExperienced: "₹5.0 - ₹8.0 LPA",
    growthRate: "18% YoY",
    description: "Implements high-impact daily social activities, updates on-site tags, moderates comments, drafts simple emails, and monitors keyword performance.",
    skills: ["Campaign setups", "SMM basics", "Content creation", "Basic search rank analytics"]
  },
  {
    role: "SEO Specialist",
    salaryEntry: "₹3.0 - ₹4.5 LPA",
    salaryExperienced: "₹6.5 - ₹10 LPA+",
    growthRate: "22% YoY",
    description: "Directs organic growth campaigns, runs site indexation audits, designs backlink maps, tracks dynamic keywords, and maps Google Core updates.",
    skills: ["Google Search Console", "Semantic schema", "Disavow processes", "Link audits"]
  },
  {
    role: "Social Media Manager",
    salaryEntry: "₹2.8 - ₹4.2 LPA",
    salaryExperienced: "₹6.0 - ₹9.5 LPA",
    growthRate: "20% YoY",
    description: "Develops cross-channel organic reach matrices, manages community trends, drives active influencer campaigns, and standardizes visual brand tones.",
    skills: ["Instagram reels strategy", "Engagement analytics", "Brand storytelling", "Content creation"]
  },
  {
    role: "PPC Specialist & Paid Advertiser",
    salaryEntry: "₹3.6 - ₹5.0 LPA",
    salaryExperienced: "₹8.0 - ₹15+ LPA",
    growthRate: "25% YoY",
    description: "Manages budgets directly across Meta, Google Search, and display corridors. Creates custom dynamic retargeting models and analyzes target CPA cost profiles.",
    skills: ["Conversion API tracking", "Bidding matrices", "Lookalike models", "ROAS target models"]
  },
  {
    role: "Content Strategist",
    salaryEntry: "₹2.8 - ₹4.0 LPA",
    salaryExperienced: "₹5.5 - ₹9.0 LPA",
    growthRate: "15% YoY",
    description: "Defines content pathways across blogging, podcasting, lead magnets, ebooks, sales page layouts, and corporate copy frameworks.",
    skills: ["Direct copywriting", "Landing page optimization", "Audience research", "SEO blogs"]
  },
  {
    role: "Performance Marketer",
    salaryEntry: "₹4.0 - ₹6.0 LPA",
    salaryExperienced: "₹10 - ₹20+ LPA",
    growthRate: "28% YoY",
    description: "The ultimate modern digital operator. Combines paid advertising, design funnels, automation workflows, conversion rates, and exact web telemetry for rapid brand scaling.",
    skills: ["Multi-touch attribution", "UX optimization", "LTV forecasts", "Advanced tag systems"]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "Aparna K. Nair",
    role: "Digital Marketing Specialist",
    company: "TCS, Kochi",
    quote: "CyberWise Skillsversity completely changed my career path! Coming from a non-technical background, the trainers made SEO and Google Ads look incredibly straightforward. Working directly on client dashboards boosted my confidence immensely. Got placed within a month of graduating!",
    rating: 5,
    gender: "female",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "test-2",
    name: "Arun Kumar",
    role: "SEO Specialist & Freelancer",
    company: "Self-Employed",
    quote: "The freelancing roadmap session alone is worth the fees! The mentors explained exactly how to approach international clients on Fiverr and write high-converting pitches on Upwork. I now handle 3 permanent international clients. A massive thank you to CyberWise!",
    rating: 5,
    gender: "male",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "test-3",
    name: "Fathima R.",
    role: "Social Media Executive",
    company: "Lulu Group Corporate, Kochi",
    quote: "I loved the practical assignments! We created real social calendars, scheduled active post designs with Canva, and studied Facebook algorithms on a live budget. Excellent, supportive faculty, and highly modern facilities in Angadippuram.",
    rating: 5,
    gender: "female",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "test-4",
    name: "Riyas K. P.",
    role: "Corporate Marketer & Entrepreneur",
    company: "Vivid Solutions, Calicut",
    quote: "As a business founder, I joined the digital marketing school to cut outer marketing expenses. The knowledge of Meta Ads, local optimization, and AI tools has allowed me to double my leads while reducing CPC rates by half! Highly recommended.",
    rating: 5,
    gender: "male",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "test-5",
    name: "Deepthi Mohan",
    role: "PPC Executive",
    company: "Cognizant Technology Solutions",
    quote: "CyberWise Skillsversity is undoubtedly the best institute in Malappuram for digital training. Their focus on custom attribution models, Tag Manager triggers, Google Analytics audits, and performance strategies of high-ticket brands is unmatched.",
    rating: 5,
    gender: "female",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "test-6",
    name: "Rahul Sidharth",
    role: "Performance Campaigner",
    company: "WebSprout Agency, Bangalore",
    quote: "The inclusion of advanced AI Tools in the syllabus made me unique in professional interviews. I could present detailed auto-generated media maps and smart automated flows. The placement help walked me through exactly what technical heads ask.",
    rating: 5,
    gender: "male",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  }
];

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: "sc-1",
    name: "Anjali Krishna",
    previousRole: "BBA Fresher",
    placedRole: "SEO & Content Lead",
    placedAt: "DigiReach Agency, Ernakulam",
    salaryHike: "Placed at ₹3.8 LPA",
    testimonial: "I came to CyberWise containing only theories. The system audits helped me present actual performance reports during my first interview.",
    avatarSeed: "anjali"
  },
  {
    id: "sc-2",
    name: "Mohammed Shafi",
    previousRole: "Unemployed Graduate",
    placedRole: "PPC Campaign Manager",
    placedAt: "MediaHub Solutions, Bangalore",
    salaryHike: "140% Starting Wage Hike",
    testimonial: "The active dashboard practice gave me the practical knowledge to design, run, and optimize high-budget Google & Meta Search funnels.",
    avatarSeed: "shafi"
  },
  {
    id: "sc-3",
    name: "Sandra Joy",
    previousRole: "Traditional Sales Executive",
    placedRole: "Performance Marketing Manager",
    placedAt: "Nesto Hypermarket Digital, UAE",
    salaryHike: "Placed Internationally",
    testimonial: "Transitioning to modern digital metrics was easy because the mentors explained all terms in a simple, practical, daily-life method.",
    avatarSeed: "sandra"
  }
];

export const FAQS_DATA: FAQ[] = [
  {
    id: "faq-1",
    question: "Do I need technical skills or a coding background to join?",
    answer: "Absolutely not! Digital marketing is highly strategy and psychology-driven. Our curriculum starts from total scratch (domain, branding, social setups) and moves up smoothly. Over 70% of our successful students come from non-tech, business, arts, or commerce backgrounds.",
    category: "general"
  },
  {
    id: "faq-2",
    question: "What is the duration of the complete digital marketing certification?",
    answer: "Our customized professional course ranges from 2 to 3 months depending on the specific track chosen (Standard vs Advanced Master Track with AI integration). It comprises regular theoretical breakdowns followed directly by intensive hands-on computer lab sessions.",
    category: "courses"
  },
  {
    id: "faq-3",
    question: "How does the Live Client Project training work?",
    answer: "Through our parent agency CyberWise Info Solutions, we receive active local and international projects. Eligible students are integrated directly into our content, SEO, and paid ad campaign calendars, allowing you to build real portfolios with actual live-budget outcomes.",
    category: "courses"
  },
  {
    id: "faq-4",
    question: "Is there support for Job Placement?",
    answer: "Yes, we offer absolute Placement Support. This includes optimizing your professional resume, establishing high-visibility LinkedIn profiles, training extensively on interview scenarios, providing mock interview tasks, and sharing vacancies from our local and regional enterprise partners.",
    category: "careers"
  },
  {
    id: "faq-5",
    question: "Will I get certified after this program?",
    answer: "Definitely! Apart from the institutional master diploma certificate from CyberWise Skillsversity, you will receive exhaustive instruction guides and guidance to successfully complete and earn up to 10+ free, resume-ready certificates directly from Google, Meta, and HubSpot.",
    category: "courses"
  },
  {
    id: "faq-6",
    question: "Are offline classroom batches available in Malappuram?",
    answer: "Yes, our key Digital Lab and classroom are fully functioning at Angadippuram, strategically located beside Perinthalmanna relative to transit lines. We offer both standard morning batches and weekend tracks perfect for working people and college attendees.",
    category: "admissions"
  },
  {
    id: "faq-7",
    question: "Can I learn to establish a freelancing business?",
    answer: "Yes! Freelancing strategy is built-in. You'll master freelancing basics details, set up premium portfolios, learn standard international invoicing, handle client communications, and understand Upwork/Fiverr bid proposals.",
    category: "careers"
  }
];

export const BLOGS_DATA: BlogPost[] = [
  {
    id: "blog-1",
    title: "10 AI Tools Transforming Modern Digital Marketing in 2026",
    excerpt: "Discover how AI prompt engines, automated copy generators, and generative layout tools are shortening project timelines and boosting standard click metrics.",
    category: "Artificial Intelligence",
    readTime: "5 Min Read",
    date: "June 12, 2026",
    views: "1.2k views",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "blog-2",
    title: "Understanding Local SEO for Small Businesses in Malappuram",
    excerpt: "Get details on ranking your store high on Google Maps. Essential hacks on citation links, geo-tagged reviews, and structured localized catalogs.",
    category: "SEO & Search",
    readTime: "4 Min Read",
    date: "June 08, 2026",
    views: "940 views",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "blog-3",
    title: "The Ultimate Guide to Google Analytics 4 (GA4) Funnels",
    excerpt: "Stop guessing why your checkout bounce is high. Learn to build proper custom funnel tracking nodes to find exact user leakage sources instantly.",
    category: "Web Analytics",
    readTime: "7 Min Read",
    date: "June 01, 2026",
    views: "810 views",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
  }
];

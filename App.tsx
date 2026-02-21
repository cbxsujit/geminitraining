
import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  CheckCircle, 
  MessageSquare, 
  TrendingUp, 
  Lightbulb, 
  Settings, 
  Copy, 
  ChevronDown, 
  ChevronUp,
  Menu, 
  X, 
  Target,
  Calendar, 
  HelpCircle,
  ExternalLink,
  ClipboardCheck,
  Zap,
  Download,
  FileText,
  ShoppingBag,
  Utensils,
  Sparkles,
  Home,
  CheckCircle2,
  Award,
  ArrowRight,
  Sun,
  Moon,
  Factory,
  Activity,
  BarChart,
  Search,
  Check,
  RefreshCw,
  Quote,
  Star,
  Heart,
  ShieldAlert,
  Cpu,
  Globe,
  Database,
  Info,
  Type,
  Image as ImageIcon,
  Video as VideoIcon,
  Layout,
  Compass
} from 'lucide-react';
import { 
  QUICK_START_STEPS, 
  DAILY_USES, 
  MARKETING_GUIDE, 
  HABIT_CHALLENGE, 
  FAQS, 
  HANDSON_EXERCISES, 
  INDUSTRY_PROMPT_PACKS,
  VISUAL_MARKETING_PROMPTS
} from './data';

// --- Helper Components ---

const SidebarLink: React.FC<{ 
  id: string; 
  label: string; 
  icon: React.ReactNode; 
  active: boolean;
  onClick: () => void;
  isDarkMode: boolean;
}> = ({ id, label, icon, active, onClick, isDarkMode }) => (
  <button 
    type="button"
    onClick={(e) => {
      e.preventDefault();
      onClick();
      const el = document.getElementById(id);
      if (el) {
        window.scrollTo({
          top: el.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-left cursor-pointer ${
      active 
      ? 'bg-red-600 text-white shadow-lg shadow-red-900/20 font-semibold' 
      : isDarkMode 
        ? 'text-slate-400 hover:bg-slate-800 hover:text-white'
        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
    }`}
  >
    <span className={`${active ? 'text-white' : isDarkMode ? 'text-slate-500 group-hover:text-red-400' : 'text-slate-400 group-hover:text-red-600'}`}>
      {icon}
    </span>
    <span className="text-sm font-medium">{label}</span>
  </button>
);

const SectionHeading: React.FC<{ title: string; subtitle?: string; isDarkMode: boolean }> = ({ title, subtitle, isDarkMode }) => (
  <div className="mb-10">
    <div className="flex items-center gap-3 mb-2">
      <div className="h-1 w-10 bg-red-600 rounded-full"></div>
      <span className="text-red-500 text-xs font-black uppercase tracking-[0.2em]">Curriculum</span>
    </div>
    <h2 className={`text-3xl md:text-5xl font-extrabold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
    {subtitle && <p className={`text-lg max-w-2xl font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{subtitle}</p>}
  </div>
);

const CopyButton: React.FC<{ text: string; isDarkMode: boolean; label?: string; showLabel?: boolean }> = ({ text, isDarkMode, label = "Copy Prompt", showLabel = true }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button 
      type="button"
      onClick={handleCopy}
      className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all border min-w-[40px] ${
        copied 
        ? 'bg-green-600 text-white border-green-600 shadow-lg shadow-green-900/20' 
        : isDarkMode
          ? 'bg-transparent text-slate-300 border-slate-700 hover:border-red-500 hover:text-white'
          : 'bg-transparent text-slate-600 border-slate-200 hover:border-red-600 hover:text-slate-900'
      }`}
    >
      {copied ? <ClipboardCheck size={14} /> : <Copy size={14} />}
      {(copied || showLabel) && <span>{copied ? 'Copied' : label}</span>}
    </button>
  );
};

const ChecklistItem: React.FC<{ title: string; instruction: string; index: number; isDarkMode: boolean }> = ({ title, instruction, index, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-4 last:mb-0">
      <button 
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-6 flex items-center justify-between text-left rounded-2xl border transition-all ${
          isOpen 
          ? isDarkMode 
            ? 'bg-slate-900 border-red-900/50 shadow-2xl shadow-red-900/10' 
            : 'bg-white border-red-200 shadow-xl shadow-red-100'
          : isDarkMode
            ? 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
            : 'bg-white border-slate-100 hover:border-slate-200'
        }`}
      >
        <div className="flex items-center gap-5">
          <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-600 text-white font-black shadow-lg">
            {index + 1}
          </span>
          <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{title}</h3>
        </div>
        <div className={`p-2 rounded-full transition-all ${isOpen ? 'bg-red-600 text-white rotate-180' : isDarkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-50 text-slate-400'}`}>
           <ChevronDown size={18} />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 opacity-100 py-6 px-10' : 'max-h-0 opacity-0'}`}>
        <p className={`leading-relaxed text-base font-medium border-l-2 border-red-600 pl-6 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{instruction}</p>
      </div>
    </div>
  );
};

const FaqAccordionItem: React.FC<{ question: string; answer: string; isDarkMode: boolean }> = ({ question, answer, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`border-b last:border-0 transition-colors ${isDarkMode ? 'border-slate-800' : 'border-slate-100'}`}>
      <button 
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <div className="flex items-center gap-6">
          <span className={`p-2 rounded-xl transition-colors ${isOpen ? 'bg-red-600 text-white shadow-lg shadow-red-900/20' : isDarkMode ? 'bg-slate-800 text-slate-500 group-hover:text-red-500' : 'bg-slate-50 text-slate-400 group-hover:text-red-600'}`}>
            <HelpCircle size={20} />
          </span>
          <h3 className={`text-xl font-bold transition-colors ${isOpen ? 'text-red-600' : isDarkMode ? 'text-white' : 'text-slate-900'}`}>{question}</h3>
        </div>
        <div className={`transition-all duration-300 ${isOpen ? 'rotate-180 text-red-600' : 'text-slate-400'}`}>
           <ChevronDown size={24} />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}>
        <div className={`pl-16 pr-8 leading-relaxed text-lg font-medium border-l-2 border-red-600/30 ml-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          {answer}
        </div>
      </div>
    </div>
  );
};

const IndustryIcon: React.FC<{ type: string }> = ({ type }) => {
  switch(type) {
    case 'ShoppingBag': return <ShoppingBag size={18} />;
    case 'Utensils': return <Utensils size={18} />;
    case 'Sparkles': return <Sparkles size={18} />;
    case 'Home': return <Home size={18} />;
    case 'Factory': return <Factory size={18} />;
    case 'Activity': return <Activity size={18} />;
    case 'BarChart': return <BarChart size={18} />;
    default: return <FileText size={18} />;
  }
};

// --- Main App ---

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [completedExercises, setCompletedExercises] = useState<string[]>([]);
  const [completedHabits, setCompletedHabits] = useState<number[]>([]);
  const [activeIndustry, setActiveIndustry] = useState(INDUSTRY_PROMPT_PACKS[0].id);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [faqSearch, setFaqSearch] = useState('');
  const [activeMarketingLab, setActiveMarketingLab] = useState(0);
  const [activeToolTab, setActiveToolTab] = useState(0);
  const [activeMarketingMainTab, setActiveMarketingMainTab] = useState<'text' | 'image' | 'video'>('text');
  const [activeVisualIndustry, setActiveVisualIndustry] = useState(0);

  const RTCP_OPTIONS = {
    roles: ["Expert Manufacturing Consultant", "Customer Loyalty Strategist", "Medical Operations Manager", "Supply Chain Analyst", "Hospitality Experience Designer"],
    tasks: ["analyze our monthly wastage and suggest 3 SOP changes", "draft a personalized re-engagement campaign", "create a training checklist for new floor staff", "write a formal negotiation script for better credit terms", "design a patient-first communication workflow"],
    contexts: ["for my CNC machining unit in Pune", "for our multi-specialty dental clinic", "for a high-volume trading firm in Ahmedabad", "for a 50-room boutique resort in Goa", "for my retail furniture showroom"],
    formats: ["in a structured table format", "as a concise bulleted list", "as a professional 3-paragraph email", "in simple Hindi with English technical terms", "as a 1-page summary PDF outline"]
  };

  const SAMPLES_DATA = {
    "supplyChain": "SUPPLY CHAIN STRATEGY REPORT: Q1 2025 OPTIMIZATION\n==================================================\n\n1. EXECUTIVE SUMMARY\nThis report outlines the strategic transition of our logistics framework from a reactive model to a data-driven, localized network. The primary goal is a 20% reduction in fulfillment time and a 15% decrease in operational wastage.\n\n2. CURRENT BOTTLENECK ANALYSIS\n- Dependency on Single-Hub Logistics: 65% of all inter-state inventory passes through a single hub, causing delays during peak periods.\n- High Transit Damage: Current packaging standards are insufficient for the Pune-Ahmedabad route conditions.\n- Manual Tracking Gaps: Real-time visibility of 'Last Mile' delivery is currently at only 40% accuracy.\n\n3. STRATEGIC PILLARS\n- Pillar 1: Decentralized Warehousing. Establishing 3 micro-hubs in key industrial zones by May 2025.\n- Pillar 2: Vendor Diversification. Onboarding 5 additional tier-2 freight partners to mitigate strike or weather risks.\n- Pillar 3: AI-Driven Route Optimization. Implementing automated route planning to reduce total mileage and fuel consumption.\n\n4. IMPLEMENTATION TIMELINE\n- Phase 1 (April): Audit existing vendor contracts and SLA performance.\n- Phase 2 (May): Deployment of IoT sensors on high-value bulk shipments.\n- Phase 3 (June): Integration of real-time supply chain dashboard for management.",
    "termination": "REVISED LEGAL CLAUSE: TERMINATION & EXIT PROTOCOLS\n==================================================\n\nARTICLE 12: DURATION AND TERMINATION\n\n12.1 TERMINATION FOR CONVENIENCE\nEither Party may terminate this Agreement at any time, without assigning any reason, by giving at least sixty (60) days' prior written notice to the other Party. During the notice period, all outstanding deliverables must be fulfilled as per the original schedule unless otherwise agreed in writing.\n\n12.2 TERMINATION FOR MATERIAL BREACH\nIn the event of a material breach of any terms of this Agreement, the non-defaulting party shall provide a written 'Cure Notice' to the defaulting party. If the breach is not rectified within fifteen (15) business days of receipt of such notice, the non-defaulting party reserves the right to terminate the Agreement immediately without further liability.\n\n12.3 CONSEQUENCES OF TERMINATION\nUpon termination, the Service Provider shall:\n- Immediately cease all usage of the Client's Intellectual Property and proprietary software.\n- Return or certify the destruction of all Confidential Information within 7 business days.\n- Provide a transition report summarizing all ongoing tasks and handover requirements to ensure zero business interruption.\n\n12.4 SURVIVAL OF TERMS\nClauses related to Confidentiality, Intellectual Property, and Indemnity shall survive the termination of this Agreement for a period of five (5) years.",
    "growth": "TECH FRIDAY: 2025 ENTERPRISE GROWTH BLUEPRINT\n==============================================\n\nI. VISION STATEMENT\nTo become the region's leading tech-integrated manufacturing hub, leveraging AI for 100% operational transparency and doubling production throughput by Q4 2025.\n\nII. MARKET OPPORTUNITY\n- Sector Shift: Increasing demand for precision-engineered components in the Tier-2 automotive supply chain.\n- Competitor Gap: Most local units lack real-time digital quality control (QC) tracking.\n\nIII. CORE GROWTH STRATEGIES\n\n1. DIGITAL TRANSFORMATION (THE AI EDGE)\n- Implement Gemini-driven predictive maintenance to reduce floor downtime by 30%.\n- Automate 80% of routine B2B customer inquiries via custom support Gems.\n\n2. GEOGRAPHIC EXPANSION\n- Establish a dedicated sales and service hub in the NCR region to capture the northern market.\n- Launch an 'Expert Remote Support' tier for international trading clients.\n\n3. PRODUCT DIVERSIFICATION\n- Research and prototype a new range of sustainable composite valves using 100% recycled industrial waste.\n\nIV. KEY PERFORMANCE INDICATORS (KPIs)\n- Target Revenue: ₹12 Crore (Annual).\n- Staff Efficiency: 25% increase in units produced per man-hour.\n- Client Retention: 95% renewal rate on Annual Maintenance Contracts (AMCs).\n\nV. RESOURCE REQUIREMENTS\n- Capital Expenditure: ₹45 Lakh for machinery upgrades.\n- Human Capital: Hiring 2 Lead Engineers and 1 AI Workflow Manager."
  };

  const POWER_TOOLS_DETAILED = [
    {
      name: "NotebookLM",
      icon: <Database className="text-red-600" size={24} />,
      tagline: "Your Personal Knowledge Engine",
      description: "NotebookLM acts as an AI research assistant that is grounded in YOUR data. You don't have to worry about general AI 'hallucinations' because it only answers based on the documents you upload.",
      businessValue: "Transforms folders of messy reports into a searchable, intelligent database. Perfect for summarizing long contracts, analyzing patient history, or digesting technical manuals.",
      useCases: [{ title: "Policy & Compliance", desc: "Upload local labor laws or company HR manuals to answer staff queries instantly." }, { title: "Product Knowledge", desc: "Upload technical catalogs for 1000+ items to help sales teams find exact specs." }, { title: "Audit Preparation", desc: "Upload 12 months of expense reports and ask for waste patterns or red flags." }],
      prompts: [
        { text: "Compare our Q3 vs Q4 spending patterns based on the uploaded balance sheets." },
        { text: "Based on the uploaded raw material price lists, which supplier has increased prices the most?" },
        { text: "Summarize the top 5 liability risks found in this 50-page vendor contract." },
        { text: "Create a training guide for my staff based on these newly uploaded safety regulations." }
      ]
    },
    {
      name: "Custom Gems",
      icon: <Cpu className="text-red-600" size={24} />,
      tagline: "Your Specialized AI Employees",
      description: "Gems allow you to create custom versions of Gemini that follow specific instructions. You can give them a personality, a set of rules, and a permanent business goal.",
      businessValue: "Scales your expertise by creating 'clones' of your best management logic. Saves you from repeating instructions to your team daily.",
      useCases: [{ title: "Virtual Supervisor", desc: "A Gem that reviews daily production logs and flags safety violations based on your rules." }, { title: "Customer Support Pro", desc: "A Gem trained in your brand's specific tone to draft all email replies for staff." }, { title: "Inventory Auditor", desc: "A Gem that specifically looks at stock levels and suggests re-order quantities." }],
      prompts: [
        { text: "Act as my Production Supervisor. Review this floor report and flag any misses against our SOP." },
        { text: "Act as my Financial Risk Advisor. Analyze this cash flow and tell me if we can afford expansion." },
        { text: "Act as my Lead Sales Closer. Help me draft a rebuttal for a client who says we are too expensive." },
        { text: "Act as my Quality Control Auditor. Create a checklist for our new batch of medical components." }
      ]
    },
    {
      name: "Deep Research",
      icon: <Globe className="text-red-600" size={24} />,
      tagline: "Your Market Intelligence Agent",
      description: "Deep Research uses Gemini to perform multi-step, complex web investigations. It cross-references facts and writes a full executive report.",
      businessValue: "Provides enterprise-grade market intelligence that would normally take a human analyst days to compile. Critical for expansion planning.",
      useCases: [{ title: "Competitor Benchmarking", desc: "Get a full report on 5 local competitors' pricing, reviews, and service offerings." }, { title: "Tech Scouting", desc: "Find the best new packaging technology available in India for liquid FMCG products." }, { title: "Trend Forecasting", desc: "Understand global shifts in consumer demand for organic fabrics before your competitors." }],
      prompts: [
        { text: "Research upcoming import duty changes for industrial machinery in India for 2025-26." },
        { text: "Perform a deep report on the top 5 ERP solutions for mid-sized Indian units, focusing on cost." },
        { text: "Identify the most successful digital marketing strategies used by mid-scale boutique hotels in Kerala." },
        { text: "Compare the customer sentiment of the top 3 competitive diagnostic labs in Mumbai based on reviews." }
      ]
    },
    {
      name: "Canvas",
      icon: <Layout className="text-red-600" size={24} />,
      tagline: "Interactive Drafting Workspace",
      description: "A dedicated side-by-side workspace where you can iterate on documents, code, and long-form content with real-time AI feedback and inline editing.",
      businessValue: "Accelerates the transition from raw ideas to finished professional documents. Ideal for refining complex business plans, drafting partnership agreements, or polishing marketing strategy documents.",
      useCases: [{ title: "Strategy Drafting", desc: "Iterate on a multi-page growth strategy with AI suggestions for each paragraph." }, { title: "Policy Refinement", desc: "Fine-tune company HR or safety policies side-by-side with an AI compliance expert." }, { title: "Content Polishing", desc: "Perfect your long-form articles or technical reports using inline AI editing tools." }],
      prompts: [
        { text: "Open Canvas to refine this 5-page supply chain strategy report.", sample: SAMPLES_DATA.supplyChain, filename: "Supply_Chain_Strategy_Full_Report.txt" },
        { text: "Help me iterate on the 'Termination Clause' of this vendor contract in Canvas.", sample: SAMPLES_DATA.termination, filename: "Legal_Vendor_Termination_Clause.txt" },
        { text: "Create a structured draft of our 2025 growth plan and let's polish it section by section in Canvas.", sample: SAMPLES_DATA.growth, filename: "Detailed_Business_Growth_Blueprint_2025.txt" }
      ]
    },
    {
      name: "Guided Learning",
      icon: <Compass className="text-red-600" size={24} />,
      tagline: "Interactive Skill Mastery",
      description: "Step-by-step interactive sessions that teach you how to master specific Gemini features and workflows through hands-on practice within the interface.",
      businessValue: "Reduces the learning curve for staff and ensuring your team uses the latest AI methodologies correctly. Saves time by preventing poor-quality prompts and inefficient workflows.",
      useCases: [{ title: "Staff Onboarding", desc: "Guided tutorials for new employees to learn your company's AI-driven workflow." }, { title: "Prompting Clinics", desc: "Interactive exercises that teach advanced prompting formulas like RTCP in real-time." }, { title: "Tool Discovery", desc: "Step-by-step walk-throughs of newly released AI features tailored to your industry." }],
      prompts: [
        { text: "Start a guided lesson on using Gemini for financial analysis and cash flow forecasting." },
        { text: "Teach me how to create multi-step workflow automations using Gems in this interactive session." },
        { text: "Show me how to use Deep Research to identify emerging market trends in the retail sector through a guided tutorial." }
      ]
    }
  ];

  const [rtcp, setRtcp] = useState({
    role: RTCP_OPTIONS.roles[0],
    task: RTCP_OPTIONS.tasks[0],
    context: RTCP_OPTIONS.contexts[0],
    format: RTCP_OPTIONS.formats[0]
  });

  useEffect(() => {
    const sections = ['hero', 'quick-start', 'daily-uses', 'marketing', 'industry-packs', 'tools', 'framework', 'practice', 'habit-plan', 'faq', 'workbook'];
    const observerOptions = { root: null, rootMargin: '-20% 0px -60% 0px', threshold: 0 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, observerOptions);
    sections.forEach(section => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleExercise = (id: string) => {
    setCompletedExercises(prev => prev.includes(id) ? prev.filter(exId => exId !== id) : [...prev, id]);
  };

  const toggleHabit = (day: number) => {
    setCompletedHabits(prev => prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navItems = [
    { id: 'quick-start', label: 'Quick Start', icon: <Zap size={18} /> },
    { id: 'daily-uses', label: 'Use Cases', icon: <MessageSquare size={18} /> },
    { id: 'marketing', label: 'Marketing Lab', icon: <TrendingUp size={18} /> },
    { id: 'industry-packs', label: 'Industry Kits', icon: <ShoppingBag size={18} /> },
    { id: 'tools', label: 'Power Tools', icon: <Settings size={18} /> },
    { id: 'framework', label: 'Prompt Formula', icon: <Target size={18} /> },
    { id: 'practice', label: 'Action Center', icon: <BookOpen size={18} /> },
    { id: 'habit-plan', label: '7-Day Sprint', icon: <Calendar size={18} /> },
    { id: 'faq', label: 'Knowledge Base', icon: <HelpCircle size={18} /> },
    { id: 'workbook', label: 'Tech Friday Workbook', icon: <FileText size={18} /> },
  ];

  const ThemeToggle = () => (
    <button
      type="button"
      onClick={() => setIsDarkMode(!isDarkMode)}
      className={`relative w-16 h-9 rounded-full transition-all duration-500 shadow-inner flex items-center p-1.5 ${isDarkMode ? 'bg-slate-800 border border-slate-700' : 'bg-slate-100 border border-slate-200'}`}
    >
      <div className={`absolute transition-all duration-500 transform flex items-center justify-center w-6 h-6 rounded-full shadow-lg ${isDarkMode ? 'translate-x-7 bg-slate-900 text-amber-400' : 'translate-x-0 bg-white text-red-600'}`}>
        {isDarkMode ? <Moon size={14} fill="currentColor" /> : <Sun size={14} fill="currentColor" />}
      </div>
    </button>
  );

  const filteredFaqs = FAQS.filter(f => f.question.toLowerCase().includes(faqSearch.toLowerCase()) || f.answer.toLowerCase().includes(faqSearch.toLowerCase()));
  const generatedPrompt = `Act as an ${rtcp.role}. Your task is to ${rtcp.task} ${rtcp.context}. Provide the output ${rtcp.format}.`;
  const openGeminiWithPrompt = (prompt: string) => window.open(`https://gemini.google.com/?q=${encodeURIComponent(prompt.trim())}`, '_blank');

  const handleDownloadFile = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleWorkbookDownload = () => {
    let workbookContent = `TECH FRIDAY: GEMINI AI BUSINESS SCALING WORKBOOK\n===========================================================\n\nThis blueprint summarizes the logic shared during the Masterclass.\n\n1. BUSINESS CORE\n2. RTCP FRAMEWORK\n3. USE CASES\n4. MARKETING LAB\n5. POWER TOOLS\n6. 7-DAY SPRINT\n\nFull details available in the guide.`;
    handleDownloadFile(workbookContent, 'Tech_Friday_AI_Business_Blueprint.txt');
  };

  return (
    <div className={`min-h-screen flex flex-col md:flex-row transition-colors duration-300 ${isDarkMode ? 'red-gradient-glow-dark' : 'red-gradient-glow-light'}`}>
      <header className={`md:hidden fixed top-0 left-0 right-0 z-50 border-b flex items-center justify-between px-6 py-4 shadow-2xl transition-colors backdrop-blur-xl ${isDarkMode ? 'bg-black/80 border-slate-800' : 'bg-white/80 border-slate-200'}`}>
        <div className="flex items-center gap-2">
          <Award className="text-red-600 w-5 h-5" />
          <span className={`font-black uppercase tracking-wider text-sm ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Tech Friday Handbook</span>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button type="button" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className={`p-2 rounded-lg ${isDarkMode ? 'text-white hover:bg-slate-800' : 'text-slate-900 hover:bg-slate-100'}`}>
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <aside className={`fixed inset-y-0 left-0 z-40 w-72 border-r transition-all duration-300 ease-in-out md:translate-x-0 md:sticky md:top-0 md:h-screen md:block ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} ${isDarkMode ? 'bg-black border-slate-900' : 'bg-white border-slate-200'}`}>
        <div className="h-full flex flex-col p-8 overflow-y-auto scrollbar-hide">
          <div className="mb-12 hidden md:flex items-center gap-3 px-2">
            <div className={`p-2 rounded-xl shadow-lg ${isDarkMode ? 'bg-red-600 shadow-red-900/40' : 'bg-red-600 shadow-red-200'}`}><Award className="text-white w-6 h-6" /></div>
            <div><span className={`font-black text-xl tracking-tight block leading-none ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Tech</span><span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Friday</span></div>
          </div>
          <nav className="flex-1 space-y-1.5">
            <p className="text-[10px] uppercase font-black text-slate-600 tracking-[0.2em] px-4 mb-4">Handbook Navigation</p>
            {navItems.map(item => (<SidebarLink key={item.id} {...item} active={activeSection === item.id} onClick={() => setIsSidebarOpen(false)} isDarkMode={isDarkMode} />))}
          </nav>
        </div>
      </aside>

      <main className="flex-1 px-4 md:px-8 py-10 md:py-16 max-w-7xl mx-auto w-full relative z-10">
        <div className="hidden md:flex justify-end mb-8"><ThemeToggle /></div>

        <section id="hero" className="mb-24 pt-16 md:pt-0 scroll-mt-24">
          <div className="max-w-4xl">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest mb-8 border shadow-sm backdrop-blur-md transition-colors ${isDarkMode ? 'bg-red-950/30 text-red-500 border-red-900/50' : 'bg-red-50 text-red-600 border-red-100'}`}>
              <span className="flex items-center gap-2"><Target size={14} className="text-red-500" /><span>OFFICIAL WORKSHOP RESOURCE</span></span>
            </div>
            <h1 className={`text-6xl md:text-9xl font-black leading-[0.9] mb-10 tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Business <br /><span className={`flex items-center gap-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>Scaling<ArrowRight className="text-red-600 w-12 h-12 md:w-20 md:h-20" /></span>With <span className="text-red-600 italic">Gemini AI</span></h1>
            <p className={`text-xl md:text-2xl mb-12 leading-relaxed font-medium max-w-2xl transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Practical hand-held guidance for business owners to automate, market, and grow using cutting-edge AI.</p>
            <button type="button" onClick={() => document.getElementById('quick-start')?.scrollIntoView({ behavior: 'smooth' })} className={`px-10 py-5 bg-red-600 text-white rounded-2xl font-black text-lg hover:bg-red-700 transition-all shadow-2xl shadow-red-900/20 flex items-center gap-4 active:scale-95 group`}>Access Guide <TrendingUp size={24} className="group-hover:translate-x-1 transition-transform" /></button>
          </div>
        </section>

        <section id="quick-start" className="mb-24 scroll-mt-24">
          <SectionHeading title="Instant Setup" subtitle="Get started with Gemini in under 5 minutes." isDarkMode={isDarkMode} />
          <div className="space-y-4">{QUICK_START_STEPS.map((step, idx) => (<ChecklistItem key={idx} {...step} index={idx} isDarkMode={isDarkMode} />))}</div>
        </section>

        <section id="daily-uses" className="mb-24 scroll-mt-24">
          <SectionHeading title="Strategic Use Cases" subtitle="Gain an unfair advantage with targeted logic." isDarkMode={isDarkMode} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {DAILY_USES.map((category, idx) => (
              <div key={idx} className={`rounded-3xl border overflow-hidden shadow-sm transition-all backdrop-blur-md ${isDarkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100'}`}>
                <div className={`px-8 py-6 flex items-center border-b ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
                  <h3 className={`font-black text-xl transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{category.category}</h3>
                </div>
                <div className="p-8 space-y-10">
                  {category.prompts.map((p, pIdx) => (
                    <div key={pIdx} className="space-y-4">
                      <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-black border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
                        <div className="flex justify-between mb-4"><span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Logic Prompt</span><CopyButton text={p.text} isDarkMode={isDarkMode} /></div>
                        <p className={`font-bold italic text-lg ${isDarkMode ? 'text-slate-100' : 'text-slate-800'}`}>"{p.text}"</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="marketing" className="mb-24 scroll-mt-24">
          <SectionHeading title="Marketing Lab" subtitle="High-impact prompts for digital visibility." isDarkMode={isDarkMode} />
          
          <div className="flex flex-wrap gap-4 mb-8">
            <button 
              onClick={() => setActiveMarketingMainTab('text')}
              className={`px-6 py-3 rounded-xl flex items-center gap-2 font-black text-xs uppercase tracking-widest transition-all ${activeMarketingMainTab === 'text' ? 'bg-red-600 text-white shadow-lg' : isDarkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'}`}
            >
              <Type size={16} /> Text
            </button>
            <button 
              onClick={() => setActiveMarketingMainTab('image')}
              className={`px-6 py-3 rounded-xl flex items-center gap-2 font-black text-xs uppercase tracking-widest transition-all ${activeMarketingMainTab === 'image' ? 'bg-red-600 text-white shadow-lg' : isDarkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'}`}
            >
              <ImageIcon size={16} /> Images
            </button>
            <button 
              onClick={() => setActiveMarketingMainTab('video')}
              className={`px-6 py-3 rounded-xl flex items-center gap-2 font-black text-xs uppercase tracking-widest transition-all ${activeMarketingMainTab === 'video' ? 'bg-red-600 text-white shadow-lg' : isDarkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'}`}
            >
              <VideoIcon size={16} /> Videos
            </button>
          </div>

          <div className={`rounded-[2.5rem] border shadow-2xl overflow-hidden ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className={`p-8 border-r ${isDarkMode ? 'border-slate-800 bg-black/40' : 'border-slate-100 bg-slate-50'}`}>
                <div className="space-y-3">
                  {activeMarketingMainTab === 'text' ? (
                    MARKETING_GUIDE.map((m, i) => (
                      <button key={i} onClick={() => setActiveMarketingLab(i)} className={`w-full p-4 rounded-xl text-left font-bold text-sm transition-all flex items-center justify-between border ${activeMarketingLab === i ? 'bg-red-600 text-white border-red-600 shadow-lg' : isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-400' : 'bg-white border-slate-200 text-slate-600'}`}>{m.title}</button>
                    ))
                  ) : (
                    VISUAL_MARKETING_PROMPTS.map((m, i) => (
                      <button key={i} onClick={() => setActiveVisualIndustry(i)} className={`w-full p-4 rounded-xl text-left font-bold text-sm transition-all flex items-center justify-between border ${activeVisualIndustry === i ? 'bg-red-600 text-white border-red-600 shadow-lg' : isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-400' : 'bg-white border-slate-200 text-slate-600'}`}>{m.industry}</button>
                    ))
                  )}
                </div>
              </div>
              <div className="lg:col-span-2 p-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="inline-block px-3 py-1 bg-red-100 text-red-600 text-[10px] font-black uppercase rounded-lg">
                    {activeMarketingMainTab === 'text' ? 'Text Module' : activeMarketingMainTab === 'image' ? 'Image Module' : 'Video Module'}
                  </div>
                </div>
                
                {activeMarketingMainTab === 'text' ? (
                  <>
                    <h4 className={`text-2xl font-black mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{MARKETING_GUIDE[activeMarketingLab].title}</h4>
                    <div className={`p-8 rounded-3xl border mb-8 ${isDarkMode ? 'bg-black border-slate-50' : 'bg-slate-50 border-slate-200'}`}>
                      <p className={`text-xl font-bold italic leading-relaxed ${isDarkMode ? 'text-slate-100' : 'text-slate-800'}`}>"{MARKETING_GUIDE[activeMarketingLab].prompt}"</p>
                    </div>
                    <div className="flex gap-4 justify-end">
                      <button type="button" onClick={() => openGeminiWithPrompt(MARKETING_GUIDE[activeMarketingLab].prompt)} className="px-8 py-4 bg-red-600 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-red-700 transition-all flex items-center gap-2 shadow-lg">Try on Gemini <ExternalLink size={16} /></button>
                      <CopyButton text={MARKETING_GUIDE[activeMarketingLab].prompt} isDarkMode={isDarkMode} />
                    </div>
                  </>
                ) : (
                  <>
                    <h4 className={`text-2xl font-black mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{VISUAL_MARKETING_PROMPTS[activeVisualIndustry].industry} {activeMarketingMainTab === 'image' ? 'Visual' : 'Motion'}</h4>
                    <div className={`p-8 rounded-3xl border mb-8 ${isDarkMode ? 'bg-black border-slate-50' : 'bg-slate-50 border-slate-200'}`}>
                      <p className={`text-xl font-bold italic leading-relaxed ${isDarkMode ? 'text-slate-100' : 'text-slate-800'}`}>
                        "{activeMarketingMainTab === 'image' ? VISUAL_MARKETING_PROMPTS[activeVisualIndustry].imagePrompt : VISUAL_MARKETING_PROMPTS[activeVisualIndustry].videoPrompt}"
                      </p>
                    </div>
                    {activeMarketingMainTab === 'video' && (
                      <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-xs font-bold flex items-center gap-2">
                        <Sparkles size={14} /> This video prompt is designed to expand the scene from your industry image prompt.
                      </div>
                    )}
                    <div className="flex gap-4 justify-end">
                      <button type="button" onClick={() => openGeminiWithPrompt(activeMarketingMainTab === 'image' ? VISUAL_MARKETING_PROMPTS[activeVisualIndustry].imagePrompt : VISUAL_MARKETING_PROMPTS[activeVisualIndustry].videoPrompt)} className="px-8 py-4 bg-red-600 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-red-700 transition-all flex items-center gap-2 shadow-lg">Try on Gemini <ExternalLink size={16} /></button>
                      <CopyButton text={activeMarketingMainTab === 'image' ? VISUAL_MARKETING_PROMPTS[activeVisualIndustry].imagePrompt : VISUAL_MARKETING_PROMPTS[activeVisualIndustry].videoPrompt} isDarkMode={isDarkMode} />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="industry-packs" className="mb-24 scroll-mt-24">
          <SectionHeading title="Industry Toolkits" subtitle="Sector-specific logic packs." isDarkMode={isDarkMode} />
          <div className="flex overflow-x-auto gap-3 pb-8 scrollbar-hide">
            {INDUSTRY_PROMPT_PACKS.map(pack => (
              <button key={pack.id} onClick={() => setActiveIndustry(pack.id)} className={`flex items-center gap-3 px-8 py-4 rounded-2xl whitespace-nowrap transition-all font-black text-sm uppercase tracking-wider ${activeIndustry === pack.id ? 'bg-red-600 text-white shadow-2xl shadow-red-900/40' : isDarkMode ? 'bg-slate-800 text-slate-500' : 'bg-slate-100 text-slate-500'}`}>{pack.category}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INDUSTRY_PROMPT_PACKS.find(p => p.id === activeIndustry)?.prompts.map((prompt, i) => (
              <div key={i} className={`border rounded-3xl p-8 flex flex-col justify-between ${isDarkMode ? 'bg-black border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
                <div><span className="inline-block px-3 py-1 border text-[10px] font-black uppercase text-red-500 rounded-lg mb-4">{prompt.label}</span><p className={`text-lg font-bold leading-relaxed italic mb-8 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>"{prompt.text}"</p></div>
                <div className="flex justify-end gap-3 pt-6 border-t border-slate-800/50"><button type="button" onClick={() => openGeminiWithPrompt(prompt.text)} className={`p-3 border rounded-xl flex items-center justify-center ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white hover:bg-red-600' : 'bg-white border-slate-200 text-slate-600 hover:bg-red-50'}`}><ExternalLink size={16} /></button><CopyButton text={prompt.text} isDarkMode={isDarkMode} /></div>
              </div>
            ))}
          </div>
        </section>

        <section id="tools" className="mb-24 scroll-mt-24">
          <SectionHeading title="Power Tools" subtitle="Advanced features for enterprise-grade growth." isDarkMode={isDarkMode} />
          <div className={`rounded-[3rem] border shadow-2xl overflow-hidden transition-colors ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}>
            <div className={`flex overflow-x-auto scrollbar-hide border-b ${isDarkMode ? 'border-slate-800 bg-black/20' : 'border-slate-100 bg-slate-50/50'}`}>
              <div className="flex min-w-full justify-center flex-nowrap">
                {POWER_TOOLS_DETAILED.map((tool, idx) => (
                  <button key={idx} onClick={() => setActiveToolTab(idx)} className={`flex items-center gap-3 px-6 md:px-10 py-8 text-xs md:text-sm font-black uppercase tracking-widest relative whitespace-nowrap transition-all ${activeToolTab === idx ? 'text-red-600 scale-105' : 'text-slate-500 hover:text-slate-300'}`}>
                    {tool.name} {activeToolTab === idx && <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-red-600 rounded-t-full"></div>}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-10 md:p-16">
              <h3 className={`text-4xl font-black mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{POWER_TOOLS_DETAILED[activeToolTab].name}</h3>
              <p className={`text-lg leading-relaxed font-medium mb-10 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{POWER_TOOLS_DETAILED[activeToolTab].description}</p>
              
              <div className={`p-8 rounded-3xl border-2 border-dashed mb-8 ${isDarkMode ? 'bg-red-950/10 border-red-900/30' : 'bg-red-50/50 border-red-100'}`}>
                <h4 className="text-red-600 font-black uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                   <TrendingUp size={14} /> Business ROI
                </h4>
                <p className={`text-sm font-bold leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  {POWER_TOOLS_DETAILED[activeToolTab].businessValue}
                </p>
              </div>

              <div className="space-y-6">
                {POWER_TOOLS_DETAILED[activeToolTab].prompts.map((p, pIdx) => (
                  <div key={pIdx} className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-black border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Logic Case {pIdx + 1}</span>
                      <CopyButton text={p.text} isDarkMode={isDarkMode} showLabel={false} />
                    </div>
                    <p className={`font-bold italic ${isDarkMode ? 'text-slate-100' : 'text-slate-800'}`}>"{p.text}"</p>
                    <div className="mt-4 flex flex-wrap gap-4">
                      <button 
                        type="button" 
                        onClick={() => openGeminiWithPrompt(p.text)} 
                        className={`py-2 px-4 rounded-lg font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${isDarkMode ? 'bg-slate-800 text-white hover:bg-red-600' : 'bg-white border border-slate-200 text-slate-600 hover:bg-red-600 hover:text-white'}`}
                      >
                        Try on Gemini <ExternalLink size={12} />
                      </button>
                      {(p as any).sample && (
                        <button 
                          type="button" 
                          onClick={() => handleDownloadFile((p as any).sample, (p as any).filename)} 
                          className={`py-2 px-4 rounded-lg font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${isDarkMode ? 'bg-red-600/20 text-red-500 border border-red-900/30 hover:bg-red-600 hover:text-white' : 'bg-red-50 text-red-600 border border-red-100 hover:bg-red-600 hover:text-white'}`}
                        >
                          <FileText size={12} /> Sample Report
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="framework" className="mb-24 scroll-mt-24">
          <SectionHeading title="Tech Friday RTCP Builder" subtitle="Create high-performance prompts effortlessly." isDarkMode={isDarkMode} />
          <div className={`rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden border transition-colors ${isDarkMode ? 'bg-slate-950 border-red-900/20 text-white' : 'bg-slate-900 border-slate-800 text-white'}`}>
            <div className="relative z-10 flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-600/20 text-red-500 rounded-full text-[10px] font-black tracking-widest mb-12 border border-red-900/50">RTCP PROMPT GENERATOR</div>
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-red-500 uppercase tracking-widest flex items-center gap-2"><div className="w-5 h-5 bg-red-600 text-white flex items-center justify-center rounded text-[10px]">1</div> Role</label>
                    <div className="relative"><select value={rtcp.role} onChange={(e) => setRtcp({...rtcp, role: e.target.value})} className={`w-full p-4 pr-12 rounded-xl border appearance-none outline-none font-bold ${isDarkMode ? 'bg-black border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>{RTCP_OPTIONS.roles.map(r => <option key={r} value={r}>{r}</option>)}</select><ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-red-600" size={20} /></div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-red-500 uppercase tracking-widest flex items-center gap-2"><div className="w-5 h-5 bg-red-600 text-white flex items-center justify-center rounded text-[10px]">2</div> Task</label>
                    <div className="relative"><select value={rtcp.task} onChange={(e) => setRtcp({...rtcp, task: e.target.value})} className={`w-full p-4 pr-12 rounded-xl border appearance-none outline-none font-bold ${isDarkMode ? 'bg-black border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>{RTCP_OPTIONS.tasks.map(t => <option key={t} value={t}>{t}</option>)}</select><ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-red-600" size={20} /></div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-red-500 uppercase tracking-widest flex items-center gap-2"><div className="w-5 h-5 bg-red-600 text-white flex items-center justify-center rounded text-[10px]">3</div> Context</label>
                    <div className="relative"><select value={rtcp.context} onChange={(e) => setRtcp({...rtcp, context: e.target.value})} className={`w-full p-4 pr-12 rounded-xl border appearance-none outline-none font-bold ${isDarkMode ? 'bg-black border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>{RTCP_OPTIONS.contexts.map(c => <option key={c} value={c}>{c}</option>)}</select><ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-red-600" size={20} /></div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-red-500 uppercase tracking-widest flex items-center gap-2"><div className="w-5 h-5 bg-red-600 text-white flex items-center justify-center rounded text-[10px]">4</div> Format</label>
                    <div className="relative"><select value={rtcp.format} onChange={(e) => setRtcp({...rtcp, format: e.target.value})} className={`w-full p-4 pr-12 rounded-xl border appearance-none outline-none font-bold ${isDarkMode ? 'bg-black border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>{RTCP_OPTIONS.formats.map(f => <option key={f} value={f}>{f}</option>)}</select><ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-red-600" size={20} /></div>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className={`p-8 rounded-[2rem] border flex flex-col h-full shadow-2xl ${isDarkMode ? 'bg-black border-slate-800' : 'bg-slate-50 border-slate-200 text-slate-900'}`}>
                    <div className="flex justify-between items-center mb-6"><div className="flex items-center gap-2"><Sparkles size={18} className="text-red-600" /><span className={`text-[10px] font-black uppercase tracking-widest ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Generated Master Prompt</span></div></div>
                    <div className="flex-1 flex items-center"><p className={`text-xl md:text-2xl font-black leading-relaxed transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>"{generatedPrompt}"</p></div>
                    <div className="mt-10 flex flex-wrap gap-4 pt-8 border-t border-slate-800/50"><button type="button" onClick={() => openGeminiWithPrompt(generatedPrompt)} className="flex-1 py-4 bg-red-600 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-red-700 shadow-xl flex items-center justify-center gap-2">Try on Gemini <ExternalLink size={16} /></button><CopyButton text={generatedPrompt} isDarkMode={isDarkMode} showLabel={false} /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="practice" className="mb-24 scroll-mt-24">
          <SectionHeading title="Implementation Lab" subtitle="Apply your learning with step-by-step tasks." isDarkMode={isDarkMode} />
          <div className="grid grid-cols-1 gap-8">
            {HANDSON_EXERCISES.map((ex) => {
              const isCompleted = completedExercises.includes(ex.id);
              return (
                <div key={ex.id} className={`rounded-[2.5rem] border overflow-hidden ${isCompleted ? isDarkMode ? 'border-green-900/50 bg-green-950/10' : 'border-green-200 bg-green-50' : isDarkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100 hover:shadow-2xl'}`}>
                  <div className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                      <div className="flex items-center gap-6">
                        <div className={`w-16 h-16 flex items-center justify-center rounded-2xl shadow-lg ${isCompleted ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>{isCompleted ? <CheckCircle2 size={32} /> : <Target size={32} />}</div>
                        <div><div className="flex items-center gap-3"><h3 className={`text-2xl font-black ${isCompleted ? 'text-green-600' : isDarkMode ? 'text-white' : 'text-slate-900'}`}>{ex.title}</h3></div><p className="font-bold text-xs uppercase tracking-widest mt-1 text-slate-500">Goal: {ex.goal}</p></div>
                      </div>
                      <button type="button" onClick={() => toggleExercise(ex.id)} className={`px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all border ${isCompleted ? 'bg-green-600 border-green-600 text-white' : isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-white border-slate-200 text-slate-600'}`}>{isCompleted ? 'Completed' : 'Mark Done'}</button>
                    </div>
                    <div className={`p-8 rounded-3xl border shadow-2xl relative ${isDarkMode ? 'bg-black border-slate-800' : 'bg-slate-900 border-slate-800'}`}><div className="flex justify-between items-center mb-6"><p className="text-[10px] font-black text-red-500 uppercase tracking-widest">Starter Prompt</p><CopyButton text={ex.promptStarter} isDarkMode={true} /></div><p className="text-white font-bold italic text-lg">"{ex.promptStarter}"</p></div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="habit-plan" className="mb-24 scroll-mt-24">
          <SectionHeading title="7-Day Sprint" subtitle="Check off daily habits to build AI consistency." isDarkMode={isDarkMode} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HABIT_CHALLENGE.map((day, i) => {
              const isChecked = completedHabits.includes(day.day);
              return (
                <div key={i} onClick={() => toggleHabit(day.day)} className={`rounded-[2rem] border p-8 shadow-sm relative group cursor-pointer transition-all ${isChecked ? 'bg-green-600 border-green-600' : isDarkMode ? 'bg-white/5 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <div className={`text-8xl font-black absolute -right-4 -bottom-4 ${isChecked ? 'text-green-500/20' : isDarkMode ? 'text-slate-50/5' : 'text-slate-50'}`}>{day.day}</div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4"><div className={`text-[10px] font-black uppercase tracking-widest ${isChecked ? 'text-white' : 'text-red-600'}`}>Day {day.day}</div>{isChecked && <Check size={20} className="text-white" />}</div>
                    <h4 className={`text-xl font-black mb-4 ${isChecked ? 'text-white' : isDarkMode ? 'text-white' : 'text-slate-900'}`}>{day.focus}</h4>
                    <p className={`text-sm font-bold italic ${isChecked ? 'text-white/80' : isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>"{day.task}"</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="faq" className="mb-24 scroll-mt-24">
          <SectionHeading title="Knowledge Base" subtitle="Practical tips and safety protocols." isDarkMode={isDarkMode} />
          <div className="mb-12 relative">
            <input type="text" placeholder="Search FAQs..." value={faqSearch} onChange={(e) => setFaqSearch(e.target.value)} className={`w-full p-6 pl-14 rounded-3xl border focus:ring-2 focus:ring-red-600 outline-none ${isDarkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'}`} /><Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          </div>
          <div className="space-y-4">{filteredFaqs.map((faq, i) => (<FaqAccordionItem key={i} {...faq} isDarkMode={isDarkMode} />))}</div>
        </section>

        <section id="workbook" className="mb-24 scroll-mt-24">
          <SectionHeading title="Tech Friday Workbook" subtitle="Download your definitive companion guide." isDarkMode={isDarkMode} />
          <div className={`rounded-[2.5rem] border shadow-2xl overflow-hidden flex flex-col md:flex-row relative ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
            <div className={`md:w-2/5 p-12 flex flex-col justify-center items-center relative border-r ${isDarkMode ? 'bg-red-600/10 border-slate-800' : 'bg-red-50 border-slate-100'}`}>
              <div className={`w-40 h-56 rounded-2xl border-2 relative shadow-2xl flex flex-col p-6 overflow-hidden ${isDarkMode ? 'bg-slate-950 border-red-900/50' : 'bg-white border-red-100'}`}><div className="absolute top-0 right-0 w-full h-1 bg-red-600"></div><Award size={64} className="text-red-600/20 mb-auto" /><div className={`font-black text-sm leading-tight mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>TECH FRIDAY<br/>ACADEMY</div></div>
            </div>
            <div className="md:w-3/5 p-10 md:p-16 flex flex-col justify-center">
              <h3 className={`text-3xl font-black mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Scaling Blueprint PDF</h3>
              <p className={`mb-10 text-lg leading-relaxed font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>A complete workbook for Indian entrepreneurs to map logic and track AI impact.</p>
              <button type="button" onClick={handleWorkbookDownload} className="px-10 py-5 bg-red-600 text-white rounded-2xl font-black hover:bg-red-700 shadow-xl flex items-center justify-center gap-4 text-lg"><Download size={24} /> Download Workbook</button>
            </div>
          </div>
        </section>

        <footer className={`mt-20 pt-20 border-t pb-20 transition-colors ${isDarkMode ? 'border-slate-900' : 'border-slate-200'}`}>
          <div className={`rounded-[2rem] p-8 md:p-12 text-center text-white relative overflow-hidden border transition-colors ${isDarkMode ? 'bg-slate-950 border-red-900/20' : 'bg-slate-900 border-slate-800'}`}>
            <div className="absolute inset-0 opacity-10 pointer-events-none"><div className="absolute top-0 left-0 w-full h-full notebook-line"></div></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-600/20 text-red-500 rounded-full text-[10px] font-black tracking-widest mb-6 border border-red-900/50"><Heart size={14} fill="currentColor" /> WITH GRATITUDE</div>
              <h2 className="text-2xl md:text-5xl font-black mb-4 leading-tight">Your Growth is Our <span className="text-red-600 italic">Greatest Achievement</span>.</h2>
              <p className="text-slate-400 text-base md:text-lg font-medium leading-relaxed">Thank you for letting us be part of your vision. We are honored to support your scaling journey. Go forth and build the future with heart.</p>
            </div>
          </div>
          <div className={`mt-10 flex flex-col md:flex-row items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] gap-6 transition-colors ${isDarkMode ? 'text-slate-600' : 'text-slate-400'}`}>
            <div className="flex items-center gap-2"><Award size={16} className="text-red-600" /> Official Workshop Blueprint</div>
            <div>© Tech Friday Academy • Building the Future Together</div>
          </div>
        </footer>
      </main>

      <button type="button" onClick={scrollToTop} className={`fixed bottom-10 right-10 z-50 p-4 bg-red-600 text-white rounded-xl shadow-2xl transition-all duration-500 transform ${showScrollTop ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-50'} hover:bg-red-700 hover:scale-110 active:scale-90 flex items-center justify-center`}><ChevronUp size={22} strokeWidth={3} /></button>
    </div>
  );
}

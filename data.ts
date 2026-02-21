import { Step, PromptCard, Tool, MarketingSubsection, HabitDay, FAQ, Exercise, IndustryPack, VisualMarketingPrompt } from './types';

export const QUICK_START_STEPS: Step[] = [
  {
    title: "Open Gemini",
    instruction: "Go to gemini.google.com on your phone or computer. It is free to use with your Google account.",
    referenceUrl: "https://support.google.com/gemini/answer/13594961"
  },
  {
    title: "Log in",
    instruction: "Use your personal or business Gmail ID to sign in. Once you see the chat box, you are ready.",
    referenceUrl: "https://support.google.com/gemini/answer/13278300"
  },
  {
    title: "Ask your first business question",
    instruction: "Type something simple like: 'I run a manufacturing unit. What are 3 ideas to improve floor efficiency?'",
    referenceUrl: "https://workspace.google.com/blog/product-announcements/generative-ai-prompting-tips"
  },
  {
    title: "Try a marketing prompt",
    instruction: "Ask: 'Draft a professional LinkedIn post about our new production capacity for high-grade industrial valves.'",
    referenceUrl: "https://support.google.com/gemini/answer/14532988"
  },
  {
    title: "Save useful responses",
    instruction: "You can copy the text or use the 'Share' button. Gemini also saves your chat history on the left sidebar.",
    referenceUrl: "https://support.google.com/gemini/answer/13743730"
  }
];

export const DAILY_USES: PromptCard[] = [
  {
    category: "Operations & Production",
    referenceUrl: "https://workspace.google.com/solutions/ai/",
    prompts: [
      {
        text: "Create a simple SOP for my warehouse staff to handle incoming raw materials and quality checks.",
        helpsWith: "Manufacturing and Trading logistics.",
        outcome: "A clear step-by-step process for your team to follow."
      },
      {
        text: "My delivery fleet is delayed by 2 days. Draft a proactive update for my distributors to manage their expectations.",
        helpsWith: "Trading and Wholesale supply chain management.",
        outcome: "Professional communication that maintains trust."
      }
    ]
  },
  {
    category: "Customer Experience",
    referenceUrl: "https://support.google.com/gemini/answer/14532988",
    prompts: [
      {
        text: "A patient complained about the long waiting time at my clinic. Draft a polite reply suggesting our new online booking system.",
        helpsWith: "Healthcare and Service efficiency.",
        outcome: "A calm response that solves the patient's problem."
      },
      {
        text: "Write 3 personalized welcome messages for guests checking into my boutique hotel this weekend.",
        helpsWith: "Hospitality and Personal branding.",
        outcome: "Warm, inviting messages that improve guest ratings."
      }
    ]
  },
  {
    category: "Strategic Growth",
    referenceUrl: "https://ai.google/build/gemini/",
    prompts: [
      {
        text: "I want to add a premium AMC (Annual Maintenance Contract) to my HVAC service business. What should be included in the gold tier?",
        helpsWith: "Service business revenue scaling.",
        outcome: "A high-value package structure that increases profits."
      },
      {
        text: "Analyze the current fitness wear market in India. Suggest 3 niche segments my boutique brand could target to double revenue in 12 months.",
        helpsWith: "Market expansion and competitive strategy.",
        outcome: "Clear growth roadmap for high-potential segments."
      }
    ]
  },
  {
    category: "Financial & Risk Management",
    referenceUrl: "https://workspace.google.com/blog/product-announcements/gemini-for-google-workspace-new-features",
    prompts: [
      {
        text: "I am planning a ₹10 Lakh expansion for my retail outlet. Help me create a simple risk assessment table with 5 potential risks and mitigation strategies.",
        helpsWith: "Small business expansion planning.",
        outcome: "A clear view of potential pitfalls and how to avoid them."
      },
      {
        text: "Review my current credit policy: We give 30 days credit to dealers, but our suppliers want payment in 15 days. Suggest 3 ways to bridge this cash flow gap.",
        helpsWith: "Working capital management.",
        outcome: "Actionable strategies to improve liquidity and reduce stress."
      }
    ]
  }
];

export const MARKETING_GUIDE: MarketingSubsection[] = [
  {
    title: "Social Media Captions",
    prompt: "Write a short Instagram caption for my retail showroom. We have just received the latest collection of festive ethnic wear. Keep it excited and festive.",
    tip: "Always highlight 'Limited Stock' or 'Exclusive Designs' for retail.",
    useCase: "Keeping your store's digital window fresh every day.",
    referenceUrl: "https://support.google.com/gemini/answer/14532988"
  },
  {
    title: "Educational Threads",
    prompt: "Create a 5-part educational LinkedIn thread for my healthcare clinic about the long-term benefits of preventive health checkups for busy professionals.",
    tip: "Use a helpful, non-scary tone for healthcare marketing.",
    useCase: "Establishing yourself as an expert in your local area.",
    referenceUrl: "https://workspace.google.com/blog/product-announcements/generative-ai-prompting-tips"
  },
  {
    title: "Festival Campaigns",
    prompt: "Design a Diwali special offer for my hospitality business. I need a catchy headline, a list of 3 bundled services, and a call to action for early bookings.",
    tip: "Bundling services increases the perceived value of your festival offers.",
    useCase: "Launching high-conversion holiday sales.",
    referenceUrl: "https://support.google.com/gemini/answer/14532988"
  },
  {
    title: "B2B Outreach",
    prompt: "Draft a cold email to the Purchase Manager of a large construction firm offering our bulk supply of industrial-grade electrical components. Highlight our ISO certification.",
    tip: "Focus on 'Timely Delivery' and 'Quality Certification' for manufacturing/trading.",
    useCase: "Generating new B2B leads without a sales team.",
    referenceUrl: "https://workspace.google.com/solutions/ai/"
  }
];

export const VISUAL_MARKETING_PROMPTS: VisualMarketingPrompt[] = [
  {
    industry: "Manufacturing",
    imagePrompt: "A high-quality, professional 4K macro photograph of a precision-engineered stainless steel valve, metallic texture, soft studio lighting, blurred automated factory floor in the background.",
    videoPrompt: "From the attached image, create a cinematic slow-motion pan that zooms out from the valve to reveal a fully operational, high-tech manufacturing facility with robotic arms synchronized in motion."
  },
  {
    industry: "Retail",
    imagePrompt: "A vibrant, brightly lit storefront window display of a premium ethnic wear boutique during Diwali, featuring intricate silk sarees on mannequins with warm bokeh from traditional lanterns.",
    videoPrompt: "From the attached image, create a smooth tracking shot that enters through the boutique doors, capturing a group of happy customers browsing the vibrant collection in a festive atmosphere."
  },
  {
    industry: "Hospitality",
    imagePrompt: "A professional architectural shot of a luxury boutique hotel lobby, featuring modern Indian-inspired decor, warm ambient lighting, and a view of a lush infinity pool through large glass windows at sunset.",
    videoPrompt: "From the attached image, create a sweeping drone shot that glides from the lobby out over the infinity pool, revealing a panoramic view of the beach and resort grounds at dusk."
  },
  {
    industry: "Healthcare",
    imagePrompt: "A clean, ultra-modern dental operatory with high-tech dental equipment, soft blue ambient lighting, and a friendly, professional dentist explaining a 3D scan to a patient in the background.",
    videoPrompt: "From the attached image, create a dynamic time-lapse starting in the clean operatory, showing the smooth flow of patients throughout the day and the staff providing efficient, compassionate care."
  },
  {
    industry: "Trading & Wholesale",
    imagePrompt: "An organized, high-volume industrial warehouse filled with massive reels of premium electrical copper wire, perfectly stacked on heavy-duty shelving under bright LED lighting.",
    videoPrompt: "From the attached image, create a montage showing a forklift precisely lifting a reel of wire, moving it across the busy warehouse, and loading it onto a branded delivery truck at the dock."
  },
  {
    industry: "Professional Services",
    imagePrompt: "A professional HVAC technician in a clean, branded uniform using a tablet to calibrate a high-efficiency smart VRF cooling system in a sleek, modern corporate office space.",
    videoPrompt: "From the attached image, create a short video showing the technician completing the calibration, handing the tablet to a satisfied office manager who gives a thumbs up, while the office environment remains cool and productive."
  }
];

export const SMART_TOOLS: Tool[] = [
  {
    name: "NotebookLM",
    tagline: "Your Industry Brain",
    description: "Upload your raw material price lists, government regulations, or medical journals, and ask questions specifically about them.",
    whenToUse: "When you have long technical manuals or price catalogs to digest.",
    example: "Upload a 100-page GST update PDF and ask: 'How does this change the tax on plastic components?'",
    samplePrompt: "Summarize the key warranty terms from this supplier contract."
  },
  {
    name: "Gems",
    tagline: "Your Sector Expert",
    description: "Create a 'Gem' that acts as your dedicated Production Supervisor or Hospital Manager.",
    whenToUse: "To get consistent advice tailored to your specific industry rules.",
    example: "Create an 'Inventory Auditor' Gem that always looks for waste in your trading reports.",
    samplePrompt: "Act as my Trading Compliance officer and review this shipment manifest."
  },
  {
    name: "Deep Research",
    tagline: "Market Intelligence",
    description: "Gemini finds deep facts about global trends, competitor prices, and new technologies in your sector.",
    whenToUse: "When planning to launch a new product or open a new branch.",
    example: "Research the latest trends in sustainable packaging for the FMCG manufacturing sector.",
    samplePrompt: "Compare the top 3 hospital equipment brands in South Asia by reliability."
  }
];

export const HANDSON_EXERCISES: Exercise[] = [
  {
    id: "ex-1",
    title: "Follow-up on Payments",
    goal: "Recover stuck money without losing the client relationship.",
    promptStarter: "Write a firm but polite follow-up message to a dealer who owes ₹5 Lakhs for the last 3 months of hardware supplies.",
    steps: [
      "Open Gemini",
      "Paste the prompt with your dealer's name",
      "Ask for a shorter version for WhatsApp"
    ],
    expectedOutcome: "Two versions (Email/WhatsApp) of a professional payment reminder.",
    reflectionQuestion: "Does this save you from the stress of finding the right words to ask for money?",
    referenceUrl: "https://support.google.com/gemini/answer/14532988"
  },
  {
    id: "ex-2",
    title: "Promote a Service",
    goal: "Increase bookings for your specialized service.",
    promptStarter: "Create 3 Google My Business posts for my dental clinic's 'Whiter Smile' summer package. Include a call-to-action.",
    steps: [
      "Get the post drafts",
      "Ask Gemini: 'What hashtags should I use for a local audience in Pune?'"
    ],
    expectedOutcome: "High-quality, trust-building content for your local listing.",
    reflectionQuestion: "How much more professional does your business look with these AI-crafted posts?",
    referenceUrl: "https://support.google.com/business/answer/6300932"
  },
  {
    id: "ex-3",
    title: "Optimize a Workflow",
    goal: "Reduce errors in your manufacturing or kitchen floor.",
    promptStarter: "Create 5-step quality check checklist for my furniture workshop before any item is packed for delivery.",
    steps: [
      "Generate the checklist",
      "Ask: 'Translate this into simple Hindi for my workers'"
    ],
    expectedOutcome: "A bilingual checklist that ensures zero-defect delivery.",
    reflectionQuestion: "Can this reduce your personal time spent on daily supervision?",
    referenceUrl: "https://support.google.com/gemini/answer/14532988"
  },
  {
    id: "ex-4",
    title: "Manage Staff Rosters",
    goal: "Handle shifts in hospitality or healthcare smoothly.",
    promptStarter: "Create a weekly 8-hour shift schedule for 12 staff members at my restaurant, ensuring everyone gets 1 day off.",
    steps: [
      "Input your staff count and opening hours",
      "Ask Gemini to balance the morning and evening peaks"
    ],
    expectedOutcome: "A balanced, fair work schedule.",
    reflectionQuestion: "Is it easier to solve this logic puzzle with AI than manually on paper?",
    referenceUrl: "https://support.google.com/gemini/answer/14532988"
  },
  {
    id: "ex-5",
    title: "Negotiate with Suppliers",
    goal: "Get better margins for your trading business.",
    promptStarter: "Draft a letter to my current chemical supplier asking for a 5% discount based on our increased monthly order volume.",
    steps: [
      "Generate the letter",
      "Ask: 'What are 3 alternative points I can use to negotiate if they say no?'"
    ],
    expectedOutcome: "A strong negotiation script and strategy.",
    reflectionQuestion: "Do you feel more confident entering a meeting with these points ready?",
    referenceUrl: "https://support.google.com/gemini/answer/14532988"
  }
];

export const INDUSTRY_PROMPT_PACKS: IndustryPack[] = [
  {
    id: "manufacturing",
    category: "Manufacturing",
    icon: "Factory",
    prompts: [
      { label: "Efficiency", text: "I run a garment factory. Suggest a 15-minute daily 'Toolbox Talk' for my workers to improve safety and reduce fabric waste." },
      { label: "Maintenance", text: "Create a preventive maintenance schedule for a plastic injection molding machine to avoid unplanned downtime." },
      { label: "Quality Control", text: "Develop a 10-point inspection list for outgoing bulk shipments of precision-engineered automotive valves." },
      { label: "Cost Reduction", text: "Analyze my electricity bill patterns (peak hours) and suggest 3 ways to shift manufacturing loads to save on power costs." }
    ]
  },
  {
    id: "retail",
    category: "Retail",
    icon: "ShoppingBag",
    prompts: [
      { label: "Inventory Management", text: "I have slow-moving stock of electric heaters. Suggest 3 combo offers to bundle them with fast-moving winter appliances." },
      { label: "Store Layout", text: "I am redesigning my ethnic wear showroom. Suggest a floor plan that maximizes foot traffic to the 'new arrivals' section." },
      { label: "Loyalty Program", text: "Design a simple points-based loyalty program for my kirana store to encourage repeat purchases via WhatsApp orders." },
      { label: "Customer Service", text: "Draft a polite response to a customer who wants to return an item without a receipt, offering store credit instead." }
    ]
  },
  {
    id: "trading",
    category: "Trading & Wholesale",
    icon: "BarChart",
    prompts: [
      { label: "Vendor Terms", text: "Draft a negotiation email to a chemical wholesaler asking for 60-day credit terms instead of the current 30 days." },
      { label: "Logistics", text: "Compare 3 different freight forwarders based on these quotes and tell me which one is best for my urgent shipment to Dubai." },
      { label: "Market Research", text: "Research the current global price trends for high-grade copper wire and tell me if it's a good time to stock up." },
      { label: "Sales Strategy", text: "Suggest a volume-discount structure for my distributors to encourage them to order 20% more stock monthly." }
    ]
  },
  {
    id: "hospitality",
    category: "Hospitality",
    icon: "Utensils",
    prompts: [
      { label: "Menu Engineering", text: "Analyze my café menu. Which items have high food cost but low popularity? Suggest how to rename or modify them to increase margins." },
      { label: "Event Proposals", text: "Draft a one-page proposal for a corporate team-building lunch package at my resort, including a custom 3-course menu." },
      { label: "Review Management", text: "Write a template for responding to positive TripAdvisor reviews that specifically mentions our 'signature hospitality' and 'local breakfast'." },
      { label: "Staff Training", text: "Create a 5-step hospitality training module for new front-desk staff on handling difficult guest check-ins." }
    ]
  },
  {
    id: "healthcare",
    category: "Healthcare",
    icon: "Activity",
    prompts: [
      { label: "Patient Care", text: "Write a clear, simple post-surgery instruction sheet in Hindi and English for patients after a minor orthopedic procedure." },
      { label: "Health Awareness", text: "Design a 4-week health awareness calendar for a physiotherapy clinic focusing on 'Posture for IT Professionals'." },
      { label: "Operations", text: "Suggest 5 actionable ways to reduce the average patient waiting time at my diagnostic center without hiring more staff." },
      { label: "Digital Booking", text: "Draft a WhatsApp broadcast message to all regular patients announcing our new online appointment booking portal." }
    ]
  },
  {
    id: "services",
    category: "Professional Services",
    icon: "Sparkles",
    prompts: [
      { label: "Lead Generation", text: "I run an HVAC repair service. Create a script for my technicians to ask happy customers for a Google review right after a repair." },
      { label: "Annual Contracts", text: "Draft a professional proposal for an Annual Maintenance Contract (AMC) for a large appointment complex's plumbing systems." },
      { label: "Staff Productivity", text: "Suggest a simple KPI (Key Performance Indicator) system for my salon staff to track their service quality and product sales." },
      { label: "Brand Positioning", text: "Help me write a 'Why Choose Us' section for my legal firm's website focusing on 'Speed and Transparency'." }
    ]
  }
];

export const HABIT_CHALLENGE: HabitDay[] = [
  { day: 1, focus: "Marketing", task: "Generate 3 captions for your top service or product." },
  { day: 2, focus: "Operations", task: "Ask Gemini to find one bottleneck in your daily routine." },
  { day: 3, focus: "Planning", task: "Create a staff roster or a daily production plan." },
  { day: 4, focus: "Negotiation", task: "Draft a message to a supplier or a client about pricing." },
  { day: 5, focus: "Customer Care", task: "Write a response to a recent customer review or query." },
  { day: 6, focus: "Research", task: "Search for a new machine, tool, or software for your industry." },
  { day: 7, focus: "Strategy", task: "Ask: 'If I want to double my business in 2 years, what are the first 3 steps?'" }
];

export const FAQS: FAQ[] = [
  {
    question: "Is Gemini free for my business use?",
    answer: "Yes, the basic version of Gemini is completely free to use with any standard Google account. There is a 'Gemini Advanced' version for a monthly fee, but the free version is powerful enough for most daily business needs.",
    referenceUrl: "https://support.google.com/gemini/answer/13594961"
  },
  {
    question: "Can I use Gemini on my mobile phone?",
    answer: "Yes! You can download the Gemini app from the Play Store or Store. Alternatively, you can just open gemini.google.com in your mobile browser. It's great for quick marketing ideas while traveling.",
    referenceUrl: "https://support.google.com/gemini/answer/13278300"
  },
  {
    question: "How can I share Gemini's answers with my team?",
    answer: "You can copy-paste the text directly into WhatsApp or Email. You can also use the 'Share' icon at the bottom of the response to create a public link to the entire chat that your staff can view.",
    referenceUrl: "https://support.google.com/gemini/answer/13743730"
  },
  {
    question: "Can Gemini help with GST or complex tax calculations?",
    answer: "Gemini can explain GST rules and help with simple math, but for final tax filings, you should always consult a CA. Gemini is a smart assistant, not a certified auditor.",
    referenceUrl: "https://support.google.com/gemini/answer/14532988"
  },
  {
    question: "Is it useful for non-tech businesses like Kirana or Workshops?",
    answer: "Absolutely. Whether you run a textile factory or a kirana store, Gemini understands business logic. It can help you draft customer messages, manage staff shifts, or brainstorm discount offers.",
    referenceUrl: "https://workspace.google.com/solutions/ai/"
  },
  {
    question: "What if Gemini gives a wrong answer?",
    answer: "AI can sometimes 'hallucinate' or make mistakes. Always double-check critical facts, technical specs, or legal terms. Think of it as a draft that needs your final expert approval.",
    referenceUrl: "https://support.google.com/gemini/answer/14532988"
  },
  {
    question: "Can I use it in Indian languages like Hindi or Marathi?",
    answer: "Yes! Gemini is excellent at Indian languages. You can prompt it in Hindi, Bengali, Gujarati, Marathi, Tamil, and many others. It even understands 'Hinglish' quite well.",
    referenceUrl: "https://support.google.com/gemini/answer/13594961#languages"
  },
  {
    question: "Is my private business data safe?",
    answer: "Google uses data to improve its models, so avoid sharing highly sensitive secrets like bank passwords or customer private data. For general business logic and marketing, it is safe and widely used.",
    referenceUrl: "https://support.google.com/gemini/answer/13594961"
  },
  {
    question: "How do I get better, more detailed results from Gemini?",
    answer: "The secret is 'Context'. Instead of asking 'Write an email', say 'Write a polite email to a client in Mumbai who hasn't paid for 2 weeks, mentioning our company policy.' The more you tell it, the better it performs.",
    referenceUrl: "https://workspace.google.com/blog/product-announcements/generative-ai-prompting-tips"
  },
  {
    question: "Can Gemini create images for my business marketing?",
    answer: "Yes! You can ask Gemini to 'Generate an image of a modern industrial warehouse' or 'Create a professional logo idea for a new café'. It's great for visual brainstorming.",
    referenceUrl: "https://support.google.com/gemini/answer/14532988"
  },
  {
    question: "Can Gemini analyze my business spreadsheets or sales data?",
    answer: "Yes, if you use Google Drive, you can connect it and ask Gemini to read your sheets. You can also copy-paste data and ask it to find trends or create a summary of your monthly growth.",
    referenceUrl: "https://workspace.google.com/blog/product-announcements/gemini-for-google-workspace-new-features"
  },
  {
    question: "Is there a limit to how many questions I can ask?",
    answer: "The free version has some limits during high-traffic times, but for normal daily business use, most owners never hit the limit. If you use it very heavily, it might suggest a short break.",
    referenceUrl: "https://support.google.com/gemini/answer/13594961"
  },
  {
    question: "How do I make Gemini remember my business details?",
    answer: "You can create a 'Custom Gem' (available in Advanced) or simply keep one long chat thread for your business where you've already explained who you are and what you do. It remembers the context of that specific chat.",
    referenceUrl: "https://support.google.com/gemini/answer/15234241"
  }
];
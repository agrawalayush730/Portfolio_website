export const siteConfig = {
  name: "Ayush Agrawal",
  title: "AI & ML Engineer — NLP, LLMs, Agentic AI",
  description:
    "AI Engineer building production-ready NLP pipelines, LLM-based applications, semantic search systems, and agentic AI solutions for finance and analytics.",
  accentColor: "#7c3aed",

  social: {
    email: "agrawalayush730@gmail.com",
    linkedin: "www.linkedin.com/in/ayush-agrawal-590254253",
    twitter: "https://x.com/agrawalayush730",
    github: "https://github.com/agrawalayush730",
  },

  aboutMe:
    "I'm an AI Engineer specializing in NLP, LLMs, and agentic AI systems. I build reliable, production-grade pipelines using FastAPI, Hugging Face Transformers, FAISS, and modern MLOps practices. My work focuses on financial applications such as semantic search, SIP automation, investment intelligence, and real-world text understanding. I enjoy turning research into scalable systems that deliver measurable impact.",

  skills: [
    "Python",
    "Transformers",
    "Hugging Face",
    "LLM Engineering",
    "NLP",
    "NER",
    "BERT",
    "SentenceTransformers",
    "RAG",
    "FAISS",
    "FastAPI",
    "Docker",
    "SQL",
    "MongoDB",
    "Backtrader",
    "AWS",
    "Azure",
  ],

  projects: [
    {
      name: "MutualFundAI — Intent & NER Engine",
      description:
        "BERT-based intent classifier and NER engine for mutual fund queries, integrated with FastAPI to automate SIP creation and portfolio actions.",
      link: "https://github.com/agrawalayush730/MutualFundAI",
      skills: ["BERT", "Transformers", "FastAPI", "Docker", "MySQL"],
    },
    {
      name: "FeedbackNLP — App Feedback Analyzer",
      description:
        "Aspect-based sentiment analysis system for mobile app reviews, extracting categories, sentiments, and severity scoring using zero-shot and embedding-based NLP.",
      link: "https://github.com/agrawalayush730/FeedbackNLP",
      skills: [
        "Zero-shot",
        "Transformers",
        "SentenceTransformers",
        "FastAPI",
        "MongoDB",
      ],
    },
    {
      name: "FinDocAI — Annual Report Semantic Search",
      description:
        "Semantic search over annual reports using PDF parsing, chunking, FAISS vector search, and FastAPI-based RAG pipelines for finance question answering.",
      link: "https://github.com/agrawalayush730/FinDocAI",
      skills: ["FAISS", "SentenceTransformers", "FastAPI", "PDF Parsing", "RAG"],
    },
    {
      name: "NIFTY50 Mean Reversion Backtest",
      description:
        "Backtesting framework implementing MACD, OBV, and mean-reversion strategies with optimization, trade logs, and detailed performance reports using Backtrader.",
      link: "https://github.com/agrawalayush730/nifty50-mean-reversion-strategy",
      skills: ["Backtrader", "Pandas", "Optimization"],
    },
    {
      name: "SIP Renewal Voice Bot — Multi-Agent System (In Progress)",
      description:
        "Agentic SIP renewal voice bot using LiveKit, LLM reasoning, and multi-agent orchestration. Automates investor verification, offer generation, and rebuttal handling.",
      link: "https://github.com/agrawalayush730", // Replace with repo once public
      skills: ["Agentic AI", "LiveKit", "LLMs", "Voice AI"],
    },
  ],

  experience: [
    {
      company: "BlueAltair (Deployed at ICICI Prudential AMC)",
      title: "AI Engineer",
      dateRange: "2025 - Present",
      bullets: [
        "Built agentic AI voice bot for SIP renewal using LiveKit and multi-agent LLM workflows",
        "Developed AI Agents for UI/UX enhancement of communications produced via all digital platforms of ICICI AMC",
        "Automated development of Montly mailer communication by  ",
      ],
    },
    {
      company: "FactSet",
      title: "NLP & Data Engineering Intern",
      dateRange: "2024",
      bullets: [
        "Developed NLP workflows for extracting structured insights from financial documents",
        "Optimized datasets and pipelines used for financial analytics and downstream ML tasks",
      ],
    },
    {
      company: "PromoDome Digital",
      title: "Data Science Intern",
      dateRange: "2023",
      bullets: [
        "Built analytics pipelines for marketing insights and content performance",
        "Automated data preparation workflows improving reporting efficiency",
      ],
    },
  ],

  education: [
    {
      school: "SP Jain School of Global Management",
      degree: "Bachelor's in Data Science & Business Analytics",
      dateRange: "2022 - 2025",
      achievements: [
        "Class Representative — First Semester",
        "Entertainer of the Year Award — First Year",
        "Completed advanced coursework in ML, NLP, Big Data, and Analytics",
      ],
    },
  ],
};


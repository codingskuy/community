import { motion } from "motion/react";
import { useState } from "react";
import {
  Mic,
  Zap,
  Layers,
  ShoppingCart,
  Code2,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { useLanguage, type Language } from "@/contexts/LanguageContext";

const copy: Record<Language, {
  sectionTag: string;
  titleTop: string;
  titleBottom: string;
  description: string;
  problem: string;
  approach: string;
  capability: string;
  impact: string;
  details: string;
  tabs: { production: string; openSource: string; research: string };
}> = {
  id: {
    sectionTag: "Proyek & Portofolio",
    titleTop: "Produksi, Open Source,",
    titleBottom: "& Riset",
    description: "Dari sistem produksi yang melayani pengguna nyata, kontribusi open source, hingga eksplorasi teknologi masa depan.",
    problem: "Masalah",
    approach: "Pendekatan",
    capability: "Kemampuan AI",
    impact: "Dampak Pengguna",
    details: "Detail",
    tabs: { production: "Produksi", openSource: "Open Source", research: "Riset" },
  },
  en: {
    sectionTag: "Projects & Portfolio",
    titleTop: "Production, Open Source,",
    titleBottom: "& Research",
    description: "From production systems serving real users to open source contributions and technology exploration.",
    problem: "Problem",
    approach: "Approach",
    capability: "AI Capability",
    impact: "User Impact",
    details: "Details",
    tabs: { production: "Production", openSource: "Open Source", research: "Research" },
  },
  zh: {
    sectionTag: "项目与作品集",
    titleTop: "生产、开源",
    titleBottom: "与研究",
    description: "从服务真实用户的生产系统，到开源贡献与技术探索。",
    problem: "问题",
    approach: "方案",
    capability: "AI 能力",
    impact: "用户影响",
    details: "详情",
    tabs: { production: "生产", openSource: "开源", research: "研究" },
  },
  ja: {
    sectionTag: "プロジェクト & ポートフォリオ",
    titleTop: "本番、オープンソース、",
    titleBottom: "＆研究",
    description: "実際のユーザーを支える本番システムから、オープンソース貢献、技術探求まで。",
    problem: "課題",
    approach: "アプローチ",
    capability: "AI能力",
    impact: "ユーザー影響",
    details: "詳細",
    tabs: { production: "本番", openSource: "オープンソース", research: "研究" },
  },
};

type ProjectItem = {
  id: number;
  category: "production" | "openSource" | "research";
  tag: string;
  icon: typeof Mic;
  color: string;
  title: string;
  subtitle: string;
  problem: string;
  approach: string;
  aiCapability?: string;
  impact: string;
  tags: string[];
};

const projectData: Record<Language, ProjectItem[]> = {
  id: [
    {
      id: 1,
      category: "production",
      tag: "EnB Mobile Care",
      icon: ShoppingCart,
      color: "blue",
      title: "Trade-In System (Erajaya)",
      subtitle: "Platform tukar tambah 200+ outlet",
      problem: "Proses trade-in manual tidak efisien dan rawan error di ratusan outlet ritel.",
      approach: "Membangun ekosistem aplikasi Android untuk trade-in online, validasi otomatis, dan monitoring outlet.",
      impact: "200+ outlet ritel nasional (Erajaya & Ibox)",
      tags: ["Android", "Kotlin", "REST API", "Clean Architecture", "Firebase"],
    },
    {
      id: 2,
      category: "production",
      tag: "Digital Sekuriti",
      icon: Code2,
      color: "emerald",
      title: "AI Care & Callink",
      subtitle: "Layanan kesehatan digital & perpesanan",
      problem: "Kebutuhan aplikasi mobile enterprise dengan standar keamanan tinggi dan integrasi real-time.",
      approach: "Mengembangkan AI Care (layanan kesehatan digital) dan Callink (aplikasi perpesanan) dengan arsitektur aman dan scalable.",
      impact: "Produksi aktif — melayani pengguna enterprise",
      tags: ["Flutter", "Firebase", "Security", "Real-Time"],
    },
    {
      id: 3,
      category: "production",
      tag: "Logistik",
      icon: ShoppingCart,
      color: "emerald",
      title: "HappyExpress",
      subtitle: "Aplikasi manajemen kurir & logistik",
      problem: "RDC kesulitan mengelola tugas kurir harian seperti assignment pickup dan delivery paket logistik.",
      approach: "Membangun aplikasi logistik untuk memudahkan RDC mengelola tugas kurir, tracking pengiriman real-time, dan reporting.",
      impact: "Produksi — memudahkan operasional kurir harian",
      tags: ["Flutter", "Firebase", "Google Maps", "Real-Time"],
    },
    {
      id: 4,
      category: "production",
      tag: "Social",
      icon: Code2,
      color: "violet",
      title: "Nikah Saja",
      subtitle: "Aplikasi mencari pasangan hidup",
      problem: "Kebutuhan platform digital untuk mencari pasangan hidup yang aman dan terpercaya.",
      approach: "Membangun aplikasi pencarian jodoh dengan fitur profil, pencarian, dan komunikasi antar pengguna.",
      impact: "Produksi — melayani pengguna Indonesia",
      tags: ["Flutter", "Firebase", "Real-Time", "Social"],
    },
    {
      id: 5,
      category: "production",
      tag: "Survey",
      icon: Code2,
      color: "blue",
      title: "EasySurvey",
      subtitle: "Aplikasi survei asuransi & surveyor",
      problem: "Perusahaan asuransi dan surveyor membutuhkan platform digital untuk mengelola survei klaim secara efisien.",
      approach: "Mengembangkan aplikasi survei yang memudahkan surveyor dalam mengumpulkan data, dokumentasi, dan pelaporan.",
      impact: "Produksi — memudahkan workflow survey asuransi",
      tags: ["Android", "Kotlin", "REST API", "Survey"],
    },
    {
      id: 6,
      category: "production",
      tag: "Education",
      icon: Layers,
      color: "rose",
      title: "IamEnglish",
      subtitle: "Aplikasi kursus & game interaktif bahasa Inggris",
      problem: "Kebutuhan metode belajar bahasa Inggris yang interaktif dan menyenangkan.",
      approach: "Membangun aplikasi kursus bahasa Inggris dengan pendekatan gamifikasi dan konten interaktif.",
      impact: "Produksi — pembelajaran bahasa Inggris interaktif",
      tags: ["Android", "Kotlin", "Game", "Education"],
    },
    {
      id: 7,
      category: "research",
      tag: "ChefGenie",
      icon: Layers,
      color: "cyan",
      title: "ChefGenie",
      subtitle: "AI-Kitchen Companion App",
      problem: "Kesulitan dalam manajemen dapur, resep, dan inventaris bahan makanan secara efisien.",
      approach: "Mengembangkan aplikasi AI companion untuk dapur dengan fitur rekomendasi resep, pelacakan stok, dan meal planning.",
      aiCapability: "LLM-based recipe generation, smart inventory tracking, nutritional optimization",
      impact: "Eksplorasi — sistem keputusan dapur berbasis AI",
      tags: ["Flutter", "OpenAI API", "Firebase", "TFLite"],
    },
    {
      id: 8,
      category: "research",
      tag: "AI On-Device",
      icon: Mic,
      color: "blue",
      title: "VoiceNav AI",
      subtitle: "Navigasi bebas tangan untuk pekerja mobile",
      problem: "Navigasi sering butuh mata ke layar saat berkendara atau saat tangan sedang sibuk.",
      approach: "Speech recognition on-device + klasifikasi intent yang berjalan penuh secara offline.",
      aiCapability: "NLP offline, deteksi intent, parsing perintah kontekstual",
      impact: "Interaksi layar berkurang 70% saat berkendara",
      tags: ["TFLite", "Flutter", "On-Device NLP"],
    },
    {
      id: 9,
      category: "research",
      tag: "Edge Inference",
      icon: Zap,
      color: "cyan",
      title: "EdgeVision",
      subtitle: "Deteksi objek real-time di edge",
      problem: "AI berbasis cloud menambah latensi dan memunculkan risiko privasi pada konteks mobile sensitif.",
      approach: "Model TFLite teroptimasi dengan kuantisasi int8 berjalan <50ms di perangkat mid-range.",
      aiCapability: "Kuantisasi model, edge ML, akselerasi hardware",
      impact: "Latensi inferensi <50ms pada perangkat entry-level",
      tags: ["TFLite", "NNAPI", "Model Optimization"],
    },
    {
      id: 10,
      category: "openSource",
      tag: "Data Analytics",
      icon: Layers,
      color: "violet",
      title: "Mobile Analytics Projectile",
      subtitle: "Firebase Analytics open source toolkit",
      problem: "Kebutuhan insight data real-time untuk pengambilan keputusan produk dan performa aplikasi.",
      approach: "Mengintegrasikan Firebase Analytics untuk application performance, conversion, custom event, feature usage, marketing retention, dan user behavior analytics.",
      impact: "Open source — toolkit analitik produk mobile",
      tags: ["Flutter", "Firebase", "Analytics", "Open Source"],
    },
    {
      id: 11,
      category: "openSource",
      tag: "Real-Time",
      icon: Code2,
      color: "rose",
      title: "Flutter Chat Realtime",
      subtitle: "Chat apps dengan socket.io & webRTC",
      problem: "Kebutuhan komunikasi real-time dengan fitur chat, panggilan suara, dan video.",
      approach: "Membangun aplikasi chat menggunakan Flutter dengan socket.io untuk messaging dan webRTC untuk panggilan audio/video, didukung backend Node.js.",
      impact: "Open source — referensi implementasi chat real-time",
      tags: ["Flutter", "Socket.io", "webRTC", "Node.js", "Open Source"],
    },
    {
      id: 12,
      category: "openSource",
      tag: "Komunitas",
      icon: Code2,
      color: "violet",
      title: "CodingSkuy",
      subtitle: "Platform dokumentasi pembelajaran engineering",
      problem: "Kurangnya sumber belajar pemrograman yang terstruktur dan relevan dengan industri di Indonesia.",
      approach: "Membangun repositori pengetahuan terbuka yang berisi tutorial, code snippet, dan best practice engineering.",
      impact: "10K+ subscriber, 100+ konten tutorial",
      tags: ["Flutter", "Open Source", "Community", "Documentation"],
    },
    {
      id: 13,
      category: "openSource",
      tag: "Android SDK",
      icon: Code2,
      color: "blue",
      title: "QA Snap SDK",
      subtitle: "Android SDK untuk screen recording & log capture",
      problem: "Kesulitan QA dalam merekam layar dan menangkap log saat debugging aplikasi Android.",
      approach: "Mengembangkan Android SDK open source untuk screen recording MP4 dan ADB log capture TXT dengan API 21-34.",
      impact: "Open source — memudahkan workflow QA Android",
      tags: ["Kotlin", "Compose UI", "MediaProjection", "QA Tools"],
    },
    {
      id: 14,
      category: "openSource",
      tag: "Data Analysis",
      icon: Layers,
      color: "rose",
      title: "Bike Sharing - Data Analysis",
      subtitle: "Analisis bisnis penyewaan sepeda di California",
      problem: "Bisnis penyewaan sepeda membutuhkan insight dari data demografi, tren, dan anomali operasional.",
      approach: "Melakukan analisis data terstruktur untuk menemukan laporan informasi, demografi, dan anomali bisnis penyewaan sepeda.",
      impact: "Open source — referensi analisis data bisnis",
      tags: ["Python", "Data Analysis", "Visualization", "Statistics"],
    },
    {
      id: 15,
      category: "openSource",
      tag: "DDD & Testing",
      icon: Code2,
      color: "emerald",
      title: "Flutter DDD + Testing",
      subtitle: "Domain-Driven Design dengan orientasi testing",
      problem: "Kurangnya referensi implementasi DDD yang dikombinasikan dengan testing di Flutter.",
      approach: "Membangun proyek Flutter yang menyelesaikan kasus penulisan kode menggunakan pendekatan DDD dengan kombinasi Code Testing.",
      impact: "Open source — referensi arsitektur DDD + testing Flutter",
      tags: ["Flutter", "DDD", "Testing", "Clean Architecture", "Open Source"],
    },
  ],
  en: [
    {
      id: 1,
      category: "production",
      tag: "EnB Mobile Care",
      icon: ShoppingCart,
      color: "blue",
      title: "Trade-In System (Erajaya)",
      subtitle: "Trade-in platform 200+ outlets",
      problem: "Manual trade-in process was inefficient and error-prone across hundreds of retail outlets.",
      approach: "Built Android app ecosystem for online trade-in, automated validation, and outlet monitoring.",
      impact: "200+ retail outlets nationwide (Erajaya & Ibox)",
      tags: ["Android", "Kotlin", "REST API", "Clean Architecture", "Firebase"],
    },
    {
      id: 2,
      category: "production",
      tag: "Digital Sekuriti",
      icon: Code2,
      color: "emerald",
      title: "AI Care & Callink",
      subtitle: "Digital health service & messaging app",
      problem: "Need for enterprise mobile apps with high security standards and real-time integration.",
      approach: "Developed AI Care (digital health service) and Callink (messaging app) with secure, scalable architecture.",
      impact: "In production — serving enterprise users",
      tags: ["Flutter", "Firebase", "Security", "Real-Time"],
    },
    {
      id: 3,
      category: "production",
      tag: "Logistics",
      icon: ShoppingCart,
      color: "emerald",
      title: "HappyExpress",
      subtitle: "Courier & logistics management app",
      problem: "RDC struggled to manage daily courier tasks such as pickup/delivery assignment and tracking.",
      approach: "Built a logistics app to streamline courier task management, real-time delivery tracking, and reporting.",
      impact: "In production — streamlining daily courier operations",
      tags: ["Flutter", "Firebase", "Google Maps", "Real-Time"],
    },
    {
      id: 4,
      category: "production",
      tag: "Social",
      icon: Code2,
      color: "violet",
      title: "Nikah Saja",
      subtitle: "Matchmaking app",
      problem: "Need for a safe and trusted digital platform for finding a life partner.",
      approach: "Built a matchmaking app with profiles, search, and user communication features.",
      impact: "In production — serving Indonesian users",
      tags: ["Flutter", "Firebase", "Real-Time", "Social"],
    },
    {
      id: 5,
      category: "production",
      tag: "Survey",
      icon: Code2,
      color: "blue",
      title: "EasySurvey",
      subtitle: "Insurance & surveyor survey app",
      problem: "Insurance companies and surveyors needed a digital platform for efficient claim survey management.",
      approach: "Developed a survey app enabling data collection, documentation, and reporting for surveyors.",
      impact: "In production — streamlining insurance survey workflow",
      tags: ["Android", "Kotlin", "REST API", "Survey"],
    },
    {
      id: 6,
      category: "production",
      tag: "Education",
      icon: Layers,
      color: "rose",
      title: "IamEnglish",
      subtitle: "English course & interactive game app",
      problem: "Need for an interactive and fun English learning method.",
      approach: "Built an English course app with gamification and interactive content.",
      impact: "In production — interactive English learning",
      tags: ["Android", "Kotlin", "Game", "Education"],
    },
    {
      id: 7,
      category: "research",
      tag: "ChefGenie",
      icon: Layers,
      color: "cyan",
      title: "ChefGenie",
      subtitle: "AI-Kitchen Companion App",
      problem: "Difficulty managing kitchen inventory, recipes, and meal planning efficiently.",
      approach: "Built an AI-powered kitchen companion app with recipe recommendations, inventory tracking, and meal planning.",
      aiCapability: "LLM-based recipe generation, smart inventory, nutritional optimization",
      impact: "Exploration — AI-assisted kitchen decision system",
      tags: ["Flutter", "OpenAI API", "Firebase", "TFLite"],
    },
    {
      id: 8,
      category: "research",
      tag: "On-Device AI",
      icon: Mic,
      color: "blue",
      title: "VoiceNav AI",
      subtitle: "Hands-free navigation for mobile workers",
      problem: "Navigation requires eyes on screen while driving or operating in hands-busy environments.",
      approach: "On-device speech recognition + intent classification running fully offline.",
      aiCapability: "Offline NLP, intent detection, contextual command parsing",
      impact: "70% reduction in screen interaction while driving",
      tags: ["TFLite", "Flutter", "On-Device NLP"],
    },
    {
      id: 9,
      category: "research",
      tag: "Edge Inference",
      icon: Zap,
      color: "cyan",
      title: "EdgeVision",
      subtitle: "Real-time object detection at the edge",
      problem: "Cloud AI introduces latency and raises privacy concerns for sensitive mobile contexts.",
      approach: "Optimized TFLite models with int8 quantization running sub-50ms on mid-range devices.",
      aiCapability: "Model quantization, edge ML, hardware acceleration",
      impact: "<50ms inference latency on entry-level hardware",
      tags: ["TFLite", "NNAPI", "Model Optimization"],
    },
    {
      id: 10,
      category: "openSource",
      tag: "Data Analytics",
      icon: Layers,
      color: "violet",
      title: "Mobile Analytics Projectile",
      subtitle: "Firebase Analytics open source toolkit",
      problem: "Need for real-time data insights to drive product decisions and app performance optimization.",
      approach: "Integrated Firebase Analytics for application performance, conversion, custom event, feature usage, marketing retention, and user behavior analytics.",
      impact: "Open source — mobile product analytics toolkit",
      tags: ["Flutter", "Firebase", "Analytics", "Open Source"],
    },
    {
      id: 11,
      category: "openSource",
      tag: "Real-Time",
      icon: Code2,
      color: "rose",
      title: "Flutter Chat Realtime",
      subtitle: "Chat app with socket.io & webRTC",
      problem: "Need for real-time communication with chat, voice, and video calling features.",
      approach: "Built a Flutter chat app using socket.io for messaging and webRTC for audio/video calls, powered by a Node.js backend.",
      impact: "Open source — real-time chat reference implementation",
      tags: ["Flutter", "Socket.io", "webRTC", "Node.js", "Open Source"],
    },
    {
      id: 12,
      category: "openSource",
      tag: "Community",
      icon: Code2,
      color: "violet",
      title: "CodingSkuy",
      subtitle: "Engineering learning documentation platform",
      problem: "Lack of structured, industry-relevant programming resources in Indonesia.",
      approach: "Built an open knowledge repository with tutorials, code snippets, and engineering best practices.",
      impact: "10K+ subscribers, 100+ tutorial contents",
      tags: ["Flutter", "Open Source", "Community", "Documentation"],
    },
    {
      id: 13,
      category: "openSource",
      tag: "Android SDK",
      icon: Code2,
      color: "blue",
      title: "QA Snap SDK",
      subtitle: "Android SDK for screen recording & log capture",
      problem: "QA teams struggled with screen recording and log capture during Android app debugging.",
      approach: "Developed an open source Android SDK for MP4 screen recording and ADB log capture (API 21-34).",
      impact: "Open source — simplifying Android QA workflows",
      tags: ["Kotlin", "Compose UI", "MediaProjection", "QA Tools"],
    },
    {
      id: 14,
      category: "openSource",
      tag: "Data Analysis",
      icon: Layers,
      color: "rose",
      title: "Bike Sharing - Data Analysis",
      subtitle: "California bicycle rental business analysis",
      problem: "Bicycle rental business needed insights from demographics, trends, and operational anomalies.",
      approach: "Analyzed structured data to find information reports, demographics, and anomalies in the rental business.",
      impact: "Open source — business data analysis reference",
      tags: ["Python", "Data Analysis", "Visualization", "Statistics"],
    },
    {
      id: 15,
      category: "openSource",
      tag: "DDD & Testing",
      icon: Code2,
      color: "emerald",
      title: "Flutter DDD + Testing",
      subtitle: "Domain-Driven Design with testing orientation",
      problem: "Lack of DDD implementation references combined with testing in Flutter.",
      approach: "Built a Flutter project solving code writing cases using DDD approach with Code Testing combination.",
      impact: "Open source — DDD + testing architecture reference for Flutter",
      tags: ["Flutter", "DDD", "Testing", "Clean Architecture", "Open Source"],
    },
  ],
  zh: [
    {
      id: 1,
      category: "production",
      tag: "EnB Mobile Care",
      icon: ShoppingCart,
      color: "blue",
      title: "以旧换新系统（Erajaya）",
      subtitle: "覆盖 200+ 门店交易平台",
      problem: "人工以旧换新流程在数百家门店中效率低下且易出错。",
      approach: "构建 Android 应用生态，实现在线以旧换新、自动验证与门店监控。",
      impact: "全国 200+ 零售门店部署（Erajaya & Ibox）",
      tags: ["Android", "Kotlin", "REST API", "Clean Architecture", "Firebase"],
    },
    {
      id: 2,
      category: "production",
      tag: "Digital Sekuriti",
      icon: Code2,
      color: "emerald",
      title: "AI Care & Callink",
      subtitle: "数字健康服务与通讯应用",
      problem: "需要具备高安全标准与实时集成能力的企业级移动应用。",
      approach: "开发 AI Care（数字健康服务）与 Callink（通讯应用），采用安全可扩展架构。",
      impact: "已投产 — 服务企业用户",
      tags: ["Flutter", "Firebase", "Security", "Real-Time"],
    },
    {
      id: 3,
      category: "production",
      tag: "物流",
      icon: ShoppingCart,
      color: "emerald",
      title: "HappyExpress",
      subtitle: "快递与物流管理应用",
      problem: "RDC 难以高效管理每日快递任务。",
      approach: "构建物流应用，简化快递任务管理、实时配送追踪与报告。",
      impact: "已投产 — 提升每日快递运营效率",
      tags: ["Flutter", "Firebase", "Google Maps", "Real-Time"],
    },
    {
      id: 4,
      category: "production",
      tag: "社交",
      icon: Code2,
      color: "violet",
      title: "Nikah Saja",
      subtitle: "婚恋交友应用",
      problem: "需要一个安全可靠的数字平台来寻找生活伴侣。",
      approach: "构建包含个人资料、搜索和用户通讯功能的婚恋应用。",
      impact: "已投产 — 服务印尼用户",
      tags: ["Flutter", "Firebase", "Real-Time", "Social"],
    },
    {
      id: 5,
      category: "production",
      tag: "调查",
      icon: Code2,
      color: "blue",
      title: "EasySurvey",
      subtitle: "保险与调查员应用",
      problem: "保险公司和调查员需要高效的理赔调查数字平台。",
      approach: "开发调查应用，支持数据采集、文档记录和报告生成。",
      impact: "已投产 — 简化保险调查流程",
      tags: ["Android", "Kotlin", "REST API", "Survey"],
    },
    {
      id: 6,
      category: "production",
      tag: "教育",
      icon: Layers,
      color: "rose",
      title: "IamEnglish",
      subtitle: "英语课程与互动游戏应用",
      problem: "需要互动且有趣的英语学习方法。",
      approach: "构建带有游戏化元素的英语课程应用。",
      impact: "已投产 — 互动式英语学习",
      tags: ["Android", "Kotlin", "Game", "Education"],
    },
    {
      id: 7,
      category: "research",
      tag: "ChefGenie",
      icon: Layers,
      color: "cyan",
      title: "ChefGenie",
      subtitle: "AI 厨房伴侣应用",
      problem: "厨房库存、菜谱与膳食计划管理效率低下。",
      approach: "开发 AI 驱动的厨房伴侣应用，支持菜谱推荐、库存追踪与膳食规划。",
      aiCapability: "基于LLM的食谱生成、智能库存、营养优化",
      impact: "探索中 — AI 辅助厨房决策系统",
      tags: ["Flutter", "OpenAI API", "Firebase", "TFLite"],
    },
    {
      id: 8,
      category: "research",
      tag: "端侧 AI",
      icon: Mic,
      color: "blue",
      title: "VoiceNav AI",
      subtitle: "移动工作者免手导航",
      problem: "驾驶或双手繁忙时需要持续看屏幕。",
      approach: "端侧语音识别与意图分类，离线运行。",
      aiCapability: "离线 NLP、意图识别、上下文命令解析",
      impact: "驾驶时屏幕交互减少 70%",
      tags: ["TFLite", "Flutter", "On-Device NLP"],
    },
    {
      id: 9,
      category: "research",
      tag: "边缘推理",
      icon: Zap,
      color: "cyan",
      title: "EdgeVision",
      subtitle: "边缘端实时目标检测",
      problem: "云端 AI 带来延迟和隐私风险。",
      approach: "int8 量化优化 TFLite 模型，<50ms 推理。",
      aiCapability: "模型量化、边缘 ML、硬件加速",
      impact: "入门设备推理延迟低于 50ms",
      tags: ["TFLite", "NNAPI", "Model Optimization"],
    },
    {
      id: 10,
      category: "openSource",
      tag: "数据分析",
      icon: Layers,
      color: "violet",
      title: "Mobile Analytics Projectile",
      subtitle: "Firebase 分析开源工具包",
      problem: "需要实时数据洞察来驱动产品决策。",
      approach: "集成 Firebase Analytics，涵盖性能、转化、事件、留存与用户行为分析。",
      impact: "开源 — 移动产品分析工具包",
      tags: ["Flutter", "Firebase", "Analytics", "Open Source"],
    },
    {
      id: 11,
      category: "openSource",
      tag: "实时通讯",
      icon: Code2,
      color: "rose",
      title: "Flutter Chat Realtime",
      subtitle: "socket.io & webRTC 聊天应用",
      problem: "需要实时通讯功能。",
      approach: "Flutter 聊天应用，socket.io 消息推送，webRTC 音视频通话，Node.js 后端。",
      impact: "开源 — 实时聊天参考实现",
      tags: ["Flutter", "Socket.io", "webRTC", "Node.js", "Open Source"],
    },
    {
      id: 12,
      category: "openSource",
      tag: "社区",
      icon: Code2,
      color: "violet",
      title: "CodingSkuy",
      subtitle: "工程学习文档平台",
      problem: "缺乏结构化的编程学习资源。",
      approach: "构建开放知识库，包含教程、代码片段与最佳实践。",
      impact: "10K+ 订阅者，100+ 教程",
      tags: ["Flutter", "Open Source", "Community", "Documentation"],
    },
    {
      id: 13,
      category: "openSource",
      tag: "Android SDK",
      icon: Code2,
      color: "blue",
      title: "QA Snap SDK",
      subtitle: "屏幕录制与日志捕获 Android SDK",
      problem: "QA 调试 Android 时难以录制屏幕和捕获日志。",
      approach: "开源 Android SDK，支持 MP4 录制与 ADB 日志捕获（API 21-34）。",
      impact: "开源 — 简化 Android QA 流程",
      tags: ["Kotlin", "Compose UI", "MediaProjection", "QA Tools"],
    },
    {
      id: 14,
      category: "openSource",
      tag: "数据分析",
      icon: Layers,
      color: "rose",
      title: "Bike Sharing - 数据分析",
      subtitle: "加州自行车租赁业务分析",
      problem: "自行车租赁业务需要从人口统计、趋势和运营异常中获取洞察。",
      approach: "对结构化数据进行分析，发现业务信息报告、人口统计和异常。",
      impact: "开源 — 业务数据分析参考",
      tags: ["Python", "Data Analysis", "Visualization", "Statistics"],
    },
    {
      id: 15,
      category: "openSource",
      tag: "DDD 与测试",
      icon: Code2,
      color: "emerald",
      title: "Flutter DDD + Testing",
      subtitle: "领域驱动设计与测试导向",
      problem: "缺乏结合测试的 DDD Flutter 实现参考。",
      approach: "构建使用 DDD 方法结合代码测试的 Flutter 项目。",
      impact: "开源 — Flutter DDD + 测试架构参考",
      tags: ["Flutter", "DDD", "Testing", "Clean Architecture", "Open Source"],
    },
  ],
  ja: [
    {
      id: 1,
      category: "production",
      tag: "EnB Mobile Care",
      icon: ShoppingCart,
      color: "blue",
      title: "トレードインシステム（Erajaya）",
      subtitle: "200+ 拠点対応プラットフォーム",
      problem: "手動による下取りプロセスは非効率でエラーが発生しやすい。",
      approach: "オンライン下取り、自動検証、拠点監視の Android アプリエコシステムを構築。",
      impact: "全国 200+ 小売店舗で導入（Erajaya & Ibox）",
      tags: ["Android", "Kotlin", "REST API", "Clean Architecture", "Firebase"],
    },
    {
      id: 2,
      category: "production",
      tag: "Digital Sekuriti",
      icon: Code2,
      color: "emerald",
      title: "AI Care & Callink",
      subtitle: "デジタルヘルス＆メッセージングアプリ",
      problem: "高いセキュリティ基準とリアルタイム統合が必要。",
      approach: "AI Care と Callink をセキュアでスケーラブルなアーキテクチャで開発。",
      impact: "本番稼働中 — エンタープライズユーザー",
      tags: ["Flutter", "Firebase", "Security", "Real-Time"],
    },
    {
      id: 3,
      category: "production",
      tag: "物流",
      icon: ShoppingCart,
      color: "emerald",
      title: "HappyExpress",
      subtitle: "配送・物流管理アプリ",
      problem: "RDC は日々の配送業務管理に課題を抱えていた。",
      approach: "配送管理、リアルタイム追跡、レポート機能を備えた物流アプリを構築。",
      impact: "本番稼働中 — 配送業務を効率化",
      tags: ["Flutter", "Firebase", "Google Maps", "Real-Time"],
    },
    {
      id: 4,
      category: "production",
      tag: "ソーシャル",
      icon: Code2,
      color: "violet",
      title: "Nikah Saja",
      subtitle: "婚活マッチングアプリ",
      problem: "安全で信頼できるパートナー探しプラットフォームが必要。",
      approach: "プロフィール、検索、ユーザー間通信機能を備えた婚活アプリを構築。",
      impact: "本番稼働中 — インドネシアユーザーに提供",
      tags: ["Flutter", "Firebase", "Real-Time", "Social"],
    },
    {
      id: 5,
      category: "production",
      tag: "調査",
      icon: Code2,
      color: "blue",
      title: "EasySurvey",
      subtitle: "保険・サーベイヤー調査アプリ",
      problem: "保険会社とサーベイヤーは効率的な請求調査プラットフォームを必要としていた。",
      approach: "データ収集、文書化、レポート機能を備えた調査アプリを開発。",
      impact: "本番稼働中 — 保険調査ワークフローを効率化",
      tags: ["Android", "Kotlin", "REST API", "Survey"],
    },
    {
      id: 6,
      category: "production",
      tag: "教育",
      icon: Layers,
      color: "rose",
      title: "IamEnglish",
      subtitle: "英語コース＆インタラクティブゲームアプリ",
      problem: "インタラクティブで楽しい英語学習方法が必要。",
      approach: "ゲーミフィケーション要素を取り入れた英語学習アプリを構築。",
      impact: "本番稼働中 — インタラクティブな英語学習",
      tags: ["Android", "Kotlin", "Game", "Education"],
    },
    {
      id: 7,
      category: "research",
      tag: "ChefGenie",
      icon: Layers,
      color: "cyan",
      title: "ChefGenie",
      subtitle: "AI キッチンコンパニオンアプリ",
      problem: "キッチンの在庫・レシピ・食事計画の管理が非効率。",
      approach: "AI 搭載キッチンアプリ。レシピ提案、在庫追跡、食事計画。",
      aiCapability: "LLMベースのレシピ生成、スマート在庫、栄養最適化",
      impact: "探求中 — AI 支援キッチンシステム",
      tags: ["Flutter", "OpenAI API", "Firebase", "TFLite"],
    },
    {
      id: 8,
      category: "research",
      tag: "オンデバイス AI",
      icon: Mic,
      color: "blue",
      title: "VoiceNav AI",
      subtitle: "ハンズフリーナビ for モバイルワーカー",
      problem: "運転中や手が塞がる環境で画面注視が必要。",
      approach: "端末内音声認識 + 意図分類、完全オフライン。",
      aiCapability: "オフライン NLP、意図検出、文脈コマンド解析",
      impact: "運転中の画面操作を 70% 削減",
      tags: ["TFLite", "Flutter", "On-Device NLP"],
    },
    {
      id: 9,
      category: "research",
      tag: "エッジ推論",
      icon: Zap,
      color: "cyan",
      title: "EdgeVision",
      subtitle: "エッジ物体検出",
      problem: "クラウドAIは遅延とプライバシー懸念を生む。",
      approach: "int8量子化TFLiteモデルで50ms未満を実現。",
      aiCapability: "モデル量子化、エッジML、ハードウェアアクセラレーション",
      impact: "エントリー端末で推論遅延 <50ms",
      tags: ["TFLite", "NNAPI", "Model Optimization"],
    },
    {
      id: 10,
      category: "openSource",
      tag: "データ分析",
      icon: Layers,
      color: "violet",
      title: "Mobile Analytics Projectile",
      subtitle: "Firebase Analytics オープンソースツール",
      problem: "プロダクト判断のためのリアルタイムデータ分析が必要。",
      approach: "Firebase Analytics 統合（パフォーマンス、コンバージョン、イベント、リテンション）。",
      impact: "オープンソース — モバイル分析ツールキット",
      tags: ["Flutter", "Firebase", "Analytics", "Open Source"],
    },
    {
      id: 11,
      category: "openSource",
      tag: "リアルタイム",
      icon: Code2,
      color: "rose",
      title: "Flutter Chat Realtime",
      subtitle: "socket.io & webRTC チャットアプリ",
      problem: "リアルタイムコミュニケーション機能が必要。",
      approach: "Flutter × socket.io × webRTC × Node.js のチャットアプリ。",
      impact: "オープンソース — リアルタイムチャット参考実装",
      tags: ["Flutter", "Socket.io", "webRTC", "Node.js", "Open Source"],
    },
    {
      id: 12,
      category: "openSource",
      tag: "コミュニティ",
      icon: Code2,
      color: "violet",
      title: "CodingSkuy",
      subtitle: "エンジニアリング学習ドキュメントプラットフォーム",
      problem: "構造化されたプログラミング学習リソースが不足。",
      approach: "公開ナレッジリポジトリを構築（チュートリアル、コードスニペット、ベストプラクティス）。",
      impact: "10K+ 登録者、100+ チュートリアル",
      tags: ["Flutter", "Open Source", "Community", "Documentation"],
    },
    {
      id: 13,
      category: "openSource",
      tag: "Android SDK",
      icon: Code2,
      color: "blue",
      title: "QA Snap SDK",
      subtitle: "画面録画・ログ取得の Android SDK",
      problem: "QA チームの画面録画とログ取得の課題。",
      approach: "MP4 画面録画＋ADB ログ取得の OSS Android SDK（API 21-34）。",
      impact: "OSS — Android QA を効率化",
      tags: ["Kotlin", "Compose UI", "MediaProjection", "QA Tools"],
    },
    {
      id: 14,
      category: "openSource",
      tag: "データ分析",
      icon: Layers,
      color: "rose",
      title: "Bike Sharing - データ分析",
      subtitle: "カリフォルニア自転車レンタル事業分析",
      problem: "自転車レンタル事業は人口統計、トレンド、運営異常からのインサイトが必要。",
      approach: "構造化データを分析し、事業情報レポート、人口統計、異常を発見。",
      impact: "OSS — ビジネスデータ分析のリファレンス",
      tags: ["Python", "Data Analysis", "Visualization", "Statistics"],
    },
    {
      id: 15,
      category: "openSource",
      tag: "DDD & テスト",
      icon: Code2,
      color: "emerald",
      title: "Flutter DDD + Testing",
      subtitle: "ドメイン駆動設計とテスト指向",
      problem: "Flutter における DDD + テストの実装リファレンスが不足。",
      approach: "DDD アプローチとコードテストを組み合わせた Flutter プロジェクトを構築。",
      impact: "OSS — Flutter DDD + テストアーキテクチャのリファレンス",
      tags: ["Flutter", "DDD", "Testing", "Clean Architecture", "Open Source"],
    },
  ],
};

const colorMap: Record<string, { bg: string; border: string; text: string; dot: string; tag: string }> = {
  blue: {
    bg: "bg-blue-500/8 dark:bg-blue-500/10",
    border: "hover:border-blue-400/40 dark:hover:border-blue-500/30",
    text: "text-blue-600 dark:text-blue-400",
    dot: "bg-blue-500",
    tag: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  },
  violet: {
    bg: "bg-violet-500/8 dark:bg-violet-500/10",
    border: "hover:border-violet-400/40 dark:hover:border-violet-500/30",
    text: "text-violet-600 dark:text-violet-400",
    dot: "bg-violet-500",
    tag: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  },
  cyan: {
    bg: "bg-cyan-500/8 dark:bg-cyan-500/10",
    border: "hover:border-cyan-400/40 dark:hover:border-cyan-500/30",
    text: "text-cyan-600 dark:text-cyan-400",
    dot: "bg-cyan-500",
    tag: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
  },
  emerald: {
    bg: "bg-emerald-500/8 dark:bg-emerald-500/10",
    border: "hover:border-emerald-400/40 dark:hover:border-emerald-500/30",
    text: "text-emerald-600 dark:text-emerald-400",
    dot: "bg-emerald-500",
    tag: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
  rose: {
    bg: "bg-rose-500/8 dark:bg-rose-500/10",
    border: "hover:border-rose-400/40 dark:hover:border-rose-500/30",
    text: "text-rose-600 dark:text-rose-400",
    dot: "bg-rose-500",
    tag: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
  },
};

export function PortfolioSection() {
  const { language } = useLanguage();
  const text = copy[language];
  const projects = projectData[language];
  const [expanded, setExpanded] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"production" | "openSource" | "research">("production");

  const filteredProjects = projects.filter((p) => p.category === activeTab);
  const tabKeys: Array<"production" | "openSource" | "research"> = ["production", "openSource", "research"];

  return (
    <section id="projects" className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.07] dark:opacity-[0.1]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(99,102,241,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-xs uppercase tracking-[0.15em] text-blue-500 dark:text-blue-400">
            {text.sectionTag}
          </span>
          <h2 className="text-4xl sm:text-5xl tracking-tight text-slate-900 dark:text-white mt-3 leading-tight">
            {text.titleTop}
            <span className="block bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              {text.titleBottom}
            </span>
          </h2>
          <p className="text-slate-500 dark:text-slate-500 mt-4 max-w-xl">
            {text.description}
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex gap-2 mb-10">
          {tabKeys.map((key) => (
            <motion.button
              key={key}
              onClick={() => { setActiveTab(key); setExpanded(null); }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-4 py-2 rounded-xl text-sm transition-all duration-200 ${
                activeTab === key
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/[0.08] hover:border-blue-300 dark:hover:border-blue-500/30"
              }`}
            >
              {text.tabs[key]}
            </motion.button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredProjects.map((project, i) => {
            const colors = colorMap[project.color];
            const isExpanded = expanded === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                layout
                className={`group relative rounded-2xl border border-slate-200 dark:border-white/[0.07] ${colors.border} bg-white dark:bg-white/[0.02] p-6 cursor-pointer transition-all duration-200 hover:shadow-lg dark:hover:shadow-none hover:-translate-y-0.5`}
                onClick={() => window.open("https://www.linkedin.com/in/rois-khoiron/details/projects/", "_blank")}
              >
                {/* Category tag */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border ${colors.tag}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                    {project.tag}
                  </span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className={`w-4 h-4 ${colors.text} opacity-50`} />
                  </motion.div>
                </div>

                {/* Icon + Title */}
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className={`w-9 h-9 rounded-lg ${colors.bg} flex items-center justify-center flex-shrink-0`}
                  >
                    <project.icon className={`w-4 h-4 ${colors.text}`} />
                  </div>
                  <div>
                    <h3 className="text-slate-900 dark:text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Problem */}
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                  <span className="text-slate-400 dark:text-slate-600 text-xs uppercase tracking-wider">{text.problem} — </span>
                  {project.problem}
                </p>

                {/* Expanded detail */}
                <motion.div
                  initial={false}
                  animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-white/[0.05]">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-600 mb-1">
                        {text.approach}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{project.approach}</p>
                    </div>
                    {project.aiCapability && (
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-600 mb-1">
                          {text.capability}
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{project.aiCapability}</p>
                      </div>
                    )}
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-600 mb-1">
                        {text.impact}
                      </p>
                      <p className={`text-sm ${colors.text}`}>{project.impact}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.04] text-slate-500 dark:text-slate-500 border border-slate-200 dark:border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Expand hint */}
                {!isExpanded && (
                  <div className={`absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity`}>
                    <span className={`text-xs ${colors.text} flex items-center gap-1`}>
                      {text.details} <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

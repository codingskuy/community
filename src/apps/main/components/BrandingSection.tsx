import { motion } from "motion/react";
import { ChefHat, Sparkles, Cpu, Map, ArrowRight, Check } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { useLanguage, type Language } from "@/contexts/LanguageContext";
import imgDemo from "@/assets/ai_vision.png";

const copy: Record<Language, {
  tag: string;
  description: string;
  aiBadge: string;
  capabilities: string;
  roadmap: string;
  coreTech: string;
  learnMore: string;
  imageAlt: string;
  capabilityItems: string[];
  roadmapItems: Array<{ phase: string; label: string; status: string; description: string }>;
}> = {
  id: {
    tag: "Proyek Unggulan",
    description: "Produk AI eksperimental untuk manajemen dapur cerdas dengan keputusan harian yang lebih mudah.",
    aiBadge: "Eksperimen AI",
    capabilities: "Kemampuan AI",
    roadmap: "Roadmap Integrasi AI",
    coreTech: "Teknologi Inti",
    learnMore: "Pelajari lebih lanjut",
    imageAlt: "ChefGenie - AI Dapur Pintar",
    capabilityItems: [
      "Generasi resep berbasis AI dari bahan yang tersedia",
      "Pelacakan stok bahan dengan kesadaran masa kedaluwarsa",
      "Optimasi meal plan berdasarkan target nutrisi",
      "Asisten memasak berbasis suara yang paham konteks langkah",
    ],
    roadmapItems: [
      { phase: "Saat Ini", label: "Recipe Decision Engine", status: "active", description: "Saran berbasis LLM dari snapshot pantry" },
      { phase: "Berikutnya", label: "Smart Inventory AI", status: "planned", description: "Pengenalan bahan masuk berbasis computer vision" },
      { phase: "Masa Depan", label: "Nutritional Intelligence", status: "planned", description: "Optimasi diet personal dengan konteks kesehatan" },
      { phase: "Visi", label: "Multimodal Sous Chef", status: "concept", description: "Panduan memasak real-time via suara + visual" },
    ],
  },
  en: {
    tag: "Featured Project",
    description: "An experimental AI product exploring intelligent kitchen management where applied AI meets daily decisions.",
    aiBadge: "AI Experimental",
    capabilities: "AI Capabilities",
    roadmap: "AI Integration Roadmap",
    coreTech: "Core Tech",
    learnMore: "Learn more",
    imageAlt: "ChefGenie - Smart Kitchen AI",
    capabilityItems: [
      "AI-assisted recipe generation from available ingredients",
      "Smart inventory tracking with expiry awareness",
      "Meal planning optimization based on nutritional goals",
      "Voice-guided cooking assistant with step-aware context",
    ],
    roadmapItems: [
      { phase: "Current", label: "Recipe Decision Engine", status: "active", description: "LLM-powered suggestions from pantry snapshot" },
      { phase: "Next", label: "Smart Inventory AI", status: "planned", description: "Vision-based ingredient recognition at intake" },
      { phase: "Future", label: "Nutritional Intelligence", status: "planned", description: "Personalized diet optimization with health context" },
      { phase: "Vision", label: "Multimodal Sous Chef", status: "concept", description: "Voice + visual real-time cooking guidance" },
    ],
  },
  zh: {
    tag: "重点项目",
    description: "一个探索智能厨房管理的实验性 AI 产品，让 AI 真正落地到日常决策。",
    aiBadge: "AI 实验中",
    capabilities: "AI 能力",
    roadmap: "AI 集成路线图",
    coreTech: "核心技术",
    learnMore: "了解更多",
    imageAlt: "ChefGenie - 智能厨房 AI",
    capabilityItems: [
      "基于现有食材的 AI 食谱生成",
      "具备保质期感知的智能库存追踪",
      "依据营养目标进行餐食规划优化",
      "具备步骤上下文理解的语音烹饪助手",
    ],
    roadmapItems: [
      { phase: "当前", label: "菜谱决策引擎", status: "active", description: "基于 pantry 快照的 LLM 建议" },
      { phase: "下一步", label: "智能库存 AI", status: "planned", description: "入库食材的视觉识别能力" },
      { phase: "未来", label: "营养智能", status: "planned", description: "结合健康上下文的个性化饮食优化" },
      { phase: "愿景", label: "多模态厨房助手", status: "concept", description: "语音 + 视觉的实时烹饪指导" },
    ],
  },
  ja: {
    tag: "注目プロジェクト",
    description: "日常の意思決定にAIを活かす、インテリジェントなキッチン管理を探る実験的プロダクト。",
    aiBadge: "AI 実験中",
    capabilities: "AI機能",
    roadmap: "AI統合ロードマップ",
    coreTech: "コア技術",
    learnMore: "詳しく見る",
    imageAlt: "ChefGenie - スマートキッチンAI",
    capabilityItems: [
      "手元の食材からAIがレシピを提案",
      "消費期限を考慮したスマート在庫管理",
      "栄養目標にもとづく献立最適化",
      "手順文脈を理解する音声ガイド調理アシスタント",
    ],
    roadmapItems: [
      { phase: "現在", label: "レシピ意思決定エンジン", status: "active", description: "パントリースナップショットからLLM提案" },
      { phase: "次", label: "スマート在庫AI", status: "planned", description: "投入時の食材認識をビジョンで実装" },
      { phase: "将来", label: "栄養インテリジェンス", status: "planned", description: "健康文脈を加味した個別最適化" },
      { phase: "ビジョン", label: "マルチモーダル・スーシェフ", status: "concept", description: "音声 + 映像でリアルタイム調理支援" },
    ],
  },
};

const statusStyles: Record<string, string> = {
  active: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  planned: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  concept: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
};

export function BrandingSection() {
  const { language } = useLanguage();
  const text = copy[language];
  const aiCapabilities = text.capabilityItems;
  const roadmapItems = text.roadmapItems;

  return (
    <section id="chefgenie" className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-cyan-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnpNNDQgNDR2Mi0yem0wLTMwdjItMnptLTIwLTIwdjItMnpNMiAydjItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />
        
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs uppercase tracking-[0.15em] text-blue-500 dark:text-blue-400">
            {text.tag}
          </span>
          <div className="flex items-center gap-3 mt-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
              <ChefHat className="w-5 h-5 text-orange-500" />
            </div>
            <h2 className="text-4xl sm:text-5xl tracking-tight text-orange-300 dark:text-white">
              ChefGenie
            </h2>
          </div>
          <p className="text-slate-500 dark:text-blue-100 mt-3 max-w-lg ">
            {text.description}
          </p>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.02] overflow-hidden"
        >
          <div className="grid lg:grid-cols-5">
            {/* Left — Image */}
            <div className="lg:col-span-2 relative min-h-[300px] lg:min-h-0">
              <ImageWithFallback
                src={imgDemo}
                alt={text.imageAlt}
                className="w-full h-full object-cover min-h-[300px]"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white dark:to-[#0d0d1a] lg:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent lg:hidden" />

              {/* AI badge */}
              <motion.div
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1.5 bg-white/90 dark:bg-black/70 backdrop-blur-sm rounded-lg border border-slate-200 dark:border-white/10"
              >
                <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                <span className="text-xs text-slate-700 dark:text-slate-300">{text.aiBadge}</span>
              </motion.div>
            </div>

            {/* Right — Content */}
            <div className="lg:col-span-3 p-7 lg:p-10">
              <div className="grid sm:grid-cols-2 gap-8">
                {/* AI Capabilities */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Cpu className="w-4 h-4 text-orange-500" />
                    <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500">
                      {text.capabilities}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {aiCapabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Roadmap */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Map className="w-4 h-4 text-blue-500" />
                    <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500">
                      {text.roadmap}
                    </p>
                  </div>
                  <div className="space-y-3">
                    {roadmapItems.map((item, i) => (
                      <motion.div
                        key={item.phase}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-start gap-3"
                      >
                        {/* Timeline dot */}
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                              item.status === "active"
                                ? "bg-emerald-500"
                                : item.status === "planned"
                                ? "bg-blue-500"
                                : "bg-violet-500/50"
                            }`}
                          />
                          {i < roadmapItems.length - 1 && (
                            <div className="w-px h-full min-h-[16px] bg-slate-200 dark:bg-white/[0.06] mt-1" />
                          )}
                        </div>
                        <div className="-mt-0.5">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-sm text-slate-900 dark:text-white">
                              {item.label}
                            </span>
                            <span
                              className={`text-[10px] px-1.5 py-0.5 rounded-full border ${statusStyles[item.status]}`}
                            >
                              {item.phase}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-600">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/[0.05] flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-600 uppercase tracking-wider">
                    {text.coreTech}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {["Flutter", "OpenAI API", "Firebase", "TFLite"].map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/[0.06]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <motion.a
                  href="#/chefgenie"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
                >
                  {text.learnMore} <ArrowRight className="w-3.5 h-3.5" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

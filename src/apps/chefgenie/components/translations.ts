import type { Language } from "@/contexts/LanguageContext";

export const translations: Record<Language, any> = {
  id: {
    hero: {
      badge: "Kawan Dapur Bertenaga AI",
      titleMain: "Dapur Cerdas",
      titleSub: "di Genggamanmu",
      desc: "ChefGenie menggabungkan AI decision engine, kitchen operations, dan creator economy — semuanya dalam satu aplikasi mobile.",
      ctaStart: "Lihat Cara Kerjanya",
      ctaExplore: "Explore Fitur",
    },
    features: {
      companion: {
        label: "AI Companion",
        title: "Asisten Dapur<br/>yang Selalu Siap",
        desc: "ChefGenie hadir di setiap sesi masak — dari saran menu pagi hari, manajemen stok kulkas, hingga panduan langkah-demi-langkah secara real-time.",
        bullets: [
          "Genie's Pick — rekomendasi menu berdasarkan bahan yang hampir expired",
          "Fridge Alert — notifikasi cerdas bahan mendekati kedaluwarsa",
          "Quick Actions: Scan Fridge, Generate Recipe, Plan Meals",
        ],
      },
      vision: {
        label: "AI Vision Cooking",
        title: "Masak dengan<br/>Mata AI",
        desc: "Kamera smartphone kamu menjadi sous-chef. ChefGenie melihat kondisi masakan secara real-time dan memberi instruksi presisi.",
        bullets: [
          "Deteksi bahan secara visual — cukup arahkan kamera ke dapur",
          "Monitoring suhu pan dan progres browning secara live",
          "Voice guidance dan step-by-step overlay langsung di layar",
        ],
      },
      finance: {
        label: "Smart Finance",
        title: "Dapur yang<br/>Menghasilkan",
        desc: "Bukan hanya masak — ChefGenie membantu kamu memahami cost per meal, margin bisnis kuliner, dan insight keuangan dapur secara real-time.",
        bullets: [
          "Total saldo & arus kas dapur dalam satu tampilan",
          "Genie Insight: saran hemat berbasis pola belanja kamu",
          "Lacak pengeluaran: bahan baku, gas, peralatan — semua tercatat",
        ],
      },
      creator: {
        label: "Creator Hub",
        title: "Dari Dapur<br/>ke Konten",
        desc: "Ubah resep terbaik kamu jadi konten viral. ChefGenie menyediakan tools untuk produksi, distribusi, dan monetisasi konten kuliner.",
        bullets: [
          "Studio konten terintegrasi — rekam, edit, publish langsung dari app",
          "Ide menu bisnis berbasis tren kuliner terkini",
          "Rekrut tenaga ahli masak dan bangun tim kuliner profesional",
        ],
      },
    },
    marketplace: {
      label: "Proximity Marketplace",
      title: "Jelajahi Dunia<br /><span className='accent'>Kuliner Terdekatmu</span>",
      desc: "ChefGenie World menghadirkan pengalaman berbelanja kuliner seperti menjelajahi game — temukan stall terdekat dan checkout tanpa keluar dari dunia virtual.",
      steps: [
        { title: "Exploration", desc: "Gerakkan avatar di world map via joystick" },
        { title: "Proximity Trigger", desc: "Stall terdekat otomatis di-highlight" },
        { title: "Peek & Order", desc: "Mini-card muncul, satu tap ke keranjang" },
        { title: "Checkout", desc: "Keranjang di HUD, tidak perlu keluar dari world" },
      ],
    },
    paths: {
      label: "Choose Your Path",
      title: "ChefGenie untuk <br /><span className='accent'>Semua Orang</span>",
      desc: "Dari pecinta masak santai hingga pebisnis kuliner — ChefGenie menyesuaikan diri dengan kebutuhanmu.",
      options: [
        { title: "Hobbyist", subtitle: "Masak Lebih Fun", desc: "Jelajahi menu kreatif dan nikmati pengalaman dapur yang lebih menyenangkan." },
        { title: "Nutrition Seeker", subtitle: "Makan Lebih Sehat", desc: "Bangun pola makan seimbang dengan meal plan adaptif sesuai target gizi." },
        { title: "Business Owner", subtitle: "Cuan dari Dapur", desc: "Kelola biaya, stok, dan peluang bisnis kuliner melalui dashboard yang actionable." },
      ],
    },
    stats: [
      { value: "3", label: "Pilar AI Utama" },
      { value: "35+", label: "Screen Flows Dirancang" },
      { value: "360°", label: "Proximity Marketplace" },
      { value: "∞", label: "Kemungkinan Resep" },
    ],
    cta: {
      label: "Coming Soon",
      title: "Siap Mengubah<br /><span className='accent'>Cara Kamu Memasak?</span>",
      desc: "Daftarkan email untuk mendapat akses awal dan notifikasi saat ChefGenie resmi diluncurkan.",
      button: "Notify Me",
      socialProof: "Bergabung bersama 1,200+ early adopter",
    },
    nav: {
      fitur: "Fitur",
      journey: "User Journey",
      marketplace: "Marketplace",
      download: "Download",
      back: "Portfolio",
    },
  },
  en: {
    hero: {
      badge: "AI-Powered Kitchen Companion",
      titleMain: "Smart Kitchen",
      titleSub: "In Your Hands",
      desc: "ChefGenie combines AI decision engine, kitchen operations, and creator economy — all in one mobile app.",
      ctaStart: "See How It Works",
      ctaExplore: "Explore Features",
    },
    features: {
      companion: {
        label: "AI Companion",
        title: "A Kitchen Assistant<br/>That's Always Ready",
        desc: "ChefGenie is there for every cooking session — from morning meal suggestions, fridge stock management, to real-time step-by-step guidance.",
        bullets: [
          "Genie's Pick — menu recommendations based on expiring ingredients",
          "Fridge Alert — smart notifications for ingredients nearing expiry",
          "Quick Actions: Scan Fridge, Generate Recipe, Plan Meals",
        ],
      },
      vision: {
        label: "AI Vision Cooking",
        title: "Cook with<br/>AI Eyes",
        desc: "Your smartphone camera becomes a sous-chef. ChefGenie sees the cooking condition in real-time and provides precise instructions.",
        bullets: [
          "Visual ingredient detection — just point the camera at your kitchen",
          "Live pan temperature monitoring and browning progress",
          "Voice guidance and step-by-step overlay directly on screen",
        ],
      },
      finance: {
        label: "Smart Finance",
        title: "A Kitchen<br/>That Profits",
        desc: "Not just cooking — ChefGenie helps you understand cost per meal, culinary business margins, and real-time kitchen financial insights.",
        bullets: [
          "Total balance & kitchen cash flow in one view",
          "Genie Insight: saving tips based on your spending patterns",
          "Track expenses: raw materials, gas, equipment — all recorded",
        ],
      },
      creator: {
        label: "Creator Hub",
        title: "From Kitchen<br/>to Content",
        desc: "Turn your best recipes into viral content. ChefGenie provides tools for culinary content production, distribution, and monetization.",
        bullets: [
          "Integrated content studio — record, edit, publish directly from the app",
          "Business menu ideas based on latest culinary trends",
          "Recruit culinary experts and build a professional team",
        ],
      },
    },
    marketplace: {
      label: "Proximity Marketplace",
      title: "Explore the<br /><span className='accent'>Culinary World Nearby</span>",
      desc: "ChefGenie World brings a culinary shopping experience like exploring a game — find nearby stalls and checkout without leaving the virtual world.",
      steps: [
        { title: "Exploration", desc: "Move your avatar on the world map via joystick" },
        { title: "Proximity Trigger", desc: "Nearby stalls are automatically highlighted" },
        { title: "Peek & Order", desc: "Mini-card appears, one tap to cart" },
        { title: "Checkout", desc: "Cart in HUD, no need to exit the world" },
      ],
    },
    paths: {
      label: "Choose Your Path",
      title: "ChefGenie for <br /><span className='accent'>Everyone</span>",
      desc: "From casual home cooks to culinary business owners — ChefGenie adapts to your needs.",
      options: [
        { title: "Hobbyist", subtitle: "Funner Cooking", desc: "Explore creative menus and enjoy a more enjoyable kitchen experience." },
        { title: "Nutrition Seeker", subtitle: "Healthier Eating", desc: "Build a balanced diet with adaptive meal plans matching nutritional goals." },
        { title: "Business Owner", subtitle: "Profit from Kitchen", desc: "Manage costs, stock, and business opportunities via actionable dashboards." },
      ],
    },
    stats: [
      { value: "3", label: "Main AI Pillars" },
      { value: "35+", label: "Designed Screen Flows" },
      { value: "360°", label: "Proximity Marketplace" },
      { value: "∞", label: "Recipe Possibilities" },
    ],
    cta: {
      label: "Coming Soon",
      title: "Ready to Transform<br /><span className='accent'>How You Cook?</span>",
      desc: "Register your email for early access and notifications when ChefGenie officially launches.",
      button: "Notify Me",
      socialProof: "Join over 1,200+ early adopters",
    },
    nav: {
      fitur: "Features",
      journey: "User Journey",
      marketplace: "Marketplace",
      download: "Download",
      back: "Portfolio",
    },
  },
  zh: {
    hero: {
      badge: "AI 驱动的厨房伙伴",
      titleMain: "智能厨房",
      titleSub: "尽在掌控",
      desc: "ChefGenie 结合了 AI 决策引擎、厨房运营和创作者经济——一切都在一个移动应用中。",
      ctaStart: "了解其工作原理",
      ctaExplore: "探索功能",
    },
    features: {
      companion: {
        label: "AI 伴侣",
        title: "始终待命的<br/>厨房助手",
        desc: "ChefGenie 陪伴您进行每一次烹饪——从清晨的菜单建议、冰箱库存管理，到实时的步骤指导。",
        bullets: [
          "Genie 精选——基于即将过期食材的菜单推荐",
          "冰箱警报——食材临近过期的智能通知",
          "快捷操作：扫描冰箱、生成食谱、计划用餐",
        ],
      },
      vision: {
        label: "AI 视觉烹饪",
        title: "用 AI 的<br/>眼睛烹饪",
        desc: "您的智能手机摄像头变成了副厨。ChefGenie 实时观察烹饪情况并提供精确指令。",
        bullets: [
          "视觉食材检测——只需将镜头对准您的厨房",
          "实时监测锅具温度和褐变进度",
          "直接在屏幕上显示语音指导和步骤叠加",
        ],
      },
      finance: {
        label: "智能财务",
        title: "盈利的<br/>厨房",
        desc: "不仅是烹饪——ChefGenie 帮助您了解每餐成本、餐饮业务利润以及实时的厨房财务见解。",
        bullets: [
          "一目了然的总余额和厨房现金流",
          "Genie 洞察：基于您的支出模式的节省建议",
          "追踪支出：原材料、燃气、设备——尽在记录",
        ],
      },
      creator: {
        label: "创作者中心",
        title: "从厨房<br/>到内容",
        desc: "将您的最佳食谱变为热门内容。ChefGenie 提供烹饪内容制作、分发和变现工具。",
        bullets: [
          "集成的创作工作室——直接从应用录制、编辑、发布",
          "基于最新餐饮趋势的业务菜单创意",
          "招募烹饪专家并组建专业团队",
        ],
      },
    },
    marketplace: {
      label: "近场市场",
      title: "探索附近的<br /><span className='accent'>美食世界</span>",
      desc: "ChefGenie World 带来像探索游戏一样的餐饮购物体验——发现附近的摊位并无缝结账。",
      steps: [
        { title: "探索", desc: "通过摇杆在世界地图上移动您的头像" },
        { title: "近场触发", desc: "附近的摊位会自动高亮显示" },
        { title: "预览与订购", desc: "出现迷型卡，一键加入购物车" },
        { title: "结账", desc: "HUD 中的购物车，无需退出世界" },
      ],
    },
    paths: {
      label: "选择您的路径",
      title: "ChefGenie 适合 <br /><span className='accent'>每个人</span>",
      desc: "从休闲家庭主厨到餐饮业务所有者——ChefGenie 适应您的需求。",
      options: [
        { title: "爱好者", subtitle: "更有趣的烹饪", desc: "探索创意菜单，享受更愉快的厨房体验。" },
        { title: "营养追求者", subtitle: "更健康的饮食", desc: "根据营养目标建立平衡的饮食计划。" },
        { title: "企业主", subtitle: "厨房变现", desc: "通过可操作的仪表板管理成本、库存和业务机会。" },
      ],
    },
    stats: [
      { value: "3", label: "核心 AI 支柱" },
      { value: "35+", label: "设计的屏幕流程" },
      { value: "360°", label: "近场市场" },
      { value: "∞", label: "无限食谱可能" },
    ],
    cta: {
      label: "即将推出",
      title: "准备好改变<br /><span className='accent'>您的烹饪方式吗？</span>",
      desc: "注册您的电子邮件以获得早期访问并在 ChefGenie 正式发布时收到通知。",
      button: "通知我",
      socialProof: "加入超过 1,200+ 早期采用者行列",
    },
    nav: {
      fitur: "功能",
      journey: "用户旅程",
      marketplace: "市场",
      download: "下载",
      back: "作品集",
    },
  },
  ja: {
    hero: {
      badge: "AI搭載キッチンコンパニオン",
      titleMain: "スマートキッチンを",
      titleSub: "あなたの手に",
      desc: "ChefGenieは、AI意思決定エンジン、キッチンオペレーション、クリエイターエコノミーを1つのモバイルアプリで統合します。",
      ctaStart: "仕組みを見る",
      ctaExplore: "機能を見る",
    },
    features: {
      companion: {
        label: "AIコンパニオン",
        title: "いつでも準備万端な<br/>キッチンアシスタント",
        desc: "ChefGenieは、朝の献立提案、冷蔵庫の在庫管理からリアルタイムのステップバイステップ指導まで、あらゆる調理をサポートします。",
        bullets: [
          "Genieの選択 — 賞味期限が近い食材に基づいたメニューの提案",
          "冷蔵庫アラート — 食材の期限が近づいた際のスマートな通知",
          "クイック操作：冷蔵庫スキャン、レシピ生成、ミールプラン",
        ],
      },
      vision: {
        label: "AIビジョン・クッキング",
        title: "AIの目で<br/>料理する",
        desc: "スマートフォンのカメラが副シェフになります。ChefGenieが調理状況をリアルタイムで観察し、的確な指示を出します。",
        bullets: [
          "視覚的な食材検出 — カメラをキッチンに向けるだけ",
          "フライパンの温度と焼き具合のライブモニタリング",
          "音声ガイダンスとステップオーバーレイを画面に直接表示",
        ],
      },
      finance: {
        label: "スマート・ファイナンス",
        title: "利益を生む<br/>キッチン",
        desc: "単なる料理ではありません。1食あたりのコスト、ビジネス利益率、リアルタイムの財務インサイトを把握できます。",
        bullets: [
          "総残高とキッチンのキャッシュフローを1つの画面で確認",
          "Genieインサイト：支出パターンに基づいた節約のコツ",
          "支出管理：原材料、ガス、設備などすべてを記録",
        ],
      },
      creator: {
        label: "クリエイター・ハブ",
        title: "キッチンから<br/>コンテンツへ",
        desc: "最高のレシピをバイラルコンテンツに変えましょう。制作、配信、収益化のためのツールを提供します。",
        bullets: [
          "統合コンテンツスタジオ — アプリから直接録画、編集、公開",
          "最新のトレンドに基づいたビジネスメニューのアイデア",
          "料理の専門家を採用し、プロフェッショナルなチームを構築",
        ],
      },
    },
    marketplace: {
      label: "近接マーケットプレイス",
      title: "近所の<br /><span className='accent'>美食の世界を探索</span>",
      desc: "ChefGenie Worldは、ゲームのような体験を提供します。アバターを動かして近くの屋台を見つけ、世界から出ることなく決済できます。",
      steps: [
        { title: "探索", desc: "ジョイスティックでワールドマップ上のアバターを動かす" },
        { title: "近接トリガー", desc: "近くの屋台が自動的に強調表示される" },
        { title: "プレビューと注文", desc: "ミニカードが表示され、ワンタップでカートへ" },
        { title: "チェックアウト", desc: "HUD内のカートで決済、ワールドを出る必要なし" },
      ],
    },
    paths: {
      label: "パスを選択",
      title: "<br /><span className='accent'>すべての人</span>のためのChefGenie",
      desc: "カジュアルな家庭料理から料理ビジネスのオーナーまで、ChefGenieはニーズに合わせて適応します。",
      options: [
        { title: "ホビーユーザー", subtitle: "もっと楽しい料理を", desc: "クリエイティブなメニューを探索し、より楽しいキッチン体験を。" },
        { title: "健康志向", subtitle: "より健康的な食事", desc: "栄養目標に合わせた適応型ミールプランでバランスの取れた食事を。" },
        { title: "ビジネスオーナー", subtitle: "キッチンから利益を", desc: "コスト、在庫、ビジネスチャンスを実用的なダッシュボードで管理。" },
      ],
    },
    stats: [
      { value: "3", label: "主要AIの柱" },
      { value: "35+", label: "設計済み画面フロー" },
      { value: "360°", label: "近接マーケットプレイス" },
      { value: "∞", label: "レシピの可能性" },
    ],
    cta: {
      label: "近日公開",
      title: "料理の<br /><span className='accent'>常識を変えませんか？</span>",
      desc: "メールアドレスを登録して、早期アクセスと正式リリースの通知を受け取りましょう。",
      button: "通知を受け取る",
      socialProof: "1,200人以上の早期導入者に加わりましょう",
    },
    nav: {
      fitur: "機能",
      journey: "ユーザージャーニー",
      marketplace: "マーケット",
      download: "ダウンロード",
      back: "ポートフォリオ",
    },
  },
};

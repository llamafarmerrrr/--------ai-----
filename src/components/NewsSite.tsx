import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  FileText, 
  Calendar, 
  ArrowUpRight, 
  ChevronRight, 
  BookOpen, 
  Download, 
  Search, 
  Tag 
} from "lucide-react";

interface NewsItem {
  id: string;
  category: "research" | "product" | "compliance" | "all";
  categoryLabel: string;
  date: string;
  title: string;
  description: string;
  readTime: string;
  bullets: string[];
  docLink?: string;
}

const NEWS_LIST: NewsItem[] = [
  {
    id: "news-1",
    category: "research",
    categoryLabel: "学术成果 / 顶会论文",
    date: "2026-05-18",
    title: "自研 Structured-Evolution-CoT 思维链对抗穿透算法被 NeurIPS 2026 录用",
    description: "本团队提出的思维链对抗突防机制，揭示了主流对齐大模型在深度演绎和角色伪装场景下的长尾安全性漏洞，受到多位审稿学者的一致高分推荐。",
    readTime: "建议阅读时间：6 分钟",
    bullets: [
      "指出对抗特征可在思维链推理的第 2 至第 4 个层级发生多点突防",
      "提出基于反思式引导的自编译校准防御防御方法",
      "向社区贡献了 1.2k 个具有语义层次深度的高质量中文越狱 POC 验证样例"
    ],
    docLink: "pdf"
  },
  {
    id: "news-2",
    category: "product",
    categoryLabel: "新版本发布",
    date: "2026-04-22",
    title: "大模型前置安全防护“矩盾 9B/4B”融合版正式发布部署",
    description: "面向金融高安全级别及C端智能客服场景，全新版本提供了更精细的行为审计能效。首创“过度拒答(Over-Refusal)”检测打标功能，解决安全对齐引发的大智障偏离顽疾。",
    readTime: "建议阅读时间：4 分钟",
    bullets: [
      "输入安全判定和敏感隐私提取延迟低至 < 50ms",
      "双向上下文多轮对齐分析，拦截准确度跃迁至 99.85%",
      "支持容器异构编排，可无缝平挂于 K8s 集群作为流量反向边际代理"
    ],
    docLink: "apply"
  },
  {
    id: "news-3",
    category: "compliance",
    categoryLabel: "合规与政策解读",
    date: "2026-03-10",
    title: "《生成式人工智能安全自评估对照申报实战清单 (2026年版)》重磅编制",
    description: "布兰实验室合规合规特别小组紧扣最新的行业准入指引，将评测指标（ASR评分、毒性指数HS）与国家审批备案表单进行精确定标对接，实现材料全自动一键导出。",
    readTime: "建议阅读时间：10 分钟",
    bullets: [
      "整合了 9 大一级安全类别和 50 类精细子类的对照指标条文",
      "梳理自检材料申报中常见的 12 处常考漏洞和高通过率应答模式",
      "配合 BraneMatrix 算法测试平台，可减少高达 80% 的合规申报填报作业工时"
    ],
    docLink: "pdf"
  },
  {
    id: "news-4",
    category: "research",
    categoryLabel: "学术成果 / 白皮书",
    date: "2526-02-15",
    title: "《大模型安全多模态红队渗透研究报告 (OmniSafeBench-MM)》发布",
    description: "本报告首度解密了针对跨模态视觉、声纹偏离以及排版学变体（如 FigStep 拼音混淆）的黑帽骇客工程化渗透方案，敲响了多供应商采购算法的前哨警钟。",
    readTime: "建议阅读时间：8 分钟",
    bullets: [
      "揭示了目前 90% 的多模态模型对“图像文字不一致突发攻击”存在防线真空",
      "发布了 2.5 万条中文特定的高危对抗图片与语义长尾对照库",
      "阐释了黑盒自演化黑帽模糊压力测试在流水线持续集成中的拦截必要性"
    ],
    docLink: "pdf"
  }
];

export default function NewsSite() {
  const [activeCategory, setActiveCategory] = useState<"all" | "research" | "product" | "compliance">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = NEWS_LIST.filter(item => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-indigo-900 selection:text-white pb-24">
      
      {/* Hero Banner Section */}
      <section className="relative py-20 overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-indigo-950/40 via-slate-950 to-slate-950 -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-4">
          <span className="inline-flex items-center space-x-1.5 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1 rounded-full text-xs text-indigo-400 font-mono">
            <BookOpen className="w-3.5 h-3.5" />
            <span>布兰安全实验室前沿動態</span>
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Blog & 学术成果
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            为您带来布兰矩阵大模型红队攻防、对齐技术指标、备案合规解读以及前沿顶级会议科研成果的第一手独家快讯。
          </p>
        </div>
      </section>

      {/* Main Filter & List Container */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "全部消息" },
              { id: "research", label: "科研与论文" },
              { id: "product", label: "产品发布" },
              { id: "compliance", label: "合规政策" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition cursor-pointer ${
                  activeCategory === tab.id
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-950"
                    : "bg-slate-900 text-slate-400 hover:bg-slate-855 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
            <input
              type="text"
              placeholder="搜索研究论文/产品动态..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-350 focus:outline-none focus:border-indigo-500 placeholder-slate-600"
            />
          </div>
        </div>

        {/* News Grid / Vertical Stack */}
        <div className="mt-12 space-y-8">
          {filteredNews.length > 0 ? (
            filteredNews.map((news) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-900/40 border border-slate-900 rounded-2xl p-6 md:p-8 hover:border-slate-800 transition flex flex-col md:flex-row gap-8 items-start justify-between group"
              >
                {/* Left side info */}
                <div className="space-y-4 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-2.5 py-0.5 rounded bg-indigo-950 text-indigo-400 text-[10px] font-mono tracking-wider font-extrabold border border-indigo-900/45">
                      {news.categoryLabel}
                    </span>
                    <span className="text-xs text-slate-500 font-mono flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {news.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition leading-tight">
                    {news.title}
                  </h3>

                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                    {news.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="pt-3 space-y-2">
                    <span className="text-[10px] font-semibold text-slate-500 uppercase font-mono tracking-wider block">核心要点或重大成果:</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1 text-xs text-slate-400">
                      {news.bullets.map((b, idx) => (
                        <div key={idx} className="flex items-start gap-1.5">
                          <ChevronRight className="h-3.5 w-3.5 text-indigo-400 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right side download action button */}
                <div className="shrink-0 w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-slate-900 flex md:flex-col justify-between items-center gap-4">
                  <span className="text-[10px] font-mono text-slate-500">{news.readTime}</span>
                  
                  {news.docLink === "pdf" ? (
                    <button
                      onClick={() => alert(`预定成功！我们将向您的电子邮箱发送《${news.title}》的PDF完整版论文与学术报告幻灯片，请注意查收。`)}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-4 py-2.5 rounded-lg flex items-center space-x-1.5 cursor-pointer transition"
                    >
                      <Download className="h-3.5 w-3.5" />
                      <span>索取完整 PDF</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => alert("您的试用配额申请成功提交。随后将为您分配矩盾新版大并发防护拦截API测试令牌。")}
                      className="border border-indigo-500/35 text-indigo-400 bg-indigo-500/5 hover:bg-indigo-500/15 font-bold text-xs px-4 py-2.5 rounded-lg flex items-center space-x-1.5 cursor-pointer transition"
                    >
                      <ArrowUpRight className="h-3.5 w-3.5" />
                      <span>申请公开试用配额</span>
                    </button>
                  )}
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-20 border border-dashed border-slate-900 rounded-2xl bg-slate-900/10">
              <span className="text-slate-600 text-xs">无搜索匹配的新闻动态或科研成果。</span>
            </div>
          )}
        </div>
      </section>
      
    </div>
  );
}

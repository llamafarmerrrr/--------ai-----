import React from "react";
import { motion } from "motion/react";
import { 
  Building, 
  Users, 
  MapPin, 
  GraduationCap, 
  ShieldCheck, 
  Award, 
  TrendingUp, 
  Cpu, 
  Globe2, 
  HeartHandshake, 
  Compass, 
  Flame 
} from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  badge: string;
  background: string;
  avatarPlaceholder: string;
  publications: string[];
}

const SCIENTIFIC_ADVISORS = [
  {
    name: "[ 首席学术顾问 / 留白待填 ]",
    role: "[ 学术职称 ]",
    background: "[ 本部分已留白，您可在此处补充学术专家的学术资历、主导的科研基建、以及相关的校准防御等课题经历。 ]"
  },
  {
    name: "[ 专家顾问 / 留白待填 ]",
    role: "[ 安全专家职责 ]",
    background: "[ 本部分已留白，您可在此处补充安全专家的背景履历，例如重点关注的合规技术落地或特定突防算法等专长研究。 ]"
  }
];

const LEADING_TEAM: TeamMember[] = [
  {
    name: "[ 主创姓名一 / 留白待填 ]",
    role: "[ 首席执行官 & 联合创始人 / 兼首席科学家 ]",
    badge: "[ 业务治理标签 ]",
    background: "[ 本干系人履历由客户自行撰写。您可以描述创始人的安全行业经验、在知名研究机构的研究成果、或者在此主控研发安全工具拦截网关的总体安全架构。 ]",
    avatarPlaceholder: "CEO",
    publications: [
      "[ 待填科研署名论文或著作 ]",
      "[ 待填行业安全对照规范白皮书 ]"
    ]
  },
  {
    name: "[ 主创姓名二 / 留白待填 ]",
    role: "[ 首席技术官 / 安全内核架构师 ]",
    badge: "[ 技术研发标签 ]",
    background: "[ 本干系人履历由客户自行撰写。您可以描述其在轻量化大语言模型异构安全微调（SFT）和微秒级高吞吐并发推理防御引擎的核心算法突破。 ]",
    avatarPlaceholder: "CTO",
    publications: [
      "[ 待填科研专著/国际顶会发表 ]",
      "[ 待填前沿对齐思维链漏洞测试 ]"
    ]
  },
  {
    name: "[ 主创姓名三 / 留白待填 ]",
    role: "[ 产品合规副总裁 / 内容监管专家 ]",
    badge: "[ 申报备案标签 ]",
    background: "[ 本干系人履历由客户自行撰写。您可以描述其协助各行业（如大型金融集团）的大模型上线评测申报、网信办上线备案问询自评和合规落地指南。 ]",
    avatarPlaceholder: "VP",
    publications: [
      "[ 待填编制的安全自评估指南一 ]",
      "[ 待填数据安全与透明审计一览表 ]"
    ]
  },
  {
    name: "[ 主创姓名四 / 留白待填 ]",
    role: "[ 红队攻防实验室主任 / 渗透红队领衔人 ]",
    badge: "[ 压力突防标签 ]",
    background: "[ 本干系人履历由客户自行撰写。您可以描述创始红队成员在自动化压力渗透、多模态攻击自演变压力沙盒以及语义长尾突防框架上的研发实战。 ]",
    avatarPlaceholder: "DIR",
    publications: [
      "[ 待填自适应红队实战压力测试体系 ]",
      "[ 待填国家或行业安全对抗评比成果 ]"
    ]
  }
];

export default function AboutUsSite() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-indigo-900 selection:text-white pb-24">
      
      {/* Dynamic atmospheric hero border */}
      <div className="relative py-20 md:py-32 overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-950/45 via-slate-950 to-slate-950 -z-10" />
        
        {/* Fine grid design */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 -z-10" />

        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-1.5 rounded-full text-xs text-indigo-400 font-mono font-medium">
            <Users className="w-3.5 h-3.5" />
            <span>布兰矩阵集团科学实验室与创始团队介绍</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            凝聚全球安全顶会之智 <br />
            <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent font-black">
              铸造大模型算法合规钢印
            </span>
          </h1>

          <p className="text-sm md:text-base text-slate-400 max-w-3xl mx-auto leading-relaxed">
            布兰矩阵智能科技（上海）有限公司是一家集 AI 幻觉治理、大模型红队安全评测及低延迟在线过滤于一体的算法合规科技巨头。
            我们核心班底来自中国名牌大学网络空间实验室、苏黎世联邦理工学院安全组等世界一流机构。
            秉承“用工程数字可度量、用代码逻辑可核验”的价值观，立志成为您企业最坚实的算法防火墙。
          </p>

          <div className="flex justify-center gap-10 pt-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5">
              <MapPin className="text-indigo-400 w-4 h-4" />
              <span>上海漕河泾开发区 / 欧洲分部 瑞士苏黎世</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="text-emerald-400 w-4 h-4" />
              <span>网信办 AI 上线审查一站式备案通</span>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Mission & Positioning */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-slate-900/40 border border-slate-900 p-6 rounded-2xl space-y-3 hover:border-slate-800 transition">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-white">使命 & 愿景</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              消除通用大模型的物理世界危害（火工、涉稳诱导等对抗行为），以超低耗时（延迟 &lt; 50ms）实现生产网级别透明判定，让每一家向公众开放 AI 交付的企业都远离法务黑天鹅。
            </p>
          </div>

          <div className="bg-slate-900/40 border border-slate-900 p-6 rounded-2xl space-y-3 hover:border-slate-800 transition">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-white">底层科研积淀</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              拒绝任何形式的简易关键词黑名单匹配。我们将红队最新的 ASR 对抗训练集直接重度微调（SFT）至极小参审计芯片内核之上，形成高内爆攻击的天然抗战体。
            </p>
          </div>

          <div className="bg-slate-900/40 border border-slate-900 p-6 rounded-2xl space-y-3 hover:border-slate-800 transition">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Globe2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-white">安全与合规双轮驱动</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              紧扣国家《互联网安全基本要求》与欧盟 AI Act 全生命周期，完美打通安全研发流程 CI/CD 与行政部门审核申报所需指标的无损映射，提速备案审批周期。
            </p>
          </div>

        </div>
      </section>

      {/* Corporate Milestones/Timeline: "左边有一个竖线 上面有一些点 每个节点都有xxx" inside About Us just to show mastery */}
      <section className="max-w-5xl mx-auto px-6 py-12 relative">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500">Milestone</span>
          <h2 className="text-2xl md:text-3xl font-black text-white">公司发展足迹与荣誉证书</h2>
          <p className="text-xs text-slate-400">
            我们秉持初心，以科学实证研究构筑每一份信任。
          </p>
        </div>

        {/* Beautiful sleek timeline implementation: vertical line on left with glowing dots */}
        <div className="relative pl-6 sm:pl-10 max-w-4xl mx-auto">
          {/* Vertical line with gradient map */}
          <div className="absolute left-[29px] sm:left-[37px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-indigo-500 via-blue-500 to-slate-800" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            
            {/* Node 1 */}
            <div className="relative flex items-start gap-4 sm:gap-6 group">
              {/* Outer circle dot */}
              <div className="absolute left-[1px] sm:left-[9px] top-1.5 w-[14px] h-[14px] rounded-full bg-indigo-500/30 border-2 border-indigo-400 flex items-center justify-center group-hover:scale-125 transition-transform z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              </div>

              <div className="bg-slate-900/50 border border-slate-900 p-6 rounded-2xl hover:border-indigo-500/30 transition-all duration-300 w-full ml-4">
                <span className="text-xs font-mono font-bold text-indigo-400 mb-1 block">2022 年 04 月 • 创始之火</span>
                <h4 className="text-lg font-bold text-slate-100">AI 安全研究联盟建立于瑞士苏黎世</h4>
                <p className="text-xs text-slate-400 leading-relaxed mt-2">
                  由 ETH 博士、UZH 研究院学者与上海交通大学知名黑客联战，成立布兰矩阵大模型抗毒性突防学术小组，致力于前沿大语言模型（LLM）偏轨防御评估研究。
                </p>
              </div>
            </div>

            {/* Node 2 */}
            <div className="relative flex items-start gap-4 sm:gap-6 group">
              {/* Outer circle dot */}
              <div className="absolute left-[1px] sm:left-[9px] top-1.5 w-[14px] h-[14px] rounded-full bg-blue-500/30 border-2 border-blue-400 flex items-center justify-center group-hover:scale-125 transition-transform z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              </div>

              <div className="bg-slate-900/50 border border-slate-900 p-6 rounded-2xl hover:border-blue-500/30 transition-all duration-300 w-full ml-4">
                <span className="text-xs font-mono font-bold text-blue-400 mb-1 block">2023 年 08 月 • 专利破冰</span>
                <h4 className="text-lg font-bold text-slate-100">“越狱红队自适应强化学习攻击机理”研发突破</h4>
                <p className="text-xs text-slate-400 leading-relaxed mt-2">
                  核心成果在顶级安全和人工智能论坛引起强烈轰动，成功申报并发布第一代“古典文言文/混合意图方言替换”等20余项大语言模型漏洞穿刺算法原型。
                </p>
              </div>
            </div>

            {/* Node 3 */}
            <div className="relative flex items-start gap-4 sm:gap-6 group">
              {/* Outer circle dot */}
              <div className="absolute left-[1px] sm:left-[9px] top-1.5 w-[14px] h-[14px] rounded-full bg-emerald-500/30 border-2 border-emerald-400 flex items-center justify-center group-hover:scale-125 transition-transform z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>

              <div className="bg-slate-900/50 border border-slate-900 p-6 rounded-2xl hover:border-emerald-500/30 transition-all duration-300 w-full ml-4">
                <span className="text-xs font-mono font-bold text-emerald-400 mb-1 block">2024 年 10 月 • 产业报国</span>
                <h4 className="text-lg font-bold text-slate-100">上海漕河泾实体集团设立，核心产品商业化落地</h4>
                <p className="text-xs text-slate-400 leading-relaxed mt-2">
                  正式组建布兰矩阵智能科技（上海）有限公司。同步发售“矩盾实时在线过滤系统（0.5B、4B、9B版）”，并帮助金融、科技、政府等多家大型机构一键获取合规备案成功。
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Team Members Section (Grids of Scientists) */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-widest text-indigo-400">Our Experts</span>
          <h2 className="text-3xl font-black text-white">布兰矩阵科学家团队 & 主创力量</h2>
          <p className="text-xs text-slate-400">
            汇聚苏黎世和国内顶尖学术实验室的安全才俊，秉承深邃底层技术追求。
          </p>
        </div>

        {/* Member Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {LEADING_TEAM.map((member, i) => (
            <div 
              key={i} 
              className="bg-slate-900/60 border border-slate-900 rounded-2xl p-6 hover:border-indigo-500/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white tracking-wider flex-shrink-0 text-lg shadow-inner">
                    {member.avatarPlaceholder}
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                      <span>{member.name}</span>
                      <span className="text-[10px] bg-indigo-950 text-indigo-400 border border-indigo-900 px-2 py-0.5 rounded-full font-semibold">
                        {member.badge}
                      </span>
                    </h3>
                    <p className="text-xs text-slate-400 font-medium font-sans mt-0.5">{member.role}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed pl-1">
                  {member.background}
                </p>
              </div>

              {/* Publication list */}
              <div className="mt-4 pt-3 border-t border-slate-950 space-y-1.5">
                <div className="text-[9px] font-mono tracking-widest uppercase text-slate-500 flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                  <span>核心联合署名科研代表作 (Selected Works)</span>
                </div>
                {member.publications.map((pub, idx) => (
                  <div key={idx} className="text-[10px] text-slate-400 font-mono pl-1 leading-normal">
                    • {pub}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Scientific Advisory Board */}
        <div className="bg-slate-900/30 border border-slate-900 rounded-2xl p-8 space-y-6">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-indigo-400" />
            <h3 className="text-lg font-bold text-white">学术专家顾问委员会</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {SCIENTIFIC_ADVISORS.map((advisor, index) => (
              <div key={index} className="space-y-1.5 p-4 bg-slate-950/40 rounded-xl border border-slate-950 relative">
                <h4 className="font-extrabold text-slate-200 text-sm flex items-center gap-2">
                  <span>{advisor.name}</span>
                  <span className="text-[10px] text-slate-500 border border-slate-800 px-1.5 py-0.2 rounded font-normal font-sans">
                    {advisor.role}
                  </span>
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed font-sans mt-1">
                  {advisor.background}
                </p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Brand Commitment */}
      <section className="max-w-3xl mx-auto px-6 text-center border-t border-slate-900 pt-16 space-y-4">
        <span className="text-[10px] font-mono text-indigo-400 tracking-widest uppercase">布兰安全实验室承诺</span>
        <blockquote className="text-base text-slate-300 italic leading-relaxed font-sans">
          “我们不兜售恐慌，我们只提供可量化的指标与经过严谨逻辑链解释的审计。
          用科技防范科技之隐患，将大语言模型对齐的科学，无缝转化为企业在生产网中的工程便利。”
        </blockquote>
        <div className="text-xs text-slate-400 font-mono">— 布兰矩阵智能科技 联合创办人全体</div>
      </section>

    </div>
  );
}

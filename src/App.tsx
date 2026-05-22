import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ShieldAlert,
  ShieldCheck,
  Compass,
  Building,
  ArrowUpRight,
  ChevronRight,
  FileText,
  Mail,
  Network,
  Lock,
  MessageSquare,
  Globe,
  Menu,
  X
} from "lucide-react";
import GroupPortalSite from "./components/GroupPortalSite";
import JuDunSite from "./components/JuDunSite";
import BraneMatrixSite from "./components/BraneMatrixSite";
import AboutUsSite from "./components/AboutUsSite";
import NewsSite from "./components/NewsSite";

type ProductType = "group" | "judun" | "branematrix" | "about" | "news";

export default function App() {
  const [activeProduct, setActiveProduct] = useState<ProductType>("group");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth scroll helper to switch between sections smoothly
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  }, [activeProduct]);

  return (
    <div className="min-h-screen bg-[#020208] flex flex-col justify-between selection:bg-indigo-950 selection:text-indigo-200">
      
      {/* SINGLE UNIFIED TOP PROFESSIONAL TOB HEADER */}
      <header className="bg-slate-950 text-slate-100 sticky top-0 z-50 border-b border-slate-900 shadow-xl backdrop-blur bg-slate-950/95 font-sans">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between gap-4">
          
          {/* Elegant Logo with simple clean line */}
          <div 
            onClick={() => setActiveProduct("group")}
            className="flex items-center space-x-3 select-none cursor-pointer group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse group-hover:scale-125 transition-transform" />
            <div className="flex flex-col">
              <span className="font-extrabold text-white text-sm tracking-widest font-mono">BRANEMATRIX</span>
              <span className="text-[9px] text-slate-400 tracking-wider font-semibold">布兰矩阵智能科技</span>
            </div>
          </div>

          {/* Nav Items (Desktop): Logo | 关于我们 | 产品服务 (Aligned to prevent overlapping) | 新闻中心 */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs font-semibold text-slate-300">
            
            <button 
              onClick={() => setActiveProduct("about")}
              className={`hover:text-white transition py-1 cursor-pointer ${activeProduct === "about" ? "text-white underline decoration-indigo-500 underline-offset-4 font-bold" : "text-slate-300"}`}
            >
              关于我们
            </button>

            {/* 产品 Dropdown Selector - Beautifully positioned relative to layout */}
            <div className="relative group py-5">
              <button className="hover:text-white transition flex items-center space-x-1.5 py-1 text-slate-300 cursor-pointer">
                <span>产品服务</span>
                <ChevronRight className="h-3.5 w-3.5 rotate-90 text-slate-450 transition-transform group-hover:rotate-[270deg]" />
              </button>
              
              {/* Dropdown Menu Box - Absolute positioned below button, elevated z-index prevents any collision/overlap */}
              <div className="absolute top-full left-0 pt-2 w-64 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-[999]">
                <div className="bg-slate-950/95 backdrop-blur-xl border border-indigo-950 p-2 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.9)] space-y-1">
                  
                  {/* JuDun Section */}
                  <button
                    onClick={() => setActiveProduct("judun")}
                    className={`w-full text-left px-3.5 py-2.5 rounded-lg transition text-xs cursor-pointer font-medium flex items-center justify-between ${
                      activeProduct === "judun" ? "bg-indigo-950 text-indigo-400 font-bold border border-indigo-900/30" : "hover:bg-slate-900 text-slate-300"
                    }`}
                  >
                    <span>矩盾智能大模型防护系统</span>
                    <ChevronRight className="h-3 w-3 opacity-50 shrink-0" />
                  </button>

                  {/* BraneMatrix Section */}
                  <button
                    onClick={() => setActiveProduct("branematrix")}
                    className={`w-full text-left px-3.5 py-2.5 rounded-lg transition text-xs cursor-pointer font-medium flex items-center justify-between ${
                      activeProduct === "branematrix" ? "bg-blue-950 text-blue-400 font-bold border border-blue-900/30" : "hover:bg-slate-900 text-slate-300"
                    }`}
                  >
                    <span>BraneMatrix 算法测试平台</span>
                    <ChevronRight className="h-3 w-3 opacity-50 shrink-0" />
                  </button>
                  
                </div>
              </div>
            </div>

            <button
              onClick={() => setActiveProduct("news")}
              className={`hover:text-white transition py-1 cursor-pointer ${activeProduct === "news" ? "text-white underline decoration-indigo-500 underline-offset-4 font-bold" : "text-slate-300"}`}
            >
              新闻中心
            </button>
          </nav>

          {/* Action Call for ToB Sales contact and Ginkeley link (Desktop only) */}
          <div className="hidden lg:flex items-center space-x-3.5">
            <a
              id="ginkeley-header-btn"
              href="https://ginkley.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-emerald-500/30 text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 font-bold text-xs px-3.5 py-2 rounded-lg transition-all flex items-center space-x-1.5 duration-100 cursor-pointer"
            >
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shrink-0" />
              <span>Ginkeley</span>
            </a>

            <a
              href="mailto:bd@branematrix.com"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs px-3.5 py-2 rounded-lg transition-all shadow-md shadow-indigo-900/20 inline-flex items-center space-x-1 hover:-translate-y-0.5 duration-100 shrink-0 cursor-pointer"
            >
              <span>联系销售 ➔</span>
            </a>
          </div>

          {/* Mobile and Tablet Header Trigger and Compact Elements */}
          <div className="lg:hidden flex items-center space-x-2">
            
            {/* Embedded compact Ginkeley Link for quick mobile reach */}
            <a
              href="https://ginkley.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-emerald-500/30 text-emerald-400 bg-emerald-500/10 px-2.5 py-1.5 rounded-md text-[10px] font-bold tracking-wide"
            >
              Ginkeley
            </a>

            {/* Smooth Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-300 hover:text-white bg-slate-905 border border-slate-800 rounded-md focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-indigo-400 transition" />
              ) : (
                <Menu className="h-5 w-5 text-slate-300 transition" />
              )}
            </button>
          </div>

        </div>

        {/* HIGHLY INTERACTIVE AND POLISHED MOBILE/TABLET SLIDE-DOWN DRAWER */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden border-t border-slate-900 bg-slate-950 overflow-hidden"
            >
              <div className="px-5 py-6 space-y-5 flex flex-col font-sans">
                
                {/* Main Link Stack with descriptive but direct buttons */}
                <div className="space-y-1">
                  <span className="text-[9px] font-inter uppercase tracking-widest text-slate-600 block mb-2 font-bold select-none">
                    导航版块
                  </span>
                  
                  {[
                    { id: "about", label: "关于我们" },
                    { id: "news", label: "新闻中心" }
                  ].map((link) => (
                    <button
                      key={link.id}
                      onClick={() => {
                        setActiveProduct(link.id as any);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full text-left py-3 px-4 rounded-xl text-sm font-semibold tracking-wide transition ${
                        activeProduct === link.id
                          ? "bg-slate-900 text-white border-l-4 border-indigo-500 pl-3"
                          : "text-slate-400 hover:bg-slate-900/60 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>

                {/* Products section inside mobile menu */}
                <div className="space-y-2">
                  <span className="text-[9px] font-inter uppercase tracking-widest text-slate-600 block font-bold select-none">
                    旗舰大模型安全产品
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <button
                      onClick={() => {
                        setActiveProduct("judun");
                        setMobileMenuOpen(false);
                      }}
                      className={`text-left p-3.5 rounded-xl border transition ${
                        activeProduct === "judun"
                          ? "bg-indigo-950/60 border-indigo-500/40 text-indigo-300 font-bold"
                          : "bg-slate-900/40 border-slate-900 hover:border-slate-800 text-slate-300"
                      }`}
                    >
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                        <span>矩盾安全防护系统</span>
                      </div>
                      <p className="text-[10px] text-slate-400 mt-1 leading-normal">
                        秒级低时延并发过滤与内容核验
                      </p>
                    </button>

                    <button
                      onClick={() => {
                        setActiveProduct("branematrix");
                        setMobileMenuOpen(false);
                      }}
                      className={`text-left p-3.5 rounded-xl border transition ${
                        activeProduct === "branematrix"
                          ? "bg-blue-950/60 border-blue-500/40 text-blue-300 font-bold"
                          : "bg-slate-900/40 border-slate-900 hover:border-slate-800 text-slate-300"
                      }`}
                    >
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        <span>BraneMatrix 算法测试平台</span>
                      </div>
                      <p className="text-[10px] text-slate-400 mt-1 leading-normal">
                        自动化安全红队突防沙箱评测
                      </p>
                    </button>
                  </div>
                </div>

                {/* Mobile call to action section */}
                <div className="pt-2 border-t border-slate-900 flex flex-col sm:flex-row gap-3">
                  <a
                    href="mailto:bd@branematrix.com"
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs py-3 rounded-lg text-center shadow-lg shadow-indigo-950/30"
                  >
                    在线联系销售
                  </a>
                  <a
                    href="https://ginkley.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-bold text-xs py-3 rounded-lg text-center"
                  >
                    体验 Ginkeley
                  </a>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </header>

      {/* RENDER ACTIVE WEB FLAVOR WITH TRANSITIONS */}
      <main className="grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {activeProduct === "group" ? (
              <GroupPortalSite onSelectProduct={(p) => setActiveProduct(p)} />
            ) : activeProduct === "about" ? (
              <AboutUsSite />
            ) : activeProduct === "judun" ? (
              <JuDunSite />
            ) : activeProduct === "news" ? (
              <NewsSite />
            ) : (
              <BraneMatrixSite />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* UNIFIED PROFESSIONAL ENTERPRISE TOB FOOTER */}
      {/* Keeps exact company filing details & brand statement while looking exceptionally professional */}
      <footer className="bg-slate-950 border-t-2 border-slate-900 text-slate-400 py-16 px-4 md:px-8 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10">
          
          {/* Logo & Slogan area */}
          <div className="lg:col-span-4 space-y-4">
            <div 
              onClick={() => setActiveProduct("group")}
              className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-lg font-sans cursor-pointer hover:border-slate-700"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
              <span className="font-extrabold text-white text-sm tracking-wider font-mono">BRANEMATRIX 布兰矩阵</span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-sm">
              布兰矩阵智能科技（上海）有限公司是国内领先的 AI 与大模型算法安全服务商。
              针对大语言模型（LLM）与多模态大模型（MLLM）在商业应用流程中的各类潜在对抗威胁，
              提供“矩盾”在线实时防护模型及 BraneMatrix 算法安全测试平台，将安全风险转化为可量化的工程指标。
            </p>

            <div className="space-y-1.5 pt-2">
              <div className="text-[10px] font-mono tracking-widest uppercase text-slate-500">
                企业资质与安全白皮书联络
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 bg-slate-900 rounded border border-slate-850 text-slate-300 font-mono whitespace-nowrap">
                  Email: bd@branematrix.com
                </span>
                <span className="px-2.5 py-1 bg-slate-900 rounded border border-slate-850 text-slate-300 font-mono whitespace-nowrap">
                  Tel: 400-882-9912
                </span>
              </div>
            </div>
          </div>

          {/* Links Column 1: Solutions */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-white font-bold text-sm tracking-widest font-sans">旗下安全产品矩阵</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActiveProduct("judun")} className="hover:text-indigo-400 text-slate-300 transition text-left flex items-center gap-1 cursor-pointer">
                  <span>矩盾 AI 对话防护模型</span>
                  <ChevronRight className="h-3 w-3 text-indigo-400/80" />
                </button>
              </li>
              <li>
                <button onClick={() => setActiveProduct("branematrix")} className="hover:text-blue-400 text-slate-300 transition text-left flex items-center gap-1 cursor-pointer">
                  <span>BraneMatrix 算法测试平台</span>
                  <ChevronRight className="h-3 w-3 text-blue-400/80" />
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Solutions */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-white font-bold text-sm tracking-widest font-sans">核心合规治理对齐</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#judun-compliance" onClick={() => setActiveProduct("judun")} className="hover:text-white transition flex items-center space-x-1.5">
                  <Lock className="h-3 w-3 text-slate-500 shrink-0" />
                  <span>国家《互联网安全基本要求》</span>
                </a>
              </li>
              <li>
                <a href="#pl-compliance" onClick={() => setActiveProduct("branematrix")} className="hover:text-white transition flex items-center space-x-1.5">
                  <ShieldCheck className="h-3 w-3 text-slate-500 shrink-0" />
                  <span>欧盟人工智能法案 (EU AI Act)</span>
                </a>
              </li>
              <li>
                <a href="#judun-compliance" onClick={() => setActiveProduct("judun")} className="hover:text-white transition block">
                  个人信息保护法 (PIPL) / GDPR
                </a>
              </li>
              <li>
                <a href="#pl-sandbox" onClick={() => setActiveProduct("branematrix")} className="hover:text-white transition block">
                  模型上线前安全准入与红队自测
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Corporate Links */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-white font-bold text-sm tracking-widest font-sans">联络合作</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start space-x-1.5 text-slate-400">
                <Building className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed lg:whitespace-nowrap xl:whitespace-nowrap">布兰矩阵上海漕河泾 AI 安全实验室</span>
              </li>
              <li>
                <span className="text-slate-550 font-mono text-[10px] break-all block">邮箱: bd@branematrix.com</span>
              </li>
              <li className="pt-2">
                <a href={activeProduct === "judun" ? "#judun-cta" : "#pl-cta"} className="inline-flex items-center space-x-1 px-3 py-1.5 bg-slate-900 border border-slate-850 hover:border-slate-700 text-white rounded font-bold text-[11px] transition whitespace-nowrap">
                  <span>演示沙箱预约</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Corporate Filing block (DO NOT MODIFY - KEEP PURE) */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-900/80 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans">
            <div className="space-y-1 text-center md:text-left">
              <p className="filing text-slate-500 tracking-wide">
                Copyright © 2022-2026 BRANEMATRIX. All Rights Reserved. &nbsp;|&nbsp; 布兰矩阵智能科技（上海）有限公司 版权所有
              </p>
              <p className="filing text-slate-600 font-mono">
                沪ICP备2026041309号-2 &nbsp;|&nbsp; 沪B7-20251277 &nbsp;|&nbsp; 沪公网安备11011242077199号
              </p>
            </div>
            
            <div className="flex items-center space-x-3 text-slate-600 text-xs shrink-0 whitespace-nowrap">
              <span className="flex items-center"><MessageSquare className="h-3.5 w-3.5 mr-1 text-slate-550" /> 微信公众号</span>
              <span>•</span>
              <span className="flex items-center"><Globe className="h-3.5 w-3.5 mr-1 text-slate-555" /> 算法安全评测网</span>
            </div>
          </div>

          {/* Highly elegant legal footnote alignment */}
          <p className="text-[10px] text-slate-700 font-mono leading-relaxed text-center md:text-left max-w-5xl select-none leading-normal">
            【服务与版权免责声明】本文档和网站演示用于介绍布兰矩阵防护模型及算法安全渗透测评的技术定位与方法。除双方商业合同另有协议约束外，其判定过程与演示不构成对具体模型表现、合规结论、安全资质审核认可的绝对明示。所有白皮书修改权归布兰矩阵 AI 安全实验室所有。
          </p>
        </div>
      </footer>

    </div>
  );
}

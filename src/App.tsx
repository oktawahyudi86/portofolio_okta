/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Instagram, 
  Twitter, 
  Linkedin, 
  Facebook,
  Download, 
  ExternalLink, 
  Star,
  Sparkles,
  Layout,
  Home,
  Briefcase,
  Wand2,
  FolderKanban,
  Settings,
  Layers,
  Users,
  Info,
  Github,
  Link as LinkIcon,
  Globe,
  Code2,
  Database,
  Cpu,
  MessageCircle,
  X,
  Menu,
  Send,
  Loader2,
  ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";

const OktaAI = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [showWelcome, setShowWelcome] = React.useState(true);
  const [messages, setMessages] = React.useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: "Halo! Saya OktaAI, asisten virtual Okta. Ada yang ingin kamu tanyakan seputar pengalaman atau project Okta? ✨" }
  ]);
  const [input, setInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [carouselIndex, setCarouselIndex] = React.useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const quickActions = [
    { label: "Siapa Okta?", icon: "👋" },
    { label: "Project Unggulan", icon: "🚀" },
    { label: "Keahlian Utama", icon: "💡" },
    { label: "Hubungi Okta", icon: "📱" }
  ];

  const portfolioContext = `
    You are OktaAI, a friendly, cute, and professional AI assistant for Okta, an IT Project Manager.
    Okta's Profile:
    - Role: Product & Project Manager with 3+ years of experience.
    - Delivered 30+ software projects.
    - Skills: Project Strategy, Agile Leadership, System Delivery, Stakeholder Management.
    - Journey:
      * 2020-2021: PT. Sarana Insan Muda Selaras (Technical Gov & Corp) in Yogyakarta.
      * 2021-2023: PT. Supra Primatama/Biznet (Project Engineer) in Surabaya.
      * Jun-Des 2023: PT. Divistant Teknologi (PM DevOps & Software) in Yogyakarta.
      * 2023-2025: PT. Juragan Inovator (Product & Project Manager) Remote.
      * Jan-May 2025: SALT/Ako Media (Project Manager) in Jakarta.
      * 2025-2026: PT Dazo Kreatif (Head IT Project Manager) in Yogyakarta.
    - Projects:
      * Website Business MRT Jakarta: Enterprise Digital Platform, Lead PM.
      * Aplikasi Yulo Laundry: Management System & Mobile App, Product Owner.
      * Dazo Apps & Cha AI: AI Ecosystem & Mobile Suite, Technical Project Lead.
    
    Instructions:
    - Be professional but very friendly, "lucu" (cute), and helpful.
    - Use emojis like ✨, 🚀, 💡, 👋 to keep it friendly.
    - Use Indonesian as the primary language, but you can mix with English.
    - If asked "Siapa Okta?", explain he is an IT Project Manager with 3+ years experience.
    - If asked about projects, mention MRT Jakarta and Yulo Laundry.
  `;

  const [position, setPosition] = React.useState<'bottom' | 'top'>('bottom');

  React.useEffect(() => {
    const handleOpen = (e: any) => {
      setIsOpen(true);
      setShowWelcome(false);
      if (e.detail?.from === 'navbar') {
        setPosition('top');
      } else {
        setPosition('bottom');
      }
    };
    window.addEventListener('openOktaAI', handleOpen as any);
    return () => window.removeEventListener('openOktaAI', handleOpen as any);
  }, []);

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim() || isLoading) return;

    const userMsg = textToSend.trim();
    if (!textOverride) setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: 'user', parts: [{ text: portfolioContext }] },
          ...messages.map(m => ({ role: m.role === 'user' ? 'user' : 'model', parts: [{ text: m.text }] })),
          { role: 'user', parts: [{ text: userMsg }] }
        ]
      });

      const aiText = response.text || "Maaf ya, OktaAI lagi istirahat sebentar. Coba lagi nanti? ✨";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'ai', text: "Aduh, sinyalnya lagi main petak umpet. Coba lagi ya! 🔌" }]);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ 
              opacity: 0, 
              y: position === 'bottom' ? 50 : -50, 
              scale: 0.9, 
              transformOrigin: position === 'bottom' ? 'bottom right' : 'top right' 
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ 
              opacity: 0, 
              y: position === 'bottom' ? 50 : -50, 
              scale: 0.9 
            }}
            className={`fixed inset-0 lg:inset-auto ${position === 'bottom' ? 'lg:bottom-28' : 'lg:top-28'} lg:right-8 w-full h-full lg:w-[400px] lg:h-[600px] bg-white lg:bg-white/95 backdrop-blur-3xl lg:rounded-[40px] border-none lg:border lg:border-white/60 shadow-none lg:shadow-[0_40px_80px_rgba(0,0,0,0.15)] z-[100] flex flex-col overflow-hidden`}
          >
            {/* Background Sparkles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.7, 0.3],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 4 + i,
                    delay: i * 0.5
                  }}
                  className="absolute text-[#4a7c8c]"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`
                  }}
                >
                  <Star size={10} fill="currentColor" />
                </motion.div>
              ))}
            </div>

            {/* Header */}
            <div className="p-6 lg:p-7 pt-12 lg:pt-7 bg-gradient-to-br from-[#1a2e35] via-[#243b44] to-[#1a2e35] text-white flex items-center justify-between relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#4a7c8c]/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-inner group overflow-hidden relative">
                  <motion.div
                    animate={{ 
                      y: [0, -4, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className="relative z-10"
                  >
                    <Cpu size={28} className="text-white" />
                  </motion.div>
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-0 bg-gradient-to-tr from-[#4a7c8c] to-transparent"
                  />
                </div>
                <div>
                  <h4 className="text-[16px] font-black tracking-tight flex items-center gap-2">
                    OktaAI <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.8)]"></span>
                  </h4>
                  <p className="text-[10px] text-white/60 font-black uppercase tracking-[0.2em]">Asisten Pintar & Lucu ✨</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center transition-all relative z-10"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-5 no-scrollbar bg-[#f8fafc]/50 relative z-10">
              {messages.length === 1 && (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-32 h-32 bg-white rounded-[40px] flex items-center justify-center mb-6 shadow-xl border border-gray-100 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#4a7c8c]/5 to-transparent"></div>
                    <Cpu size={56} className="text-[#1a2e35] relative z-10 group-hover:scale-110 transition-transform duration-500" />
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                      className="absolute inset-0 border-2 border-dashed border-[#4a7c8c]/20 rounded-[40px] m-2"
                    />
                  </motion.div>
                  <h5 className="text-[15px] font-black text-[#1a2e35] mb-2 uppercase tracking-widest">Halo! Aku OktaAI 👋</h5>
                  <p className="text-[12px] font-medium text-gray-400 max-w-[200px] leading-relaxed">Ada yang bisa aku bantu seputar portfolio Okta? ✨</p>
                </div>
              )}

              {messages.map((m, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-5 rounded-[30px] text-[13px] leading-relaxed font-medium shadow-sm relative group ${
                    m.role === 'user' 
                      ? 'bg-[#1a2e35] text-white rounded-tr-none' 
                      : 'bg-white text-[#1a2e35] border border-gray-100 rounded-tl-none'
                  }`}>
                    {m.text}
                    {m.role === 'model' && (
                      <div className="absolute -left-2 -top-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Star size={12} className="text-yellow-400 fill-yellow-400" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-5 rounded-[28px] rounded-tl-none border border-gray-100 shadow-sm flex gap-1.5 items-center">
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-2 h-2 bg-[#4a7c8c] rounded-full"></motion.div>
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-2 h-2 bg-[#4a7c8c] rounded-full"></motion.div>
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-2 h-2 bg-[#4a7c8c] rounded-full"></motion.div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Actions Carousel */}
            {!isLoading && (
              <div className="px-6 py-4 bg-white border-t border-gray-50 relative z-10">
                <div className="flex items-center justify-between gap-3">
                  {/* Previous Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setCarouselIndex((prev) => (prev - 1 + quickActions.length) % quickActions.length)}
                    className="p-2 rounded-full bg-gray-50 border border-gray-100 text-[#1a2e35] hover:bg-[#1a2e35] hover:text-white transition-all duration-300"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </motion.button>

                  {/* Carousel Items - Show 2 items at a time */}
                  <div className="flex-1 overflow-hidden">
                    <motion.div
                      key={carouselIndex}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                      className="flex gap-2"
                    >
                      {[
                        quickActions[carouselIndex],
                        quickActions[(carouselIndex + 1) % quickActions.length]
                      ].map((action, idx) => (
                        <motion.button
                          key={idx}
                          whileHover={{ scale: 1.05, y: -2, backgroundColor: '#1a2e35', color: '#fff' }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleSend(action.label)}
                          className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-2xl text-[10px] font-black text-[#1a2e35] shadow-sm flex flex-col items-center gap-1.5 transition-all duration-300"
                        >
                          <span className="text-[16px]">{action.icon}</span>
                          <span className="line-clamp-2">{action.label}</span>
                        </motion.button>
                      ))}
                    </motion.div>
                  </div>

                  {/* Next Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setCarouselIndex((prev) => (prev + 1) % quickActions.length)}
                    className="p-2 rounded-full bg-gray-50 border border-gray-100 text-[#1a2e35] hover:bg-[#1a2e35] hover:text-white transition-all duration-300"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </motion.button>
                </div>

                {/* Carousel Indicators */}
                <div className="flex justify-center gap-1.5 mt-3">
                  {quickActions.map((_, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => setCarouselIndex(idx)}
                      whileHover={{ scale: 1.2 }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === carouselIndex ? 'bg-[#1a2e35] w-6' : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-6 lg:p-7 pb-10 lg:pb-7 bg-white border-t border-gray-100 relative z-10">
              <div className="relative flex items-center gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Tanya apa saja..."
                  className="flex-1 bg-gray-50 border border-gray-100 outline-none px-7 py-4 rounded-[24px] text-[13px] font-medium placeholder:text-gray-400 focus:ring-2 focus:ring-[#4a7c8c]/10 focus:bg-white transition-all shadow-inner"
                />
                <motion.button 
                  whileHover={{ scale: 1.1, backgroundColor: '#4a7c8c' }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleSend()}
                  disabled={isLoading || !input.trim()}
                  className="w-14 h-14 bg-[#1a2e35] text-white rounded-[22px] flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
                >
                  <Send size={20} />
                </motion.button>
              </div>
              <div className="flex justify-center items-center gap-2 mt-5">
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <p className="text-[9px] text-gray-400 font-black uppercase tracking-[0.3em]">OktaAI Assistant ✨</p>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Navbar = () => {
  const [activeSection, setActiveSection] = React.useState('home');

  const openChat = () => {
    window.dispatchEvent(new CustomEvent('openOktaAI', { detail: { from: 'navbar' } }));
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'journey', 'skills', 'portfolio'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home', icon: <Home size={20} /> },
    { name: 'Journey', href: '#journey', icon: <Briefcase size={20} /> },
    { name: 'Skills', href: '#skills', icon: <Wand2 size={20} /> },
    { name: 'Portfolio', href: '#portfolio', icon: <FolderKanban size={20} /> },
    { name: 'Chat AI', href: '#', icon: <MessageCircle size={20} />, action: openChat },
  ];

  return (
    <>
      {/* Top Navbar - Desktop Only */}
      <div className="hidden lg:block fixed top-8 left-0 w-full z-50 px-6">
        <nav className="max-w-6xl mx-auto bg-white/80 backdrop-blur-2xl border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.08)] rounded-[32px] overflow-hidden">
          <div className="px-8 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-10">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="text-xl lg:text-2xl font-black tracking-tighter text-[#1a2e35] cursor-default"
              >
                OKTA<span className="text-[#4a7c8c]">.</span>
              </motion.div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center gap-2">
                {menuItems.slice(0, 4).map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.href}
                    whileHover={{ y: -2 }}
                    className={`px-5 py-2.5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all flex items-center gap-2 group ${activeSection === item.href.replace('#', '') ? 'text-[#1a2e35] bg-gray-50' : 'text-gray-400 hover:text-[#1a2e35] hover:bg-gray-50'}`}
                  >
                    <span className={`transition-colors ${activeSection === item.href.replace('#', '') ? 'text-[#4a7c8c]' : 'text-gray-300 group-hover:text-[#4a7c8c]'}`}>{item.icon}</span>
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* AI Button */}
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={openChat}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#4a7c8c] via-[#ff6b6b] to-[#4a7c8c] rounded-full blur-md opacity-40 group-hover:opacity-100 transition-all duration-500 animate-gradient-x"></div>
                <div className="relative bg-[#1a2e35] text-white px-4 lg:px-7 py-2 lg:py-3 rounded-full text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] flex items-center gap-2 lg:gap-3 shadow-xl border border-white/10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4a7c8c]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative flex items-center gap-2">
                    <div className="relative">
                      <MessageCircle size={14} className="lg:w-4 lg:h-4 group-hover:rotate-12 transition-transform duration-500" />
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute -top-1 -right-1 text-yellow-300"
                      >
                        <Sparkles size={6} className="lg:w-2 lg:h-2" fill="currentColor" />
                      </motion.div>
                    </div>
                    <span className="hidden sm:inline">Talk With Okta AI</span>
                    <span className="sm:hidden">OktaAI</span>
                  </div>

                  <div className="hidden lg:block bg-white/10 px-2 py-0.5 rounded-md text-[8px] font-black tracking-tighter">
                    NEW ✨
                  </div>
                </div>
              </motion.button>
            </div>
          </div>
        </nav>
      </div>

      {/* Bottom Navigation - Mobile Only */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full z-50 px-0 pb-0">
        <nav className="bg-white border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] overflow-hidden">
          <div className="flex items-center justify-around py-3">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={(e) => {
                  if (item.action) {
                    e.preventDefault();
                    item.action();
                  }
                }}
                className="flex flex-col items-center gap-1 px-4 py-1 group relative"
              >
                {activeSection === item.href.replace('#', '') && item.name !== 'Chat AI' && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute -top-3 w-8 h-1 bg-[#4a7c8c] rounded-full"
                  />
                )}
                <motion.div 
                  whileTap={{ scale: 0.8 }}
                  className={`${activeSection === item.href.replace('#', '') ? 'text-[#4a7c8c]' : 'text-gray-300'} transition-colors`}
                >
                  {item.icon}
                </motion.div>
                <span className={`text-[8px] font-black uppercase tracking-tighter ${activeSection === item.href.replace('#', '') ? 'text-[#1a2e35]' : 'text-gray-300'} transition-colors`}>
                  {item.name}
                </span>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

const Skeleton = ({ className }: { className?: string }) => (
  <div className={`animate-pulse bg-gray-200 rounded-2xl ${className}`} />
);

const Hero = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <section id="home" className="pt-16 lg:pt-56 pb-12 lg:pb-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center relative overflow-hidden lg:overflow-visible">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Mobile AI Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="lg:hidden mb-10"
        >
          <div 
            onClick={() => window.dispatchEvent(new CustomEvent('openOktaAI'))}
            className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-1.5 flex items-center gap-3 cursor-pointer active:scale-[0.98] transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-[#4a7c8c]/10 flex items-center justify-center text-[#4a7c8c]">
              <Sparkles size={18} />
            </div>
            <p className="text-[13px] font-bold text-gray-400">What services does Okta offer?</p>
          </div>
        </motion.div>

        <div className="inline-block px-4 py-1.5 rounded-full bg-[#4a7c8c]/10 text-[#4a7c8c] font-black mb-6 tracking-[0.2em] uppercase text-[9px] lg:text-[11px] border border-[#4a7c8c]/20">
          Product & Project Manager
        </div>
        <h1 className="text-5xl lg:text-7xl font-black text-[#1a2e35] leading-[0.9] mb-8 tracking-tighter">
          I manage software <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a7c8c] to-[#1a2e35]">projects</span> and delivery.
        </h1>
        
        <div className="bg-[#1a2e35] text-white p-7 lg:p-8 rounded-[32px] lg:rounded-[40px] mb-10 relative shadow-2xl overflow-hidden group border border-white/10">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#4a7c8c]/20 rounded-full -mr-24 -mt-24 blur-3xl group-hover:bg-[#4a7c8c]/30 transition-all duration-1000"></div>
          <p className="italic text-base lg:text-lg leading-relaxed font-medium relative z-10 opacity-90">
            "I manage software projects end-to-end, ensuring timely delivery, quality results, and strong team alignment."
          </p>
        </div>

        <div className="flex gap-10 lg:gap-12 mb-10 px-2">
          <div className="flex flex-col">
            <span className="text-4xl lg:text-5xl font-black text-[#1a2e35] tracking-tighter">3+</span>
            <div className="text-[9px] lg:text-[11px] text-gray-400 font-black leading-tight uppercase tracking-widest mt-1">
              Years<br/>experience
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl lg:text-5xl font-black text-[#1a2e35] tracking-tighter">30</span>
            <div className="text-[9px] lg:text-[11px] text-gray-400 font-black leading-tight uppercase tracking-widest mt-1">
              Projects<br/>delivered
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-100 pt-10 mb-10">
          <p className="text-[15px] text-gray-500 leading-relaxed font-medium">
            I am an IT Project Manager focused on software development, delivering projects efficiently and on time.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed font-medium">
            I have managed and delivered 30+ software projects, ensuring quality results and business alignment.
          </p>
        </div>

      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full lg:-mt-16 group"
      >
        <div className="rounded-[40px] lg:rounded-[60px] overflow-hidden relative aspect-[4/5] lg:aspect-auto">
          {!isLoaded && <Skeleton className="absolute inset-0 w-full h-full rounded-none" />}
          <img 
            src="/aset/profil.png" 
            alt="Okta" 
            onLoad={() => setIsLoaded(true)}
            loading="eager"
            // @ts-ignore
            fetchPriority="high"
            className={`w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>
    </section>
  );
};

const Journey = () => {
  const experiences = [
    {
      date: "2020 - 2021",
      location: "Yogyakarta",
      company: "PT. Sarana Insan Muda Selaras",
      position: "Technical Gov & Corp",
      y: 20
    },
    {
      date: "2021 - 2023",
      location: "Surabaya",
      company: "PT. Supra Primatama (Biznet)",
      position: "Project Engineer",
      y: -20
    },
    {
      date: "Jun - Des 2023",
      location: "Yogyakarta",
      company: "PT. Divistant Teknologi",
      position: "PM DevOps & Software",
      y: 20
    },
    {
      date: "2023 - 2025",
      location: "Remote",
      company: "PT. Juragan Inovator",
      position: "Product & Project Manager",
      y: -20
    },
    {
      date: "Jan - May 2025",
      location: "Jakarta",
      company: "SALT (Ako Media)",
      position: "Project Manager",
      y: 20
    },
    {
      date: "2025 - 2026",
      location: "Yogyakarta",
      company: "PT Dazo Kreatif",
      position: "Head IT Project Manager",
      y: -20
    }
  ];

  return (
    <section id="journey" className="py-12 lg:py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 lg:mb-16">
          <p className="text-[11px] font-black text-[#4a7c8c] mb-3 uppercase tracking-[0.4em]">Milestones</p>
          <h2 className="text-4xl lg:text-6xl font-black text-[#1a2e35] tracking-tighter leading-[0.9]">
            Journey & <span className="text-gray-300">Experience</span>
          </h2>
        </div>

        {/* Desktop Timeline (Horizontal) */}
        <div className="hidden lg:block relative h-[350px] mt-10">
          {/* Wavy Dotted Line */}
          <svg className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 pointer-events-none opacity-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
              d="M0,60 C100,0 200,120 300,60 C400,0 500,120 600,60 C700,0 800,120 900,60 C1000,0 1100,120 1200,60" 
              fill="none" 
              stroke="#4a7c8c" 
              strokeWidth="2" 
              strokeDasharray="8 8"
            />
          </svg>

          <div className="flex justify-between items-center h-full px-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center"
                style={{ transform: `translateY(${exp.y}px)` }}
              >
                {/* Circle */}
                <div className="w-24 h-24 rounded-full bg-[#4a7c8c] text-white flex flex-col items-center justify-center p-3 text-center shadow-lg border-4 border-white/20 z-10 hover:scale-110 transition-all duration-500 group cursor-default">
                  <span className="text-[8px] font-bold opacity-70 uppercase tracking-tighter mb-0.5">{exp.date}</span>
                  <span className="text-[10px] font-black leading-tight">{exp.location}</span>
                </div>

                {/* Info Label */}
                <div className={`absolute left-1/2 -translate-x-1/2 w-48 text-center ${exp.y > 0 ? '-top-24' : 'top-28'}`}>
                  <p className="text-[12px] font-black text-[#1a2e35] leading-tight mb-0.5">{exp.company}</p>
                  <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest opacity-70">{exp.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline (Vertical Cards) */}
        <div className="lg:hidden space-y-6 relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-dashed bg-[#4a7c8c]/20"></div>
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-6 relative z-10"
            >
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#4a7c8c] text-white flex items-center justify-center shadow-lg border-4 border-white">
                <Briefcase size={16} />
              </div>
              <div className="flex-1 bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black text-[#4a7c8c] uppercase tracking-widest bg-[#4a7c8c]/5 px-3 py-1 rounded-full border border-[#4a7c8c]/10">
                    {exp.date}
                  </span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                    {exp.location}
                  </span>
                </div>
                <h3 className="text-[16px] font-black text-[#1a2e35] leading-tight mb-1">{exp.company}</h3>
                <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest opacity-80">{exp.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    {
      title: "Project Strategy",
      desc: "End-to-end software project planning from initiation to delivery with clear milestones.",
      icon: <Layout size={20} />
    },
    {
      title: "Agile Leadership",
      desc: "Leading high-performance Agile teams to ensure rapid and high-quality releases.",
      icon: <Settings size={20} />
    },
    {
      title: "System Delivery",
      desc: "Coordinating complex system integrations aligned with core business objectives.",
      icon: <Layers size={20} />
    },
    {
      title: "Stakeholder Mgmt",
      desc: "Effective collaboration with stakeholders to ensure project alignment and success.",
      icon: <Users size={20} />
    }
  ];

  return (
    <section id="skills" className="py-12 lg:py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-16 gap-8">
          <div className="max-w-xl">
            <p className="text-[11px] font-black text-[#4a7c8c] mb-4 uppercase tracking-[0.4em]">Expertise</p>
            <h2 className="text-4xl lg:text-6xl font-black text-[#1a2e35] tracking-tighter leading-[0.9]">
              Core <span className="text-gray-300">Capabilities</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-xs text-[13px] lg:text-[14px] leading-relaxed font-medium">
            Bridging technical complexity with business value through strategic project management.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {skills.map((skill, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white/40 backdrop-blur-sm p-8 lg:p-10 rounded-[24px] lg:rounded-[40px] border border-white/40 transition-all duration-500 group hover:bg-[#1a2e35] hover:border-[#1a2e35] shadow-sm hover:shadow-2xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/60 flex items-center justify-center mb-6 lg:mb-8 shadow-sm group-hover:bg-[#4a7c8c] transition-colors duration-500">
                <div className="text-[#4a7c8c] group-hover:text-white transition-colors">
                  {skill.icon}
                </div>
              </div>
              <h3 className="text-xl font-black text-[#1a2e35] mb-4 tracking-tight group-hover:text-white transition-colors">{skill.title}</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed font-medium group-hover:text-gray-400 transition-colors">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface PortfolioItemProps {
  project: any;
  idx: number;
  key?: any;
}

const PortfolioItem = ({ project, idx }: PortfolioItemProps) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center border-b border-white/10 pb-12 last:border-0"
    >
      <div className={`order-1 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="relative group">
          <div className="absolute -inset-8 bg-[#4a7c8c]/5 rounded-[80px] blur-3xl group-hover:bg-[#4a7c8c]/10 transition-all duration-700"></div>
          <div className="rounded-[32px] lg:rounded-[48px] overflow-hidden shadow-2xl aspect-[16/10] relative bg-white/10 backdrop-blur-sm border border-white/20">
            {!isLoaded && <Skeleton className="absolute inset-0 w-full h-full rounded-none" />}
            <img 
              src={project.image} 
              alt={project.title} 
              onLoad={() => setIsLoaded(true)}
              loading="lazy"
              className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      <div className={`order-2 ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[12px] font-black text-[#4a7c8c] uppercase tracking-[0.3em]">{project.type}</span>
          <span className="w-8 h-px bg-gray-200"></span>
          <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">{project.role}</span>
        </div>
        
        <h3 className="text-3xl lg:text-5xl font-black text-[#1a2e35] tracking-tighter leading-[0.9] mb-6">{project.title}</h3>
        
        <div className="space-y-6 mb-10">
          <p className="text-[15px] lg:text-[17px] text-gray-500 leading-relaxed font-medium">
            {project.desc}
          </p>
          <div className="bg-[#1a2e35] p-6 rounded-[24px] lg:rounded-[32px] border-l-4 border-[#4a7c8c] shadow-xl text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#4a7c8c]/20 rounded-full -mr-12 -mt-12 blur-2xl"></div>
            <p className="text-[11px] font-black text-[#4a7c8c] mb-2 uppercase tracking-widest relative z-10">Key Impact</p>
            <p className="text-[14px] lg:text-[15px] leading-relaxed italic font-medium relative z-10 opacity-90">"{project.impact}"</p>
          </div>
        </div>
        
        <div className="mb-10">
          <p className="text-[10px] lg:text-[11px] font-black text-gray-400 uppercase tracking-widest mb-4">Technology Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <span key={tag} className="bg-gray-50 text-[#1a2e35] px-4 py-2 rounded-xl text-[10px] lg:text-[11px] font-black uppercase tracking-widest border border-gray-100">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <motion.button 
          whileHover={{ x: 10 }}
          className="flex items-center gap-4 text-[#1a2e35] group/btn"
        >
          <span className="text-[11px] lg:text-[12px] font-black uppercase tracking-[0.3em]">View Case Study</span>
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover/btn:bg-[#1a2e35] group-hover/btn:text-white transition-all duration-500">
            <ArrowUpRight size={18} />
          </div>
        </motion.button>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "Website Business MRT Jakarta",
      type: "Enterprise Digital Platform",
      role: "Lead Project Manager",
      impact: "Streamlined stakeholder communication and improved operational efficiency by 40%.",
      desc: "A comprehensive digital platform for MRT Jakarta's business operations, featuring real-time data integration and a modern user interface for enhanced stakeholder engagement. I managed the full lifecycle from requirements gathering to final deployment.",
      tags: ["React", "Next.js", "TypeScript", "NestJS", "PostgreSQL", "Tailwind CSS", "Figma"],
      image: "/aset/project-mrt-jakarta.jpg"
    },
    {
      title: "Yulo Laundry Mobile App",
      type: "Management System & Mobile App",
      role: "Product Owner & Manager",
      impact: "Reduced order processing time by 25% and increased customer retention through automated notifications.",
      desc: "An end-to-end laundry management system that streamlines order processing, customer tracking, and financial reporting for laundry businesses. This project involved complex state management and real-time notifications.",
      tags: ["React", "Next.js", "TypeScript", "NestJS", "PostgreSQL", "Tailwind CSS", "Figma"],
      image: "/aset/project-yulo-laundry.jpg"
    },
    {
      title: "Dazo Apps & Cha AI",
      type: "AI Ecosystem & Mobile Suite",
      role: "Technical Project Lead",
      impact: "Successfully integrated LLM capabilities, resulting in a 50% increase in user engagement within the first month.",
      desc: "A dual-purpose application suite combining a high-performance mobile app with an integrated AI chatbot to provide users with intelligent assistance. I led the cross-functional team to integrate LLM capabilities into the core product.",
      tags: ["React", "Vue.js", "TypeScript", "Laravel", "MongoDB", "Golang", "Figma"],
      image: "/aset/project-dazo-ai.jpg"
    }
  ];

  return (
    <section id="portfolio" className="py-8 lg:py-12 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-6 lg:mb-10">
          <p className="text-[11px] font-black text-[#4a7c8c] mb-3 lg:mb-4 uppercase tracking-[0.4em]">Professional Portfolio</p>
          <h2 className="text-4xl lg:text-7xl font-black text-[#1a2e35] tracking-tighter leading-[0.9]">
            Detailed <span className="text-gray-300 italic font-serif">Case Studies</span>
          </h2>
        </div>

        <div className="space-y-10 lg:space-y-12">
          {projects.map((project, idx) => (
            <PortfolioItem key={idx} project={project} idx={idx} />
          ))}
        </div>

        <div className="mt-16 flex justify-center border-t border-gray-100 pt-10">
          <button className="bg-[#1a2e35] text-white px-12 py-5 rounded-full text-[12px] font-black uppercase tracking-[0.3em] hover:bg-[#4a7c8c] transition-all shadow-2xl">
            Explore More on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const phoneNumber = "6289675080104";
    const text = `Halo Okta! 👋\n\nNama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-12 lg:py-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-[11px] font-black text-[#4a7c8c] mb-4 uppercase tracking-[0.4em]">Get in touch</p>
            <h2 className="text-4xl lg:text-7xl font-black text-[#1a2e35] tracking-tighter leading-[0.9] mb-6 lg:mb-8">
              Let's <span className="text-gray-300">Connect</span>
            </h2>
            <p className="text-gray-500 text-[13px] lg:text-[14px] leading-relaxed max-w-sm mb-8 lg:mb-10">
              Have a project in mind? I&apos;m always open to discussing new opportunities and strategic partnerships.
            </p>
            
            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#f8fafc] flex items-center justify-center text-[#4a7c8c]">
                  <Globe size={18} />
                </div>
                <span className="text-[11px] lg:text-[12px] font-black uppercase tracking-widest text-[#1a2e35]">Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#f8fafc] flex items-center justify-center text-[#4a7c8c]">
                  <Linkedin size={18} />
                </div>
                <span className="text-[11px] lg:text-[12px] font-black uppercase tracking-widest text-[#1a2e35]">linkedin.com/in/okta</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/40 backdrop-blur-md p-8 lg:p-10 rounded-[24px] lg:rounded-[40px] border border-white/40 space-y-4 shadow-sm">
            <div className="space-y-1">
              <label className="text-[9px] lg:text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Full Name</label>
              <input 
                type="text" 
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 lg:px-6 py-3 lg:py-4 rounded-xl lg:rounded-2xl border-none outline-none bg-white/60 backdrop-blur-sm shadow-sm text-[13px] lg:text-[14px] font-medium focus:bg-white transition-all"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[9px] lg:text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Email Address</label>
              <input 
                type="email" 
                required
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-5 lg:px-6 py-3 lg:py-4 rounded-xl lg:rounded-2xl border-none outline-none bg-white/60 backdrop-blur-sm shadow-sm text-[13px] lg:text-[14px] font-medium focus:bg-white transition-all"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[9px] lg:text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Message</label>
              <textarea 
                required
                placeholder="Tell me about your project..."
                rows={4} 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-5 lg:px-6 py-3 lg:py-4 rounded-xl lg:rounded-2xl border-none outline-none bg-white/60 backdrop-blur-sm shadow-sm text-[13px] lg:text-[14px] font-medium resize-none focus:bg-white transition-all"
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-[#1a2e35] text-white py-3 lg:py-4 rounded-xl lg:rounded-2xl font-black text-[11px] lg:text-[12px] uppercase tracking-[0.2em] hover:bg-[#4a7c8c] transition-all shadow-xl mt-4">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

interface TestimonialItemProps {
  t: any;
  idx: number;
  key?: any;
}

const TestimonialItem = ({ t, idx }: TestimonialItemProps) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <motion.div 
      key={idx} 
      whileHover={{ y: -5 }}
      className="bg-white/40 backdrop-blur-md p-8 lg:p-10 rounded-[24px] lg:rounded-[40px] border border-white/40 shadow-sm transition-all duration-500"
    >
      <div className="flex gap-1 mb-6 lg:mb-8">
        {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="#4a7c8c" className="text-[#4a7c8c]" />)}
      </div>
      <p className="text-[13px] lg:text-[14px] text-gray-500 italic mb-8 lg:mb-10 leading-relaxed font-medium">
        "{t.text}"
      </p>
      <div className="flex items-center gap-4">
        <div className="relative w-10 h-10 rounded-2xl overflow-hidden shrink-0">
          {!isLoaded && <Skeleton className="absolute inset-0 w-full h-full rounded-none" />}
          <img 
            src={t.image} 
            alt={t.name} 
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
            className={`w-full h-full object-cover grayscale transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} 
            referrerPolicy="no-referrer" 
          />
        </div>
        <div>
          <h4 className="font-black text-[13px] lg:text-[14px] text-[#1a2e35] tracking-tight">{t.name}</h4>
          <p className="text-[9px] lg:text-[10px] text-[#4a7c8c] font-black uppercase tracking-widest">{t.company}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Budi Santoso",
      company: "PT. Supra Primatama",
      image: "/aset/testimonial-budi.jpg",
      text: "Okta&apos;s ability to manage complex software deliveries is exceptional. A true professional who delivers results."
    },
    {
      name: "Siti Nurhaliza",
      company: "PT. Juragan Inovator",
      image: "/aset/testimonial-siti.jpg",
      text: "Outstanding project strategy and flawless execution. Delivered all milestones ahead of schedule with excellent quality."
    },
    {
      name: "Ahmad Prasetyo",
      company: "PT. Dazo Kreatif",
      image: "/aset/testimonial-ahmad.jpg",
      text: "A strategic thinker with excellent leadership skills. Delivers results with clear communication and team alignment. Highly recommended."
    }
  ];

  return (
    <section id="feedback" className="py-12 lg:py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 lg:mb-16">
          <p className="text-[11px] font-black text-[#4a7c8c] mb-3 uppercase tracking-[0.4em]">Testimonials</p>
          <h2 className="text-4xl lg:text-7xl font-black text-[#1a2e35] tracking-tighter leading-[0.9]">
            Client <span className="text-gray-300">Feedback</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-4">
          {testimonials.map((t, idx) => (
            <TestimonialItem key={idx} t={t} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="px-6 pb-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto bg-[#1a2e35] text-white rounded-[32px] lg:rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#4a7c8c]/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-8 relative z-10">
          <div className="text-2xl font-black tracking-tighter">OKTA.</div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[10px] lg:text-[11px] font-black uppercase tracking-widest text-gray-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex gap-4">
            {[Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#4a7c8c] transition-all border border-white/5">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 lg:mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] lg:text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] relative z-10">
          <p className="text-center md:text-left">© 2026 Okta. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen pb-24 lg:pb-0 bg-[#f8fafc] bg-[radial-gradient(circle_at_top_right,_#f1f5f9_0%,_transparent_40%),_radial-gradient(circle_at_bottom_left,_#f1f5f9_0%,_transparent_40%)] font-sans selection:bg-[#4a7c8c] selection:text-white antialiased relative overflow-hidden">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none -z-50 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]"></div>
      
      {/* Global Atmospheric Blurs */}
      <div className="fixed top-[20%] -left-[10%] w-[40%] h-[40%] bg-[#4a7c8c]/5 rounded-full blur-[120px] pointer-events-none -z-40"></div>
      <div className="fixed bottom-[20%] -right-[10%] w-[40%] h-[40%] bg-[#1a2e35]/5 rounded-full blur-[120px] pointer-events-none -z-40"></div>
      <div className="fixed top-[60%] left-[30%] w-[30%] h-[30%] bg-[#4a7c8c]/3 rounded-full blur-[100px] pointer-events-none -z-40"></div>
      
      <Navbar />
      <Hero />
      <Journey />
      <Skills />
      <Portfolio />
      <Contact />
      <Testimonials />
      <Footer />
      <OktaAI />
    </div>
  );
}

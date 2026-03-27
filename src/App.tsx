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
    const userMsg = textOverride || input;
    if (!userMsg.trim()) return;

    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            ...messages,
            { role: 'user', text: userMsg }
          ]
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      const aiText = data.text || "Maaf ya, OktaAI lagi istirahat sebentar. Coba lagi nanti? ✨";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error("[v0] AI Error:", error);
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
        <nav className="max-w-6xl mx-auto bg-gradient-to-r from-white/90 via-white/85 to-white/90 backdrop-blur-3xl border border-white/60 shadow-[0_20px_60px_rgba(15,163,177,0.15)] rounded-[32px] overflow-hidden group">
          <div className="px-8 py-5 flex items-center justify-between relative">
            {/* Animated gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0fa3b1]/5 via-transparent to-[#2eccc7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px]"></div>
            
            {/* Logo */}
            <div className="flex items-center gap-12 relative z-10">
              <motion.div 
                whileHover={{ scale: 1.12, rotate: -5 }}
                className="text-2xl font-black tracking-tighter cursor-default"
              >
                <span className="bg-gradient-to-r from-[#0d1f2b] via-[#0fa3b1] to-[#0fa3b1] bg-clip-text text-transparent">OKTA</span>
                <span className="bg-gradient-to-r from-[#0fa3b1] to-[#2eccc7] bg-clip-text text-transparent">.</span>
              </motion.div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center gap-1">
                {menuItems.slice(0, 4).map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.href}
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-5 py-3 rounded-[18px] text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2.5 group relative overflow-hidden ${
                      activeSection === item.href.replace('#', '')
                        ? 'bg-gradient-to-r from-[#0fa3b1] to-[#2eccc7] text-white shadow-lg shadow-[#0fa3b1]/30'
                        : 'text-[#0d1f2b] hover:bg-[#0fa3b1]/10'
                    }`}
                  >
                    {/* Background shine effect */}
                    {activeSection === item.href.replace('#', '') && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent"
                        animate={{ x: [-100, 100] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                      />
                    )}
                    <span className={`transition-all ${activeSection === item.href.replace('#', '') ? 'text-white scale-110' : 'text-[#0fa3b1]'}`}>{item.icon}</span>
                    <span className="relative">{item.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 relative z-10">
              {/* AI Button */}
              <motion.button 
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.92 }}
                onClick={openChat}
                className="relative group"
              >
                {/* Premium glow background */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-[#0fa3b1] via-[#a855f7] to-[#ff6b35] rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500 animate-gradient-x"></div>
                
                <div className="relative bg-gradient-to-br from-[#0d1f2b] to-[#0fa3b1] text-white px-6 py-3.5 rounded-full text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] flex items-center gap-2 lg:gap-3 shadow-xl border border-white/20 overflow-hidden backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-[#2eccc7]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative flex items-center gap-2">
                    <div className="relative">
                      <motion.div animate={{ rotate: [0, 20, -20, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 0.2 }}>
                        <MessageCircle size={16} className="lg:w-4 lg:h-4 group-hover:text-[#00d9ff] transition-colors duration-300" />
                      </motion.div>
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute -top-1 -right-1 text-[#00d9ff]"
                      >
                        <Sparkles size={7} className="lg:w-3 lg:h-3" fill="currentColor" />
                      </motion.div>
                    </div>
                    <span className="hidden sm:inline">Talk With Okta AI</span>
                    <span className="sm:hidden">OktaAI</span>
                  </div>

                  <div className="hidden lg:block bg-gradient-to-r from-[#00d9ff] to-[#2eccc7] bg-clip-text text-transparent px-2 py-0.5 rounded-md text-[8px] font-black tracking-tighter">
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
        <nav className="bg-gradient-to-r from-white/95 via-white/90 to-white/95 border-t border-[#0fa3b1]/20 shadow-[0_-15px_50px_rgba(15,163,177,0.1)] overflow-hidden backdrop-blur-md">
          <div className="flex items-center justify-around py-4">
            {menuItems.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                whileTap={{ scale: 0.85 }}
                onClick={(e) => {
                  if (item.action) {
                    e.preventDefault();
                    item.action();
                  }
                }}
                className="flex flex-col items-center gap-1.5 px-4 py-1 group relative"
              >
                {activeSection === item.href.replace('#', '') && item.name !== 'Chat AI' && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute -top-4 w-10 h-1 bg-gradient-to-r from-[#0fa3b1] to-[#2eccc7] rounded-full shadow-lg shadow-[#0fa3b1]/40"
                  />
                )}
                <motion.div 
                  animate={activeSection === item.href.replace('#', '') ? { scale: 1.15, color: '#0fa3b1' } : {}}
                  className={`transition-all p-2 rounded-xl ${
                    activeSection === item.href.replace('#', '')
                      ? 'bg-[#0fa3b1]/10 text-[#0fa3b1]'
                      : 'text-[#0d1f2b]/40 group-active:bg-[#0fa3b1]/5'
                  }`}
                >
                  {item.icon}
                </motion.div>
                <span className={`text-[7.5px] font-black uppercase tracking-tighter transition-all ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-[#0fa3b1] font-black'
                    : 'text-[#0d1f2b]/50'
                }`}>
                  {item.name}
                </span>
              </motion.a>
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
    <section id="home" className="pt-20 lg:pt-28 pb-16 lg:pb-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-5 py-2 rounded-full bg-[#0fa3b1]/10 text-[#0fa3b1] font-black mb-8 tracking-[0.2em] uppercase text-[11px] lg:text-[12px] border border-[#0fa3b1]/20">
              Product & Project Manager
            </div>
        <h1 className="text-5xl lg:text-8xl font-black text-[#0d1f2b] leading-[0.9] mb-10 lg:mb-12 tracking-tighter">
          I manage software <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0fa3b1] via-[#2eccc7] to-[#00d9ff]">projects</span> and delivery.
        </h1>
        
        <div className="bg-gradient-to-br from-[#0d1f2b] via-[#0fa3b1]/10 to-[#0d1f2b] text-white p-8 lg:p-10 rounded-[32px] lg:rounded-[40px] mb-12 lg:mb-14 relative shadow-2xl shadow-[#0fa3b1]/20 overflow-hidden group border border-[#0fa3b1]/30 backdrop-blur-sm">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#4a7c8c]/20 rounded-full -mr-24 -mt-24 blur-3xl group-hover:bg-[#4a7c8c]/30 transition-all duration-1000"></div>
          <p className="italic text-base lg:text-lg leading-relaxed font-medium relative z-10 opacity-90">
            "I manage software projects end-to-end, ensuring timely delivery, quality results, and strong team alignment."
          </p>
        </div>

        <div className="flex gap-12 lg:gap-16 mb-12 lg:mb-14 px-2">
          <div className="flex flex-col">
            <span className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#0d1f2b] to-[#0fa3b1] bg-clip-text text-transparent tracking-tighter">3+</span>
            <div className="text-[10px] lg:text-[12px] text-[#0fa3b1]/70 font-black leading-tight uppercase tracking-widest mt-2">
              Years<br/>experience
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#0d1f2b] to-[#0fa3b1] bg-clip-text text-transparent tracking-tighter">30</span>
            <div className="text-[10px] lg:text-[12px] text-[#0fa3b1]/70 font-black leading-tight uppercase tracking-widest mt-2">
              Projects<br/>delivered
            </div>
          </div>
        </div>
        
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-100 pt-12 mb-0">
              <p className="text-[15px] text-gray-500 leading-relaxed font-medium">
                I am an IT Project Manager focused on software development, delivering projects efficiently and on time.
              </p>
              <p className="text-[15px] text-gray-500 leading-relaxed font-medium">
                I have managed and delivered 30+ software projects, ensuring quality results and business alignment.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-full"
          >
            <div className="rounded-[40px] overflow-hidden relative w-full h-96 lg:h-full shadow-2xl shadow-[#0fa3b1]/20">
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
        </div>
      </div>
    </section>
  );
};

const Journey = () => {
  const [selectedExperience, setSelectedExperience] = React.useState<number | null>(null);
  
  const experiences = [
    {
      date: "2020 - 2021",
      location: "Yogyakarta",
      company: "PT. Sarana Insan Muda Selaras",
      position: "Technical Gov & Corp",
      y: 30
    },
    {
      date: "2021 - 2023",
      location: "Surabaya",
      company: "PT. Supra Primatama (Biznet)",
      position: "Project Engineer",
      y: -30
    },
    {
      date: "Jun - Des 2023",
      location: "Yogyakarta",
      company: "PT. Divistant Teknologi",
      position: "PM DevOps & Software",
      y: 30
    },
    {
      date: "2023 - 2025",
      location: "Remote",
      company: "PT. Juragan Inovator",
      position: "Product & Project Manager",
      y: -30
    },
    {
      date: "Jan - May 2025",
      location: "Jakarta",
      company: "SALT (Ako Media)",
      position: "Project Manager",
      y: 30
    },
    {
      date: "2025 - 2026",
      location: "Yogyakarta",
      company: "PT Dazo Kreatif",
      position: "Head IT Project Manager",
      y: -30
    }
  ];

  return (
    <section id="journey" className="py-16 lg:py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 lg:mb-20">
          <p className="text-[12px] font-black bg-gradient-to-r from-[#0fa3b1] to-[#2eccc7] bg-clip-text text-transparent mb-4 uppercase tracking-[0.4em]">Milestones</p>
          <h2 className="text-5xl lg:text-7xl font-black text-[#0d1f2b] tracking-tighter leading-[0.9]">
            Journey & <span className="text-gray-300">Experience</span>
          </h2>
        </div>

        {/* Desktop Timeline (Horizontal) */}
        <div className="hidden lg:block relative h-[480px] mt-16">
          {/* Wavy Dotted Line */}
          <svg className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 pointer-events-none opacity-30" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
              d="M0,60 C100,0 200,120 300,60 C400,0 500,120 600,60 C700,0 800,120 900,60 C1000,0 1100,120 1200,60" 
              fill="none" 
              stroke="#0fa3b1" 
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
                className="relative flex flex-col items-center cursor-pointer group"
                style={{ transform: `translateY(${exp.y}px)` }}
                onClick={() => setSelectedExperience(idx)}
              >
                {/* Circle */}
                <motion.div 
                  whileHover={{ scale: 1.2 }}
                  className="w-28 h-28 rounded-full bg-gradient-to-br from-[#0fa3b1] to-[#2eccc7] text-white flex flex-col items-center justify-center p-4 text-center shadow-lg shadow-[#0fa3b1]/40 border-4 border-white/50 z-10 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#0fa3b1]/60"
                >
                  <span className="text-[9px] font-bold opacity-90 uppercase tracking-tighter mb-1">{exp.date}</span>
                  <span className="text-[12px] font-black leading-tight">{exp.location}</span>
                </motion.div>

                {/* Info Label - Enhanced */}
                <motion.div 
                  className={`absolute left-1/2 -translate-x-1/2 w-56 text-center ${exp.y > 0 ? '-top-32' : 'top-32'} transition-all duration-300 group-hover:scale-105`}
                  whileHover={{ y: exp.y > 0 ? -5 : 5 }}
                >
                  <p className="text-[14px] lg:text-[16px] font-black text-[#0d1f2b] leading-tight mb-2 group-hover:text-[#0fa3b1] transition-colors">{exp.company}</p>
                  <p className="text-[11px] lg:text-[12px] text-[#0fa3b1]/70 font-bold uppercase tracking-widest group-hover:text-[#0fa3b1] transition-colors">{exp.position}</p>
                  <p className="text-[10px] text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Klik untuk detail</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline (Vertical Cards) */}
        <div className="lg:hidden space-y-7 relative">
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0fa3b1] via-[#2eccc7] to-[#0fa3b1]/20"></div>
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-6 relative z-10 cursor-pointer"
              onClick={() => setSelectedExperience(idx)}
            >
              <motion.div 
                whileHover={{ scale: 1.15 }}
                className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-[#0fa3b1] to-[#2eccc7] text-white flex items-center justify-center shadow-lg shadow-[#0fa3b1]/30 border-4 border-white"
              >
                <Briefcase size={20} />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02, y: -4 }}
                className="flex-1 bg-white/70 backdrop-blur-sm p-7 rounded-[24px] border border-[#0fa3b1]/30 shadow-sm hover:shadow-xl hover:shadow-[#0fa3b1]/20 hover:bg-white/90 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-black text-white bg-gradient-to-r from-[#0fa3b1] to-[#2eccc7] px-4 py-1.5 rounded-full border border-[#0fa3b1]/20">
                    {exp.date}
                  </span>
                  <span className="text-[11px] font-bold text-[#0fa3b1] uppercase tracking-tighter">
                    {exp.location}
                  </span>
                </div>
                <h3 className="text-[18px] lg:text-[19px] font-black text-[#0d1f2b] leading-tight mb-2">{exp.company}</h3>
                <p className="text-[13px] text-[#0fa3b1] font-bold uppercase tracking-widest">{exp.position}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Detail Modal */}
        <AnimatePresence>
          {selectedExperience !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExperience(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-[32px] p-10 lg:p-14 max-w-2xl w-full shadow-2xl border border-[#0fa3b1]/20"
              >
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <p className="text-[14px] font-black text-[#0fa3b1] uppercase tracking-[0.3em] mb-3">Experience</p>
                    <h2 className="text-4xl lg:text-5xl font-black text-[#0d1f2b] mb-4">
                      {experiences[selectedExperience].company}
                    </h2>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedExperience(null)}
                    className="text-[#0fa3b1] hover:text-[#0d1f2b] text-[28px] transition-colors"
                  >
                    ✕
                  </motion.button>
                </div>

                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-8">
                    <div className="flex-1">
                      <p className="text-[12px] font-black text-gray-400 uppercase tracking-widest mb-2">Position</p>
                      <p className="text-[20px] font-black text-[#0fa3b1]">
                        {experiences[selectedExperience].position}
                      </p>
                    </div>
                    <div className="flex-1">
                      <p className="text-[12px] font-black text-gray-400 uppercase tracking-widest mb-2">Duration</p>
                      <p className="text-[20px] font-black text-[#0d1f2b]">
                        {experiences[selectedExperience].date}
                      </p>
                    </div>
                    <div className="flex-1">
                      <p className="text-[12px] font-black text-gray-400 uppercase tracking-widest mb-2">Location</p>
                      <p className="text-[20px] font-black text-[#2eccc7]">
                        {experiences[selectedExperience].location}
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#0fa3b1]/10 to-[#2eccc7]/10 p-6 rounded-[20px] border border-[#0fa3b1]/20">
                    <p className="text-[14px] lg:text-[16px] text-[#0d1f2b] leading-relaxed font-medium">
                      Periode yang produktif dengan fokus pada pengembangan teknologi dan manajemen proyek yang efisien. Berkontribusi pada kesuksesan deliverable dengan standar kualitas tinggi.
                    </p>
                  </div>

                  <div className="flex gap-4 pt-4">
                    {selectedExperience > 0 && (
                      <motion.button
                        whileHover={{ x: -4 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedExperience(selectedExperience - 1)}
                        className="px-6 py-3 bg-white border-2 border-[#0fa3b1]/30 text-[#0fa3b1] font-black rounded-xl hover:bg-[#0fa3b1]/10 transition-all"
                      >
                        ← Sebelumnya
                      </motion.button>
                    )}
                    {selectedExperience < experiences.length - 1 && (
                      <motion.button
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedExperience(selectedExperience + 1)}
                        className="ml-auto px-6 py-3 bg-gradient-to-r from-[#0fa3b1] to-[#2eccc7] text-white font-black rounded-xl hover:shadow-lg hover:shadow-[#0fa3b1]/30 transition-all"
                      >
                        Berikutnya →
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    {
      title: "Project Strategy",
      desc: "End-to-end software project planning from initiation to delivery with clear milestones.",
      icon: <Layout size={24} />
    },
    {
      title: "Agile Leadership",
      desc: "Leading high-performance Agile teams to ensure rapid and high-quality releases.",
      icon: <Settings size={24} />
    },
    {
      title: "System Delivery",
      desc: "Coordinating complex system integrations aligned with core business objectives.",
      icon: <Layers size={24} />
    },
    {
      title: "Stakeholder Mgmt",
      desc: "Effective collaboration with stakeholders to ensure project alignment and success.",
      icon: <Users size={24} />
    }
  ];

  return (
    <section id="skills" className="py-16 lg:py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-20 gap-8">
          <div className="max-w-xl">
            <p className="text-[12px] font-black bg-gradient-to-r from-[#0fa3b1] to-[#2eccc7] bg-clip-text text-transparent mb-4 uppercase tracking-[0.4em]">Expertise</p>
            <h2 className="text-5xl lg:text-7xl font-black text-[#0d1f2b] tracking-tighter leading-[0.9]">
              Core <span className="text-gray-300">Capabilities</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-xs text-[13px] lg:text-[14px] leading-relaxed font-medium">
            Bridging technical complexity with business value through strategic project management.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skills.map((skill, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-white/50 backdrop-blur-md p-10 lg:p-12 rounded-[24px] lg:rounded-[40px] border border-white/60 transition-all duration-500 group hover:bg-gradient-to-br hover:from-[#0fa3b1]/20 hover:to-[#0d1f2b]/30 hover:border-[#0fa3b1]/40 shadow-sm hover:shadow-2xl hover:shadow-[#0fa3b1]/20"
            >
              <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-[#0fa3b1]/30 to-[#2eccc7]/20 flex items-center justify-center mb-8 shadow-sm group-hover:from-[#0fa3b1]/60 group-hover:to-[#2eccc7]/40 transition-all duration-500 border border-[#0fa3b1]/30">
                <div className="text-[#0fa3b1] group-hover:text-white transition-colors duration-300">
                  {skill.icon}
                </div>
              </div>
              <h3 className="text-lg lg:text-xl font-black text-[#0d1f2b] mb-5 tracking-tight group-hover:text-[#0fa3b1] transition-colors duration-300">{skill.title}</h3>
              <p className="text-[14px] lg:text-[15px] text-gray-500 leading-relaxed font-medium group-hover:text-gray-400 transition-colors">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ToolsCarousel = ({ tools }) => {
  const carouselRef = React.useRef(null);

  React.useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const animate = () => {
      carousel.scrollLeft += 1;
      
      // Reset to start when reaching end
      if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
        carousel.scrollLeft = 0;
      }
    };

    const intervalId = setInterval(animate, 50);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      ref={carouselRef}
      className="w-full overflow-x-hidden select-none"
      style={{
        scrollBehavior: 'auto',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="flex gap-12 lg:gap-16 w-max py-4 lg:py-6 px-4">
        {[...tools, ...tools, ...tools, ...tools, ...tools].map((tool, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 flex items-center justify-center transition-transform duration-300 hover:scale-105"
            style={{ minWidth: '100px', height: '80px' }}
          >
            <div className="text-5xl lg:text-6xl">
              {tool.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SDLCFlow = () => {
  const scrimStages = [
    {
      title: "Grooming",
      desc: "Story refinement & requirements clarity",
      icon: "📋"
    },
    {
      title: "Story Sizing",
      desc: "Estimate effort & complexity",
      icon: "📊"
    },
    {
      title: "Sprint Planning",
      desc: "Define sprint goals & tasks",
      icon: "🎯"
    },
    {
      title: "Sprint Dev",
      desc: "Execute & develop features (24H)",
      icon: "⚙️"
    },
    {
      title: "Review",
      desc: "Showcase completed work",
      icon: "✅"
    },
    {
      title: "Retrospective",
      desc: "Continuous improvement",
      icon: "🔄"
    }
  ];

  const reportingStructure = [
    {
      level: "User Level",
      frequency: "Weekly/BI-Weekly",
      items: ["Report Progress", "Issue/Risk/Dependency", "Monitoring"]
    },
    {
      level: "C-Level",
      frequency: "BI-Weekly",
      items: ["BI-Weekly Updates", "Planning & Blocker", "Resource Planning"]
    }
  ];

  const tools = [
    { name: "Trello", color: "from-blue-400 to-blue-600", icon: "📌" },
    { name: "Jira", color: "from-blue-500 to-blue-700", icon: "🔧" },
    { name: "Confluence", color: "from-cyan-400 to-blue-500", icon: "📚" },
    { name: "Notion", color: "from-slate-400 to-slate-600", icon: "📝" },
    { name: "Slack", color: "from-rose-300 to-red-500", icon: "💬" },
    { name: "GitLab", color: "from-red-400 to-orange-600", icon: "🐙" },
    { name: "PowerPoint", color: "from-orange-400 to-red-600", icon: "📊" },
    { name: "Google Sheets", color: "from-green-400 to-emerald-600", icon: "📑" }
  ];

  return (
    <>
      {/* Tools Management & Coordination */}
      <section id="tools" className="py-16 lg:py-32 px-6 relative overflow-hidden bg-gradient-to-br from-[#0fa3b1]/5 to-[#2eccc7]/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-16 gap-8">
            <div className="max-w-xl">
              <p className="text-[11px] font-black text-[#4a7c8c] mb-4 uppercase tracking-[0.4em]">Coordination</p>
              <h2 className="text-4xl lg:text-6xl font-black text-[#1a2e35] tracking-tighter leading-[0.9]">
                Tools & <span className="text-gray-300">Project Management</span>
              </h2>
            </div>
            <p className="text-gray-500 max-w-xs text-[13px] lg:text-[14px] leading-relaxed font-medium">
              Leveraging industry-leading tools to streamline team collaboration and project delivery.
            </p>
          </div>

          {/* Tools Carousel - Draggable */}
          <div className="mb-16 lg:mb-20">
            <style>{`
              @keyframes scroll-left {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-100%);
                }
              }
              
              .carousel-scroll {
                animation: scroll-left 80s linear infinite;
              }
              
              .carousel-scroll:hover {
                animation-play-state: paused;
              }
              
              .carousel-container {
                scroll-behavior: smooth;
              }
              
              .carousel-container.dragging {
                scroll-behavior: auto;
              }
            `}</style>
            
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-8">Primary Tools Stack</p>
            
            <ToolsCarousel tools={tools} />
          </div>

          {/* Features Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/40 backdrop-blur-sm p-6 lg:p-8 rounded-[24px] lg:rounded-[32px] border border-white/40 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="text-[24px] mb-4">📊</div>
              <h3 className="text-[14px] font-black text-[#1a2e35] mb-2">Recruitment Gathering</h3>
              <p className="text-[12px] text-gray-500 leading-relaxed">Collecting team requirements and resource planning for project success.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/40 backdrop-blur-sm p-6 lg:p-8 rounded-[24px] lg:rounded-[32px] border border-white/40 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="text-[24px] mb-4">📈</div>
              <h3 className="text-[14px] font-black text-[#1a2e35] mb-2">Analysis & Planning</h3>
              <p className="text-[12px] text-gray-500 leading-relaxed">In-depth analysis of scope, timeline, and resource allocation for optimal delivery.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/40 backdrop-blur-sm p-6 lg:p-8 rounded-[24px] lg:rounded-[32px] border border-white/40 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="text-[24px] mb-4">🔨</div>
              <h3 className="text-[14px] font-black text-[#1a2e35] mb-2">BRD Creation (2 Week)</h3>
              <p className="text-[12px] text-gray-500 leading-relaxed">Comprehensive Business Requirements Document crafted within a two-week sprint cycle.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SDLC Flow - Scrum Process */}
      <section id="sdlc" className="py-16 lg:py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-20 gap-8">
            <div className="max-w-xl">
              <p className="text-[12px] font-black bg-gradient-to-r from-[#0fa3b1] to-[#2eccc7] bg-clip-text text-transparent mb-4 uppercase tracking-[0.4em]">Development Cycle</p>
              <h2 className="text-5xl lg:text-7xl font-black text-[#0d1f2b] tracking-tighter leading-[0.9]">
                SDLC <span className="text-gray-300">Scrum Flow</span>
              </h2>
            </div>
            <p className="text-gray-500 max-w-xs text-[13px] lg:text-[14px] leading-relaxed font-medium">
              Agile-driven development process ensuring rapid delivery with continuous quality assurance.
            </p>
          </div>

          {/* Scrum Process Flow */}
          <div className="mb-20 lg:mb-28">
            {/* Mobile View - Vertical Stack */}
            <div className="lg:hidden">
              <div className="space-y-4">
                {scrimStages.map((stage, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group relative"
                  >
                    <div className="relative bg-white/50 backdrop-blur-sm p-5 rounded-[16px] border border-white/60 hover:bg-[#1a2e35] hover:text-white transition-all duration-500 shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="text-[28px] flex-shrink-0">{stage.icon}</div>
                        <div>
                          <h4 className="text-[13px] font-black text-[#1a2e35] group-hover:text-white transition-colors mb-1">{stage.title}</h4>
                          <p className="text-[11px] text-gray-500 group-hover:text-gray-300 transition-colors">{stage.desc}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Desktop View - Horizontal Grid */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-3 lg:grid-cols-6 gap-4">
                {scrimStages.map((stage, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group relative"
                  >
                    <div className="absolute -inset-3 bg-[#4a7c8c]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                    <div className="relative bg-white/50 backdrop-blur-sm p-5 rounded-[16px] border border-white/60 hover:bg-[#1a2e35] hover:text-white hover:shadow-2xl transition-all duration-500 shadow-sm flex flex-col items-center justify-center text-center h-40">
                      <div className="text-[36px] mb-2">{stage.icon}</div>
                      <h4 className="text-[12px] font-black text-[#1a2e35] group-hover:text-white transition-colors mb-1">{stage.title}</h4>
                      <p className="text-[9px] text-gray-500 group-hover:text-gray-300 transition-colors leading-tight">{stage.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Reporting & Stakeholder Communication */}
          <div className="mb-0">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0fa3b1] to-[#2eccc7] text-white flex items-center justify-center font-black text-lg shadow-lg shadow-[#0fa3b1]/40">📋</div>
              <h3 className="text-[18px] lg:text-[20px] font-black text-[#0d1f2b]">Reporting & Stakeholder Communication</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {reportingStructure.map((report, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8 }}
                  className="bg-white/50 backdrop-blur-md p-10 lg:p-12 rounded-[24px] lg:rounded-[32px] border border-white/60 shadow-sm hover:shadow-xl hover:shadow-[#0fa3b1]/20 transition-all hover:border-[#0fa3b1]/40"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0fa3b1]/20 to-[#2eccc7]/10 flex items-center justify-center text-[24px] border border-[#0fa3b1]/20">👥</div>
                    <div>
                      <h4 className="text-[15px] lg:text-[16px] font-black text-[#0d1f2b]">{report.level}</h4>
                      <p className="text-[11px] text-[#0fa3b1]/70 font-black uppercase tracking-widest">{report.frequency}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {report.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#0fa3b1] to-[#2eccc7]"></div>
                        <span className="text-[13px] lg:text-[14px] text-[#0d1f2b]/70 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
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
      className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-28 items-center border-b border-white/10 pb-16 lg:pb-20 last:border-0 last:pb-0"
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
        
        <h3 className="text-3xl lg:text-6xl font-black text-[#0d1f2b] tracking-tighter leading-[0.9] mb-8 lg:mb-10">{project.title}</h3>
        
        <div className="space-y-8 mb-12 lg:mb-14">
          <p className="text-[15px] lg:text-[18px] text-gray-500 leading-relaxed font-medium">
            {project.desc}
          </p>
          <div className="bg-gradient-to-br from-[#0d1f2b] to-[#0d1f2b]/80 p-8 lg:p-10 rounded-[24px] lg:rounded-[32px] border-l-4 border-[#0fa3b1] shadow-xl shadow-[#0fa3b1]/20 text-white relative overflow-hidden group border border-[#0fa3b1]/20">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#0fa3b1]/20 rounded-full -mr-12 -mt-12 blur-2xl"></div>
            <p className="text-[12px] font-black text-[#2eccc7] mb-3 uppercase tracking-widest relative z-10">Key Impact</p>
            <p className="text-[15px] lg:text-[16px] leading-relaxed italic font-medium relative z-10 opacity-90">"{project.impact}"</p>
          </div>
        </div>
        
        <div className="mb-12 lg:mb-14">
          <p className="text-[11px] lg:text-[12px] font-black text-[#0fa3b1]/70 uppercase tracking-widest mb-5">Technology Stack</p>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag: string) => (
              <span key={tag} className="bg-gradient-to-r from-[#0fa3b1]/10 to-[#2eccc7]/10 text-[#0d1f2b] px-5 py-3 rounded-2xl text-[11px] lg:text-[12px] font-black uppercase tracking-widest border border-[#0fa3b1]/20 hover:border-[#0fa3b1]/40 transition-all">
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
      tags: ["React", "Next.js", "TypeScript", "NestJS", "PostgreSQL", "Tailwind CSS", "Figma", "AWS"],
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
    <section id="portfolio" className="py-16 lg:py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-10 lg:mb-16">
          <p className="text-[12px] font-black bg-gradient-to-r from-[#0fa3b1] to-[#2eccc7] bg-clip-text text-transparent mb-4 uppercase tracking-[0.4em]">Professional Portfolio</p>
          <h2 className="text-5xl lg:text-7xl font-black text-[#0d1f2b] tracking-tighter leading-[0.9]">
            Detailed <span className="text-gray-300 italic font-serif">Case Studies</span>
          </h2>
        </div>

        <div className="space-y-14 lg:space-y-20">
          {projects.map((project, idx) => (
            <PortfolioItem key={idx} project={project} idx={idx} />
          ))}
        </div>

        <div className="mt-20 lg:mt-28 flex justify-center border-t border-gray-100 pt-12 lg:pt-16">
          <button className="bg-[#1a2e35] text-white px-14 py-6 rounded-full text-[12px] font-black uppercase tracking-[0.3em] hover:bg-[#4a7c8c] transition-all shadow-2xl">
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
    <section id="contact" className="py-16 lg:py-32 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <p className="text-[12px] font-black bg-gradient-to-r from-[#0fa3b1] to-[#2eccc7] bg-clip-text text-transparent mb-4 uppercase tracking-[0.4em]">Get in touch</p>
            <h2 className="text-5xl lg:text-7xl font-black text-[#0d1f2b] tracking-tighter leading-[0.9] mb-8 lg:mb-10">
              Let's <span className="bg-gradient-to-r from-[#0fa3b1] to-[#2eccc7] bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-gray-500 text-[14px] lg:text-[16px] leading-relaxed max-w-sm mb-10 lg:mb-12">
              Have a project in mind? I&apos;m always open to discussing new opportunities and strategic partnerships.
            </p>
            
            <div className="space-y-6 lg:space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0fa3b1]/20 to-[#2eccc7]/10 flex items-center justify-center text-[#0fa3b1] border border-[#0fa3b1]/20">
                  <Globe size={20} />
                </div>
                <span className="text-[12px] lg:text-[13px] font-black uppercase tracking-widest text-[#0d1f2b]">Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0fa3b1]/20 to-[#2eccc7]/10 flex items-center justify-center text-[#0fa3b1] border border-[#0fa3b1]/20">
                  <Linkedin size={20} />
                </div>
                <span className="text-[12px] lg:text-[13px] font-black uppercase tracking-widest text-[#0d1f2b]">linkedin.com/in/okta</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/50 backdrop-blur-md p-10 lg:p-12 rounded-[24px] lg:rounded-[40px] border border-white/60 space-y-6 shadow-sm hover:border-[#0fa3b1]/30 transition-all">
            <div className="space-y-2">
              <label className="text-[10px] lg:text-[11px] font-black text-[#0fa3b1]/70 uppercase tracking-widest ml-2">Full Name</label>
              <input 
                type="text" 
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-6 lg:px-7 py-4 lg:py-5 rounded-xl lg:rounded-2xl border border-[#0fa3b1]/20 outline-none bg-white/70 backdrop-blur-sm shadow-sm text-[13px] lg:text-[15px] font-medium focus:bg-white focus:border-[#0fa3b1]/50 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] lg:text-[11px] font-black text-[#0fa3b1]/70 uppercase tracking-widest ml-2">Email Address</label>
              <input 
                type="email" 
                required
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 lg:px-7 py-4 lg:py-5 rounded-xl lg:rounded-2xl border border-[#0fa3b1]/20 outline-none bg-white/70 backdrop-blur-sm shadow-sm text-[13px] lg:text-[15px] font-medium focus:bg-white focus:border-[#0fa3b1]/50 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] lg:text-[11px] font-black text-[#0fa3b1]/70 uppercase tracking-widest ml-2">Message</label>
              <textarea 
                required
                placeholder="Tell me about your project..."
                rows={5} 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-6 lg:px-7 py-4 lg:py-5 rounded-xl lg:rounded-2xl border border-[#0fa3b1]/20 outline-none bg-white/70 backdrop-blur-sm shadow-sm text-[13px] lg:text-[15px] font-medium resize-none focus:bg-white focus:border-[#0fa3b1]/50 transition-all"
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-[#0fa3b1] to-[#2eccc7] text-white py-4 lg:py-5 rounded-xl lg:rounded-2xl font-black text-[11px] lg:text-[12px] uppercase tracking-[0.2em] hover:shadow-lg hover:shadow-[#0fa3b1]/40 transition-all shadow-lg mt-2">
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
  return (
    <section id="testimonials" className="py-16 lg:py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 lg:mb-20">
          <p className="text-[12px] font-black bg-gradient-to-r from-[#0fa3b1] to-[#2eccc7] bg-clip-text text-transparent mb-4 uppercase tracking-[0.4em]">Testimonials</p>
          <h2 className="text-5xl lg:text-7xl font-black text-[#0d1f2b] tracking-tighter leading-[0.9]">
            What <span className="bg-gradient-to-r from-[#0fa3b1] to-[#2eccc7] bg-clip-text text-transparent">Others Say</span>
          </h2>
        </div>

        {/* Coming Soon Placeholder */}
        <div className="py-20 text-center">
          <p className="text-[16px] text-[#0fa3b1]/60 font-medium">Testimonials coming soon...</p>
        </div>
      </div>
    </section>
  );
};

const TestimonialsOld = () => {
  const [testimonialIndex, setTestimonialIndex] = React.useState(0);
  
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
    },
    {
      name: "Ratna Wijaya",
      company: "PT. Digital Solusi",
      image: "/aset/testimonial-ratna.jpg",
      text: "Excellent project management and technical expertise. Consistently delivers high-quality solutions that exceed expectations. Great to work with."
    },
    {
      name: "Rido Pratama",
      company: "PT. Innovation Hub",
      image: "/aset/testimonial-rido.jpg",
      text: "Remarkable problem-solving skills and dedication. Okta brings innovation and professionalism to every project. Absolutely recommended."
    }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="feedback" className="py-12 lg:py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 lg:mb-16">
          <p className="text-[11px] font-black text-[#4a7c8c] mb-3 uppercase tracking-[0.4em]">Feedback</p>
          <h2 className="text-4xl lg:text-7xl font-black text-[#1a2e35] tracking-tighter leading-[0.9]">
            User <span className="text-gray-300">Feedback</span>
          </h2>
          <p className="text-[12px] text-gray-500 mt-4">Feedback dari atasan dan user selama pengembangan project</p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <motion.div
            key={testimonialIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <TestimonialItem t={testimonials[testimonialIndex]} idx={testimonialIndex} />
          </motion.div>

          {/* Carousel Navigation Buttons */}
          <div className="flex justify-center items-center gap-8 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="p-3 rounded-full bg-gray-100 border border-gray-200 text-[#1a2e35] hover:bg-[#1a2e35] hover:text-white transition-all duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </motion.button>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2">
              {testimonials.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setTestimonialIndex(idx)}
                  whileHover={{ scale: 1.2 }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === testimonialIndex ? 'bg-[#1a2e35] w-8' : 'bg-gray-300 w-2'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
              className="p-3 rounded-full bg-gray-100 border border-gray-200 text-[#1a2e35] hover:bg-[#1a2e35] hover:text-white transition-all duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="px-6 pb-8 pt-12 lg:pt-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#0d1f2b] via-[#0d1f2b] to-[#0fa3b1]/10 text-white rounded-[32px] lg:rounded-[40px] p-10 md:p-14 lg:p-16 shadow-2xl shadow-[#0fa3b1]/20 relative overflow-hidden border border-[#0fa3b1]/20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0fa3b1]/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-10 relative z-10">
          <div className="text-3xl font-black tracking-tighter">
            <span className="bg-gradient-to-r from-white to-[#2eccc7] bg-clip-text text-transparent">OKTA</span>
            <span className="text-[#2eccc7]">.</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-10 text-[11px] lg:text-[12px] font-black uppercase tracking-widest text-[#2eccc7]/70 hover:text-[#2eccc7] transition-colors">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex gap-5">
            {[Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-11 h-11 rounded-full bg-[#0fa3b1]/10 flex items-center justify-center hover:bg-[#0fa3b1]/30 hover:text-[#2eccc7] transition-all border border-[#0fa3b1]/30 text-[#2eccc7]">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 lg:mt-14 pt-10 border-t border-[#0fa3b1]/20 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] lg:text-[11px] font-black text-[#2eccc7]/50 uppercase tracking-[0.2em] relative z-10">
          <p className="text-center md:text-left">© 2026 Okta. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#2eccc7] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#2eccc7] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen pb-32 lg:pb-0 bg-[#f8fafc] bg-[radial-gradient(circle_at_top_right,_#f0fffe_0%,_transparent_40%),_radial-gradient(circle_at_bottom_left,_#f0fffe_0%,_transparent_40%)] font-sans selection:bg-[#0fa3b1] selection:text-white antialiased relative overflow-hidden">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none -z-50 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]"></div>
      
      {/* Global Atmospheric Blurs */}
      <div className="fixed top-[20%] -left-[10%] w-[40%] h-[40%] bg-[#0fa3b1]/8 rounded-full blur-[120px] pointer-events-none -z-40"></div>
      <div className="fixed bottom-[20%] -right-[10%] w-[40%] h-[40%] bg-[#2eccc7]/6 rounded-full blur-[120px] pointer-events-none -z-40"></div>
      <div className="fixed top-[60%] left-[30%] w-[30%] h-[30%] bg-[#0fa3b1]/4 rounded-full blur-[100px] pointer-events-none -z-40"></div>
      
      <Navbar />
      <Hero />
      <Journey />
      <Skills />
      <SDLCFlow />
      <Portfolio />
      <Contact />
      <Testimonials />
      <Footer />
      <OktaAI />
    </div>
  );
}

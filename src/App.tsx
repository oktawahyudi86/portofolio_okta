/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Linkedin, 
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
  Mail,
  X,
  Menu,
  Phone,
  Send,
  Loader2,
  ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type FeatureType = 'recruitment' | 'analysis' | 'brd';
const featureGradientMap: Record<FeatureType, string> = {
  recruitment: 'from-[#06b6d4] to-[#14b8a6]',
  analysis: 'from-[#0ea5e9] to-[#6366f1]',
  brd: 'from-[#fb7185] to-[#f97316]'
};

const FeatureIcon = ({ type }: { type: FeatureType }) => (
  <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-[22px] bg-gradient-to-br ${featureGradientMap[type]} shadow-[0_25px_50px_rgba(15,23,42,0.35)] flex items-center justify-center`}>
    <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {type === 'recruitment' && (
        <>
          <circle cx="11" cy="12" r="4" stroke="white" strokeWidth="2" />
          <circle cx="25" cy="12" r="4" stroke="white" strokeWidth="2" />
          <circle cx="18" cy="24" r="4" stroke="white" strokeWidth="2" />
          <path d="M11 16.5C11 18.9853 13.2386 21 16 21C18.7614 21 21 18.9853 21 16.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 14L4 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M24 14L32 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
      {type === 'analysis' && (
        <>
          <rect x="8" y="12" width="5" height="14" rx="1.5" fill="white" />
          <rect x="16" y="8" width="5" height="18" rx="1.5" fill="white" />
          <rect x="24" y="4" width="5" height="22" rx="1.5" fill="white" />
          <path d="M7 28L15 20L23 24L29 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
      {type === 'brd' && (
        <>
          <path d="M9 5H23L29 11V31C29 32.1046 28.1046 33 27 33H9C7.89543 33 7 32.1046 7 31V7C7 5.89543 7.89543 5 9 5Z" stroke="white" strokeWidth="2" />
          <line x1="14" y1="14" x2="24" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="14" y1="20" x2="24" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 26L16 30L26 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
    </svg>
  </div>
);

type StageVariant = 'grooming' | 'sizing' | 'planning' | 'dev' | 'review' | 'retrospective';
const stageGradientMap: Record<StageVariant, string> = {
  grooming: 'from-[#22d3ee] to-[#0ea5e9]',
  sizing: 'from-[#0f766e] to-[#10b981]',
  planning: 'from-[#f97316] to-[#fb923c]',
  dev: 'from-[#2563eb] to-[#7c3aed]',
  review: 'from-[#9333ea] to-[#c084fc]',
  retrospective: 'from-[#0f172a] to-[#1e3a8a]'
};

const StageIcon = ({ variant, className = '' }: { variant: StageVariant; className?: string }) => (
  <div className={`w-14 h-14 rounded-[20px] bg-gradient-to-br ${stageGradientMap[variant]} shadow-[0_20px_40px_rgba(15,23,42,0.35)] flex items-center justify-center ${className}`}>
    <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {variant === 'grooming' && (
        <>
          <circle cx="18" cy="9" r="4" stroke="white" strokeWidth="2" />
          <path d="M6 24C6 19.5817 9.58172 16 14 16L16 16" stroke="white" strokeWidth="2" />
          <path d="M30 24C30 19.5817 26.4183 16 22 16H20" stroke="white" strokeWidth="2" />
          <circle cx="10" cy="24" r="3" stroke="white" strokeWidth="2" />
          <circle cx="26" cy="24" r="3" stroke="white" strokeWidth="2" />
        </>
      )}
      {variant === 'sizing' && (
        <>
          <rect x="6" y="14" width="6" height="12" rx="1.5" fill="white" />
          <rect x="15" y="10" width="6" height="16" rx="1.5" fill="white" />
          <rect x="24" y="6" width="6" height="20" rx="1.5" fill="white" />
        </>
      )}
      {variant === 'planning' && (
        <>
          <rect x="6" y="6" width="24" height="24" rx="5" stroke="white" strokeWidth="2" />
          <line x1="6" y1="12" x2="30" y2="12" stroke="white" strokeWidth="2" />
          <line x1="12" y1="6" x2="12" y2="10" stroke="white" strokeWidth="2" />
          <line x1="20" y1="6" x2="20" y2="10" stroke="white" strokeWidth="2" />
          <rect x="10" y="16" width="4" height="4" rx="1" fill="white" />
          <rect x="16" y="16" width="4" height="4" rx="1" fill="white" />
          <rect x="22" y="16" width="4" height="4" rx="1" fill="white" />
        </>
      )}
      {variant === 'dev' && (
        <>
          <path d="M12 8L6 18L12 28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24 8L30 18L24 28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 16H22" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M14 20H22" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
      {variant === 'review' && (
        <>
          <circle cx="18" cy="18" r="11" stroke="white" strokeWidth="2" />
          <path d="M12 18L16 22L25 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
      {variant === 'retrospective' && (
        <>
          <path d="M12 12V9H9" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M24 12V9H27" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M18 6V12" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M24 24C24 20.6863 21.3137 18 18 18C14.6863 18 12 20.6863 12 24V27H27" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
    </svg>
  </div>
);

type ReportingVariant = 'user' | 'cLevel';
const reportingGradientMap: Record<ReportingVariant, string> = {
  user: 'from-[#0ea5e9] to-[#06b6d4]',
  cLevel: 'from-[#f97316] to-[#ef4444]'
};

const ReportingIcon = ({ variant }: { variant: ReportingVariant }) => (
  <div className={`w-12 h-12 rounded-[20px] bg-gradient-to-br ${reportingGradientMap[variant]} shadow-[0_20px_60px_rgba(15,23,42,0.4)] flex items-center justify-center`}>
    <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {variant === 'user' ? (
        <>
          <circle cx="18" cy="10" r="5" stroke="white" strokeWidth="2" />
          <path d="M10 30C10 23.3726 14.3726 18 21 18C27.6274 18 32 23.3726 32 30V32H10V30Z" stroke="white" strokeWidth="2" />
          <path d="M6 16L14 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M30 16L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </>
      ) : (
        <>
          <path d="M18 5C23.5228 5 28 9.47715 28 15V18H36V31H0V18H8V15C8 9.47715 12.4772 5 18 5Z" stroke="white" strokeWidth="2" />
          <path d="M10 24H26" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M10 28H26" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M14 20H22" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
    </svg>
  </div>
);

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
    - Role: Project Manager with 3+ years of experience.
    - Delivered 30+ software projects.
    - Skills: Project Strategy, Agile Leadership, System Delivery, Stakeholder Management.
    - Journey:
      * 2020-2021: PT. Sarana Insan Muda Selaras (Technical Gov & Corp) in Yogyakarta.
      * 2021-2023: PT. Supra Primatama/Biznet (Project Engineer) in Surabaya.
      * Jun-Des 2023: PT. Divistant Teknologi (PM DevOps & Software) in Yogyakarta.
      * 2023-2025: PT. Juragan Inovator (Project Manager) Remote.
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
                    <h4 className="text-[17px] font-black tracking-tight flex items-center gap-2">
                    OktaAI <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.8)]"></span>
                  </h4>
                    <p className="text-[12px] text-white/60 font-semibold tracking-[0.08em]">Asisten pintar & lucu ✨</p>
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
                      <h5 className="text-[16px] font-black text-[#1a2e35] mb-2 tracking-[0.04em]">Halo! Aku OktaAI 👋</h5>
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
                            className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-2xl text-[12px] font-semibold text-[#1a2e35] shadow-sm flex flex-col items-center gap-1.5 transition-all duration-300"
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
                <p className="text-[11px] text-gray-400 font-semibold tracking-[0.08em]">OktaAI Assistant ✨</p>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const TravelokaSkeletonBlock = ({ className = '' }: { className?: string }) => (
  <div className={`traveloka-skeleton ${className}`} />
);

const SectionTransitionSkeleton = () => (
  <div className="fixed inset-0 z-[90] bg-[#f8fafc]/92 backdrop-blur-[10px]">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 lg:pt-36 pb-10">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] items-start">
        <div className="space-y-6">
          <TravelokaSkeletonBlock className="h-10 w-40 rounded-full" />
          <TravelokaSkeletonBlock className="h-16 w-full max-w-[520px] rounded-[22px]" />
          <TravelokaSkeletonBlock className="h-16 w-full max-w-[460px] rounded-[22px]" />
          <TravelokaSkeletonBlock className="h-28 w-full max-w-[560px] rounded-[32px]" />
          <div className="grid grid-cols-2 gap-4 max-w-[420px]">
            <TravelokaSkeletonBlock className="h-20 rounded-[24px]" />
            <TravelokaSkeletonBlock className="h-20 rounded-[24px]" />
          </div>
        </div>
        <div className="space-y-5">
          <TravelokaSkeletonBlock className="h-[340px] w-full rounded-[34px]" />
          <div className="grid grid-cols-2 gap-4">
            <TravelokaSkeletonBlock className="h-28 rounded-[24px]" />
            <TravelokaSkeletonBlock className="h-28 rounded-[24px]" />
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <TravelokaSkeletonBlock className="h-40 rounded-[28px]" />
        <TravelokaSkeletonBlock className="h-40 rounded-[28px]" />
        <TravelokaSkeletonBlock className="h-40 rounded-[28px]" />
      </div>
    </div>
  </div>
);

const Navbar = ({ onNavigate }: { onNavigate: (href: string) => void }) => {
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
          <div className="relative px-2">
            <div className="relative max-w-6xl mx-auto rounded-[40px] p-[1px] bg-white/10 shadow-[0_15px_60px_rgba(15,23,42,0.15)]">
              <nav className="relative overflow-hidden rounded-[36px] bg-white/85 backdrop-blur-[20px] border border-white/50 shadow-[0_15px_40px_rgba(15,23,42,0.2)]">
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
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.href);
                    }}
                    whileHover={{ y: -2 }}
                    className={`px-5 py-2.5 rounded-2xl text-[14px] font-semibold tracking-[0.04em] transition-all flex items-center gap-2 group ${activeSection === item.href.replace('#', '') ? 'text-[#1a2e35] bg-gray-50' : 'text-gray-500 hover:text-[#1a2e35] hover:bg-gray-50'}`}
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
                <div className="relative bg-[#1a2e35] text-white px-4 lg:px-7 py-2 lg:py-3 rounded-full text-[11px] lg:text-[13px] font-semibold tracking-[0.08em] flex items-center gap-2 lg:gap-3 shadow-xl border border-white/10 overflow-hidden">
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
      </div>
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
                    return;
                  }
                  e.preventDefault();
                  onNavigate(item.href);
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
                <span className={`text-[11px] font-semibold tracking-[0.04em] ${activeSection === item.href.replace('#', '') ? 'text-[#1a2e35]' : 'text-gray-400'} transition-colors`}>
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
  return (
    <section id="home" className="mt-16 lg:mt-20 pt-16 lg:pt-56 pb-12 lg:pb-24 px-6 xl:px-8 2xl:px-12 max-w-7xl xl:max-w-6xl 2xl:max-w-7xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 2xl:gap-32 items-center relative overflow-hidden lg:overflow-visible">
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

        <div className="inline-block px-4 py-1.5 rounded-full bg-[#4a7c8c]/10 text-[#4a7c8c] font-semibold mb-6 tracking-[0.08em] text-[12px] lg:text-[13px] border border-[#4a7c8c]/20">
          Project Manager
        </div>
        <h1 className="text-[clamp(3.2rem,8vw,5.6rem)] font-black text-[#1a2e35] leading-[0.94] mb-8 2xl:mb-12 tracking-[-0.03em]">
          I manage software <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a7c8c] to-[#1a2e35]">projects</span> and delivery.
        </h1>
        
        <div className="bg-[#1a2e35] text-white p-7 lg:p-8 2xl:p-10 rounded-[32px] lg:rounded-[40px] 2xl:rounded-[48px] mb-10 2xl:mb-12 relative shadow-2xl overflow-hidden group border border-white/10">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#4a7c8c]/20 rounded-full -mr-24 -mt-24 blur-3xl group-hover:bg-[#4a7c8c]/30 transition-all duration-1000"></div>
          <p className="italic text-base lg:text-lg 2xl:text-xl leading-relaxed font-medium relative z-10 opacity-90">
            "I manage software projects end-to-end, ensuring timely delivery, quality results, and strong team alignment."
          </p>
        </div>

        <div className="flex gap-10 lg:gap-12 2xl:gap-16 mb-10 2xl:mb-14 px-2">
          <div className="flex flex-col">
            <span className="text-4xl lg:text-5xl 2xl:text-6xl font-black text-[#1a2e35] tracking-tighter">3+</span>
            <div className="text-[12px] lg:text-[13px] text-gray-500 font-semibold leading-snug tracking-[0.02em] mt-1">
              Years of<br/>experience
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl lg:text-5xl 2xl:text-6xl font-black text-[#1a2e35] tracking-tighter">30</span>
            <div className="text-[12px] lg:text-[13px] text-gray-500 font-semibold leading-snug tracking-[0.02em] mt-1">
              Projects<br/>delivered
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-100 pt-10 mb-10">
          <p className="text-[16px] lg:text-[17px] text-gray-600 leading-relaxed font-medium">
            I am an IT Project Manager focused on software development, delivering projects efficiently and on time.
          </p>
          <p className="text-[16px] lg:text-[17px] text-gray-600 leading-relaxed font-medium">
            I have managed and delivered 30+ software projects, ensuring quality results and business alignment.
          </p>
        </div>

      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full lg:-mt-8 flex justify-center"
      >
        <img 
          src="/aset/profil.png" 
          alt="Okta" 
          loading="eager"
          // @ts-ignore
          fetchPriority="high"
          className="w-full max-w-[430px] sm:max-w-[500px] lg:max-w-[560px] h-auto object-contain grayscale"
          referrerPolicy="no-referrer"
        />
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
      position: "Project Manager",
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
    <section id="journey" className="py-12 lg:py-24 2xl:py-32 px-6 xl:px-8 2xl:px-12 relative overflow-hidden">
      <div className="max-w-7xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="mb-10 lg:mb-16 2xl:mb-20">
          <p className="text-[12px] font-semibold text-[#4a7c8c] mb-3 tracking-[0.14em]">Milestones</p>
          <h2 className="text-4xl lg:text-6xl 2xl:text-7xl font-black text-[#1a2e35] tracking-tighter leading-[0.9]">
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
                  <span className="text-[10px] font-semibold opacity-80 tracking-[0.04em] mb-1">{exp.date}</span>
                  <span className="text-[12px] font-black leading-tight">{exp.location}</span>
                </div>

                {/* Info Label */}
                <div className={`absolute left-1/2 -translate-x-1/2 w-48 text-center ${exp.y > 0 ? '-top-24' : 'top-28'}`}>
                  <p className="text-[15px] font-black text-[#1a2e35] leading-tight mb-1">{exp.company}</p>
                  <p className="text-[12px] text-gray-500 font-semibold tracking-[0.03em] opacity-80">{exp.position}</p>
                </div>
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
              <div className="flex-1 bg-white/70 backdrop-blur-sm p-7 rounded-[24px] border border-[#0fa3b1]/20 shadow-sm hover:shadow-md hover:bg-white/90 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[12px] font-black text-white bg-gradient-to-r from-[#0fa3b1] to-[#2eccc7] px-4 py-1.5 rounded-full border border-[#0fa3b1]/20">
                    {exp.date}
                  </span>
                  <span className="text-[13px] font-semibold text-[#0fa3b1] tracking-[0.03em]">
                    {exp.location}
                  </span>
                </div>
                <h3 className="text-[18px] lg:text-[19px] font-black text-[#0d1f2b] leading-tight mb-2">{exp.company}</h3>
                <p className="text-[14px] text-[#0fa3b1] font-semibold tracking-[0.03em]">{exp.position}</p>
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
    <section id="skills" className="py-12 lg:py-24 2xl:py-32 px-6 xl:px-8 2xl:px-12 relative overflow-hidden">
      <div className="max-w-7xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-16 2xl:mb-20 gap-8">
          <div className="max-w-xl 2xl:max-w-2xl">
            <h2 className="text-4xl lg:text-6xl 2xl:text-7xl font-black text-[#1a2e35] tracking-tighter leading-[0.9]">
              Core <span className="text-gray-300">Capabilities</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-xs text-[13px] lg:text-[14px] leading-relaxed font-medium">
            Bridging technical complexity with business value through strategic project management.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 2xl:gap-8">
          {skills.map((skill, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white/40 backdrop-blur-sm p-8 lg:p-10 2xl:p-12 rounded-[24px] lg:rounded-[40px] 2xl:rounded-[48px] border border-white/40 transition-all duration-500 group hover:bg-[#1a2e35] hover:border-[#1a2e35] shadow-sm hover:shadow-2xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/60 flex items-center justify-center mb-6 lg:mb-8 shadow-sm group-hover:bg-[#4a7c8c] transition-colors duration-500">
                <div className="text-[#4a7c8c] group-hover:text-white transition-colors">
                  {skill.icon}
                </div>
              </div>
              <h3 className="text-xl 2xl:text-2xl font-black text-[#1a2e35] mb-4 2xl:mb-6 tracking-tight group-hover:text-white transition-colors">{skill.title}</h3>
              <p className="text-[14px] 2xl:text-[15px] text-gray-500 leading-relaxed font-medium group-hover:text-gray-400 transition-colors">{skill.desc}</p>
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
            className="flex-shrink-0 flex items-center justify-center transition-transform duration-500 hover:scale-110"
            style={{ minWidth: '140px', height: '140px' }}
          >
            {typeof tool.icon === 'string' && tool.icon.startsWith('/') ? (
              <img 
                src={tool.icon} 
                alt={tool.name}
                className="w-28 h-28 object-contain"
              />
            ) : (
              <div className="text-5xl lg:text-6xl">
                {tool.icon}
              </div>
            )}
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
      variant: "grooming"
    },
    {
      title: "Story Sizing",
      desc: "Estimate effort & complexity",
      variant: "sizing"
    },
    {
      title: "Sprint Planning",
      desc: "Define sprint goals & tasks",
      variant: "planning"
    },
    {
      title: "Sprint Dev",
      desc: "Execute & develop features (24H)",
      variant: "dev"
    },
    {
      title: "Review",
      desc: "Showcase completed work",
      variant: "review"
    },
    {
      title: "Retrospective",
      desc: "Continuous improvement",
      variant: "retrospective"
    }
  ];

  const reportingStructure = [
    {
      level: "User Level",
      frequency: "Weekly/BI-Weekly",
      variant: "user",
      items: ["Report Progress", "Issue/Risk/Dependency", "Monitoring"]
    },
    {
      level: "C-Level",
      frequency: "BI-Weekly",
      variant: "cLevel",
      items: ["BI-Weekly Updates", "Planning & Blocker", "Resource Planning"]
    }
  ];

  const tools = [
    { name: "Trello", color: "from-blue-400 to-blue-600", icon: "/aset/trello.png" },
    { name: "Jira", color: "from-blue-500 to-blue-700", icon: "/aset/jira.png" },
    { name: "Confluence", color: "from-cyan-400 to-blue-500", icon: "/aset/confluence.png" },
    { name: "Notion", color: "from-slate-400 to-slate-600", icon: "/aset/notion.png" },
    { name: "Slack", color: "from-rose-300 to-red-500", icon: "/aset/slack.png" },
    { name: "GitLab", color: "from-red-400 to-orange-600", icon: "/aset/gitlab.png" },
    { name: "PowerPoint", color: "from-orange-400 to-red-600", icon: "/aset/office.png" },
    { name: "Google Sheets", color: "from-green-400 to-emerald-600", icon: "📑" }
  ];

  return (
    <>
      {/* Tools Management & Coordination */}
    <section id="tools" className="py-12 lg:py-24 2xl:py-32 px-6 xl:px-8 2xl:px-12 relative overflow-hidden bg-gradient-to-br from-[#1a2e35]/5 to-[#4a7c8c]/5">
      <div className="max-w-7xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-16 2xl:mb-20 gap-8">
          <div className="max-w-xl 2xl:max-w-2xl">
            <h2 className="text-4xl lg:text-6xl 2xl:text-7xl font-black text-[#1a2e35] tracking-tighter leading-[0.9]">
                Tools & <span className="text-gray-300">Project Management</span>
              </h2>
            </div>
            <p className="text-gray-500 max-w-xs text-[13px] lg:text-[14px] leading-relaxed font-medium">
              Leveraging industry-leading tools to streamline team collaboration and project delivery.
            </p>
          </div>

          {/* Tools Carousel - Draggable */}
          <div className="mb-16 lg:mb-20 2xl:mb-24">
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
            
            <p className="text-[12px] font-semibold text-gray-500 tracking-[0.08em] mb-8">Primary tools stack</p>
            
            <ToolsCarousel tools={tools} />
          </div>

          {/* Features Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 2xl:gap-10">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/40 backdrop-blur-sm p-6 lg:p-8 2xl:p-10 rounded-[24px] lg:rounded-[32px] 2xl:rounded-[40px] border border-white/40 shadow-sm hover:shadow-xl transition-all flex flex-col gap-3 items-start"
            >
              <FeatureIcon type="recruitment" />
              <h3 className="text-[14px] font-black text-[#1a2e35] mb-0">Recruitment Gathering</h3>
              <p className="text-[12px] text-gray-500 leading-relaxed">Collecting team requirements and resource planning for project success.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/40 backdrop-blur-sm p-6 lg:p-8 2xl:p-10 rounded-[24px] lg:rounded-[32px] 2xl:rounded-[40px] border border-white/40 shadow-sm hover:shadow-xl transition-all flex flex-col gap-3 items-start"
            >
              <FeatureIcon type="analysis" />
              <h3 className="text-[14px] font-black text-[#1a2e35] mb-0">Analysis & Planning</h3>
              <p className="text-[12px] text-gray-500 leading-relaxed">In-depth analysis of scope, timeline, and resource allocation for optimal delivery.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/40 backdrop-blur-sm p-6 lg:p-8 2xl:p-10 rounded-[24px] lg:rounded-[32px] 2xl:rounded-[40px] border border-white/40 shadow-sm hover:shadow-xl transition-all flex flex-col gap-3 items-start"
            >
              <FeatureIcon type="brd" />
              <h3 className="text-[14px] font-black text-[#1a2e35] mb-0">BRD Creation (2 Week)</h3>
              <p className="text-[12px] text-gray-500 leading-relaxed">Comprehensive Business Requirements Document crafted within a two-week sprint cycle.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SDLC Flow - Scrum Process */}
    <section id="sdlc" className="py-12 lg:py-24 2xl:py-32 px-6 xl:px-8 2xl:px-12 relative overflow-hidden">
      <div className="max-w-7xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-16 2xl:mb-20 gap-8">
          <div className="max-w-xl 2xl:max-w-2xl">
            <h2 className="text-4xl lg:text-6xl 2xl:text-7xl font-black text-[#1a2e35] tracking-tighter leading-[0.9]">
                SDLC <span className="text-gray-300">Scrum Flow</span>
              </h2>
            </div>
            <p className="text-gray-500 max-w-xs text-[13px] lg:text-[14px] leading-relaxed font-medium">
              Agile-driven development process ensuring rapid delivery with continuous quality assurance.
            </p>
          </div>

          {/* Scrum Process Flow */}
          <div className="mb-16 lg:mb-20 2xl:mb-24">
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
                        <div className="flex-shrink-0">
                          <StageIcon variant={stage.variant} />
                        </div>
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
              <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 2xl:gap-6">
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
                      <div className="mb-2">
                        <StageIcon variant={stage.variant} className="w-16 h-16" />
                      </div>
                      <h4 className="text-[12px] font-black text-[#1a2e35] group-hover:text-white transition-colors mb-1">{stage.title}</h4>
                      <p className="text-[11px] text-gray-500 group-hover:text-gray-300 transition-colors leading-snug">{stage.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Reporting & Stakeholder Communication */}
          <div className="mb-16 lg:mb-0">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-[#4a7c8c] text-white flex items-center justify-center font-black text-sm">📋</div>
              <h3 className="text-[16px] lg:text-[18px] font-black text-[#1a2e35]">Reporting & Stakeholder Communication</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 2xl:gap-10">
              {reportingStructure.map((report, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white/50 backdrop-blur-sm p-7 lg:p-9 2xl:p-10 rounded-[18px] lg:rounded-[20px] border border-white/40 shadow-sm hover:shadow-xl transition-all min-h-[225px]"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <ReportingIcon variant={report.variant} />
                    <div>
                      <h4 className="text-[14px] font-black text-[#1a2e35]">{report.level}</h4>
                      <p className="text-[12px] text-[#0f172a]/60 font-semibold tracking-[0.04em]">{report.frequency}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {report.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#0fa3b1] to-[#06b6d4]"></div>
                        <span className="text-[12px] text-[#1f2937] font-medium">{item}</span>
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
}

const PortfolioItem = ({ project, idx }: PortfolioItemProps) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center border-b border-white/10 pb-10 last:border-0"
    >
      <div className={`order-1 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="relative group">
          <div className="absolute -inset-6 bg-gradient-to-br from-[#0fa3b1]/8 to-[#2eccc7]/4 rounded-[48px] blur-2xl group-hover:from-[#0fa3b1]/15 group-hover:to-[#2eccc7]/10 transition-all duration-700"></div>
          <div className="rounded-[28px] lg:rounded-[40px] overflow-hidden shadow-xl aspect-[16/10] relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md border border-[#0fa3b1]/30 group-hover:border-[#0fa3b1]/50 transition-all duration-500">
            {!isLoaded && <Skeleton className="absolute inset-0 w-full h-full rounded-none" />}
            <img 
              src={project.image} 
              alt={project.title} 
              onLoad={() => setIsLoaded(true)}
              loading="lazy"
              className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>

      <div className={`order-2 ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="flex items-center gap-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0fa3b1] to-[#2eccc7]"></div>
            <span className="text-[12px] font-semibold text-[#0fa3b1] tracking-[0.08em]">{project.type}</span>
          </div>
          <span className="w-6 h-px bg-gradient-to-r from-[#0fa3b1]/40 to-transparent"></span>
          <span className="text-[12px] font-semibold text-[#0fa3b1]/60 tracking-[0.04em]">{project.role}</span>
        </div>
        
        <h3 className="text-3xl lg:text-5xl font-black text-[#0d1f2b] tracking-tighter leading-[0.9] mb-6">{project.title}</h3>
        
        <div className="space-y-5 mb-8">
          <p className="text-[15px] text-[#1a2e35]/80 leading-relaxed">
            {project.desc}
          </p>
          <div className="bg-[#1a2e35] p-6 rounded-[24px] lg:rounded-[32px] border-l-4 border-[#4a7c8c] shadow-xl text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#4a7c8c]/20 rounded-full -mr-12 -mt-12 blur-2xl"></div>
            <p className="text-[12px] font-semibold text-[#4a7c8c] mb-2 tracking-[0.08em] relative z-10">Key impact</p>
            <p className="text-[14px] leading-relaxed italic font-medium relative z-10 opacity-90">"{project.impact}"</p>
          </div>
        </div>
        
        <div className="mb-6">
          <p className="text-[12px] font-semibold text-gray-500 tracking-[0.08em] mb-4">Technology stack</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <span key={tag} className="bg-gray-50 text-[#1a2e35] px-4 py-2 rounded-xl text-[11px] font-semibold tracking-[0.03em] border border-gray-100">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <motion.a
          whileHover={{ x: 10 }}
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 text-[#1a2e35] group/btn"
        >
          <span className="text-[12px] font-semibold tracking-[0.08em]">View case study</span>
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover/btn:bg-[#1a2e35] group-hover/btn:text-white transition-all duration-500">
            <ArrowUpRight size={18} />
          </div>
        </motion.a>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const githubUrl = "https://github.com/oktawahyu";
  const projects = [
    {
      title: "Website Business MRT Jakarta",
      type: "Enterprise Digital Platform",
      role: "Lead Project Manager",
      impact: "Streamlined stakeholder communication and improved operational efficiency by 40%.",
      desc: "A comprehensive digital platform for MRT Jakarta's business operations, featuring real-time data integration and a modern user interface for enhanced stakeholder engagement. I managed the full lifecycle from requirements gathering to final deployment.",
      tags: ["React", "Next.js", "TypeScript", "NestJS", "PostgreSQL", "Tailwind CSS", "Figma"],
      image: "/aset/project-mrt-jakarta.svg",
      url: "https://bisnis.jakartamrt.co.id/"
    },
    {
      title: "Yulo Laundry Mobile App",
      type: "Management System & Mobile App",
      role: "Product Owner & Manager",
      impact: "Reduced order processing time by 25% and increased customer retention through automated notifications.",
      desc: "An end-to-end laundry management system that streamlines order processing, customer tracking, and financial reporting for laundry businesses. This project involved complex state management and real-time notifications.",
      tags: ["React", "Next.js", "TypeScript", "NestJS", "PostgreSQL", "Tailwind CSS", "Figma"],
      image: "/aset/project-yulo-laundry.svg",
      url: "https://play.google.com/store/apps/details?id=com.yulo.customer&hl=id"
    },
    {
      title: "DazoApps SaaS AI & OMS",
      type: "SaaS Platform, AI & OMS",
      role: "Technical Project Lead",
      impact: "Successfully integrated LLM capabilities, resulting in a 50% increase in user engagement within the first month.",
      desc: "A SaaS ecosystem that combines AI-powered workflows with an operations management system to support business execution, automation, and service delivery. I led the technical coordination across product planning, delivery milestones, and platform implementation.",
      tags: ["React", "Vue.js", "TypeScript", "Laravel", "MongoDB", "Golang", "Figma"],
      image: "/aset/project-dazo-ai.svg",
      url: "https://dazo.id/"
    },
    {
      title: "Maxtream Platform",
      type: "Video Streaming & Content Delivery",
      role: "Project Manager",
      impact: "Delivered robust streaming infrastructure supporting 50K+ concurrent users with 99.8% uptime.",
      desc: "A comprehensive video streaming platform built to deliver high-quality content with adaptive bitrate streaming. Managed end-to-end development from architecture design to production deployment with focus on scalability and user experience.",
      tags: ["React", "Next.js", "TypeScript", "Go", "PostgreSQL", "AWS", "Docker"],
      image: "/aset/project-maxtream.svg",
      url: "https://maxstream.tv/home"
    },
    {
      title: "Meloadia Music App",
      type: "Music Streaming Application",
      role: "Project Manager & Technical Lead",
      impact: "Achieved 100K+ downloads in first quarter with 4.8-star app store rating.",
      desc: "A feature-rich music streaming application with personalized recommendations, offline listening, and social sharing. Led cross-functional teams to deliver weekly feature releases while maintaining app stability and performance.",
      tags: ["React Native", "TypeScript", "Node.js", "MongoDB", "Redis", "Firebase", "Figma"],
      image: "/aset/project-meloadia.svg",
      url: "https://github.com/oktawahyu"
    },
    {
      title: "BPJSTK Integrated System",
      type: "Government Enterprise Solution",
      role: "Lead Project Manager",
      impact: "Streamlined benefit processing for 40M+ participants, reducing processing time by 60%.",
      desc: "Large-scale government integration system for social security benefit management. Coordinated with multiple stakeholders, ensured regulatory compliance, and delivered complex enterprise features with zero critical incidents during rollout.",
      tags: ["React", "Next.js", "TypeScript", "Java Spring", "Oracle DB", "Kubernetes", "Figma"],
      image: "/aset/project-bpjstk.svg",
      url: "https://www.bpjsketenagakerjaan.go.id/"
    }
  ];

  return (
    <section id="portfolio" className="py-8 lg:py-12 px-6 relative overflow-hidden">
      <div className="max-w-7xl xl:max-w-6xl 2xl:max-w-7xl mx-auto relative z-10 px-6 xl:px-8 2xl:px-12">
        <div className="mb-6 lg:mb-10 2xl:mb-14">
          <p className="text-[12px] font-semibold text-[#4a7c8c] mb-3 lg:mb-4 tracking-[0.14em]">Professional portfolio</p>
          <h2 className="text-4xl lg:text-7xl 2xl:text-8xl font-black text-[#1a2e35] tracking-tighter leading-[0.9]">
            Detailed <span className="text-gray-300 italic font-serif">Case Studies</span>
          </h2>
        </div>

        <div className="space-y-6 lg:space-y-8 2xl:space-y-10">
          {projects.map((project, idx) => (
            <PortfolioItem key={idx} project={project} idx={idx} />
          ))}
        </div>

        <div className="mt-12 flex justify-center border-t border-gray-100 pt-10">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-[#1a2e35] text-white px-12 py-5 rounded-full text-[13px] font-semibold tracking-[0.08em] hover:bg-[#4a7c8c] transition-all shadow-2xl"
          >
            Explore More on GitHub
            <Github size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const phoneNumber = "089675080104";
  const whatsappPhone = "6289675080104";
  const emailAddress = "okta.wahyudi86@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/oktawahyudi";
  const mapsUrl = "https://maps.app.goo.gl/NzfNktnYNYvynCtx5";
  const whatsAppMessage = encodeURIComponent("Halo Okta! 👋\nSaya ingin berdiskusi tentang project dan peluang kolaborasi.");
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${whatsAppMessage}`;

  return (
    <section id="contact" className="py-16 lg:py-28 px-6 xl:px-8 2xl:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <p className="text-[12px] font-semibold text-[#4a7c8c] mb-3 tracking-[0.14em]">Get in touch</p>
          <h2 className="text-5xl lg:text-7xl font-black text-[#1a2e35] tracking-tight leading-[1] mb-6">
            Let&apos;s talk about your next project.
          </h2>
          <p className="text-[#1f2937]/70 text-[15px] leading-relaxed max-w-lg mb-8">
            If you need a seasoned IT Project Manager to coordinate delivery, align stakeholders, and drive reliable outcomes, shoot a message via WhatsApp—no forms, no waiting. I&apos;m ready to sync schedules and get started.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#f1f5f9] flex items-center justify-center text-[#4a7c8c] shadow">
                <Globe size={18} />
              </div>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[13px] font-semibold tracking-[0.04em] text-[#0d1f2b] hover:text-[#4a7c8c] transition-colors"
              >
                Sleman, Yogyakarta
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#f1f5f9] flex items-center justify-center text-[#4a7c8c] shadow">
                <Linkedin size={18} />
              </div>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[13px] font-semibold tracking-[0.04em] text-[#0d1f2b] hover:text-[#4a7c8c] transition-colors"
              >
                linkedin.com/in/oktawahyudi
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#f1f5f9] flex items-center justify-center text-[#4a7c8c] shadow">
                <Mail size={18} />
              </div>
              <a
                href={`mailto:${emailAddress}`}
                className="text-[13px] font-semibold tracking-[0.04em] text-[#0d1f2b] hover:text-[#4a7c8c] transition-colors"
              >
                {emailAddress}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#f1f5f9] flex items-center justify-center text-[#4a7c8c] shadow">
                <Phone size={18} />
              </div>
              <a
                href={`tel:${phoneNumber}`}
                className="text-[13px] font-semibold tracking-[0.04em] text-[#0d1f2b] hover:text-[#4a7c8c] transition-colors"
              >
                {phoneNumber}
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white/60 backdrop-blur-md border border-white/50 rounded-[32px] p-8 shadow-2xl">
          <p className="text-[12px] font-semibold tracking-[0.12em] text-[#0fa3b1] mb-4">WhatsApp</p>
          <h3 className="text-3xl font-black text-[#0a1620] mb-6">Chat with me directly</h3>
          <p className="text-[#1f2937]/80 leading-relaxed mb-8">
            Tap the button below, share a short brief, and I&apos;ll reply within a few hours to coordinate a quick call.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#2dd4bf] via-[#14b8a6] to-[#0ea5e9] text-white px-8 py-4 text-[13px] font-semibold tracking-[0.08em] shadow-[0_25px_45px_rgba(15,23,42,0.35)] transition-transform hover:-translate-y-0.5"
          >
            Message on WhatsApp
            <ArrowUpRight size={16} />
          </a>
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      whileHover={{ y: -8, shadow: "0 20px 40px rgba(15, 163, 177, 0.2)" }}
      className="min-h-[320px] min-w-[300px] lg:min-w-[340px] max-w-[370px] bg-white/50 backdrop-blur-md p-8 rounded-[18px] border border-[#0fa3b1]/20 shadow-sm hover:shadow-xl hover:border-[#0fa3b1]/40 transition-all duration-500 flex flex-col justify-between group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0fa3b1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#0fa3b1" className="text-[#0fa3b1]" />)}
        </div>
        <p className="text-[13px] text-[#0d1f2b]/70 italic leading-relaxed font-medium line-clamp-5">
          "{t.text}"
        </p>
      </div>
      
      <div className="relative z-10 flex items-center gap-3 pt-4 border-t border-[#0fa3b1]/10">
        <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0">
          {!isLoaded && <Skeleton className="absolute inset-0 w-full h-full rounded-none" />}
          <img 
            src={t.image} 
            alt={t.name} 
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
            className={`w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} 
            referrerPolicy="no-referrer" 
          />
        </div>
        <div className="min-w-0">
          <h4 className="font-black text-[13px] text-[#0d1f2b] tracking-tight truncate">{t.name}</h4>
          <p className="text-[11px] text-[#0fa3b1]/70 font-semibold tracking-[0.04em] truncate">{t.company}</p>
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
      text: "Okta's ability to manage complex software deliveries is exceptional. A true professional who delivers results."
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

  const carouselRef = React.useRef<HTMLDivElement>(null);
  const isDraggingRef = React.useRef(false);
  const dragStartX = React.useRef(0);
  const scrollStart = React.useRef(0);
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);

  React.useEffect(() => {
    if (isDragging) return;
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % testimonials.length);
    }, 3600);
    return () => clearInterval(interval);
  }, [testimonials.length, isDragging]);

  React.useEffect(() => {
    if (!carouselRef.current) return;
    const target = carouselRef.current.children[activeSlide] as HTMLElement | undefined;
    if (!target) return;
    const offset = target.offsetLeft - (carouselRef.current.clientWidth - target.offsetWidth) / 2;
    carouselRef.current.scrollTo({
      left: Math.max(0, offset),
      behavior: 'smooth'
    });
  }, [activeSlide, testimonials.length]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    isDraggingRef.current = true;
    setIsDragging(true);
    dragStartX.current = event.clientX;
    scrollStart.current = carouselRef.current.scrollLeft;
    carouselRef.current.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !carouselRef.current) return;
    const delta = event.clientX - dragStartX.current;
    carouselRef.current.scrollLeft = scrollStart.current - delta;
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);
    try {
      carouselRef.current.releasePointerCapture(event.pointerId);
    } catch (error) {
      // ignore if capture already released
    }
    const scrollCenter = carouselRef.current.scrollLeft + carouselRef.current.clientWidth / 2;
    const items = Array.from(carouselRef.current.children) as HTMLElement[];
    const closest = items.reduce((closestIndex, item, index) => {
      const center = item.offsetLeft + item.offsetWidth / 2;
      const currentDiff = Math.abs(scrollCenter - center);
      const bestItem = items[closestIndex];
      const bestCenter = bestItem ? bestItem.offsetLeft + bestItem.offsetWidth / 2 : 0;
      const bestDiff = Math.abs(scrollCenter - bestCenter);
      return currentDiff < bestDiff ? index : closestIndex;
    }, activeSlide);
    setActiveSlide(closest);
  };

  return (
    <section id="feedback" className="py-16 lg:py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 lg:mb-16">
          <p className="text-[12px] font-semibold text-[#0fa3b1] mb-3 tracking-[0.14em]">Feedback</p>
          <h2 className="text-5xl lg:text-7xl font-black text-[#0d1f2b] tracking-tighter leading-[0.9]">
            User <span className="text-[#0fa3b1]">Feedback</span>
          </h2>
          <p className="text-[13px] text-[#0fa3b1]/70 mt-4 font-medium">Testimoni dari atasan dan klien selama pengembangan project.</p>
        </div>

        <div
          ref={carouselRef}
          className={`flex gap-6 overflow-x-auto pb-6 no-scrollbar ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={(event) => {
            if (isDraggingRef.current && carouselRef.current) {
              handlePointerUp(event);
            }
          }}
        >
          {testimonials.map((t, idx) => (
            <TestimonialItem key={idx} t={t} idx={idx} />
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${activeSlide === idx ? 'bg-[#0f172a]' : 'bg-[#d1d5db]'}`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const LEGAL_CONTENT = {
  privacy: {
    title: "Privacy Policy",
    description: "Informasi ini menjelaskan bagaimana data kontak dan interaksi di website portfolio Okta Wahyudi digunakan secara wajar untuk kebutuhan komunikasi profesional.",
    sections: [
      {
        heading: "Informasi yang dikumpulkan",
        body: "Website ini dapat menampilkan dan memproses informasi kontak profesional seperti nama, alamat email, nomor telepon, tautan LinkedIn, serta pesan yang dikirim melalui tautan WhatsApp atau email. Data tersebut hanya digunakan untuk kebutuhan komunikasi, rekrutmen, dan peluang kolaborasi profesional.",
      },
      {
        heading: "Cara penggunaan data",
        body: "Informasi yang diterima digunakan untuk merespons pertanyaan, menjadwalkan diskusi, menindaklanjuti peluang kerja, serta membangun komunikasi profesional yang relevan. Data tidak digunakan untuk tujuan yang tidak berhubungan dengan kebutuhan profesional atau portfolio ini.",
      },
      {
        heading: "Penyimpanan dan keamanan",
        body: "Pemilik website berupaya menjaga keamanan informasi yang diterima dengan langkah yang wajar dan proporsional. Meskipun demikian, pengiriman data melalui internet tetap memiliki risiko umum yang tidak selalu dapat dihindari sepenuhnya.",
      },
      {
        heading: "Tautan pihak ketiga",
        body: "Website ini dapat mengarahkan pengunjung ke layanan pihak ketiga seperti LinkedIn, WhatsApp, atau email client. Setiap layanan tersebut memiliki kebijakan privasi masing-masing yang berada di luar kendali website ini.",
      },
      {
        heading: "Kontak",
        body: "Untuk permintaan koreksi, pembaruan, atau pertanyaan terkait informasi pribadi, silakan hubungi Okta Wahyudi melalui email di okta.wahyudi86@gmail.com atau LinkedIn di linkedin.com/in/oktawahyudi.",
      },
    ],
  },
  terms: {
    title: "Terms & Conditions",
    description: "Halaman ini menjelaskan ketentuan penggunaan website portfolio Okta Wahyudi untuk kebutuhan profesional, rekrutmen, dan komunikasi kerja.",
    sections: [
      {
        heading: "Penggunaan website",
        body: "Website ini disediakan sebagai portfolio profesional untuk menampilkan pengalaman kerja, project, keahlian, dan informasi kontak Okta Wahyudi. Pengunjung diperbolehkan menggunakan informasi di dalamnya untuk keperluan evaluasi kandidat, rekrutmen, networking, atau peluang kerja yang relevan.",
      },
      {
        heading: "Hak atas konten",
        body: "Seluruh konten, termasuk teks, tata letak, deskripsi project, dan visual presentasi yang ada di website ini, digunakan untuk kebutuhan personal branding dan dokumentasi profesional. Penggunaan ulang, reproduksi, atau distribusi konten secara penuh untuk kepentingan lain sebaiknya dilakukan dengan izin terlebih dahulu.",
      },
      {
        heading: "Akurasi informasi",
        body: "Pemilik website berupaya menjaga seluruh informasi tetap akurat, relevan, dan mutakhir. Namun, penyesuaian terhadap pengalaman kerja, project, kontak, dan materi portfolio dapat dilakukan sewaktu-waktu tanpa pemberitahuan terlebih dahulu.",
      },
      {
        heading: "Batas tanggung jawab",
        body: "Website ini disediakan sebagaimana adanya untuk kebutuhan presentasi profesional. Pemilik website tidak bertanggung jawab atas keputusan bisnis, rekrutmen, atau penggunaan lain yang diambil pihak ketiga hanya berdasarkan materi yang tersedia di website ini tanpa proses verifikasi lanjutan.",
      },
      {
        heading: "Hubungi pemilik website",
        body: "Jika Anda membutuhkan klarifikasi terkait pengalaman kerja, project, atau penggunaan konten portfolio ini, silakan hubungi Okta Wahyudi melalui email okta.wahyudi86@gmail.com atau nomor 089675080104.",
      },
    ],
  },
} as const;

const LegalPage = ({
  type,
  onRouteChange,
}: {
  type: keyof typeof LEGAL_CONTENT;
  onRouteChange: (path: string) => void;
}) => {
  const content = LEGAL_CONTENT[type];

  return (
    <div className="min-h-screen bg-[#f8fafc] bg-[radial-gradient(circle_at_top_right,_#f1f5f9_0%,_transparent_40%),_radial-gradient(circle_at_bottom_left,_#f1f5f9_0%,_transparent_40%)] text-[#1a2e35]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-10 lg:py-14">
        <button
          type="button"
          onClick={() => onRouteChange('/')}
          className="inline-flex items-center gap-2 rounded-full border border-[#d8e4eb] bg-white/80 px-5 py-2.5 text-[14px] font-semibold tracking-[0.04em] text-[#173041] shadow-sm transition hover:border-[#4a7c8c]/40 hover:text-[#4a7c8c]"
        >
          Back to Home
        </button>

        <div className="mt-8 rounded-[32px] border border-white/60 bg-white/75 p-8 lg:p-12 shadow-[0_28px_70px_rgba(15,23,42,0.10)] backdrop-blur-md">
          <p className="text-[12px] font-semibold tracking-[0.14em] text-[#4a7c8c]">
            Legal Information
          </p>
          <h1 className="mt-4 text-4xl lg:text-6xl font-black tracking-tight text-[#102635]">
            {content.title}
          </h1>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-[#526675]">
            {content.description}
          </p>

          <div className="mt-10 space-y-8">
            {content.sections.map((section) => (
              <section key={section.heading} className="rounded-[24px] border border-[#e3edf3] bg-[#fbfdff] p-6 lg:p-8">
                <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-[#142b39]">
                  {section.heading}
                </h2>
                <p className="mt-3 text-[16px] leading-[1.85] text-[#546978]">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 text-[14px] font-semibold text-[#4a7c8c]">
          <button type="button" onClick={() => onRouteChange('/privacy')} className="hover:text-[#173041] transition-colors">
            Privacy Policy
          </button>
          <button type="button" onClick={() => onRouteChange('/terms')} className="hover:text-[#173041] transition-colors">
            Terms & Conditions
          </button>
          <a href="mailto:okta.wahyudi86@gmail.com" className="hover:text-[#173041] transition-colors">
            okta.wahyudi86@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

const Footer = ({ onRouteChange }: { onRouteChange: (path: string) => void }) => {
  const navPrimary = ['Home', 'Journey', 'Skills', 'Portfolio', 'Contact'];
  const quickLinks = [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms & Conditions', path: '/terms' },
  ];

  return (
    <footer className="px-6 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#070b10] via-[#0f172a] to-[#10233a] text-white shadow-[0_40px_90px_rgba(2,17,33,0.8)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#3ab5c7_10%,_transparent_60%)] opacity-40 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#102333_0%,_transparent_60%)] opacity-70" />
          <div className="relative z-10 px-8 py-10 lg:px-12 lg:py-14 space-y-10">
            <div>
              <div className="text-3xl lg:text-4xl font-black tracking-tight">OKTA.</div>
              <p className="text-sm text-white/70 max-w-xl mt-2 leading-relaxed">
                Delivering modern software programs with discipline, clarity, and a human touch.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
              <div className="space-y-3">
                <p className="text-[11px] font-semibold tracking-[0.12em] text-[#6fc7d7]">Navigation</p>
                <div className="space-y-2 text-white/70">
                  {navPrimary.map(label => (
                    <a key={label} href={`#${label.toLowerCase()}`} className="block hover:text-white transition-colors">
                      {label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-[11px] font-semibold tracking-[0.12em] text-[#6fc7d7]">Contact</p>
                <a
                  href="https://maps.app.goo.gl/NzfNktnYNYvynCtx5"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Sleman, Yogyakarta
                </a>
                <a href="mailto:okta.wahyudi86@gmail.com" className="block text-white/80 hover:text-white transition-colors">okta.wahyudi86@gmail.com</a>
                <a href="tel:089675080104" className="block text-white/80 hover:text-white transition-colors">089675080104</a>
              </div>
              <div className="space-y-3">
                <p className="text-[11px] font-semibold tracking-[0.12em] text-[#6fc7d7]">Quick links</p>
                <div className="space-y-2 text-white/70">
                  {quickLinks.map(link => (
                    <button
                      key={link.path}
                      type="button"
                      onClick={() => onRouteChange(link.path)}
                      className="block text-left hover:text-white transition-colors"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-[11px] font-semibold tracking-[0.12em] text-[#6fc7d7]">Follow</p>
                <div className="flex gap-4">
                  {[
                    { Icon: Mail, href: "mailto:okta.wahyudi86@gmail.com", label: "Email" },
                    { Icon: MessageCircle, href: "https://wa.me/6289675080104", label: "WhatsApp" },
                    { Icon: Linkedin, href: "https://www.linkedin.com/in/oktawahyudi", label: "LinkedIn" },
                    { Icon: Github, href: "https://github.com/oktawahyu", label: "GitHub" },
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                      aria-label={label}
                      className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/80 hover:bg-white hover:text-[#0c202d] transition"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
                <p className="text-[11px] text-white/60 mt-3">Thank you for exploring Okta.</p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4 text-[11px] tracking-[0.06em] text-white/50">
              <p>© 2026 Okta. All rights reserved.</p>
              <div className="flex gap-6">
                <button type="button" onClick={() => onRouteChange('/privacy')} className="hover:text-white transition">Privacy</button>
                <button type="button" onClick={() => onRouteChange('/terms')} className="hover:text-white transition">Terms</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [pathname, setPathname] = React.useState(() => window.location.pathname);
  const [isInitialLoading, setIsInitialLoading] = React.useState(true);
  const [isSectionLoading, setIsSectionLoading] = React.useState(false);
  const loadingTimeoutRef = React.useRef<number | null>(null);

  const handleRouteChange = React.useCallback((path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
      setPathname(path);
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else if (path === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handleNavigate = React.useCallback((href: string) => {
    if (!href.startsWith('#')) return;

    const sectionId = href.replace('#', '');
    const target = document.getElementById(sectionId);
    if (!target) return;

    if (loadingTimeoutRef.current) {
      window.clearTimeout(loadingTimeoutRef.current);
    }

    setIsSectionLoading(true);
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

    loadingTimeoutRef.current = window.setTimeout(() => {
      setIsSectionLoading(false);
      loadingTimeoutRef.current = null;
    }, 700);
  }, []);

  React.useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  React.useEffect(() => {
    if (pathname === '/privacy') {
      document.title = 'Privacy Policy | Okta Wahyudi';
      return;
    }

    if (pathname === '/terms') {
      document.title = 'Terms & Conditions | Okta Wahyudi';
      return;
    }

    document.title = 'Okta Wahyudi | Project Manager';
  }, [pathname]);

  React.useEffect(() => {
    const startedAt = Date.now();
    let releaseTimeout: number | null = null;

    const finishInitialLoading = () => {
      const elapsed = Date.now() - startedAt;
      const remaining = Math.max(0, 900 - elapsed);

      releaseTimeout = window.setTimeout(() => {
        setIsInitialLoading(false);
      }, remaining);
    };

    if (document.readyState === 'complete') {
      finishInitialLoading();
    } else {
      window.addEventListener('load', finishInitialLoading, { once: true });
    }

    return () => {
      window.removeEventListener('load', finishInitialLoading);
      if (releaseTimeout) {
        window.clearTimeout(releaseTimeout);
      }
    };
  }, []);

  React.useEffect(() => {
    if (isInitialLoading) {
      document.body.removeAttribute('data-app-ready');
      return;
    }

    document.body.setAttribute('data-app-ready', 'true');
    const bootSkeleton = document.getElementById('boot-skeleton');

    if (bootSkeleton) {
      bootSkeleton.classList.add('boot-skeleton--hidden');
      const cleanup = window.setTimeout(() => {
        bootSkeleton.remove();
      }, 320);

      return () => window.clearTimeout(cleanup);
    }
  }, [isInitialLoading]);

  React.useEffect(() => {
    return () => {
      if (loadingTimeoutRef.current) {
        window.clearTimeout(loadingTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen pb-24 lg:pb-0 bg-[#f8fafc] bg-[radial-gradient(circle_at_top_right,_#f1f5f9_0%,_transparent_40%),_radial-gradient(circle_at_bottom_left,_#f1f5f9_0%,_transparent_40%)] font-sans selection:bg-[#4a7c8c] selection:text-white antialiased relative overflow-hidden">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none -z-50 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]"></div>

      {pathname === '/privacy' ? (
        <LegalPage type="privacy" onRouteChange={handleRouteChange} />
      ) : pathname === '/terms' ? (
        <LegalPage type="terms" onRouteChange={handleRouteChange} />
      ) : (
        <>
          <AnimatePresence>
            {isSectionLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22 }}
              >
                <SectionTransitionSkeleton />
              </motion.div>
            )}
          </AnimatePresence>

          <Navbar onNavigate={handleNavigate} />
          <Hero />
          <Journey />
          <Skills />
          <SDLCFlow />
          <Portfolio />
          <Contact />
          <Testimonials />
          <Footer onRouteChange={handleRouteChange} />
          <style>{`
            section[id] {
              padding-top: clamp(40px, 4vw, 70px) !important;
              padding-bottom: clamp(40px, 4vw, 70px) !important;
            }
            section[id] + section[id] {
              margin-top: 0;
            }
            @keyframes gradient-slider {
              0% { background-position: 0% 50%; }
              100% { background-position: 200% 50%; }
            }
          `}</style>
          <OktaAI />
        </>
      )}
    </div>
  );
}

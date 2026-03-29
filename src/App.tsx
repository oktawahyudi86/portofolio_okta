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
  Phone,
  Send,
  Loader2,
  ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const LazyOktaAI = React.lazy(() => import('./OktaAI'));

type FeatureType = 'recruitment' | 'analysis' | 'brd';
const featureBackgroundMap: Record<FeatureType, string> = {
  recruitment: 'accent-gradient-bg',
  analysis: 'accent-gradient-bg',
  brd: 'accent-gradient-bg'
};

const FeatureIcon = ({ type }: { type: FeatureType }) => (
  <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-[18px] ${featureBackgroundMap[type]} border border-white/40 flex items-center justify-center`}>
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
const stageBackgroundMap: Record<StageVariant, string> = {
  grooming: 'accent-gradient-bg',
  sizing: 'accent-gradient-bg',
  planning: 'accent-gradient-bg',
  dev: 'accent-gradient-bg',
  review: 'accent-gradient-bg',
  retrospective: 'accent-gradient-bg'
};

const StageIcon = ({ variant, className = '' }: { variant: StageVariant; className?: string }) => (
  <div className={`w-14 h-14 rounded-[18px] ${stageBackgroundMap[variant]} border border-white/40 flex items-center justify-center ${className}`}>
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
const reportingBackgroundMap: Record<ReportingVariant, string> = {
  user: 'accent-gradient-bg',
  cLevel: 'accent-gradient-bg'
};

const ReportingIcon = ({ variant }: { variant: ReportingVariant }) => (
  <div className={`w-12 h-12 rounded-[14px] ${reportingBackgroundMap[variant]} border border-white/40 flex items-center justify-center`}>
    <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {variant === 'user' ? (
        <>
          <path d="M8 10H28" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M8 18H22" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M8 26H18" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="26" cy="18" r="3" stroke="white" strokeWidth="2.2" />
          <path d="M26 12V9" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M31 18H34" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
        </>
      ) : (
        <>
          <path d="M8 28V12" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M18 28V8" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M28 28V15" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M8 28H30" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M8 18L18 12L28 15" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="18" cy="12" r="2.5" fill="white" />
        </>
      )}
    </svg>
  </div>
);

const LegacyOktaAI = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [showWelcome, setShowWelcome] = React.useState(true);
  const [messages, setMessages] = React.useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: "Halo! Saya OktaAI, asisten virtual Okta. Ada yang ingin kamu tanyakan seputar pengalaman atau project Okta? ✨" }
  ]);
  const [input, setInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

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

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.message || `API error: ${response.status}`);
      }

      const aiText = data.text || "Maaf ya, OktaAI lagi istirahat sebentar. Coba lagi nanti? ✨";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error("[v0] AI Error:", error);
      const fallbackText =
        error instanceof Error
          ? error.message
          : "Aduh, sinyalnya lagi main petak umpet. Coba lagi ya! 🔌";
      setMessages(prev => [...prev, { role: 'ai', text: fallbackText }]);
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
            className={`fixed inset-0 lg:inset-auto ${position === 'bottom' ? 'lg:bottom-28' : 'lg:top-28'} lg:right-8 w-full h-full lg:w-[400px] lg:h-[600px] bg-white/95 backdrop-blur-3xl lg:rounded-[28px] border border-white/30 shadow-[0_10px_32px_rgba(15,23,42,0.18)] z-[100] flex flex-col overflow-hidden`}
          >
            {/* Background Sparkles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
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
              <div className="p-5 lg:p-6 pt-12 lg:pt-7 bg-gradient-to-b from-[#edf4f6] to-white text-[#0f1724] flex items-center justify-between relative border-b border-slate-200">
                <div className="absolute inset-x-0 top-0 h-24 bg-white/60 blur-3xl opacity-60 pointer-events-none"></div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-[16px] bg-white/80 backdrop-blur-sm flex items-center justify-center border border-slate-200 shadow-sm group overflow-hidden relative">
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
                      animate={{ scale: [1, 1.05, 1], opacity: [0.25, 0.55, 0.25] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute inset-0 bg-gradient-to-tr from-white/60 to-transparent"
                    />
                </div>
                <div>
                    <h4 className="text-[17px] font-black tracking-tight flex items-center gap-2">
                    OktaAI <span className="accent-gradient-bg w-2.5 h-2.5 rounded-full animate-pulse shadow-[0_0_14px_rgba(114,179,154,0.42)]"></span>
                  </h4>
                    <p className="text-[12px] text-slate-500 font-semibold tracking-[0.08em]">Asisten pintar & sigap ✨</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center transition-all relative z-10 border border-white/60"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 no-scrollbar bg-white relative z-10">
              {messages.length === 1 && (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-32 h-32 bg-white rounded-[24px] flex items-center justify-center mb-6 border border-slate-200 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/60 to-transparent"></div>
                    <Cpu size={56} className="text-[#0f1724] relative z-10 group-hover:scale-110 transition-transform duration-500" />
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                      className="absolute inset-0 border-2 border-dashed border-slate-200 rounded-[20px] m-2"
                    />
                  </motion.div>
                      <h5 className="text-[16px] font-black text-[#0f1724] mb-2 tracking-[0.04em]">Halo! Aku OktaAI 👋</h5>
                  <p className="text-[12px] font-medium text-slate-500 max-w-[220px] leading-relaxed">Ada yang bisa aku bantu seputar portfolio Okta? ✨</p>
                </div>
              )}

              {messages.map((m, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-[22px] text-base leading-relaxed font-medium relative group ${
                    m.role === 'user' 
                      ? 'bg-[#0f1724] text-white rounded-tr-none shadow-[0_8px_24px_rgba(15,23,42,0.18)]' 
                      : 'bg-[#f6f7fb] text-[#0f1724] border border-slate-200 rounded-tl-none shadow-sm'
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
                  <div className="bg-white p-4 rounded-[20px] rounded-tl-none border border-slate-200 shadow-sm flex gap-1.5 items-center">
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6 }} className="accent-gradient-bg w-2 h-2 rounded-full"></motion.div>
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="accent-gradient-bg w-2 h-2 rounded-full"></motion.div>
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="accent-gradient-bg w-2 h-2 rounded-full"></motion.div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-5 lg:p-6 pb-8 bg-white border-t border-slate-200 relative z-10">
              <div className="relative flex items-center gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Tanya apa saja..."
                  className="flex-1 bg-white border border-slate-200 outline-none px-5 md:px-6 py-3.5 md:py-4 rounded-[18px] text-base font-medium placeholder:text-slate-400 focus:ring-2 focus:ring-[#6fc7d7]/30 transition-all"
                />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSend()}
                  disabled={isLoading || !input.trim()}
                  className="accent-gradient-bg w-12 h-12 md:w-14 md:h-14 rounded-[16px] flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_10px_20px_rgba(114,179,154,0.18)]"
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
  <div className="fixed inset-0 z-[90] bg-[#f4f6fb]">
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
  const cvUrl = '/cv_oktawahyudi/';

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

  const mobileMenuItems = [
    { name: 'Home', href: '#home', icon: <Home size={20} /> },
    { name: 'Journey', href: '#journey', icon: <Briefcase size={20} /> },
    { name: 'Skills', href: '#skills', icon: <Wand2 size={20} /> },
    { name: 'Portfolio', href: '#portfolio', icon: <FolderKanban size={20} /> },
    {
      name: 'View CV',
      mobileLabel: 'CV',
      href: cvUrl,
      icon: <Download size={20} />,
      action: () => window.open(cvUrl, '_blank', 'noopener,noreferrer'),
    },
  ];

  return (
    <>
      <div className="hidden lg:block fixed top-5 left-0 w-full z-50 px-6 xl:px-8 2xl:px-12">
        <div className="max-w-7xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
          <nav className="navbar-glass rounded-[18px] px-4 py-2">
            <div className="flex items-center justify-between gap-6">
              <div className="flex items-center gap-7">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="text-[1.45rem] font-black tracking-tight text-[#0c1a24] leading-none cursor-default"
                >
                  OKTA<span className="accent-gradient-text">.</span>
                </motion.div>

                <div className="navbar-pill hidden lg:flex items-center gap-1 rounded-[14px] p-1">
                  {menuItems.slice(0, 4).map((item, idx) => (
                    <motion.a
                      key={idx}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(item.href);
                      }}
                      whileHover={{ y: -1 }}
                      className={`flex items-center gap-2 rounded-[10px] px-3 py-2 text-[12px] font-semibold transition-all ${
                        activeSection === item.href.replace('#', '')
                          ? 'bg-white/95 text-[#0c1a24] shadow-[0_6px_14px_rgba(15,32,39,0.08)]'
                          : 'text-[#6b7280] hover:text-[#0c1a24]'
                      }`}
                    >
                      <span className={activeSection === item.href.replace('#', '') ? 'text-[#0fa3b1]' : 'text-[#b8c1cb]'}>
                        {React.cloneElement(item.icon, { size: 16 })}
                      </span>
                      {item.name}
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <motion.a
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-[12px] border border-[rgba(114,179,154,0.28)] bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(114,179,154,0.18))] px-4 py-2 text-[12px] font-semibold text-[#17333b] shadow-[0_12px_28px_rgba(15,32,39,0.09)] backdrop-blur-md transition-all hover:border-[rgba(114,179,154,0.4)] hover:bg-[linear-gradient(135deg,rgba(255,255,255,1),rgba(114,179,154,0.24))] hover:shadow-[0_16px_32px_rgba(15,32,39,0.11)]"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(15,32,39,0.08),rgba(114,179,154,0.26))]">
                    <Download size={14} className="text-[#21424d]" />
                  </span>
                  <span className="text-[#1a3640]">View CV</span>
                </motion.a>

                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={openChat}
                  className="accent-gradient-bg inline-flex items-center gap-2 rounded-[12px] border border-[rgba(255,255,255,0.34)] px-4 py-2 text-[12px] font-semibold text-white shadow-[0_12px_28px_rgba(15,32,39,0.14)] transition-all hover:brightness-[1.03]"
                >
                  <MessageCircle size={15} className="text-white/90" />
                  <span className="text-white">Talk With Okta AI</span>
                </motion.button>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Bottom Navigation - Mobile Only */}
      <div className="mobile-bottom-nav lg:hidden fixed bottom-0 left-0 w-full z-50 px-3 pb-3">
        <nav className="mobile-bottom-nav-inner navbar-glass mx-auto max-w-md rounded-[20px] px-2.5 py-2.5">
          <div className="flex items-center justify-between gap-1">
            {mobileMenuItems.map((item, idx) => (
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
                className={`mobile-bottom-nav-link relative flex min-w-0 flex-1 flex-col items-center gap-1 rounded-[12px] px-1.5 py-2.5 transition-colors ${
                  activeSection === item.href.replace('#', '')
                    ? 'bg-white/90 text-[#0f1724]'
                    : 'text-[#0f1724]/70 hover:text-[#0f1724]'
                }`}
              >
                {activeSection === item.href.replace('#', '') && item.name !== 'Chat AI' && (
                  <motion.div
                    layoutId="activeNav"
                    className="accent-gradient-line absolute inset-x-3 bottom-0 h-[3px] rounded-full"
                  />
                )}
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className={`${activeSection === item.href.replace('#', '') ? 'text-[#6fc7d7]' : 'text-[#94a3b8]'} transition-colors`}
                >
                  {React.cloneElement(item.icon, { size: 18 })}
                </motion.div>
                <span className={`mobile-bottom-nav-label text-[9px] font-semibold leading-none transition-colors ${activeSection === item.href.replace('#', '') ? 'text-[#0f1724]' : 'text-[#64748b]'}`}>
                  {'mobileLabel' in item ? item.mobileLabel : item.name}
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
  <div className={`animate-pulse bg-gray-200 rounded-[18px] ${className}`} />
);

const heroStats = [
  { value: '3+', label: 'Years in delivery leadership' },
  { value: '30+', label: 'Software projects delivered' },
];

const Hero = () => {

  return (
    <section id="home" className="mobile-hero-shell section-shell section-tone-hero pt-12 sm:pt-16 lg:pt-[16rem] pb-10 lg:pb-20 px-4 sm:px-5 md:px-6 xl:px-8 2xl:px-12 relative overflow-hidden lg:overflow-visible">
      <div className="mobile-hero-grid section-inner max-w-7xl xl:max-w-6xl 2xl:max-w-7xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20 items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="lg:hidden mb-6"
        >
          <div
            onClick={() => window.dispatchEvent(new CustomEvent('openOktaAI'))}
            className="bg-white rounded-[16px] border border-[#e3e8ef] shadow-sm p-1.5 flex items-center gap-3 cursor-pointer active:scale-[0.98] transition-all"
          >
            <div className="accent-gradient-soft w-10 h-10 rounded-[14px] flex items-center justify-center text-[#0fa3b1]">
              <MessageCircle size={18} />
            </div>
            <p className="text-[12px] font-bold text-[#5f6670]">Talk With Okta AI</p>
          </div>
        </motion.div>

        <div className="mobile-hero-badge accent-gradient-soft inline-block mt-6 lg:mt-14 px-4 py-1.5 rounded-full font-semibold mb-5 tracking-[0.08em] text-[11px] lg:text-[13px] border border-[#0fa3b1]/20">
          <span className="accent-gradient-text">IT Project Manager</span>
        </div>
        <h1 className="mobile-hero-title copy-balance max-w-[11ch] text-[clamp(2.35rem,11vw,4.4rem)] font-black text-[#0c1a24] leading-[0.96] mb-4 tracking-[-0.03em]">
          <span className="block">Leading software</span>
          <span className="accent-gradient-text block pb-1">delivery with clarity</span>
          <span className="block">
            and <span className="accent-gradient-text">stakeholder trust.</span>
          </span>
        </h1>

        <div className="mobile-hero-copy copy-measure mb-4 max-w-[520px] border-l-2 border-[#0fa3b1]/35 pl-4 sm:pl-5">
          <p className="text-[11px] font-semibold tracking-[0.12em] uppercase mb-2">
            <span className="accent-gradient-text">What I bring</span>
          </p>
          <p className="copy-pretty text-[14px] sm:text-[15px] text-[#0c1a24] leading-relaxed font-semibold mb-2">
            Hands-on project coordination for product, enterprise, and SaaS delivery.
          </p>
          <ul className="space-y-1.5 text-[13px] sm:text-[14px] text-[#5f6670] leading-relaxed">
            {[
              'Sprint planning and release coordination',
              'Stakeholder, team, and delivery alignment',
              'Enterprise, SaaS, and digital product execution',
            ].map((item) => (
              <li key={item} className="copy-pretty">{item}</li>
            ))}
          </ul>
        </div>

        <div className="mobile-hero-stats grid grid-cols-2 gap-4 sm:gap-6 border-t border-[#e3e8ef] pt-5 mb-6 max-w-[520px]">
          {heroStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="text-[2rem] sm:text-4xl font-black text-[#0c1a24]">{stat.value}</span>
              <p className="copy-pretty mx-auto max-w-[12ch] text-[10px] sm:text-[12px] text-[#5f6670] tracking-[0.08em] uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full lg:-mt-4 flex flex-col items-center"
      >
        <div className="mobile-hero-visual relative mx-auto w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[470px] xl:max-w-[500px] aspect-[0.92/1]">
          <div className="absolute inset-x-[4%] top-[14%] bottom-[7%] rounded-[22px] bg-[radial-gradient(circle_at_72%_85%,rgba(114,179,154,0.95),transparent_34%),linear-gradient(180deg,#112a31_0%,#1e3b40_58%,#78bea1_100%)] shadow-[0_26px_56px_rgba(15,32,39,0.18)]" />
          <div className="absolute inset-x-[9%] top-[-4%] bottom-[7%] z-10 flex items-end justify-center">
            <img 
              src="/aset/profil-hero-new.webp" 
              alt="Okta" 
              loading="eager"
              decoding="async"
              // @ts-ignore
              fetchPriority="high"
              className="h-full w-auto max-w-none object-contain object-bottom drop-shadow-[0_18px_32px_rgba(15,32,39,0.16)]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="pointer-events-none absolute inset-x-[4%] bottom-[7%] h-[14%] rounded-b-[22px] bg-[linear-gradient(180deg,rgba(17,42,49,0)_0%,rgba(30,59,64,0.08)_46%,rgba(120,190,161,0.34)_100%)] z-20" />

          <div className="absolute left-[1%] bottom-[14%] z-30 rounded-[14px] border border-[rgba(30,59,64,0.18)] bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(220,243,234,0.92))] px-3 py-2 shadow-[0_14px_26px_rgba(15,32,39,0.09)] backdrop-blur-md sm:left-[-9%] sm:bottom-[17%] sm:px-4 sm:py-3">
            <p className="text-[11px] font-semibold tracking-[0.04em] text-[#17363d] sm:text-[12px]">
              B.Sc. in Informatics
            </p>
          </div>

          <div className="absolute right-[1%] top-[52%] z-30 flex max-w-[150px] items-center gap-2 rounded-[14px] border border-[rgba(114,179,154,0.24)] bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(114,179,154,0.10))] px-3 py-2 shadow-[0_14px_26px_rgba(15,32,39,0.10)] backdrop-blur-md sm:hidden">
            <div className="flex h-9 w-9 items-center justify-center rounded-[11px] bg-[linear-gradient(135deg,rgba(15,32,39,0.05),rgba(114,179,154,0.16))]">
              <img
                src="/aset/amikom-logo.webp"
                alt="AMIKOM University logo"
                className="h-7 w-7 object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="text-left">
              <p className="text-[11px] font-black leading-tight text-[#102a31]">AMIKOM University</p>
              <p className="mt-1 inline-flex rounded-full border border-[rgba(30,59,64,0.14)] bg-[rgba(220,243,234,0.92)] px-2 py-0.5 text-[8px] font-semibold tracking-[0.04em] text-[#21424d]">
                Bachelor's Degree, 2016 - 2020
              </p>
            </div>
          </div>

          <div className="absolute right-[-4%] top-[48%] z-30 hidden sm:flex items-center gap-3 rounded-[16px] border border-[rgba(114,179,154,0.24)] bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(114,179,154,0.10))] px-4 py-3 shadow-[0_16px_28px_rgba(15,32,39,0.10)] backdrop-blur-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[linear-gradient(135deg,rgba(15,32,39,0.05),rgba(114,179,154,0.16))]">
              <img
                src="/aset/amikom-logo.webp"
                alt="AMIKOM University logo"
                className="h-8 w-8 object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="text-left">
              <p className="text-[13px] font-black text-[#102a31] leading-tight">AMIKOM University</p>
              <p className="mt-1 inline-flex rounded-full border border-[rgba(30,59,64,0.14)] bg-[rgba(220,243,234,0.94)] px-2.5 py-1 text-[10px] font-semibold tracking-[0.06em] text-[#21424d]">
                Bachelor's Degree, 2016 - 2020
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      </div>
    </section>
  );
};

const Journey = () => {
  const experiences = [
    {
      date: "Mar 2020 - Apr 2021",
      location: "Yogyakarta",
      company: "PT Sarana Insan Muda Selaras",
      label: "PT Sarana Insan Muda Selaras",
      position: "Technical E-Government & Corporate Support",
      summary: "Built early delivery discipline through government and corporate implementation work, supporting deployment readiness, coordination, and operational follow-through.",
      highlight: "Implementation support and operational coordination"
    },
    {
      date: "Aug 2021 - Jan 2023",
      location: "Surabaya",
      company: "PT Supra Primatama Nusantara",
      label: "PT Supra Primatama Nusantara",
      position: "Project Engineer FTTH / Project Building",
      summary: "Managed infrastructure rollout activities covering vendor coordination, QA/QC control, and field execution across fiber and building projects.",
      highlight: "Infrastructure rollout, QA/QC, and vendor coordination"
    },
    {
      date: "Jun 2023 - Dec 2023",
      location: "Yogyakarta",
      company: "PT Divistant Teknologi Indonesia",
      label: "PT Divistant Teknologi Indonesia",
      position: "Project Manager",
      summary: "Managed software delivery from project initiation through closure, maintaining execution cadence, client communication, and day-to-day delivery control.",
      highlight: "Agile software delivery ownership"
    },
    {
      date: "Dec 2023 - Jan 2025",
      location: "Yogyakarta",
      company: "PT Juragan Inovator Teknologi Indonesia",
      label: "PT Juragan Inovator Teknologi Indonesia",
      position: "Product & Project Manager",
      summary: "Owned web and mobile product delivery across planning, design, testing, deployment, budget monitoring, and delivery risk management.",
      highlight: "Product lifecycle ownership and delivery governance"
    },
    {
      date: "Jan 2025 - May 2025",
      location: "Jakarta",
      company: "PT Ako Media Asia",
      label: "PT Ako Media Asia",
      position: "IT Project Manager",
      summary: "Led delivery coordination for MAXstream enhancements and migration into MyTelkomsel, driving sprint execution, stakeholder alignment, and release readiness.",
      highlight: "Enterprise migration and sprint governance"
    },
    {
      date: "Jun 2025 - Present",
      location: "Yogyakarta",
      company: "PT Dazo Kreatif Indonesia",
      label: "PT Dazo Kreatif Indonesia",
      position: "IT Project Manager",
      summary: "Lead AI SaaS delivery across order management, chat automation, digital storefronts, and omnichannel initiatives with a strong focus on planning, coordination, and release execution.",
      highlight: "AI SaaS, product delivery, and execution control",
      current: true
    }
  ];

  const renderRoadmapContent = (exp: (typeof experiences)[number]) => (
    <div className="mx-auto flex w-[188px] flex-col items-center text-center">
      <div className="mb-2 flex min-h-[20px] items-center justify-center gap-2">
        <p className="text-[11px] font-semibold tracking-[0.08em]">
            <span className="accent-gradient-text">{exp.date}</span>
        </p>
        {exp.current && (
          <span className="rounded-full border border-[#cfe6ea] bg-[#f4fafb] px-2 py-0.5 text-[9px] font-semibold tracking-[0.08em]">
            <span className="accent-gradient-text">Current</span>
          </span>
        )}
      </div>
      <div className="min-h-[114px]">
        <h3 className="copy-balance mb-1 text-[17px] font-black leading-[1.15] text-[#12212d]">{exp.label}</h3>
        <p className="mb-4 text-[12px] font-medium leading-[1.4] text-[#72808d]">{exp.location}</p>
        <p className="copy-pretty mb-4 text-[12px] font-semibold leading-[1.55] text-[#243341]">{exp.position}</p>
        <p className="copy-pretty text-[12px] leading-[1.55] text-[#6f7c89]">{exp.highlight}</p>
      </div>
    </div>
  );

  return (
    <section id="journey" className="lazy-render-section section-shell section-tone-journey py-12 lg:py-24 2xl:py-32 px-4 sm:px-5 md:px-6 xl:px-8 2xl:px-12">
      <div className="section-inner max-w-7xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="mb-10 lg:mb-16 2xl:mb-20">
          <p className="section-kicker text-[12px] font-semibold tracking-[0.14em] mb-3">
            <span className="accent-gradient-text">Milestones</span>
          </p>
          <h2 className="copy-balance max-w-[12ch] text-4xl lg:text-6xl font-black text-[#0c1a24] tracking-tight leading-[1]">
            Professional Journey
          </h2>
          <p className="copy-pretty copy-measure-wide text-[#5f6670] text-[15px] mt-4 max-w-2xl leading-relaxed">
            A delivery track record built across startup, enterprise, and client-facing environments with increasing ownership in planning, stakeholder management, and release execution.
          </p>
        </div>

        <div className="lg:hidden space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: 2 }}
              className="relative pl-8 pr-2 py-2"
            >
              <div className="absolute left-0 top-2 bottom-2 w-px bg-[#dbe3ea]" aria-hidden="true" />
              <div className="absolute left-[-5px] top-3 w-[10px] h-[10px] rounded-full bg-[#0fa3b1]/75 ring-4 ring-[#f4f6fb]" aria-hidden="true" />

              <div className="mb-3 flex flex-wrap items-center gap-2">
                <p className="text-[11px] font-semibold tracking-[0.08em]">
                  <span className="accent-gradient-text">{exp.date}</span>
                </p>
                {exp.current && (
                  <span className="rounded-full bg-[#0fa3b1]/10 px-2.5 py-1 text-[10px] font-semibold tracking-[0.08em]">
                    <span className="accent-gradient-text">Current</span>
                  </span>
                )}
              </div>
              <h3 className="copy-balance text-[17px] font-black text-[#12212d] mb-1">{exp.company}</h3>
              <p className="copy-pretty text-[14px] text-[#243341] font-semibold mb-2">{exp.position}</p>
              <p className="text-[12px] text-[#72808d] mb-3">{exp.location}</p>
              <p className="copy-pretty text-[13px] text-[#41505d] leading-[1.75]">{exp.summary}</p>
            </motion.div>
          ))}
        </div>

        <div className="hidden lg:block">
          <div className="overflow-x-auto no-scrollbar pb-4">
            <div className="relative min-w-[1120px] px-4 pt-2 pb-6">
              <div className="grid min-h-[168px] grid-cols-6 items-end gap-6">
                {experiences.map((exp, idx) =>
                  idx % 2 === 1 ? (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -2 }}
                      className="flex justify-center"
                    >
                      {renderRoadmapContent(exp)}
                    </motion.div>
                  ) : (
                    <div key={idx} aria-hidden="true" />
                  )
                )}
              </div>

              <div className="relative mb-6 h-[170px]">
                <svg
                  className="absolute inset-x-0 top-[42px] h-[118px] w-full"
                  viewBox="0 0 1120 118"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M8 60C54 60 54 88 101 88C148 88 148 16 195 16C242 16 242 88 289 88C336 88 336 16 383 16C430 16 430 88 477 88C524 88 524 16 571 16C618 16 618 88 665 88C712 88 712 16 759 16C806 16 806 88 853 88C900 88 900 16 947 16C994 16 994 88 1041 88C1088 88 1088 60 1112 60"
                    stroke="#203a43"
                    strokeWidth="34"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 60C54 60 54 88 101 88C148 88 148 16 195 16C242 16 242 88 289 88C336 88 336 16 383 16C430 16 430 88 477 88C524 88 524 16 571 16C618 16 618 88 665 88C712 88 712 16 759 16C806 16 806 88 853 88C900 88 900 16 947 16C994 16 994 88 1041 88C1088 88 1088 60 1112 60"
                    stroke="rgba(255,255,255,0.82)"
                    strokeWidth="2.5"
                    strokeDasharray="10 12"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="relative grid grid-cols-6 gap-6">
                  {experiences.map((exp, idx) => {
                    const yOffset = idx % 2 === 0 ? 'pt-[98px]' : 'pt-[28px]';

                    return (
                      <div key={idx} className={`mx-auto flex w-[182px] flex-col items-center ${yOffset}`}>
                        <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white shadow-[0_12px_24px_rgba(15,23,42,0.08)] ring-8 ring-[#f4f6fb]">
                          <div
                            className={`flex h-[54px] w-[54px] items-center justify-center rounded-full text-[15px] font-black text-white ${
                              exp.current ? 'bg-[#203a43]' : 'bg-[#0fa3b1]'
                            }`}
                          >
                            0{idx + 1}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="grid min-h-[168px] grid-cols-6 gap-6">
                {experiences.map((exp, idx) =>
                  idx % 2 === 0 ? (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -2 }}
                      className="flex justify-center"
                    >
                      {renderRoadmapContent(exp)}
                    </motion.div>
                  ) : (
                    <div key={idx} aria-hidden="true" />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    {
      title: "Planning & Delivery Control",
      desc: "Translate business needs into delivery plans, priorities, milestones, and realistic execution timelines.",
      icon: <Layout size={20} />
    },
    {
      title: "Agile & Sprint Leadership",
      desc: "Run Agile rituals, maintain team cadence, and keep sprint commitments visible and manageable.",
      icon: <Settings size={20} />
    },
    {
      title: "System Rollout & Coordination",
      desc: "Coordinate implementation, testing, deployment, and launch readiness across complex project environments.",
      icon: <Layers size={20} />
    },
    {
      title: "Stakeholder & Risk Management",
      desc: "Keep stakeholders aligned, follow up on blockers, and manage delivery risk before it impacts timeline or quality.",
      icon: <Users size={20} />
    }
  ];

  return (
    <section id="skills" className="lazy-render-section section-shell section-tone-skills py-12 lg:py-24 2xl:py-32 px-4 sm:px-5 md:px-6 xl:px-8 2xl:px-12 relative overflow-hidden">
      <div className="section-inner max-w-7xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-16 2xl:mb-20 gap-8">
          <div className="max-w-xl 2xl:max-w-2xl">
            <h2 className="copy-balance max-w-[11ch] text-4xl lg:text-6xl 2xl:text-7xl font-black text-[#1a2e35] tracking-tighter leading-[0.9]">
              Core <span className="accent-gradient-text">Capabilities</span>
            </h2>
          </div>
          <p className="copy-pretty max-w-sm text-[#5f6670] text-[13px] lg:text-[14px] leading-relaxed font-medium">
            Four delivery strengths that reflect how I lead teams, manage execution, and keep projects moving with control.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -2 }}
              className="border-t border-[#dbe3ea] pt-6 lg:pt-7"
            >
              <div className="w-11 h-11 rounded-[14px] bg-[#0fa3b1]/10 text-[#0fa3b1] flex items-center justify-center mb-5">
                {skill.icon}
              </div>
              <h3 className="copy-balance text-xl 2xl:text-2xl font-black text-[#0c1a24] mb-3 tracking-tight">{skill.title}</h3>
              <p className="copy-pretty text-[14px] 2xl:text-[15px] text-[#5f6670] leading-relaxed font-medium">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ToolsCarousel = ({ tools }: { tools: { name: string; color: string; icon: string }[] }) => {
  const desktopCarouselRef = React.useRef<HTMLDivElement | null>(null);
  const mobileCarouselRef = React.useRef<HTMLDivElement | null>(null);
  const singleSetWidthRef = React.useRef(0);
  const isDraggingRef = React.useRef(false);
  const isHoveringRef = React.useRef(false);
  const dragStartX = React.useRef(0);
  const scrollStart = React.useRef(0);
  const mobileResumeTimeoutRef = React.useRef<number | null>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [isMobilePaused, setIsMobilePaused] = React.useState(false);
  const marqueeSets = React.useMemo(() => [tools, tools], [tools]);
  const repeatedTools = React.useMemo(() => [...tools, ...tools, ...tools], [tools]);

  const pauseMobileMarquee = React.useCallback(() => {
    setIsMobilePaused(true);
    if (mobileResumeTimeoutRef.current) {
      window.clearTimeout(mobileResumeTimeoutRef.current);
      mobileResumeTimeoutRef.current = null;
    }
  }, []);

  const resumeMobileMarquee = React.useCallback((delay = 1400) => {
    if (mobileResumeTimeoutRef.current) {
      window.clearTimeout(mobileResumeTimeoutRef.current);
    }
    mobileResumeTimeoutRef.current = window.setTimeout(() => {
      setIsMobilePaused(false);
      mobileResumeTimeoutRef.current = null;
    }, delay);
  }, []);

  const measureDesktopCarousel = React.useCallback(() => {
    const carousel = desktopCarouselRef.current;
    if (!carousel) return;

    singleSetWidthRef.current = carousel.scrollWidth / 3;
    if (singleSetWidthRef.current > 0 && carousel.scrollLeft === 0) {
      carousel.scrollLeft = singleSetWidthRef.current;
    }
  }, []);

  const normalizeDesktopScroll = React.useCallback(() => {
    const carousel = desktopCarouselRef.current;
    const singleSetWidth = singleSetWidthRef.current;
    if (!carousel || !singleSetWidth) return;

    if (carousel.scrollLeft <= 0) {
      carousel.scrollLeft += singleSetWidth;
    } else if (carousel.scrollLeft >= singleSetWidth * 2) {
      carousel.scrollLeft -= singleSetWidth;
    }
  }, []);

  React.useEffect(() => {
    measureDesktopCarousel();
    window.addEventListener('resize', measureDesktopCarousel);
    return () => window.removeEventListener('resize', measureDesktopCarousel);
  }, [measureDesktopCarousel, repeatedTools.length]);

  React.useEffect(() => {
    return () => {
      if (mobileResumeTimeoutRef.current) {
        window.clearTimeout(mobileResumeTimeoutRef.current);
      }
    };
  }, []);

  React.useEffect(() => {
    const carousel = desktopCarouselRef.current;
    if (!carousel) return;

    const intervalId = window.setInterval(() => {
      if (document.visibilityState !== 'visible') return;
      if (!isDraggingRef.current && !isHoveringRef.current) {
        carousel.scrollLeft += 1;
        normalizeDesktopScroll();
      }
    }, 22);

    return () => window.clearInterval(intervalId);
  }, [normalizeDesktopScroll]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!desktopCarouselRef.current) return;
    isDraggingRef.current = true;
    setIsDragging(true);
    dragStartX.current = event.clientX;
    scrollStart.current = desktopCarouselRef.current.scrollLeft;
    try {
      desktopCarouselRef.current.setPointerCapture(event.pointerId);
    } catch (error) {
      // Ignore browser-specific pointer capture limitations.
    }
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !desktopCarouselRef.current) return;
    const delta = event.clientX - dragStartX.current;
    desktopCarouselRef.current.scrollLeft = scrollStart.current - delta;
    normalizeDesktopScroll();
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!desktopCarouselRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);
    try {
      desktopCarouselRef.current.releasePointerCapture(event.pointerId);
    } catch (error) {
      // Ignore if pointer capture was not active.
    }
    normalizeDesktopScroll();
  };

  return (
    <>
      <div
        ref={mobileCarouselRef}
        className="tools-marquee-shell overflow-x-auto pb-4 no-scrollbar touch-pan-x md:hidden"
        style={{ WebkitOverflowScrolling: 'touch' }}
        onTouchStart={pauseMobileMarquee}
        onTouchEnd={() => resumeMobileMarquee()}
        onTouchCancel={() => resumeMobileMarquee(600)}
        onPointerDown={pauseMobileMarquee}
        onPointerUp={() => resumeMobileMarquee()}
        onPointerCancel={() => resumeMobileMarquee(600)}
        onScroll={() => {
          pauseMobileMarquee();
          resumeMobileMarquee();
        }}
      >
        <div className={`tools-marquee-track flex w-max items-center gap-6 ${isMobilePaused ? 'is-paused' : ''}`}>
          {marqueeSets.map((set, setIdx) => (
            <div key={setIdx} className="flex items-center gap-6" aria-hidden={setIdx === 1}>
              {set.map((tool, idx) => (
                <div
                  key={`${tool.name}-${setIdx}-${idx}`}
                  className="flex h-[92px] min-w-[118px] flex-shrink-0 items-center justify-center px-2 py-2 sm:h-[100px] sm:min-w-[126px]"
                >
                  {tool.icon.startsWith('/') ? (
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      loading={setIdx === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      className="h-12 w-auto object-contain sm:h-14"
                    />
                  ) : (
                    <div className="text-3xl sm:text-4xl">{tool.icon}</div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div
        ref={desktopCarouselRef}
        className={`tools-desktop-carousel hidden w-full gap-6 overflow-x-auto pb-4 no-scrollbar select-none md:flex ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onMouseEnter={() => {
          isHoveringRef.current = true;
        }}
        onMouseLeave={() => {
          isHoveringRef.current = false;
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={(event) => {
          if (isDraggingRef.current && desktopCarouselRef.current) {
            handlePointerUp(event);
          }
        }}
        onPointerCancel={(event) => handlePointerUp(event)}
      >
        {repeatedTools.map((tool, idx) => (
          <div
            key={`${tool.name}-desktop-${idx}`}
            className="flex h-[100px] min-w-[126px] flex-shrink-0 items-center justify-center px-2 py-2 transition-transform duration-300 hover:-translate-y-0.5 lg:h-[108px] lg:min-w-[138px]"
            aria-hidden={idx >= tools.length}
          >
            {tool.icon.startsWith('/') ? (
              <img
                src={tool.icon}
                alt={tool.name}
                loading={idx < tools.length ? 'eager' : 'lazy'}
                decoding="async"
                onLoad={measureDesktopCarousel}
                className="h-14 w-auto object-contain lg:h-16"
              />
            ) : (
              <div className="text-4xl lg:text-5xl">{tool.icon}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

const SDLCFlow = () => {
  const scrumFlowSteps = [
    {
      title: "Grooming",
      desc: "Prioritized requirements",
      icon: <FolderKanban size={18} />
    },
    {
      title: "Sprint Planning",
      desc: "Scope and sprint goals",
      icon: <Layout size={18} />
    },
    {
      title: "Sprint Backlog",
      desc: "Ready sprint tasks",
      icon: <Layers size={18} />
    }
  ];

  const reportingStructure: { level: string; frequency: string; variant: ReportingVariant; items: string[] }[] = [
    {
      level: "User & Operational Stakeholders",
      frequency: "Weekly/BI-Weekly",
      variant: "user",
      items: ["Progress updates", "Issue, risk, and dependency tracking", "Delivery monitoring"]
    },
    {
      level: "Management & Leadership",
      frequency: "BI-Weekly",
      variant: "cLevel",
      items: ["Executive status updates", "Planning decisions and blockers", "Resource and priority alignment"]
    }
  ];

  const tools = [
    { name: "Trello", color: "from-blue-400 to-blue-600", icon: "/aset/trello.webp" },
    { name: "Jira", color: "from-blue-500 to-blue-700", icon: "/aset/jira.webp" },
    { name: "Confluence", color: "from-cyan-400 to-blue-500", icon: "/aset/confluence.webp" },
    { name: "Notion", color: "from-slate-400 to-slate-600", icon: "/aset/notion.webp" },
    { name: "Slack", color: "from-rose-300 to-red-500", icon: "/aset/slack.webp" },
    { name: "GitLab", color: "from-red-400 to-orange-600", icon: "/aset/gitlab.webp" },
    { name: "PowerPoint", color: "from-orange-400 to-red-600", icon: "/aset/office.webp" },
    { name: "Google Sheets", color: "from-green-400 to-emerald-600", icon: "GS" }
  ];

  const FlowArrow = ({ width = 56 }: { width?: number }) => (
    <svg width={width} height="18" viewBox={`0 0 ${width} 18`} fill="none" aria-hidden="true" className="shrink-0">
      <path d={`M2 9H${width - 14}`} stroke="#72b39a" strokeWidth="5" strokeLinecap="round" />
      <path d={`M${width - 20} 4L${width - 10} 9L${width - 20} 14`} stroke="#72b39a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const ScrumFlowNode = ({
    title,
    desc,
    icon,
  }: {
    title: string;
    desc: string;
    icon: React.ReactNode;
  }) => (
    <div className="flex min-w-0 flex-col items-center text-center">
      <div className="accent-gradient-bg mb-3 flex h-[68px] w-[68px] items-center justify-center rounded-full border border-[#cfe7eb] text-white shadow-[0_6px_14px_rgba(114,179,154,0.16)]">
        {icon}
      </div>
      <h4 className="text-[12px] font-black leading-tight text-[#1a2e35]">{title}</h4>
      <p className="mt-1 max-w-[116px] text-[11px] leading-[1.45] text-[#6b7785]">{desc}</p>
    </div>
  );

  return (
    <>
      <section id="tools" className="lazy-render-section section-shell section-tone-tools py-12 lg:py-24 2xl:py-32 px-4 sm:px-5 md:px-6 xl:px-8 2xl:px-12">
      <div className="section-inner max-w-7xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-16 2xl:mb-20 gap-8">
          <div className="max-w-xl 2xl:max-w-2xl">
              <h2 className="copy-balance max-w-[12ch] text-4xl lg:text-6xl 2xl:text-7xl font-black text-[#1a2e35] tracking-tighter leading-[0.9]">
                Tools & <span className="accent-gradient-text">Project Management</span>
              </h2>
            </div>
            <p className="copy-pretty max-w-sm text-[#5f6670] text-[13px] lg:text-[14px] leading-relaxed font-medium">
              The toolset I rely on to keep planning structured, teams aligned, and delivery progress visible.
            </p>
          </div>

          <div className="mb-16 lg:mb-20 2xl:mb-24">
            <p className="text-[12px] font-semibold text-[#5f6670] tracking-[0.08em] mb-8">Primary delivery toolkit</p>
            <ToolsCarousel tools={tools} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 2xl:gap-10">
            <motion.div
              whileHover={{ y: -2 }}
              className="border-t border-[#dbe3ea] pt-6 lg:pt-8 flex flex-col gap-3 items-start"
            >
              <FeatureIcon type="recruitment" />
              <h3 className="text-[14px] font-black text-[#1a2e35] mb-0">Requirement Discovery</h3>
              <p className="copy-pretty text-[12px] text-[#5f6670] leading-relaxed">Clarifying business needs, constraints, dependencies, and delivery expectations before work begins.</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              className="border-t border-[#dbe3ea] pt-6 lg:pt-8 flex flex-col gap-3 items-start"
            >
              <FeatureIcon type="analysis" />
              <h3 className="text-[14px] font-black text-[#1a2e35] mb-0">Planning & Prioritization</h3>
              <p className="copy-pretty text-[12px] text-[#5f6670] leading-relaxed">Shaping scope, timeline, and execution priorities so teams can move with clearer direction.</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              className="border-t border-[#dbe3ea] pt-6 lg:pt-8 flex flex-col gap-3 items-start"
            >
              <FeatureIcon type="brd" />
              <h3 className="text-[14px] font-black text-[#1a2e35] mb-0">BRD & Delivery Readiness</h3>
              <p className="copy-pretty text-[12px] text-[#5f6670] leading-relaxed">Turning requirements into structured documentation and actionable inputs for design, build, and testing.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="sdlc" className="lazy-render-section section-shell section-tone-tools py-12 lg:py-24 2xl:py-32 px-4 sm:px-5 md:px-6 xl:px-8 2xl:px-12">
      <div className="section-inner max-w-7xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-16 2xl:mb-20 gap-8">
          <div className="max-w-xl 2xl:max-w-2xl">
              <h2 className="copy-balance max-w-[10ch] text-4xl lg:text-6xl 2xl:text-7xl font-black text-[#1a2e35] tracking-tighter leading-[0.9]">
                SDLC <span className="accent-gradient-text">Scrum Flow</span>
              </h2>
            </div>
            <p className="copy-pretty max-w-sm text-[#5f6670] text-[13px] lg:text-[14px] leading-relaxed font-medium">
              A delivery model I use to keep work visible, sprint execution disciplined, and outcomes easier to manage.
            </p>
          </div>

          <div className="mb-16 lg:mb-20 2xl:mb-24">
            <div className="xl:hidden">
              <div className="rounded-[20px] border border-[#e3e8ef] bg-[#fbfdff] p-4 sm:p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  {["Product Owner", "Team", "Scrum Master", "Sprint Review + Retrospective"].map((role) => (
                    <span key={role} className="rounded-full border border-[#d9ebee] bg-white px-2.5 py-1.5 text-[9px] font-semibold tracking-[0.03em] text-[#5f6670]">
                      {role}
                    </span>
                  ))}
                </div>

                <div className="space-y-3">
                  {scrumFlowSteps.map((step, idx) => (
                    <React.Fragment key={step.title}>
                      <div className="flex items-center gap-3 rounded-[16px] border border-[#e3e8ef] bg-white p-3.5">
                        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#55c8d5] text-white">
                          {step.icon}
                        </div>
                        <div>
                          <h4 className="text-[13px] font-black text-[#0c1a24]">{step.title}</h4>
                          <p className="copy-pretty mt-1 text-[11px] text-[#5f6670] leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                      {idx < scrumFlowSteps.length - 1 && (
                        <div className="flex justify-center">
                          <svg width="18" height="30" viewBox="0 0 18 30" fill="none" aria-hidden="true">
                            <path d="M9 2V22" stroke="#72b39a" strokeWidth="4" strokeLinecap="round" />
                            <path d="M3 18L9 26L15 18" stroke="#72b39a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <div className="relative mt-5 rounded-[20px] border border-[#dcecf0] bg-white px-4 py-5">
                  <div className="mx-auto flex h-[152px] w-[152px] items-center justify-center rounded-full border-[12px] border-[#0fa3b1] text-center">
                    <div>
                      <p className="text-[11px] font-semibold tracking-[0.08em] text-[#5f6670]">SPRINT</p>
                      <p className="mt-1 text-[24px] font-black leading-none text-[#1a2e35]">1-4</p>
                      <p className="text-[12px] font-semibold tracking-[0.04em] text-[#5f6670]">WEEKS</p>
                    </div>
                  </div>
                  <div className="absolute right-3 top-3 rounded-full border border-[#dcecf0] bg-[#f7fcfd] px-3 py-2 text-center">
                    <p className="text-[11px] font-black">
                      <span className="accent-gradient-text">24 H</span>
                    </p>
                    <p className="text-[9px] font-semibold tracking-[0.04em] text-[#72808d]">Daily Scrum</p>
                  </div>
                </div>

                <div className="mt-5 flex justify-center">
                  <FlowArrow width={92} />
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="rounded-[16px] border border-[#e3e8ef] bg-white p-3.5 text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#0fa3b1] text-white">
                      <Send size={18} />
                    </div>
                    <h4 className="text-[13px] font-black text-[#0c1a24]">Finished Work</h4>
                    <p className="mt-1 text-[11px] text-[#5f6670]">Potentially shippable increment</p>
                  </div>
                  <div className="rounded-[16px] border border-[#e3e8ef] bg-white p-3.5 text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#55c8d5] text-white">
                      <MessageCircle size={18} />
                    </div>
                    <h4 className="text-[13px] font-black text-[#0c1a24]">Sprint Review + Retrospective</h4>
                    <p className="mt-1 text-[11px] text-[#5f6670]">Inspect results and improve the next sprint</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden xl:block">
              <div className="overflow-hidden rounded-[24px] border border-[#e3e8ef] bg-[#fbfdff] px-8 py-10 2xl:px-10">
                <div className="mb-8 flex items-center justify-between text-center">
                  <div className="flex w-[132px] flex-col items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9ebee] bg-[#f9fcfd] text-[#0fa3b1]">
                      <FolderKanban size={16} />
                    </div>
                    <p className="text-[11px] font-semibold text-[#5f6670]">Product Owner</p>
                  </div>
                  <div className="flex w-[132px] flex-col items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9ebee] bg-[#f9fcfd] text-[#0fa3b1]">
                      <Users size={16} />
                    </div>
                    <p className="text-[11px] font-semibold text-[#5f6670]">Team</p>
                  </div>
                  <div className="flex w-[148px] flex-col items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9ebee] bg-[#f9fcfd] text-[#0fa3b1]">
                      <Info size={16} />
                    </div>
                    <p className="text-[11px] font-semibold text-[#5f6670]">Scrum Master</p>
                  </div>
                  <div className="flex w-[172px] flex-col items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9ebee] bg-[#f9fcfd] text-[#0fa3b1]">
                      <MessageCircle size={16} />
                    </div>
                    <p className="text-[11px] font-semibold text-[#5f6670]">Sprint Review + Retrospective</p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <ScrumFlowNode {...scrumFlowSteps[0]} />
                    <div className="pt-[34px]"><FlowArrow width={44} /></div>
                    <ScrumFlowNode {...scrumFlowSteps[1]} />
                    <div className="pt-[34px]"><FlowArrow width={44} /></div>
                    <ScrumFlowNode {...scrumFlowSteps[2]} />
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="pt-[34px]"><FlowArrow width={52} /></div>

                    <div className="relative h-[250px] w-[320px]">
                      <div className="absolute left-1/2 top-1/2 flex h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[14px] border-[#0fa3b1] bg-white text-center shadow-[0_10px_22px_rgba(114,179,154,0.14)]">
                        <div>
                          <p className="text-[13px] font-semibold tracking-[0.08em] text-[#5f6670]">SPRINT</p>
                          <p className="mt-1 text-[34px] font-black leading-none text-[#1a2e35]">1-4</p>
                          <p className="text-[14px] font-semibold tracking-[0.04em] text-[#5f6670]">WEEKS</p>
                        </div>
                      </div>

                      <div className="absolute left-[58px] top-[128px] h-0 w-0 rotate-[16deg] border-y-[9px] border-r-[12px] border-y-transparent border-r-[#0fa3b1]" />
                      <div className="absolute right-[64px] bottom-[52px] h-0 w-0 rotate-[-12deg] border-y-[9px] border-l-[12px] border-y-transparent border-l-[#0fa3b1]" />

                      <div className="absolute right-[18px] top-[22px] flex h-[88px] w-[88px] items-center justify-center rounded-full border-[10px] border-[#0fa3b1] border-l-transparent border-b-transparent bg-white rotate-[32deg]">
                        <div className="-rotate-[32deg] text-center">
                          <p className="text-[16px] font-black text-[#1a2e35]">24 H</p>
                        </div>
                      </div>
                      <div className="absolute right-[-52px] top-[54px]">
                        <div className="rounded-[7px] border border-[#b9e2e7] bg-[#eff9fb] px-3 py-1.5">
                          <p className="text-[11px] font-semibold leading-none text-[#0f5160]">Daily Scrum</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-[34px]"><FlowArrow width={70} /></div>

                    <div className="flex min-w-0 flex-col items-center text-center">
                      <div className="accent-gradient-bg mb-3 flex h-[68px] w-[68px] items-center justify-center rounded-full border border-[#cfe7eb] text-white shadow-[0_6px_14px_rgba(114,179,154,0.16)]">
                        <Send size={18} />
                      </div>
                      <h4 className="text-[12px] font-black leading-tight text-[#1a2e35]">Finished Work</h4>
                      <p className="mt-1 max-w-[124px] text-[11px] leading-[1.45] text-[#6b7785]">Potentially shippable increment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16 lg:mb-0">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-11 h-11 rounded-[14px] bg-[#0fa3b1] text-white flex items-center justify-center border border-white/40">
                <svg width="22" height="22" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 10H28" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M8 18H22" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M8 26H18" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
                  <circle cx="26" cy="18" r="3" stroke="white" strokeWidth="2.2" />
                  <path d="M26 12V9" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M31 18H34" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-[16px] lg:text-[18px] font-black text-[#1a2e35]">Reporting & Stakeholder Communication</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 2xl:gap-10">
              {reportingStructure.map((report, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 4 }}
                  className="border-l-2 border-[#dbe3ea] pl-5 lg:pl-6 py-2"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <ReportingIcon variant={report.variant} />
                    <div>
                      <h4 className="text-[14px] font-black text-[#1a2e35]">{report.level}</h4>
                      <p className="text-[12px] text-[#5f6670] font-semibold tracking-[0.04em]">{report.frequency}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {report.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-center gap-3">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#0fa3b1]"></div>
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
  key?: React.Key;
}

const portfolioImageFallbacks: Record<string, string> = {
  "/aset/project-mrt-jakarta.webp": "/aset/project-mrt-jakarta.svg",
  "/aset/project-yulo-laundry.webp": "/aset/project-yulo-laundry.svg",
  "/aset/project-dazo-ai.webp": "/aset/project-dazo-ai.svg",
  "/aset/project-maxtream.webp": "/aset/project-maxtream.svg",
  "/aset/project-bpjstk.webp": "/aset/project-bpjstk.svg",
};

const PortfolioItem = ({ project, idx }: PortfolioItemProps) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [imageSrc, setImageSrc] = React.useState(project.image);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mobile-portfolio-item grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center border-b border-[#e3e8ef] pb-10 last:border-0"
    >
      <div className={`order-1 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="relative">
          <div className="surface-card surface-card-tight aspect-[16/10] overflow-hidden relative">
            {!isLoaded && <Skeleton className="absolute inset-0 w-full h-full rounded-none" />}
            <img
              src={imageSrc}
              alt={project.title}
              onLoad={() => setIsLoaded(true)}
              onError={() => {
                const fallbackSrc = portfolioImageFallbacks[imageSrc] || "/aset/og-preview.jpg";
                if (fallbackSrc !== imageSrc) {
                  setIsLoaded(false);
                  setImageSrc(fallbackSrc);
                }
              }}
              loading="lazy"
              decoding="async"
              className={`w-full h-full object-cover transition duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      <div className={`order-2 ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="flex flex-wrap items-center gap-2 mb-5 text-[12px] text-[#5f6670]">
          <span className="font-semibold tracking-[0.08em]">
            <span className="accent-gradient-text">{project.type}</span>
          </span>
          <span className="text-[#c0c7cf]">/</span>
          <span className="text-[#0c1a24]">{project.role}</span>
        </div>

        <h3 className="copy-balance max-w-[14ch] text-3xl lg:text-5xl font-black text-[#0d1f2b] tracking-tighter leading-[0.9] mb-6">{project.title}</h3>

        <div className="space-y-5 mb-8">
          <p className="copy-pretty max-w-2xl text-[15px] text-[#1a2e35]/80 leading-relaxed">
            {project.desc}
          </p>
          <div className="border-l-2 border-[#0fa3b1]/35 pl-5">
            <p className="text-[12px] font-semibold mb-2 tracking-[0.08em] uppercase">
              <span className="accent-gradient-text">Key impact</span>
            </p>
            <p className="copy-pretty max-w-xl text-[14px] leading-relaxed italic text-[#0c1a24]">{project.impact}</p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-[12px] font-semibold text-[#5f6670] tracking-[0.08em] mb-4">Common interview topics</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <span key={tag} className="bg-[#f8fafc] text-[#1a2e35] px-4 py-2 rounded-xl text-[11px] font-semibold tracking-[0.03em] border border-[#e3e8ef]">
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
          <span className="text-[12px] font-semibold tracking-[0.08em]">View project reference</span>
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-[#d7e2e8] flex items-center justify-center group-hover/btn:bg-[#0c1a24] group-hover/btn:text-white transition-all duration-300">
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
      desc: "Led end-to-end delivery of MRT Jakarta's business website, coordinating requirement gathering, scope alignment, design-development handoff, testing, and deployment. The main challenge was keeping multiple stakeholder requests aligned without slowing delivery.",
      tags: ["Requirement gathering", "Stakeholder alignment", "UAT coordination", "Deployment"],
      image: "/aset/project-mrt-jakarta.webp",
      url: "https://bisnis.jakartamrt.co.id/"
    },
    {
      title: "Yulo Laundry Mobile App",
      type: "Management System & Mobile App",
      role: "Product Owner & Manager",
      impact: "Reduced order processing time by 25% and increased customer retention through automated notifications.",
      desc: "Managed product delivery for a laundry management app focused on order flow, customer notifications, and operational reporting. My role covered backlog prioritization, stakeholder communication, and keeping releases aligned with business needs.",
      tags: ["Product backlog", "Workflow improvement", "Release planning", "Client communication"],
      image: "/aset/project-yulo-laundry.webp",
      url: "https://play.google.com/store/apps/details?id=com.yulo.customer&hl=id"
    },
    {
      title: "DazoApps SaaS AI & OMS",
      type: "SaaS Platform, AI & OMS",
      role: "Technical Project Lead",
      impact: "Successfully integrated LLM capabilities, resulting in a 50% increase in user engagement within the first month.",
      desc: "Coordinated delivery for an AI SaaS and operations platform, turning fast-changing business requests into clear sprint priorities, milestone tracking, and release follow-up. This project is a strong example of balancing innovation with execution discipline.",
      tags: ["AI SaaS delivery", "Milestone tracking", "Feature rollout", "Cross-team coordination"],
      image: "/aset/project-dazo-ai.webp",
      url: "https://dazo.id/"
    },
    {
      title: "Maxtream Platform",
      type: "Video Streaming & Content Delivery",
      role: "Project Manager",
      impact: "Delivered robust streaming infrastructure supporting 50K+ concurrent users with 99.8% uptime.",
      desc: "Supported delivery for MAXstream enhancement work and transformation into the MyTelkomsel ecosystem. My contribution focused on sprint execution, requirement clarity, stakeholder coordination, and keeping release readiness under control.",
      tags: ["Enterprise migration", "Sprint governance", "Requirement alignment", "Release readiness"],
      image: "/aset/project-maxtream.webp",
      url: "https://maxstream.tv/home"
    },
    {
      title: "BPJSTK Integrated System",
      type: "Government Enterprise Solution",
      role: "Lead Project Manager",
      impact: "Streamlined benefit processing for 40M+ participants, reducing processing time by 60%.",
      desc: "Handled delivery coordination for a large-scale government integration system where stakeholder alignment, compliance awareness, and rollout stability were critical. This case reflects the type of structured execution often discussed in PM interviews.",
      tags: ["Enterprise integration", "Regulatory coordination", "Risk management", "Rollout control"],
      image: "/aset/project-bpjstk.webp",
      url: "https://www.bpjsketenagakerjaan.go.id/"
    }
  ];

  return (
    <section id="portfolio" className="lazy-render-section section-shell section-tone-portfolio py-8 lg:py-12 px-4 sm:px-5 md:px-6 xl:px-8 2xl:px-12">
      <div className="section-inner max-w-7xl xl:max-w-6xl 2xl:max-w-7xl mx-auto relative z-10">
        <div className="mb-6 lg:mb-10 2xl:mb-14">
          <p className="section-kicker text-[12px] font-semibold mb-3 lg:mb-4 tracking-[0.14em]">
            <span className="accent-gradient-text">Selected Project Experience</span>
          </p>
          <h2 className="copy-balance max-w-[14ch] text-4xl lg:text-7xl 2xl:text-8xl font-black text-[#1a2e35] tracking-tighter leading-[0.9]">
            <span className="accent-gradient-text">Case Studies</span>{" "}
            <span className="accent-gradient-text italic font-serif">That Show How I Work</span>
          </h2>
          <p className="copy-pretty copy-measure-wide mt-4 max-w-3xl text-[15px] leading-relaxed text-[#5f6670]">
            These are the project stories HR and interviewers usually ask about: what the project was, where the challenge lived, what I handled, and what result the delivery achieved.
          </p>
        </div>

        <div className="space-y-6 lg:space-y-8 2xl:space-y-10">
          {projects.map((project, idx) => (
            <PortfolioItem key={idx} project={project} idx={idx} />
          ))}
        </div>

        <div className="mt-12 flex justify-center border-t border-[#e3e8ef] pt-10">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="mobile-cta-button accent-gradient-bg inline-flex items-center gap-3 px-12 py-5 rounded-full text-[13px] font-semibold tracking-[0.08em] transition-all shadow-soft hover:opacity-95"
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
  const whatsAppMessage = encodeURIComponent("Halo Okta!\nSaya ingin berdiskusi tentang project dan peluang kolaborasi.");
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${whatsAppMessage}`;

  return (
    <section id="contact" className="lazy-render-section section-shell section-tone-contact py-14 lg:py-28 px-4 sm:px-5 md:px-6 xl:px-8 2xl:px-12">
      <div className="section-inner max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <p className="section-kicker text-[12px] font-semibold mb-3 tracking-[0.14em]">
            <span className="accent-gradient-text">Get in touch</span>
          </p>
          <h2 className="copy-balance max-w-[12ch] text-4xl lg:text-7xl font-black text-[#1a2e35] tracking-tight leading-[1] mb-5">
            Let&apos;s talk about your next project.
          </h2>
          <p className="copy-pretty copy-measure text-[#1f2937]/70 text-[14px] sm:text-[15px] leading-relaxed max-w-lg mb-7">
            If you need an IT Project Manager who can coordinate delivery, align stakeholders, and keep execution on track, feel free to reach out via WhatsApp. I&apos;m open to discussing roles, projects, and collaboration opportunities.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 min-w-0">
              <div className="accent-gradient-soft w-10 h-10 rounded-full flex items-center justify-center text-[#0fa3b1] shadow-sm">
                <Globe size={18} />
              </div>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="min-w-0 break-words text-[13px] font-semibold tracking-[0.04em] text-[#0d1f2b] hover:text-[#0fa3b1] transition-colors"
              >
                Sleman, Yogyakarta
              </a>
            </div>
            <div className="flex items-center gap-4 min-w-0">
              <div className="accent-gradient-soft w-10 h-10 rounded-full flex items-center justify-center text-[#0fa3b1] shadow-sm">
                <Linkedin size={18} />
              </div>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="min-w-0 break-all text-[13px] font-semibold tracking-[0.04em] text-[#0d1f2b] hover:text-[#0fa3b1] transition-colors"
              >
                linkedin.com/in/oktawahyudi
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="accent-gradient-soft w-10 h-10 rounded-full flex items-center justify-center text-[#0fa3b1] shadow-sm">
                <Mail size={18} />
              </div>
              <a
                href={`mailto:${emailAddress}`}
                className="text-[13px] font-semibold tracking-[0.04em] text-[#0d1f2b] hover:text-[#0fa3b1] transition-colors"
              >
                {emailAddress}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="accent-gradient-soft w-10 h-10 rounded-full flex items-center justify-center text-[#0fa3b1] shadow-sm">
                <Phone size={18} />
              </div>
              <a
                href={`tel:${phoneNumber}`}
                className="text-[13px] font-semibold tracking-[0.04em] text-[#0d1f2b] hover:text-[#0fa3b1] transition-colors"
              >
                {phoneNumber}
              </a>
            </div>
          </div>
        </div>

        <div className="surface-card surface-card-tight p-6 sm:p-8">
          <p className="section-kicker text-[12px] font-semibold tracking-[0.12em] mb-4">
            <span className="accent-gradient-text">WhatsApp</span>
          </p>
          <h3 className="copy-balance max-w-[11ch] text-[1.75rem] sm:text-3xl font-black text-[#0a1620] mb-5">Chat with me directly</h3>
          <p className="copy-pretty max-w-md text-[#1f2937]/80 text-[14px] sm:text-base leading-relaxed mb-7">
            Send a short brief, role overview, or project need, and I&apos;ll respond to continue the conversation.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mobile-cta-button accent-gradient-bg inline-flex items-center justify-center gap-3 rounded-full px-6 sm:px-8 py-3.5 sm:py-4 text-[12px] sm:text-[13px] font-semibold tracking-[0.08em] shadow-soft transition-transform hover:-translate-y-0.5 hover:opacity-95"
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
      whileHover={{ y: -6 }}
      className="mobile-feedback-card surface-card surface-card-tight min-h-[300px] min-w-[260px] sm:min-w-[290px] lg:min-w-[320px] xl:min-w-[340px] max-w-[370px] p-6 sm:p-8 flex flex-col justify-between gap-6"
    >
      <div>
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#72b39a" className="text-[#0fa3b1]" />)}
        </div>
        <p className="copy-pretty text-[13px] text-[#0d1f2b]/70 italic leading-relaxed font-medium">
          "{t.text}"
        </p>
      </div>
      
      <div className="flex items-center gap-3 pt-4 border-t border-[#e3e8ef]">
        <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0">
          {!isLoaded && <Skeleton className="absolute inset-0 w-full h-full rounded-none" />}
          <img 
            src={t.image} 
            alt={t.name} 
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
            decoding="async"
            className={`w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} 
            referrerPolicy="no-referrer" 
          />
        </div>
        <div className="min-w-0">
          <h4 className="font-black text-[13px] text-[#0d1f2b] tracking-tight truncate">{t.name}</h4>
          <p className="text-[11px] text-[#5f6670] font-semibold tracking-[0.04em] truncate">{t.company}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Pandu Wicaksono",
      company: "Lead Project Building, Biznet",
      image: "/aset/testimonial-budi.webp",
      text: "Okta was consistent in keeping project progress on track and communication clear across the team. He was responsive when issues came up in the field and helped coordination stay orderly until the work was completed."
    },
    {
      name: "Dwi Antoro",
      company: "HR Manager, JITILab.id",
      image: "/aset/testimonial-siti.webp",
      text: "From an HR and collaboration perspective, Okta showed good ownership in managing delivery and working across functions. He communicated clearly, handled responsibilities well, and contributed to a more structured project environment."
    },
    {
      name: "Muhammad Madum",
      company: "CEO, Dazo.id",
      image: "/aset/testimonial-ahmad.webp",
      text: "Okta helped turn ideas and business needs into a delivery process the team could actually execute. He kept priorities visible, followed up on blockers, and made it easier for us to move faster without losing direction."
    },
    {
      name: "Edy",
      company: "Manager E-Gov & Support, Lifemedia.id",
      image: "/aset/testimonial-ratna.webp",
      text: "What stood out from Okta was his discipline in follow-up and his ability to keep technical work aligned with operational needs. He was dependable in coordination, especially when timelines and stakeholder expectations had to be managed carefully."
    },
    {
      name: "Yogi Yulianto",
      company: "Backend Engineer, Detik.com",
      image: "/aset/testimonial-rido.webp",
      text: "Okta is easy to work with because he keeps discussions focused and makes priorities easier to understand from the engineering side. He brings structure to planning, follows through on action items, and helps delivery move with less confusion."
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
    <section id="feedback" className="lazy-render-section section-shell section-tone-feedback py-16 lg:py-32 px-4 sm:px-5 md:px-6 xl:px-8 2xl:px-12">
      <div className="section-inner max-w-7xl mx-auto">
        <div className="mb-10 lg:mb-16">
          <p className="section-kicker text-[12px] font-semibold mb-3 tracking-[0.14em]">
            <span className="accent-gradient-text">Recommendations</span>
          </p>
          <h2 className="copy-balance max-w-[12ch] text-5xl lg:text-7xl font-black text-[#0d1f2b] tracking-tighter leading-[0.9]">
            Professional <span className="accent-gradient-text">Feedback</span>
          </h2>
          <p className="copy-pretty max-w-xl text-[13px] mt-4 font-medium leading-relaxed">
            <span className="accent-gradient-text">Feedback that reflects how I lead delivery, communicate with stakeholders, and keep execution under control.</span>
          </p>
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
    <div className="min-h-screen bg-[#f4f6fb] text-[#1a2e35]">
      <div className="max-w-5xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 py-10 lg:py-14">
        <button
          type="button"
          onClick={() => onRouteChange('/')}
          className="inline-flex items-center gap-2 rounded-full border border-[#d8e4eb] bg-white px-5 py-2.5 text-[14px] font-semibold tracking-[0.04em] text-[#173041] shadow-sm transition hover:border-[#0fa3b1]/40 hover:text-[#0fa3b1]"
        >
          Back to Home
        </button>

        <div className="mt-8 rounded-[24px] border border-[#e3edf3] bg-white p-8 lg:p-12 shadow-soft">
          <p className="section-kicker text-[12px] font-semibold tracking-[0.14em]">
            <span className="accent-gradient-text">Legal Information</span>
          </p>
          <h1 className="mt-4 text-4xl lg:text-6xl font-black tracking-tight text-[#102635]">
            {content.title}
          </h1>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-[#526675]">
            {content.description}
          </p>

          <div className="mt-10 space-y-8">
            {content.sections.map((section) => (
              <section key={section.heading} className="rounded-[18px] border border-[#e3edf3] bg-[#fbfdff] p-6 lg:p-8">
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

        <div className="mt-8 flex flex-wrap gap-4 text-[14px] font-semibold text-[#0fa3b1]">
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
    <footer className="mobile-footer-shell lazy-render-footer section-shell px-4 sm:px-5 md:px-6 pb-10 sm:pb-12 relative overflow-hidden">
      <div className="section-inner max-w-7xl mx-auto">
        <div className="mobile-footer-surface footer-surface rounded-[24px] text-white shadow-soft">
          <div className="relative z-10 px-5 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <div className="text-3xl font-black tracking-tight">OKTA.</div>
              <p className="copy-pretty max-w-md text-[14px] text-white/70 leading-relaxed">
                Project delivery for digital products, enterprise initiatives, and software teams that need stronger alignment and steadier execution.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5 text-sm md:grid-cols-4 md:gap-8">
              <div className="space-y-1">
                <p className="text-[10px] font-semibold tracking-[0.18em] uppercase">
                  <span className="text-[#bfe7da]">Navigation</span>
                </p>
                <div className="space-y-1 text-white/80">
                  {navPrimary.map(label => (
                    <a key={label} href={`#${label.toLowerCase()}`} className="block hover:text-white transition-colors">
                      {label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-semibold tracking-[0.18em] uppercase">
                  <span className="text-[#bfe7da]">Contact</span>
                </p>
                <div className="space-y-1 text-white/70 leading-relaxed min-w-0">
                  <span className="block">Sleman, Yogyakarta</span>
                  <a href="mailto:okta.wahyudi86@gmail.com" className="block break-all text-[13px] leading-relaxed">okta.wahyudi86@gmail.com</a>
                  <a href="tel:089675080104" className="block">089675080104</a>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-semibold tracking-[0.18em] uppercase">
                  <span className="text-[#bfe7da]">Quick links</span>
                </p>
                <div className="space-y-1 text-white/70">
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
              <div className="space-y-1">
                <p className="text-[10px] font-semibold tracking-[0.18em] uppercase">
                  <span className="text-[#bfe7da]">Follow</span>
                </p>
                <div className="flex items-center gap-2">
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
                      className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
                <p className="copy-pretty max-w-[12rem] text-[11px] text-white/60 mt-2 leading-relaxed">Thank you for exploring Okta.</p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 flex flex-wrap items-center justify-between gap-3 text-[11px] tracking-[0.08em] text-white/50">
              <p>&copy; 2026 Okta. All rights reserved.</p>
              <div className="flex gap-4 text-[11px]">
                <button type="button" onClick={() => onRouteChange('/privacy')} className="hover:text-white transition">
                  Privacy
                </button>
                <button type="button" onClick={() => onRouteChange('/terms')} className="hover:text-white transition">
                  Terms
                </button>
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
  const [showDeferredSections, setShowDeferredSections] = React.useState(() => window.location.pathname !== '/');
  const loadingTimeoutRef = React.useRef<number | null>(null);
  const isCvRoute = pathname === '/cv_oktawahyudi' || pathname === '/cv_oktawahyudi/';

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
    if (isCvRoute) {
      window.location.replace('/CV_Oktawahyudi.pdf');
      return;
    }

    document.title = 'Okta Wahyudi | Project Manager';

    if (pathname === '/privacy') {
      document.title = 'Privacy Policy | Okta Wahyudi';
      return;
    }

    if (pathname === '/terms') {
      document.title = 'Terms & Conditions | Okta Wahyudi';
      return;
    }
  }, [isCvRoute, pathname]);

  React.useEffect(() => {
    let frameA: number | null = null;
    let frameB: number | null = null;

    const finishInitialLoading = () => {
      frameA = window.requestAnimationFrame(() => {
        frameB = window.requestAnimationFrame(() => {
          setIsInitialLoading(false);
        });
      });
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', finishInitialLoading, { once: true });
    } else {
      finishInitialLoading();
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', finishInitialLoading);
      if (frameA) window.cancelAnimationFrame(frameA);
      if (frameB) window.cancelAnimationFrame(frameB);
    };
  }, []);

  React.useEffect(() => {
    if (pathname !== '/') {
      setShowDeferredSections(true);
      return;
    }

    if (showDeferredSections) return;

    let revealTimeout: number | null = window.setTimeout(() => {
      setShowDeferredSections(true);
    }, 220);

    const revealSections = () => {
      setShowDeferredSections(true);
      if (revealTimeout) {
        window.clearTimeout(revealTimeout);
        revealTimeout = null;
      }
    };

    window.addEventListener('scroll', revealSections, { once: true, passive: true });
    window.addEventListener('touchstart', revealSections, { once: true, passive: true });
    window.addEventListener('mousemove', revealSections, { once: true, passive: true });

    return () => {
      window.removeEventListener('scroll', revealSections);
      window.removeEventListener('touchstart', revealSections);
      window.removeEventListener('mousemove', revealSections);
      if (revealTimeout) {
        window.clearTimeout(revealTimeout);
      }
    };
  }, [pathname, showDeferredSections]);

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
    <div className="min-h-screen pb-24 lg:pb-0 bg-[#f4f6fb] font-sans selection:bg-[#0fa3b1] selection:text-white antialiased relative overflow-hidden">
      {isCvRoute ? null : pathname === '/privacy' ? (
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
          {showDeferredSections ? (
            <>
              <Journey />
              <Skills />
              <SDLCFlow />
              <Portfolio />
              <Contact />
              <Testimonials />
              <Footer onRouteChange={handleRouteChange} />
            </>
          ) : (
            <div className="px-4 sm:px-5 md:px-6 xl:px-8 2xl:px-12 py-8 lg:py-10">
              <div className="mx-auto max-w-7xl">
                <TravelokaSkeletonBlock className="h-40 rounded-[28px]" />
              </div>
            </div>
          )}
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
          <React.Suspense fallback={null}>
            <LazyOktaAI />
          </React.Suspense>
        </>
      )}
    </div>
  );
}

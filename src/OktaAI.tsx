import React from 'react';
import { Cpu, Send, Star, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

type ChatMessage = {
  role: 'user' | 'ai';
  text: string;
};

const FRIENDLY_ERROR_MESSAGE =
  'Maaf, chat sedang terkendala sesaat. Kamu bisa coba lagi, atau tanyakan pengalaman, project, dan skills Okta.';

export default function OktaAI() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<ChatMessage[]>([
    {
      role: 'ai',
      text: 'Halo! Saya OktaAI. Tanya apa saja tentang pengalaman, project, atau cara kerja Okta.',
    },
  ]);
  const [input, setInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [position, setPosition] = React.useState<'bottom' | 'top'>('bottom');
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleOpen = (event: Event) => {
      const customEvent = event as CustomEvent<{ from?: string }>;
      setIsOpen(true);
      setPosition(customEvent.detail?.from === 'navbar' ? 'top' : 'bottom');
    };

    window.addEventListener('openOktaAI', handleOpen as EventListener);
    return () => window.removeEventListener('openOktaAI', handleOpen as EventListener);
  }, []);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (textOverride?: string) => {
    const userMsg = (textOverride ?? input).trim();
    if (!userMsg || isLoading) return;

    const nextMessages = [...messages, { role: 'user' as const, text: userMsg }];
    setMessages(nextMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: nextMessages }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.message || FRIENDLY_ERROR_MESSAGE);
      }

      setMessages((prev) => [
        ...prev,
        {
          role: 'ai',
          text: data?.text || 'Maaf, OktaAI belum bisa menjawab sekarang. Coba lagi sebentar ya.',
        },
      ]);
    } catch (error) {
      const fallbackText =
        error instanceof Error
          ? error.message === 'Failed to fetch' || /^API error:/i.test(error.message)
            ? FRIENDLY_ERROR_MESSAGE
            : error.message
          : FRIENDLY_ERROR_MESSAGE;

      setMessages((prev) => [...prev, { role: 'ai', text: fallbackText }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
            y: position === 'bottom' ? 36 : -36,
            scale: 0.96,
          }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{
            opacity: 0,
            y: position === 'bottom' ? 24 : -24,
            scale: 0.98,
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className={`fixed inset-0 z-[100] flex h-full w-full flex-col overflow-hidden border border-white/30 bg-white/95 backdrop-blur-2xl shadow-[0_10px_32px_rgba(15,23,42,0.18)] lg:inset-auto lg:right-8 lg:w-[400px] lg:h-[600px] lg:rounded-[28px] ${
            position === 'bottom' ? 'lg:bottom-28' : 'lg:top-28'
          }`}
        >
          <div className="relative flex items-center justify-between border-b border-slate-200 bg-gradient-to-b from-[#edf4f6] to-white px-5 pb-5 pt-12 text-[#0f1724] lg:px-6 lg:pb-6 lg:pt-7">
            <div className="absolute inset-x-0 top-0 h-20 bg-white/60 blur-3xl opacity-60 pointer-events-none" />
            <div className="relative z-10 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-[16px] border border-slate-200 bg-white shadow-sm lg:h-14 lg:w-14">
                <Cpu size={26} className="text-[#21424d]" />
              </div>
              <div>
                <h4 className="flex items-center gap-2 text-[17px] font-black tracking-tight">
                  OktaAI
                  <span className="h-2.5 w-2.5 rounded-full bg-[#72b39a] shadow-[0_0_10px_rgba(114,179,154,0.35)]" />
                </h4>
                <p className="text-[12px] font-semibold tracking-[0.08em] text-slate-500">
                  Fast portfolio assistant
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 transition-all hover:bg-slate-100"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="no-scrollbar relative z-10 flex-1 space-y-5 overflow-y-auto bg-white p-4 md:p-6">
            {messages.length === 1 && (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-[22px] border border-slate-200 bg-[#f7fafb]">
                  <Star size={34} className="text-[#72b39a]" />
                </div>
                <h5 className="mb-2 text-[16px] font-black tracking-[0.02em] text-[#0f1724]">
                  Halo! Aku OktaAI
                </h5>
                <p className="max-w-[240px] text-[12px] font-medium leading-relaxed text-slate-500">
                  Tanya cepat seputar portfolio, pengalaman kerja, dan project yang pernah ditangani Okta.
                </p>
              </div>
            )}

            {messages.map((message, index) => (
              <motion.div
                key={`${message.role}-${index}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-[22px] p-4 text-[15px] font-medium leading-relaxed ${
                    message.role === 'user'
                      ? 'rounded-tr-none bg-[#0f1724] text-white shadow-[0_8px_24px_rgba(15,23,42,0.18)]'
                      : 'rounded-tl-none border border-slate-200 bg-[#f6f7fb] text-[#0f1724] shadow-sm'
                  }`}
                >
                  {message.text}
                </div>
              </motion.div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1.5 rounded-[20px] rounded-tl-none border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="h-2 w-2 rounded-full bg-[#72b39a] animate-pulse" />
                  <div className="h-2 w-2 rounded-full bg-[#72b39a] animate-pulse [animation-delay:120ms]" />
                  <div className="h-2 w-2 rounded-full bg-[#72b39a] animate-pulse [animation-delay:240ms]" />
                </div>
              </div>
            )}
          </div>

          <div className="relative z-10 border-t border-slate-200 bg-white p-5 pb-8 lg:p-6">
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => event.key === 'Enter' && handleSend()}
                placeholder="Tanya apa saja..."
                className="flex-1 rounded-[18px] border border-slate-200 bg-white px-5 py-3.5 text-base font-medium outline-none transition-all placeholder:text-slate-400 focus:ring-2 focus:ring-[#6fc7d7]/30 md:px-6 md:py-4"
              />
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleSend()}
                disabled={isLoading || !input.trim()}
                className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[linear-gradient(135deg,#0f2027_0%,#72b39a_100%)] text-white shadow-[0_10px_20px_rgba(114,179,154,0.18)] transition-all disabled:cursor-not-allowed disabled:opacity-50 md:h-14 md:w-14"
              >
                <Send size={20} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

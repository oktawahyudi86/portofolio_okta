import { ArrowUpRight } from 'lucide-react';
import { contactMethods, whatsappUrl } from '../../data/site-content';

export const Contact = () => (
  <section id="contact" className="lazy-render-section section-shell section-tone-contact py-14 lg:py-28 px-4 sm:px-5 md:px-6 xl:px-8 2xl:px-12">
    <div className="section-inner max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div>
        <p className="section-kicker text-[12px] font-semibold mb-3 tracking-[0.14em]">
          <span className="accent-gradient-text">Get in touch</span>
        </p>
        <h2 className="section-heading-display copy-balance max-w-[12ch] font-black text-[#1a2e35] mb-5">
          Open to the right team, project, or delivery challenge.
        </h2>
        <p className="section-intro copy-pretty copy-measure max-w-lg mb-7">
          If you need a Project Manager who can keep planning clear, stakeholders aligned, and execution moving, let&apos;s talk.
        </p>

        <div className="space-y-4">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            const breakClass =
              method.breakStyle === 'break-all'
                ? 'break-all'
                : method.breakStyle === 'break-words'
                  ? 'break-words'
                  : '';

            return (
              <div key={method.href} className="flex items-center gap-4 min-w-0">
                <div className="accent-gradient-soft w-10 h-10 rounded-full flex items-center justify-center text-[#0fa3b1] shadow-sm">
                  <Icon size={18} />
                </div>
                <a
                  href={method.href}
                  target={method.external ? '_blank' : undefined}
                  rel={method.external ? 'noreferrer' : undefined}
                  className={`min-w-0 text-[13px] font-semibold tracking-[0.04em] text-[#0d1f2b] hover:text-[#0fa3b1] transition-colors ${breakClass}`}
                >
                  {method.value}
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <div className="surface-card surface-card-tight p-6 sm:p-8">
        <p className="section-kicker text-[12px] font-semibold tracking-[0.12em] mb-4">
          <span className="accent-gradient-text">WhatsApp</span>
        </p>
        <h3 className="copy-balance max-w-[11ch] text-[1.75rem] sm:text-[2rem] font-black text-[#0a1620] mb-4">Start with a quick brief</h3>
        <p className="copy-pretty max-w-md text-[#1f2937]/80 text-[14px] sm:text-[15px] leading-[1.78] mb-7">
          Send the role, project need, or context, and I&apos;ll reply to continue the conversation.
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

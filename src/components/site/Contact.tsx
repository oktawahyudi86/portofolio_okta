import { ArrowUpRight } from 'lucide-react';
import { contactMethods, whatsappUrl } from '../../data/site-content';

export const Contact = () => (
  <section id="contact" className="lazy-render-section section-shell section-tone-contact section-spacing px-4 sm:px-5 md:px-6 xl:px-8 2xl:px-12">
    <div className="section-inner max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div>
        <div className="section-header-stack">
          <p className="section-kicker section-kicker-label">
            <span className="accent-gradient-text">Get in touch</span>
          </p>
          <h2 className="section-heading-display copy-balance max-w-[12ch] font-black text-[#1a2e35]">
            Open to the right role, team, or project.
          </h2>
          <p className="section-intro copy-pretty copy-measure max-w-lg">
            If you need someone who can keep plans clear, people aligned, and work moving, let&apos;s talk.
          </p>
        </div>

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
              <a
                key={method.href}
                href={method.href}
                target={method.external ? '_blank' : undefined}
                rel={method.external ? 'noopener noreferrer' : undefined}
                className="contact-method-row px-4 py-3.5"
              >
                <div className="icon-accent-chip flex h-11 w-11 items-center justify-center rounded-full">
                  <Icon size={18} />
                </div>
                <span className={`min-w-0 flex-1 eyebrow-copy text-[#0d1f2b] transition-colors ${breakClass}`}>
                  {method.value}
                </span>
                <span className="contact-method-trailing" aria-hidden="true">
                  <ArrowUpRight size={16} />
                </span>
              </a>
            );
          })}
        </div>
      </div>

      <div className="surface-card surface-card-tight p-6 sm:p-8">
        <p className="section-kicker section-kicker-label mb-4">
          <span className="accent-gradient-text">WhatsApp</span>
        </p>
        <h3 className="copy-balance max-w-[11ch] text-[clamp(1.7rem,2vw,2.1rem)] font-black leading-[1.02] tracking-[-0.03em] text-[#0a1620] mb-3.5">Start with a quick brief</h3>
        <p className="copy-pretty supporting-copy max-w-md mb-6">
          Send the role, team, or project context and I&apos;ll get back to you.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-cta-button button-primary ui-pill-label px-6 py-3.5 sm:px-8 sm:py-4"
        >
          Message on WhatsApp
          <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  </section>
);

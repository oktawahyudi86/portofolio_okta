import { ArrowUpRight } from 'lucide-react';
import { handoverSections, handoverUrl } from '../../data/site-content';

export const Handover = () => (
  <section id="handover" className="lazy-render-section section-shell section-tone-contact section-spacing px-4 sm:px-5 md:px-6 xl:px-8 2xl:px-12">
    <div className="section-inner max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div>
        <div className="section-header-stack">
          <p className="section-kicker section-kicker-label">
            <span className="accent-gradient-text">Project Transition</span>
          </p>
          <h2 className="section-heading-display copy-balance max-w-[12ch] font-black text-[#1a2e35]">
            Structured handover for seamless project continuity.
          </h2>
          <p className="section-intro copy-pretty copy-measure max-w-lg">
            Complete documentation and knowledge transfer to ensure the next PM or team can take ownership with full context and delivery readiness.
          </p>
        </div>

        <div className="space-y-4">
          {handoverSections.map((section) => (
            <div key={section.title} className="flex items-start gap-4 min-w-0">
              <div className="accent-gradient-soft w-10 h-10 rounded-full flex items-center justify-center text-[#0fa3b1] shadow-sm flex-shrink-0">
                <span className="text-sm font-bold">{section.icon}</span>
              </div>
              <div className="min-w-0">
                <h3 className="text-[14px] sm:text-[15px] font-semibold tracking-[0.02em] text-[#0d1f2b] mb-1">
                  {section.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-[#0d1f2b]/70 leading-relaxed">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="surface-card surface-card-tight p-6 sm:p-8">
        <p className="section-kicker section-kicker-label mb-4">
          <span className="accent-gradient-text">Documentation</span>
        </p>
        <h3 className="copy-balance max-w-[11ch] text-[1.72rem] sm:text-[1.95rem] font-black leading-[1.04] text-[#0a1620] mb-3.5">
          Handover Package
        </h3>
        <p className="copy-pretty max-w-md text-[#1f2937]/80 text-[15px] sm:text-[16px] leading-[1.78] mb-6">
          All project documentation, delivery history, and knowledge transfer materials in one comprehensive package.
        </p>
        <a
          href={handoverUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-cta-button accent-gradient-bg inline-flex items-center justify-center gap-3 rounded-full px-6 sm:px-8 py-3.5 sm:py-4 text-[13px] sm:text-[14px] font-semibold tracking-[0.08em] shadow-soft transition-transform hover:-translate-y-0.5 hover:opacity-95"
        >
          Access Documentation
          <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  </section>
);

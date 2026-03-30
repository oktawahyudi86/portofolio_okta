import type { ReactNode } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { cvUrl } from '../../data/site-content';
import { sitelinkPages } from '../../data/site-pages';
import type { SitePageMeta } from '../../types/site';

export const SectionPageShell = ({
  page,
  onRouteChange,
  children,
}: {
  page: SitePageMeta;
  onRouteChange: (path: string) => void;
  children: ReactNode;
}) => (
  <main>
    <section className="section-shell section-tone-hero px-4 pt-24 pb-8 sm:px-5 md:px-6 lg:pt-36 xl:px-8 2xl:px-12">
      <div className="section-inner max-w-7xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            onRouteChange('/');
          }}
          className="inline-flex items-center gap-2 rounded-full border border-[#d8e4eb] bg-white px-4 py-2 text-[12px] font-semibold tracking-[0.06em] text-[#173041] shadow-sm transition hover:border-[#0fa3b1]/40 hover:text-[#0fa3b1]"
        >
          <ArrowLeft size={15} />
          Back to home
        </a>

        <div className="mt-6 max-w-4xl">
          <p className="section-kicker text-[12px] font-semibold tracking-[0.14em]">
            <span className="accent-gradient-text">{page.heroEyebrow}</span>
          </p>
          <h1 className="section-heading-display copy-balance mt-4 max-w-[14ch] font-black text-[#102635]">
            {page.heroTitle}
          </h1>
          <p className="section-intro copy-pretty mt-5 max-w-3xl">
            {page.heroDescription}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {page.path !== '/contact' && (
              <a
                href="/contact"
                onClick={(event) => {
                  event.preventDefault();
                  onRouteChange('/contact');
                }}
                className="inline-flex items-center gap-2 rounded-full border border-[#0fa3b1]/20 bg-white px-4 py-2.5 text-[12px] font-semibold tracking-[0.06em] text-[#173041] shadow-sm transition hover:border-[#0fa3b1]/40 hover:text-[#0fa3b1]"
              >
                Contact Page
                <ArrowUpRight size={15} />
              </a>
            )}
            <a
              href={cvUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#d8e4eb] bg-[rgba(255,255,255,0.9)] px-4 py-2.5 text-[12px] font-semibold tracking-[0.06em] text-[#173041] shadow-sm transition hover:border-[#0fa3b1]/40 hover:text-[#0fa3b1]"
            >
              View CV
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {sitelinkPages.map((item) => {
            const isCurrent = item.path === page.path;

            return (
              <motion.a
                key={item.path}
                href={item.path}
                onClick={(event) => {
                  event.preventDefault();
                  onRouteChange(item.path);
                }}
                whileHover={{ y: -2 }}
                className={`surface-card surface-card-tight flex flex-col gap-2 p-4 transition-colors ${
                  isCurrent ? 'border-[#0fa3b1]/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(220,243,234,0.82))]' : ''
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[14px] font-black text-[#102635]">{item.navLabel}</p>
                  <ArrowUpRight size={16} className={isCurrent ? 'text-[#0fa3b1]' : 'text-[#94a3b8]'} />
                </div>
                <p className="copy-pretty text-[12px] leading-relaxed text-[#5f6670]">{item.shortDescription}</p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>

    {children}
  </main>
);

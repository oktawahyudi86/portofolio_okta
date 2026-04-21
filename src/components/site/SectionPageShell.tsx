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
    <section className="section-shell section-tone-hero px-4 pt-16 pb-8 sm:px-5 sm:pt-20 md:px-6 md:pt-24 lg:pt-44 xl:px-8 2xl:px-12">
      <div className="section-inner max-w-7xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            onRouteChange('/');
          }}
          className="site-enter site-enter--section-chip button-secondary ui-pill-label px-4 py-2"
        >
          <ArrowLeft size={15} />
          Back to home
        </a>

        <div className="mt-6 max-w-4xl">
          <p className="section-kicker section-kicker-label mb-0">
            <span className="accent-gradient-text">{page.heroEyebrow}</span>
          </p>
          <h1 className="site-enter site-enter--section-title section-heading-display copy-balance mt-3 max-w-[14ch] font-black text-[#102635]">
            {page.heroTitle}
          </h1>
          <p className="site-enter site-enter--section-copy section-intro copy-pretty mt-4 max-w-3xl">
            {page.heroDescription}
          </p>

          <div className="site-enter site-enter--section-actions mt-5 flex flex-wrap gap-3">
            {page.path !== '/contact' && (
              <a
                href="/contact"
                onClick={(event) => {
                  event.preventDefault();
                  onRouteChange('/contact');
                }}
                className="button-secondary ui-pill-label px-4 py-2.5"
              >
                Contact
                <ArrowUpRight size={15} />
              </a>
            )}
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary ui-pill-label px-4 py-2.5"
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
                  isCurrent ? 'border-[#2f6f8f]/20 bg-[linear-gradient(135deg,rgba(248,251,253,0.98),rgba(233,244,255,0.86))]' : ''
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="card-title font-black text-[#102635]">{item.navLabel}</p>
                  <ArrowUpRight size={16} className={isCurrent ? 'text-[#2f6f8f]' : 'text-[#94a3b8]'} />
                </div>
                <p className="copy-pretty supporting-copy">{item.shortDescription}</p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>

    {children}
  </main>
);

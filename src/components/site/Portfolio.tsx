import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { motion } from 'motion/react';
import { projects } from '../../data/site-content';
import type { Project } from '../../types/site';
import { SmartImage } from './SmartImage';

interface PortfolioItemProps {
  project: Project;
  idx: number;
}

const PortfolioItem = React.memo(({ project, idx }: PortfolioItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="lazy-render-item mobile-portfolio-item grid items-start gap-6 border-b border-[#e3e8ef] pb-7 lg:grid-cols-[1fr_0.92fr] lg:gap-8 lg:pb-8 last:border-0"
  >
    <div className={`order-1 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
      <div className="relative mx-auto w-full max-w-[620px]">
        <div className="surface-card surface-card-tight relative aspect-[16/9] overflow-hidden border border-[#e3e8ef] bg-[#f5f8fa]">
          <SmartImage
            wrapperClassName="h-full w-full"
            skeletonClassName="absolute inset-0 h-full w-full rounded-none"
            src={project.image}
            alt={project.title}
            fallbackSrc="/aset/og-preview.webp"
            loading="lazy"
            fetchPriority="low"
            rootMargin={idx < 2 ? '720px 0px' : '520px 0px'}
            className="h-full w-full object-cover"
            style={{ objectPosition: project.imageFocus || 'center' }}
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>

    <div className={`order-2 space-y-4.5 ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
      <div className="flex flex-wrap items-center gap-2 text-[12px] text-[#5f6670] lg:text-[13px]">
        <span className="font-semibold tracking-[0.08em]">
          <span className="accent-gradient-text">{project.type}</span>
        </span>
        <span className="text-[#c0c7cf]">/</span>
        <span className="text-[#0c1a24]">{project.role}</span>
      </div>

      <h3 className="copy-balance max-w-[16ch] text-[28px] font-black leading-[0.96] tracking-tighter text-[#0d1f2b] lg:text-[38px] xl:text-[42px]">
        {project.title}
      </h3>

      <div className="space-y-3.5">
        <p className="copy-pretty max-w-xl text-[15px] leading-[1.78] text-[#1a2e35]/80 lg:text-[16px]">
          {project.desc}
        </p>
        <div className="border-l-2 border-[#0fa3b1]/35 pl-4">
          <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.08em]">
            <span className="accent-gradient-text">Key impact</span>
          </p>
          <p className="copy-pretty max-w-xl text-[14px] italic leading-[1.76] text-[#0c1a24] lg:text-[15px]">{project.impact}</p>
        </div>
      </div>

      <div>
        <p className="mb-3 text-[12px] font-semibold tracking-[0.08em] text-[#5f6670]">Common interview topics</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-xl border border-[#e3e8ef] bg-[#f8fafc] px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.03em] text-[#1a2e35] lg:text-[12px]">
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
        className="flex items-center gap-3 text-[#1a2e35] group/btn"
      >
        <span className="text-[13px] font-semibold tracking-[0.08em]">View project reference</span>
        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-[#d7e2e8] flex items-center justify-center group-hover/btn:bg-[#0c1a24] group-hover/btn:text-white transition-all duration-300">
          <ArrowUpRight size={18} />
        </div>
      </motion.a>
    </div>
  </motion.div>
));

PortfolioItem.displayName = 'PortfolioItem';

export const Portfolio = () => {
  const githubUrl = 'https://github.com/oktawahyu';

  return (
    <section id="portfolio" className="lazy-render-section section-shell section-tone-portfolio section-spacing px-4 sm:px-5 md:px-6 xl:px-8 2xl:px-12">
      <div className="section-inner max-w-7xl xl:max-w-6xl 2xl:max-w-7xl mx-auto relative z-10">
        <div className="section-header-stack">
          <p className="section-kicker section-kicker-label">
            <span className="accent-gradient-text">Selected Project Experience</span>
          </p>
          <h2 className="section-heading-display copy-balance max-w-[14ch] font-black text-[#1a2e35]">
            <span className="accent-gradient-text">Case Studies</span>{' '}
            <span className="accent-gradient-text italic font-serif">That Show How I Work</span>
          </h2>
          <p className="section-intro copy-pretty copy-measure-wide max-w-2xl">
            A selection of projects that show how I manage scope, coordination, and release execution.
          </p>
        </div>

        <div className="space-y-6 lg:space-y-7 2xl:space-y-8">
          {projects.map((project, idx) => (
            <PortfolioItem key={idx} project={project} idx={idx} />
          ))}
        </div>

        <div className="mt-9 flex justify-center border-t border-[#e3e8ef] pt-8">
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

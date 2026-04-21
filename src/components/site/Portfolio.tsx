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
            width={1280}
            height={720}
            sizes="(min-width: 1280px) 620px, (min-width: 1024px) 46vw, 92vw"
            className="h-full w-full object-cover"
            style={{ objectPosition: project.imageFocus || 'center' }}
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>

    <div className={`order-2 space-y-4.5 ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
      <div className="mobile-portfolio-meta flex flex-wrap items-center gap-2 ui-pill-label text-[#5f6670]">
        <span className="ui-pill-label">
          <span className="accent-gradient-text">{project.type}</span>
        </span>
        <span className="text-[#c0c7cf]">/</span>
        <span className="text-[#0c1a24]">{project.role}</span>
      </div>

      <h3 className="mobile-portfolio-title copy-balance max-w-[16ch] text-[clamp(1.9rem,3.1vw,2.6rem)] font-black leading-[1.02] tracking-[-0.04em] text-[#0d1f2b]">
        {project.title}
      </h3>

      <div className="space-y-3.5">
      <p className="copy-pretty supporting-copy max-w-xl">
          {project.desc}
        </p>
        <div className="border-l-2 border-[#2f6f8f]/35 pl-4">
        <p className="section-kicker-label mb-2">
            <span className="accent-gradient-text">Key impact</span>
          </p>
          <p className="copy-pretty max-w-xl text-[14px] italic leading-[1.76] text-[#0c1a24] lg:text-[15px]">{project.impact}</p>
        </div>
      </div>

      <div>
      <p className="section-kicker-label mb-3 text-[#5f6670]">Focus areas</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
          <span key={tag} className="tag-pill-soft ui-pill-label rounded-xl px-3.5 py-1.5">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <motion.a
        whileHover={{ x: 10 }}
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-portfolio-link group/btn inline-flex items-center gap-3 text-[#1a2e35] transition-colors hover:text-[#1d4ed8]"
      >
        <span className="ui-pill-label">Open project</span>
        <div className="icon-button-soft h-10 w-10 lg:h-12 lg:w-12">
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
            <span className="accent-gradient-text">Selected Work</span>
          </p>
          <h2 className="section-heading-display copy-balance max-w-[14ch] font-black text-[#1a2e35]">
            <span className="accent-gradient-text">Case studies</span>{' '}
            <span>that show how I work</span>
          </h2>
          <p className="section-intro copy-pretty copy-measure-wide max-w-2xl">
            A few projects that show how I organize scope, teams, and release work.
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
            rel="noopener noreferrer"
        className="mobile-cta-button button-primary ui-pill-label px-12 py-5"
          >
            Explore more on GitHub
            <Github size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

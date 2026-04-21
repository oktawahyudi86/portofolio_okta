import { motion } from 'motion/react';
import { skills } from '../../data/site-content';

export const Skills = () => (
  <section id="skills" className="lazy-render-section section-shell section-tone-skills section-spacing px-4 sm:px-5 md:px-6 xl:px-8 2xl:px-12 relative overflow-hidden">
    <div className="section-inner max-w-7xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
      <div className="section-header-inline">
        <div className="max-w-xl 2xl:max-w-2xl">
          <h2 className="section-heading-display copy-balance max-w-[11ch] font-black text-[#1a2e35]">
            Core <span className="accent-gradient-text">Strengths</span>
          </h2>
        </div>
        <p className="section-intro copy-pretty max-w-md">
          The strengths I rely on to keep work clear, teams aligned, and releases steady.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-7">
        {skills.map((skill, idx) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={idx}
              whileHover={{ y: -2 }}
              className="border-t border-[#dbe3ea] pt-6 lg:pt-7"
            >
              <div className="icon-accent-chip mb-5 flex h-11 w-11 items-center justify-center rounded-[14px]">
                <Icon size={20} />
              </div>
            <h3 className="copy-balance card-title font-black text-[#0c1a24] mb-3">{skill.title}</h3>
            <p className="copy-pretty supporting-copy">{skill.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

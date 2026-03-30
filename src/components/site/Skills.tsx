import { motion } from 'motion/react';
import { skills } from '../../data/site-content';

export const Skills = () => (
  <section id="skills" className="lazy-render-section section-shell section-tone-skills py-12 lg:py-24 2xl:py-32 px-4 sm:px-5 md:px-6 xl:px-8 2xl:px-12 relative overflow-hidden">
    <div className="section-inner max-w-7xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-16 2xl:mb-20 gap-8">
        <div className="max-w-xl 2xl:max-w-2xl">
          <h2 className="section-heading-display copy-balance max-w-[11ch] font-black text-[#1a2e35]">
            Core <span className="accent-gradient-text">Capabilities</span>
          </h2>
        </div>
        <p className="section-intro copy-pretty max-w-sm font-medium">
          The strengths I rely on to keep delivery structured, teams aligned, and releases moving.
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
              <div className="w-11 h-11 rounded-[14px] bg-[#0fa3b1]/10 text-[#0fa3b1] flex items-center justify-center mb-5">
                <Icon size={20} />
              </div>
              <h3 className="copy-balance text-[1.15rem] 2xl:text-[1.4rem] font-black text-[#0c1a24] mb-3 tracking-tight">{skill.title}</h3>
              <p className="copy-pretty text-[14px] 2xl:text-[15px] text-[#5f6670] leading-[1.72] font-medium">{skill.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

import { motion } from 'motion/react';
import { experiences } from '../../data/site-content';

export const Journey = () => {
  const renderRoadmapContent = (exp: (typeof experiences)[number]) => (
    <div
      className={`mx-auto flex w-full max-w-[170px] flex-col items-center text-center 2xl:max-w-[184px] ${
        exp.current
          ? 'rounded-[22px] border border-[#2f6f8f]/20 bg-[linear-gradient(135deg,rgba(248,251,253,0.98),rgba(233,244,255,0.86))] px-4 py-4 shadow-[0_14px_30px_rgba(15,32,39,0.08)]'
          : ''
      }`}
    >
      <div className="mb-1.5 flex min-h-[24px] items-center justify-center gap-2">
        <p className="section-kicker-label">
          <span className="accent-gradient-text">{exp.date}</span>
        </p>
      </div>
      <div className="min-h-[80px]">
        <h3 className="mb-1.5 text-[clamp(0.98rem,1.04vw,1.14rem)] font-bold leading-[1.16] tracking-[-0.018em] text-[#12212d]">
          {exp.company}
        </h3>
        <p className="copy-pretty eyebrow-copy text-[#243341]">{exp.position}</p>
      </div>
    </div>
  );

  return (
    <section id="journey" className="lazy-render-section section-shell section-tone-journey section-spacing px-4 sm:px-5 md:px-6 xl:px-8 2xl:px-12">
      <div className="section-inner max-w-7xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="section-header-stack">
          <p className="section-kicker section-kicker-label">
            <span className="accent-gradient-text">Milestones</span>
          </p>
          <h2 className="section-heading-display copy-balance max-w-[12ch] font-black text-[#0c1a24]">
            Career Journey
          </h2>
          <p className="section-intro copy-pretty max-w-2xl">
            A simple view of the roles that shaped how I plan, align, and lead work.
          </p>
        </div>

        <div className="mobile-journey-list xl:hidden">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: 2 }}
              className="mobile-journey-item relative py-2 pl-8 pr-2"
            >
              <div
                className={`absolute left-0 top-2 bottom-2 w-px ${
                  exp.current
                    ? 'bg-[linear-gradient(180deg,#dbe3ea_0%,#7dd3e8_28%,#203a43_72%,#dbe3ea_100%)]'
                    : 'bg-[#dbe3ea]'
                }`}
                aria-hidden="true"
              />
              <div
                className={`absolute rounded-full ${
                  exp.current
                    ? 'left-[-7px] top-2.5 h-[14px] w-[14px] bg-[#203a43] ring-[5px] ring-[#dff3f8] shadow-[0_8px_18px_rgba(15,32,39,0.16)]'
                    : 'left-[-5px] top-3 h-[10px] w-[10px] bg-[#2f6f8f]/75 ring-4 ring-[#f4f6fb]'
                }`}
                aria-hidden="true"
              />

              <div
                className={
                  exp.current
                    ? 'mobile-journey-card mobile-journey-card--current rounded-[20px] border border-[#2f6f8f]/20 bg-[linear-gradient(135deg,rgba(248,251,253,0.98),rgba(233,244,255,0.86))] px-4 py-4 shadow-[0_14px_28px_rgba(15,32,39,0.08)]'
                    : 'mobile-journey-card'
                }
              >
                <div className="mb-2.5 flex flex-wrap items-center gap-2">
                  <p className="section-kicker-label">
                    <span className="accent-gradient-text">{exp.date}</span>
                  </p>
                </div>
                <h3 className="mb-1.5 text-[clamp(0.98rem,1.04vw,1.14rem)] font-bold leading-[1.16] tracking-[-0.018em] text-[#12212d]">
                  {exp.company}
                </h3>
                <p className="copy-pretty eyebrow-copy text-[#243341]">{exp.position}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="hidden xl:block">
          <div className="pb-2">
            <div className="relative w-full px-4 pt-2 pb-6">
              <div className="grid min-h-[168px] grid-cols-6 items-end gap-6">
                {experiences.map((exp, idx) =>
                  idx % 2 === 1 ? (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -2 }}
                      className="flex justify-center"
                    >
                      {renderRoadmapContent(exp)}
                    </motion.div>
                  ) : (
                    <div key={idx} aria-hidden="true" />
                  ),
                )}
              </div>

              <div className="relative mb-6 h-[170px]">
                <svg
                  className="absolute inset-x-0 top-[42px] h-[118px] w-full"
                  viewBox="0 0 1180 118"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M10 60C58 60 58 88 108 88C158 88 158 16 208 16C258 16 258 88 308 88C358 88 358 16 408 16C458 16 458 88 508 88C558 88 558 16 608 16C658 16 658 88 708 88C758 88 758 16 808 16C858 16 858 88 908 88C958 88 958 16 1008 16C1058 16 1058 88 1108 88C1152 88 1152 60 1170 60"
                    stroke="#203a43"
                    strokeWidth="34"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10 60C58 60 58 88 108 88C158 88 158 16 208 16C258 16 258 88 308 88C358 88 358 16 408 16C458 16 458 88 508 88C558 88 558 16 608 16C658 16 658 88 708 88C758 88 758 16 808 16C858 16 858 88 908 88C958 88 958 16 1008 16C1058 16 1058 88 1108 88C1152 88 1152 60 1170 60"
                    stroke="rgba(248,251,253,0.84)"
                    strokeWidth="2.5"
                    strokeDasharray="10 12"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="relative grid grid-cols-6 gap-6">
                  {experiences.map((exp, idx) => {
                    const yOffset = idx % 2 === 0 ? 'pt-[98px]' : 'pt-[28px]';

                    return (
                      <div key={idx} className={`mx-auto flex w-full max-w-[170px] flex-col items-center 2xl:max-w-[184px] ${yOffset}`}>
                        <div
                          className={`relative flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#f8fbfd] shadow-[0_12px_24px_rgba(15,23,42,0.08)] ${
                            exp.current
                              ? 'ring-[12px] ring-[#dff3f8] shadow-[0_18px_32px_rgba(125,211,232,0.24)]'
                              : 'ring-8 ring-[#f4f6fb]'
                          }`}
                        >
                          {exp.current && (
                            <>
                              <div className="absolute inset-[-9px] rounded-full border-2 border-[#7dd3e8]/35" />
                            </>
                          )}
                          <div
                            className={`relative flex h-[54px] w-[54px] items-center justify-center rounded-full text-[15px] font-black text-white ${
                              exp.current ? 'accent-gradient-bg shadow-[0_12px_24px_rgba(15,32,39,0.20)]' : 'bg-[#2f6f8f]'
                            }`}
                          >
                            0{idx + 1}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="grid min-h-[168px] grid-cols-6 gap-6">
                {experiences.map((exp, idx) =>
                  idx % 2 === 0 ? (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -2 }}
                      className="flex justify-center"
                    >
                      {renderRoadmapContent(exp)}
                    </motion.div>
                  ) : (
                    <div key={idx} aria-hidden="true" />
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

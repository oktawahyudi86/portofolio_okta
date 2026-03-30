import { motion } from 'motion/react';
import { experiences } from '../../data/site-content';

export const Journey = () => {
  const renderRoadmapContent = (exp: (typeof experiences)[number]) => (
    <div
      className={`mx-auto flex w-[188px] flex-col items-center text-center ${
        exp.current
          ? 'rounded-[22px] border border-[#0fa3b1]/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(220,243,234,0.82))] px-4 py-4 shadow-[0_14px_30px_rgba(15,32,39,0.08)]'
          : ''
      }`}
    >
      <div className="mb-2 flex min-h-[24px] items-center justify-center gap-2">
        <p className="text-[12px] font-semibold tracking-[0.08em]">
          <span className="accent-gradient-text">{exp.date}</span>
        </p>
        {exp.current && (
            <span className="inline-flex items-center gap-1 rounded-full border border-[#0fa3b1]/20 bg-white/90 px-2.5 py-1 text-[10px] font-black tracking-[0.12em] shadow-[0_8px_16px_rgba(15,32,39,0.07)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#72b39a] animate-pulse" />
            <span className="accent-gradient-text">CURRENT</span>
          </span>
        )}
      </div>
      <div className="min-h-[114px]">
        <h3 className="copy-balance mb-1 text-[18px] font-black leading-[1.15] text-[#12212d]">{exp.label}</h3>
        <p className="mb-4 text-[13px] font-medium leading-[1.45] text-[#72808d]">{exp.location}</p>
        <p className="copy-pretty mb-4 text-[13px] font-semibold leading-[1.6] text-[#243341]">{exp.position}</p>
        <p className="copy-pretty text-[13px] leading-[1.6] text-[#6f7c89]">{exp.highlight}</p>
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
            A concise view of the roles that shaped how I plan, align, and deliver software projects.
          </p>
        </div>

        <div className="lg:hidden space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: 2 }}
              className="relative pl-8 pr-2 py-2"
            >
              <div
                className={`absolute left-0 top-2 bottom-2 w-px ${
                  exp.current
                    ? 'bg-[linear-gradient(180deg,#dbe3ea_0%,#72b39a_28%,#203a43_72%,#dbe3ea_100%)]'
                    : 'bg-[#dbe3ea]'
                }`}
                aria-hidden="true"
              />
              <div
                className={`absolute rounded-full ${
                  exp.current
                    ? 'left-[-7px] top-2.5 h-[14px] w-[14px] bg-[#203a43] ring-[5px] ring-[#ddf1e8] shadow-[0_8px_18px_rgba(15,32,39,0.16)]'
                    : 'left-[-5px] top-3 h-[10px] w-[10px] bg-[#0fa3b1]/75 ring-4 ring-[#f4f6fb]'
                }`}
                aria-hidden="true"
              />

              <div
                className={
                  exp.current
                    ? 'rounded-[20px] border border-[#0fa3b1]/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(220,243,234,0.82))] px-4 py-4 shadow-[0_14px_28px_rgba(15,32,39,0.08)]'
                    : ''
                }
              >
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <p className="text-[12px] font-semibold tracking-[0.08em]">
                    <span className="accent-gradient-text">{exp.date}</span>
                  </p>
                  {exp.current && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-[#0fa3b1]/20 bg-white/90 px-2.5 py-1 text-[11px] font-black tracking-[0.12em] shadow-[0_8px_16px_rgba(15,32,39,0.07)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#72b39a] animate-pulse" />
                      <span className="accent-gradient-text">CURRENT ROLE</span>
                    </span>
                  )}
                </div>
                <h3 className="copy-balance text-[18px] font-black text-[#12212d] mb-1.5">{exp.company}</h3>
                <p className="copy-pretty text-[15px] text-[#243341] font-semibold mb-2">{exp.position}</p>
                <p className="text-[13px] text-[#72808d] mb-3">{exp.location}</p>
                <p className="copy-pretty text-[14px] text-[#41505d] leading-[1.72]">{exp.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="hidden lg:block">
          <div className="overflow-x-auto no-scrollbar pb-4">
            <div className="relative min-w-[1120px] px-4 pt-2 pb-6">
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
                  viewBox="0 0 1120 118"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M8 60C54 60 54 88 101 88C148 88 148 16 195 16C242 16 242 88 289 88C336 88 336 16 383 16C430 16 430 88 477 88C524 88 524 16 571 16C618 16 618 88 665 88C712 88 712 16 759 16C806 16 806 88 853 88C900 88 900 16 947 16C994 16 994 88 1041 88C1088 88 1088 60 1112 60"
                    stroke="#203a43"
                    strokeWidth="34"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 60C54 60 54 88 101 88C148 88 148 16 195 16C242 16 242 88 289 88C336 88 336 16 383 16C430 16 430 88 477 88C524 88 524 16 571 16C618 16 618 88 665 88C712 88 712 16 759 16C806 16 806 88 853 88C900 88 900 16 947 16C994 16 994 88 1041 88C1088 88 1088 60 1112 60"
                    stroke="rgba(255,255,255,0.82)"
                    strokeWidth="2.5"
                    strokeDasharray="10 12"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="relative grid grid-cols-6 gap-6">
                  {experiences.map((exp, idx) => {
                    const yOffset = idx % 2 === 0 ? 'pt-[98px]' : 'pt-[28px]';

                    return (
                      <div key={idx} className={`mx-auto flex w-[182px] flex-col items-center ${yOffset}`}>
                        <div
                          className={`relative flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white shadow-[0_12px_24px_rgba(15,23,42,0.08)] ${
                            exp.current
                              ? 'ring-[12px] ring-[#ddf1e8] shadow-[0_18px_32px_rgba(114,179,154,0.20)]'
                              : 'ring-8 ring-[#f4f6fb]'
                          }`}
                        >
                          {exp.current && (
                            <>
                              <div className="absolute inset-[-9px] rounded-full border-2 border-[#72b39a]/35 animate-pulse" />
                              <span className="absolute -right-5 -top-3 rounded-full border border-[#0fa3b1]/20 bg-white px-2.5 py-1 text-[9px] font-black tracking-[0.12em] shadow-[0_8px_16px_rgba(15,32,39,0.08)]">
                                <span className="accent-gradient-text">NOW</span>
                              </span>
                            </>
                          )}
                          <div
                            className={`relative flex h-[54px] w-[54px] items-center justify-center rounded-full text-[15px] font-black text-white ${
                              exp.current ? 'accent-gradient-bg shadow-[0_12px_24px_rgba(15,32,39,0.20)]' : 'bg-[#0fa3b1]'
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

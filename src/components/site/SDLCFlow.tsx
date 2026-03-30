import React from 'react';
import { FolderKanban, Info, MessageCircle, Send, Users } from 'lucide-react';
import { motion } from 'motion/react';
import {
  featureCards,
  reportingStructure,
  scrumFlowSteps,
  scrumRoles,
  tools,
} from '../../data/site-content';
import { FeatureIcon, ReportingIcon, ToolsCarousel } from './SDLCFlowPrimitives';

export const SDLCFlow = () => {
  const FlowArrow = ({
    width = 56,
    direction = 'right',
  }: {
    width?: number;
    direction?: 'right' | 'down';
  }) =>
    direction === 'down' ? (
      <svg width="20" height={width} viewBox={`0 0 20 ${width}`} fill="none" aria-hidden="true" className="shrink-0">
        <path d={`M10 2V${width - 14}`} stroke="#72b39a" strokeWidth="5" strokeLinecap="round" />
        <path d={`M5 ${width - 20}L10 ${width - 10}L15 ${width - 20}`} stroke="#72b39a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ) : (
      <svg width={width} height="18" viewBox={`0 0 ${width} 18`} fill="none" aria-hidden="true" className="shrink-0">
        <path d={`M2 9H${width - 14}`} stroke="#72b39a" strokeWidth="5" strokeLinecap="round" />
        <path d={`M${width - 20} 4L${width - 10} 9L${width - 20} 14`} stroke="#72b39a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );

  const ScrumFlowNode = ({
    title,
    desc,
    icon,
  }: {
    title: string;
    desc: string;
    icon: React.ReactNode;
  }) => (
    <div className="flex min-w-0 flex-col items-center text-center">
      <div className="accent-gradient-bg mb-3 flex h-[68px] w-[68px] items-center justify-center rounded-full border border-[#cfe7eb] text-white shadow-[0_6px_14px_rgba(114,179,154,0.16)]">
        {icon}
      </div>
      <h4 className="text-[13px] font-black leading-tight text-[#1a2e35]">{title}</h4>
      <p className="mt-1 max-w-[124px] text-[12px] leading-[1.55] text-[#6b7785]">{desc}</p>
    </div>
  );

  return (
    <>
      <section id="tools" className="lazy-render-section section-shell section-tone-tools section-spacing px-4 sm:px-5 md:px-6 xl:px-8 2xl:px-12">
        <div className="section-inner max-w-7xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
          <div className="section-header-inline">
            <div className="max-w-xl 2xl:max-w-2xl">
              <h2 className="section-heading-display copy-balance max-w-[12ch] font-black text-[#1a2e35]">
                Tools & <span className="accent-gradient-text">Project Management</span>
              </h2>
            </div>
            <p className="section-intro copy-pretty max-w-md">
              The tools I rely on to keep planning visible, teams aligned, and delivery easier to control.
            </p>
          </div>

          <div className="mb-14 lg:mb-18 2xl:mb-20">
            <p className="text-[13px] font-semibold text-[#5f6670] tracking-[0.08em] mb-8">Primary delivery toolkit</p>
            <ToolsCarousel tools={tools} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 2xl:gap-10">
            {featureCards.map((card) => (
              <motion.div
                key={card.title}
                whileHover={{ y: -2 }}
                className="border-t border-[#dbe3ea] pt-6 lg:pt-8 flex flex-col gap-3 items-start"
              >
                <FeatureIcon type={card.type} />
                <h3 className="text-[15px] font-black text-[#1a2e35] mb-0">{card.title}</h3>
                <p className="copy-pretty text-[14px] text-[#5f6670] leading-[1.72]">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="sdlc" className="lazy-render-section section-shell section-tone-tools section-spacing px-4 sm:px-5 md:px-6 xl:px-8 2xl:px-12">
        <div className="section-inner max-w-7xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
          <div className="section-header-inline">
            <div className="max-w-xl 2xl:max-w-2xl">
              <h2 className="section-heading-display copy-balance max-w-[10ch] font-black text-[#1a2e35]">
                SDLC <span className="accent-gradient-text">Scrum Flow</span>
              </h2>
            </div>
            <p className="section-intro copy-pretty max-w-md">
              A working model I use to keep sprint delivery clear, disciplined, and easier to manage.
            </p>
          </div>

          <div className="mb-14 lg:mb-18 2xl:mb-20">
            <div className="xl:hidden">
              <div className="rounded-[20px] border border-[#e3e8ef] bg-[#fbfdff] p-4 sm:p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  {scrumRoles.map((role) => (
                    <span key={role} className="rounded-full border border-[#d9ebee] bg-white px-2.5 py-1.5 text-[10px] font-semibold tracking-[0.03em] text-[#5f6670]">
                      {role}
                    </span>
                  ))}
                </div>

                <div className="space-y-3">
                  {scrumFlowSteps.map((step, idx) => {
                    const Icon = step.icon;

                    return (
                      <React.Fragment key={step.title}>
                        <div className="flex items-center gap-3 rounded-[16px] border border-[#e3e8ef] bg-white p-3.5">
                          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#55c8d5] text-white">
                            <Icon size={18} />
                          </div>
                          <div>
                            <h4 className="text-[14px] font-black text-[#0c1a24]">{step.title}</h4>
                            <p className="copy-pretty mt-1 text-[12px] text-[#5f6670] leading-[1.62]">{step.desc}</p>
                          </div>
                        </div>
                        {idx < scrumFlowSteps.length - 1 && (
                          <div className="flex justify-center">
                            <svg width="18" height="30" viewBox="0 0 18 30" fill="none" aria-hidden="true">
                              <path d="M9 2V22" stroke="#72b39a" strokeWidth="4" strokeLinecap="round" />
                              <path d="M3 18L9 26L15 18" stroke="#72b39a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>

                <div className="relative mt-5 rounded-[20px] border border-[#dcecf0] bg-white px-4 py-5">
                  <div className="mx-auto flex h-[152px] w-[152px] items-center justify-center rounded-full border-[12px] border-[#0fa3b1] text-center">
                    <div>
                      <p className="text-[12px] font-semibold tracking-[0.08em] text-[#5f6670]">SPRINT</p>
                      <p className="mt-1 text-[24px] font-black leading-none text-[#1a2e35]">1-4</p>
                      <p className="text-[13px] font-semibold tracking-[0.04em] text-[#5f6670]">WEEKS</p>
                    </div>
                  </div>
                  <div className="absolute right-3 top-3 rounded-full border border-[#dcecf0] bg-[#f7fcfd] px-3 py-2 text-center">
                    <p className="text-[11px] font-black">
                      <span className="accent-gradient-text">24 H</span>
                    </p>
                    <p className="text-[10px] font-semibold tracking-[0.04em] text-[#72808d]">Daily Scrum</p>
                  </div>
                </div>

                <div className="mt-5 flex justify-center">
                  <FlowArrow width={52} direction="down" />
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="rounded-[16px] border border-[#e3e8ef] bg-white p-3.5 text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#0fa3b1] text-white">
                      <Send size={18} />
                    </div>
                    <h4 className="text-[14px] font-black text-[#0c1a24]">Finished Work</h4>
                    <p className="mt-1 text-[12px] text-[#5f6670]">Potentially shippable increment</p>
                  </div>
                  <div className="rounded-[16px] border border-[#e3e8ef] bg-white p-3.5 text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#55c8d5] text-white">
                      <MessageCircle size={18} />
                    </div>
                    <h4 className="text-[14px] font-black text-[#0c1a24]">Sprint Review + Retrospective</h4>
                    <p className="mt-1 text-[12px] text-[#5f6670]">Inspect results and improve the next sprint</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden xl:block">
              <div className="overflow-hidden rounded-[24px] border border-[#e3e8ef] bg-[#fbfdff] px-8 py-10 2xl:px-10">
                <div className="mb-8 flex items-center justify-between text-center">
                  <div className="flex w-[132px] flex-col items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9ebee] bg-[#f9fcfd] text-[#0fa3b1]">
                      <FolderKanban size={16} />
                    </div>
                    <p className="text-[12px] font-semibold text-[#5f6670]">Product Owner</p>
                  </div>
                  <div className="flex w-[132px] flex-col items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9ebee] bg-[#f9fcfd] text-[#0fa3b1]">
                      <Users size={16} />
                    </div>
                    <p className="text-[12px] font-semibold text-[#5f6670]">Team</p>
                  </div>
                  <div className="flex w-[148px] flex-col items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9ebee] bg-[#f9fcfd] text-[#0fa3b1]">
                      <Info size={16} />
                    </div>
                    <p className="text-[12px] font-semibold text-[#5f6670]">Scrum Master</p>
                  </div>
                  <div className="flex w-[172px] flex-col items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9ebee] bg-[#f9fcfd] text-[#0fa3b1]">
                      <MessageCircle size={16} />
                    </div>
                    <p className="text-[12px] font-semibold text-[#5f6670]">Sprint Review + Retrospective</p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <ScrumFlowNode
                      title={scrumFlowSteps[0].title}
                      desc={scrumFlowSteps[0].desc}
                      icon={React.createElement(scrumFlowSteps[0].icon, { size: 18 })}
                    />
                    <div className="pt-[34px]"><FlowArrow width={44} /></div>
                    <ScrumFlowNode
                      title={scrumFlowSteps[1].title}
                      desc={scrumFlowSteps[1].desc}
                      icon={React.createElement(scrumFlowSteps[1].icon, { size: 18 })}
                    />
                    <div className="pt-[34px]"><FlowArrow width={44} /></div>
                    <ScrumFlowNode
                      title={scrumFlowSteps[2].title}
                      desc={scrumFlowSteps[2].desc}
                      icon={React.createElement(scrumFlowSteps[2].icon, { size: 18 })}
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="pt-[34px]"><FlowArrow width={52} /></div>

                    <div className="relative h-[250px] w-[320px]">
                      <div className="absolute left-1/2 top-1/2 flex h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[14px] border-[#0fa3b1] bg-white text-center shadow-[0_10px_22px_rgba(114,179,154,0.14)]">
                        <div>
                          <p className="text-[14px] font-semibold tracking-[0.08em] text-[#5f6670]">SPRINT</p>
                          <p className="mt-1 text-[34px] font-black leading-none text-[#1a2e35]">1-4</p>
                          <p className="text-[15px] font-semibold tracking-[0.04em] text-[#5f6670]">WEEKS</p>
                        </div>
                      </div>

                      <div className="absolute left-[58px] top-[128px] h-0 w-0 rotate-[16deg] border-y-[9px] border-r-[12px] border-y-transparent border-r-[#0fa3b1]" />
                      <div className="absolute right-[64px] bottom-[52px] h-0 w-0 rotate-[-12deg] border-y-[9px] border-l-[12px] border-y-transparent border-l-[#0fa3b1]" />

                      <div className="absolute right-[18px] top-[22px] flex h-[88px] w-[88px] items-center justify-center rounded-full border-[10px] border-[#0fa3b1] border-l-transparent border-b-transparent bg-white rotate-[32deg]">
                        <div className="-rotate-[32deg] text-center">
                          <p className="text-[16px] font-black text-[#1a2e35]">24 H</p>
                        </div>
                      </div>
                      <div className="absolute right-[-52px] top-[54px]">
                        <div className="rounded-[7px] border border-[#b9e2e7] bg-[#eff9fb] px-3 py-1.5">
                          <p className="text-[12px] font-semibold leading-none text-[#0f5160]">Daily Scrum</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-[34px]"><FlowArrow width={70} /></div>

                    <div className="flex min-w-0 flex-col items-center text-center">
                      <div className="accent-gradient-bg mb-3 flex h-[68px] w-[68px] items-center justify-center rounded-full border border-[#cfe7eb] text-white shadow-[0_6px_14px_rgba(114,179,154,0.16)]">
                        <Send size={18} />
                      </div>
                      <h4 className="text-[13px] font-black leading-tight text-[#1a2e35]">Finished Work</h4>
                      <p className="mt-1 max-w-[132px] text-[12px] leading-[1.55] text-[#6b7785]">Potentially shippable increment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-0">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-11 h-11 rounded-[14px] bg-[#0fa3b1] text-white flex items-center justify-center border border-white/40">
                <svg width="22" height="22" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 10H28" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M8 18H22" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M8 26H18" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
                  <circle cx="26" cy="18" r="3" stroke="white" strokeWidth="2.2" />
                  <path d="M26 12V9" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M31 18H34" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-[17px] lg:text-[19px] font-black text-[#1a2e35]">Reporting & Stakeholder Communication</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 2xl:gap-10">
              {reportingStructure.map((report, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 4 }}
                  className="border-l-2 border-[#dbe3ea] pl-5 lg:pl-6 py-2"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <ReportingIcon variant={report.variant} />
                    <div>
                      <h4 className="text-[15px] font-black text-[#1a2e35]">{report.level}</h4>
                      <p className="text-[13px] text-[#5f6670] font-semibold tracking-[0.04em]">{report.frequency}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {report.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#0fa3b1]" />
                        <span className="text-[14px] text-[#1f2937] font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

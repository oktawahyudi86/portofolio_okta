import React from 'react';
import { heroHighlights, heroStats } from '../../data/site-content';
import { SmartImage } from './SmartImage';

export const Hero = () => {
  React.useEffect(() => {
    const preloadId = 'hero-image-preload';
    let preloadLink = document.getElementById(preloadId) as HTMLLinkElement | null;

    if (!preloadLink) {
      preloadLink = document.createElement('link');
      preloadLink.id = preloadId;
      preloadLink.rel = 'preload';
      preloadLink.as = 'image';
      preloadLink.href = '/aset/profil-hero-new.webp';
      preloadLink.type = 'image/webp';
      preloadLink.setAttribute('fetchpriority', 'high');
      document.head.appendChild(preloadLink);
    }

    return () => {
      preloadLink?.remove();
    };
  }, []);

  return (
    <section id="home" className="mobile-hero-shell section-shell section-tone-hero pt-12 sm:pt-16 lg:pt-[16rem] pb-10 lg:pb-20 px-4 sm:px-5 md:px-6 xl:px-8 2xl:px-12 relative overflow-hidden lg:overflow-visible">
      <div className="mobile-hero-grid section-inner max-w-7xl xl:max-w-6xl 2xl:max-w-7xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20 items-center">
        <div>
          <div className="mobile-hero-badge accent-gradient-soft inline-block mt-1 lg:mt-3 px-4 py-1.5 rounded-full font-semibold mb-5 tracking-[0.08em] text-[12px] lg:text-[13px] border border-[#0fa3b1]/20">
            <span className="accent-gradient-text">Mid-Level IT Project Manager</span>
          </div>
          <h1 className="mobile-hero-title copy-balance max-w-[10.5ch] lg:max-w-[11.6ch] text-[clamp(2.45rem,10.2vw,4.7rem)] lg:text-[clamp(3.45rem,5.35vw,4.28rem)] font-black text-[#0c1a24] leading-[0.94] mb-3 lg:mb-2 tracking-[-0.045em]">
            <span className="block">Leading delivery</span>
            <span className="accent-gradient-text block pb-1">with clarity,</span>
            <span className="block">control, and trust.</span>
          </h1>

          <div className="mobile-hero-copy copy-measure mb-3 lg:mb-2 max-w-[520px] border-l-2 border-[#0fa3b1]/35 pl-4 sm:pl-5">
            <p className="text-[11px] lg:text-[12px] font-semibold tracking-[0.12em] uppercase mb-1.5">
              <span className="accent-gradient-text">What I bring</span>
            </p>
            <p className="copy-pretty text-[15px] sm:text-[16px] lg:text-[16px] text-[#0c1a24] leading-[1.68] font-semibold mb-2">
              I keep teams aligned, sprints focused, and releases moving.
            </p>
            <ul className="space-y-1 text-[14px] sm:text-[15px] lg:text-[15px] text-[#5f6670] leading-[1.68]">
              {heroHighlights.map((item) => (
                <li key={item} className="copy-pretty">{item}</li>
              ))}
            </ul>
          </div>

          <div className="mobile-hero-stats grid grid-cols-2 gap-4 sm:gap-6 border-t border-[#e3e8ef] pt-3 lg:pt-2.5 mb-0 max-w-[400px]">
            {heroStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="text-[1.95rem] sm:text-[2.2rem] lg:text-[2.35rem] font-black text-[#0c1a24]">{stat.value}</span>
                <p className="copy-pretty mx-auto max-w-[10ch] text-[11px] sm:text-[12px] lg:text-[12px] text-[#5f6670] tracking-[0.06em] uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full lg:-mt-4 flex flex-col items-center">
          <div className="mobile-hero-visual relative mx-auto w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[470px] xl:max-w-[500px] aspect-[0.92/1]">
            <div className="absolute inset-x-[4%] top-[14%] bottom-[7%] rounded-[22px] bg-[radial-gradient(circle_at_72%_85%,rgba(114,179,154,0.95),transparent_34%),linear-gradient(180deg,#112a31_0%,#1e3b40_58%,#78bea1_100%)] shadow-[0_26px_56px_rgba(15,32,39,0.18)]" />
            <div className="absolute inset-x-[9%] top-[-4%] bottom-[7%] z-10 flex items-end justify-center">
              <SmartImage
                src="/aset/profil-hero-new.webp"
                alt="Okta"
                priority
                loading="eager"
                showSkeleton={false}
                width={760}
                height={820}
                sizes="(min-width: 1280px) 530px, (min-width: 1024px) 500px, (min-width: 640px) 420px, 360px"
                wrapperClassName="h-full w-full"
                className="h-full w-auto max-w-none object-contain object-bottom drop-shadow-[0_18px_32px_rgba(15,32,39,0.16)]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="pointer-events-none absolute inset-x-[4%] bottom-[7%] h-[14%] rounded-b-[22px] bg-[linear-gradient(180deg,rgba(17,42,49,0)_0%,rgba(30,59,64,0.08)_46%,rgba(120,190,161,0.34)_100%)] z-20" />

            <div className="absolute left-[1%] bottom-[14%] z-30 rounded-[14px] border border-[rgba(30,59,64,0.18)] bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(220,243,234,0.92))] px-3 py-2 shadow-[0_14px_26px_rgba(15,32,39,0.09)] backdrop-blur-md sm:left-[-9%] sm:bottom-[17%] sm:px-4 sm:py-3">
              <p className="text-[12px] font-semibold tracking-[0.04em] text-[#17363d] sm:text-[13px]">
                B.Sc. in Informatics
              </p>
            </div>

            <div className="absolute right-[1%] top-[52%] z-30 flex max-w-[142px] items-center gap-2 rounded-[14px] border border-[rgba(114,179,154,0.24)] bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(114,179,154,0.10))] px-3 py-2 shadow-[0_14px_26px_rgba(15,32,39,0.10)] backdrop-blur-md sm:hidden">
              <div className="flex h-9 w-9 items-center justify-center rounded-[11px] bg-[linear-gradient(135deg,rgba(15,32,39,0.05),rgba(114,179,154,0.16))]">
                <img
                  src="/aset/amikom-logo.webp"
                  alt="AMIKOM University logo"
                  className="h-7 w-7 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-black leading-tight text-[#102a31]">AMIKOM University</p>
                <p className="mt-1 inline-flex rounded-full border border-[rgba(30,59,64,0.14)] bg-[rgba(220,243,234,0.92)] px-2 py-0.5 text-[9px] font-semibold tracking-[0.06em] text-[#21424d]">
                  2016 - 2020
                </p>
              </div>
            </div>

            <div className="absolute right-[-4%] top-[48%] z-30 hidden sm:flex items-center gap-3 rounded-[16px] border border-[rgba(114,179,154,0.24)] bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(114,179,154,0.10))] px-4 py-3 shadow-[0_16px_28px_rgba(15,32,39,0.10)] backdrop-blur-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[linear-gradient(135deg,rgba(15,32,39,0.05),rgba(114,179,154,0.16))]">
                <img
                  src="/aset/amikom-logo.webp"
                  alt="AMIKOM University logo"
                  className="h-8 w-8 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="text-left">
                <p className="text-[14px] font-black text-[#102a31] leading-tight">AMIKOM University</p>
                <p className="mt-1 inline-flex rounded-full border border-[rgba(30,59,64,0.14)] bg-[rgba(220,243,234,0.94)] px-2.5 py-1 text-[11px] font-semibold tracking-[0.06em] text-[#21424d]">
                  2016 - 2020
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

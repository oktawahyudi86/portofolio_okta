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
          <div className="hero-copy-cluster">
            <div className="site-enter site-enter--hero-badge mobile-hero-badge ui-pill-label mb-5 inline-flex rounded-full border border-[rgba(29,78,216,0.16)] bg-[rgba(255,255,255,0.76)] px-4 py-1.5 text-[#1d4ed8] shadow-[0_10px_24px_rgba(15,23,42,0.05)] backdrop-blur-sm">
              <span className="accent-text">Mid-Level IT Project Manager</span>
            </div>
            <h1 className="site-enter site-enter--hero-title mobile-hero-title heading-hero-display copy-balance max-w-[10.5ch] lg:max-w-[11.6ch] font-black text-[#0c1a24] mb-3 lg:mb-2">
              <span className="block">Leading delivery</span>
              <span className="accent-text block pb-1">with clarity,</span>
              <span className="block">control, and trust.</span>
            </h1>

            <div className="site-enter site-enter--hero-copy mobile-hero-copy mobile-hero-copy-block copy-measure mb-3 lg:mb-2 max-w-[520px] border-l-2 border-[#1d4ed8]/24 pl-4 sm:pl-5">
              <p className="section-kicker-label mb-1.5">
                <span className="accent-text">What I bring</span>
              </p>
              <p className="copy-pretty text-[1rem] sm:text-[1.05rem] text-[#0c1a24] leading-[1.72] font-semibold mb-2">
                I keep priorities clear, teams aligned, and releases on track.
              </p>
              <ul className="mobile-hero-highlights supporting-copy">
                {heroHighlights.map((item) => (
                  <li key={item} className="copy-pretty">{item}</li>
                ))}
              </ul>
            </div>

            <div className="site-enter site-enter--hero-stats mobile-hero-stats grid grid-cols-2 gap-4 sm:gap-6 border-t border-[#e3e8ef] pt-3 lg:pt-2.5 mb-0 max-w-[400px]">
              {heroStats.map((stat) => (
                <div key={stat.label} className="mobile-hero-stat text-center">
                  <span className="text-[1.95rem] sm:text-[2.2rem] lg:text-[2.35rem] font-black text-[#0c1a24]">{stat.value}</span>
                  <p className="copy-pretty section-kicker-label mx-auto max-w-[10ch] text-[#5f6670]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="site-enter site-enter--hero-visual relative w-full lg:-mt-4 flex flex-col items-center">
            <div className="mobile-hero-visual hero-visual-shell relative mx-auto w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[470px] xl:max-w-[500px] aspect-[0.92/1]">
              <div className="absolute inset-x-[4%] top-[14%] bottom-[7%] rounded-[22px] bg-[radial-gradient(circle_at_72%_85%,rgba(29,78,216,0.14),transparent_34%),linear-gradient(180deg,#0f172a_0%,#16233a_100%)] shadow-[0_22px_44px_rgba(11,19,36,0.16)]" />
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
              <div className="pointer-events-none absolute inset-x-[4%] bottom-[7%] h-[14%] rounded-b-[22px] bg-[linear-gradient(180deg,rgba(15,23,42,0)_0%,rgba(29,78,216,0.08)_48%,rgba(29,78,216,0.18)_100%)] z-20" />

              <div className="absolute left-[1%] bottom-[14%] z-30 hidden rounded-[14px] border border-[rgba(29,78,216,0.16)] bg-[rgba(255,255,255,0.94)] px-3 py-2 shadow-[0_14px_26px_rgba(11,19,36,0.08)] backdrop-blur-md sm:left-[-9%] sm:bottom-[17%] sm:block sm:px-4 sm:py-3">
                <p className="ui-pill-label text-[#0b1324]">B.Sc. in Informatics</p>
              </div>

              <div className="absolute right-[-1%] top-[54%] z-30 flex w-[204px] items-center gap-2.5 rounded-[16px] border border-[rgba(29,78,216,0.16)] bg-[rgba(255,255,255,0.94)] px-3.5 py-2.5 shadow-[0_14px_26px_rgba(11,19,36,0.08)] backdrop-blur-md sm:hidden">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-[linear-gradient(135deg,rgba(15,23,42,0.04),rgba(29,78,216,0.12))]">
                  <img
                    src="/aset/amikom-logo.webp"
                    alt="AMIKOM University logo"
                    className="h-7.5 w-7.5 object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <p className="text-[0.8rem] font-black leading-[1.2] text-[#0b1324]">AMIKOM University</p>
                  <p className="section-kicker-label mt-1 inline-flex rounded-full border border-[rgba(29,78,216,0.14)] bg-[rgba(239,244,255,0.96)] px-2.5 py-1 text-[#334155]">
                    <span className="block text-center leading-[1.2]">
                      2016 - 2020
                    </span>
                  </p>
                </div>
              </div>

              <div className="absolute right-[-8%] top-[49%] z-30 hidden w-[248px] items-center gap-3.5 rounded-[18px] border border-[rgba(29,78,216,0.16)] bg-[rgba(255,255,255,0.94)] px-4.5 py-3.5 shadow-[0_16px_28px_rgba(11,19,36,0.08)] backdrop-blur-md sm:flex">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] bg-[linear-gradient(135deg,rgba(15,23,42,0.04),rgba(29,78,216,0.12))]">
                  <img
                    src="/aset/amikom-logo.webp"
                    alt="AMIKOM University logo"
                    className="h-8 w-8 object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <p className="text-[0.98rem] font-black text-[#0b1324] leading-tight">AMIKOM University</p>
                  <p className="supporting-copy mt-1 text-[0.88rem] leading-[1.35] text-[#5f6670]">
                    Informatics degree
                  </p>
                </div>
                <p className="section-kicker-label shrink-0 inline-flex rounded-full border border-[rgba(29,78,216,0.14)] bg-[rgba(239,244,255,0.96)] px-3 py-1.5 text-[#334155]">
                  <span className="block text-center leading-[1.2]">
                    2016 - 2020
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

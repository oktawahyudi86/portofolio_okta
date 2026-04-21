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
            <div className="site-enter site-enter--hero-badge hero-kicker-pill mobile-hero-badge ui-pill-label mb-5 px-4 py-1.5 text-[#1d4ed8]">
              <span className="accent-text">Mid-Level IT Project Manager</span>
            </div>
            <h1 className="site-enter site-enter--hero-title mobile-hero-title heading-hero-display copy-balance max-w-[10.5ch] lg:max-w-[11.6ch] font-black journey-ink mb-3 lg:mb-2">
              <span className="block">Leading delivery</span>
              <span className="accent-text block pb-1">with clarity,</span>
              <span className="block">control, and trust.</span>
            </h1>

            <div className="site-enter site-enter--hero-copy hero-copy-divider mobile-hero-copy mobile-hero-copy-block copy-measure mb-3 lg:mb-2 max-w-[520px] border-l-2 pl-4 sm:pl-5">
              <p className="section-kicker-label mb-1.5">
                <span className="accent-text">What I bring</span>
              </p>
              <p className="copy-pretty text-[1rem] sm:text-[1.05rem] journey-ink leading-[1.72] font-semibold mb-2">
                I keep priorities clear, teams aligned, and releases on track.
              </p>
              <ul className="mobile-hero-highlights supporting-copy">
                {heroHighlights.map((item) => (
                  <li key={item} className="copy-pretty">{item}</li>
                ))}
              </ul>
            </div>

            <div className="site-enter site-enter--hero-stats hero-stats-divider mobile-hero-stats grid grid-cols-2 gap-4 sm:gap-6 border-t pt-3 lg:pt-2.5 mb-0 max-w-[400px]">
              {heroStats.map((stat) => (
                <div key={stat.label} className="mobile-hero-stat text-center">
                  <span className="text-[1.95rem] sm:text-[2.2rem] lg:text-[2.35rem] font-black journey-ink">{stat.value}</span>
                  <p className="copy-pretty section-kicker-label mx-auto max-w-[10ch] text-[#5f6670]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="site-enter site-enter--hero-visual relative w-full lg:-mt-4 flex flex-col items-center">
            <div className="mobile-hero-visual hero-visual-shell relative mx-auto w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[470px] xl:max-w-[500px] aspect-[0.92/1]">
              <div className="hero-panel absolute inset-x-[4%] top-[14%] bottom-[7%]" />
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
              <div className="hero-panel-fade pointer-events-none absolute inset-x-[4%] bottom-[7%] h-[14%] rounded-b-[22px] z-20" />

              <div className="hero-note-card absolute left-[1%] bottom-[14%] z-30 hidden rounded-[14px] px-3 py-2 sm:left-[-9%] sm:bottom-[17%] sm:block sm:px-4 sm:py-3">
                <p className="ui-pill-label text-[#0b1324]">B.Sc. in Informatics</p>
              </div>

              <div className="hero-note-card absolute right-[-1%] top-[54%] z-30 flex w-[206px] items-center gap-2.5 rounded-[16px] px-3.5 py-2.5 sm:hidden">
                <div className="hero-note-logo flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px]">
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
                  <p className="hero-note-year section-kicker-label mt-1 inline-flex rounded-full px-2.5 py-1">
                    <span className="block text-center leading-[1.2]">
                      2016 - 2020
                    </span>
                  </p>
                </div>
              </div>

              <div className="hero-note-card absolute right-[-8%] top-[49%] z-30 hidden w-[248px] items-center gap-3.5 rounded-[18px] px-4.5 py-3.5 sm:flex">
                <div className="hero-note-logo flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px]">
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
                <p className="hero-note-year section-kicker-label shrink-0 inline-flex rounded-full px-3 py-1.5">
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

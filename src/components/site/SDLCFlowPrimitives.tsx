import React from 'react';
import { motion } from 'motion/react';
import type { FeatureType, ReportingVariant, ToolItem } from '../../types/site';
import { SmartImage } from './SmartImage';

const featureBackgroundMap: Record<FeatureType, string> = {
  recruitment: 'accent-gradient-bg',
  analysis: 'accent-gradient-bg',
  brd: 'accent-gradient-bg',
};

export const FeatureIcon = ({ type }: { type: FeatureType }) => (
  <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-[18px] ${featureBackgroundMap[type]} border border-[#f8fbfd]/50 flex items-center justify-center`}>
    <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {type === 'recruitment' && (
        <>
          <circle cx="11" cy="12" r="4" stroke="white" strokeWidth="2" />
          <circle cx="25" cy="12" r="4" stroke="white" strokeWidth="2" />
          <circle cx="18" cy="24" r="4" stroke="white" strokeWidth="2" />
          <path d="M11 16.5C11 18.9853 13.2386 21 16 21C18.7614 21 21 18.9853 21 16.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 14L4 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M24 14L32 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
      {type === 'analysis' && (
        <>
          <rect x="8" y="12" width="5" height="14" rx="1.5" fill="white" />
          <rect x="16" y="8" width="5" height="18" rx="1.5" fill="white" />
          <rect x="24" y="4" width="5" height="22" rx="1.5" fill="white" />
          <path d="M7 28L15 20L23 24L29 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
      {type === 'brd' && (
        <>
          <path d="M9 5H23L29 11V31C29 32.1046 28.1046 33 27 33H9C7.89543 33 7 32.1046 7 31V7C7 5.89543 7.89543 5 9 5Z" stroke="white" strokeWidth="2" />
          <line x1="14" y1="14" x2="24" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="14" y1="20" x2="24" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 26L16 30L26 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
    </svg>
  </div>
);

const reportingBackgroundMap: Record<ReportingVariant, string> = {
  user: 'accent-gradient-bg',
  cLevel: 'accent-gradient-bg',
};

export const ReportingIcon = ({ variant }: { variant: ReportingVariant }) => (
  <div className={`w-12 h-12 rounded-[14px] ${reportingBackgroundMap[variant]} border border-[#f8fbfd]/50 flex items-center justify-center`}>
    <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {variant === 'user' ? (
        <>
          <path d="M8 10H28" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M8 18H22" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M8 26H18" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="26" cy="18" r="3" stroke="white" strokeWidth="2.2" />
          <path d="M26 12V9" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M31 18H34" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
        </>
      ) : (
        <>
          <path d="M8 28V12" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M18 28V8" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M28 28V15" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M8 28H30" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M8 18L18 12L28 15" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="18" cy="12" r="2.5" fill="white" />
        </>
      )}
    </svg>
  </div>
);

export const ToolsCarousel = ({ tools }: { tools: ToolItem[] }) => {
  const desktopCarouselRef = React.useRef<HTMLDivElement | null>(null);
  const mobileCarouselRef = React.useRef<HTMLDivElement | null>(null);
  const singleSetWidthRef = React.useRef(0);
  const isDraggingRef = React.useRef(false);
  const isHoveringRef = React.useRef(false);
  const dragStartX = React.useRef(0);
  const scrollStart = React.useRef(0);
  const mobileResumeTimeoutRef = React.useRef<number | null>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [isMobilePaused, setIsMobilePaused] = React.useState(false);
  const marqueeSets = React.useMemo(() => [tools, tools], [tools]);
  const repeatedTools = React.useMemo(() => [...tools, ...tools, ...tools], [tools]);

  const pauseMobileMarquee = React.useCallback(() => {
    setIsMobilePaused(true);
    if (mobileResumeTimeoutRef.current) {
      window.clearTimeout(mobileResumeTimeoutRef.current);
      mobileResumeTimeoutRef.current = null;
    }
  }, []);

  const resumeMobileMarquee = React.useCallback((delay = 1400) => {
    if (mobileResumeTimeoutRef.current) {
      window.clearTimeout(mobileResumeTimeoutRef.current);
    }

    mobileResumeTimeoutRef.current = window.setTimeout(() => {
      setIsMobilePaused(false);
      mobileResumeTimeoutRef.current = null;
    }, delay);
  }, []);

  const measureDesktopCarousel = React.useCallback(() => {
    const carousel = desktopCarouselRef.current;
    if (!carousel) return;

    singleSetWidthRef.current = carousel.scrollWidth / 3;
    if (singleSetWidthRef.current > 0 && carousel.scrollLeft === 0) {
      carousel.scrollLeft = singleSetWidthRef.current;
    }
  }, []);

  const normalizeDesktopScroll = React.useCallback(() => {
    const carousel = desktopCarouselRef.current;
    const singleSetWidth = singleSetWidthRef.current;
    if (!carousel || !singleSetWidth) return;

    if (carousel.scrollLeft <= 0) {
      carousel.scrollLeft += singleSetWidth;
    } else if (carousel.scrollLeft >= singleSetWidth * 2) {
      carousel.scrollLeft -= singleSetWidth;
    }
  }, []);

  React.useEffect(() => {
    measureDesktopCarousel();
    window.addEventListener('resize', measureDesktopCarousel);
    return () => window.removeEventListener('resize', measureDesktopCarousel);
  }, [measureDesktopCarousel, repeatedTools.length]);

  React.useEffect(() => () => {
    if (mobileResumeTimeoutRef.current) {
      window.clearTimeout(mobileResumeTimeoutRef.current);
    }
  }, []);

  React.useEffect(() => {
    const carousel = desktopCarouselRef.current;
    if (!carousel) return;

    const intervalId = window.setInterval(() => {
      if (document.visibilityState !== 'visible') return;
      if (!isDraggingRef.current && !isHoveringRef.current) {
        carousel.scrollLeft += 1;
        normalizeDesktopScroll();
      }
    }, 22);

    return () => window.clearInterval(intervalId);
  }, [normalizeDesktopScroll]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!desktopCarouselRef.current) return;
    isDraggingRef.current = true;
    setIsDragging(true);
    dragStartX.current = event.clientX;
    scrollStart.current = desktopCarouselRef.current.scrollLeft;

    try {
      desktopCarouselRef.current.setPointerCapture(event.pointerId);
    } catch (error) {
      // Ignore browser-specific pointer capture limitations.
    }
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !desktopCarouselRef.current) return;
    const delta = event.clientX - dragStartX.current;
    desktopCarouselRef.current.scrollLeft = scrollStart.current - delta;
    normalizeDesktopScroll();
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!desktopCarouselRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);

    try {
      desktopCarouselRef.current.releasePointerCapture(event.pointerId);
    } catch (error) {
      // Ignore if pointer capture was not active.
    }

    normalizeDesktopScroll();
  };

  return (
    <>
      <div
        ref={mobileCarouselRef}
        className="tools-marquee-shell overflow-x-auto pb-4 no-scrollbar touch-pan-x md:hidden"
        style={{ WebkitOverflowScrolling: 'touch' }}
        onTouchStart={pauseMobileMarquee}
        onTouchEnd={() => resumeMobileMarquee()}
        onTouchCancel={() => resumeMobileMarquee(600)}
        onPointerDown={pauseMobileMarquee}
        onPointerUp={() => resumeMobileMarquee()}
        onPointerCancel={() => resumeMobileMarquee(600)}
        onScroll={() => {
          pauseMobileMarquee();
          resumeMobileMarquee();
        }}
      >
        <div className={`tools-marquee-track flex w-max items-center gap-6 ${isMobilePaused ? 'is-paused' : ''}`}>
          {marqueeSets.map((set, setIdx) => (
            <div key={setIdx} className="flex items-center gap-6" aria-hidden={setIdx === 1}>
              {set.map((tool, idx) => (
                <div
                  key={`${tool.name}-${setIdx}-${idx}`}
                  className="flex h-[92px] min-w-[118px] flex-shrink-0 items-center justify-center px-2 py-2 sm:h-[100px] sm:min-w-[126px]"
                >
                  {tool.icon.startsWith('/') ? (
                    <SmartImage
                      wrapperClassName="flex h-12 items-center justify-center sm:h-14"
                      src={tool.icon}
                      alt={tool.name}
                      loading="lazy"
                      fetchPriority="low"
                      rootMargin="220px 0px"
                      className="h-full w-auto object-contain"
                    />
                  ) : (
                    <div className="text-3xl sm:text-4xl">{tool.icon}</div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div
        ref={desktopCarouselRef}
        className={`tools-desktop-carousel hidden w-full gap-6 overflow-x-auto pb-4 no-scrollbar select-none md:flex ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onMouseEnter={() => {
          isHoveringRef.current = true;
        }}
        onMouseLeave={() => {
          isHoveringRef.current = false;
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={(event) => {
          if (isDraggingRef.current && desktopCarouselRef.current) {
            handlePointerUp(event);
          }
        }}
        onPointerCancel={(event) => handlePointerUp(event)}
      >
        {repeatedTools.map((tool, idx) => (
          <div
            key={`${tool.name}-desktop-${idx}`}
            className="flex h-[100px] min-w-[126px] flex-shrink-0 items-center justify-center px-2 py-2 transition-transform duration-300 hover:-translate-y-0.5 lg:h-[108px] lg:min-w-[138px]"
            aria-hidden={idx >= tools.length}
          >
            {tool.icon.startsWith('/') ? (
              <SmartImage
                wrapperClassName="flex h-14 items-center justify-center lg:h-16"
                src={tool.icon}
                alt={tool.name}
                loading="lazy"
                fetchPriority="low"
                rootMargin="220px 0px"
                onLoad={measureDesktopCarousel}
                className="h-full w-auto object-contain"
              />
            ) : (
              <div className="text-4xl lg:text-5xl">{tool.icon}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

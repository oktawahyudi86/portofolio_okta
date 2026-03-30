/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Hero } from './components/site/Hero';
import {
  SectionTransitionSkeleton,
  TravelokaSkeletonBlock,
} from './components/site/LoadingPrimitives';
import { Navbar } from './components/site/Navbar';
import { SeoMetadata } from './components/site/SeoMetadata';
import { sitePageByPath } from './data/site-pages';

const Contact = React.lazy(async () => ({ default: (await import('./components/site/Contact')).Contact }));
const Footer = React.lazy(async () => ({ default: (await import('./components/site/Footer')).Footer }));
const Journey = React.lazy(async () => ({ default: (await import('./components/site/Journey')).Journey }));
const LegalPage = React.lazy(async () => ({ default: (await import('./components/site/LegalPage')).LegalPage }));
const Portfolio = React.lazy(async () => ({ default: (await import('./components/site/Portfolio')).Portfolio }));
const SectionPageShell = React.lazy(async () => ({ default: (await import('./components/site/SectionPageShell')).SectionPageShell }));
const SDLCFlow = React.lazy(async () => ({ default: (await import('./components/site/SDLCFlow')).SDLCFlow }));
const Skills = React.lazy(async () => ({ default: (await import('./components/site/Skills')).Skills }));
const Testimonials = React.lazy(async () => ({ default: (await import('./components/site/Testimonials')).Testimonials }));

export default function App() {
  const [pathname, setPathname] = React.useState(() => window.location.pathname);
  const [isInitialLoading, setIsInitialLoading] = React.useState(true);
  const [isSectionLoading, setIsSectionLoading] = React.useState(false);
  const [showDeferredSections, setShowDeferredSections] = React.useState(() => window.location.pathname !== '/');
  const loadingTimeoutRef = React.useRef<number | null>(null);
  const deferredTriggerRef = React.useRef<HTMLDivElement | null>(null);

  const handleRouteChange = React.useCallback((path: string) => {
    if (window.location.pathname !== path) {
      window.location.assign(path);
      return;
    } else {
      window.scrollTo({ top: 0, behavior: path === '/' ? 'smooth' : 'auto' });
    }
  }, []);

  const handleNavigate = React.useCallback((href: string) => {
    if (!href.startsWith('#')) return;

    const sectionId = href.replace('#', '');
    const target = document.getElementById(sectionId);
    if (!target) return;

    if (loadingTimeoutRef.current) {
      window.clearTimeout(loadingTimeoutRef.current);
    }

    setIsSectionLoading(true);
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

    loadingTimeoutRef.current = window.setTimeout(() => {
      setIsSectionLoading(false);
      loadingTimeoutRef.current = null;
    }, 700);
  }, []);

  React.useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  React.useEffect(() => {
    let frameA: number | null = null;
    let frameB: number | null = null;

    const finishInitialLoading = () => {
      frameA = window.requestAnimationFrame(() => {
        frameB = window.requestAnimationFrame(() => {
          setIsInitialLoading(false);
        });
      });
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', finishInitialLoading, { once: true });
    } else {
      finishInitialLoading();
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', finishInitialLoading);
      if (frameA) window.cancelAnimationFrame(frameA);
      if (frameB) window.cancelAnimationFrame(frameB);
    };
  }, []);

  React.useEffect(() => {
    if (pathname !== '/') {
      setShowDeferredSections(true);
      return;
    }

    if (showDeferredSections) return;

    const revealSections = () => {
      setShowDeferredSections(true);
    };

    const sentinel = deferredTriggerRef.current;
    let fallbackTimeout: number | null = window.setTimeout(revealSections, 3500);
    let observer: IntersectionObserver | null = null;

    if (sentinel && typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            revealSections();
          }
        },
        { rootMargin: '320px 0px' },
      );

      observer.observe(sentinel);
    }

    const handleFirstInteraction = () => {
      revealSections();
    };

    window.addEventListener('scroll', handleFirstInteraction, { once: true, passive: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true, passive: true });

    return () => {
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      observer?.disconnect();
      if (fallbackTimeout) {
        window.clearTimeout(fallbackTimeout);
      }
    };
  }, [pathname, showDeferredSections]);

  React.useEffect(() => {
    const fontStylesheetId = 'google-fonts-stylesheet';

    if (document.getElementById(fontStylesheetId)) {
      document.body.setAttribute('data-fonts-ready', 'true');
      return;
    }

    let timeoutId: number | null = null;
    let idleId: number | null = null;

    const loadFonts = () => {
      if (document.getElementById(fontStylesheetId)) return;

      const link = document.createElement('link');
      link.id = fontStylesheetId;
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600;6..72,700&family=Sora:wght@300;400;500;600;700;800&display=swap';
      link.onload = () => {
        document.body.setAttribute('data-fonts-ready', 'true');
      };
      document.head.appendChild(link);
    };

    if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(loadFonts, { timeout: 1800 });
    } else {
      timeoutId = window.setTimeout(loadFonts, 900);
    }

    return () => {
      if (idleId && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  React.useEffect(() => {
    if (isInitialLoading) {
      document.body.removeAttribute('data-app-ready');
      return;
    }

    document.body.setAttribute('data-app-ready', 'true');
    const bootSkeleton = document.getElementById('boot-skeleton');

    if (bootSkeleton) {
      bootSkeleton.classList.add('boot-skeleton--hidden');
      const cleanup = window.setTimeout(() => {
        bootSkeleton.remove();
      }, 320);

      return () => window.clearTimeout(cleanup);
    }
  }, [isInitialLoading]);

  React.useEffect(() => () => {
    if (loadingTimeoutRef.current) {
      window.clearTimeout(loadingTimeoutRef.current);
    }
  }, []);

  const currentPage = sitePageByPath[pathname] ?? sitePageByPath['/'];
  const deferredSectionsFallback = (
    <div className="px-4 sm:px-5 md:px-6 xl:px-8 2xl:px-12 py-8 lg:py-10">
      <div className="mx-auto max-w-7xl">
        <TravelokaSkeletonBlock className="h-40 rounded-[28px]" />
      </div>
    </div>
  );

  const renderHomePage = () => (
    <>
      {isSectionLoading && <SectionTransitionSkeleton />}

      <Navbar onNavigate={handleNavigate} onRouteChange={handleRouteChange} pathname={pathname} />
      <main id="main-content" role="main">
        <Hero />
        {!showDeferredSections && <div ref={deferredTriggerRef} aria-hidden="true" className="h-px w-full" />}
        {showDeferredSections ? (
          <React.Suspense fallback={deferredSectionsFallback}>
            <Journey />
            <Skills />
            <SDLCFlow />
            <Portfolio />
            <Contact />
            <Testimonials />
            <Footer onRouteChange={handleRouteChange} />
          </React.Suspense>
        ) : (
          deferredSectionsFallback
        )}
      </main>
      <style>{`
        section[id] {
          scroll-margin-top: clamp(88px, 10vw, 132px);
        }
        section[id]:not(#home) {
          padding-top: clamp(52px, 5vw, 96px) !important;
          padding-bottom: clamp(52px, 5vw, 96px) !important;
        }
        #home {
          padding-top: clamp(58px, 8vw, 108px) !important;
          padding-bottom: clamp(28px, 4vw, 56px) !important;
        }
        section[id] + section[id] {
          margin-top: 0;
        }
        @media (min-width: 1024px) {
          #home {
            min-height: 100svh;
            display: flex;
            align-items: center;
            padding-top: clamp(72px, 6vw, 96px) !important;
            padding-bottom: 0 !important;
          }
        }
        @keyframes gradient-slider {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </>
  );

  const renderSectionPage = () => {
    if (pathname === '/journey') {
      return (
        <>
          <Navbar onNavigate={handleNavigate} onRouteChange={handleRouteChange} pathname={pathname} />
          <React.Suspense fallback={deferredSectionsFallback}>
            <SectionPageShell page={currentPage} onRouteChange={handleRouteChange}>
              <Journey />
            </SectionPageShell>
            <Footer onRouteChange={handleRouteChange} />
          </React.Suspense>
        </>
      );
    }

    if (pathname === '/skills') {
      return (
        <>
          <Navbar onNavigate={handleNavigate} onRouteChange={handleRouteChange} pathname={pathname} />
          <React.Suspense fallback={deferredSectionsFallback}>
            <SectionPageShell page={currentPage} onRouteChange={handleRouteChange}>
              <Skills />
              <SDLCFlow />
            </SectionPageShell>
            <Footer onRouteChange={handleRouteChange} />
          </React.Suspense>
        </>
      );
    }

    if (pathname === '/portfolio') {
      return (
        <>
          <Navbar onNavigate={handleNavigate} onRouteChange={handleRouteChange} pathname={pathname} />
          <React.Suspense fallback={deferredSectionsFallback}>
            <SectionPageShell page={currentPage} onRouteChange={handleRouteChange}>
              <Portfolio />
            </SectionPageShell>
            <Footer onRouteChange={handleRouteChange} />
          </React.Suspense>
        </>
      );
    }

    if (pathname === '/contact') {
      return (
        <>
          <Navbar onNavigate={handleNavigate} onRouteChange={handleRouteChange} pathname={pathname} />
          <React.Suspense fallback={deferredSectionsFallback}>
            <SectionPageShell page={currentPage} onRouteChange={handleRouteChange}>
              <Contact />
            </SectionPageShell>
            <Footer onRouteChange={handleRouteChange} />
          </React.Suspense>
        </>
      );
    }

    return renderHomePage();
  };

  return (
    <div className="min-h-screen pb-24 lg:pb-0 bg-[#f4f6fb] font-sans selection:bg-[#0fa3b1] selection:text-white antialiased relative overflow-hidden">
      <SeoMetadata page={currentPage} />
      {pathname === '/privacy' ? (
        <React.Suspense fallback={deferredSectionsFallback}>
          <LegalPage type="privacy" onRouteChange={handleRouteChange} />
        </React.Suspense>
      ) : pathname === '/terms' ? (
        <React.Suspense fallback={deferredSectionsFallback}>
          <LegalPage type="terms" onRouteChange={handleRouteChange} />
        </React.Suspense>
      ) : (
        renderSectionPage()
      )}
    </div>
  );
}

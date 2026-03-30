/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Contact } from './components/site/Contact';
import { Footer } from './components/site/Footer';
import { Hero } from './components/site/Hero';
import { Journey } from './components/site/Journey';
import { LegalPage } from './components/site/LegalPage';
import {
  SectionTransitionSkeleton,
  TravelokaSkeletonBlock,
} from './components/site/LoadingPrimitives';
import { Navbar } from './components/site/Navbar';
import { Portfolio } from './components/site/Portfolio';
import { SectionPageShell } from './components/site/SectionPageShell';
import { SeoMetadata } from './components/site/SeoMetadata';
import { SDLCFlow } from './components/site/SDLCFlow';
import { Skills } from './components/site/Skills';
import { Testimonials } from './components/site/Testimonials';
import { sitePageByPath } from './data/site-pages';

export default function App() {
  const [pathname, setPathname] = React.useState(() => window.location.pathname);
  const [isInitialLoading, setIsInitialLoading] = React.useState(true);
  const [isSectionLoading, setIsSectionLoading] = React.useState(false);
  const [showDeferredSections, setShowDeferredSections] = React.useState(() => window.location.pathname !== '/');
  const loadingTimeoutRef = React.useRef<number | null>(null);

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

    let revealTimeout: number | null = window.setTimeout(() => {
      setShowDeferredSections(true);
    }, 220);

    const revealSections = () => {
      setShowDeferredSections(true);
      if (revealTimeout) {
        window.clearTimeout(revealTimeout);
        revealTimeout = null;
      }
    };

    window.addEventListener('scroll', revealSections, { once: true, passive: true });
    window.addEventListener('touchstart', revealSections, { once: true, passive: true });
    window.addEventListener('mousemove', revealSections, { once: true, passive: true });

    return () => {
      window.removeEventListener('scroll', revealSections);
      window.removeEventListener('touchstart', revealSections);
      window.removeEventListener('mousemove', revealSections);
      if (revealTimeout) {
        window.clearTimeout(revealTimeout);
      }
    };
  }, [pathname, showDeferredSections]);

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

  const renderHomePage = () => (
    <>
      <AnimatePresence>
        {isSectionLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <SectionTransitionSkeleton />
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar onNavigate={handleNavigate} onRouteChange={handleRouteChange} pathname={pathname} />
      <Hero />
      {showDeferredSections ? (
        <>
          <Journey />
          <Skills />
          <SDLCFlow />
          <Portfolio />
          <Contact />
          <Testimonials />
          <Footer onRouteChange={handleRouteChange} />
        </>
      ) : (
        <div className="px-4 sm:px-5 md:px-6 xl:px-8 2xl:px-12 py-8 lg:py-10">
          <div className="mx-auto max-w-7xl">
            <TravelokaSkeletonBlock className="h-40 rounded-[28px]" />
          </div>
        </div>
      )}
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
          <SectionPageShell page={currentPage} onRouteChange={handleRouteChange}>
            <Journey />
          </SectionPageShell>
          <Footer onRouteChange={handleRouteChange} />
        </>
      );
    }

    if (pathname === '/skills') {
      return (
        <>
          <Navbar onNavigate={handleNavigate} onRouteChange={handleRouteChange} pathname={pathname} />
          <SectionPageShell page={currentPage} onRouteChange={handleRouteChange}>
            <Skills />
            <SDLCFlow />
          </SectionPageShell>
          <Footer onRouteChange={handleRouteChange} />
        </>
      );
    }

    if (pathname === '/portfolio') {
      return (
        <>
          <Navbar onNavigate={handleNavigate} onRouteChange={handleRouteChange} pathname={pathname} />
          <SectionPageShell page={currentPage} onRouteChange={handleRouteChange}>
            <Portfolio />
          </SectionPageShell>
          <Footer onRouteChange={handleRouteChange} />
        </>
      );
    }

    if (pathname === '/contact') {
      return (
        <>
          <Navbar onNavigate={handleNavigate} onRouteChange={handleRouteChange} pathname={pathname} />
          <SectionPageShell page={currentPage} onRouteChange={handleRouteChange}>
            <Contact />
          </SectionPageShell>
          <Footer onRouteChange={handleRouteChange} />
        </>
      );
    }

    return renderHomePage();
  };

  return (
    <div className="min-h-screen pb-24 lg:pb-0 bg-[#f4f6fb] font-sans selection:bg-[#0fa3b1] selection:text-white antialiased relative overflow-hidden">
      <SeoMetadata page={currentPage} />
      {pathname === '/privacy' ? (
        <LegalPage type="privacy" onRouteChange={handleRouteChange} />
      ) : pathname === '/terms' ? (
        <LegalPage type="terms" onRouteChange={handleRouteChange} />
      ) : (
        renderSectionPage()
      )}
    </div>
  );
}

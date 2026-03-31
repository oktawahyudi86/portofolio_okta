import React from 'react';
import { Download } from 'lucide-react';
import { cvUrl, navigationItems, primarySectionIds } from '../../data/site-content';

type MobileMenuItem = {
  name: string;
  href: string;
  path?: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  mobileLabel?: string;
  action?: () => void;
};

export const Navbar = ({
  onNavigate,
  onRouteChange,
  pathname,
}: {
  onNavigate: (href: string) => void;
  onRouteChange: (path: string) => void;
  pathname: string;
}) => {
  const [activeSection, setActiveSection] = React.useState(() => {
    const currentItem = navigationItems.find((item) => item.path === pathname);
    return currentItem ? currentItem.href.replace('#', '') : 'home';
  });

  const resolveActiveHomeSection = React.useCallback(() => {
    const offset = 150;

    const rankedSections = primarySectionIds
      .map((section) => {
        const element = document.getElementById(section);
        if (!element) return null;

        const rect = element.getBoundingClientRect();
        const isVisibleAroundOffset = rect.bottom >= offset && rect.top <= offset;
        const distanceToOffset = Math.abs(rect.top - offset);

        return {
          section,
          isVisibleAroundOffset,
          distanceToOffset,
        };
      })
      .filter((item): item is { section: (typeof primarySectionIds)[number]; isVisibleAroundOffset: boolean; distanceToOffset: number } => item !== null);

    const visibleSections = rankedSections.filter((item) => item.isVisibleAroundOffset);
    const candidates = visibleSections.length > 0 ? visibleSections : rankedSections;

    if (candidates.length === 0) {
      return 'home';
    }

    return candidates.reduce((closest, current) => (
      current.distanceToOffset < closest.distanceToOffset ? current : closest
    )).section;
  }, []);

  React.useEffect(() => {
    if (pathname !== '/') {
      const currentItem = navigationItems.find((item) => item.path === pathname);
      setActiveSection(currentItem ? currentItem.href.replace('#', '') : '');
      return;
    }

    const handleScroll = () => {
      setActiveSection(resolveActiveHomeSection());
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname, resolveActiveHomeSection]);

  const mobileMenuItems: MobileMenuItem[] = [
    ...navigationItems,
    {
      name: 'View CV',
      mobileLabel: 'CV',
      href: cvUrl,
      icon: Download,
      action: () => window.open(cvUrl, '_blank', 'noopener,noreferrer'),
    },
  ];

  const isItemActive = React.useCallback((item: { href: string; path?: string }) => {
    const sectionId = item.href.replace('#', '');

    if (pathname === '/') {
      return activeSection === sectionId;
    }

    return item.path === pathname;
  }, [activeSection, pathname]);

  return (
    <>
      <div className="site-enter site-enter--nav hidden lg:block fixed top-5 left-0 w-full z-50 px-6 xl:px-8 2xl:px-12">
        <div className="max-w-7xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
          <nav className="navbar-glass navbar-glass--interactive rounded-[18px] px-4 py-2">
            <div className="flex items-center justify-between gap-6">
              <div className="flex items-center gap-7">
                <div className="text-[1.45rem] font-black tracking-tight text-[#0c1a24] leading-none cursor-default">
                  OKTA<span className="accent-gradient-text">.</span>
                </div>

                <div className="navbar-pill hidden lg:flex items-center gap-1 rounded-[14px] p-1">
                  {navigationItems.map((item, idx) => {
                    const Icon = item.icon;
                    const isActive = isItemActive(item);

                    return (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={(event) => {
                          event.preventDefault();
                          if (pathname === '/') {
                            setActiveSection(item.href.replace('#', ''));
                            onNavigate(item.href);
                            return;
                          }

                          onRouteChange(item.path);
                        }}
                        className={`flex items-center gap-2 rounded-[10px] px-3 py-2 text-[12px] font-semibold transition-all ${
                          isActive
                            ? 'bg-white/95 text-[#0c1a24] shadow-[0_6px_14px_rgba(15,32,39,0.08)]'
                            : 'text-[#6b7280] hover:text-[#0c1a24]'
                        }`}
                      >
                        <span className={isActive ? 'text-[#0fa3b1]' : 'text-[#b8c1cb]'}>
                          <Icon size={16} />
                        </span>
                        {item.name}
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-[12px] border border-[rgba(114,179,154,0.28)] bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(114,179,154,0.18))] px-4 py-2 text-[12px] font-semibold text-[#17333b] shadow-[0_12px_28px_rgba(15,32,39,0.09)] backdrop-blur-md transition-all hover:border-[rgba(114,179,154,0.4)] hover:bg-[linear-gradient(135deg,rgba(255,255,255,1),rgba(114,179,154,0.24))] hover:shadow-[0_16px_32px_rgba(15,32,39,0.11)]"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(15,32,39,0.08),rgba(114,179,154,0.26))]">
                    <Download size={14} className="text-[#21424d]" />
                  </span>
                  <span className="text-[#1a3640]">View CV</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="site-enter site-enter--mobile-nav mobile-bottom-nav lg:hidden fixed bottom-0 left-0 w-full z-50 px-3 pb-3">
        <nav className="mobile-bottom-nav-inner navbar-glass navbar-glass--interactive mx-auto max-w-md rounded-[20px] px-2.5 py-2.5">
          <div className="flex items-center justify-between gap-1">
            {mobileMenuItems.map((item, idx) => {
              const Icon = item.icon;
              const isActive = isItemActive(item);

              return (
                <a
                  key={idx}
                  href={item.href}
                  onClick={(event) => {
                    if (item.action) {
                      event.preventDefault();
                      item.action();
                      return;
                    }

                    event.preventDefault();
                    if (pathname === '/') {
                      setActiveSection(item.href.replace('#', ''));
                      onNavigate(item.href);
                      return;
                    }

                      onRouteChange(item.path || '/');
                  }}
                  className={`mobile-bottom-nav-link relative flex min-w-0 flex-1 flex-col items-center gap-1 rounded-[12px] px-1.5 py-2.5 transition-colors ${
                    isActive
                      ? 'bg-white/90 text-[#0f1724]'
                      : 'text-[#0f1724]/70 hover:text-[#0f1724]'
                  }`}
                >
                  {isActive && (
                    <div className="accent-gradient-line absolute inset-x-3 bottom-0 h-[3px] rounded-full" />
                  )}
                  <div className={`${isActive ? 'text-[#6fc7d7]' : 'text-[#94a3b8]'} transition-colors`}>
                    <Icon size={18} />
                  </div>
                  <span className={`mobile-bottom-nav-label text-[9px] font-semibold leading-none transition-colors ${isActive ? 'text-[#0f1724]' : 'text-[#64748b]'}`}>
                    {'mobileLabel' in item ? item.mobileLabel : item.name}
                  </span>
                </a>
              );
            })}
          </div>
        </nav>
      </div>
    </>
  );
};

import { contactDetails, footerSocialLinks, quickLinks } from '../../data/site-content';
import { sitelinkPages } from '../../data/site-pages';

export const Footer = ({ onRouteChange, pathname }: { onRouteChange: (path: string) => void; pathname?: string }) => {
  // Filter sitelinkPages for handover route - only show Handover in "Explore pages"
  const displayedPages = pathname === '/handover' 
    ? sitelinkPages.filter(page => page.path === '/handover')
    : sitelinkPages;

  return (
    <footer className="mobile-footer-shell lazy-render-footer section-shell px-4 sm:px-5 md:px-6 pb-10 sm:pb-12 relative overflow-hidden">
      <div className="section-inner max-w-7xl mx-auto">
      <div className="mobile-footer-surface footer-surface rounded-[24px] text-white shadow-soft">
        <div className="relative z-10 px-5 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 space-y-6 sm:space-y-8">
          <div className="space-y-2">
            <div className="text-3xl font-black tracking-tight">OKTA.</div>
            <p className="copy-pretty max-w-md text-[14px] text-white/70 leading-relaxed">
              Project delivery support for software teams that need clearer planning, steadier coordination, and stronger execution.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 text-sm md:grid-cols-4 md:gap-8">
            <div className="space-y-1">
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase">
                <span className="text-[#bfe7da]">Explore pages</span>
              </p>
              <div className="space-y-1 text-white/80">
                {displayedPages.map((page) => (
                  <a
                    key={page.path}
                    href={page.path}
                    onClick={(event) => {
                      event.preventDefault();
                      onRouteChange(page.path);
                    }}
                    className="block hover:text-white transition-colors"
                  >
                    {page.navLabel}
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase">
                <span className="text-[#bfe7da]">Contact</span>
              </p>
              <div className="space-y-1 text-white/70 leading-relaxed min-w-0">
                <span className="block">{contactDetails.location}</span>
                <a href={`mailto:${contactDetails.emailAddress}`} className="block break-all text-[13px] leading-relaxed">{contactDetails.emailAddress}</a>
                <a href={`tel:${contactDetails.phoneNumber}`} className="block">{contactDetails.phoneNumber}</a>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase">
                <span className="text-[#bfe7da]">Quick links</span>
              </p>
              <div className="space-y-1 text-white/70">
                {quickLinks.map((link) => (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={(event) => {
                      event.preventDefault();
                      onRouteChange(link.path);
                    }}
                    className="block text-left hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase">
                <span className="text-[#bfe7da]">Follow</span>
              </p>
              <div className="flex items-center gap-2">
                {footerSocialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
              <p className="copy-pretty max-w-[12rem] text-[11px] text-white/60 mt-2 leading-relaxed">Thank you for exploring Okta.</p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-4 flex flex-wrap items-center justify-between gap-3 text-[11px] tracking-[0.08em] text-white/50">
            <p>&copy; 2026 Okta. All rights reserved.</p>
            <div className="flex gap-4 text-[11px]">
              <a
                href="/privacy"
                onClick={(event) => {
                  event.preventDefault();
                  onRouteChange('/privacy');
                }}
                className="hover:text-white transition"
              >
                Privacy
              </a>
              <a
                href="/terms"
                onClick={(event) => {
                  event.preventDefault();
                  onRouteChange('/terms');
                }}
                className="hover:text-white transition"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
};

import { contactDetails, footerSocialLinks, quickLinks } from '../../data/site-content';
import { sitelinkPages } from '../../data/site-pages';

export const Footer = ({ onRouteChange }: { onRouteChange: (path: string) => void; pathname?: string }) => (
    <footer className="mobile-footer-shell lazy-render-footer section-shell px-4 sm:px-5 md:px-6 pb-10 sm:pb-12 relative overflow-hidden">
      <div className="section-inner max-w-7xl mx-auto">
      <div className="mobile-footer-surface footer-surface rounded-[24px] text-white shadow-soft">
        <div className="relative z-10 px-5 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 space-y-6 sm:space-y-8">
          <div className="space-y-2">
            <div className="text-3xl font-black tracking-tight">OKTA.</div>
            <p className="copy-pretty supporting-copy footer-copy-soft max-w-md">
              Project support for software teams that need clear planning, steady coordination, and calm follow-through.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 text-sm sm:grid-cols-2 md:grid-cols-4 md:gap-8">
            <div className="space-y-1">
              <p className="section-kicker-label">
                <span className="footer-copy">Explore pages</span>
              </p>
              <div className="space-y-1 ui-pill-label footer-copy-soft">
                {sitelinkPages.map((page) => (
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
              <p className="section-kicker-label">
                <span className="footer-copy">Contact</span>
              </p>
              <div className="space-y-1 ui-pill-label footer-copy-soft leading-relaxed min-w-0">
                <span className="block">{contactDetails.location}</span>
                <a href={`mailto:${contactDetails.emailAddress}`} className="block break-all leading-relaxed">{contactDetails.emailAddress}</a>
                <a href={`tel:${contactDetails.phoneNumber}`} className="block">{contactDetails.phoneNumber}</a>
              </div>
            </div>
            <div className="space-y-1">
              <p className="section-kicker-label">
                <span className="footer-copy">Quick links</span>
              </p>
              <div className="space-y-1 ui-pill-label footer-copy-soft">
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
              <p className="section-kicker-label">
                <span className="footer-copy">Follow</span>
              </p>
              <div className="flex items-center gap-2.5">
                {footerSocialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                  className="footer-social-link h-10 w-10"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
              <p className="copy-pretty supporting-copy footer-copy-muted mt-2 max-w-[12rem]">Thank you for exploring Okta.</p>
            </div>
          </div>

          <div className="ui-pill-label footer-copy-muted footer-divider flex flex-wrap items-center justify-between gap-3 border-t pt-4">
            <p>&copy; 2026 Okta. All rights reserved.</p>
            <div className="flex gap-4">
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

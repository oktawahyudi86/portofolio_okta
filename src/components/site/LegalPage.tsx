import { ArrowLeft, FileText, Mail, ShieldCheck } from 'lucide-react';
import { LEGAL_CONTENT, contactDetails } from '../../data/site-content';

export const LegalPage = ({
  type,
  onRouteChange,
}: {
  type: keyof typeof LEGAL_CONTENT;
  onRouteChange: (path: string) => void;
}) => {
  const content = LEGAL_CONTENT[type];
  const alternatePath = type === 'privacy' ? '/terms' : '/privacy';
  const alternateLabel = type === 'privacy' ? 'View Terms & Conditions' : 'View Privacy Policy';
  const badgeIcon = type === 'privacy' ? ShieldCheck : FileText;
  const BadgeIcon = badgeIcon;

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fbfcfe_0%,#f4f6fb_42%,#eef2f7_100%)] text-[#1a2e35]">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-5 md:px-6 lg:px-8 lg:py-12">
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            onRouteChange('/');
          }}
          className="button-secondary ui-pill-label px-5 py-2.5"
        >
          <ArrowLeft size={15} />
          Back to Home
        </a>

        <div className="mt-6 overflow-hidden rounded-[28px] border border-[#e3edf3] bg-[linear-gradient(180deg,rgba(248,251,253,0.98),rgba(243,248,251,0.98))] shadow-[0_18px_42px_rgba(15,32,39,0.07)] backdrop-blur-xl">
          <div className="relative border-b border-[#e3edf3] px-6 py-7 sm:px-8 lg:px-10 lg:py-9">
            <div className="absolute right-[-36px] top-[-28px] h-32 w-32 rounded-full bg-[rgba(29,78,216,0.10)] blur-3xl" />
            <div className="absolute left-[22%] bottom-[-22px] h-16 w-16 rounded-full bg-[rgba(15,23,42,0.06)] blur-2xl" />

            <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="section-kicker-label inline-flex items-center gap-2 rounded-full border border-[#d8e4eb] bg-[rgba(248,251,253,0.9)] px-3 py-1.5 text-[#47636d]">
                  <BadgeIcon size={14} className="text-[#1d4ed8]" />
                  Legal Information
                </div>
                <h1 className="mt-4 max-w-[12ch] text-[2.35rem] font-black leading-[0.95] tracking-[-0.045em] text-[#102635] sm:text-[2.8rem] lg:text-[4.2rem]">
                  {content.title}
                </h1>
                <p className="section-intro copy-pretty mt-4 max-w-3xl text-[#566b77]">
                  {content.description}
                </p>
              </div>

              <div className="grid gap-3 sm:max-w-[22rem] sm:grid-cols-2 lg:max-w-none lg:grid-cols-1">
                <a
                  href={alternatePath}
                  onClick={(event) => {
                    event.preventDefault();
                    onRouteChange(alternatePath);
                  }}
                  className="button-secondary ui-pill-label rounded-[18px] px-4 py-3"
                >
                  {alternateLabel}
                </a>
                <a
                  href={`mailto:${contactDetails.emailAddress}`}
                  className="button-secondary ui-pill-label inline-flex justify-center rounded-[18px] px-4 py-3"
                >
                  <Mail size={15} />
                  Contact Okta
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-4 px-6 py-6 sm:px-8 lg:gap-5 lg:px-10 lg:py-8">
            {content.sections.map((section, index) => (
              <section
                key={section.heading}
                className="rounded-[22px] border border-[#e3edf3] bg-[linear-gradient(180deg,#f8fbfd_0%,#f3f8fb_100%)] p-5 shadow-[0_12px_24px_rgba(15,32,39,0.04)] transition hover:border-[#d8e4eb] hover:shadow-[0_16px_30px_rgba(15,32,39,0.055)] sm:p-6 lg:p-7"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[16px] bg-[linear-gradient(135deg,rgba(15,23,42,0.05),rgba(29,78,216,0.16))] text-[13px] font-black text-[#173041] shadow-[inset_0_1px_0_rgba(248,251,253,0.7)]">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="min-w-0">
                    <h2 className="card-title text-[clamp(1.35rem,2vw,1.9rem)] font-black text-[#142b39]">
                      {section.heading}
                    </h2>
                    <p className="copy-pretty supporting-copy mt-3 max-w-3xl text-[#556a76]">
                      {section.body}
                    </p>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <div className="border-t border-[#e3edf3] bg-[rgba(248,251,253,0.84)] px-6 py-5 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <p className="supporting-copy max-w-2xl text-[#5c6f79]">
                For any privacy request, clarification, or content-related question, please contact{' '}
                <a href={`mailto:${contactDetails.emailAddress}`} className="font-semibold text-[#173041] hover:text-[#2f6f8f] transition-colors">
                  {contactDetails.emailAddress}
                </a>.
              </p>
              <div className="flex flex-wrap gap-4 ui-pill-label text-[#4e6771]">
                <a
                  href="/privacy"
                  onClick={(event) => {
                    event.preventDefault();
                    onRouteChange('/privacy');
                  }}
                  className="hover:text-[#2f6f8f] transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  onClick={(event) => {
                    event.preventDefault();
                    onRouteChange('/terms');
                  }}
                  className="hover:text-[#2f6f8f] transition-colors"
                >
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4 ui-pill-label text-[#4f6973]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d8e4eb] bg-[rgba(248,251,253,0.9)] px-4 py-2 shadow-[0_10px_20px_rgba(15,32,39,0.04)]">
            <Mail size={14} className="text-[#1d4ed8]" />
            {contactDetails.emailAddress}
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d8e4eb] bg-[rgba(248,251,253,0.9)] px-4 py-2 shadow-[0_10px_20px_rgba(15,32,39,0.04)]">
            <ShieldCheck size={14} className="text-[#1d4ed8]" />
            Professional use only
          </div>
        </div>
      </div>
    </main>
  );
};

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
    <main className="min-h-screen bg-[linear-gradient(180deg,#f7faf8_0%,#edf3ee_42%,#e6eee8_100%)] text-[#1a2e35]">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-5 md:px-6 lg:px-8 lg:py-12">
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            onRouteChange('/');
          }}
          className="inline-flex items-center gap-2 rounded-full border border-[#d8e4eb] bg-white/90 px-5 py-2.5 text-[13px] font-semibold tracking-[0.06em] text-[#173041] shadow-[0_12px_28px_rgba(15,32,39,0.06)] backdrop-blur-sm transition hover:border-[#0fa3b1]/40 hover:text-[#0fa3b1]"
        >
          <ArrowLeft size={15} />
          Back to Home
        </a>

        <div className="mt-6 overflow-hidden rounded-[30px] border border-[#dce7e2] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(246,251,248,0.98))] shadow-[0_24px_60px_rgba(15,32,39,0.08)] backdrop-blur-xl">
          <div className="relative border-b border-[#e3edf3] px-6 py-7 sm:px-8 lg:px-10 lg:py-9">
            <div className="absolute right-[-36px] top-[-28px] h-32 w-32 rounded-full bg-[rgba(114,179,154,0.10)] blur-3xl" />
            <div className="absolute left-[22%] bottom-[-22px] h-16 w-16 rounded-full bg-[rgba(15,32,39,0.06)] blur-2xl" />

            <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#cfe0d8] bg-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#47636d]">
                  <BadgeIcon size={14} className="text-[#72b39a]" />
                  Legal Information
                </div>
                <h1 className="mt-4 max-w-[12ch] text-[2.35rem] font-black leading-[0.95] tracking-[-0.045em] text-[#102635] sm:text-[2.8rem] lg:text-[4.2rem]">
                  {content.title}
                </h1>
                <p className="mt-4 max-w-3xl text-[15px] leading-[1.9] text-[#566b77] sm:text-[16px] lg:text-[17px]">
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
                  className="rounded-[18px] border border-[#d8e4eb] bg-white/88 px-4 py-3 text-[13px] font-semibold text-[#173041] shadow-[0_12px_24px_rgba(15,32,39,0.05)] transition hover:border-[#0fa3b1]/35 hover:text-[#0fa3b1]"
                >
                  {alternateLabel}
                </a>
                <a
                  href={`mailto:${contactDetails.emailAddress}`}
                  className="inline-flex items-center justify-center gap-2 rounded-[18px] border border-[#d8e4eb] bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(220,243,234,0.88))] px-4 py-3 text-[13px] font-semibold text-[#173041] shadow-[0_12px_24px_rgba(15,32,39,0.05)] transition hover:border-[#0fa3b1]/35 hover:text-[#0fa3b1]"
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
                className="rounded-[22px] border border-[#e3edf3] bg-[linear-gradient(180deg,#ffffff_0%,#fbfefd_100%)] p-5 shadow-[0_14px_28px_rgba(15,32,39,0.04)] transition hover:border-[#d0e3db] hover:shadow-[0_18px_34px_rgba(15,32,39,0.06)] sm:p-6 lg:p-7"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[16px] bg-[linear-gradient(135deg,rgba(15,32,39,0.06),rgba(114,179,154,0.22))] text-[13px] font-black text-[#173041] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-[1.45rem] font-black tracking-[-0.03em] text-[#142b39] sm:text-[1.65rem] lg:text-[1.85rem]">
                      {section.heading}
                    </h2>
                    <p className="mt-3 max-w-3xl text-[15px] leading-[1.95] text-[#556a76] sm:text-[16px]">
                      {section.body}
                    </p>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <div className="border-t border-[#e3edf3] bg-[rgba(248,251,249,0.84)] px-6 py-5 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <p className="max-w-2xl text-[13px] leading-[1.8] text-[#5c6f79] sm:text-[14px]">
                For any privacy request, clarification, or content-related question, please contact{' '}
                <a href={`mailto:${contactDetails.emailAddress}`} className="font-semibold text-[#173041] hover:text-[#0fa3b1] transition-colors">
                  {contactDetails.emailAddress}
                </a>.
              </p>
              <div className="flex flex-wrap gap-4 text-[13px] font-semibold text-[#4e6771]">
                <a
                  href="/privacy"
                  onClick={(event) => {
                    event.preventDefault();
                    onRouteChange('/privacy');
                  }}
                  className="hover:text-[#0fa3b1] transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  onClick={(event) => {
                    event.preventDefault();
                    onRouteChange('/terms');
                  }}
                  className="hover:text-[#0fa3b1] transition-colors"
                >
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-[13px] font-semibold text-[#4f6973]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d8e4eb] bg-white/80 px-4 py-2 shadow-[0_10px_20px_rgba(15,32,39,0.04)]">
            <Mail size={14} className="text-[#72b39a]" />
            {contactDetails.emailAddress}
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d8e4eb] bg-white/80 px-4 py-2 shadow-[0_10px_20px_rgba(15,32,39,0.04)]">
            <ShieldCheck size={14} className="text-[#72b39a]" />
            Professional use only
          </div>
        </div>
      </div>
    </main>
  );
};

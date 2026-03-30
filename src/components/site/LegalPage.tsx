import { LEGAL_CONTENT, contactDetails } from '../../data/site-content';

export const LegalPage = ({
  type,
  onRouteChange,
}: {
  type: keyof typeof LEGAL_CONTENT;
  onRouteChange: (path: string) => void;
}) => {
  const content = LEGAL_CONTENT[type];

  return (
    <div className="min-h-screen bg-[#f4f6fb] text-[#1a2e35]">
      <div className="max-w-5xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 py-10 lg:py-14">
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            onRouteChange('/');
          }}
          className="inline-flex items-center gap-2 rounded-full border border-[#d8e4eb] bg-white px-5 py-2.5 text-[14px] font-semibold tracking-[0.04em] text-[#173041] shadow-sm transition hover:border-[#0fa3b1]/40 hover:text-[#0fa3b1]"
        >
          Back to Home
        </a>

        <div className="mt-8 rounded-[24px] border border-[#e3edf3] bg-white p-8 lg:p-12 shadow-soft">
          <p className="section-kicker text-[12px] font-semibold tracking-[0.14em]">
            <span className="accent-gradient-text">Legal Information</span>
          </p>
          <h1 className="mt-4 text-4xl lg:text-6xl font-black tracking-tight text-[#102635]">
            {content.title}
          </h1>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-[#526675]">
            {content.description}
          </p>

          <div className="mt-10 space-y-8">
            {content.sections.map((section) => (
              <section key={section.heading} className="rounded-[18px] border border-[#e3edf3] bg-[#fbfdff] p-6 lg:p-8">
                <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-[#142b39]">
                  {section.heading}
                </h2>
                <p className="mt-3 text-[16px] leading-[1.85] text-[#546978]">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 text-[14px] font-semibold text-[#0fa3b1]">
          <a
            href="/privacy"
            onClick={(event) => {
              event.preventDefault();
              onRouteChange('/privacy');
            }}
            className="hover:text-[#173041] transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            onClick={(event) => {
              event.preventDefault();
              onRouteChange('/terms');
            }}
            className="hover:text-[#173041] transition-colors"
          >
            Terms & Conditions
          </a>
          <a href={`mailto:${contactDetails.emailAddress}`} className="hover:text-[#173041] transition-colors">
            {contactDetails.emailAddress}
          </a>
        </div>
      </div>
    </div>
  );
};

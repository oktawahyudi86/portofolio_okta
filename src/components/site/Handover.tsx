import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const handoverCards = [
  {
    title: 'Project Timeline',
    link: 'https://drive.google.com/drive/folders/your-timeline-folder-id',
    desc: 'Lihat jadwal, milestone, dan progres utama proyek.',
  },
  {
    title: 'QA Testing',
    link: 'https://drive.google.com/drive/folders/your-qa-folder-id',
    desc: 'Dokumentasi hasil pengujian, bug, dan validasi fitur.',
  },
  {
    title: 'Documentation',
    link: 'https://drive.google.com/drive/folders/your-docs-folder-id',
    desc: 'Dokumen teknis, user guide, dan catatan penting proyek.',
  },
  {
    title: 'Credential',
    link: 'https://drive.google.com/drive/folders/your-credential-folder-id',
    desc: 'Akses login, environment, dan credential penting.',
  },
];

const projectSummaries = [
  {
    name: 'KoncoApps',
    status: 'Aplikasi telah mencapai tahap produksi yang stabil dengan fitur-fitur inti berfungsi optimal. Fokus saat ini beralih ke pemeliharaan sistem dan penanganan change request dari pengguna untuk memastikan pengalaman pengguna yang konsisten dan memuaskan. Tim siap mendukung pengembangan fitur tambahan sesuai kebutuhan bisnis.'
  },
  {
    name: 'DazoApps',
    status: 'Modul booking telah diselesaikan secara komprehensif di tingkat backend dan frontend dengan implementasi terbaik dari best practices industri. Fase berikutnya adalah pengujian menyeluruh dan quality assurance intensif untuk memvalidasi seluruh fungsionalitas sebelum go-live ke production environment.'
  },
  {
    name: 'Live Chat AI',
    status: 'Integrasi Live Chat AI untuk modul booking sedang berlangsung dengan progress saat ini mencapai 80% dari total scope. Tim development aktif melakukan optimization dan integration testing untuk memastikan seamless integration dengan sistem utama dan performa maksimal dalam production.'
  },
];

const notImplementedItems = [
  {
    title: 'WhatsApp Business API',
    reason: 'Memerlukan strategic planning dan resource allocation untuk implementasi yang comprehensive'
  },
  {
    title: 'Payment Gateway Doku',
    reason: 'Tertunda untuk evaluasi lebih lanjut dan alignment dengan kebutuhan business stakeholders'
  },
  {
    title: 'Restruktur: Misahin BE & FE di DazoApps',
    reason: 'Dipertimbangkan untuk fase development selanjutnya setelah stabilisasi sistem utama'
  },
];

export const Handover = () => (
  <main>
    {/* Header & Cards Section */}
    <section id="handover" className="lazy-render-section section-shell section-tone-contact px-4 sm:px-5 md:px-6 xl:px-8 2xl:px-12 pt-20 pb-12 lg:pt-28 lg:pb-16">
      <div className="section-inner max-w-7xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="section-header-stack max-w-3xl mb-12">
          <p className="section-kicker section-kicker-label">
            <span className="accent-gradient-text">Project Handover</span>
          </p>
          <h2 className="section-heading-display copy-balance max-w-[14ch] font-black text-[#1a2e35]">
            Dokumentasi dan progres handover untuk kelanjutan proyek.
          </h2>
          <p className="section-intro copy-pretty copy-measure-wide max-w-2xl">
            Halaman khusus untuk direktur dan penerus, berisi akses dokumen penting, status progres, dan catatan handover project.
          </p>
        </div>

        {/* Handover Cards Grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {handoverCards.map((card) => {
            return (
              <motion.a
                key={card.title}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="surface-card surface-card-tight flex flex-col gap-2 p-4 transition-colors"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[14px] font-black text-[#102635]">{card.title}</p>
                  <ArrowUpRight size={16} className="text-[#94a3b8]" />
                </div>
                <p className="copy-pretty text-[12px] leading-relaxed text-[#5f6670]">{card.desc}</p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>

    {/* Project Summary & Not Implemented Section */}
    <section id="project-status" className="section-shell section-tone-portfolio section-spacing px-4 sm:px-5 md:px-6 xl:px-8 2xl:px-12">
      <div className="section-inner max-w-7xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Project Status - Left Column */}
          <div>
            <div className="mb-8">
              <p className="section-kicker section-kicker-label mb-3">
                <span className="accent-gradient-text">PROJECT STATUS</span>
              </p>
              <h2 className="text-[2rem] sm:text-[2.4rem] font-black leading-[1.1] text-[#0a1620] mb-2">
                Project
              </h2>
              <h2 className="text-[2rem] sm:text-[2.4rem] font-black leading-[1.1] text-[#0a1620] mb-6">
                Summary
              </h2>
            </div>

            <div className="space-y-8">
              {projectSummaries.map((proj) => (
                <div key={proj.name} className="pb-6 border-b border-[#d1d5db] last:border-b-0">
                  <h4 className="text-[1rem] font-black text-[#0d1f2b] mb-3">
                    {proj.name}
                  </h4>
                  <p className="text-[14px] text-[#5f6670] leading-[1.7]">
                    {proj.status}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Not Implemented - Right Column */}
          <div>
            <div className="mb-8">
              <p className="section-kicker section-kicker-label mb-3">
                <span className="accent-gradient-text">SKIPPED ITEMS</span>
              </p>
              <h2 className="text-[2rem] sm:text-[2.4rem] font-black leading-[1.1] text-[#0a1620] mb-2">
                Tidak Jadi
              </h2>
              <h2 className="text-[2rem] sm:text-[2.4rem] font-black leading-[1.1] text-[#0a1620] mb-6">
                Diimplementasikan
              </h2>
            </div>

            <div className="space-y-8">
              {notImplementedItems.map((item) => (
                <div key={item.title} className="pb-6 border-b border-[#fecaca] last:border-b-0">
                  <h4 className="text-[1rem] font-black text-[#be123c] mb-3">
                    {item.title}
                  </h4>
                  <p className="text-[14px] text-[#5f6670] leading-[1.7]">
                    {item.reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Contact Section for Handover Questions */}
    <section className="section-shell section-tone-contact px-4 sm:px-5 md:px-6 xl:px-8 2xl:px-12 py-12 lg:py-16">
      <div className="section-inner max-w-7xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="max-w-2xl">
            <p className="section-kicker section-kicker-label mb-4">
              <span className="accent-gradient-text">Ada Pertanyaan?</span>
            </p>
            <h2 className="section-heading-display copy-balance max-w-[12ch] font-black text-[#1a2e35] mb-6">
              Siap membahas detail handover dan kelanjutan proyek.
            </h2>
            <p className="section-intro copy-pretty copy-measure-wide max-w-2xl text-[#5f6670]">
              Jika Anda membutuhkan klarifikasi mengenai status proyek, dokumentasi handover, atau rencana pengembangan selanjutnya, mari kita diskusikan secara terperinci untuk memastikan transisi yang smooth.
            </p>
          </div>

          {/* Right Column - Contact Card */}
          <div className="surface-card surface-card-tight p-8">
            <p className="section-kicker section-kicker-label mb-4">
              <span className="accent-gradient-text">WHATSAPP</span>
            </p>
            <h3 className="copy-balance max-w-[11ch] text-[1.72rem] sm:text-[1.95rem] font-black leading-[1.04] text-[#0a1620] mb-4">
              Hubungi langsung
            </h3>
            <p className="text-[13px] text-[#5f6670] leading-[1.6] mb-6">
              Kirimkan pertanyaan atau topik yang ingin didiskusikan, dan saya akan merespons untuk melanjutkan percakapan lebih detail.
            </p>
            <motion.a
              href="https://wa.me/62857"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0d5d47] hover:bg-[#0a4737] text-white font-bold rounded-full text-[13px] transition-colors"
            >
              Message on WhatsApp
              <ArrowUpRight size={14} />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  </main>
);


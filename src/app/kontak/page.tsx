// src/app/kontak/page.tsx
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function KontakKami() {
  const nomorWhatsApp = "6281234567890"; // Ganti dengan nomor WA percetakan
  const pesanWA = "Halo, saya ingin bertanya mengenai layanan percetakan.";

  return (
    <main className="bg-white min-h-screen text-gray-800 antialiased font-sans flex flex-col">
      <Navbar />

      {/* --- HEADER HALAMAN --- */}
      <section className="pt-32 pb-20 bg-[#8A1538] text-white px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4AF37] opacity-10 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl"></div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <h1
            data-aos="fade-down"
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Hubungi <span className="text-[#D4AF37]">Kami</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-200 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Kami siap mendengar dan membantu mewujudkan kebutuhan visual Anda.
            Kunjungi *workshop* kami atau hubungi kami secara *online*.
          </p>
        </div>
      </section>

      {/* --- KARTU INFORMASI KONTAK --- */}
      <section className="py-16 px-6 container mx-auto max-w-6xl -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Kartu Alamat */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 border border-orange-100 text-[#8A1538]">
              📍
            </div>
            <h3 className="font-bold text-xl mb-3 text-gray-900">
              Alamat Workshop
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Jl. Palem 1 No.8
              <br />
              Bumi Arumsari
              <br />
              Kabupaten Cirebon, 45171
            </p>
            <a
              href="https://maps.app.goo.gl/9RW3YwuKve8nkFBXA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] font-bold text-sm hover:underline"
            >
              Buka di Google Maps &rarr;
            </a>
          </div>

          {/* Kartu Telepon / WA */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 border border-orange-100 text-[#8A1538]">
              📞
            </div>
            <h3 className="font-bold text-xl mb-3 text-gray-900">
              Telepon & WhatsApp
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Konsultasi langsung dengan admin kami untuk mendapatkan estimasi
              harga.
            </p>
            <a
              href={`https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesanWA)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#8A1538] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#70102d] transition-colors"
            >
              Chat WhatsApp
            </a>
          </div>

          {/* Kartu Jam Operasional */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 border border-orange-100 text-[#8A1538]">
              ⏱️
            </div>
            <h3 className="font-bold text-xl mb-3 text-gray-900">
              Jam Operasional
            </h3>
            <ul className="text-gray-500 text-sm space-y-2">
              <li className="flex justify-between border-b border-gray-50 pb-2">
                <span>Senin - Jumat</span>
                <span className="font-bold text-gray-800">08:00 - 17:00</span>
              </li>
              <li className="flex justify-between border-b border-gray-50 pb-2">
                <span>Sabtu</span>
                <span className="font-bold text-gray-800">08:00 - 15:00</span>
              </li>
              <li className="flex justify-between pt-1">
                <span>Minggu & Libur</span>
                <span className="font-bold text-[#8A1538]">Tutup</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- MAPS & PESAN LANGSUNG --- */}
      <section className="py-16 px-6 container mx-auto max-w-6xl mb-10">
        <div className="bg-gray-50 rounded-3xl p-4 md:p-8 border border-gray-100">
          <div
            data-aos="zoom-in"
            className="w-full h-[400px] bg-gray-200 rounded-2xl overflow-hidden relative"
          >
            {/* Untuk Google Maps sungguhan:
              1. Buka Google Maps, cari alamat toko
              2. Klik "Share" -> "Embed a map"
              3. Copy kode <iframe> nya dan ganti div di bawah ini 
            */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d730.8289642487981!2d108.51156050594427!3d-6.763059799723907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1f000d8c71af%3A0x8ab371ff0a7ac184!2sPercetakan%20Anjun%20Jaya!5e0!3m2!1sid!2sid!4v1774764851461!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="Peta Lokasi Percetakan Anjun Jaya"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

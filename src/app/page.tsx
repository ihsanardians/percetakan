// src/app/page.tsx
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { katalogProduk } from "@/data/katalog";
import { daftarTestimoni } from "@/data/testimoni";
import Link from "next/link";
import TextType from "@/components/TextType";

export default function Home() {
  const nomorWhatsApp = "6281234567890"; // Ganti nomor WA di sini
  // Kita hanya ambil 3 produk pertama sebagai "Produk Unggulan"
  const produkUnggulan = katalogProduk.slice(0, 3);

  return (
    <main className="bg-white min-h-screen text-gray-800 antialiased font-sans overflow-x-hidden">
      <Navbar />

      {/* --- 1. BERANDA (HERO SECTION) --- */}
      <section className="relative pt-40 pb-28 md:pt-56 md:pb-40 px-6 overflow-hidden max-w-[100vw] bg-white">
        {/* 1. CONTAINER GAMBAR BACKGROUND (Tanpa -z-10) */}
        <div className="absolute inset-0 z-0">
          <img
            src="images/hero.jpg" // Ganti dengan path gambar kamu
            alt="Background"
            className="w-full h-full object-cover grayscale opacity-30"
          />
        </div>

        {/* 2. SINGLE COMPOSITE OVERLAY (Gradien Tunggal Pintar - z-10) */}
        {/* Kita ganti overlay putih/80 dan gradien bottom-0 h-64 sebelumnya 
            menjadi SATU gradien tunggal yang menutup inset-0 (seluruh layar). 
            Dimulai dari putih tipis (bg-white/70) di atas, 
            memudar jadi putih solid (to-white) di bawah halaman. */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-gray-50 z-10 backdrop-blur-[1px]"></div>

        {/* 3. KONTEN TEKS (z-20 agar di atas Gradien Pintar) */}
        <div className="container mx-auto flex flex-col items-center text-center max-w-7xl relative z-20">
          <div
            data-aos="fade-down"
            className="inline-block px-4 py-1.5 rounded-full bg-[#8A1538]/10 text-[#8A1538] text-xs font-bold tracking-widest mb-6 uppercase border border-[#8A1538]/20"
          >
            Cetak Praktis, Hasil Profesional
          </div>
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6 max-w-4xl"
          >
            Cetak Dengan Hasil<br></br>
            <span className="text-[#8A1538]">
              <TextType
                text={["Presisi", "Cepat", "Maksimal"]}
                typingSpeed={75}
                pauseDuration={2000}
                showCursor={true}
                cursorCharacter="|"
                deletingSpeed={50}
              />
            </span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-lg md:text-xl text-gray-500 max-w-2xl mb-12 leading-relaxed"
          >
            Nikmati kemudahan layanan cetak dengan dukungan jaringan percetakan
            berstandar tinggi. Cocok untuk kebutuhan bisnis, promosi, hingga
            acara spesial dengan hasil yang selalu memuaskan.
          </p>
          <div
            data-aos="zoom-in"
            data-aos-delay="600"
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link
              href="/produk"
              className="bg-[#8A1538] text-white px-10 py-5 rounded-full font-bold shadow-lg shadow-[#8A1538]/30 hover:bg-[#70102d] hover:-translate-y-1 transition-all text-center"
            >
              Lihat Semua Produk
            </Link>
            <a
              href={`https://wa.me/${nomorWhatsApp}`}
              target="_blank"
              className="bg-white text-[#8A1538] border-2 border-gray-100 px-10 py-5 rounded-full font-bold hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all text-center"
            >
              Chat Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* --- 2. KEUNGGULAN (NEW SECTION) --- */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="container mx-auto max-w-7xl">
          <div data-aos="fade-up" className="text-center mb-16">
            <h2 className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-2">
              Mengapa Memilih Kami?
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Hasil cetak yang bisa Anda andalkan.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "✨",
                title: "Pengerjaan Rapi & Detail",
                desc: "Kami memperhatikan setiap detail agar hasil cetakan terlihat rapi dan sesuai dengan desain yang diinginkan.",
              },
              {
                icon: "⏱️",
                title: "Tepat Waktu",
                desc: "Pengerjaan dilakukan sesuai waktu yang disepakati, jadi Anda tidak perlu khawatir soal keterlambatan.",
              },
              {
                icon: "💎",
                title: "Kualitas Terjaga",
                desc: "Setiap hasil cetak kami cek kembali agar tetap konsisten dan layak digunakan.",
              },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 150}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. PRODUK UNGGULAN --- */}
      <section className="py-24 px-6 container mx-auto max-w-7xl">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-2">
            Produk Pilihan
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Paling Populer di Percetakan Kami
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {produkUnggulan.map((produk, i) => {
            const pesanWA = `Halo, saya tertarik dengan layanan *${produk.nama}*. Boleh minta info harganya?`;
            const linkWA = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesanWA)}`;

            return (
              <div
                key={produk.id}
                data-aos="fade-up"
                data-aos-delay={i * 200}
                className="bg-white group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col"
              >
                {/* Gambar Produk */}
                <div className="relative h-56 bg-gray-200 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img
                    src={produk.gambar}
                    alt={produk.nama}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>

                {/* Info Produk */}
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#8A1538] transition-colors">
                    {produk.nama}
                  </h4>
                  <p className="text-gray-500 text-sm mb-4 flex-grow leading-relaxed">
                    {produk.deskripsi}
                  </p>

                  {/* --- BAGIAN HARGA YANG DITAMBAHKAN --- */}
                  <div className="pt-4 border-t border-gray-100 mb-5">
                    <p className="text-xs text-gray-400 mb-1">Mulai dari</p>
                    <p className="text-xl font-black text-[#D4AF37]">
                      Rp {produk.harga.toLocaleString("id-ID")}
                      <span className="text-sm font-normal text-gray-400 ml-1">
                        / {produk.satuan.split(" ")[0]}{" "}
                        {/* Mengambil kata pertama dari satuan, misal "per meter" jadi "per" */}
                      </span>
                    </p>
                  </div>
                  {/* ----------------------------------- */}

                  <a
                    href={linkWA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-white font-bold py-3 rounded-xl hover:bg-[#8A1538] transition-colors text-center text-sm w-full"
                  >
                    Pesan Sekarang
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div data-aos="fade-up" className="text-center">
          <Link
            href="/produk"
            className="bg-white text-[#8A1538] border-2 border-[#8A1538] px-8 py-3.5 rounded-full font-bold hover:bg-[#8A1538] hover:text-white transition-all text-sm flex items-center gap-2 inline-flex"
          >
            <span>Lihat Produk Lengkap</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* --- 4. TESTIMONI (NEW SECTION) --- */}
      <section className="py-24 bg-[#8A1538] text-white px-6">
        <div className="container mx-auto max-w-7xl">
          <div data-aos="fade-up" className="text-center mb-16">
            <h2 className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-2">
              Testimoni Pelanggan
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-3">
              Apa Kata Mereka Tentang Kami?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {daftarTestimoni.map((testi, i) => (
              <div
                key={testi.id}
                data-aos="fade-left"
                data-aos-delay={i * 200}
                className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10 flex flex-col"
              >
                <div className="text-[#D4AF37] text-3xl mb-6">“</div>
                <p className="text-gray-200 text-base leading-relaxed mb-6 flex-grow">
                  {testi.komentar}
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <img
                    src={testi.avatar}
                    alt={testi.nama}
                    className="w-12 h-12 rounded-full border-2 border-[#D4AF37]"
                  />
                  <div>
                    <h5 className="font-bold text-white">{testi.nama}</h5>
                    <p className="text-xs text-gray-300">{testi.perusahaan}</p>
                    <div className="text-sm mt-1">
                      {"⭐".repeat(testi.rating)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

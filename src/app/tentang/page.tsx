// src/app/tentang/page.tsx
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";

export default function TentangKami() {
  const nomorWhatsApp = "6281234567890"; // Ganti dengan nomor WA yang sesuai

  return (
    <main className="bg-white min-h-screen text-gray-800 antialiased font-sans flex flex-col overflow-x-hidden">
      <Navbar />

      {/* --- HEADER HALAMAN --- */}
      <section className="pt-32 pb-20 bg-[#8A1538] text-white px-6 relative overflow-hidden">
        {/* Ornamen Latar Belakang */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4AF37] opacity-10 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl"></div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <h1
            data-aos="fade-down"
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Kisah di Balik <span className="text-[#D4AF37]">Karya Nyata</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-200 text-lg leading-relaxed max-w-3xl mx-auto"
          >
            Kami bukan sekadar penyedia jasa cetak. Kami adalah mitra visual
            Anda yang berkomitmen untuk mewujudkan setiap ide menjadi produk
            berkualitas tinggi yang berkesan.
          </p>
        </div>
      </section>

      {/* --- SEJARAH & VISI --- */}
      <section className="py-24 px-6 container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Gambar Kiri */}
          <div data-aos="fade-right" className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-[#8A1538] rounded-3xl translate-x-4 translate-y-4 -z-10"></div>
            <img
              src="/images/tentang.jpg"
              alt="Awal Mula Percetakan"
              className="rounded-3xl w-full object-cover shadow-xl border-4 border-white h-[500px]"
            />
            {/* Badge Pengalaman */}
            <div className="absolute -bottom-6 -left-6 bg-[#D4AF37] text-white p-6 rounded-2xl shadow-lg border-4 border-white">
              <p className="text-4xl font-black mb-1">10+</p>
              <p className="text-sm font-bold uppercase tracking-wider">
                Tahun
                <br />
                Pengalaman
              </p>
            </div>
          </div>

          {/* Teks Kanan */}
          <div data-aos="fade-left" className="w-full lg:w-1/2">
            <h2 className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-2">
              Tentang Perusahaan
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Dedikasi Terhadap Detail & Kecepatan.
            </h3>

            <div className="space-y-6 text-gray-600 leading-relaxed mb-8">
              <p>
                Berawal dari sebuah toko kecil yang melayani fotokopi dan cetak
                dokumen ringan, kami terus berkembang dan berinovasi seiring
                dengan tingginya permintaan pasar akan hasil cetak berkualitas
                premium.
              </p>
              <p>
                Saat ini, kami telah dilengkapi dengan berbagai mesin cetak
                offset dan digital printing berteknologi mutakhir. Tim kami
                terdiri dari operator mesin berpengalaman dan *quality control*
                yang ketat, memastikan tidak ada satu pun produk cacat yang
                sampai ke tangan Anda.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                <div className="text-[#8A1538] text-3xl mb-3">🎯</div>
                <h4 className="font-bold text-gray-900 mb-1">Visi Kami</h4>
                <p className="text-sm text-gray-500">
                  Menjadi mitra percetakan terpercaya nomor 1 dengan standar
                  kualitas internasional.
                </p>
              </div>
              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                <div className="text-[#8A1538] text-3xl mb-3">🚀</div>
                <h4 className="font-bold text-gray-900 mb-1">Misi Kami</h4>
                <p className="text-sm text-gray-500">
                  Memberikan solusi cetak cepat, harga transparan, dan pelayanan
                  ramah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATISTIK --- */}
      <section className="py-16 bg-gray-900 text-white px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { angka: "5000+", label: "Proyek Selesai" },
              { angka: "99%", label: "Tingkat Kepuasan" },
              { angka: "24/7", label: "Dukungan Pelanggan" },
              { angka: "50+", label: "Mitra Bisnis" },
            ].map((stat, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 150}
                className="p-4"
              >
                <h4 className="text-4xl md:text-5xl font-black text-[#D4AF37] mb-2">
                  {stat.angka}
                </h4>
                <p className="text-gray-400 text-sm uppercase tracking-widest font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NILAI INTI (CORE VALUES) --- */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl text-center">
          <h2
            data-aos="fade-up"
            className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-2"
          >
            Nilai Inti Kami
          </h2>
          <h3
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-16"
          >
            Mengapa Pelanggan Setia Pada Kami?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                icon: "💎",
                title: "Kualitas Tanpa Kompromi",
                desc: "Kami menggunakan bahan baku kertas dan tinta terbaik di kelasnya untuk memastikan warna yang solid dan tahan lama.",
              },
              {
                icon: "⚡",
                title: "Kecepatan Produksi",
                desc: "Sistem manajemen antrean dan mesin berkapasitas tinggi memungkinkan pengerjaan selesai tepat pada waktunya.",
              },
              {
                icon: "🤝",
                title: "Integritas & Kejujuran",
                desc: "Tidak ada biaya tersembunyi. Spesifikasi yang kami janjikan adalah spesifikasi yang akan Anda dapatkan.",
              },
            ].map((value, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 200}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-6 bg-orange-50 w-20 h-20 flex items-center justify-center rounded-2xl">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-24 px-6 container mx-auto max-w-4xl text-center">
        <div
          data-aos="zoom-in"
          className="bg-[#8A1538] rounded-3xl p-10 md:p-16 text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://placehold.co/1000x500?text=Texture')] opacity-10 mix-blend-overlay"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Siap Memulai Proyek Anda Bersama Kami?
            </h2>
            <p className="text-gray-200 mb-10 max-w-2xl mx-auto text-lg">
              Jangan ragu untuk berkonsultasi mengenai kebutuhan cetak, bahan,
              atau desain Anda. Tim kami siap membantu memberikan solusi
              terbaik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${nomorWhatsApp}`}
                target="_blank"
                className="bg-[#D4AF37] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#c5a034] hover:-translate-y-1 transition-all"
              >
                Hubungi via WhatsApp
              </a>
              <Link
                href="/produk"
                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#8A1538] transition-all"
              >
                Lihat Katalog Produk
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

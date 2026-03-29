// src/app/produk/page.tsx
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { katalogProduk } from "@/data/katalog";

export default function Produk() {
  const nomorWhatsApp = "6281234567890"; // Ganti dengan nomor WA yang sama

  return (
    <main className="bg-white min-h-screen text-gray-800 antialiased font-sans flex flex-col">
      <Navbar />

      {/* --- HEADER HALAMAN --- */}
      <section className="pt-32 pb-16 bg-[#8A1538] text-white px-6 relative overflow-hidden">
        {/* Ornamen Latar Belakang */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4AF37] opacity-10 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl"></div>

        <div className="container mx-auto max-w-7xl text-center relative z-10">
          <h1
            data-aos="fade-down"
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Katalog <span className="text-[#D4AF37]">Lengkap</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-200 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Temukan berbagai solusi cetak untuk kebutuhan personal maupun bisnis
            Anda. Kualitas terjamin dengan harga yang transparan.
          </p>
        </div>
      </section>

      {/* --- GRID KATALOG PRODUK --- */}
      <section className="py-20 px-6 flex-grow bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {katalogProduk.map((produk, i) => {
              const pesanWA = `Halo, saya tertarik dengan layanan *${produk.nama}*. Boleh minta info harganya?`;
              const linkWA = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesanWA)}`;

              // Logika animasi agar elemen muncul bergantian
              const delayAnimasi = (i % 4) * 100;

              return (
                <div
                  key={produk.id}
                  data-aos="fade-up"
                  data-aos-delay={delayAnimasi}
                  className="bg-white group rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-gray-100 flex flex-col"
                >
                  {/* Gambar */}
                  <div className="relative h-56 bg-gray-200 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                    <img
                      src={produk.gambar}
                      alt={produk.nama}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Badge Kecil */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#8A1538] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      Tersedia
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#8A1538] transition-colors">
                      {produk.nama}
                    </h4>
                    <p className="text-gray-500 text-sm mb-4 flex-grow leading-relaxed">
                      {produk.deskripsi}
                    </p>

                    {/* Harga */}
                    <div className="pt-4 border-t border-gray-100 mb-5">
                      <p className="text-xs text-gray-400 mb-1">
                        Harga Estimasi
                      </p>
                      <p className="text-xl font-black text-[#D4AF37]">
                        Rp {produk.harga.toLocaleString("id-ID")}
                        <span className="text-sm font-normal text-gray-400 ml-1">
                          / {produk.satuan}
                        </span>
                      </p>
                    </div>

                    {/* Tombol Aksi */}
                    <div className="flex gap-2">
                      <a
                        href={`/produk/${produk.id}`}
                        className="flex-1 bg-white text-[#8A1538] border-2 border-[#8A1538] font-bold py-2.5 rounded-xl hover:bg-[#8A1538] hover:text-white transition-colors text-center text-sm group-hover:-translate-y-1 duration-300"
                      >
                        Detail
                      </a>
                      <a
                        href={linkWA}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-900 text-white font-bold py-2.5 rounded-xl hover:bg-[#8A1538] transition-colors text-center text-sm flex justify-center items-center gap-1 group-hover:-translate-y-1 duration-300"
                      >
                        Pesan
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

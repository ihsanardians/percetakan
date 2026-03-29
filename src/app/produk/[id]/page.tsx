// src/app/produk/[id]/page.tsx
"use client";

import { use } from "react";
import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { katalogProduk } from "@/data/katalog";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function DetailProduk({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // 1. Baca parameter URL menggunakan 'use' (standar Next.js 15 Client Component)
  const resolvedParams = use(params);
  const produkId = parseInt(resolvedParams.id);
  const produk = katalogProduk.find((p) => p.id === produkId);

  if (!produk) {
    notFound();
  }

  // 2. STATE UNTUK GALERI DAN VARIAN
  // Set gambar aktif pertama kali adalah gambar utama
  const [gambarAktif, setGambarAktif] = useState(produk.gambar);
  const [galeriTampil, setGaleriTampil] = useState(produk.galeri || []);

  // Set varian aktif pertama kali (jika ada varian, pilih yang pertama. Jika tidak, null)
  const [varianAktif, setVarianAktif] = useState(
    produk.varian && produk.varian.length > 0 ? produk.varian[0] : null,
  );

  const handlePrev = () => {
    if (!galeriTampil || galeriTampil.length <= 1) return;
    const currentIndex = galeriTampil.indexOf(gambarAktif);
    const isFirstSlide = currentIndex === 0;
    // Jika gambar pertama, kembali ke paling akhir. Jika tidak, mundur 1.
    const newIndex = isFirstSlide ? galeriTampil.length - 1 : currentIndex - 1;
    setGambarAktif(galeriTampil[newIndex]);
  };

  const handleNext = () => {
    if (!galeriTampil || galeriTampil.length <= 1) return;
    const currentIndex = galeriTampil.indexOf(gambarAktif);
    const isLastSlide = currentIndex === galeriTampil.length - 1;
    // Jika gambar terakhir, kembali ke paling awal. Jika tidak, maju 1.
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setGambarAktif(galeriTampil[newIndex]);
  };

  // 3. LOGIKA HARGA DAN WHATSAPP
  // Jika ada varian yang dipilih, gunakan harga varian. Jika tidak, gunakan harga default produk.
  const hargaTampil = varianAktif ? varianAktif.harga : produk.harga;

  const nomorWhatsApp = "6281234567890";
  const namaVarianTeks = varianAktif ? ` (Varian: ${varianAktif.nama})` : "";
  const pesanWA = `Halo, saya tertarik dengan layanan *${produk.nama}*${namaVarianTeks}. Boleh minta info cara pemesanannya?`;
  const linkWA = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesanWA)}`;

  return (
    <main className="bg-white min-h-screen text-gray-800 antialiased font-sans flex flex-col">
      <Navbar />
      <div className="pt-24 md:pt-32"></div>

      <section className="container mx-auto px-6 max-w-6xl mb-20 flex-grow">
        <Link
          href="/produk"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#8A1538] transition-colors mb-8 font-medium"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Kembali ke Katalog
        </Link>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row gap-8">
          {/* --- BAGIAN KIRI: GALERI GAMBAR --- */}
          <div className="md:w-1/2 flex flex-col gap-4">
            {/* Gambar Utama (Besar) */}
            <div className="bg-gray-100 relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden border border-gray-100 group">
              <img
                src={gambarAktif}
                alt={produk.nama}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-300"
              />
            </div>

            {/* Thumbnail Slider (Gambar Kecil) */}
            {galeriTampil && galeriTampil.length > 0 && (
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {galeriTampil.map((imgSrc, index) => (
                  <button
                    key={index}
                    onClick={() => setGambarAktif(imgSrc)}
                    className={`flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 transition-all ${
                      gambarAktif === imgSrc
                        ? "border-[#8A1538] opacity-100"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={imgSrc}
                      alt={`Desain ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* --- BAGIAN KANAN: DETAIL & VARIAN --- */}
          <div className="md:w-1/2 py-4 md:py-8 flex flex-col">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
              {produk.nama}
            </h1>
            <p className="text-gray-600 leading-relaxed mb-6">
              {produk.deskripsi}
            </p>

            {/* Pilihan Varian (Muncul hanya jika produk punya varian) */}
            {produk.varian && produk.varian.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">
                  Pilih Jenis/Bahan:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {produk.varian.map((varian, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setVarianAktif(varian);

                        const dataVarian = varian as any;

                        // Jika varian ini punya galeri sendiri
                        if (
                          dataVarian.galeriVarian &&
                          dataVarian.galeriVarian.length > 0
                        ) {
                          setGaleriTampil(dataVarian.galeriVarian); // 1. Ganti deretan thumbnail
                          setGambarAktif(dataVarian.galeriVarian[0]); // 2. Ganti gambar utama ke urutan pertama
                        } else {
                          // Jika tidak punya, kembalikan ke galeri default produk
                          setGaleriTampil(produk.galeri || []);
                          setGambarAktif(produk.gambar);
                        }
                      }}
                      className={`text-left px-4 py-3 rounded-xl border-2 transition-all ${
                        varianAktif?.nama === varian.nama
                          ? "border-[#8A1538] bg-[#8A1538]/5"
                          : "border-gray-200 hover:border-[#8A1538]/50"
                      }`}
                    >
                      <p
                        className={`font-bold text-sm ${varianAktif?.nama === varian.nama ? "text-[#8A1538]" : "text-gray-700"}`}
                      >
                        {varian.nama}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="w-full h-px bg-gray-100 mb-6 mt-auto"></div>

            {/* Area Harga Dinamis */}
            <div className="mb-8">
              <p className="text-sm text-gray-400 mb-1">Total Estimasi Harga</p>
              <p className="text-3xl font-black text-[#8A1538]">
                Rp {hargaTampil.toLocaleString("id-ID")}
                <span className="text-lg font-normal text-gray-500 ml-2">
                  / {produk.satuan}
                </span>
              </p>
            </div>

            {/* Tombol Pesan */}
            <a
              href={linkWA}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#8A1538] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-[#70102d] hover:-translate-y-1 transition-all text-center flex justify-center items-center gap-3 text-lg"
            >
              Konsultasi & Pesan via WA
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

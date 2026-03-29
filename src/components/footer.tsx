// src/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-24">
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl text-gray-600">
        <div className="md:col-span-1">
          <Link
            href="/"
            className="text-2xl font-black tracking-tighter text-[#8A1538]"
          >
            Anjun<span className="text-[#D4AF37]">Jaya</span>
          </Link>
          <p className="text-sm mt-4 leading-relaxed">
            Wujudkan Ide Visual Anda Menjadi Karya Nyata. Kualitas premium,
            harga bersahabat.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-gray-900 mb-4">Navigasi</h5>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/" className="hover:text-[#8A1538]">
              Beranda
            </Link>
            <Link href="/produk" className="hover:text-[#8A1538]">
              Produk
            </Link>
            <Link href="/tentang" className="hover:text-[#8A1538]">
              Tentang Kami
            </Link>
          </div>
        </div>
        <div>
          <h5 className="font-bold text-gray-900 mb-4">Layanan Populer</h5>
          <div className="flex flex-col gap-2 text-sm">
            <p>Yasin</p>
            <p>Undangan</p>
            <p>Spanduk/Banner</p>
          </div>
        </div>
        <div>
          <h5 className="font-bold text-gray-900 mb-4">Kontak</h5>
          <div className="flex flex-col gap-2 text-sm">
            <p>Jl. Palem 1 No. 8, Bumi Arumsari, Kab. Cirebon</p>
            <p>WhatsApp: +62 821 2715 0205</p>
            <p>Email: anjunjaya@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="bg-[#8A1538] text-white/70 py-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} AnjunJaya. All rights reserved.</p>
      </div>
    </footer>
  );
}

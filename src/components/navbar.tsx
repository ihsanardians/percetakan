// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  // State untuk mengontrol buka/tutup menu di mobile
  const [isOpen, setIsOpen] = useState(false);

  const nomorWhatsApp = "6281234567890"; // Ganti nomor WA di sini

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Produk", href: "/produk" },
    { name: "Tentang Kami", href: "/tentang" },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl relative z-50">
        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter text-[#8A1538]"
        >
          Anjun<span className="text-[#D4AF37]">Jaya</span>
        </Link>

        {/* MENU DESKTOP (Tersembunyi di Mobile) */}
        <div className="hidden md:flex gap-8 items-center text-sm font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-colors ${
                pathname === link.href
                  ? "text-[#8A1538]"
                  : "text-gray-500 hover:text-[#8A1538]"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={`https://wa.me/${nomorWhatsApp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#8A1538] text-[#8A1538] hover:bg-[#8A1538] hover:text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all ml-2"
          >
            Hubungi Kami
          </a>
        </div>

        {/* TOMBOL HAMBURGER (Hanya Muncul di Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none p-2"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              // Ikon Silang (X) ketika menu terbuka
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Ikon Hamburger (Garis 3) ketika menu tertutup
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* MENU MOBILE (Dropdown) */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <div className="flex flex-col px-6 py-6 gap-5 bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)} // Otomatis tutup menu saat link diklik
              className={`block text-base font-bold transition-colors ${
                pathname === link.href
                  ? "text-[#8A1538]"
                  : "text-gray-600 hover:text-[#8A1538]"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <hr className="border-gray-100 my-2" />

          <a
            href={`https://wa.me/${nomorWhatsApp}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)} // Otomatis tutup menu juga
            className="w-full bg-[#8A1538] text-white text-center py-3.5 rounded-xl font-bold hover:bg-[#70102d] transition-colors flex justify-center items-center gap-2"
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
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span>Chat via WhatsApp</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

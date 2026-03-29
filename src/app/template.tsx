// src/app/template.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 1. Inisialisasi ulang AOS setiap kali halaman berganti
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 50, // Animasi mulai saat elemen masuk 50px ke layar
    });

    // 2. Paksa refresh untuk memastikan tidak ada elemen yang tertinggal
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, []); // Kosongkan array dependency agar jalan setiap kali template dimuat

  return <div>{children}</div>;
}

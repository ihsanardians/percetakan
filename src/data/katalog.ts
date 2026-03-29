// src/data/katalog.ts

export const katalogProduk = [
  {
    id: 1,
    nama: "Buku Yasin",
    deskripsi:
      "Cetak buku Yasin dengan pilihan soft cover, hard cover, hingga bludru. Dikerjakan rapi dan nyaman digunakan, untuk keperluan tahlilan dan doa bersama.",
    harga: 1000,
    satuan: "per buku",
    gambar: "/images/yasin-umum.jpeg",
    galeri: [],
    varian: [
      {
        nama: "Soft Cover",
        harga: 8000,
        galeriVarian: [
          "/images/yasin-soft-1.jpeg",
          "/images/yasin-soft-2.jpeg",
          "/images/yasin-soft-3.jpeg",
          "/images/yasin-soft-4.jpeg",
          "/images/yasin-soft-5.jpeg",
          "/images/yasin-soft-6.jpeg",
          "/images/yasin-soft-7.jpeg",
          "/images/yasin-soft-8.jpeg",
          "/images/yasin-soft-9.jpeg",
        ],
      },
      {
        nama: "Hard Cover Biasa",
        harga: 12500,
        galeriVarian: [
          "/images/yasin-hard-1.jpeg",
          "/images/yasin-hard-2.jpeg",
          "/images/yasin-hard-3.jpeg",
          "/images/yasin-hard-4.jpeg",
          "/images/yasin-hard-5.jpeg",
          "/images/yasin-bludru-1.jpeg",
        ],
      },
    ],
  },
  {
    id: 2,
    nama: "Cetak Spanduk / Banner",
    deskripsi:
      "Cetak banner dan spanduk dengan hasil rapi dan warna jelas. Cocok untuk promosi usaha, acara, dan berbagai kebutuhan lainnya",
    harga: 25000,
    satuan: "per meter persegi",
    gambar: "/images/banner-umum.jpeg",
    varian: [],
    galeri: [],
  },
  {
    id: 3,
    nama: "Cetak Undangan",
    deskripsi:
      "Bahan kertas Art Carton tebal, desain bisa *custom* sesuka hati.",
    harga: 1500,
    satuan: "per lembar",
    gambar: "/images/undangan-umum.jpg",
    galeri: [
      "/undangan.jpg",
      "/desain-undangan-1.jpg",
      "/desain-undangan-2.jpg",
      "/desain-undangan-3.jpg",
    ],
    // 2. TAMBAHKAN VARIAN BAHAN & HARGA
    varian: [
      { nama: "Kertas Tipis (BC)", harga: 2500, model: "/undangan-bc.jpg" },
      {
        nama: "Kertas Sedang (Jasmine)",
        harga: 3500,
        galeriVarian: [
          "/yasin-soft-1.jpg",
          "/yasin-soft-2.jpg",
          "/yasin-soft-3.jpg",
        ],
      },
      {
        nama: "Kertas Tebal (Art Carton)",
        harga: 5000,
        galeriVarian: [
          "/yasin-soft-1.jpg",
          "/yasin-soft-2.jpg",
          "/yasin-soft-3.jpg",
        ],
      },
    ],
  },
  {
    id: 4,
    nama: "Kwitansi/Nota",
    deskripsi:
      "Cetak 1 sisi atau 2 sisi, sudah termasuk box. Minimal order 1 box.",
    harga: 35000,
    satuan: "per box (isi 100)",
    gambar: "/images/kwitansi-umum.jpeg",
    varian: [],
    galeri: [],
  },
  {
    id: 5,
    nama: "Brosur / Flyer",
    deskripsi: "Bahan Art Paper 150gr, cetak full color, cocok untuk promosi.",
    harga: 800,
    satuan: "per lembar (min. 500)",
    gambar: "/images/brosur-umum.jpeg",
    varian: [],
    galeri: [],
  },
  {
    id: 6,
    nama: "Cetak Buku",
    deskripsi: "Bahan Art Paper 150gr, cetak full color, cocok untuk promosi.",
    harga: 800,
    satuan: "per lembar (min. 500)",
    gambar: "/images/buku-umum.jpeg",
    varian: [],
    galeri: [],
  },
  {
    id: 7,
    nama: "Kalender",
    deskripsi: "Bahan Art Paper 150gr, cetak full color, cocok untuk promosi.",
    harga: 800,
    satuan: "per lembar (min. 500)",
    gambar: "/images/kalender-umum.jpeg",
    varian: [],
    galeri: [],
  },
];

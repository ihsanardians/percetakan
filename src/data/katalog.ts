// src/data/katalog.ts

export const katalogProduk = [
  {
    id: 1,
    nama: "Cetak Buku Yasin",
    deskripsi:
      "Bahan Flexi 280gr, hasil cetak tajam, cocok untuk luar ruangan.",
    harga: 25000,
    satuan: "per meter persegi",
    gambar: "https://placehold.co/600x400?text=Yasin",
    galeri: [],
    varian: [
      {
        nama: "Soft Cover",
        harga: 15000,
        galeriVarian: [
          "/yasin-soft-1.jpg",
          "/yasin-soft-2.jpg",
          "/yasin-soft-3.jpg",
        ],
      },
      {
        nama: "Hard Cover Biasa",
        harga: 25000,
        galeriVarian: [
          "/yasin-soft-1.jpg",
          "/yasin-soft-2.jpg",
          "/yasin-soft-3.jpg",
        ],
      },
      {
        nama: "Hard Cover Bludru",
        harga: 35000,
        galeriVarian: ["/yasin-soft-1.jpg", "/yasin-soft-2.jpg"],
      },
      {
        nama: "Hard Cover bgt",
        harga: 35000,
        galeriVarian: [
          "/yasin-soft-1.jpg",
          "/yasin-soft-2.jpg",
          "/yasin-soft-3.jpg",
          "/yasin-soft-3.jpg",
          "/yasin-soft-3.jpg",
        ],
      },
    ],
  },
  {
    id: 2,
    nama: "Cetak Spanduk / Banner",
    deskripsi:
      "Bahan Flexi 280gr, hasil cetak tajam, cocok untuk luar ruangan.",
    harga: 25000,
    satuan: "per meter persegi",
    gambar: "https://placehold.co/600x400?text=Spanduk",
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
    gambar: "https://placehold.co/600x400?text=Undangan",
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
    nama: "Kartu Nama Bisnis",
    deskripsi:
      "Cetak 1 sisi atau 2 sisi, sudah termasuk box. Minimal order 1 box.",
    harga: 35000,
    satuan: "per box (isi 100)",
    gambar: "https://placehold.co/600x400?text=Kartu+Nama",
    varian: [],
    galeri: [],
  },
  {
    id: 5,
    nama: "Brosur / Flyer (A4)",
    deskripsi: "Bahan Art Paper 150gr, cetak full color, cocok untuk promosi.",
    harga: 800,
    satuan: "per lembar (min. 500)",
    gambar: "https://placehold.co/600x400?text=Brosur",
    varian: [],
    galeri: [],
  },
  {
    id: 6,
    nama: "Brosur / Flyer (A3)",
    deskripsi: "Bahan Art Paper 150gr, cetak full color, cocok untuk promosi.",
    harga: 800,
    satuan: "per lembar (min. 500)",
    gambar: "https://placehold.co/600x400?text=Brosur",
    varian: [],
    galeri: [],
  },
];

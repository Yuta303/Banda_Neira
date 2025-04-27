"use client";

import Image from "next/image";
import styles from "@/styles/page/Culinary.module.css"; // Import CSS terpisah

export default function CulinaryPage() {
const culinaryData = [
  {
    title: "Benteng Belgica",
    description:
      "Benteng Belgica adalah salah satu peninggalan sejarah yang paling terkenal di Banda Neira, Maluku. Dibangun oleh Belanda pada abad ke-17, benteng ini berfungsi sebagai salah satu benteng pertahanan untuk melindungi kepentingan kolonial Belanda di wilayah tersebut. Terletak di tepi pantai, benteng ini menawarkan pemandangan yang menakjubkan dari laut Banda yang biru. Selain menjadi situs sejarah, Benteng Belgica juga menjadi simbol perlawanan terhadap penjajahan, di mana perjuangan rakyat Maluku melawan Belanda tercatat dengan jelas. Pengunjung dapat menjelajahi area benteng yang luas, melihat koleksi artefak sejarah, serta menikmati keindahan alam sekitar yang memikat. Benteng ini kini menjadi salah satu tujuan wisata utama yang menyimpan banyak cerita dan sejarah perjuangan bangsa Indonesia.",
    image: "/image/benteng.jpg",
  },
  {
    title: "Pulau Pisang",
    description:
      "Pulau Pisang, yang terletak di sebelah barat Banda Neira, adalah sebuah pulau kecil yang menawarkan pesona alam yang luar biasa. Pulau ini dikenal dengan pantainya yang masih asri, air laut yang jernih, serta terumbu karang yang menawan, menjadikannya destinasi yang ideal untuk snorkeling dan diving. Selain keindahan alam bawah lautnya, Pulau Pisang juga memiliki sejarah yang menarik, karena pulau ini pernah menjadi tempat pelarian bagi pejuang-pejuang Indonesia selama masa penjajahan Belanda. Kini, Pulau Pisang menjadi tempat yang tenang untuk beristirahat, menikmati suasana alam, serta menjelajahi keindahan alam yang jarang tersentuh. Pengunjung dapat menikmati keheningan dan kedamaian yang sulit ditemukan di tempat lain, sambil menikmati keindahan tropis yang memikat hati.",
    image: "/image/pulau_pisang.jpg",
  },
  {
    title: "Rumah Budaya Neira",
    description:
      "Rumah Budaya Neira adalah sebuah tempat yang memadukan seni dan budaya dari kepulauan Banda, serta menjadi pusat aktivitas budaya dan seni di Banda Neira. Tempat ini sering menjadi lokasi berbagai acara seni, pameran, dan pertunjukan budaya yang melibatkan masyarakat setempat dan pengunjung. Rumah Budaya Neira juga berfungsi sebagai wadah untuk melestarikan tradisi lokal, termasuk musik tradisional Banda, tarian, dan kerajinan tangan yang telah diwariskan turun temurun. Sebagai pusat kebudayaan, Rumah Budaya Neira menjadi tempat yang sangat penting untuk mempelajari lebih dalam tentang sejarah, seni, dan tradisi masyarakat Banda. Pengunjung dapat berinteraksi langsung dengan komunitas lokal, belajar tentang kebudayaan mereka, serta ikut serta dalam berbagai kegiatan yang diselenggarakan di tempat ini.",
    image: "/image/rumah_budaya_neira.jpg",
  },
  {
    title: "Gunung Api",
    description:
      "Gunung Api Banda adalah salah satu daya tarik alam paling menonjol di Banda Neira. Gunung berapi ini terletak di Pulau Gunung Api, yang merupakan bagian dari kelompok pulau Banda. Aktivitas vulkaniknya yang masih aktif menjadikan gunung ini sangat menarik untuk para petualang dan penggemar alam. Pendakian menuju puncaknya menawarkan pemandangan spektakuler dari kawasan sekitarnya, dengan laut Banda yang biru dan pulau-pulau kecil yang tersebar di sekitarnya. Selain itu, kawah yang ada di puncak gunung juga menyajikan pemandangan menakjubkan yang sulit ditemukan di tempat lain. Keindahan alam yang begitu dramatis, ditambah dengan keunikan vulkanik Gunung Api Banda, membuatnya menjadi tujuan yang populer untuk wisatawan yang ingin merasakan petualangan luar biasa serta menikmati keindahan alam yang luar biasa.",
    image: "/image/gunung_api.jpg",
  },
];


  return (
    <section className="min-h-screen bg-white p-8 mt-[60px]">
      <div className="max-w-6xl mx-auto space-y-24">
        <h1 className="text-4xl font-bold text-center text-black mb-12">
          Destinations Banda Neira
        </h1>
        {culinaryData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-12`}
          >
            {/* Gambar */}
            <div className="w-full md:w-2/5">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={350}
                className="rounded-lg object-cover mx-auto"
              />
            </div>

            {/* Teks */}
            <div className="w-full md:w-3/5">
              <h2 className="text-3xl font-bold text-black mb-4">
                {item.title}
              </h2>
              <p className="text-lg text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
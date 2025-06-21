"use client";

import Image from "next/image";
import styles from "@/styles/page/Culinary.module.css"; // Import CSS terpisah

export default function CulinaryPage() {
const culinaryData = [
  {
    title: "Tarian Cakalele",
    description:
      "Tarian Cakalele merupakan salah satu bentuk ekspresi budaya yang paling ikonik dari Maluku, khususnya di Banda Neira. Tarian ini biasanya dipertunjukkan dalam acara adat atau perayaan tertentu sebagai simbol keberanian dan semangat juang. Dengan gerakan yang dinamis dan penuh semangat, Cakalele menggambarkan perjuangan masyarakat Maluku dalam mempertahankan tanah air mereka dari penjajahan. Tarian ini biasanya diiringi oleh musik tradisional dengan menggunakan alat musik seperti tifa (gendang) dan gong. Sebagai bagian penting dari kebudayaan Banda Neira, Cakalele menjadi simbol rasa hormat kepada leluhur dan tradisi yang telah diwariskan turun temurun kepada generasi berikutnya.",
    image: "/image/Cakalele.jpg",
  },
  {
    title: "Balapan Belang",
    description:
      "Balapan Belang adalah salah satu tradisi unik di Banda Neira yang melibatkan perlombaan perahu tradisional yang dihias dengan berbagai pola warna-warni, atau dikenal sebagai 'belang'. Tradisi ini sering dilakukan dalam rangka merayakan hasil laut atau dalam acara adat tertentu. Balapan Belang bukan hanya sekadar lomba, tetapi juga merupakan simbol kerja keras dan kekompakan antar komunitas. Setiap perahu dihias dengan sangat indah menggunakan kain atau cat tradisional yang mencerminkan warna-warni kehidupan masyarakat pesisir Banda Neira. Tradisi ini sangat penting dalam menjaga keharmonisan sosial dan mengingatkan masyarakat akan pentingnya gotong royong dalam setiap aspek kehidupan mereka.",
    image: "/image/belang.webp",
  },
  {
    title: "Rumah Budaya Neira",
    description:
      "Rumah Budaya Neira adalah pusat pelestarian dan pengembangan seni budaya Banda Neira. Tempat ini menjadi wadah bagi berbagai kegiatan seni dan budaya yang melibatkan masyarakat setempat. Di Rumah Budaya Neira, pengunjung dapat menikmati pertunjukan musik tradisional, tari-tarian, serta pameran kerajinan tangan yang mencerminkan kearifan lokal. Selain itu, Rumah Budaya Neira juga menjadi tempat yang penting untuk mengajarkan nilai-nilai budaya kepada generasi muda, agar tradisi dan seni lokal tetap hidup dan berkembang. Rumah Budaya Neira mencerminkan semangat masyarakat Banda Neira dalam menjaga dan melestarikan warisan budaya mereka, sekaligus menyambut pengunjung untuk turut serta dalam berbagai kegiatan budaya yang diselenggarakan.",
    image: "/image/rumah_budaya_neira.jpg",
  },
  {
    title: "Ritual Adat Buka Kampung",
    description:
      "Ritual Adat Buka Kampung adalah salah satu upacara adat yang sangat penting dalam budaya masyarakat Banda Neira. Ritual ini dilakukan sebagai bentuk penghormatan kepada leluhur dan untuk memohon keselamatan serta kelimpahan hasil bumi dan laut. Dalam upacara ini, masyarakat akan berkumpul untuk melaksanakan berbagai rangkaian prosesi yang melibatkan doa, persembahan, dan tarian adat. Ritual Buka Kampung merupakan bagian dari tradisi yang mempererat hubungan sosial antara sesama warga dan menciptakan rasa kebersamaan. Upacara ini juga mencerminkan nilai-nilai spiritual yang sangat dijunjung tinggi oleh masyarakat Banda Neira, yaitu keharmonisan dengan alam dan sesama manusia.",
    image: "/image/ritual.jpg",
  },
];

  return (
    <section className="relative min-h-screen p-8 mt-[60px]">
      <video
        src="/video/banda-neira.mp4" // Pastikan file ini ada di public/videos
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
      />
      <div className="max-w-6xl mx-auto space-y-24">
        <h1 className="text-4xl font-bold text-center text-black mb-12">
          Culture Banda Neira
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
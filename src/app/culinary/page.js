"use client";

import Image from "next/image";
import styles from "@/styles/page/Culinary.module.css"; // Import CSS terpisah

export default function CulinaryPage() {
  const culinaryData = [
    {
      title: "Ikan Kuah Pala",
      description:
        "Ikan Kuah Pala adalah hidangan khas Maluku yang menghadirkan cita rasa laut berpadu dengan keharuman rempah-rempah lokal, terutama pala. Ikan segar seperti kakap atau kerapu direbus dalam kuah berbumbu pala, bawang merah, bawang putih, kunyit, dan daun kemangi, menghasilkan rasa gurih yang hangat dan aromatik. Hidangan ini biasanya disajikan bersama papeda atau nasi panas, menciptakan kombinasi rasa yang kaya dan sangat memanjakan lidah. Tradisi memasak Ikan Kuah Pala diwariskan turun-temurun, menjadi bagian penting dari budaya makan masyarakat pesisir Maluku.",
      image: "/culinary_image/Ikankuahpala.jpg",
    },
    {
      title: "Sate Ambal",
      description:
        "Sate Ambal berasal dari daerah Kebumen, Jawa Tengah, dan memiliki kekhasan yang membedakannya dari sate pada umumnya. Daging ayam dipotong kecil dan dimarinasi dengan campuran bumbu tempe fermentasi, bawang merah, bawang putih, ketumbar, serta gula merah. Setelah dibakar, sate ini disajikan dengan sambal tempe yang kental dan sedikit manis, menciptakan cita rasa unik yang gurih, manis, dan pedas secara bersamaan. Sate Ambal bukan sekadar makanan, tetapi juga warisan budaya kuliner yang memperkaya khazanah kuliner Indonesia.",
      image: "/culinary_image/sate_ambal.webp",
    },
    {
      title: "Ulang-ulang",
      description:
        "Ulang-ulang adalah masakan tradisional asal Maluku yang menggunakan daging ayam atau ikan sebagai bahan utama, dimasak dengan bumbu rempah lengkap seperti bawang merah, bawang putih, kunyit, jahe, lengkuas, dan kemiri. Yang membuat Ulang-ulang istimewa adalah proses memasaknya yang lambat, memungkinkan bumbu meresap sempurna ke dalam daging hingga menghasilkan rasa gurih, pedas, dan aromatik yang kuat. Biasanya disajikan pada acara adat atau perayaan penting, Ulang-ulang merepresentasikan kekayaan rempah-rempah Nusantara dalam satu sajian istimewa.",
      image: "/culinary_image/ulang-ulang.jpg",
    },
    {
      title: "Nasi Kelapa",
      description:
        "Nasi Kelapa adalah hidangan khas dari beberapa daerah di Indonesia bagian timur seperti Maluku dan Nusa Tenggara. Nasi ini dimasak dengan santan kental, daun pandan, dan garam, menciptakan rasa nasi yang gurih, harum, dan sedikit manis alami dari kelapa. Biasanya, Nasi Kelapa disajikan bersama lauk seperti ikan bakar, sambal terasi, dan lalapan segar. Aroma santan yang kuat berpadu dengan tekstur nasi yang pulen membuat Nasi Kelapa menjadi sajian sederhana namun sangat kaya rasa, menggambarkan kesederhanaan hidup masyarakat pesisir yang dekat dengan alam.",
      image: "/culinary_image/nasi_kelapa.webp",
    },
  ];

  return (
    <section className="min-h-screen bg-white p-8 mt-[60px]">
      <div className="max-w-6xl mx-auto space-y-24">
        <h1 className="text-4xl font-bold text-center text-black mb-12">
          Culinary Banda Neira
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

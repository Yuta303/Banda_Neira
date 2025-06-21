"use client";

import Image from "next/image";
import { useState } from "react";

export default function CulinaryPage() {
  const culinaryItems = [
    {
      title: "Ikan Kuah Pala",
      description:
        "Ikan Kuah Pala adalah hidangan khas Banda Neira yang menggambarkan kekayaan rempah-rempah lokal. Menggunakan ikan segar seperti kakap atau kerapu, masakan ini dimasak dengan kuah berbumbu pala, kunyit, kemangi, dan rempah lainnya yang memberikan cita rasa khas yang gurih dan aromatik. Hidangan ini biasanya disajikan bersama papeda atau nasi panas. Keunikan rasa dan aroma membuatnya tidak hanya menggugah selera tetapi juga memberikan pengalaman budaya tersendiri. Ikan Kuah Pala sering dihidangkan dalam acara keluarga atau perayaan adat, menjadi warisan kuliner yang turun-temurun dan dibanggakan masyarakat Banda.",
      image: "/culinary_image/Ikankuahpala.jpg",
    },
    {
      title: "Sate Ambal",
      description:
        "Sate Ambal adalah variasi sate yang khas dari daerah Kebumen, namun kini telah populer hingga ke kawasan Banda Neira karena cita rasanya yang unik. Terbuat dari potongan ayam yang dimarinasi dengan bumbu tempe fermentasi, bawang, dan gula merah, sate ini dibakar hingga kecoklatan dan disajikan dengan sambal tempe yang manis-pedas. Tekstur daging yang empuk dan rasa sambalnya yang khas memberikan sensasi berbeda dibanding sate pada umumnya. Sate ini biasanya disantap bersama lontong dan menjadi salah satu favorit wisatawan yang ingin mencoba kuliner khas dengan keunikan lokal dan unsur sejarah dalam penyajiannya.",
      image: "/culinary_image/sate_ambal.webp",
    },
    {
      title: "Ulang-ulang",
      description:
        "Ulang-ulang adalah hidangan tradisional khas Maluku yang telah menjadi bagian penting dari identitas kuliner masyarakat Banda Neira. Menggunakan bahan dasar ayam kampung atau ikan segar, masakan ini dimasak perlahan dengan campuran rempah lengkap seperti jahe, kunyit, lengkuas, dan kemiri. Proses memasaknya yang lambat membuat semua bumbu meresap sempurna ke dalam daging, menghasilkan rasa yang kuat dan khas. Ulang-ulang biasanya disajikan dalam perayaan adat atau acara keluarga besar. Rasa gurih pedasnya yang dalam mencerminkan hubungan erat masyarakat dengan alam dan warisan budaya leluhur.",
      image: "/culinary_image/ulang-ulang.jpg",
    },
    {
      title: "Nasi Kelapa",
      description:
        "Nasi Kelapa adalah sajian sederhana namun kaya rasa yang banyak ditemukan di wilayah timur Indonesia, termasuk Banda Neira. Nasi ini dimasak menggunakan santan kental, daun pandan, dan sedikit garam, sehingga menghasilkan aroma harum dan rasa gurih yang khas. Biasanya disajikan dengan ikan bakar, sambal terasi, dan sayur rebus, menciptakan keseimbangan rasa yang memuaskan. Nasi Kelapa bukan hanya makanan pokok, tetapi juga simbol dari kearifan lokal dalam mengolah bahan sederhana menjadi hidangan yang lezat. Makanan ini sangat cocok dinikmati sambil menyaksikan pemandangan laut yang tenang di Banda.",
      image: "/culinary_image/nasi_kelapa.webp",
    },
    {
      title: "Papeda",
      description:
        "Papeda adalah makanan pokok masyarakat Maluku dan Papua yang terbuat dari sagu. Di Banda Neira, papeda sering dijadikan teman makan utama dengan berbagai lauk berbasis ikan, seperti Ikan Kuah Kuning atau Ikan Bakar. Teksturnya yang lengket dan kenyal menyerupai lem bening mungkin terasa asing bagi sebagian orang, namun bagi masyarakat timur Indonesia, papeda adalah simbol kebanggaan budaya. Kaya akan karbohidrat dan bebas gluten, papeda juga digemari karena manfaat kesehatannya. Proses menyantap papeda menggunakan sumpit bambu tradisional turut memperkaya pengalaman kuliner yang otentik.",
      image: "/culinary_image/papeda.webp",
    },
    {
      title: "Ikan Bakar Colo-Colo",
      description:
        "Ikan Bakar Colo-Colo adalah sajian populer yang tidak boleh dilewatkan saat berada di Banda Neira. Ikan segar seperti baronang atau kakap dibakar dengan arang hingga kulitnya renyah dan dagingnya juicy. Yang membuatnya spesial adalah sambal 'colo-colo', yaitu campuran cabai rawit, bawang merah, tomat, jeruk nipis, dan kecap yang disiram di atas ikan bakar. Rasa pedas, asam, manis, dan segar berpadu sempurna, menciptakan sensasi rasa yang luar biasa. Hidangan ini biasanya disantap di tepi pantai atau saat berkumpul bersama keluarga, mempererat momen dengan cita rasa khas Banda.",
      image: "/culinary_image/ikan colo-colo.webp",
    },
    {
      title: "Sayur Lilin",
      description:
        "Sayur Lilin merupakan masakan khas Banda Neira yang jarang diketahui wisatawan. Dibuat dari batang pisang muda yang direbus dan dimasak dengan santan serta bumbu sederhana, sayur ini menyimpan cita rasa yang lembut dan gurih. Nama 'lilin' merujuk pada tekstur lembut batang pisang yang menyerupai lilin saat matang. Makanan ini sangat cocok disantap bersama nasi kelapa dan ikan asap, menciptakan kombinasi tradisional yang mengenyangkan. Sayur Lilin juga menggambarkan kearifan lokal dalam memanfaatkan bahan dari alam sekitar tanpa menyia-nyiakan apapun.",
      image: "/culinary_image/sayur_lilin.jpg",
    },
    {
      title: "Ikan Asar",
      description:
        "Ikan Asar adalah ikan asap khas Banda Neira yang diawetkan secara tradisional dengan cara pengasapan di atas bara api dari kayu pilihan. Proses ini tidak hanya mempertahankan rasa segar ikan, tetapi juga memberikan aroma asap yang khas dan cita rasa yang dalam. Ikan asar biasa disantap bersama sambal dabu-dabu atau nasi kelapa. Kandungan gizi ikan tetap terjaga dan tahan lama, menjadikannya pilihan ideal sebagai bekal dalam pelayaran atau dibawa pulang sebagai oleh-oleh. Ikan Asar merupakan contoh sempurna dari sinergi antara teknik tradisional dan rasa autentik lokal.",
      image: "/culinary_image/ikan_asar.jpg",
    },
    {
      title: "Kue Bagea",
      description:
        "Bagea adalah kue kering khas Maluku yang juga banyak ditemukan di Banda Neira. Terbuat dari sagu, kacang kenari, dan rempah seperti kayu manis dan cengkeh, kue ini memiliki tekstur keras di luar namun lumer di mulut. Bagea sering disajikan sebagai camilan pendamping teh sore atau sebagai oleh-oleh khas daerah timur. Rasanya yang khas dan aroma rempah-rempahnya menghadirkan nostalgia rasa dari masa lalu. Meskipun tampak sederhana, bagea adalah simbol dari warisan budaya kuliner dan kearifan dalam penggunaan bahan pangan lokal.",
      image: "/culinary_image/kue_bagea.png",
    },
    {
      title: "Kopi Rempah Banda",
      description:
        "Kopi Rempah Banda bukan hanya sekadar minuman, tetapi sebuah warisan sejarah. Diracik dengan bubuk kopi hitam yang dicampur dengan cengkeh, kayu manis, kapulaga, dan pala – rempah-rempah yang pernah membuat Banda menjadi pusat perhatian dunia. Rasanya kuat, hangat, dan meninggalkan aroma eksotis di tenggorokan. Minuman ini banyak disajikan di kedai-kedai kopi tua di Banda Neira, biasanya ditemani pisang goreng atau bagea. Menikmati secangkir kopi rempah sambil menatap Gunung Api Banda adalah pengalaman yang tak terlupakan bagi setiap pengunjung.",
      image: "/culinary_image/kopi_rempah.jpg",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDescription = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="min-h-screen bg-white p-8 mt-[64px]">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-black mb-12">
        Kuliner Khas Banda Neira
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {culinaryItems.slice(0, 10).map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="object-cover w-full h-56"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-black mb-2">
                  {item.title}
                </h3>

                {isOpen && (
                  <p className="text-gray-700 text-sm mb-3">
                    {item.description}
                  </p>
                )}

                <button
                  onClick={() => toggleDescription(index)}
                  className="mt-auto text-orange-600 hover:underline text-sm"
                >
                  {isOpen ? "Tutup Deskripsi" : "Lihat Deskripsi"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
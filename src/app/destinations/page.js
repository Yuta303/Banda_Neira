"use client";

import Image from "next/image";
import { useState } from "react";

export default function DestinationPage() {
  const destinations = [
    {
      title: "Benteng Belgica",
      description:
        "Benteng Belgica adalah salah satu peninggalan sejarah paling terkenal di Banda Neira. Dibangun pada abad ke-17 oleh Belanda sebagai pusat pertahanan, benteng ini menjadi saksi bisu berbagai peristiwa penting, termasuk perlawanan rakyat Maluku terhadap penjajahan. Dengan bentuk bangunan segi lima yang unik, benteng ini terletak di atas bukit dan menawarkan panorama spektakuler ke arah laut Banda dan pulau-pulau sekitarnya. Di dalamnya terdapat lorong-lorong batu, ruang tahanan, serta meriam kuno yang masih terjaga. Pengunjung dapat menyusuri area benteng sambil membayangkan kehidupan masa lalu yang penuh dinamika kolonial.",
      image: "/image/benteng.jpg",
    },
    {
      title: "Pulau Pisang",
      description:
        "Pulau Pisang adalah permata tersembunyi di barat Banda Neira. Pantainya yang tenang dengan pasir putih lembut dan air laut yang jernih menjadikannya tempat sempurna untuk berenang dan snorkeling. Pulau ini juga memiliki kekayaan biota laut seperti karang warna-warni dan ikan tropis. Selain keindahan alam, Pulau Pisang memiliki sejarah sebagai tempat perlindungan bagi pejuang kemerdekaan, yang menambah nilai historisnya. Kini, pulau ini sering dijadikan lokasi camping atau berlibur oleh wisatawan yang mencari kedamaian dan pengalaman yang otentik.",
      image: "/image/pulau_pisang.jpg",
    },
    {
      title: "Rumah Budaya Neira",
      description:
        "Rumah Budaya Neira adalah pusat kebudayaan di Banda Neira yang memperkenalkan seni, musik, dan sejarah lokal kepada pengunjung. Bangunan ini menjadi tempat berbagai pertunjukan seni tradisional seperti tarian dan musik khas Banda. Di dalamnya terdapat koleksi artefak sejarah, foto-foto lama, dan dokumentasi perjuangan masyarakat Banda. Pengunjung juga bisa mengikuti lokakarya atau acara budaya yang diselenggarakan secara rutin. Rumah ini menjadi simbol upaya pelestarian warisan budaya dan edukasi generasi muda tentang identitas mereka.",
      image: "/image/rumah_budaya_neira.jpg",
    },
    {
      title: "Gunung Api Banda",
      description:
        "Gunung Api Banda adalah gunung berapi aktif yang menjadi ikon geografis Banda Neira. Gunung ini menarik bagi para pendaki dan pecinta alam yang ingin menikmati panorama spektakuler dari puncaknya. Pendakian cukup menantang namun sebanding dengan keindahan yang ditawarkan, termasuk pemandangan laut Banda dari ketinggian. Kawahnya mengeluarkan asap tipis yang menjadi pengingat bahwa gunung ini masih aktif. Keindahan alam dan tantangan fisiknya menjadikan Gunung Api sebagai destinasi wajib bagi wisatawan petualang.",
      image: "/image/gunung_api.jpg",
    },
    {
      title: "Desa Lonthoir",
      description:
        "Desa Lonthoir merupakan desa tua yang terletak di Pulau Banda Besar. Desa ini terkenal dengan perkebunan pala yang luas dan rumah-rumah kolonial yang masih terjaga keasliannya. Jalan-jalan kecil yang dikelilingi pohon pala dan cengkeh memberikan suasana damai dan alami. Masyarakat desa masih menjaga tradisi mereka dan menyambut wisatawan dengan keramahan khas Maluku. Mengunjungi Lonthoir adalah perjalanan ke masa lalu yang penuh ketenangan dan kesederhanaan.",
      image: "/image/lonthoir.jpg",
    },
    {
      title: "Istana Mini",
      description:
        "Istana Mini adalah bangunan bersejarah yang dulunya digunakan sebagai rumah residen Belanda. Bangunan bergaya kolonial ini memiliki taman yang rapi dan ruang tamu yang elegan. Istana ini mencerminkan kemegahan kolonial dan kini difungsikan sebagai museum kecil yang menyimpan berbagai artefak dan foto sejarah. Pengunjung dapat belajar tentang masa pemerintahan Belanda dan perubahan sosial yang terjadi di Banda Neira dari masa ke masa.",
      image: "/image/istanah_mini.jpg",
    },
    {
      title: "Pelabuhan Banda",
      description:
        "Pelabuhan utama Banda Neira adalah titik awal dan akhir banyak perjalanan. Aktivitas di pelabuhan ini menggambarkan dinamika kehidupan masyarakat pesisir, mulai dari nelayan hingga kapal-kapal wisata yang datang dan pergi. Pemandangan matahari terbit dan terbenam dari pelabuhan sangat indah dan menjadi favorit fotografer. Di sekitar pelabuhan terdapat pasar lokal dan warung makan yang menyajikan makanan khas Banda.",
      image: "/image/pelabuhan.jpg",
    },
    {
      title: "Masjid Raya Banda",
      description:
        "Masjid Raya Banda adalah pusat kegiatan keagamaan utama di Banda Neira. Masjid ini memiliki arsitektur khas lokal yang dipadukan dengan sentuhan kolonial. Bangunan yang megah dengan kubah besar dan interior sederhana ini menjadi tempat berkumpulnya masyarakat Banda untuk salat berjamaah dan acara keagamaan lainnya. Masjid ini juga menjadi simbol keharmonisan antar umat beragama di Banda Neira.",
      image: "/image/masjid.jpg",
    },
    {
      title: "Sumur Tua Neira",
      description:
        "Sumur Tua adalah situs bersejarah yang dulunya menjadi sumber air utama bagi warga Banda Neira. Sumur ini dipercaya telah ada sejak masa penjajahan Portugis dan digunakan juga oleh Belanda. Terletak di tengah pemukiman warga, sumur ini dikelilingi oleh cerita rakyat dan mitos lokal. Kini sumur tersebut masih digunakan dan menjadi salah satu simbol keberlanjutan kehidupan masyarakat Banda sejak ratusan tahun silam.",
      image: "/image/sumur_tua.jpeg",
    },
    {
      title: "Perkebunan Pala",
      description:
        "Perkebunan pala di Banda Neira adalah salah satu yang tertua di dunia. Pala merupakan komoditas utama yang menjadikan Banda terkenal dan menjadi incaran bangsa kolonial. Wisatawan dapat mengikuti tur kebun pala, melihat proses pengolahan pala secara tradisional, serta mencicipi hasil olahan seperti manisan dan minyak pala. Perkebunan ini juga menyimpan sejarah perdagangan global yang melibatkan Banda dalam pusaran geopolitik dunia.",
      image: "/image/perkebunan.jpg",
    },
    {
      title: "Pulau Nailaka",
      description:
        "Pulau Nailaka adalah pulau kecil tak berpenghuni yang menawarkan pengalaman eksotis. Pasir putih yang halus dan laut biru kehijauan mengelilingi pulau ini, menciptakan suasana sempurna untuk berfoto, berjemur, atau sekadar bersantai. Meski kecil, pulau ini memiliki nilai penting dalam sejarah karena menjadi titik pertemuan kapal-kapal rempah. Ideal untuk pengunjung yang ingin merasakan kedamaian alami yang total.",
      image: "/image/nailaka.jpg",
    },
    {
      title: "Museum Neira",
      description:
        "Museum Neira menyimpan berbagai koleksi penting yang berkaitan dengan sejarah Banda, rempah-rempah, dan penjajahan. Dari peta kuno, lukisan, hingga peralatan sehari-hari masyarakat dahulu, semuanya ditata rapi untuk dinikmati pengunjung. Museum ini juga menyajikan narasi tentang tokoh-tokoh penting Banda seperti Des Alwi dan Hatta. Sebagai pusat edukasi, museum ini memperkaya pengetahuan tentang peran Banda dalam sejarah Indonesia dan dunia.",
      image: "/image/museumm.jpg",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDescription = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="min-h-screen bg-white p-8 mt-[64px]">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-black mb-12">
        Destinasi di Banda Neira
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((item, index) => {
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
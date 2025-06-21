import Image from "next/image";
import Link from "next/link";

const detailData = {
  "pulau-banda-neira": {
    title: "Pulau Banda Neira",
    description: `Pulau Banda Neira adalah permata tersembunyi di Kepulauan Maluku yang sarat dengan sejarah dan pesona alam. 
  Dulunya menjadi pusat perdagangan pala dunia, Banda Neira menyimpan berbagai bangunan kolonial peninggalan Belanda seperti 
  Benteng Belgica, rumah pengasingan Bung Hatta, dan museum-museum kecil yang menyimpan kisah perjuangan masa lalu. 
  Selain nilai sejarahnya yang tinggi, pulau ini menawarkan pemandangan alam luar biasa mulai dari laut biru jernih, 
  pantai berpasir putih, hingga gunung api yang menjulang megah di seberangnya. Dengan suasana yang tenang dan masyarakat yang ramah, 
  Banda Neira adalah tempat ideal untuk melepas penat dan merasakan kedamaian yang sulit ditemukan di tempat lain.`,
    image: "/image/bandaneira.webp",
  },
  "pantai-pasir-putih": {
    title: "Pantai Pasir Putih",
    description: `Pantai Pasir Putih di Banda Neira menawarkan panorama alam yang menakjubkan dengan pasir putih halus 
  dan air laut bergradasi biru kehijauan yang menyejukkan mata. Pantai ini sangat cocok untuk berjemur, berenang, atau sekadar duduk santai menikmati angin laut. 
  Di pagi hari, kamu bisa menyaksikan matahari terbit perlahan dari balik cakrawala, sementara di sore hari, cahaya senja menyelimuti laut dengan warna keemasan. 
  Suasana pantai yang masih alami dan belum ramai wisatawan menjadikannya tempat sempurna untuk mencari ketenangan dan mengabadikan momen liburan yang tak terlupakan.`,
    image: "/image/pantai.webp",
  },
  "keindahan-laut-banda": {
    title: "Keindahan Laut Banda",
    description: `Laut Banda dikenal sebagai salah satu surga bawah laut terbaik di Indonesia, bahkan dunia. 
  Dengan visibilitas air yang sangat jernih dan terumbu karang yang masih sangat sehat, wilayah ini menjadi favorit para penyelam 
  dan pecinta snorkeling dari berbagai belahan dunia. Kamu bisa menyaksikan berbagai spesies ikan tropis berwarna-warni, 
  penyu, hiu karang, dan kadang-kadang lumba-lumba yang melintas. Laut Banda juga menawarkan dinding-dinding laut vertikal 
  yang dramatis dan situs-situs selam yang penuh keajaiban. Bahkan bagi yang tidak menyelam, cukup dengan menyewa perahu kaca 
  atau snorkeling di sekitar dermaga saja sudah bisa menyuguhkan pengalaman luar biasa.`,
    image: "/image/laut.jpg",
  },
  "gunung-api-banda": {
    title: "Gunung Api Banda",
    description: `Gunung Api Banda berdiri megah di seberang Pulau Banda Neira, dan merupakan simbol kekuatan alam sekaligus daya tarik bagi para petualang. 
  Meski merupakan gunung berapi aktif, pendakiannya relatif singkat namun menantang. Jalur menuju puncak dipenuhi batuan lava yang tajam dan tanaman khas pegunungan, 
  namun semua rasa lelah akan terbayar lunas begitu tiba di puncaknya. Dari atas, kamu bisa melihat panorama seluruh kepulauan Banda dengan laut biru yang luas, 
  deretan pulau kecil, dan desa-desa tradisional yang tampak mungil dari kejauhan. Gunung ini juga menjadi lokasi sempurna untuk menyaksikan matahari terbit atau terbenam 
  yang membalut langit dan laut dengan cahaya dramatis. Sebuah pengalaman spiritual dan visual yang tidak akan terlupakan.`,
    image: "/image/gunung.jpg",
  },
};  

export default function DetailPage({ params }) {
  const data = detailData[params.slug];

  if (!data) {
    return (
      <>
        <main className="p-6 text-red-500">Data tidak ditemukan</main>
      </>
    );
  }

  return (
    <>
      <main className="pt-24 p-6 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-center text-black mb-12">
          {data.title}
        </h1>

        <div className="relative w-full max-w-2xl h-[300px] mx-auto mb-6">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover rounded-lg"
            unoptimized
          />
        </div>

        <p className="text-lg text-gray-800 mb-6">{data.description}</p>

        <Link
          href="/"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded text-sm mt-6"
        >
          ← Kembali ke Beranda
        </Link>
      </main>
    </>
  );
}
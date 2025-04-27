"use client";

import Image from "next/image";

export default function Home() {
  const handleScroll = () => {
    const section = document.getElementById("section-tengah");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center relative"
        style={{ backgroundImage: "url('/image/bg.jpg')" }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Jangan mati sebelum Ke Banda Neira
          </h1>
          <p className="text-xl mb-6"></p>
          <button
            onClick={handleScroll}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md text-lg transition"
          >
            Cari tahu sekarang
          </button>
        </div>
      </section>

      {/* Section Tengah */}
      <section
        id="section-tengah"
        className="min-h-screen bg-white p-8 space-y-16"
      >
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <Image
              src="/image/bandaneira.webp"
              alt="Pulau Banda Neira"
              width={400}
              height={300}
              className="rounded-lg mx-auto"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-black mb-4">Pulau Banda Neira</h2>
            <p className="text-lg text-gray-700">
              Pulau Banda Neira adalah permata tersembunyi di Kepulauan Banda
              yang penuh sejarah dan keindahan alam. Pulau ini pernah menjadi
              pusat perdagangan rempah-rempah dunia dan menyimpan banyak
              peninggalan sejarah seperti benteng kolonial, rumah-rumah tua
              Belanda, serta museum yang memukau. Tak hanya kaya budaya, Banda
              Neira juga menawarkan pesona alam luar biasa: laut biru jernih,
              terumbu karang warna-warni, dan pemandangan Gunung Api Banda yang
              megah dari kejauhan. Bagi pecinta petualangan, Banda Neira adalah
              destinasi sempurna untuk menikmati snorkeling, diving, hingga
              trekking santai sambil menikmati suasana damai yang sulit
              ditemukan di tempat lain.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl font-bold text-black mb-4">Pantai Pasir Putih</h2>
            <p className="text-lg text-gray-700">
              Pantai Pasir Putih di Banda Neira menawarkan pengalaman liburan
              yang benar-benar menenangkan. Hamparan pasir putih halus yang
              membentang luas dipadukan dengan air laut yang sebening kristal
              menciptakan pemandangan menakjubkan layaknya surga tersembunyi. Di
              sini, Anda bisa berjalan kaki di sepanjang pantai sambil menikmati
              angin sepoi-sepoi, berjemur di bawah sinar matahari tropis, atau
              berenang di air laut yang hangat dan bersih. Suasana pantai yang
              masih alami dan jauh dari keramaian kota membuat tempat ini
              sempurna untuk relaksasi total, meditasi, atau sekadar menikmati
              waktu santai bersama keluarga dan sahabat.
            </p>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <Image
              src="/image/pantai.webp"
              alt="Pantai Pasir Putih"
              width={400}
              height={300}
              className="rounded-lg mx-auto"
            />
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <Image
              src="/image/laut.jpg"
              alt="Keindahan Laut Banda"
              width={400}
              height={300}
              className="rounded-lg mx-auto"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-black mb-4">Keindahan Laut Banda</h2>
            <p className="text-lg text-gray-700">
              Laut Banda merupakan salah satu surga tersembunyi bagi para
              penyelam dari seluruh dunia. Terumbu karang di Laut Banda terkenal
              sangat sehat, beragam, dan penuh warna, menjadi rumah bagi
              berbagai jenis ikan tropis, penyu, dan makhluk laut eksotis
              lainnya. Airnya yang jernih memungkinkan Anda menikmati
              pemandangan bawah laut dengan visibilitas yang luar biasa hingga
              puluhan meter. Selain itu, Laut Banda juga menawarkan pengalaman
              diving yang tidak biasa, mulai dari spot wall diving yang curam
              hingga eksplorasi bangkai kapal tua yang sarat sejarah. Menyelam
              di Laut Banda adalah sebuah pengalaman sekali seumur hidup yang
              tidak akan terlupakan.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
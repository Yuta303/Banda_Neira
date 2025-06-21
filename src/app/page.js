"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative h-screen w-screen overflow-hidden">
        <video
          src="/video/banda-neira.mp4"
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />
      </section>

      <section
        id="section-tengah"
        className="min-h-screen bg-white py-8 pt-24 space-y-12"
      >
        <h2 className="text-3xl font-bold text-center text-black mb-6">
          Most Popular in Banda Neira
        </h2>

        <div className="px-4">
          <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:overflow-visible">
            {[
              {
                title: "Pulau Banda Neira",
                image: "/image/bandaneira.webp",
                slug: "pulau-banda-neira",
              },
              {
                title: "Pantai Pasir Putih",
                image: "/image/pantai.webp",
                slug: "pantai-pasir-putih",
              },
              {
                title: "Keindahan Laut Banda",
                image: "/image/laut.jpg",
                slug: "keindahan-laut-banda",
              },
              {
                title: "Gunung Api Banda",
                image: "/image/gunung_api.jpg",
                slug: "gunung-api-banda",
              },
            ].map((place, index) => (
              <div
                key={index}
                className="flex-none md:flex-1 min-w-[70%] sm:min-w-[300px] md:min-w-0 bg-white shadow-md rounded-xl overflow-hidden"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={place.image}
                    alt={place.title}
                    fill
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                </div>
                <div className="p-4 flex flex-col">
                  <h3 className="text-lg font-semibold text-black mb-3">
                    {place.title}
                  </h3>
                  <Link
                    href={`/detail/${place.slug}`}
                    className="mt-auto bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded text-sm text-center"
                  >
                    Detail
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
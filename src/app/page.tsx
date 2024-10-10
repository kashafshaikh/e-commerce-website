"use client";

import Image from "next/image";
import Deals from "./deals/page";
import Arrival from "./arrivals/page";
import Reviews from "./reviews/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <main>
      <section className="mx-[20px] md:mx-[90px] font-sans">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full mt-28 h-auto md:h-[750px] gap-6">

          {/* Left Image */}
          <div className="hidden md:block">
            <Image
              src="/left-image.jpg"
              alt="girl"
              width={600}
              height={700}
              className="rounded-xl w-full h-auto"
            />
          </div>

          {/* Sale Text Section */}
          <div className="flex flex-col items-center">
            <div className="w-full h-[200px] flex justify-center items-center">
              <Image
                src="/top-image.jpg"
                alt="top-img"
                width={570}
                height={180} 
                className="object-cover rounded-xl mx-8 w-full"
              />
            </div>

            <div className="text-center">
              <h2 className="text-gray-700 font-semibold text-[50px] md:text-[100px] leading-none mb-0 mt-2 tracking-wider">
                ULTIMATE
                <br />
                <span className="outlined-text text-[70px] md:text-[130px] tracking-wider">
                  SALE
                </span>
              </h2>
            </div>

            <p className="text-gray-700 text-center text-[18px] md:text-[24px] font-semibold mb-4">
              NEW COLLECTION
            </p>

            <button className="bg-gray-800 text-white px-6 py-2 md:px-10 md:py-1 mt-1 mb-8 rounded-xl">
              <p className="text-center text-base md:text-lg">SHOP NOW</p>
            </button>

            <Image
              src="/bottom-image.png"
              alt="bottom-img"
              width={570}
              height={180} 
              className="object-cover rounded-xl bg-red-300 w-full"
            />
          </div>

          {/* Right Image */}
          <div className="hidden md:block">
            <Image
              src="/right-image.jpg"
              alt="girl"
              width={600}
              height={800}
              className="rounded-xl w-full"
            />
          </div>
        </div>

        {/* Brands List */}
        <ul className="font-bold tracking-wider list-none flex justify-between mt-12 md:mt-32 space-x-2 md:space-x-0 flex-wrap ">
          <li className="text-[20px] md:text-[28px] font-sans">CHANEL</li>
          <li className="text-[14px] md:text-[20px]">LOUIS VUITION</li>
          <li className="font-serif font-extrabold text-[20px] md:text-[28px]">PRADA</li>
          <li className="font-sans text-[20px] md:text-[28px] font-semibold">Calvin Klein</li>
          <li className="tracking-widest font-bold text-[20px] md:text-[28px]">DENIM</li>
          <li className="text-[20px] md:text-[28px] font-sans">GUCCI</li>
        </ul>  
      </section>
      <div className="pb-20"></div>
      <Arrival />
      <Deals />
      <Reviews />
      <Contact />
    </main>
  );
}

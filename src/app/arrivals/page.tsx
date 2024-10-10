import { RiStarSLine } from "react-icons/ri";
import Image from "next/image";

export default function Arrival() {
  return (
    <main>
      <section>
        <div className="bg-slate-600 py-2 grid grid-cols-1 md:grid-cols-2 px-8 items-center lg:gap-8 lg:h-[400px]">
          <div>
            <h2 className="text-white text-[40px] md:text-[80px] ml-4 md:ml-28 py-4 text-center">
              Spring into Style with Our New Arrivals!
            </h2>
          </div>
          <div className="relative h-0 pb-[56.25%] flex justify-center items-center">
            <iframe
              className="absolute top-0 left-0 w-full h-full lg:h-[400px]"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Xe3evWq5tas?si=kIuYfUF4si8ruBxl"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6 mx-4 md:mx-16">
          {/* First Item */}
          <div className="shadow-xl flex flex-col p-6 md:p-10">
            <div className="flex items-center justify-center">
              <Image
                src="/purple-hoddie.jpg"
                alt="purple-hoddie"
                width={400}
                height={400}
                className="object-cover w-full"
              />
            </div>
            <div className="flex items-center mt-4">
              <h3 className="text-[22px] md:text-[28px] text-gray-800 font-sans mb-0">
                Purple Hoddie
              </h3>
              <div className="flex ml-auto text-yellow-600">
                {[...Array(5)].map((_, index) => (
                  <RiStarSLine key={index} size={25} />
                ))}
              </div>
            </div>
            <p className="text-gray-600 text-[16px] md:text-[18px] font-sans font-semibold mt-1">
              Al Karam
            </p>
            <p className="text-[18px] md:text-[20px] text-gray-700 font-sans font-semibold mb-0">
              (4.1k) Customer Reviews
            </p>
            <p className="font-semibold text-[24px] md:text-[28px] text-gray-800 font-sans">
              $95.50
              <span className="text-[16px] md:text-[20px] text-red-600 font-sans font-semibold float-right mt-2">
                Almost Sold Out
              </span>
            </p>
          </div>

          {/* Second Item */}
          <div className="shadow-xl flex flex-col p-6 md:p-10">
            <div className="flex items-center justify-center">
              <Image
                src="/green-shirt.jpg"
                alt="Green-TShirt"
                width={400}
                height={400}
                className="object-cover w-full"
              />
            </div>
            <div className="flex items-center mt-4">
              <h3 className="text-[22px] md:text-[28px] text-gray-800 font-sans mb-0">
                Green TShirt
              </h3>
              <div className="flex ml-auto text-yellow-600">
                {[...Array(5)].map((_, index) => (
                  <RiStarSLine key={index} size={25} />
                ))}
              </div>
            </div>
            <p className="text-gray-600 text-[16px] md:text-[18px] font-sans font-semibold mt-1">
              Al Karam
            </p>
            <p className="text-[18px] md:text-[20px] text-gray-700 font-sans font-semibold mb-0">
              (4.1k) Customer Reviews
            </p>
            <p className="font-semibold text-[24px] md:text-[28px] text-gray-800 font-sans">
              $95.50
              <span className="text-[16px] md:text-[20px] text-red-600 font-sans font-semibold float-right mt-2">
                Almost Sold Out
              </span>
            </p>
          </div>

          {/* Third Item */}
          <div className="shadow-xl flex flex-col p-6 md:p-10">
            <div className="flex items-center justify-center">
              <Image
                src="/navyblue-jean.png"
                alt="Navyblue-jean"
                width={400}
                height={400}
                className="object-cover w-full"
              />
            </div>
            <div className="flex items-center mt-4">
              <h3 className="text-[22px] md:text-[28px] text-gray-800 font-sans mb-0">
                NavyBlue Jean
              </h3>
              <div className="flex ml-auto text-yellow-600">
                {[...Array(5)].map((_, index) => (
                  <RiStarSLine key={index} size={25} />
                ))}
              </div>
            </div>
            <p className="text-gray-600 text-[16px] md:text-[18px] font-sans font-semibold mt-1">
              Al Karam
            </p>
            <p className="text-[18px] md:text-[20px] text-gray-700 font-sans font-semibold mb-0">
              (4.1k) Customer Reviews
            </p>
            <p className="font-semibold text-[24px] md:text-[28px] text-gray-800 font-sans">
              $95.50
              <span className="text-[16px] md:text-[20px] text-red-600 font-sans font-semibold float-right mt-2">
                Almost Sold Out
              </span>
            </p>
          </div>

          {/* Fourth Item */}
          <div className="shadow-xl flex flex-col p-6 md:p-10">
            <div className="flex items-center justify-center">
              <Image
                src="/pinkskirt.jpg"
                alt="pinkskirt"
                width={400}
                height={400}
                className="object-cover w-full"
              />
            </div>
            <div className="flex items-center mt-4">
              <h3 className="text-[22px] md:text-[28px] text-gray-800 font-sans mb-0">
                PinkSkirt
              </h3>
              <div className="flex ml-auto text-yellow-600">
                {[...Array(5)].map((_, index) => (
                  <RiStarSLine key={index} size={25} />
                ))}
              </div>
            </div>
            <p className="text-gray-600 text-[16px] md:text-[18px] font-sans font-semibold mt-1">
              Al Karam
            </p>
            <p className="text-[18px] md:text-[20px] text-gray-700 font-sans font-semibold mb-0">
              (4.1k) Customer Reviews
            </p>
            <p className="font-semibold text-[24px] md:text-[28px] text-gray-800 font-sans">
              $95.50
              <span className="text-[16px] md:text-[20px] text-red-600 font-sans font-semibold float-right mt-2">
                Almost Sold Out
              </span>
            </p>
          </div>

          {/* Fifth Item */}
          <div className="shadow-xl flex flex-col p-6 md:p-10">
            <div className="flex items-center justify-center">
              <Image
                src="/darkblue-hoddie.jpg"
                alt="bluehoddie"
                width={400}
                height={400}
                className="object-cover w-full"
              />
            </div>
            <div className="flex items-center mt-4">
              <h3 className="text-[22px] md:text-[28px] text-gray-800 font-sans mb-0">
                Blue Hoddie
              </h3>
              <div className="flex ml-auto text-yellow-600">
                {[...Array(5)].map((_, index) => (
                  <RiStarSLine key={index} size={25} />
                ))}
              </div>
            </div>
            <p className="text-gray-600 text-[16px] md:text-[18px] font-sans font-semibold mt-1">
              Al Karam
            </p>
            <p className="text-[18px] md:text-[20px] text-gray-700 font-sans font-semibold mb-0">
              (4.1k) Customer Reviews
            </p>
            <p className="font-semibold text-[24px] md:text-[28px] text-gray-800 font-sans">
              $95.50
              <span className="text-[16px] md:text-[20px] text-red-600 font-sans font-semibold float-right mt-2">
                Almost Sold Out
              </span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

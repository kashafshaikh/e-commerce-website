
"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Deals() {
    const slides = [
        { src: "/first.jpg", offer: "50% OFF" },
        { src: "/second.jpg", offer: "30% OFF" },
        { src: "/third.jpg", offer: "20% OFF" },
        { src: "/fourth.jpg", offer: "40% OFF" },
        { src: "/fifth.jpg", offer: "30% OFF" },
        { src: "/six.jpg", offer: "50% OFF" },
        { src: "/seventh.jpg", offer: "40% OFF" },
        { src: "/eight.jpg", offer: "20% OFF" },
    ];

    const [curr, setCurr] = useState(0);
    const isTransitioning = useRef(false);
    const carouselRef = useRef<HTMLDivElement | null>(null);

    const next = () => {
        if (isTransitioning.current) return;
        isTransitioning.current = true;
        setCurr((curr) => (curr === slides.length ? 1 : curr + 1));
    };

    const prev = () => {
        if (isTransitioning.current) return;
        isTransitioning.current = true;
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    };

    useEffect(() => {
        if (curr === slides.length) {
            setTimeout(() => {
                isTransitioning.current = false;
                if (carouselRef.current) {
                    setCurr(0);
                    carouselRef.current.style.transition = "none";
                    carouselRef.current.style.transform = `translateX(0)`;
                    setTimeout(() => {
                        if (carouselRef.current) {
                            carouselRef.current.style.transition = "transform 0.5s ease-out";
                        }
                    }, 20);
                }
            }, 500);
        } else {
            isTransitioning.current = false;
        }
    }, [curr]);

    return (
        <main>
            <section className="mx-6 md:mx-16 lg:mx-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-auto lg:h-[750px] mt-14 lg:mt-28 items-center gap-8 lg:gap-20">
                    {/* Text Section */}
                    <div>
                        <h1 className="font-bold text-[40px] sm:text-[50px] lg:text-[75px] text-gray-800 mb-2">
                            Deals Of The Month
                        </h1>
                        <p className="text-[18px] sm:text-[22px] lg:text-[25px] text-gray-600 text-justify">
                            Discover unbeatable offers that bring the best of our products to you at amazing prices! Whether you&#39;re looking for everyday essentials or something special, we&#39;ve got you covered. Hurry up and grab these limited-time deals before they&#39;re gone. Your savings journey starts now.
                        </p>
                        <button className="bg-gray-800 text-white px-8 py-1 lg:px-12 lg:py-3 rounded-xl mt-4">
                            <p className="text-center text-[16px] md:text-lg">SHOP NOW</p>
                        </button>
                        <h3 className="text-[30px] sm:text-[35px] lg:text-[45px] text-gray-800 font-sans mb-0 mt-6">
                            Hurry, Before It&#39;s Too Late!
                        </h3>
                        <p className="text-[20px] sm:text-[24px] lg:text-[28px] text-gray-700 font-sans font-semibold">
                            Two Days are Left
                        </p>
                    </div>

                    {/* Image carousel with smooth infinite looping */}
                    <div className="relative flex items-center">
                        {/* Left Arrow */}
                        <button
                            onClick={prev}
                            className="absolute left-0 z-10 bg-white p-2 rounded-full shadow-lg ml-4 sm:ml-10 lg:ml-14">
                            <ChevronLeft />
                        </button>

                        {/* Image Section with smooth transition and spacing */}
                        <div className="overflow-hidden w-full h-[400px] sm:h-[500px] lg:h-[700px] ml-2 sm:ml-4 lg:ml-10 relative">
                            <div
                                ref={carouselRef}
                                className="flex transition-transform ease-out duration-700 space-x-4 sm:space-x-6"
                                style={{ transform: `translateX(-${curr * 100}%)` }}
                            >
                                {slides.map((slide, index) => (
                                    <div className="relative" key={index}>
                                        <Image
                                            src={slide.src}
                                            alt={`Deal image ${index + 1}`}
                                            height={400}
                                            width={300}
                                            className="inline-block sm:h-[500px] lg:h-[700px] sm:w-[450px] lg:w-[600px]"
                                        />
                                        <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-white px-2 py-1 sm:px-3 sm:py-1 shadow-md">
                                            <p className="text-gray-800 text-[18px] sm:text-[22px] lg:text-[25px]">{slide.offer}</p>
                                        </div>
                                    </div>
                                ))}
                                <div className="relative">
                                    <Image
                                        src={slides[0].src}
                                        alt="Deal image 1 duplicate"
                                        height={400}
                                        width={300}
                                        className="inline-block sm:h-[500px] lg:h-[700px] sm:w-[450px] lg:w-[600px]"
                                    />
                                    <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-white px-2 py-1 sm:px-3 sm:py-1 shadow-md">
                                        <p className="text-gray-800 text-[18px] sm:text-[22px] lg:text-[25px]">{slides[0].offer}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Arrow */}
                        <button
                            onClick={next}
                            className="absolute z-10 right-0 mr-2 sm:mr-4 lg:mr-8 bg-white p-2 rounded-full shadow-lg">
                            <ChevronRight />
                        </button>

                        {/* Dots for slide indication */}
                        <div className="absolute bottom-2 sm:bottom-4 right-0 left-0">
                            <div className="flex items-center justify-center gap-1 sm:gap-2">
                                {slides.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`transition-all w-1 h-1 sm:w-2 sm:h-2 bg-gray-800 rounded-full ${
                                            curr === i ? "p-1" : "bg-opacity-50"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

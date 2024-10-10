import Image from "next/image";
import { RiStarSLine } from "react-icons/ri";

export default function Reviews() {
    return (
        <main className="flex flex-col">
            <section className="mt-16 text-center px-4 md:px-6">
                <h2 className="text-[40px] md:text-[60px] text-gray-800 font-semibold mb-3">
                    This Is What Our Customers Say
                </h2>
                <p className="text-gray-500 text-[18px] md:text-[22px]">
                    Lorem ipsum, dolor derit elit. Nesciunt ullam harum vero ipsa, rep voluptates neque.
                </p>

                {/* First Review */}
                <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-20 shadow-xl w-full md:w-[70%] lg:w-[45%] mx-auto px-4 md:px-12 py-6">
                    <div className="flex justify-center">
                        <Image src="/contactblack.jpg" alt="" width={300} height={300} className="py-6" />
                    </div>

                    <div>
                        <p className="py-4 text-[18px] md:text-[22px] text-gray-600 font-semibold text-start font-sans">
                            'I found exactly what I needed, and the discounts made it even better. The whole shopping experience was seamless from start to finish.'
                        </p>
                        <div className="flex ml-auto text-yellow-600 my-3">
                            {[...Array(5)].map((_, index) => (
                                <RiStarSLine key={index} size={25} />
                            ))}
                        </div>
                        <h3 className="text-[24px] md:text-[30px] text-gray-800 text-start my-0">Jessica K.</h3>
                        <p className="text-[16px] md:text-[20px] text-start text-gray-500 font-semibold mt-2">Traveler</p>
                    </div>
                </div>

                {/* Second Review */}
                <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-20 shadow-xl w-full md:w-[70%] lg:w-[45%] mx-auto px-4 md:px-12 py-6">
                    <div className="flex justify-center">
                        <Image src="/koreanrcontact.jpg" alt="" width={300} height={300} className="py-6" />
                    </div>

                    <div>
                        <p className="py-4 text-[18px] md:text-[22px] text-gray-600 font-semibold text-start font-sans">
                            'Fast shipping and excellent product quality! Everything arrived in perfect condition. 
                            I&#39;m definitely coming back for more purchases!'
                        </p>
                        <div className="flex ml-auto text-yellow-600 my-3">
                            {[...Array(5)].map((_, index) => (
                                <RiStarSLine key={index} size={25} />
                            ))}
                        </div>
                        <h3 className="text-[24px] md:text-[30px] text-gray-800 text-start my-0">Olivia K.</h3>
                        <p className="text-[16px] md:text-[20px] text-start text-gray-500 font-semibold mt-2">Traveler</p>
                    </div>
                </div>

                {/* Third Review */}
                <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-20 shadow-xl w-full md:w-[70%] lg:w-[45%] mx-auto px-4 md:px-12 py-6">
                    <div className="flex justify-center">
                        <Image src="/koreanr2contact.jpg" alt="" width={300} height={300} className="py-6" />
                    </div>

                    <div>
                        <p className="py-4 text-[18px] md:text-[22px] text-gray-600 font-semibold text-start font-sans">
                            'Super easy checkout process, and my order arrived earlier than expected. The packaging was neat, and the items were just as described!'
                        </p>
                        <div className="flex ml-auto text-yellow-600 my-3">
                            {[...Array(5)].map((_, index) => (
                                <RiStarSLine key={index} size={25} />
                            ))}
                        </div>
                        <h3 className="text-[24px] md:text-[30px] text-gray-800 text-start my-0">Rossie</h3>
                        <p className="text-[16px] md:text-[20px] text-start text-gray-500 font-semibold mt-2">Traveler</p>
                    </div>
                </div>

                {/* Fourth Review */}
                <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-20 shadow-xl w-full md:w-[70%] lg:w-[45%] mx-auto px-4 md:px-12 py-6">
                    <div className="flex justify-center">
                        <Image src="/contactgray.jpg" alt="" width={300} height={300} className="py-6" />
                    </div>

                    <div>
                        <p className="py-4 text-[18px] md:text-[22px] text-gray-600 font-semibold text-start font-sans">
                            'Amazing customer service—very responsive and helpful with my queries. The product exceeded my expectations in both design and functionality!'
                        </p>
                        <div className="flex ml-auto text-yellow-600 my-3">
                            {[...Array(5)].map((_, index) => (
                                <RiStarSLine key={index} size={25} />
                            ))}
                        </div>
                        <h3 className="text-[24px] md:text-[30px] text-gray-800 text-start my-0">Charlotte</h3>
                        <p className="text-[16px] md:text-[20px] text-start text-gray-500 font-semibold mt-2">Traveler</p>
                    </div>
                </div>

                {/* Fifth Review */}
                <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-20 shadow-xl w-full md:w-[70%] lg:w-[45%] mx-auto px-4 md:px-12 py-6">
                    <div className="flex justify-center">
                        <Image src="/contactyellow.jpg" alt="" width={300} height={300} className="py-6" />
                    </div>

                    <div>
                        <p className="py-4 text-[18px] md:text-[22px] text-gray-600 font-semibold text-start font-sans">
                            'Great variety of products and super user-friendly website. I love how quickly I received my order, and the quality was top-notch!'
                        </p>
                        <div className="flex ml-auto text-yellow-600 my-3">
                            {[...Array(5)].map((_, index) => (
                                <RiStarSLine key={index} size={25} />
                            ))}
                        </div>
                        <h3 className="text-[24px] md:text-[30px] text-gray-800 text-start my-0">Sarah T.</h3>
                        <p className="text-[16px] md:text-[20px] text-start text-gray-500 font-semibold mt-2">Traveler</p>
                    </div>
                </div>

            </section>
        </main>
    );
}

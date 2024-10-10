"use client";
import { useState } from "react";
import Image from "next/image";
export default function Contact(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const subject = `Contact Us: Message from ${name}`;
      const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
      window.location.href = `mailto:billushaikhshaikh@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };
    return(
     <main>
        <section className="mx-[20px] md:mx-[100px] font-sans gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 w-full mt-28 h-auto md:h-[750px]">
                   {/* Left Image */}
               <div>
                <Image
                   src="/blackcontact.webp"
                   alt="girl"
                   width={600}
                   height={700}
                   className="rounded-xl w-full h-auto"
                />
                </div>

                <div className="text-center font-serif">
                  <h3 className="font-bold text-[40px] md:text-[50px] text-gray-800">Get In Touch</h3>

                  <form className="gap-5 grid grid-cols-1 m-1 md:m-12 shadow-2xl" onSubmit={handleSubmit}>
                    <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-gray-100 border-gray-900 border-[3px] px-6 py-6 rounded-lg mt-12"
                    required
                    />
                    <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-100 border-gray-900 border-[3px] px-6 py-6 rounded-lg"
                    required
                   />
                   <textarea
                    name="message"
                    placeholder="Write your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-gray-100 border-gray-900 border-[3px] px-9 py-9 rounded-lg"
                    required
                   />
                   <button
                   type="submit"
                   className="bg-gray-700 py-4 text-white text-[16px] px-9 rounded-lg font-semibold shadow-lg hover:bg-gray-800 transition-all mb-6"
                   >
                   Send Message
                   </button>
                </form>
                </div>

                    {/* Right Image */}
                <div className="hidden md:block">
                <Image
                  src="/bluecontact.webp"
                  alt="girl"
                  width={600}
                  height={800}
                  className="rounded-xl w-full"
                />
               </div>
            </div>
         </section>
     </main>
    )
}








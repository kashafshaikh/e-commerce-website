import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  return (
    <main className="text-center text-white bg-gray-900 mt-[300px] py-[40px] sm:py-[50px] md:py-[60px]">
      
      <p className="text-[18px] sm:text-[20px] md:text-[24px]">
        Stay Connected With My Work:
      </p>

      <div className="flex justify-center mx-auto py-4 sm:py-5 space-x-6 sm:space-x-8 text-[20px]">
        {/* Email */}
        <a href="mailto:billushaikhshaikh@gmail.com">
          <AiOutlineMail className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] text-white cursor-pointer hover:bg-green-900 rounded-full p-1" >

          </AiOutlineMail>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/kashafshaikh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] text-white cursor-pointer hover:bg-green-900 rounded-full p-1" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/kashaf-zeeshan-5756022b5"
          target="_blank"
          rel="noopener noreferrer"
        >
        <AiFillLinkedin className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] text-white cursor-pointer hover:bg-green-900 rounded-full p-1" />
        </a>
      </div>

      <p className="text-center text-xs sm:text-sm md:text-base mt-[30px] sm:mt-[40px]">
        &copy; 2024 Kashaf. All Rights Reserved.
      </p>
    </main>
  );
}

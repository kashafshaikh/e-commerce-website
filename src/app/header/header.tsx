
"use client";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; 
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative z-50 flex items-center justify-between font-semibold text-[24px] w-auto py-2 text-white bg-gray-900">
      <button
        title="Menu"
        onClick={onClickHandler}
        className="md:hidden lg:hidden block"
      >
        {isOpen ? (
          <FaTimes size={25} className="ml-2" />
        ) : (
          <FaBars size={25} className="ml-2" />
        )}
      </button>

      <div>
        <h2 className="text-3xl font-semibold text-white px-4">FASCO</h2>
      </div>

      <nav className="hidden md:flex lg:flex flex-grow justify-end gap-x-4 px-8">
        <Link href="/" className="text-white no-underline hover:underline hover:text-blue-400">
          Home
        </Link>
        <Link href="/arrivals" className="text-white no-underline hover:underline hover:text-blue-400">
          Arrivals
        </Link>
        <Link href="/deals" className="text-white no-underline hover:underline hover:text-blue-400">
          Deals
        </Link>
        <Link href="/reviews" className="text-white no-underline hover:underline hover:text-blue-400">
          Reviews
        </Link>
        <Link href="/contact" className="text-white no-underline hover:underline hover:text-blue-400">
          Contact
        </Link>
      </nav>

      {isOpen && (
        <nav className="md:hidden lg:hidden absolute top-20 left-0 bg-gray-900 text-white shadow-lg z-40  w-full overflow-hidden">
          <ul className="flex flex-col items-center space-y-4 list-none">
            <li>
              <Link href="/" className="text-white no-underline hover:underline hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/arrivals" className="text-white no-underline hover:underline hover:text-blue-400">
                Arrivals
              </Link>
            </li>
            <li>
              <Link href="/deals" className="text-white no-underline hover:underline hover:text-blue-400">
                Deals
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="text-white no-underline hover:underline hover:text-blue-400">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white no-underline hover:underline hover:text-blue-400">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}


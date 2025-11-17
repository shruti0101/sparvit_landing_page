'use client'
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {

      const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
         <header className="relative w-full">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 z-20 w-full flex items-center justify-between px-6 lg:px-12 py-4 ">

  
        {/* Logo */}
        <div className="flex items-center">
          <div className="relative w-28 h-19">
            <Image
              src="/sparvit-logo.webp"
              alt="SPARVIT Logo"
              fill
              className="object-contain rounded-xl bg-white/50 p-2"
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-lg space-x-8 mx-auto text-white font-semibold">
          <li>
            <a href="#" className="">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="">
              Blogs
            </a>
          </li>
          <li>
            <a href="#" className=" ">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Search Icon */}
      

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </nav>
</header>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white z-30 flex flex-col items-center space-y-4 py-4 text-black font-semibold md:hidden shadow-lg">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Blogs</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      )}
</div>
  )
}

export default Navbar
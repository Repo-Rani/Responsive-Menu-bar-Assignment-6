'use client';

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <>
      <nav className="h-16 max-w-[1440px] bg-black relative">
        <div className="flex justify-between items-center h-full px-6 md:px-16">

          {/* Logo Section */}
          <div className="text-white text-2xl italic">
            <span className="text-yellow-500 text-4xl font-bold">R</span>
            ani<span className="text-yellow-500 text-4xl font-bold">D</span>ev
          </div>

          {/* Burger Icon for Mobile */}
          <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
            <FaBars />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8">
            <li className="text-white text-lg font-medium cursor-pointer hover:text-yellow-500">Home</li>
            <li className="text-white text-lg font-medium cursor-pointer hover:text-yellow-500">About</li>
            <li className="text-white text-lg font-medium cursor-pointer hover:text-yellow-500">Services</li>
            <li className="text-white text-lg font-medium cursor-pointer hover:text-yellow-500">Contact</li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-black/70 text-white h-screen w-full absolute top-0 flex flex-col gap-8 items-center justify-center z-40 transition-transform duration-500 ease-in-out ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Close Icon inside Mobile Menu */}
          <div className="absolute top-4 right-4 text-3xl cursor-pointer" onClick={toggleMenu}>
            <FaTimes />
          </div>

          {/* Mobile Menu Links */}
          <ul className="space-y-4">
            <li className="text-lg font-medium cursor-pointer hover:text-yellow-500">Home</li>
            <li className="text-lg font-medium cursor-pointer hover:text-yellow-500">About</li>
            <li className="text-lg font-medium cursor-pointer hover:text-yellow-500">Services</li>
            <li className="text-lg font-medium cursor-pointer hover:text-yellow-500">Contact</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ResizableNavbar() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Serviços", link: "/servicos" },
    { name: "Cases", link: "/cases" },
    { name: "Sobre", link: "/sobre" },
    { name: "Contato", link: "/contato" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 
                 backdrop-blur-xl bg-[#181818]/90 border border-white/10 
                 rounded-2xl px-6 py-3 shadow-xl w-[90%] max-w-7xl"
    >

      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between w-full text-white">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo-ketsu.png"
            alt="Ketsu Logo"
            width={90}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* Center menu items */}
        <div className="flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="
                px-3 py-1
                rounded-md
                text-white
                hover:bg-[#2D2D2D]
                transition-all
                duration-200
              "
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right button */}
        <Link
          href="/contato"
          className="px-4 py-2 bg-[#FC5022] hover:bg-[#e6471d]
                     transition rounded-lg text-white font-semibold"
        >
          Entre em contato ↗
        </Link>

      </div>

      {/* Mobile */}
      <div className="md:hidden flex justify-between items-center text-white">

        {/* Logo mobile */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo-ketsu.png"
            alt="Ketsu Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Toggle Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="text-3xl"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 text-white">
          
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="
                text-center 
                px-3 py-2 
                rounded-md 
                hover:bg-[#2D2D2D] 
                transition-all
              "
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/contato"
            className="px-4 py-2 bg-[#FC5022] hover:bg-[#e6471d] 
                       transition rounded-lg text-white font-medium text-center"
          >
            Entre em contato ↗
          </Link>
        </div>
      )}
    </motion.nav>
  );
}

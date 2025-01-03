"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import logo from "../../public/logo.png";
import Image from 'next/image';


interface NavLink {
  url: string;
  label: string;
}

const navlinks: NavLink[] = [
  { url: "#home", label: "Home" },
  { url: "#about", label: "About" },
  { url: "#portfolio", label: "Portfolio" },
  { url: "#clients", label: "Clients" },
  { url: "#blog", label: "Blog" },
  { url: "#contact", label: "Contact" },
]

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => {
    setOpen(!open);
  }

  // scroll navbar
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      }
      else {
        setIsScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
    }
  }, []);

  const [activeLink, setActiveLink] = useState<string>("#home");
  // Scroll detection for active section
  const handleScroll = () => {
    const currentSection = navlinks.find((link) => {
      const section = document.querySelector(link.url);
      if (section) {
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100;
      }
      return false;
    });

    if (currentSection) {
      setActiveLink(currentSection.url);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed z-50 md:h-[108px] h-[77px] w-full gap-[8px] pt-[20px] pr-[30px] pb-[20px] pl-[30px] flex items-center justify-between md:pt-[32px] md:pr-[300px] md:pb-[32px] md:pl-[300px] cursor-pointer ${isScrolled ? "bg-[#BD1F17] top-0 h-[77px] text-white shadow-md" : "bg-transparent text-white"}`}>
      <div className="w-[970px] h-[37px] gap-[60px] flex items-center">
        <Link href="/" className="w-[201.9px] h-[37px] gap-[6px] flex items-center">
          <Image src={logo} alt='logo' width={48} height={48} />
          <h1 className="cursor-pointer text-[#FFFFFF] w-[159px] h-[29px] leading-[28.44px] text-[28.44px] font-normal font-popins">Resturent</h1>
        </Link>
        {/* desktop items */}
        <nav>
          <ul className='md:flex hidden gap-[40px]'>
            {navlinks.map((link) => (
              <li key={link.url}>
                <Link href={link.url} className={`hover:text-blue-600 ${activeLink === link.url ? "text-blue-700" : ""}`}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Button for Book A Table (hidden on mobile) */}
      <button className="text-[#0A1425] cursor-pointer leading-6 text-[16px] font-bold font-primary bg-[#FEBF00] w-[157px] h-[44px] pt-[10px] pr-[24px] pb-[10px] pl-[24px] gap-[10px] hidden md:flex">
        Book A Table
      </button>

      {/* mobile navbar button */}
      <div className='md:hidden flex'>
        <button onClick={handleClick}>
          {open ? <IoClose className="text-2xl" /> : <IoMenu className="text-2xl" />}
        </button>
      </div>

      {/* mobile navbar items */}
      <nav className={`md:hidden ${open ? 'block' : 'hidden'} absolute top-[77px] left-0 w-full h-screen bg-[#BD1F17] text-white`}>
        <ul className='space-y-4 py-4'>
          {navlinks.map((link) => (
            <li key={link.url} onClick={() => setOpen(false)} className='text-center'>
              <Link href={link.url} className={`hover:text-blue-600 ${activeLink === link.url ? "text-blue-700" : ""}`}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
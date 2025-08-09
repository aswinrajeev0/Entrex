"use client";
import { useState } from "react";
import Image from "next/image";
import ServicesGrid from "./servicesGrid";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);

    return (
        <header className="relative flex justify-between items-center px-4 sm:px-8 md:px-12 py-4">
            {/* Logo */}
            <div className="relative w-28 h-10 sm:w-32 sm:h-12 md:w-40 md:h-16">
                <Image
                    src="/logo.png"
                    alt="logo"
                    height={80}
                    width={211.86}
                    className="object-contain"
                    priority
                />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
                <ul className="flex space-x-6 xl:space-x-8 text-white text-lg">
                    <li className="hover:text-blue-400 cursor-pointer transition-colors">About Us</li>
                    <li
                        className="relative hover:text-blue-400 cursor-pointer transition-colors"
                        onMouseEnter={() => setIsServiceMenuOpen(true)}
                        onMouseLeave={() => setIsServiceMenuOpen(false)}
                    >
                        Services
                        {isServiceMenuOpen && (
                            <div className="absolute left-[-100px] top-full w-[700px] z-10" onMouseEnter={() => setIsServiceMenuOpen(true)} onMouseLeave={() => setIsServiceMenuOpen(false)}>
                                <ServicesGrid />
                            </div>
                        )}
                    </li>
                    <li className="hover:text-blue-400 cursor-pointer transition-colors">Tour Packages</li>
                    <li className="hover:text-blue-400 cursor-pointer transition-colors">Luxury Car Rentals</li>
                    <li className="hover:text-blue-400 cursor-pointer transition-colors">Clients</li>
                    <li className="hover:text-blue-400 cursor-pointer transition-colors">Contact Us</li>
                </ul>
            </nav>

            {/* Mobile Hamburger Button */}
            <button
                className="lg:hidden flex flex-col justify-center items-center space-y-1 p-2 z-50 cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
                <span className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
                <span className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
            </button>

            {/* Mobile Menu */}
            <nav
                className={`lg:hidden absolute top-full left-0 z-10 w-full bg-[#000000e8] bg-opacity-90 text-white transition-all duration-300 ease-in-out rounded-[10px] ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                    }`}
            >
                <ul className="flex flex-col space-y-4 p-6 text-lg">
                    <li className="hover:text-blue-400 cursor-pointer">About Us</li>
                    <li className="hover:text-blue-400 cursor-pointer">Services</li>
                    <li className="hover:text-blue-400 cursor-pointer">Tour Packages</li>
                    <li className="hover:text-blue-400 cursor-pointer">Luxury Car Rentals</li>
                    <li className="hover:text-blue-400 cursor-pointer">Clients</li>
                    <li className="hover:text-blue-400 cursor-pointer">Contact Us</li>
                </ul>
            </nav>
        </header>
    );
}

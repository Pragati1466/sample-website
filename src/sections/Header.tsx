'use client';

import React, { useState } from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaBars } from "react-icons/fa";
import Image from "next/image";

const Socials = [
    { name: "LinkedIn", icon: <FaLinkedin size={24} color="#ffffff" />, link: "https://www.linkedin.com/company/ieee-igdtuw/" },
    { name: "Twitter", icon: <FaTwitter size={24} color="#ffffff" />, link: "https://x.com/ieeeigdtuw?t=a_Ruso2b8InVZgRsWA_JIQ&s=09" },
    { name: "Instagram", icon: <FaInstagram size={24} color="#ffffff" />, link: "https://www.instagram.com/ieeeigdtuw/?igshid=MzRlODBiNWFlZA%3D%3D" },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                {/* Logo Section */}
                <a
                    href="#about-me"
                    className="h-auto w-auto flex flex-row items-center justify-center"
                >
                    <Image
                        src={require('../assets/logos/white_logo.png')}
                        alt="logo"
                        width={100}
                        height={100}
                        className="cursor-pointer hover:animate-slowspin"
                    />
                </a>

                {/* Links Section */}
                <div className="hidden md:flex flex-grow items-center justify-center">
                    <div className="flex items-center justify-between w-[600px] h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
                        <a
                            href="#about-me"
                            className="cursor-pointer transition-all duration-300 hover:text-[#a855f7]"
                        >
                            About
                        </a>
                        <a
                            href="#events"
                            className="cursor-pointer transition-all duration-300 hover:text-[#a855f7]"
                        >
                            Events
                        </a>
                        <a
                            href="#team"
                            className="cursor-pointer transition-all duration-300 hover:text-[#a855f7]"
                        >
                            Team
                        </a>
                        <a
                            href="#contact-us"
                            className="cursor-pointer transition-all duration-300 hover:text-[#a855f7]"
                        >
                            Contact
                        </a>
                    </div>
                </div>

                {/* Social Icons - Desktop Only */}
                <div className="hidden md:flex flex-row gap-5">
                    {Socials.map((social) => (
                        <a
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={social.name}
                            className="cursor-pointer transition-all duration-300 hover:text-[#a855f7]"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>

                {/* Hamburger Menu Icon - Mobile Only */}
                <div className="flex md:hidden">
                    <div
                        className="p-2 rounded-md border-2 border-[#7042f8] hover:border-[#a855f7] transition-all duration-300 cursor-pointer"
                        onClick={toggleMenu}
                    >
                        <FaBars size={28} className="text-white transition-all duration-300 hover:text-[#a855f7]" />
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Toggle Visibility */}
            {isMenuOpen && (
                <div className="md:hidden w-full flex flex-col items-center bg-[#030014] py-5 text-gray-300 space-y-4 absolute top-[65px] left-0 z-50 shadow-md">
                    <a
                        href="#about-me"
                        className="cursor-pointer text-lg transition-all duration-300 hover:text-[#a855f7]"
                        onClick={toggleMenu}
                    >
                        About
                    </a>
                    <a
                        href="#events"
                        className="cursor-pointer text-lg transition-all duration-300 hover:text-[#a855f7]"
                        onClick={toggleMenu}
                    >
                        Events
                    </a>
                    <a
                        href="#team"
                        className="cursor-pointer text-lg transition-all duration-300 hover:text-[#a855f7]"
                        onClick={toggleMenu}
                    >
                        Team
                    </a>
                    <a
                        href="#contact-us"
                        className="cursor-pointer text-lg transition-all duration-300 hover:text-[#a855f7]"
                        onClick={toggleMenu}
                    >
                        Contact Us
                    </a>

                    {/* Social Media Icons at the Bottom */}
                    <div className="w-full flex justify-center mt-6 gap-5">
                        {Socials.map((social) => (
                            <a
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={social.name}
                                className="cursor-pointer transition-all duration-300 hover:text-[#a855f7]"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;

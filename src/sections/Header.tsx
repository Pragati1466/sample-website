'use client';

import React, { useState } from "react";
import { FaLinkedin, FaInstagram, FaBars, FaEnvelope } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const iconSize = 24;

const Socials = [
    {
        name: "LinkedIn",
        icon: <FaLinkedin size={iconSize} color="#ffffff" />,
        link: "https://www.linkedin.com/company/ieee-igdtuw/",
        hoverColor: "#0077b5"
    },
    {
        name: "X",
        icon: <SiX size={iconSize} color="#ffffff" />,
        link: "https://x.com/ieeeigdtuw?t=a_Ruso2b8InVZgRsWA_JIQ&s=09",
        hoverColor: "#1DA1F2"
    },
    {
        name: "Instagram",
        icon: <FaInstagram size={iconSize} color="#ffffff" />,
        link: "https://www.instagram.com/ieeeigdtuw/?igshid=MzRlODBiNWFlZA%3D%3D",
        hoverColor: "#E1306C"
    },
    {
        name: "Email",
        icon: <FaEnvelope size={iconSize} color="#ffffff" />,
        link: "#",
        hoverColor: "#d44638",
    },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSubBarOpen, setIsSubBarOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSubBar = () => {
        setIsSubBarOpen(!isSubBarOpen);
    };

    const handleEmailClick = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const emailTo = "igdtuieee@gmail.com";
        const ccEmail = "igdtuieee@gmail.com";
        const subject = encodeURIComponent("Contact from Website");
        const body = encodeURIComponent("Hello IEEE IGDTUW Team,");
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailTo}&cc=${ccEmail}&su=${subject}&body=${body}`;
        window.open(gmailLink, "_blank");
    };

    return (
        <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                <a href="#about-me" className="h-auto w-auto flex flex-row items-center justify-center">
                    <Image
                        src={require('../assets/logos/white_logo.png')}
                        alt="logo"
                        width={100}
                        height={100}
                        className="cursor-pointer hover:animate-slowspin"
                    />
                </a>

                <div className="hidden md:flex flex-grow items-center justify-center">
                    <div className="flex items-center justify-between w-[600px] h-auto border border-[rgba(112,66,248,0.38)] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
                        <a href="#about-me" className="cursor-pointer transition-all duration-300 hover:text-[#a855f7]">About</a>

                        <div className="relative">
                            <button
                                onClick={(e) => { e.preventDefault(); toggleSubBar(); }}
                                className="cursor-pointer transition-all duration-300 hover:text-[#a855f7]"
                            >
                                Events
                            </button>
                            <AnimatePresence>
                                {isSubBarOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute left-0 mt-2 w-48 bg-[#0300145e] border border-[rgba(112,66,248,0.38)] rounded-lg shadow-lg text-gray-200 overflow-hidden"
                                    >
                                        <a
                                            href="https://ieee-igdtuw.github.io/Wiempower-5.0/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block px-4 py-2 transition-all duration-300 hover:bg-[#a855f7] hover:text-white"
                                        >
                                            IEEE Week 2024
                                        </a>
                                        <a href="#past-events" className="block px-4 py-2 transition-all duration-300 hover:bg-[#a855f7] hover:text-white">
                                            Past Events
                                        </a>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <a href="#team" className="cursor-pointer transition-all duration-300 hover:text-[#a855f7]">Team</a>
                        <a href="#contact-us" className="cursor-pointer transition-all duration-300 hover:text-[#a855f7]">Contact</a>
                    </div>
                </div>

                <div className="hidden md:flex flex-row gap-5 items-center">
                    {Socials.map((social) => (
                        <a
                            href={social.name === "Email" ? "#" : social.link}
                            target={social.name === "Email" ? "_self" : "_blank"}
                            rel="noopener noreferrer"
                            key={social.name}
                            className="cursor-pointer transition-all duration-300 hover:opacity-80"
                            onClick={social.name === "Email" ? handleEmailClick : undefined}
                            style={{ color: social.hoverColor }}
                        >
                            <span className="transition-all duration-300" style={{ color: social.hoverColor }}>
                                {social.icon}
                            </span>
                        </a>
                    ))}
                </div>

                <div className="flex md:hidden">
                    <div
                        className="p-2 rounded-md border-2 border-[rgb(112,66,248)] hover:border-[#a855f7] transition-all duration-300 cursor-pointer"
                        onClick={toggleMenu}
                    >
                        <FaBars size={28} className="text-white transition-all duration-300 hover:text-[#a855f7]" />
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden w-full flex flex-col items-center bg-[#030014] py-5 text-gray-300 space-y-4 absolute top-[65px] left-0 z-50 shadow-md">
                    <a href="#about-me" className="cursor-pointer text-lg transition-all duration-300 hover:text-[#a855f7]" onClick={toggleMenu}>About</a>
                    <a
                        href="#events"
                        className="cursor-pointer text-lg transition-all duration-300 hover:text-[#a855f7]"
                        onClick={(e) => { e.preventDefault(); toggleSubBar(); }}
                    >
                        Events
                    </a>
                    <AnimatePresence>
                        {isSubBarOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="w-full flex flex-col items-center mt-2 space-y-2"
                            >
                                <a href="#ieee-week-2024" className="text-lg transition-all duration-300 hover:text-[#a855f7]">IEEE Week 2024</a>
                                <a href="#past-events" className="text-lg transition-all duration-300 hover:text-[#a855f7]">Past Events</a>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <a href="#team" className="cursor-pointer text-lg transition-all duration-300 hover:text-[#a855f7]" onClick={toggleMenu}>Team</a>
                    <a href="#contact-us" className="cursor-pointer text-lg transition-all duration-300 hover:text-[#a855f7]" onClick={toggleMenu}>Contact Us</a>

                    <div className="w-full flex justify-center mt-6 gap-5">
                        {Socials.map((social) => (
                            <a
                                href={social.name === "Email" ? "#" : social.link}
                                target={social.name === "Email" ? "_self" : "_blank"}
                                rel="noopener noreferrer"
                                key={social.name}
                                className="cursor-pointer transition-all duration-300 hover:opacity-80"
                                onClick={social.name === "Email" ? handleEmailClick : undefined}
                                style={{ color: social.hoverColor }}
                            >
                                <span className="transition-all duration-300" style={{ color: social.hoverColor }}>
                                    {social.icon}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;

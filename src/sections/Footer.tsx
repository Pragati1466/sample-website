import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="relative">
            {/* Partition Line with Glow */}
            <div className="w-full h-[2px] bg-gradient-to-r from-[#7042f8] to-[#00c6ff] shadow-lg mb-5"></div>

            {/* Footer Section */}
            <footer className="w-full bg-[#03001417] text-gray-300 py-6 backdrop-blur-md shadow-inner shadow-[#2A0E61]/50">
                <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">
                    {/* Get In Touch Section */}
                    <div className="mb-8 md:mb-0">
                        <img src="/IEEE_logo.png" alt="IEEE Logo" className="w-[120px] mb-4 mx-auto md:mx-0" />
                        <h3 className="font-bold mb-2">Get In Touch</h3>
                        <p className="mb-2">Indira Gandhi Delhi Technical University for Women, New Church Rd, Opp. St James Church, Kashmere Gate, Delhi 110006</p>
                        <p className="mb-2">Phone: No.</p>
                        <p className="mb-2">Email: <a href="mailto:igdtuieee@gmail.com" className="underline">igdtuieee@gmail.com</a></p>
                    </div>

                    {/* Links Section */}
                    <div className="mb-8 md:mb-0">
                        <h3 className="font-bold mb-2">Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#about" className="hover:text-[#7042f8] transition-colors">About Us</a></li>
                            <li><a href="#events" className="hover:text-[#7042f8] transition-colors">Events</a></li>
                            <li><a href="#team" className="hover:text-[#7042f8] transition-colors">Team</a></li>
                        </ul>
                    </div>

                    {/* Follow Us Section */}
                    <div className="mb-8 md:mb-0">
                        <h3 className="font-bold mb-2">Follow Us</h3>
                        <div className="flex justify-center sm:justify-start space-x-4">
                            <a href="#facebook" className="text-[#ffffff] hover:text-[#00c6ff] transition-colors">
                                <FaFacebookF size={20} />
                            </a>
                            <a href="#instagram" className="text-[#ffffff] hover:text-[#00c6ff] transition-colors">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#twitter" className="text-[#ffffff] hover:text-[#00c6ff] transition-colors">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#linkedin" className="text-[#ffffff] hover:text-[#00c6ff] transition-colors">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Text */}
                <div className="mt-5 text-center text-xs">
                    <p>This website is developed with <span className="text-[#7042f8]">❤️</span> by IEEE Web Admin. Team</p>
                    <p>IEEE IGDTUW 2024 | All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

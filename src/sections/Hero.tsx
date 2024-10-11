'use client';

import React, { useState, useEffect, useRef } from 'react';

const Hero = () => {
    const [members, setMembers] = useState(0);
    const [awards, setAwards] = useState(0);
    const [recognitions, setRecognitions] = useState(0);
    const [hasLoaded, setHasLoaded] = useState(false); 
    const heroRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const startCounting = () => {
            const targetMembers = 230;
            const targetAwards = 30;
            const targetRecognitions = 50;

            let memberCount = 0;
            let awardsCount = 0;
            let recognitionCount = 0;

            const duration = 7000;

            const memberIntervalTime = duration / targetMembers;
            const awardsIntervalTime = duration / targetAwards;
            const recognitionIntervalTime = duration / targetRecognitions;

            const memberInterval = setInterval(() => {
                if (memberCount < targetMembers) {
                    memberCount += 1;
                    setMembers(memberCount);
                } else {
                    clearInterval(memberInterval);
                }
            }, memberIntervalTime);

            const awardsInterval = setInterval(() => {
                if (awardsCount < targetAwards) {
                    awardsCount += 1;
                    setAwards(awardsCount);
                } else {
                    clearInterval(awardsInterval);
                }
            }, awardsIntervalTime);

            const recognitionInterval = setInterval(() => {
                if (recognitionCount < targetRecognitions) {
                    recognitionCount += 1;
                    setRecognitions(recognitionCount);
                } else {
                    clearInterval(recognitionInterval);
                }
            }, recognitionIntervalTime);
        };

        const handleScroll = () => {
            if (heroRef.current) {
                const rect = heroRef.current.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0 && !hasLoaded) {
                    startCounting();
                    setHasLoaded(true); 
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); 
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasLoaded]);

    return (
        <section
            ref={heroRef}
            className="flex flex-col items-center justify-center min-h-screen text-white backdrop-blur-md px-4 py-16 md:px-6 lg:px-10 relative"
        >
            <div className="text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    <span className="text-white">Welcome to</span>{" "}
                    <span className="text-[#9563ff]">IEEE IGDTUW</span>
                </h1>

                <p className="text-lg md:text-xl mb-6 text-gray-300 font-bold">
                    Institute of Electrical and Electronics Engineers IGDTUW Student Branch.
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white border-2 border-white hover:bg-gradient-to-l hover:from-blue-500 hover:to-purple-600 font-semibold py-2 px-6 rounded-full mb-4 transition duration-300">
                    Explore our student branch
                </button>


                {/* Social Media Icons */}
                <div className="flex justify-center space-x-6 mt-8">
                    <a href="#" className="text-2xl md:text-3xl hover:text-[#7042f8] transition duration-300">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="text-2xl md:text-3xl hover:text-[#7042f8] transition duration-300">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="text-2xl md:text-3xl hover:text-[rgb(112,66,248)] transition duration-300">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-2xl md:text-3xl hover:text-[#7042f8] transition duration-300">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>

                {/* Glowing Decoration */}
                <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
                    <div className="absolute top-1/3 left-1/4 w-64 h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-3xl opacity-20"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-20"></div>
                </div>
            </div>

            {/* Counter Bar */}
            <div className="w-full absolute bottom-0 py-8 bg-opacity-50 bg-[#030014]">
                <div className="flex justify-around items-center">
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-[#7042f8]">Members</h2>
                        <p className="text-lg font-light text-gray-300">
                            {members}+
                        </p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-[#7042f8]">Awards</h2>
                        <p className="text-lg font-light text-gray-300">
                            {awards}+
                        </p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-[#7042f8]">Events</h2>
                        <p className="text-lg font-light text-gray-300">
                            {recognitions}+
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

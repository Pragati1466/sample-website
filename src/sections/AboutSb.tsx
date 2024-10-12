'use client';

import React, { RefObject, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import starsBg from "@/assets/extraPics/stars_bg_2.png";
import gridLines from "@/assets/extraPics/grid_lines.jpg";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { ABOUTSB, CHAPTERS } from '@/constants';

const useRelativeMousePosition = (ref: RefObject<HTMLElement>) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (event: MouseEvent) => {
            if (!ref.current) return;
            const { top, left } = ref.current.getBoundingClientRect();
            setMousePosition({
                x: event.clientX - left,
                y: event.clientY - top,
            });
        };

        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, [ref]);

    return mousePosition;
};

const AboutSb = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const borderedDivRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const backgroundPositionY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    const backgroundAnimation = useAnimation();

    useEffect(() => {
        backgroundAnimation.start({
            backgroundPositionX: [0, starsBg.width],
            transition: {
                duration: 60,
                ease: "linear",
                repeat: Infinity,
            },
        });
    }, [backgroundAnimation]);

    const mousePosition = useRelativeMousePosition(borderedDivRef);
    const mouseRadius = 150;

    return (
        <section className='py-20 md:py-24 min-h-screen flex items-center' ref={sectionRef}>
            <div className='container'>
                <motion.div
                    ref={borderedDivRef}
                    className='border border-white/15 py-24 rounded-xl overflow-hidden relative group cursor-none'
                    style={{
                        backgroundPositionY,
                        backgroundImage: `url(${starsBg.src})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'repeat',
                    }}
                    animate={backgroundAnimation}
                >
                    <div
                        className='absolute inset-0 bg-[rgb(24,13,41)] bg-blend-overlay opacity-100 transition-opacity duration-700 ease-in-out group-hover:opacity-0'
                        style={{
                            backgroundImage: `url(${gridLines.src})`,
                            maskImage: 'radial-gradient(50% 50% at 50% 35%, black, transparent)',
                            WebkitMaskImage: 'radial-gradient(50% 50% at 50% 35%, black, transparent)',
                        }}
                    ></div>
                    <motion.div
                        className='absolute inset-0 bg-[rgb(32,18,52)] bg-blend-overlay opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100'
                        style={{
                            backgroundImage: `url(${gridLines.src})`,
                            maskImage: `radial-gradient(${mouseRadius}px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
                            WebkitMaskImage: `radial-gradient(${mouseRadius}px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
                        }}
                    ></motion.div>

                    {/* Content */}
                    <div className='relative z-10 px-6 md:px-12'>
                        <h2 className='text-5xl md:text-6xl max-w-3xl mx-auto tracking-tighter text-center font-bold mb-16'>
                            Unveiling Our Student Branch & Chapter
                        </h2>

                        {/* IEEE Student Branch Section */}
                        <div className='flex flex-col md:flex-row items-center mb-24'>
                            <div className='md:w-1/3 mb-8 md:mb-0'>
                                <Image src={ABOUTSB[0].sbImage} alt="IEEE Logo" width={200} height={200} className="mx-auto" />
                            </div>
                            <div className='md:w-2/3 md:pl-8'>
                                <h3 className='text-4xl font-semibold mb-4 text-[#9563ff]'>IEEE IGDTUW Student Branch</h3>
                                <p className='italic text-2xl mb-4 text-neutral-400'>{ABOUTSB[0].sbMission}</p>
                                <p className='text-lg text-gray-300'>{ABOUTSB[0].sbDetails}</p>
                            </div>
                        </div>

                        {/* WIE Chapter Section */}
                        <div className='flex flex-col md:flex-row-reverse items-center'>
                            <div className='md:w-1/3 mb-8 md:mb-0'>
                                <Image src={CHAPTERS[0].chapterLogo} alt="WIE Logo" width={200} height={200} className="mx-auto" />
                            </div>
                            <div className='md:w-2/3 md:pr-8 text-right'>
                                <h3 className='text-4xl font-semibold mb-4 text-[#9563ff]'>{CHAPTERS[0].chapterName}</h3>
                                <p className='text-lg text-gray-300'>{CHAPTERS[0].chapterDetails}</p>
                            </div>
                        </div>
                    </div>

                    {/* Glow Effect */}
                    <motion.div
                        className='absolute pointer-events-none'
                        style={{
                            width: mouseRadius * 2,
                            height: mouseRadius * 2,
                            left: mousePosition.x - mouseRadius,
                            top: mousePosition.y - mouseRadius,
                            borderRadius: '50%',
                            backgroundColor: 'rgba(24,13,41,0.4)',
                            filter: 'blur(20px)',
                            zIndex: 10,
                            pointerEvents: 'none',
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSb;

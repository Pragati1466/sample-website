'use client';

import React from 'react';
import Image from 'next/image';
import starsBg from "@/assets/extraPics/stars_bg_2.jpg";
import gridLines from "@/assets/extraPics/grid_lines.jpg";
import { ABOUTSB, CHAPTERS } from '@/constants';

const AboutSb = () => {
    return (
        <section className='py-20 md:py-24 min-h-screen flex items-center'>
            <div className='container'>
                <div
                    className='border border-white/15 py-24 rounded-xl overflow-hidden relative '
                    style={{
                        backgroundImage: `url(${starsBg.src})`,
                        backgroundSize: '',
                    }}
                >
                    <div
                        className='absolute inset-0 bg-[rgb(24,13,41)] bg-blend-overlay'
                        style={{
                            backgroundImage: `url(${gridLines.src})`,
                            maskImage: 'radial-gradient(50% 50% at 50% 35%, black, transparent)',
                            WebkitMaskImage: 'radial-gradient(50% 50% at 50% 35%, black, transparent)',
                        }}
                    ></div>

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
                </div>
            </div>
        </section>
    );
};

export default AboutSb;
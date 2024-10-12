'use client';
import React from 'react';
import Image from 'next/image';
import photo1 from "@/assets/sliderPhotos/random_1.jpg";
import photo2 from "@/assets/sliderPhotos/random_2.jpg";
import photo3 from "@/assets/sliderPhotos/random_3.jpg";
import photo4 from "@/assets/sliderPhotos/random_4.jpg";
import photo5 from "@/assets/sliderPhotos/random_5.jpg";
import photo6 from "@/assets/sliderPhotos/random_6.jpg";
import { motion } from 'framer-motion';

const PhotoSlider = () => {
    const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

    return (
        <section className='py-20 md:py-24'>
            <div className='relative container'>
                <div className='flex flex-1 overflow-hidden rounded-2xl relative'> {/* Increased border radius */}
                    {/* Glowing edges at the ends of the slider, spread outwards */}
                    <div className='absolute inset-y-0 left-0 w-1/3 -ml-10 bg-gradient-to-r from-[#7042f861] to-transparent z-20 pointer-events-none'></div>
                    <div className='absolute inset-y-0 right-0 w-1/3 -mr-10 bg-gradient-to-l from-[#7042f861] to-transparent z-20 pointer-events-none'></div>

                    {/* Sliding image container */}
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: '-100%' }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40, // Adjust duration for slower speed
                            ease: "linear"
                        }}
                        className='flex flex-none gap-10'
                    >
                        {/* Repeat images array to prevent blank space */}
                        {[...photos, ...photos].map((photo, index) => (
                            <div key={index} className="relative">
                                {/* Black transparent overlay */}
                                <div className="absolute inset-0 bg-black opacity-30 z-10 rounded-2xl"></div>
                                <Image
                                    src={photo}
                                    alt={`Slider image ${index + 1}`}
                                    width={280}  // Adjusted width
                                    height={160} // Adjusted height
                                    className='object-cover rounded-2xl' // Added rounded corners
                                    unoptimized
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PhotoSlider;

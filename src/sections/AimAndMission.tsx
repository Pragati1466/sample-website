'use client'; // Ensure this component is rendered on the client

import React from 'react';
import { AIM } from '../constants/index'; // Import your data
import { FaRegLightbulb, FaLaptopCode, FaRegHandshake, FaHistory } from 'react-icons/fa'; // Example icons

const AimAndMission = () => {
    const icons = [FaRegLightbulb, FaLaptopCode, FaRegHandshake, FaHistory]; // Add relevant icons

    return (
        <section className="py-12">
            <div className="container mx-auto">
                <h2 className="text-center text-3xl font-bold mb-8 text-white">Our Aim & Mission</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {AIM.map((item, index) => {
                        const Icon = icons[index]; // Get corresponding icon for each section
                        return (
                            <div
                                key={index}
                                className="p-6 rounded-lg hover:shadow-lg transition-transform duration-[1500ms] ease-in-out bg-transparent border border-gray-500 cursor-pointer hover:scale-105 relative"
                            >
                                <div className="flex items-center justify-center mb-4">
                                    <Icon className="text-4xl text-teal-400" />
                                </div>
                                <h3 className="text-2xl font-semibold mb-4 text-center text-white">{item.heading}</h3>
                                <p className="text-gray-300 text-center">{item.description}</p>
                                {/* Glowing effect */}
                                <div className="absolute inset-0 rounded-lg border border-purple-500 opacity-0 hover:opacity-100 transition-opacity duration-[1500ms] ease-in-out" style={{ boxShadow: '0 0 15px rgb(112,66,248)' }} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AimAndMission;

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
                            <div key={index} className="p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-transparent border border-gray-500">
                                <div className="flex items-center justify-center mb-4">
                                    <Icon className="text-4xl text-teal-400" />
                                </div>
                                <h3 className="text-2xl font-semibold mb-4 text-center text-white">{item.heading}</h3>
                                <p className="text-gray-300 text-center">{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AimAndMission;

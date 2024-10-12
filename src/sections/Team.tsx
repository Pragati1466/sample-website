import Image from 'next/image'; // Import Image from Next.js
import React from 'react';
import { TEAM } from '../constants'; // Adjust the import path according to your folder structure
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

// Helper function to format names
const formatName = (name: string): string => {
    const parts = name.split(' ');
    return parts.map((part: string) => {
        return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
    }).join(' ');
};

// Team component with TeamMember functionality
const Team = () => {
    console.log(TEAM); // Log TEAM to check if it’s imported correctly

    return (
        <div className="max-w-5xl mx-auto p-8 rounded-lg bg-transparent shadow-md">
            <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> {/* Adjusted gaps and column counts */}
                {TEAM.map((member, index) => (
                    <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg transition duration-300 group" key={index}>
                        <div className="relative w-40 h-40 mx-auto mt-4 rounded-full overflow-hidden border-2 border-purple-500 shadow-lg"> {/* Circle size and border */}
                            <Image
                                src={member.memberPic} // Use Image component
                                alt={member.name}
                                layout="fill" // Fill the container
                                objectFit="cover" // Cover the area
                                className="rounded-full" // Ensure the image is circular
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"> {/* Smooth transition for overlay */}
                                <div className="absolute inset-0 bg-black bg-opacity-50 transition duration-300"></div> {/* Black overlay */}
                                <div className="flex space-x-2 z-10"> {/* Spacing between icons */}
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className="text-white text-2xl bg-blue-600 rounded-full p-1" />
                                    </a>
                                    {member.instagram && (
                                        <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                                            <FaInstagram className="text-white text-2xl bg-pink-600 rounded-full p-1" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center text-white">
                            <div className="text-center mt-40"> {/* Margin to prevent overlap */}
                                <h3 className="text-lg font-semibold">{formatName(member.name)}</h3>
                                <p className="mb-2">{member.role}</p> {/* Added margin-bottom to separate text */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;

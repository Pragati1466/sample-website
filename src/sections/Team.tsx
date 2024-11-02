import Image from 'next/image';
import React from 'react';
import { TEAM } from '../constants';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const formatName = (name: string): string => {
    const parts = name.split(' ');
    return parts.map((part: string) => {
        return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
    }).join(' ');
};

const Team = () => {
    console.log(TEAM);

    return (
        <div className="max-w-5xl mx-auto p-8 rounded-lg bg-transparent shadow-md">
            <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {TEAM.map((member, index) => (
                    <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg transition duration-300 group" key={index}>
                        <div className="relative w-40 h-40 mx-auto mt-4 rounded-full overflow-hidden border-2 border-transparent shadow-lg transition duration-300 group-hover:border-purple-700 group-hover:shadow-xl group-hover:shadow-purple-500 flex items-center justify-center">
                            <Image
                                src={member.memberPic}
                                alt={member.name}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute inset-0 bg-black bg-opacity-50 transition duration-300"></div>
                                <div className="flex space-x-2 z-10">
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
                        <div className="absolute inset-x-0 flex items-center justify-center text-white mt-[8%]"> 
                            <div className="text-center">
                                <h3 className="text-lg font-semibold">{formatName(member.name)}</h3>
                                <p className="mb-2">{member.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
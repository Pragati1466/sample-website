"use client";

import React, { useState } from "react";
import { FAQDATA } from "../constants"; // Import the FAQ data from the constant file

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle the opened FAQ
    };

    return (
        <section className="bg-black text-white py-12 px-4 sm:px-6 lg:px-10">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-extrabold text-center text-white mb-8">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-6">
                    {FAQDATA.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-[#000000] shadow-lg rounded-lg overflow-hidden border-2 border-[#616161] transition duration-500 hover:shadow-2xl"
                        >
                            <div
                                className="flex justify-between items-center p-5 cursor-pointer hover:bg-[#2a2a2e] transition-all duration-300"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h3 className="text-lg font-semibold text-white">
                                    {faq.question}
                                </h3>
                                <span className="text-[#969292] text-xl">
                                    {openIndex === index ? "-" : "+"}
                                </span>
                            </div>

                            {/* Add a clear separation between the question and answer */}
                            <div
                                className={`transition-all duration-500 ease-in-out ${openIndex === index
                                        ? "max-h-[1000px] p-5"
                                        : "max-h-0 p-0"
                                    } overflow-hidden bg-[#000000]`}
                            >
                                {openIndex === index && (
                                    <p className="text-[#d1d1d1]">{faq.answer}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import React, { useState, useRef } from "react";
import { FAQDATA } from "../constants";

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
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
                                <span
                                    className={`text-[#969292] text-xl transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'
                                        }`}
                                >
                                    ▼
                                </span>
                            </div>

                            <div
                                ref={(el) => {
                                    contentRefs.current[index] = el;
                                }}
                                className={`transition-all duration-500 ease-in-out overflow-hidden bg-[#000000]`}
                                style={{
                                    maxHeight: openIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0',
                                    opacity: openIndex === index ? 1 : 0,
                                    transform: `translate3d(0, ${openIndex === index ? '0' : '-10px'}, 0)`,
                                }}
                            >
                                <div className="p-5">
                                    <p className="text-[#d1d1d1]">{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
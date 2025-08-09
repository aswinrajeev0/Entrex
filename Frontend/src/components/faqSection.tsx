'use client'
import React, { useState } from "react";

export default function FAQSection() {
    const [openItems, setOpenItems] = useState<Record<number, boolean>>({
        0: true,
        6: true
    });


    const toggleItem = (index: number) => {
        setOpenItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const faqData = [
        {
            question: "What is Webflow and why is it the best website builder?",
            answer: "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
            isBlue: true
        },
        {
            question: "What is your favorite template from BRIX Templates?",
            answer: "",
            isBlue: false
        },
        {
            question: "How do you clone a template from the Showcase?",
            answer: "",
            isBlue: false
        },
        {
            question: "Why is BRIX Templates the best Webflow agency?",
            answer: "",
            isBlue: false
        },
        {
            question: "When was Webflow officially launched?",
            answer: "",
            isBlue: false
        },
        {
            question: "How do you integrate Jetboost with Webflow?",
            answer: "",
            isBlue: false
        },
        {
            question: "What is your favorite template from BRIX Templates?",
            answer: "",
            isBlue: false
        },
        {
            question: "How do you clone a template from the Showcase?",
            answer: "",
            isBlue: false
        },
        {
            question: "What is Webflow and why is it the best website builder?",
            answer: "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
            isBlue: true
        },
        {
            question: "Why is BRIX Templates the best Webflow agency?",
            answer: "",
            isBlue: false
        },
        {
            question: "When was Webflow officially launched?",
            answer: "",
            isBlue: false
        },
        {
            question: "How do you integrate Jetboost with Webflow?",
            answer: "",
            isBlue: false
        }
    ];

    const leftColumnItems = faqData.slice(0, 6);
    const rightColumnItems = faqData.slice(6, 12);

    interface FAQItemProps {
        item: {
            question: string;
            answer: string;
            isBlue: boolean;
        }

        isOpen: boolean;
        onToggle: (index: any) => void
    }

    const FAQItem: React.FC<FAQItemProps> = ({ item, isOpen, onToggle }) => (
        <div className="border-b border-gray-200 py-6">
            <button
                onClick={onToggle}
                className="flex justify-between items-start w-full text-left"
            >
                <h3 className={`text-lg font-medium pr-4 ${item.isBlue ? 'text-blue-500' : 'text-gray-900'}`}>
                    {item.question}
                </h3>
                <span className={`text-2xl font-light flex-shrink-0 ${item.isBlue ? 'text-blue-500' : 'text-gray-600'}`}>
                    {isOpen ? '−' : '+'}
                </span>
            </button>
            {isOpen && item.answer && (
                <div className="mt-4 pr-8">
                    <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                    </p>
                </div>
            )}
        </div>
    );

    return (
        <div className="bg-white py-16 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex justify-center items-center mb-4">
                        <span className="text-orange-500 text-2xl font-bold mr-2">???</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Frequently Asked Questions (FAQs)
                    </h1>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                        Got questions? We've got answers! Find solutions to common queries about our services, processes, and technology.
                    </p>
                </div>

                {/* FAQ Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div>
                        {leftColumnItems.map((item, index) => (
                            <FAQItem
                                key={index}
                                item={item}
                                isOpen={openItems[index]}
                                onToggle={() => toggleItem(index)}
                            />
                        ))}
                    </div>

                    {/* Right Column */}
                    <div>
                        {rightColumnItems.map((item, index) => {
                            const actualIndex = index + 6;
                            return (
                                <FAQItem
                                    key={actualIndex}
                                    item={item}
                                    isOpen={openItems[actualIndex]}
                                    onToggle={() => toggleItem(actualIndex)}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
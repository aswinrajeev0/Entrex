import Image from "next/image"
import React from "react"

interface UpdatesCardProps {
    imgSrc: string;
    heading: string;
}

const UpdatesCard: React.FC<UpdatesCardProps> = ({heading, imgSrc}) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-md w-[400px] mx-auto">
            {/* Image placeholder */}
            <div className="relative h-64 w-full">
                <Image
                    src={imgSrc}
                    alt="Business team meeting"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    {heading}
                </h2>

                <p className="text-gray-600 text-base leading-relaxed mb-6">
                    Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                    <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                        BUSINESS
                    </span>
                    <div className="text-gray-400 text-sm flex items-center space-x-2">
                        <span>Oct 3</span>
                        <span>•</span>
                        <span>7 min read</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdatesCard
import Image from "next/image";
import ServiceSectionCard from "./serviceSectionCard";

export default function ServicesSection() {
    return (
        <>
            <div className="w-[100vw] text-center mt-10">
                <h1 className="text-6xl font-bold">Our Services</h1>
                <span className="text-lg font-bold block mt-2">
                    Premium travel solutions tailored for businesses and individuals across India.
                </span>

                {/* Center the toggle buttons */}
                <div className="flex justify-center mt-6">
                    <div className="flex w-fit bg-[#EEEEEE] rounded-full overflow-hidden p-1">
                        <button
                            className="px-6 py-2 text-sm font-medium rounded-full 
              bg-gradient-to-r from-[#EF3E3E] to-[#F9A825] text-white"
                        >
                            Corporate Solutions
                        </button>
                        <button
                            className="px-6 py-2 text-sm font-medium rounded-full text-black"
                        >
                            Personal / Retail Rides
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Employee Commute Solutions - 2/3 width on large screens */}
                        <div className="lg:col-span-2 relative overflow-hidden rounded-2xl group cursor-pointer">
                            <div className="relative h-80 sm:h-96 lg:h-80">
                                <Image
                                    src="/car-purchase.jpg"
                                    alt="Employee commute with driver and passenger in car"
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-[#04040478]"></div>
                                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                                    <div className="flex items-start">
                                        <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4 0.0667725H2.8C1.26 0.0667725 0 1.32677 0 2.86677V22.4668C0 24.0068 1.26 25.2668 2.8 25.2668H22.4C23.94 25.2668 25.2 24.0068 25.2 22.4668V2.86677C25.2 1.32677 23.94 0.0667725 22.4 0.0667725ZM8.4 19.6668H5.6V12.6668H8.4V19.6668ZM14 19.6668H11.2V15.4668H14V19.6668ZM14 12.6668H11.2V9.86677H14V12.6668ZM19.6 19.6668H16.8V5.66677H19.6V19.6668Z" fill="white" />
                                            </svg>

                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                                            Employee Commute Solutions
                                        </h3>
                                        <p className="text-white text-base sm:text-lg leading-relaxed max-w-lg">
                                            Daily transportation for corporate staff with fixed routes, real-time tracking, and punctual pickups.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ServiceSectionCard imgSrc="/door-open.jpg" />
                        <ServiceSectionCard imgSrc="/world-map.jpg" />
                        <ServiceSectionCard imgSrc="/people-travelling-together.jpg" />
                        <ServiceSectionCard imgSrc="/desk-management.jpg" />

                    </div>
                </div>
            </div>
        </>
    );
}

export default function WhySection() {
    return (
        <div className="bg-white py-16 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-black mb-4 relative inline-block">
                        Why <span className="relative inline-block">
                            <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-400 transform -rotate-4 rounded-md"></span>
                            <span className="relative text-black px-3 py-1">ENTREX</span>
                        </span>?
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Trusted by hundreds of travelers and corporates across India for a premium ride experience.
                    </p>
                </div>

                {/* Features Grid with Car in Center */}
                <div className="relative grid grid-cols-12 gap-8 items-center">

                    {/* Left Side Features */}
                    <div className="col-span-4 space-y-12">
                        {/* Premium Chauffeurs */}
                        <div className="text-right">
                            <div className="flex justify-end items-center mb-3">
                                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Premium Chauffeurs</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                All our drivers are handpicked, background-verified, professionally dressed, and trained for top-tier customer service.
                            </p>
                        </div>

                        {/* Well-Maintained Vehicles */}
                        <div className="text-right">
                            <div className="flex justify-end items-center mb-3">
                                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Well-Maintained Vehicles</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Our fleet is serviced regularly, sanitized daily, and equipped with modern amenities for a smooth and safe ride.
                            </p>
                        </div>

                        {/* Real-Time Tracking */}
                        <div className="text-right">
                            <div className="flex justify-end items-center mb-3">
                                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Real-Time Tracking</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                We offer GPS-enabled rides so you—and your loved ones—can track your journey with full transparency.
                            </p>
                        </div>
                    </div>

                    {/* Center Car Image */}
                    <div className="col-span-4 flex justify-center">
                        <div className="w-full max-w-md">
                            {/* Placeholder for car image */}
                            <div className="bg-gray-200 rounded-lg aspect-[4/3] flex items-center justify-center">
                                <div className="text-center text-gray-500">
                                    <svg className="w-24 h-24 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                                    </svg>
                                    <p className="text-sm">Car Image Placeholder</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Features */}
                    <div className="col-span-4 space-y-12">
                        {/* Transparent Pricing */}
                        <div className="text-left">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.51-1.31c-.562-.649-1.413-1.076-2.353-1.253V5z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Transparent Pricing</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                No hidden charges. Transparent fare structure with real-time billing through our app.
                            </p>
                        </div>

                        {/* Punctual & Reliable */}
                        <div className="text-left">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Punctual & Reliable</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Time is valuable. Our chauffeurs arrive ahead of schedule and follow optimized routes for timely arrivals.
                            </p>
                        </div>

                        {/* 24x7 Dedicated Support */}
                        <div className="text-left">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                                    <span className="text-white text-xs font-bold">24</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">24×7 Dedicated Support</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Our operations team is available around the clock to assist with bookings, changes, or emergencies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
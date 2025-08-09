import Image from "next/image";
import BookingForm from "./form";
import Header from "./header";

export default function HeroSection() {
    return (
        <div className="relative w-full min-h-screen flex flex-col justify-center items-start px-4 sm:px-8 md:px-16 lg:px-20 py-8">
            {/* Background image */}
            <Image
                src="/hero.png"
                alt="Hero background"
                fill
                className="object-cover z-0"
                priority
            />

            {/* Overlay container */}
            <div className="relative z-10 w-full">
                <Header />

                {/* Content wrapper */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-10">
                    {/* Left side - Text */}
                    <div className="flex-1">
                        {/* Animated car */}
                        <div className="mb-6">
                            <Image
                                src="/landingcar.gif"
                                alt=""
                                width={100}
                                height={70}
                                className="w-20 sm:w-28 md:w-32 h-auto"
                            />
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5 max-w-3xl">
                            Premium Chauffeur <br />
                            Services for Every Journey
                        </h1>

                        {/* Subtitle */}
                        <p className="text-white text-base sm:text-lg mb-8 max-w-2xl leading-relaxed opacity-90">
                            From corporate travel to airport transfers, we provide exceptional service. <br className="hidden sm:block" />
                            Punctual, and comfortable rides – every time.
                        </p>

                        {/* Call to Action */}
                        <button className="bg-gradient-to-r from-red-500 to-orange-400 text-white font-semibold px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg hover:from-red-600 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Call Us Now
                        </button>

                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
                            <div>
                                <h3 className="text-white text-2xl sm:text-[35px] font-bold mb-2">Verified</h3>
                                <p className="text-white text-lg opacity-80">Chauffeurs</p>
                            </div>
                            <div>
                                <h3 className="text-white text-2xl sm:text-[35px] font-bold mb-2">Real-time</h3>
                                <p className="text-white text-lg opacity-80">Tracking</p>
                            </div>
                            <div>
                                <h3 className="text-white text-2xl sm:text-[35px] font-bold mb-2">24x7</h3>
                                <p className="text-white text-lg opacity-80">Support</p>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Booking Form */}
                    <div className="flex-1 w-full max-w-lg">
                        <BookingForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

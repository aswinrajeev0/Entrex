import Image from "next/image";
import BookingForm from "./form";
import Header from "./header";

export default function HeroSection() {
    return (
        <div className="relative w-full min-h-screen flex flex-col justify-center items-start px-8 md:px-16 lg:px-20">
            {/* Background image inside HeroSection */}
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
                <div className="flex justify-items-end mb-10">
                    <div>
                        <div className="mb-8">
                            <Image
                                src="/landingcar.gif"
                                alt=""
                                width={120}
                                height={80}
                            />
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-white text-5xl font-bold leading-tight mb-5 max-w-3xl">
                            Premium Chauffeur<br />
                            Services for Every Journey
                        </h1>

                        {/* Subtitle */}
                        <p className="text-white text-lg mb-8 max-w-2xl leading-relaxed opacity-90">
                            From corporate travel to airport transfers, we provide exceptional service.<br />
                            Punctual, and comfortable rides - every time.
                        </p>

                        {/* Call to Action */}
                        <button className="bg-gradient-to-r from-red-500 to-orange-400 text-white font-semibold px-8 py-3 rounded-full text-lg hover:from-red-600 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 shadow-lg h-[47px] w-[184px]">
                            Call Us Now
                        </button>

                        {/* Features */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mt-16">
                            <div>
                                <h3 className="text-white text-[35px] font-bold mb-2">Verified</h3>
                                <p className="text-white text-xl opacity-80">Chauffeurs</p>
                            </div>
                            <div>
                                <h3 className="text-white text-[35px] font-bold mb-2">Real-time</h3>
                                <p className="text-white text-xl opacity-80">Tracking</p>
                            </div>
                            <div>
                                <h3 className="text-white text-[35px] font-bold mb-2">24x7</h3>
                                <p className="text-white text-xl opacity-80">Support</p>
                            </div>
                        </div>
                    </div>

                    <BookingForm />
                </div>
            </div>
        </div>
    );
}

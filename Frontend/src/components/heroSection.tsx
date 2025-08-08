import Image from "next/image"
import BookingForm from "./form"

export default function HeroSection() {
    return (
        <div className="flex justify-items-end">
            <div className="relative min-h-[60] bg-transparent flex items-center justify-start px-8 md:px-16 lg:px-20">
                <div className="absolute inset-0 opacity-10 bg-transparent"></div>

                {/* Car Icon */}
                <div className="relative z-10 mb-8">
                    <div className="">
                        <Image
                            src="/landingcar.gif"
                            alt=""
                            width={120}
                            height={80}
                        />

                    </div>

                    {/* Main Heading */}
                    <h1 className="text-white text-5xl md:text-5xl lg:text-5xl font-bold leading-tight mb-5 max-w-3xl">
                        Premium Chauffeur<br />
                        Services for Every Journey
                    </h1>

                    {/* Subtitle */}
                    <p className="text-white text-lg md:text-lg mb-8 max-w-2xl leading-relaxed opacity-90">
                        From corporate travel to airport transfers, we provide exceptional service.<br />
                        Punctual, and comfortable rides - every time.
                    </p>

                    {/* Call to Action Button */}
                    <button className="bg-gradient-to-r from-red-500 to-orange-400 text-white font-semibold px-8 py-3 rounded-full text-lg hover:from-red-600 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 shadow-lg h-[47px] w-[184px] flex align-middle justify-center text-base">
                        Call Us Now
                    </button>

                    {/* Bottom Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mt-16">
                        <div>
                            <h3 className="text-white text-[35px] md:text-[35px] font-bold mb-2">Verified</h3>
                            <p className="text-white text-xl opacity-80">Chauffeurs</p>
                        </div>
                        <div>
                            <h3 className="text-white text-[35px] md:text-[35px] font-bold mb-2">Real-time</h3>
                            <p className="text-white text-xl opacity-80">Tracking</p>
                        </div>
                        <div>
                            <h3 className="text-white text-[35px] md:text-[35px] font-bold mb-2">24x7</h3>
                            <p className="text-white text-xl opacity-80">Support</p>
                        </div>
                    </div>
                </div>
            </div>
            <BookingForm />
        </div>
    )
}
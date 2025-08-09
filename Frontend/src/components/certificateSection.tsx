import Image from "next/image";

export default function CertificateSection() {
    return (
        <div className="bg-[url('/golden-olive.png')] bg-center bg-contain bg-no-repeat mt-10">
            {/* Desktop Layout */}
            <div className="hidden lg:flex items-center justify-evenly h-[600px]">
                <div className="w-[300px]">
                    <Image
                        src="/itta-logo.png"
                        alt=""
                        width={200}
                        height={200}
                    />
                    <h1 className="font-bold text-xl">Affiliations: ITTA – Indian Tour and Travel Association</h1>
                    <span>
                        We offer GPS-enabled rides so you—and your loved ones—can track your journey with full transparency.
                    </span>
                </div>
                <h2 className="text-5xl font-bold px-4 py-2 text-black">
                    Our Certifications
                </h2>
                <div className="w-[300px]">
                    <Image
                        src="/iato-logo.png"
                        alt=""
                        width={200}
                        height={200}
                    />
                    <h1 className="font-bold text-xl">Affiliations: IATO – Indian Association of Tour Operators</h1>
                    <span>
                        We offer GPS-enabled rides so you—and your loved ones—can track your journey with full transparency.
                    </span>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden py-10 px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-8">
                    Our Certifications
                </h2>
                <div className="flex flex-col items-center space-y-8">
                    <div className="w-full max-w-[300px] text-center">
                        <div className="flex justify-center mb-4">
                            <Image
                                src="/itta-logo.png"
                                alt=""
                                width={200}
                                height={200}
                            />
                        </div>
                        <h1 className="font-bold text-lg mb-2">Affiliations: ITTA – Indian Tour and Travel Association</h1>
                        <span className="text-sm md:text-base">
                            We offer GPS-enabled rides so you—and your loved ones—can track your journey with full transparency.
                        </span>
                    </div>
                    <div className="w-full max-w-[300px] text-center">
                        <div className="flex justify-center mb-4">
                            <Image
                                src="/iato-logo.png"
                                alt=""
                                width={200}
                                height={200}
                            />
                        </div>
                        <h1 className="font-bold text-lg mb-2">Affiliations: IATO – Indian Association of Tour Operators</h1>
                        <span className="text-sm md:text-base">
                            We offer GPS-enabled rides so you—and your loved ones—can track your journey with full transparency.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
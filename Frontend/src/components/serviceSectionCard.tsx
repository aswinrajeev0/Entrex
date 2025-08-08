import Image from "next/image";

export default function ServiceSectionCard({ imgSrc }: { imgSrc: string }) {
    return (
        <div className="lg:col-span-1 relative overflow-hidden rounded-2xl group cursor-pointer">
            <div className="relative h-80 sm:h-96 lg:h-80">
                <Image
                    src={imgSrc}
                    alt=""
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
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                            Executive Chauffeur Service
                        </h3>
                        <p className="text-white text-sm sm:text-base leading-relaxed">
                            Suited, trained chauffeurs with luxury vehicles for directors, clients, and VIP executives.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
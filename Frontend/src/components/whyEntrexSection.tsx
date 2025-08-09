export default function WhyEntrexSection() {
    return (
        <div className="mt-10 text-center px-4 sm:px-6 lg:px-20 bg-[#F6F5F8] py-5">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
                Why ENTREX Is the Preferred Partner for Premium Tourist Travel in India
            </h1>
            <span className="text-sm sm:text-lg font-bold block mt-2">
                Whether you're an international traveler, a corporate guest, or an expat exploring India, ENTREX delivers a seamless journey with professional chauffeurs, luxury vehicles, and end-to-end travel solutions.
            </span>

            <div
                className="relative rounded-2xl border-4 border-gray-900 
                    bg-[url('/family.jpg')] bg-center bg-cover bg-no-repeat
                    h-[400px] sm:h-[300px] md:h-[400px] lg:h-[800px] 
                    w-full lg:w-[1200px] mb-5 mt-5 mx-auto 
                    flex flex-col xs:flex-row lg:block items-center justify-center gap-4"
            >
                {/* First Card */}
                <div
                    className="bg-white py-6 px-4 sm:py-8 sm:px-2 w-[50%] sm:w-[400px] rounded-2xl 
      mt-4 sm:mt-8 mx-auto lg:mt-[200px] lg:ml-[-50px]"
                >
                    <div className="max-w-md mx-auto text-center">
                        <h2 className="text-xl sm:text-lg md:text-2xl font-bold text-blue-900 mb-4 sm:mb-8">
                            Tours Completed
                        </h2>

                        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-2 sm:mb-4">
                            <span className="text-3xl sm:text-3xl md:text-4xl font-bold text-blue-900">
                                27,632
                            </span>
                            <div className="flex items-center text-green-500">
                                <span className="text-lg sm:text-xl md:text-2xl font-semibold">
                                    +2.5%
                                </span>
                                <svg
                                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={3}
                                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                                    />
                                </svg>
                            </div>
                        </div>

                        <p className="text-gray-500 text-sm sm:text-base md:text-lg">
                            Compared to (21340 last year)
                        </p>
                    </div>
                </div>

                {/* Second Card */}
                <div
                    className="bg-white py-6 px-4 sm:py-8 sm:px-2 w-[50%] sm:w-[400px] rounded-2xl 
      mt-4 mx-auto lg:mt-[100px] lg:ml-auto lg:mr-[-60px]"
                >
                    <div className="max-w-md mx-auto text-center">
                        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-2 sm:mb-4">
                            <svg className="w-12 h-12 sm:w-[70px] sm:h-[70px] md:w-[87px] md:h-[87px]" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="43.6667" cy="43.6664" r="40.6667" stroke="#E0DFE5" strokeWidth="5.33333" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M53.303 35.2284C55.1965 37.5306 56.3333 40.4786 56.3333 43.6921C56.3333 51.0559 50.3638 57.0255 43 57.0255C35.6362 57.0255 29.6666 51.0559 29.6666 43.6921C29.6666 36.3283 35.6362 30.3588 43 30.3588C46.1898 30.3588 49.1181 31.479 51.4128 33.3474L52.1472 32.613L52.4963 30.7538C52.6321 30.0301 53.329 29.5535 54.0527 29.6894C54.7765 29.8253 55.253 30.5221 55.1171 31.2459L55.0411 31.6511L55.4463 31.575C56.17 31.4391 56.8669 31.9157 57.0028 32.6394C57.1386 33.3632 56.6621 34.06 55.9383 34.1959L53.9651 34.5663L53.303 35.2284ZM49.5147 35.2455C47.7127 33.8536 45.453 33.0255 42.9999 33.0255C37.1089 33.0255 32.3332 37.8011 32.3332 43.6922C32.3332 49.5832 37.1089 54.3588 42.9999 54.3588C48.8909 54.3588 53.6666 49.5832 53.6666 43.6922C53.6666 41.2154 52.8224 38.9358 51.4061 37.1253L49.5016 39.0298C50.4446 40.3425 50.9999 41.9525 50.9999 43.6922C50.9999 48.1104 47.4182 51.6922 42.9999 51.6922C38.5816 51.6922 34.9999 48.1104 34.9999 43.6922C34.9999 39.2739 38.5816 35.6922 42.9999 35.6922C44.7158 35.6922 46.3055 36.2324 47.6082 37.152L49.5147 35.2455ZM45.68 39.0802C44.8925 38.6215 43.9769 38.3588 42.9999 38.3588C40.0544 38.3588 37.6666 40.7466 37.6666 43.6922C37.6666 46.6377 40.0544 49.0255 42.9999 49.0255C45.9454 49.0255 48.3332 46.6377 48.3332 43.6922C48.3332 42.691 48.0574 41.7543 47.5776 40.9539L45.5663 42.9652C45.6316 43.1963 45.6666 43.4401 45.6666 43.6922C45.6666 45.1649 44.4727 46.3588 42.9999 46.3588C41.5272 46.3588 40.3332 45.1649 40.3332 43.6922C40.3332 42.2194 41.5272 41.0255 42.9999 41.0255C43.2256 41.0255 43.4447 41.0535 43.6539 41.1063L45.68 39.0802Z" fill="#28B29A" />
                                <path d="M3 43.6664C3 66.126 21.2071 84.3331 43.6667 84.3331C66.1262 84.3331 84.3333 66.126 84.3333 43.6664C84.3333 21.2068 66.1262 2.99976 43.6667 2.99976" stroke="#28B29A" strokeWidth="5.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className="flex items-center text-green-500">
                                <span className="text-lg sm:text-xl md:text-2xl font-semibold">
                                    68%
                                </span>
                            </div>
                        </div>

                        <p className="text-gray-500 text-sm sm:text-base md:text-lg">
                            Compared to (21340 last year)
                        </p>
                    </div>
                </div>
            </div>


            <div className="p-2 mx-auto text-center space-x-4 space-y-4">
                <span className="border-2 rounded-md border-gray-500 border-dashed inline-block p-2">
                    <p className="text-lg font-medium">
                        <span className="text-black">Multilingual </span>
                        <span className="text-[#f13e3e]">Chauffeurs</span>
                    </p>
                </span>

                <span className="border-2 rounded-md border-gray-500 border-dashed inline-block p-2">
                    <p className="text-lg font-medium">
                        <span className="text-black">Entrex </span>
                        <span className="text-[#f13e3e]">Client Kit </span>
                        <span className="text-black">for every trip</span>
                    </p>
                </span>

                <span className="border-2 rounded-md border-gray-500 border-dashed inline-block p-2">
                    <p className="text-lg font-medium">
                        <span className="text-black">100% Statutory </span>
                        <span className="text-[#f13e3e]">Compliance ensured</span>
                    </p>
                </span>

                <span className="border-2 rounded-md border-gray-500 border-dashed inline-block p-2">
                    <p className="text-lg font-medium">
                        <span className="text-[#f13e3e]">Luxury </span>
                        <span className="text-black">and Well maintained vehicles</span>
                    </p>
                </span>

                <span className="border-2 rounded-md border-gray-500 border-dashed inline-block p-2">
                    <p className="text-lg font-medium">
                        <span className="text-black">Vehicles with average age of </span>
                        <span className="text-[#f13e3e]">less than 3 years</span>
                    </p>
                </span>

                <span className="border-2 rounded-md border-gray-500 border-dashed inline-block p-2">
                    <p className="text-lg font-medium">
                        <span className="text-[#f13e3e]">Best Pricing </span>
                        <span className="text-black">among the </span>
                        <span className="text-[#f17d3e]">Premium segment </span>
                        <span className="text-black">service providers</span>
                    </p>
                </span>

                <span className="border-2 rounded-md border-gray-500 border-dashed inline-block p-2">
                    <p className="text-lg font-medium">
                        <span className="text-[#f13e3e]">ZERO Payment </span>
                        <span className="text-black">commitment in case of any flaw in the trip service</span>
                    </p>
                </span>

                <span className="border-2 rounded-md border-gray-500 border-dashed inline-block p-2">
                    <p className="text-lg font-medium">
                        <span className="text-[#f13e3e]">Safety & Security </span>
                        <span className="text-black">ensured through high-end GPS based solution and Remote vehicle control</span>
                    </p>
                </span>

                <span className="border-2 rounded-md border-gray-500 border-dashed inline-block p-2">
                    <p className="text-lg font-medium">
                        <span className="text-black">Packaged Solutioning covering Accommodation, Food, Sight-seeing, Tourist Guide etc for </span>
                        <span className="text-[#f13e3e]">Expat / Executive Tourism.</span>
                    </p>
                </span>

                <span className="border-2 rounded-md border-gray-500 border-dashed inline-block p-2">
                    <p className="text-lg font-medium">
                        <span className="text-black">For long stay Clients, </span>
                        <span className="text-[#f17d3e]">dedicated Chauffer & Vehicle </span>
                        <span className="text-black">for undisturbed service</span>
                    </p>
                </span>
            </div>
        </div>
    );
}

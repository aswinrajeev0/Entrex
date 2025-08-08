import Image from "next/image";

export default function Header(){
    return(
        <header className="flex justify-between items-center p-4 mx-20 md:p-6">
            {/* Logo */}
            <div className="relative w-32 h-12 md:w-40 md:h-16">
                <Image
                    src="/logo.png"
                    alt="logo"
                    height={80}
                    width={211.86}
                    // fill
                    className="object-contain"
                    priority
                />
            </div>
            
            {/* Navigation */}
            <nav className="hidden lg:block">
                <ul className="flex space-x-6 xl:space-x-8 text-white text-lg">
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">About Us</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">Services</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">Tour Packages</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">Luxury Car Rentals</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">Clients</li>
                    <li className="hover:text-blue-600 cursor-pointer transition-colors">Contact Us</li>
                </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button className="lg:hidden flex flex-col space-y-1 p-2">
                <span className="w-6 h-0.5 bg-black"></span>
                <span className="w-6 h-0.5 bg-black"></span>
                <span className="w-6 h-0.5 bg-black"></span>
            </button>
        </header>
    )
}
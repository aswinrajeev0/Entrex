import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-gray-50 py-12 mt-10">
            <div className="container mx-auto px-6">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="md:col-span-1">
                        <div className="mb-6">
                            <Image
                                src="/logo.png"
                                alt="Entrex Logo"
                                width={150}
                                height={40}
                                className="mb-4"
                            />
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            We are one of the leading Travel operators in South India with our registered office at Madipakkam, Chennai. We serve leading corporate clients in Chennai and Bangalore regions.
                        </p>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-black font-semibold text-lg mb-6">Company</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Home</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">About</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Services</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Contact</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Compliance Control</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Security Control</a></li>
                        </ul>
                    </div>

                    {/* Tours Links */}
                    <div>
                        <h3 className="text-black font-semibold text-lg mb-6">Tours</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Sales software</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Features</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Privacy and security</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Marketplace</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Status</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">API</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-black font-semibold text-lg mb-6">Contact</h3>
                        <div className="space-y-4">
                            <p className="text-gray-600 text-sm leading-relaxed">
                                ASK Towers 1st floor, 183-184, 3rd Main Rd,<br />
                                Sri Sai Nagar, Thoraipakkam, Tamil Nadu 600096
                            </p>
                            <div className="flex items-center space-x-2">
                                <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.6667 0.369141H3.33335C1.86669 0.369141 0.68002 1.56914 0.68002 3.03581L0.666687 19.0358C0.666687 20.5025 1.86669 21.7025 3.33335 21.7025H24.6667C26.1334 21.7025 27.3334 20.5025 27.3334 19.0358V3.03581C27.3334 1.56914 26.1334 0.369141 24.6667 0.369141ZM24.6667 5.7028L14 12.3695L3.33336 5.7028V3.03613L14 9.7028L24.6667 3.03613V5.7028Z" fill="#2D2F31" />
                                </svg>
                                <a href="mailto:bookings@entrex.in" className="text-gray-600 hover:text-gray-900 text-sm">
                                    bookings@entrex.in
                                </a>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.82667 10.4228C6.74667 14.1961 9.84 17.2761 13.6133 19.2095L16.5467 16.2761C16.9067 15.9161 17.44 15.7961 17.9067 15.9561C19.4 16.4495 21.0133 16.7161 22.6667 16.7161C23.4 16.7161 24 17.3161 24 18.0495V22.7028C24 23.4361 23.4 24.0361 22.6667 24.0361C10.1467 24.0361 0 13.8895 0 1.36947C0 0.636133 0.6 0.0361328 1.33333 0.0361328H6C6.73333 0.0361328 7.33333 0.636133 7.33333 1.36947C7.33333 3.03613 7.6 4.63613 8.09333 6.12947C8.24 6.59613 8.13333 7.11613 7.76 7.48947L4.82667 10.4228Z" fill="#2D2F31" />
                                </svg>
                                <a href="tel:+914449530055" className="text-gray-600 hover:text-gray-900 text-sm">
                                    +91 44 4953 0055
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-200 mb-8" />

                {/* Bottom footer */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-600 text-sm">
                            Copyright © 2025 Entrex. All Rights Reserved.
                        </p>
                    </div>
                    <div className="flex items-center space-x-6">
                        {/* Footer links */}
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Terms of Service</a>
                            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Privacy Policy</a>
                            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Cookies</a>
                        </div>
                        {/* Social media icons */}
                        <div className="flex space-x-3 ml-6">
                            <a href="#" className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500">
                                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3289 1.24806C14.8773 1.53733 13.8404 1.95768 13.3291 1.95768V1.95854C12.7452 1.34857 11.9231 0.967773 11.0115 0.967773C9.24078 0.967773 7.80497 2.40359 7.80497 4.17357C7.80497 4.4195 7.83346 4.65937 7.88614 4.88941H7.88562C5.48373 4.82637 2.85681 3.62249 1.27541 1.56203C0.303121 3.24497 1.14451 5.11668 2.24788 5.79867C1.87019 5.82716 1.1749 5.75515 0.847639 5.43583C0.825707 6.55284 1.3628 8.03287 3.3212 8.56978C2.94403 8.77271 2.27637 8.71451 1.98607 8.67133C2.08796 9.61426 3.40841 10.847 4.85234 10.847C4.3377 11.4423 2.40141 12.522 0.228516 12.1785C1.70422 13.0763 3.42413 13.5963 5.24454 13.5963C10.4177 13.5963 14.4352 9.40374 14.219 4.2316C14.2181 4.2259 14.2181 4.2202 14.2176 4.21399C14.2181 4.20069 14.219 4.18739 14.219 4.17357C14.219 4.15751 14.2176 4.14232 14.2171 4.12677C14.688 3.80469 15.3199 3.23496 15.7714 2.4851C15.5096 2.6293 14.7241 2.91806 13.9933 2.98973C14.4623 2.73655 15.1573 1.90743 15.3289 1.24806Z" fill="white" />
                                </svg>
                            </a>
                            <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700">
                                <svg width="8" height="17" viewBox="0 0 8 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.13399 16.1542H5.04812V8.14988H7.23425L7.66661 5.64881H5.04812V3.83645C5.04812 3.2522 5.4259 2.63877 5.96581 2.63877H7.45399V0.137695H5.63016V0.148907C2.77648 0.252481 2.19016 1.90521 2.13932 3.64122H2.13399V5.64881H0.676208V8.14988H2.13399V16.1542Z" fill="white" />
                                </svg>
                            </a>
                            <a href="#" className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800">
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.43367 4.23866C3.53518 4.23866 4.42815 3.42431 4.42815 2.41865C4.42815 1.4121 3.53518 0.59668 2.43367 0.59668C1.33109 0.59668 0.43811 1.4121 0.43811 2.41865C0.43811 3.42431 1.33109 4.23866 2.43367 4.23866Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.895142 15.9453H4.47381V5.62402H0.895142V15.9453Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.49663 10.2049C9.49663 9.02128 10.0566 7.86382 11.3957 7.86382C12.7347 7.86382 13.0639 9.02128 13.0639 10.1766V15.8135H16.6266V9.94615C16.6266 5.86976 14.217 5.16699 12.7347 5.16699C11.2536 5.16699 10.4367 5.66795 9.49663 6.88183V5.49231H5.92383V15.8135H9.49663V10.2049Z" fill="white" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
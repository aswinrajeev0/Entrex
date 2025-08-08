"use client"
import { useState } from "react";

export default function BookingForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        adults: '',
        children: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleReset = () => {
        setFormData({
            fullName: '',
            phone: '',
            email: '',
            date: '',
            time: '',
            adults: '',
            children: '',
            message: ''
        });
    };

    const handleSubmit = () => {
        console.log('Booking data:', formData);
        // Handle form submission here
    };

    return (
        <div className="w-full max-w-md mx-auto p-6 bg-gradient-to-br from-[#ED2628] to-[#F3AA45] rounded-3xl">
            <h1 className="text-white text-2xl font-bold mb-8 text-center">
                Book Your Ride Instantly
            </h1>

            <div className="space-y-4">
                {/* Name and Phone Row */}
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-transparent border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-white/60"
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-transparent border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-white/60"
                    />
                </div>

                {/* Email */}
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-transparent border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-white/60"
                />

                {/* Date and Time Row */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                        <select
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 bg-transparent border border-white/30 rounded-xl text-white focus:outline-none focus:border-white/60 appearance-none"
                        >
                            <option value="" className="text-gray-800">Select Date</option>
                            <option value="today" className="text-gray-800">Today</option>
                            <option value="tomorrow" className="text-gray-800">Tomorrow</option>
                            <option value="custom" className="text-gray-800">Custom Date</option>
                        </select>
                        <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>

                    <div className="relative">
                        <select
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 bg-transparent border border-white/30 rounded-xl text-white focus:outline-none focus:border-white/60 appearance-none"
                        >
                            <option value="" className="text-gray-800">Select Time</option>
                            <option value="morning" className="text-gray-800">Morning (9-12)</option>
                            <option value="afternoon" className="text-gray-800">Afternoon (12-17)</option>
                            <option value="evening" className="text-gray-800">Evening (17-21)</option>
                        </select>
                        <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>

                {/* Adults and Children Row */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                        <select
                            name="adults"
                            value={formData.adults}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 bg-transparent border border-white/30 rounded-xl text-white focus:outline-none focus:border-white/60 appearance-none"
                        >
                            <option value="" className="text-gray-800">Adults</option>
                            <option value="1" className="text-gray-800">1 Adult</option>
                            <option value="2" className="text-gray-800">2 Adults</option>
                            <option value="3" className="text-gray-800">3 Adults</option>
                            <option value="4+" className="text-gray-800">4+ Adults</option>
                        </select>
                        <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>

                    <div className="relative">
                        <select
                            name="children"
                            value={formData.children}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 bg-transparent border border-white/30 rounded-xl text-white focus:outline-none focus:border-white/60 appearance-none"
                        >
                            <option value="" className="text-gray-800">Children</option>
                            <option value="0" className="text-gray-800">No Children</option>
                            <option value="1" className="text-gray-800">1 Child</option>
                            <option value="2" className="text-gray-800">2 Children</option>
                            <option value="3+" className="text-gray-800">3+ Children</option>
                        </select>
                        <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>

                {/* Message */}
                <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full px-4 py-4 bg-transparent border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-white/60 resize-none"
                />

                {/* Buttons */}
                <div className="flex gap-4 pt-1">
                    <button
                        type="button"
                        onClick={handleReset}
                        className="flex justify-center align-middle py-3 h-[50px] w-[174px] px-6 bg-transparent border-2 border-white text-white font-semibold text-base rounded-full hover:bg-white/10 transition-colors"
                    >
                        RESET
                    </button>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="flex justify-center align-middle py-3 h-[50px] w-[284px] px-6 bg-white text-gray-900 text-base font-semibold rounded-full hover:bg-gray-100 transition-colors"
                    >
                        LET'S BOOK NOW
                    </button>
                </div>
            </div>
        </div>
    );
}
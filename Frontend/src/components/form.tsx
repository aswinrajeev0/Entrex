"use client";
import { createBooking } from "@/services/booking.service";
import { ApiError } from "@/types/apiError.type";
import { useState } from "react";
import { toast } from "sonner"

type BookingFormData = {
    fullName: string;
    phone: string;
    email: string;
    date: string;
    time: string;
    adults: string;
    children: string;
    message: string;
};

type FormErrors = Partial<Record<keyof BookingFormData, string>>;

export default function BookingForm() {
    const [formData, setFormData] = useState<BookingFormData>({
        fullName: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        adults: "",
        children: "",
        message: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleReset = () => {
        setFormData({
            fullName: "",
            phone: "",
            email: "",
            date: "",
            time: "",
            adults: "",
            children: "",
            message: "",
        });
        setErrors({});
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required.";
        } else if (!/^\+?\d{7,15}$/.test(formData.phone)) {
            newErrors.phone = "Enter a valid phone number.";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email.";
        }
        if (!formData.date) newErrors.date = "Date is required.";
        if (!formData.time) newErrors.time = "Time is required.";
        if (!formData.adults) newErrors.adults = "Select number of adults.";
        if (!formData.children) newErrors.children = "Select number of children.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (validateForm()) {
            try {
                const response = await createBooking(formData);
                toast(response?.message || "Booking completed");
                handleReset();
            } catch (error: unknown) {
                const err = error as ApiError;
                toast(err.message);
            }
        }
    };

    return (
        <div className="w-full max-w-md ml-auto p-5 bg-gradient-to-br opacity-90 from-[#ED2628] to-[#F3AA45] rounded-3xl">
            <h1 className="text-white text-2xl font-bold mb-8 text-center">
                Book Your Ride Instantly
            </h1>

            <div className="space-y-4">
                {/* Name and Phone Row */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 bg-transparent border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-white/60"
                        />
                        <div className="h-[20px]">
                            {errors.fullName && (
                                <p className="text-sm text-yellow-200">{errors.fullName}</p>
                            )}
                        </div>
                    </div>
                    <div>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 bg-transparent border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-white/60"
                        />
                        <div className="h-[20px]">
                            {errors.phone && (
                                <p className="text-sm text-yellow-200">{errors.phone}</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Email */}
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-transparent border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-white/60"
                    />
                    <div className="h-[20px]">
                        {errors.email && (
                            <p className="text-sm text-yellow-200">{errors.email}</p>
                        )}
                    </div>
                </div>

                {/* Date and Time Row */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 bg-transparent border border-white/30 rounded-xl text-white focus:outline-none focus:border-white/60 appearance-none"
                        />
                        <div className="h-[20px]">
                            {errors.date && (
                                <p className="text-sm text-yellow-200">{errors.date}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 bg-transparent border border-white/30 rounded-xl text-white focus:outline-none focus:border-white/60 appearance-none"
                        />
                        <div className="h-[20px]">
                            {errors.time && (
                                <p className="text-sm text-yellow-200">{errors.time}</p>
                            )}
                        </div>
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
                            <option value="" className="text-gray-800">
                                Adults
                            </option>
                            <option value="1" className="text-gray-800">1 Adult</option>
                            <option value="2" className="text-gray-800">2 Adults</option>
                            <option value="3" className="text-gray-800">3 Adults</option>
                            <option value="4+" className="text-gray-800">4+ Adults</option>
                        </select>
                        <div className="h-[20px]">
                            {errors.adults && (
                                <p className="text-sm text-yellow-200">{errors.adults}</p>
                            )}
                        </div>
                    </div>

                    <div className="relative">
                        <select
                            name="children"
                            value={formData.children}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 bg-transparent border border-white/30 rounded-xl text-white focus:outline-none focus:border-white/60 appearance-none"
                        >
                            <option value="" className="text-gray-800">
                                Children
                            </option>
                            <option value="0" className="text-gray-800">No Children</option>
                            <option value="1" className="text-gray-800">1 Child</option>
                            <option value="2" className="text-gray-800">2 Children</option>
                            <option value="3+" className="text-gray-800">3+ Children</option>
                        </select>
                        <div className="h-[20px]">
                            {errors.children && (
                                <p className="text-sm text-yellow-200">{errors.children}</p>
                            )}
                        </div>
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
                        className="flex justify-center align-middle py-3 h-[50px] w-[174px] px-6 bg-transparent border-2 border-white text-white font-semibold text-base rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                    >
                        RESET
                    </button>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="flex justify-center align-middle py-3 h-[50px] w-[284px] px-6 bg-white text-gray-900 text-base font-semibold rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                        LET&apos;S BOOK NOW
                    </button>
                </div>
            </div>
        </div>
    );
}

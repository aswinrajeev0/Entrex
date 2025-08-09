import { ApiError } from "@/types/apiError.type";
import { BookingData } from "@/types/booking.type";
import axios, { AxiosError } from "axios";

const HOST_URL = process.env.NEXT_PUBLIC_HOST_URL || "http://localhost:5000/api"

export async function createBooking(bookingData: BookingData) {
    try {
        const response = await axios.post(`${HOST_URL}/bookings/create`, bookingData);
        return response.data
    } catch (error) {
        if (error instanceof AxiosError) {
            const apiError: ApiError = {
                message: error.response?.data?.message || "Booking failed",
                status: error.response?.status,
                data: error.response?.data
            };
            throw apiError;
        }

        throw { message: "An unexpected error occurred" } as ApiError;
    }
}

export async function fetchBookings() {
    try {
        const response = await axios.get(`${HOST_URL}/bookings/list`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            const apiError: ApiError = {
                message: error.response?.data?.message || "Booking failed",
                status: error.response?.status,
                data: error.response?.data
            };
            throw apiError;
        }

        throw { message: "An unexpected error occurred" } as ApiError;
    }
}
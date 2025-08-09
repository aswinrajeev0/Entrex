import { BookingDataResponseDto } from "../../application/dtos/bookingData.dto";
import { IBookingModel } from "../database/mogodb/model/booking.model";

export function toBookingDataResponse(booking: IBookingModel): BookingDataResponseDto {
    return {
        id: booking._id.toString(),
        fullName: booking.fullName,
        email: booking.email,
        phone: booking.phone,
        date: booking.date,
        time: booking.time,
        adults: booking.adults,
        children: booking.children,
        message: booking.message
    }
}
import { IBooking } from "../../domain/entities/booking.interface";

export interface BookingDataResponseDto
    extends Omit<IBooking, "createdAt" | "updatedAt"> {}
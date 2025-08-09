import { BookingDataResponseDto } from "../../application/dtos/bookingData.dto";
import { CreateBookingDataDto } from "../../shared/validation";

export interface IBookingUseCase {
    createBooking(bookingData: CreateBookingDataDto): Promise<BookingDataResponseDto>
    getBookings(): Promise<BookingDataResponseDto[]>;
}
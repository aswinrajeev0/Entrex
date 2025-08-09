import { inject, injectable } from "tsyringe";
import { IBookingUseCase } from "../../domain/interfaces/booking.usecase.interface";
import { CreateBookingDataDto } from "../../shared/validation";
import { BookingDataResponseDto } from "../dtos/bookingData.dto";
import { IBookingRepository } from "../../domain/interfaces/booking.repository.interface";
import { toBookingDataResponse } from "../../infrastructure/mapper/toBookingDataResponse";

@injectable()
export class BookingUseCase implements IBookingUseCase {
    constructor(
        @inject("IBookingRepository") private _bookingRepo: IBookingRepository
    ){}

    async createBooking(bookingData: CreateBookingDataDto): Promise<BookingDataResponseDto> {
        const booking = await this._bookingRepo.create(bookingData)
        return toBookingDataResponse(booking);
    }

    async getBookings(): Promise<BookingDataResponseDto[]> {
        const bookings = await this._bookingRepo.findAll();
        return bookings.map(booking => toBookingDataResponse(booking));
    }
}
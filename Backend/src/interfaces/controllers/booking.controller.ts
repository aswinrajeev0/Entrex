import { Request, Response, NextFunction } from "express";
import { IBookingController } from "../../domain/interfaces/booking.controller.interface";
import { inject, injectable } from "tsyringe";
import { CreateBookingSchema } from "../../shared/validation";
import { IBookingUseCase } from "../../domain/interfaces/booking.usecase.interface";
import { HTTP_STATUS, SUCCESS_MESSAGES } from "../../shared/constants";

@injectable()
export class BookingController implements IBookingController {
    constructor(
        @inject("IBookingUseCase") private _bookingUseCase: IBookingUseCase
    ){}

    async createBooking(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const bookingData = CreateBookingSchema.parse(req.body);
            const booking = await this._bookingUseCase.createBooking(bookingData);
            res.status(HTTP_STATUS.CREATED).json({
                success: true,
                message: SUCCESS_MESSAGES.BOOKING_SUCCESS,
                booking
            })
        } catch (error) {
            next(error)
        }
    }

    async getBookings(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const bookings = await this._bookingUseCase.getBookings();
            res.status(HTTP_STATUS.OK).json({
                success: true,
                message: SUCCESS_MESSAGES.BOOKINGS_FETCHED,
                bookings
            })
        } catch (error) {
            next(error)
        }   
    }
}
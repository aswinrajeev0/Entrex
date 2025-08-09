import { container } from "tsyringe";
import { BookingController } from "../../interfaces/controllers/booking.controller";

export const bookingController = container.resolve(BookingController)
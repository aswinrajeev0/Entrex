import { Document, model, ObjectId } from "mongoose";
import { IBooking } from "../../../../domain/entities/booking.interface";
import { bookingSchema } from "../schema/booking.schema";

export interface IBookingModel extends Omit<IBooking, "id">, Document {
    _id: ObjectId
}

export const BookingModel = model<IBookingModel>("Booking",bookingSchema)
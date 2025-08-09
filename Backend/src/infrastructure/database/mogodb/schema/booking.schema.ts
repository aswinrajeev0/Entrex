import { Schema } from "mongoose";
import { IBookingModel } from "../model/booking.model";

export const bookingSchema = new Schema<IBookingModel>({
    fullName: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true},
    date: {type: Date, required: true},
    time: {type: String, required: true},
    adults: {type: Number, required: true},
    children: {type: Number, required: true, default: 0},
    message: {type: String}
}, {
    timestamps: true
})
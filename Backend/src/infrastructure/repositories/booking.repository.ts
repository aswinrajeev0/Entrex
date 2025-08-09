import { injectable } from "tsyringe";
import { IBookingRepository } from "../../domain/interfaces/booking.repository.interface";
import { BookingModel, IBookingModel } from "../database/mogodb/model/booking.model";
import BaseRepository from "./baseRepository";

@injectable()
export class BookingRepository extends BaseRepository<IBookingModel> implements IBookingRepository {
    constructor(){
        super(BookingModel)
    }
}
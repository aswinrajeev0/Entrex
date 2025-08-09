import { IBookingModel } from "../../infrastructure/database/mogodb/model/booking.model";
import { IBaseRepository } from "./baseRepository.interface";

export interface IBookingRepository extends IBaseRepository<IBookingModel> {

}
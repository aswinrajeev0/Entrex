import { container } from "tsyringe";
import { IBookingUseCase } from "../../domain/interfaces/booking.usecase.interface";
import { BookingUseCase } from "../../application/usecases/booking.usecase";
import { IBookingRepository } from "../../domain/interfaces/booking.repository.interface";
import { BookingRepository } from "../repositories/booking.repository";

container.register<IBookingUseCase>("IBookingUseCase", {useClass: BookingUseCase})

container.register<IBookingRepository>("IBookingRepository", {useClass: BookingRepository})
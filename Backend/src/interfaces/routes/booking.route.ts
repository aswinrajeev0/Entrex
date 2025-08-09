import { bookingController } from "../../infrastructure/di/resolver";
import { BaseRoute } from "./base.route";

export class BookingRoute extends BaseRoute {
    constructor(){
        super()
    }

    protected initializeRoute(): void {
        this.router.post("/create", (req, res, next) => {
            bookingController.createBooking(req, res, next);
        })

        this.router.get("/list", (req, res, next) => {
            bookingController.getBookings(req, res, next);
        })
    }
}
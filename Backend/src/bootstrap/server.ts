import express, { Application, NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { config } from '../infrastructure/config';
import { BookingRoute } from '../interfaces/routes/booking.route';
import { errorHandler } from '../interfaces/middlewares/error.middleware';

export class Server {
    private static instance: Server;
    private _app: Application;

    private constructor() {
        this._app = express();
        this.configureMiddlewares();
        this.configureRoutes();
        this.configureErrorHandling();
    }

    public static getInstance(): Server {
        if (!Server.instance) {
            Server.instance = new Server();
        }
        return Server.instance;
    }

    private configureMiddlewares() {
        this._app.use(morgan('dev'));

        const allowedOrigins = config.cors.ALLOWED_ORIGINS.split(',').map(o => o.trim());

        this._app.use(cors({
            origin: (origin, callback) => {
                if (!origin || allowedOrigins.includes(origin)) {
                    callback(null, true);
                } else {
                    callback(new Error('Not allowed by CORS'));
                }
            },
            methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
            allowedHeaders: ['Authorization', 'Content-Type'],
            credentials: true
        }));

        this._app.use((req: Request, res: Response, next: NextFunction) => {
            express.json()(req, res, next);
        });

        this._app.use(rateLimit({
            windowMs: 15 * 60 * 1000,
            max: 1000
        }));
    }

    private configureRoutes() {
        this._app.use("/api/bookings/", new BookingRoute().router);
    }

    private configureErrorHandling() {
        this._app.use(errorHandler)
    }

    public getApp(): Application {
        return this._app;
    }
}

const app = Server.getInstance().getApp();
export default app;
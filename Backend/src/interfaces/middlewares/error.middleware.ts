import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { ERROR_MESSAGES, HTTP_STATUS } from "../../shared/constants";

export const errorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let statusCode: number = HTTP_STATUS.INTERNAL_SERVER_ERROR;
    let message: string = ERROR_MESSAGES.INTERNAL_SERVER_ERROR;
    let errors: any[] | null = null;

    if (err instanceof ZodError) {
        statusCode = HTTP_STATUS.BAD_REQUEST;
        message = ERROR_MESSAGES.VALIDATION_ERROR;
        errors = err.issues.map(error => ({
            field: error.path.join("."),
            message: error.message
        }));
    } else {
        console.error("Unhandled Error:", err)
    }
    console.error(err)
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
        errors,
    });
};

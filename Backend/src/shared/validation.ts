import z from 'zod';

export const CreateBookingSchema = z.object({
    fullName: z.string()
        .trim()
        .min(2, "Full name must be at least 2 characters long"),
    email: z.string()
        .trim()
        .email("Invalid email address"),
    phone: z.string()
        .trim()
        .min(10, "Phone number must be at least 10 digits")
        .max(15, "Phone number too long"),
    date: z.coerce.date(), // coerces "YYYY-MM-DD" into Date
    time: z.string()
        .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Invalid time format (HH:MM)"),
    adults: z.coerce.number().min(1, "At least 1 adult required"),
    children: z.coerce.number().min(0, "Cannot be negative"),
    message: z.string().trim().optional()
});

export type CreateBookingDataDto = z.infer<typeof CreateBookingSchema>;
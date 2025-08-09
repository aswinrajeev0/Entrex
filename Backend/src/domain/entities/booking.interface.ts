export interface IBooking {
    id: string;
    fullName: string;
    phone: string;
    email: string;
    date: Date;
    time: string;
    adults: number;
    children: number;
    message?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
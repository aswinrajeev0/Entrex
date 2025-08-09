'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"
import { BookingData } from "@/types/booking.type"
import { fetchBookings } from "@/services/booking.service";
import { ApiError } from "next/dist/server/api-utils";
import { toast } from "sonner";

export default function BookingTable() {

    const [bookings, setBookings] = useState<BookingData[]>([]);

    useEffect(() => {
        async function getBookings() {
            try {
                const response = await fetchBookings()
                setBookings((response?.bookings || []) as BookingData[])
            } catch (error: unknown) {
                const err = error as ApiError;
                toast(err.message);
            }
        }

        getBookings()
    },[])

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
            <div className="container mx-auto p-4 lg:p-6">
                <Card className="border-orange-200">
                    <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                        <CardTitle className="text-2xl lg:text-3xl font-bold">Bookings</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        {/* Desktop Table View */}
                        <div className="hidden lg:block overflow-x-auto">
                            <table className="w-full border-collapse bg-white">
                                <thead>
                                    <tr className="bg-orange-100 border-b-2 border-orange-200">
                                        <th className="text-left p-4 font-semibold text-orange-900">Name</th>
                                        <th className="text-left p-4 font-semibold text-orange-900">Contact</th>
                                        <th className="text-left p-4 font-semibold text-orange-900">Date & Time</th>
                                        <th className="text-left p-4 font-semibold text-orange-900">Party Size</th>
                                        <th className="text-left p-4 font-semibold text-orange-900">Message</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bookings.map((booking, index) => (
                                        <tr key={index} className="border-b border-orange-100 hover:bg-orange-50 transition-colors">
                                            <td className="p-4">
                                                <div className="font-medium text-gray-900">{booking.fullName}</div>
                                            </td>
                                            <td className="p-4">
                                                <div className="space-y-1">
                                                    <div className="text-sm text-gray-900">{booking.phone}</div>
                                                    <div className="text-sm text-gray-600">{booking.email}</div>
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <div className="space-y-1">
                                                    <div className="font-medium text-gray-900">
                                                        {new Date(booking.date).toLocaleDateString("en-US", {
                                                            weekday: "short",
                                                            year: "numeric",
                                                            month: "short",
                                                            day: "numeric",
                                                        })}
                                                    </div>
                                                    <div className="text-sm text-gray-600">{booking.time}</div>
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <div className="flex gap-2">
                                                    <Badge className="bg-orange-500 hover:bg-orange-600 text-white text-xs">
                                                        {booking.adults} Adults
                                                    </Badge>
                                                    {Number.parseInt(booking.children) > 0 && (
                                                        <Badge variant="outline" className="border-red-300 text-red-600 text-xs">
                                                            {booking.children} Children
                                                        </Badge>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                {booking.message ? (
                                                    <div className="text-sm text-gray-600 max-w-xs truncate" title={booking.message}>
                                                        {booking.message}
                                                    </div>
                                                ) : (
                                                    <span className="text-gray-400 text-sm">No message</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile Card View */}
                        <div className="lg:hidden">
                            {bookings.map((booking, index) => (
                                <div key={index} className="bg-white border-b-4 border-orange-200 p-4 m-4 rounded-lg shadow-md">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="font-bold text-lg text-gray-900">{booking.fullName}</h3>
                                        <div className="flex gap-1">
                                            <Badge className="bg-orange-500 hover:bg-orange-600 text-white text-xs">{booking.adults}A</Badge>
                                            {Number.parseInt(booking.children) > 0 && (
                                                <Badge variant="outline" className="border-red-300 text-red-600 text-xs">
                                                    {booking.children}C
                                                </Badge>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                                        <div>
                                            <div className="text-xs font-semibold text-orange-600 uppercase tracking-wide">Date & Time</div>
                                            <div className="font-medium text-gray-900">
                                                {new Date(booking.date).toLocaleDateString("en-US", {
                                                    month: "short",
                                                    day: "numeric",
                                                    year: "numeric",
                                                })}
                                            </div>
                                            <div className="text-sm text-gray-600">{booking.time}</div>
                                        </div>

                                        <div>
                                            <div className="text-xs font-semibold text-orange-600 uppercase tracking-wide">Contact</div>
                                            <div className="text-sm text-gray-900">{booking.phone}</div>
                                            <div className="text-sm text-gray-600 truncate">{booking.email}</div>
                                        </div>
                                    </div>

                                    {booking.message && (
                                        <div>
                                            <div className="text-xs font-semibold text-orange-600 uppercase tracking-wide mb-1">
                                                Special Requests
                                            </div>
                                            <div className="text-sm text-gray-600 bg-orange-50 p-2 rounded border-l-4 border-orange-300">
                                                {booking.message}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {bookings.length === 0 && (
                            <div className="text-center py-12 bg-white">
                                <div className="text-orange-300 mb-2">
                                    <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 114 0 2 2 0 01-4 0zm6 0a2 2 0 114 0 2 2 0 01-4 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <p className="text-gray-500 text-lg">No bookings found</p>
                                <p className="text-gray-400 text-sm">New reservations will appear here</p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

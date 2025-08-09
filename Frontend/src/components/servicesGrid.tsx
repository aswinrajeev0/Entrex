export default function ServicesGrid() {
    return (
            <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg p-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Corporate Mobility Solutions */}
                        <div>
                            <h3 className="text-xl font-bold text-blue-900 mb-8">
                                Corporate Mobility Solutions
                            </h3>
                            <ul className="space-y-4">
                                <li className="text-gray-600 text-base">Employee Transportation</li>
                                <li className="text-gray-600 text-base">Employee Trips</li>
                                <li className="text-gray-600 text-base">Executive Leasing</li>
                                <li className="text-gray-600 text-base">Roster Planning & Routing</li>
                                <li className="text-gray-600 text-base">Management Reporting</li>
                                <li className="text-gray-600 text-base">Systemized Billing</li>
                                <li className="text-gray-600 text-base">Transport Desk & Ticketing</li>
                            </ul>
                        </div>

                        {/* Event & Custom Travel */}
                        <div>
                            <h3 className="text-xl font-bold text-blue-900 mb-8">
                                Event & Custom Travel
                            </h3>
                            <ul className="space-y-4">
                                <li className="text-gray-600 text-base">Events & Seminars</li>
                                <li className="text-gray-600 text-base">Elite Weddings</li>
                                <li className="text-gray-600 text-base">Family Events & Holidays</li>
                                <li className="text-gray-600 text-base">Customized Tours</li>
                            </ul>
                        </div>

                        {/* Tour & Rental Services */}
                        <div>
                            <h3 className="text-xl font-bold text-blue-900 mb-8">
                                Tour & Rental Services
                            </h3>
                            <ul className="space-y-4">
                                <li className="text-gray-600 text-base">Pilgrim Tours</li>
                                <li className="text-gray-600 text-base">Package Tours</li>
                                <li className="text-gray-600 text-base">Premium Rent-a-Cab</li>
                                <li className="text-gray-600 text-base">Ticketing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    );
}
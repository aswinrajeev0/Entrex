const listing = {
    sellerId: {type: ObjectId, ref: "User", required: true},
    deviceModelId: {type: ObjectId, ref: "DeviceModel", required: true},
    imei: {type: String},
    ageInMonths: {type: Number, required: true},
    condition: {type: String, enum: ["new_like", "good", "fair", "poor"]},
    problemTags: {type: [String]},
    photos: {type: [String], required: true},
    initialAnswers: {
        battery_health: {type: String},
        power_on: {type: Boolean}
    },
    status: {type: String, enum: ["requested", "quoted", "accepted", "picked_up", "inspected", "paid", "cancelled"]},
    currentQuoteId: {type: ObjectId, ref: "Quote", required: true},
    preferredPickupAddressId: {type: ObjectId, ref: "Address", required: true},
    softDeleted: {type: Boolean, required: true, default: false}
}
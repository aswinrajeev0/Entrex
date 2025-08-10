const inventory = {
    deviceModelId: {type: ObjectId, ref: "DeviceModel", required: true},
    originOrderId: {type: ObjectId, ref: "Order", required: true},
    condition: {type: String, required: true},
    refurbishStatus: {type: String, enum: ["unprocessed", "refurb_in_progress", "refurbished", "scrapped"]},
    location: {type: String},
    photos: {type: [String], required: true},
    listedForSale: {type: Boolean, required: true, default: false},
    resaleListingId: {type: ObjectId, ref: "Listing"},
    costPrice: {type: Number, required: true},
    expectedResalePrice: {type: Number, required: true},
    timestamps: true
}

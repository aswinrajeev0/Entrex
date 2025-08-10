const order = {
    listingId: {type: ObjectId, ref: "Listing", required: true},
    sellerId: {type: ObjectId, ref: "User", required: true},
    buyerId: {type: ObjectId, ref: "User", required: true},
    quoteId: {type: ObjectId, ref: "Quote", required: true},
    finalPrice: {type: Number, required: true},
    currency: {type: String, required: true},
    offerId: {type: ObjectId, ref: "Offer", required: true},
    status: {type: String, enum: ["initiated", "pickup_scheduled", "in_transit", "inspected", "completed", "cancelled", "returned"]},
    shipment: {
        courier: {type: String},
        trackingNumber: {type: String}
    },
    paymentId: {type: ObjectId, ref: "Payment", required: true},
}
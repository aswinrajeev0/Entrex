const quote = {
    listingId: {type: ObjectId, ref: "Listing", required: true},
    quotedBy: {type: ObjectId, ref: "Quote", required: true},
    price: {type: Number, required: true},
    currency: {type: String, required: true},
    breakdown: { basePrice: {type: Number, required: true}, deductions: [{ reason: {type: String}, amount: {type: Number} }] },
    validUntil: {type: Date, required: true},
    status: {type: String, enum: ["pending", "accepted", "expired", "withdrawn"]},
    timestamps: true
}

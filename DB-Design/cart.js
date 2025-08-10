const cart = {
    id: { type: ObjectId, required: true },
    userId: { type: ObjectId, ref: "User", required: true },
    items: [{ listing: { type: ObjectId, ref: "Listing" }, quantity: { type: Number, required: true }, addedOn: { type: Date } }],
    totalAmount: { type: Number, required: true, default: 0 },
    timestamps: true
}
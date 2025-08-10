const payment = {
    orderId: { type: ObjectId, ref: "Order", required: true },
    userId: { type: ObjectId, ref: "User", required: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    paymentMethod: { type: String, enum: ["wallet", "online", "bank_transfer"] },
    transactionId: { type: String },
    status: { type: String, enum: ["initiated", "captured", "failed", "completed", "refunded"] },
    refund: { amount: { type: Number }, date: { type: Date }, reason: { type: String } }
}

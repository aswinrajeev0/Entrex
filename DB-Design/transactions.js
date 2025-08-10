const transaction = {
    walletId: {type: ObjectId, ref: "Wallet", required: true},
    amount: {type: Number, required: true},
    currency: {type: String, required: true},
    type: {type: String, enum: ["purchase", "topup", "withdrawal", "refund"]},
    date: {type: Date, required: true, default: Date.now()},
    description: {type: String}
}
const offer = {
    code: {type: String, required: true},
    type: {type: String, enum: ["fixed", "percentage"], required: true},
    value: {type: Number, required: true},
    minAmount: {type: Number, required: true},
    expiresAt: {type: Date, required: true},
    usageCount: {type: Number, required: true},
    maxUsage: {type: Number, required: true},
    createdBy: {type: ObjectId, ref: "User", required: true}
}
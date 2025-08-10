const user = {
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone: {type: String, required: true, unique: true},
    passwordHash: {type: String, required: true},
    roles: {type: String, enum: ["seller", "buyer", "admin"]},
    verified: {type: Boolean, required: true, default: false},
    profileImageUrl: {type: [String], required: true},
    addresses: [{type: ObjectId, ref: "Address"}],
    timestamps: true
}

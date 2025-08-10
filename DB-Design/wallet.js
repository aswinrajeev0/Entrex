const wallet = {
    userId: {type: String, ref: "User", required: true},
    balance: {type: Number, required: true, default: 0}
}
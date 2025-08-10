const DeviceModel = {
    manufacturer: { type: String, required: true },
    modelName: { type: String, required: true },
    category: { type: String, required: true },
    specs: {
        ram: { type: String },
        storage: { type: String },
        color: { type: String }
    },
    images: { type: [String], required: true }
}
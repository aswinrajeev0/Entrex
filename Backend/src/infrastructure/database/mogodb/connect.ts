import mongoose from "mongoose";
import { config } from "../../config";

export async function connectDB() {
    try {
        console.log(config.database.DB_URL)
        await mongoose.connect(config.database.DB_URL);
        console.log("✅ DB connected");
    } catch (error) {
        console.error("❌ DB connection error:", error);

        await mongoose.connection.close().catch(err => {
            console.error("⚠️ Error closing DB connection:", err);
        });

        process.exit(1);
    }
}

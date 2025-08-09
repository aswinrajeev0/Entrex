import "reflect-metadata"
import "./infrastructure/di/registry"
import dotenv from 'dotenv'
dotenv.config()
import app from './bootstrap/server';
import { config } from './infrastructure/config';
import { connectDB } from './infrastructure/database/mogodb/connect';

const PORT = config.server.PORT || 5000;

connectDB()

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
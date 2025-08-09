export const config = {
    cors: {
        ALLOWED_ORIGINS: process.env.CORS_ALLOWED_ORIGIN || "http://localhost:3000"
    },

    database: {
        DB_URL: process.env.DB_URL || ""
    },

    server: {
        PORT: process.env.PORT
    }
}
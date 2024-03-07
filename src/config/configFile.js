import "dotenv/config.js";

export const configration = {
    port: process.env.APP_PORT,
    host: process.env.APP_HOST,
    db: process.env.APP_DB,
    secret_key: process.env.JWT_SECRET_KEY
}
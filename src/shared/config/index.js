import "dotenv/config"


const config = {
    port: process.env.APP_PORT || 5769,
    host: process.env.APP_HOST || "localhost",
    db: process.env.DATABASE ,
    jwt: {
        secret: process.env.JWT_SECRET || "world"
    }
}

export default config;
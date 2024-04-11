import "dotenv/config"


const config = {
    port: process.env.APP_PORT || 5769,
    host: process.env.APP_HOST || "localhost",
    db: process.env.DATABASE 
}

export default config;
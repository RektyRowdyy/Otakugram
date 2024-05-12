import dotenv from "dotenv"
import connectDB from "./db/index.mjs"

dotenv.config({
    path: './env'
})

connectDB()
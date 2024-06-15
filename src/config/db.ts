import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        const MONGO_URI: string = process.env.MONGO_URI || ''
        mongoose.connect(MONGO_URI)
        .then(() => {
            console.log(`successfully connected with mongodb`);
        })
    } catch (error) {
        console.log(`something went wrong during connecting with db`);
        process.exit(1)
    }
}
import mongoose, { Mongoose } from "mongoose"

const MONGODB_URL = process.env.MONGODB_URL

interface MongooseConnection {
    conn: Mongoose | null
    promise: Promise<Mongoose> | null
}

let cached: MongooseConnection = (global as any).mongoose

if (!cached) {
    cached = (global as any).mongoose = {
        conn: null, promise: null
    }
}

export const connectToDatabase = async () => {
    if (cached.conn) return cached.conn

    if (!MONGODB_URL) throw new Error("Missing MONGODB_URL")

    cached.promise = cached.promise || mongoose.connect(MONGODB_URL, { dbName: "imaginify", bufferCommands: false })

    cached.conn = await cached.promise

    return cached.conn
}

// Function to check MongoDB connection status
export const checkMongoDBConnection = async () => {
    try {
        await connectToDatabase();
        const state = mongoose.connection.readyState;

        switch (state) {
            case 0:
                return { status: 'disconnected', message: 'MongoDB is disconnected' };
            case 1:
                return { status: 'connected', message: 'MongoDB is connected successfully' };
            case 2:
                return { status: 'connecting', message: 'MongoDB is connecting' };
            case 3:
                return { status: 'disconnecting', message: 'MongoDB is disconnecting' };
            default:
                return { status: 'unknown', message: 'Unknown connection state' };
        }
    } catch (error) {
        return { status: 'error', message: `Connection error: ${error}` };
    }
}
import { NextResponse } from "next/server";
import { checkMongoDBConnection } from "@/lib/database/mongoose";

export async function GET() {
    try {
        const connectionStatus = await checkMongoDBConnection();
        return NextResponse.json(connectionStatus);
    } catch {
        return NextResponse.json(
            { status: 'error', message: 'Failed to check MongoDB connection' },
            { status: 500 }
        )
    }
} 
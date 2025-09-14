import { NextResponse } from "next/server";
import { PrismaClient as MongoClient } from "@/generated/mongo";
import { CreateMedicalHistoryDto, ApiResponse, MedicalHistory } from "@/types/medical";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";

const mongo = new MongoClient();

export async function POST(req: Request) {
    try {
        const session = await getServerSession(NEXT_AUTH_CONFIG);
        const userId = session?.user.id;
        const body: CreateMedicalHistoryDto = await req.json();

        const historyRaw = await mongo.medicalHistory.create({
            data: {
                userId: body.userId,
                diseases: body.diseases ?? [],
                allergies: body.allergies ?? [],
                meds: body.meds ?? [],
                extraInfo: body.extraInfo ?? {},
            },
        });

        const history: MedicalHistory = {
            ...historyRaw,
            extraInfo: historyRaw.extraInfo === null ? undefined : historyRaw.extraInfo as Record<string, any>,
        };

        const response: ApiResponse<MedicalHistory> = {
            success: true,
            data: history,
        };

        return NextResponse.json(response, { status: 201 });
    } catch (err: any) {
        const response: ApiResponse<null> = {
            success: false,
            error: err.message,
        };
        return NextResponse.json(response, { status: 500 });
    }
}

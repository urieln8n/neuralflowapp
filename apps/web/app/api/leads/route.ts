import { prisma } from "../../../../../packages/database/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "¡Backend listo y en la ruta correcta!" });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const lead = await prisma.lead.create({
      data: {
        name: body.name,
        email: body.email,
        message: body.message,
        source: body.source || "web_test",
      },
    });
    return NextResponse.json({ success: true, lead }, { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Error al guardar en base de datos" }, { status: 500 });
  }
}
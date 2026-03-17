import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: { id: "desc" },
      take: 100,
    });

    return NextResponse.json(leads);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "No se pudieron cargar los leads" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const newLead = await prisma.lead.create({
      data: {
        company: data.company,
        industry: data.industry,
        phone: data.phone,
        email: data.email,
        website: data.website,
        score: data.score || 0,
        status: data.status || "Nuevo",
      },
    });

    return NextResponse.json(newLead);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "No se pudo crear el lead" }, { status: 500 });
  }
}
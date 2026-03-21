// /app/api/ai/hooks/route.ts
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Simulamos una base de datos de límites (en producción usarías Supabase o Prisma)
let freeUsesRemaining = 3; 

export async function POST(req: Request) {
  try {
    const { niche } = await req.json();

    // 1. Verificación de límite (Paywall)
    if (freeUsesRemaining <= 0) {
      return NextResponse.json(
        { 
          error: "Límite alcanzado", 
          message: "Has agotado tus 3 misiones gratuitas. ¡Pásate a PRO para acceso ilimitado!",
          isPaywall: true 
        }, 
        { status: 402 } // Payment Required
      );
    }

    // 2. Llamada a OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { 
          role: "system", 
          content: "Eres un experto en TikTok. Genera 3 hooks virales cortos y potentes." 
        },
        { role: "user", content: `Nicho: ${niche}` }
      ],
    });

    // 3. Restar un uso
    freeUsesRemaining--;

    return NextResponse.json({ 
      hooks: completion.choices[0].message.content,
      remaining: freeUsesRemaining 
    });

  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: "Error de servidor" }, { status: 500 });
  }
}
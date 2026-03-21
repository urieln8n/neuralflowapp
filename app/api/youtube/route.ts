import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q") || "viral trends 2024";

  if (!process.env.YOUTUBE_API_KEY) {
    return NextResponse.json({ error: "Missing API Key" }, { status: 500 });
  }

  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=9&q=${encodeURIComponent(
        query
      )}&key=${process.env.YOUTUBE_API_KEY}`
    );

    const data = await res.json();

    if (data.error) {
      throw new Error(data.error.message);
    }

    // Filtramos para asegurar que solo pasen objetos con videoId
    const videos = data.items?.filter((item: any) => item.id.videoId) || [];
    
    return NextResponse.json(videos);
  } catch (error: any) {
    console.error("YOUTUBE_API_ERROR:", error.message);
    return NextResponse.json({ error: "Error fetching videos" }, { status: 500 });
  }
}
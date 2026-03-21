// app/lib/searchVideos.ts
export default async function searchVideos(query: string) {
  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
  if (!API_KEY) throw new Error("YouTube API Key not found")

  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
      query
    )}&maxResults=6&type=video&key=${API_KEY}`
  )
  const data = await res.json()

  return data.items.map((item: any) => ({
    id: item.id.videoId,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.high.url,
    url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
  }))
}
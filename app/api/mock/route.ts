export async function GET() {
  return new Response(JSON.stringify({ result: "Mock funcionando" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
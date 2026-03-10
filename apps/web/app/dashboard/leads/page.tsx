import { prisma } from "../../../../../packages/database/client";

export default async function LeadsPage() {
  // Obtenemos los datos de la tabla 'plomo'
  const leads = await (prisma as any).plomo.findMany({
    orderBy: {
      "creado en": "desc",
    },
  });

  return (
    <div style={{ padding: "40px", backgroundColor: "#000", minHeight: "100vh", color: "#fff", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <header style={{ marginBottom: "30px", borderBottom: "1px solid #333", paddingBottom: "20px" }}>
          <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>CRM de Leads</h1>
          <p style={{ color: "#888" }}>Clientes capturados automáticamente por el chatbot IA</p>
        </header>

        <div style={{ display: "grid", gap: "15px" }}>
          {leads.length === 0 ? (
            <div style={{ padding: "40px", textAlign: "center", border: "1px dashed #444", borderRadius: "12px" }}>
              <p style={{ color: "#666" }}>Esperando el primer lead desde el chat...</p>
            </div>
          ) : (
            leads.map((item: any) => (
              <div key={item.id} style={{ border: "1px solid #222", padding: "24px", borderRadius: "12px", backgroundColor: "#0a0a0a", display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <strong style={{ color: "#00d4ff", fontSize: "20px" }}>{item.nombre}</strong>
                  <span style={{ fontSize: "12px", backgroundColor: "#1a1a1a", color: "#00d4ff", padding: "4px 10px", borderRadius: "20px", border: "1px solid #00d4ff33" }}>
                    {item.fuente || "Chat"}
                  </span>
                </div>
                
                <div style={{ display: "flex", gap: "20px", color: "#ccc", fontSize: "14px" }}>
                  <span>📧 {item["correo electrónico"] || "Sin email"}</span>
                  {item.telefono && <span>📞 {item.telefono}</span>}
                </div>

                <div style={{ marginTop: "10px", padding: "12px", backgroundColor: "#111", borderRadius: "8px", borderLeft: "4px solid #00d4ff", color: "#eee" }}>
                  {item.mensaje || "Sin mensaje adicional."}
                </div>

                <div style={{ marginTop: "5px", fontSize: "12px", color: "#555", textAlign: "right" }}>
                  📅 {new Date(item["creado en"]).toLocaleString()}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
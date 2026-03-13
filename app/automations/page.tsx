"use client"

import { motion } from "framer-motion"

const neuralAutomations = [
  {
    title: "Protocolo Centinela",
    tag: "SEGURIDAD & FILTRO",
    desc: "IA que detecta leads de alta intención y descarta curiosos automáticamente.",
    gradient: "linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)",
    icon: "💠"
  },
  {
    title: "Nexo de Conversión",
    tag: "VENTAS 24/7",
    desc: "Cierra citas directamente en tu calendario analizando la urgencia del cliente.",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    icon: "♾️"
  },
  {
    title: "Pulso Viral",
    tag: "MARKETING IA",
    desc: "Redacta respuestas personalizadas basadas en el sentimiento del usuario.",
    gradient: "linear-gradient(135deg, #ff0844 0%, #ffb199 100%)",
    icon: "🌌"
  }
]

export default function NeuralAutomations() {
  return (
    <div style={{ 
      minHeight: "100vh", 
      backgroundColor: "#000", 
      padding: "80px 40px",
      color: "#fff",
      fontFamily: "'Inter', sans-serif"
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        <header style={{ marginBottom: "80px" }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}
          >
            <div style={{ width: "40px", height: "2px", background: "#00d4ff" }} />
            <span style={{ color: "#00d4ff", letterSpacing: "4px", fontSize: "12px", fontWeight: "bold" }}>MARCA PERSONAL</span>
          </motion.div>
          <h1 style={{ fontSize: "56px", fontWeight: "900", lineHeight: "1" }}>
            Ecosistema de <br/>
            <span style={{ color: "transparent", WebkitTextStroke: "1px #fff" }}>Automatizaciones</span>
          </h1>
        </header>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "40px" }}>
          {neuralAutomations.map((item, i) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              style={{
                position: "relative",
                padding: "40px",
                borderRadius: "32px",
                background: "rgba(255,255,255,0.01)",
                border: "1px solid rgba(255,255,255,0.05)",
                overflow: "hidden",
                cursor: "pointer"
              }}
            >
              {/* Círculo de Luz de Fondo */}
              <div style={{ 
                position: "absolute", top: "-20%", right: "-20%", width: "200px", height: "200px", 
                background: item.gradient, filter: "blur(100px)", opacity: 0.15 
              }} />

              <div style={{ fontSize: "32px", marginBottom: "20px" }}>{item.icon}</div>
              <div style={{ fontSize: "10px", color: "#666", fontWeight: "bold", marginBottom: "10px" }}>{item.tag}</div>
              <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>{item.title}</h2>
              <p style={{ color: "#888", fontSize: "15px", lineHeight: "1.6", marginBottom: "30px" }}>{item.desc}</p>
              
              <div style={{ 
                height: "1px", width: "100%", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                marginBottom: "20px"
              }} />

              <button style={{
                background: "transparent",
                border: "none",
                color: "#fff",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer"
              }}>
                DESPLEGAR NÚCLEO <span style={{ color: "#00d4ff" }}>→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
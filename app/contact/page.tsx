"use client"

import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <div style={{ 
      minHeight: "100vh", 
      backgroundColor: "#030303", 
      color: "#fff", 
      padding: "100px 20px",
      fontFamily: "sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          width: "100%",
          maxWidth: "600px",
          background: "rgba(255, 255, 255, 0.02)",
          backdropFilter: "blur(15px)",
          border: "1px solid rgba(0, 212, 255, 0.2)",
          padding: "50px",
          borderRadius: "30px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
        }}
      >
        <h1 style={{ fontSize: "36px", fontWeight: "800", marginBottom: "10px", textAlign: "center" }}>
          ¿Listo para <span style={{ color: "#00d4ff" }}>NeuralFlow</span>?
        </h1>
        <p style={{ color: "#666", textAlign: "center", marginBottom: "40px" }}>
          Déjanos un mensaje y nuestro equipo de IA se pondrá en contacto contigo.
        </p>

        <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={inputContainer}>
            <label style={labelStyle}>Nombre</label>
            <input type="text" placeholder="Tu nombre" style={inputStyle} />
          </div>

          <div style={inputContainer}>
            <label style={labelStyle}>Email</label>
            <input type="email" placeholder="nombre@empresa.com" style={inputStyle} />
          </div>

          <div style={inputContainer}>
            <label style={labelStyle}>Mensaje</label>
            <textarea placeholder="¿En qué podemos ayudarte?" style={{ ...inputStyle, minHeight: "120px", resize: "none" }} />
          </div>

          <motion.button 
            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 212, 255, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            style={{
              marginTop: "10px",
              padding: "16px",
              borderRadius: "15px",
              border: "none",
              background: "linear-gradient(90deg, #00d4ff 0%, #0055ff 100%)",
              color: "#000",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            Enviar Mensaje
          </motion.button>
        </form>
      </motion.div>

      <div style={{ marginTop: "40px", color: "#444", fontSize: "14px" }}>
        Ecosistema NeuralFlow • Soporte Prioritario
      </div>
    </div>
  )
}

// Estilos Reutilizables
const inputContainer = { display: "flex", flexDirection: "column" as const, gap: "8px" };
const labelStyle = { fontSize: "12px", color: "#00d4ff", fontWeight: "bold", textTransform: "uppercase" as const, letterSpacing: "1px" };
const inputStyle = {
  padding: "14px",
  backgroundColor: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "12px",
  color: "#fff",
  outline: "none",
  transition: "0.3s"
};

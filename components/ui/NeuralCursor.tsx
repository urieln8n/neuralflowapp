"use client";
import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function NeuralCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  // Configuración de Spring para que el movimiento sea suave, orgánico y con inercia elegante.
  // stiffness: Rigidez (cuanto más alto, más rápido reacciona).
  // damping: Amortiguación (cuanto más alto, menos "rebote").
  const springX = useSpring(0, { stiffness: 120, damping: 28 });
  const springY = useSpring(0, { stiffness: 120, damping: 28 });

  useEffect(() => {
    // Captura las coordenadas del ratón en tiempo real
    const handleMouseMove = (e: MouseEvent) => {
      springX.set(e.clientX);
      springY.set(e.clientY);
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    // Escucha el movimiento del ratón globalmente
    window.addEventListener("mousemove", handleMouseMove);

    // Limpieza del listener al desmontar el componente
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [springX, springY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
      style={{
        // Gradiente radial dinámico que sigue al ratón y crea la iluminación "por debajo" del contenido
        background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(168,85,247,0.1), transparent 75%)`,
      }}
    >
      {/* El "Punto de Fusión" visible justo en la punta del cursor */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute -left-3 -top-3 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 blur-[2.5px] opacity-60 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
      />
    </motion.div>
  );
}
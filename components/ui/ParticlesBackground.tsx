  "use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

type Particle = { x: number; y: number; size: number; color: string }

export default function ParticlesBackground() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const temp: Particle[] = []
    const colors = ["#00f5ff", "#a855f7", "#10b981", "#f97316"]
    for (let i = 0; i < 15; i++) {
      temp.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 50 + Math.random() * 120,
        color: colors[i % colors.length],
      })
    }
    setParticles(temp)
  }, [])

  return (
    <>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none opacity-20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            filter: "blur(80px)",
            zIndex: 0,
          }}
          animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
          transition={{ duration: 8 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
        />
      ))}
    </>
  )
}
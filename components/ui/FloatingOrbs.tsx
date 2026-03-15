"use client"

import { useCallback } from "react";
import { loadFull } from "tsparticles";
import { Particles } from "react-tsparticles";

export default function FloatingOrbs() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        background: { color: "#000" },
        fpsLimit: 60,
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
          modes: { repulse: { distance: 100 } }
        },
        particles: {
          color: { value: ["#00f2fe", "#4facfe", "#ff0844", "#ffb199"] },
          links: { enable: true, color: "#00d4ff", distance: 150 },
          collisions: { enable: false },
          move: { enable: true, speed: 1 },
          number: { value: 50 },
          opacity: { value: 0.3 },
          shape: { type: "circle" },
          size: { value: { min: 2, max: 6 } }
        }
      }}
    />
  );
}
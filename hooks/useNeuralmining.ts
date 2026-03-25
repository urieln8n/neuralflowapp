"use client";

import { useState, useEffect } from 'react';
// Asegúrate de que el archivo se llame useBoosters.ts exactamente
import { useBooster } from './useBoosters'; 

export const useNeuralMining = () => {
  // Extraemos el multiplicador del hook de boosters
  const { multiplier } = useBooster();
  
  const [isMining, setIsMining] = useState(false);
  const [hashRate, setHashRate] = useState(0);
  const [totalMined, setTotalMined] = useState(0);

  // 1. Cargar el progreso guardado al iniciar (Persistencia)
  useEffect(() => {
    const saved = localStorage.getItem('neural_total_mined');
    if (saved) {
      setTotalMined(parseFloat(saved));
    }
  }, []);

  // 2. Lógica del motor de minado
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isMining) {
      interval = setInterval(() => {
        // Cálculo de ganancia base (ajustada para 100M de usuarios)
        const baseGain = (Math.random() * 0.0001) + 0.00005;
        
        // Aplicación del multiplicador institucional de useBooster
        const realGain = baseGain * multiplier;

        setTotalMined((prev) => {
          const nuevoTotal = prev + realGain;
          // Guardado persistente para que no se pierda al refrescar
          localStorage.setItem('neural_total_mined', nuevoTotal.toString());
          return nuevoTotal;
        });

        // Simulación visual de Hashrate (potencia de red)
        // Se ve afectado por el multiplicador para dar feedback visual de poder
        const visualHash = Math.floor(Math.random() * (980 - 820) + 820);
        setHashRate(visualHash * multiplier);

      }, 1000); // Pulso cada segundo
    } else {
      setHashRate(0);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isMining, multiplier]);

  return {
    isMining,
    setIsMining,
    hashRate,
    totalMined,
    multiplier // Lo devolvemos por si quieres mostrarlo en la UI del laboratorio
  };
};
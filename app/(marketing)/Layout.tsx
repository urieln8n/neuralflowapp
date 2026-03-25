"use client";

import { useState, useEffect, useCallback, useMemo } from "react";

// Estructura de Datos de Grado Institucional
interface EconomyState {
  tokens: number;    // Balance de $FLOW
  energy: number;    // % de Energía (0-100)
  lastSync: number;  // Timestamp para persistencia
}

export const useEconomy = () => {
  // Estados con valores iniciales seguros
  const [tokens, setTokens] = useState<number>(0);
  const [energy, setEnergy] = useState<number>(100);
  const [isLoaded, setIsLoaded] = useState(false);

  // 1. CARGA INICIAL (Persistencia Local de Alta Disponibilidad)
  useEffect(() => {
    const savedData = localStorage.getItem("nf_economy_v2");
    if (savedData) {
      try {
        const parsed: EconomyState = JSON.parse(savedData);
        setTokens(Number(parsed.tokens) || 0);
        setEnergy(Number(parsed.energy) || 0);
      } catch (e) {
        console.error("ERROR_ECONOMY_LOAD: Fallo en la recuperación de datos.");
      }
    }
    setIsLoaded(true);
  }, []);

  // 2. GUARDADO AUTOMÁTICO (Blindaje de Datos)
  useEffect(() => {
    if (isLoaded) {
      const state: EconomyState = {
        tokens,
        energy,
        lastSync: Date.now(),
      };
      localStorage.setItem("nf_economy_v2", JSON.stringify(state));
    }
  }, [tokens, energy, isLoaded]);

  // 3. PRODUCCIÓN NEURAL (Añadir $FLOW)
  const addFlow = useCallback((amount: number) => {
    if (amount <= 0) return;

    setEnergy((currentEnergy) => {
      // Si el sistema no tiene energía, la producción se bloquea (Sostenibilidad)
      if (currentEnergy <= 0) return 0;

      setTokens((prev) => {
        const next = prev + amount;
        return parseFloat(next.toFixed(6)); // Precisión de 6 decimales
      });

      // Consumo pasivo por cada ciclo de producción
      const energyConsumption = 0.005; 
      return Math.max(0, currentEnergy - energyConsumption);
    });
  }, []);

  // 4. GASTAR TOKENS (Quema de $FLOW para compras/recargas)
  const spendFlow = useCallback((amount: number): boolean => {
    let success = false;
    setTokens((prev) => {
      if (prev >= amount) {
        success = true;
        return parseFloat((prev - amount).toFixed(6));
      }
      return prev;
    });
    return success;
  }, []);

  // 5. GASTAR ENERGÍA (Penalización por fallos en Academia)
  const spendEnergy = useCallback((amount: number) => {
    setEnergy((prev) => {
      const nextEnergy = Math.max(0, prev - amount);
      console.log(`ENERGY_DRAIN: -${amount}%. Nivel actual: ${nextEnergy.toFixed(1)}%`);
      return nextEnergy;
    });
  }, []);

  // 6. RECARGA DE PROTOCOLO (Utilidad del Token)
  const rechargeEnergy = useCallback(() => {
    const COSTO_RECARGA = 5.0; // Costo institucional de 5 $FLOW
    
    setTokens((prev) => {
      if (prev >= COSTO_RECARGA) {
        setEnergy(100);
        console.log("PROTOCOL_RECHARGE_SUCCESS: Energía restablecida.");
        return parseFloat((prev - COSTO_RECARGA).toFixed(6));
      } else {
        console.warn("PROTOCOL_RECHARGE_FAILED: Saldo insuficiente.");
        return prev;
      }
    });
  }, []);

  // 7. HELPERS DE ESTADO
  const isOperational = useMemo(() => energy > 0, [energy]);

  return {
    tokens,
    energy,
    isOperational,
    addFlow,
    spendFlow,
    spendEnergy, // Nueva función blindada para la Academia
    rechargeEnergy,
    isLoaded
  };
};
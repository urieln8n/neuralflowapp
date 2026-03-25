"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";

interface EconomyState {
  tokens: number;
  energy: number;
  lastSync: number;
}

export const useEconomy = () => {
  const [tokens, setTokens] = useState<number>(0);
  const [energy, setEnergy] = useState<number>(100);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Ref para evitar bucles de efecto en sistemas de alta frecuencia (Laboratorio)
  const isSyncing = useRef(false);

  // 1. CARGA INICIAL (Persistencia Local de Alta Disponibilidad)
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const savedData = localStorage.getItem("nf_economy_v2");
    if (savedData) {
      try {
        const parsed: EconomyState = JSON.parse(savedData);
        // Validamos que los datos sean números finitos para evitar el error "NaN"
        setTokens(isFinite(parsed.tokens) ? parsed.tokens : 0);
        setEnergy(isFinite(parsed.energy) ? parsed.energy : 100);
      } catch (e) {
        console.error("ERROR_ECONOMY_LOAD: Reseteando a valores seguros.");
      }
    }
    setIsLoaded(true);
  }, []);

  // 2. GUARDADO AUTOMÁTICO (Blindaje contra cierres de pestaña)
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

  // 3. PRODUCCIÓN NEURAL (Mejorado: Mayor precisión y protección)
  const addFlow = useCallback((amount: number) => {
    if (amount <= 0 || isSyncing.current) return;

    setEnergy((currentEnergy) => {
      // Bloqueo de producción si no hay energía
      if (currentEnergy <= 0) return 0;

      setTokens((prev) => {
        const next = prev + amount;
        return Number(next.toFixed(6)); // Garantizamos tipo Number
      });

      const consumption = 0.005; // Ajuste de consumo pasivo
      return Math.max(0, Number((currentEnergy - consumption).toFixed(4)));
    });
  }, []);

  // 4. GASTAR TOKENS (Quema de $FLOW segura)
  const spendFlow = useCallback((amount: number): boolean => {
    let success = false;
    setTokens((prev) => {
      if (prev >= amount) {
        success = true;
        return Number((prev - amount).toFixed(6));
      }
      return prev;
    });
    return success;
  }, []);

  // 5. GASTAR ENERGÍA (Para penalizaciones de la Academia)
  const spendEnergy = useCallback((amount: number) => {
    setEnergy((prev) => {
      const next = Math.max(0, prev - amount);
      return Number(next.toFixed(2));
    });
  }, []);

  // 6. RECARGA DE PROTOCOLO (Atómica)
  const rechargeEnergy = useCallback(() => {
    const COSTO_RECARGA = 5.0; 
    
    setTokens((prev) => {
      if (prev >= COSTO_RECARGA) {
        setEnergy(100);
        return Number((prev - COSTO_RECARGA).toFixed(6));
      }
      return prev;
    });
  }, []);

  // 7. HELPERS DE ESTADO OPERACIONAL
  const isOperational = useMemo(() => energy > 0, [energy]);

  return {
    tokens,
    energy,
    isOperational,
    addFlow,
    spendFlow,
    spendEnergy,
    rechargeEnergy,
    isLoaded
  };
};
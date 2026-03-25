"use client";
import { useState, useEffect } from 'react';

export const useNeuralData = () => {
  const [realSignals, setRealSignals] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchSignals = async () => {
    setLoading(true);
    try {
      // Reemplaza esta URL con tu Webhook de n8n (Production URL)
      const response = await fetch('http://localhost:5678/webhook/neural-signals', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      setRealSignals(data.signals || []);
    } catch (error) {
      console.error("Error conectando con n8n:", error);
      // Fallback: Datos de muestra institucionales si el servidor está offline
      setRealSignals([
        { event: "FED_INTEREST_RATES", kalshi: 0.65, poly: 0.72, delta: 7.0 },
        { event: "BTC_ETP_APPROVAL", kalshi: 0.88, poly: 0.85, delta: 3.5 }
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Actualizar datos cada 30 segundos
  useEffect(() => {
    fetchSignals();
    const interval = setInterval(fetchSignals, 30000);
    return () => clearInterval(interval);
  }, []);

  return { realSignals, loading, refresh: fetchSignals };
};
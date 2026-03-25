"use client";
import { useState, useEffect } from 'react';

export const useWallet = () => {
  const [balance, setBalance] = useState(0);
  const [status, setStatus] = useState<'CONNECTED' | 'DISCONNECTED'>('DISCONNECTED');

  useEffect(() => {
    const sync = () => {
      const val = localStorage.getItem('neural_total_mined') || "0";
      setBalance(parseFloat(val));
    };
    
    // Sincronización de alta frecuencia
    const timer = setInterval(sync, 500);
    return () => clearInterval(timer);
  }, []);

  const formatBalance = (val: number) => {
    return val.toLocaleString('en-US', { minimumFractionDigits: 6, maximumFractionDigits: 6 });
  };

  return { balance, status, setStatus, formatBalance };
};
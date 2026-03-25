"use client";
import { useState, useEffect } from 'react';

export const useBooster = () => {
  const [multiplier, setMultiplier] = useState(1.0);
  const [activeBoosters, setActiveBoosters] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('neural_active_boosters');
    if (saved) {
      const boosters = JSON.parse(saved);
      setActiveBoosters(boosters);
      updateMultiplier(boosters);
    }
  }, []);

  const updateMultiplier = (boosters: string[]) => {
    let m = 1.0;
    if (boosters.includes('SOCI_VERIFIED')) m += 0.2; // +20%
    if (boosters.includes('ACADEMY_COMPLETED')) m += 0.5; // +50%
    if (boosters.includes('NETWORK_KING')) m += 1.3; // +130%
    setMultiplier(m);
  };

  const addBooster = (id: string) => {
    const newBoosters = [...activeBoosters, id];
    localStorage.setItem('neural_active_boosters', JSON.stringify(newBoosters));
    setActiveBoosters(newBoosters);
    updateMultiplier(newBoosters);
  };

  return { multiplier, activeBoosters, addBooster };
};
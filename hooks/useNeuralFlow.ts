"use client";
import { create } from 'zustand'; // Si no tienes zustand, avísame y lo hacemos con React Context

interface NeuralState {
  balance: number;
  isOperating: boolean;
  points: number;
  startOperation: () => void;
  stopOperation: () => void;
  addPoint: (amount: number) => void;
}

export const useNeuralFlow = create<NeuralState>((set) => ({
  balance: 50.00,
  isOperating: false,
  points: 0.000421,
  startOperation: () => set({ isOperating: true }),
  stopOperation: () => set({ isOperating: false }),
  addPoint: (amount) => set((state) => ({ points: state.points + amount })),
}));
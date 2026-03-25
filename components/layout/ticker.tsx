"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Zap } from 'lucide-react';

const cryptoData = [
  { pair: "BTC/USDC", price: "94,231.50", change: "+2.4%", up: true },
  { pair: "ETH/USDC", price: "3,452.12", change: "-0.8%", up: false },
  { pair: "SOL/USDC", price: "198.45", change: "+5.1%", up: true },
  { pair: "$FLOW/USDC", price: "1.24", change: "+12.5%", up: true },
  { pair: "JUP/SOL", price: "1.12", change: "+1.2%", up: true },
  { pair: "PYTH/USDC", price: "0.45", change: "-2.1%", up: false },
  { pair: "RENDER/USDC", price: "10.15", change: "+4.3%", up: true },
];

export default function Ticker() {
  // Duplicamos el array para que el scroll sea infinito y fluido
  const duplicatedData = [...cryptoData, ...cryptoData];

  return (
    <div className="fixed top-[72px] left-0 right-0 z-[250] bg-black/40 backdrop-blur-md border-y border-white/5 h-10 flex items-center overflow-hidden">
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1920] }} // Ajusta según la cantidad de items
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {duplicatedData.map((coin, idx) => (
          <div key={idx} className="flex items-center gap-6 px-8 border-r border-white/5">
            <span className="text-[9px] font-black uppercase tracking-tighter text-zinc-500 italic">
              {coin.pair}
            </span>
            <span className="text-[10px] font-black text-white font-mono">
              ${coin.price}
            </span>
            <div className={`flex items-center gap-1 ${coin.up ? 'text-emerald-500' : 'text-rose-500'}`}>
              {coin.up ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
              <span className="text-[9px] font-black uppercase">{coin.change}</span>
            </div>
            {coin.pair.includes("$FLOW") && (
              <Zap size={10} className="text-cyan-500 animate-pulse" />
            )}
          </div>
        ))}
      </motion.div>
      
      {/* DEGRADADOS LATERALES PARA EL EFECTO DE DIFUMINADO */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />
    </div>
  );
}
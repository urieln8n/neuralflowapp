"use client";
import React from "react";

export default function SecurityGrid() {
  return (
    <div className="fixed inset-0 z-[30] pointer-events-none overflow-hidden">
      {/* Grid de Precisión */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />
      
      {/* Escáner Láser Ultra Brillante */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-cyan-400 shadow-[0_0_25px_#22d3ee] animate-scan-extreme" />

      <style jsx global>{`
        @keyframes scan-extreme {
          0% { transform: translateY(-10vh); }
          100% { transform: translateY(110vh); }
        }
        .animate-scan-extreme { animation: scan-extreme 4s linear infinite; }
      `}</style>
    </div>
  );
}
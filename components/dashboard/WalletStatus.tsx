"use client";

import { useWeb3 } from "@/context/Web3Context";
import { Power, Wallet, ShieldCheck } from "lucide-react";

export const WalletStatus = () => {
  const { account, connectWallet, isConnecting } = useWeb3();

  // Acortar la dirección para estética institucional (0x1234...5678)
  const shortAddress = account 
    ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}`
    : "";

  return (
    <div className="px-4 py-6 mt-auto border-t border-white/5">
      {account ? (
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <div className="flex flex-col">
              <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">Protocolo_Activo</span>
              <span className="text-xs font-mono text-zinc-400">{shortAddress}</span>
            </div>
          </div>
          <button className="flex items-center gap-2 text-[10px] font-black text-zinc-600 uppercase hover:text-white transition-colors pl-2">
            <Power size={12} /> Desconectar_Nodo
          </button>
        </div>
      ) : (
        <button 
          onClick={connectWallet}
          disabled={isConnecting}
          className="w-full py-4 bg-cyan-500 text-black font-black uppercase text-[10px] tracking-[0.2em] rounded-2xl hover:bg-white transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
        >
          {isConnecting ? (
            "Sincronizando..."
          ) : (
            <>
              <Wallet size={16} /> Conectar_Wallet
            </>
          )}
        </button>
      )}
    </div>
  );
};
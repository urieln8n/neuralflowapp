"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";

// Extend Window interface for MetaMask
declare global {
  interface Window {
    ethereum?: any;
  }
}

// Definición de tipos robusta para producción
interface Web3ContextType {
  account: string | null;
  signer: any | null;
  chainId: number | null;
  balance: number;
  isConnecting: boolean;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  addFlow: (amount: number) => void;
  formatBalance: (val: number) => string;
}

const Web3Context = createContext<Web3ContextType | undefined>(undefined);

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  const [account, setAccount] = useState<string | null>(null);
  const [signer, setSigner] = useState<any | null>(null);
  const [chainId, setChainId] = useState<number | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [balance, setBalance] = useState<number>(0);

  // Cargar balance persistente del Laboratorio
  useEffect(() => {
    const saved = localStorage.getItem("neural_flow_balance");
    if (saved) setBalance(parseFloat(saved));
  }, []);

  // Función de inyección de Flow (Soluciona el error de ContribuirPage)
  const addFlow = useCallback((amount: number) => {
    setBalance((prev) => {
      const newBalance = prev + amount;
      localStorage.setItem("neural_flow_balance", newBalance.toString());
      return newBalance;
    });
  }, []);

  const formatBalance = (val: number) => 
    val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 6 });

  const connectWallet = useCallback(async () => {
    if (typeof window.ethereum !== "undefined") {
      setIsConnecting(true);
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        const signerInstance = await provider.getSigner();
        const network = await provider.getNetwork();

        setAccount(accounts[0]);
        setSigner(signerInstance);
        setChainId(Number(network.chainId));
      } catch (error) {
        console.error("Web3_Connect_Fail:", error);
      } finally {
        setIsConnecting(false);
      }
    } else {
      alert("Instala MetaMask para acceder al nodo.");
    }
  }, []);

  const disconnectWallet = useCallback(() => {
    setAccount(null);
    setSigner(null);
    setChainId(null);
  }, []);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      window.ethereum.on("accountsChanged", (accs: any) => {
        if (accs.length > 0) setAccount(accs[0]);
        else disconnectWallet();
      });
      window.ethereum.on("chainChanged", () => window.location.reload());
    }
  }, [disconnectWallet]);

  return (
    <Web3Context.Provider value={{ 
      account, signer, chainId, balance, isConnecting, 
      connectWallet, disconnectWallet, addFlow, formatBalance 
    }}>
      {children}
    </Web3Context.Provider>
  );
};

// Hooks de acceso
export const useWeb3 = () => {
  const context = useContext(Web3Context);
  if (!context) throw new Error("useWeb3 debe usarse dentro de Web3Provider");
  return context;
};

// ALIAS CRÍTICO: Esto soluciona el error en ContribuirPage
export const useWallet = useWeb3;
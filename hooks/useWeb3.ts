"use client";
import { useState, useEffect, useCallback } from 'react';
import { ethers } from 'ethers';

export const useWeb3 = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<string>("0");
  const [isConnecting, setIsConnecting] = useState(false);

  const getBalance = useCallback(async (address: string) => {
    const ethereum = (window as any).ethereum;
    if (ethereum) {
      try {
        const provider = new ethers.BrowserProvider(ethereum);
        const rawBalance = await provider.getBalance(address);
        setBalance(ethers.formatEther(rawBalance));
      } catch (error) {
        console.error("Error balance:", error);
      }
    }
  }, []);

  const connectWallet = useCallback(async () => {
    if (typeof window === 'undefined') return;
    const ethereum = (window as any).ethereum;

    try {
      setIsConnecting(true);
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      if (accounts.length > 0) {
        setAccount(accounts[0]);
        await getBalance(accounts[0]);
      }
    } catch (error: any) {
      console.error("Error Web3:", error.message);
    } finally {
      setIsConnecting(false);
    }
  }, [getBalance]);

  // Esto es para que la página de Contribuir no de error
  const addFlow = (amount: number) => {
    console.log("Añadiendo flow simulado:", amount);
  };

  useEffect(() => {
    const ethereum = (window as any).ethereum;
    if (ethereum) {
      ethereum.request({ method: 'eth_accounts' }).then((accs: string[]) => {
        if (accs.length > 0) {
          setAccount(accs[0]);
          getBalance(accs[0]);
        }
      });
    }
  }, [getBalance]);

  return { 
    account, 
    balance, 
    connectWallet, 
    isConnecting,
    addFlow,
    // ESTA LÍNEA ES LA QUE QUITA EL ERROR DE SIGNALS:
    isConnected: !!account 
  };
};
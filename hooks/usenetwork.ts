"use client";
import { useState } from 'react';

export const useNetwork = () => {
  const [referrals, setReferrals] = useState(0);
  const inviteCode = "NEURAL-SOCI-2026";

  const copyInviteLink = () => {
    const link = `https://neuralflow.io/register?ref=${inviteCode}`;
    navigator.clipboard.writeText(link);
    // Aquí puedes disparar una notificación de "Link Copiado"
    return true;
  };

  return { referrals, inviteCode, copyInviteLink };
};
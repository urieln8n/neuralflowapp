"use client";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phone = "0034645466308"; // Reemplaza con tu número (código de país + número)
  const mensaje = "Hola! Quiero info sobre las automatizaciones de NeuralFlow 🚀";
  
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(mensaje)}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-8 z-[100] bg-[#25D366] p-4 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 transition-all active:scale-95 group"
    >
      <MessageCircle size={30} color="white" fill="white" />
      
      {/* Tooltip opcional que aparece al pasar el mouse */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black text-xs font-black px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-2xl pointer-events-none uppercase tracking-tighter">
        ¿Hablamos?
      </span>
    </a>
  );
}
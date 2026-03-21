"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
// import ChatOllama from "@/components/ui/ChatOllama"; // Descomenta cuando lo tengas en esa ruta

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} bg-[#050505] text-white antialiased scroll-smooth relative font-sans`}>
        
        {/* Capa de fondo sutil para mantener tu estética de las fotos */}
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1)_0%,rgba(5,5,5,1)_100%)] -z-10" />

        <Navbar />

        {/* El pt-[80px] asegura que el contenido no se pegue a la Navbar.
          He añadido min-h-screen para que el footer siempre esté abajo.
        */}
        <main className="relative z-10 pt-[80px] min-h-screen">
          {children}
        </main>

        <footer className="text-gray-500 text-center py-10 mt-20 z-10 relative border-t border-white/5 bg-black/20 backdrop-blur-sm">
          <p className="text-sm font-medium tracking-widest uppercase">
            © {new Date().getFullYear()} <span className="text-white">NeuralFlow</span> • AI Automation Platform
          </p>
        </footer>

        {/* --- COMPONENTES GLOBALES DE CONVERSIÓN --- */}
        
        {/* El botón de WhatsApp aparecerá en toda la web automáticamente */}
        <WhatsAppButton />

        {/* Aquí puedes renderizar tu ChatWidget de Ollama3. 
          Al estar aquí, el asistente de ventas estará vivo en la Landing y en el Dashboard.
        */}
        {/* <ChatOllama /> */}

      </body>
    </html>
  );
}
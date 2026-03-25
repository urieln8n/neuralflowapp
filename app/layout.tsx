import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Web3Provider } from '@/context/Web3Context';
import { NeuralNotifications } from '@/components/providers/NeuralNotifications';

// COMPONENTES DE INTERFAZ GALÁCTICA
import NeuralCursor from '@/components/ui/NeuralCursor';
import NeuralParticles from '@/components/ui/NeuralParticles';
import SecurityGrid from '@/components/ui/SecurityGrid';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'NEURALFLOW // SOVEREIGN OS',
  description: 'Infraestructura Neural de Grado Institucional para Arbitraje y Formación de Élite.',
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1, 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth dark`}>
      <body className={`${inter.className} bg-black text-white antialiased overflow-x-hidden selection:bg-purple-500/30 italic`}>
        
        {/* === CAPA 0: MATERIA OSCURA Y SEGURIDAD (Fondo Inmóvil) === */}
        <NeuralParticles />
        <SecurityGrid />
        
        {/* === CAPA 1: ENERGÍA REACTIVA (Sigue al Socio Alpha) === */}
        <NeuralCursor />

        {/* === PROVEEDORES DE ESTADO GLOBAL === */}
        <Web3Provider>
          
          {/* === SISTEMA DE ALERTAS CINEMÁTICAS === */}
          <NeuralNotifications />
          
          {/* === CAPA DE FONDO INSTITUCIONAL (Refuerzo de Profundidad) === */}
          <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Gradiente de Profundidad Neural Original */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#080808_0%,#000_100%)]" />
            
            {/* Refuerzo de Nebulosa (Fusión Cian/Púrpura) */}
            <div className="absolute -top-[10%] left-1/4 w-[600px] h-[400px] bg-purple-600/5 blur-[120px] rounded-full" />
            <div className="absolute -top-[5%] right-1/4 w-[600px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full" />
            
            {/* Línea de Seguridad Superior Dinámica */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
          </div>

          {/* === CONTENEDOR PRINCIPAL DE NAVEGACIÓN === */}
          {/* Z-10 para asegurar que el contenido esté sobre el fondo pero bajo el cursor halo */}
          <main className="relative z-10 flex flex-col min-h-screen">
            {children}
          </main>

          {/* === PORTALS & OVERLAYS (Z-MAX) === */}
          <div id="portal-root" className="relative z-[999]" />
          
        </Web3Provider>

        {/* EFECTO DE RUIDO ANALÓGICO (Textura de Laboratorio) */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.012] z-[9998] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
      </body>
    </html>
  );
}
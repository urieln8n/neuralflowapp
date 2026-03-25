"use client"; // <--- ESTA LÍNEA MÁGICA ARREGLA EL RUNTIME ERROR

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  ChevronRight, 
  Calendar, 
  Tag, 
  Share2,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

const BLOG_POSTS = [
  { 
    id: 1,
    t: "El Futuro del Arbitraje con LLMs", 
    date: "25 MAR 2026", 
    tag: "IA_STRATEGY",
    desc: "Cómo los modelos de lenguaje están detectando ineficiencias en DEXs antes que los bots tradicionales.",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4628c9456?q=80&w=1964&auto=format&fit=crop"
  },
  { 
    id: 2,
    t: "Nodos de Red: Escalabilidad 100M", 
    date: "22 MAR 2026", 
    tag: "NETWORK",
    desc: "La arquitectura necesaria para sostener una red global de usuarios sin perder latencia en las señales.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  },
  { 
    id: 3,
    t: "Ciberseguridad en la Era Quantum", 
    date: "20 MAR 2026", 
    tag: "SECURITY",
    desc: "Protegiendo el Vault S3 contra ataques de computación cuántica inminentes.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#020202] text-white p-8 lg:p-20 italic">
      
      {/* BOTÓN VOLVER */}
      <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-cyan-500 transition-colors mb-12">
        <ArrowLeft size={14} /> Volver_al_Nexo
      </Link>

      {/* HEADER DEL BLOG */}
      <header className="mb-20 space-y-4">
        <div className="flex items-center gap-3">
            <Terminal size={18} className="text-cyan-500" />
            <span className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.6em]">Neural_Insights_Database</span>
        </div>
        <h1 className="text-7xl font-black uppercase italic tracking-tighter leading-none">Intelligence_Feed</h1>
        <p className="max-w-xl text-zinc-500 text-xs font-black uppercase tracking-widest leading-relaxed">
            Reportes tácticos sobre la convergencia de IA, Cripto y expansión de redes. Actualizado en tiempo real por el núcleo NeuralFlow.
        </p>
      </header>

      {/* GRID DE POSTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {BLOG_POSTS.map((post, i) => (
          <motion.article 
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative flex flex-col bg-zinc-950/50 border border-white/5 rounded-[45px] overflow-hidden hover:border-cyan-500/30 transition-all duration-500"
          >
            {/* Imagen con Overlay */}
            <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10" />
                <img 
                    src={post.img} 
                    alt={post.t} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                />
                <div className="absolute top-6 left-6 z-20">
                    <span className="px-4 py-1 bg-cyan-500 text-black text-[8px] font-black uppercase rounded-full tracking-[0.2em]">
                        {post.tag}
                    </span>
                </div>
            </div>

            {/* Contenido */}
            <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                    <div className="flex items-center gap-4 text-zinc-600 text-[9px] font-black uppercase tracking-widest">
                        <span className="flex items-center gap-1"><Calendar size={10} /> {post.date}</span>
                        <span className="flex items-center gap-1"><Tag size={10} /> Archivo_0{post.id}</span>
                    </div>
                    <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter leading-none group-hover:text-cyan-400 transition-colors">
                        {post.t}
                    </h3>
                    <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-widest leading-relaxed opacity-80">
                        {post.desc}
                    </p>
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-white/5">
                    <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white group-hover:gap-4 transition-all">
                        Leer_Informe <ChevronRight size={14} className="text-cyan-500" />
                    </button>
                    <Share2 size={14} className="text-zinc-700 hover:text-white transition-colors cursor-pointer" />
                </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* FOOTER DE SUSCRIPCIÓN */}
      <footer className="mt-32 p-16 rounded-[60px] bg-white text-black flex flex-col md:flex-row justify-between items-center gap-10">
        <div>
            <h4 className="text-4xl font-black uppercase italic tracking-tighter leading-none mb-2">Suscribirse_Al_Feed</h4>
            <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Recibe reportes de Alpha directamente en tu terminal.</p>
        </div>
        <div className="flex w-full md:w-auto gap-4">
            <input 
                type="email" 
                placeholder="EMAIL_PROTOCOLO" 
                className="bg-black/5 border-b-2 border-black/20 p-4 text-[10px] font-black uppercase tracking-widest focus:outline-none focus:border-black w-full md:w-64"
            />
            <button className="px-8 py-4 bg-black text-white rounded-2xl font-black uppercase text-[10px] hover:bg-cyan-500 transition-all">
                Activar
            </button>
        </div>
      </footer>
    </div>
  );
}
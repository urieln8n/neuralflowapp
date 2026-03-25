"use client";
import React from "react";
import { Play, Eye, Clock, Share2 } from "lucide-react";

export default function VideosPage() {
  const videos = [
    { id: 1, title: "Estrategia de Captura Viral", views: "1.2k", duration: "12:40", thumbnail: "bg-zinc-900" },
    { id: 2, title: "Optimización de Guiones con IA", views: "850", duration: "08:15", thumbnail: "bg-zinc-800" },
    { id: 3, title: "Escalado de Leads en TikTok", views: "2.1k", duration: "15:20", thumbnail: "bg-zinc-900" },
  ];

  return (
    <div className="space-y-10 max-w-7xl mx-auto">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black italic uppercase text-white tracking-tighter">Cápsulas de Contenido</h1>
          <p className="text-zinc-500 font-medium">Domina los algoritmos con entrenamiento de alta fidelidad.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <div key={video.id} className="group cursor-pointer">
            {/* Thumbnail Mockup */}
            <div className={`aspect-video ${video.thumbnail} rounded-[32px] border border-white/5 relative overflow-hidden mb-4 group-hover:border-cyan-500/50 transition-all`}>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform">
                  <Play fill="currentColor" size={24} />
                </div>
              </div>
              <span className="absolute bottom-4 right-4 bg-black/80 text-[10px] font-black px-2 py-1 rounded-md text-white">
                {video.duration}
              </span>
            </div>

            {/* Info */}
            <div className="px-2 space-y-2">
              <h3 className="text-white font-bold text-lg leading-tight group-hover:text-cyan-400 transition-colors">
                {video.title}
              </h3>
              <div className="flex items-center gap-4 text-zinc-500 text-[11px] font-bold uppercase tracking-wider">
                <span className="flex items-center gap-1"><Eye size={12}/> {video.views}</span>
                <span className="flex items-center gap-1"><Clock size={12}/> Hace 2 días</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
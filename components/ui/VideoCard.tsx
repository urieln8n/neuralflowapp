"use client";

import { Play, Youtube } from "lucide-react"; // Importante para el toque visual

interface VideoCardProps {
  video: {
    id: { 
      videoId: string;
      playlistId?: string; // Añadido para evitar errores si viene una playlist
    };
    snippet: {
      title: string;
      thumbnails: { 
        high: { url: string };
        medium?: { url: string }; 
      };
      channelTitle: string;
    };
  };
}

export default function VideoCard({ video }: VideoCardProps) {
  // Manejo de ID por si es video o playlist
  const id = video.id.videoId || video.id.playlistId;
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;

  return (
    <a 
      href={videoUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative block bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:border-red-500/40 hover:shadow-[0_0_30px_rgba(220,38,38,0.1)]"
    >
      {/* Contenedor de Imagen con Overlay Gradiente */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={video.snippet.thumbnails.high?.url || video.snippet.thumbnails.medium?.url}
          alt={video.snippet.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
        />
        
        {/* Overlay oscuro que se aclara al hacer hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />

        {/* Botón de Play Flotante (Aparece al hacer hover) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <div className="bg-red-600 p-3 rounded-full shadow-xl shadow-red-600/40">
            <Play size={24} fill="white" className="text-white ml-0.5" />
          </div>
        </div>

        {/* Badge de YouTube en la esquina */}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md p-1.5 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
          <Youtube size={16} className="text-red-500" />
        </div>
      </div>
      
      {/* Contenido de Texto */}
      <div className="p-5">
        <h2 className="text-[15px] text-gray-200 font-bold leading-snug line-clamp-2 group-hover:text-white transition-colors duration-300">
          {video.snippet.title}
        </h2>
        
        <div className="flex items-center gap-2 mt-4">
          <div className="h-px flex-1 bg-white/5 group-hover:bg-red-500/20 transition-colors" />
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.15em] font-black group-hover:text-red-400 transition-colors">
            {video.snippet.channelTitle}
          </p>
        </div>
      </div>

      {/* Brillo sutil de fondo (Efecto Premium) */}
      <div className="absolute -inset-px bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
    </a>
  );
}
import { motion } from "framer-motion";
import ChatWidget from "./ChatWidget";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden px-6 py-16">
      {/* Fondo premium con partículas */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 opacity-40 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto text-center"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text-static">
          HeroSection Premium IA
        </h2>
        <p className="text-white/60 mb-10">
          Este componente está listo para integrarse con tu flujo de automatizaciones y ChatWidget.
        </p>

        <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-white font-semibold hover:scale-105 transition-transform">
          Acción principal
        </button>
      </motion.div>

      {/* Chat Widget */}
      <ChatWidget />
    </section>
  );
};

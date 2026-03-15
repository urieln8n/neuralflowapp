"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function Pricing(){

const features = [
"Landing page profesional optimizada",
"Chat AI para responder visitantes",
"Asistente automático en WhatsApp",
"CRM básico para gestionar leads",
"Automatización de respuestas",
"Sistema listo para captar clientes"
]

return(

<section className="relative bg-[#0b0b0f] text-white py-32 px-6 overflow-hidden">

{/* glow background */}

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/20 blur-[200px] pointer-events-none"/>

<div className="max-w-6xl mx-auto relative text-center">

{/* HEADER */}

<h2 className="text-5xl font-bold mb-6">

Lanza tu sistema de  
<span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text ml-2">
captación con IA
</span>

</h2>

<p className="text-gray-400 text-lg mb-20 max-w-2xl mx-auto">

Todo lo que necesitas para empezar a captar clientes automáticamente desde tu web.

</p>


{/* PRICING CARD */}

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
whileHover={{scale:1.03}}
className="relative max-w-xl mx-auto bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-12 hover:border-purple-400/40 transition"
>

{/* badge */}

<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-cyan-400 px-4 py-1 text-sm font-semibold rounded-full">

Plan MVP

</div>

{/* title */}

<h3 className="text-2xl font-bold mb-4">

NeuralFlow MVP

</h3>

<p className="text-gray-400 mb-10">

Sistema completo para lanzar tu web con IA y empezar a captar clientes.

</p>


{/* price */}

<div className="text-5xl font-bold mb-10">

Lanzamiento

</div>


{/* features */}

<div className="text-left space-y-4 mb-12">

{features.map((feature,i)=>(

<div key={i} className="flex items-center gap-3 text-gray-300">

<Check className="text-cyan-400" size={18}/>

<span>{feature}</span>

</div>

))}

</div>


{/* CTA */}

<button className="w-full bg-gradient-to-r from-purple-500 to-cyan-400 hover:opacity-90 transition p-4 rounded-xl font-semibold text-lg">

Crear mi MVP

</button>

<p className="text-gray-500 text-sm mt-4">

Configuración rápida para empezar cuanto antes.

</p>

</motion.div>

</div>

</section>

)

}
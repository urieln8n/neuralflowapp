"use client"

import { motion } from "framer-motion"
import { Bot, MessageSquare, Sparkles } from "lucide-react"

export default function AIAgents(){

const agents = [

{
title:"Chat Agent",
icon:Bot,
desc:"Un asistente de IA que conversa con los visitantes de tu web, responde preguntas y captura leads automáticamente."
},

{
title:"WhatsApp Agent",
icon:MessageSquare,
desc:"Automatiza conversaciones en WhatsApp para responder clientes, calificar leads y agendar citas."
}

]

return(

<section className="relative bg-[#0b0b0f] text-white py-32 px-6 overflow-hidden">

{/* glow background */}

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/20 blur-[200px] pointer-events-none"/>

<div className="max-w-7xl mx-auto relative">

{/* HEADER */}

<div className="text-center mb-24">

<h2 className="text-5xl font-bold mb-6">

Agentes de  
<span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text ml-2">
Inteligencia Artificial
</span>

</h2>

<p className="text-gray-400 text-lg max-w-2xl mx-auto">

NeuralFlow utiliza agentes especializados que trabajan 24/7 para conversar con visitantes y convertirlos en clientes automáticamente.

</p>

</div>


{/* AGENTS */}

<div className="grid md:grid-cols-2 gap-10">

{agents.map((agent,i)=>{

const Icon = agent.icon

return(

<motion.div
key={i}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{delay:i*0.2}}
whileHover={{scale:1.03}}
className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-10 hover:border-cyan-400/40 transition"
>

{/* icon */}

<div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-400/20 text-cyan-400 mb-6">

<Icon size={26}/>

</div>

{/* title */}

<h3 className="text-2xl font-semibold mb-4">

{agent.title}

</h3>

{/* description */}

<p className="text-gray-400 leading-relaxed mb-6">

{agent.desc}

</p>

{/* features */}

<div className="flex items-center gap-2 text-sm text-gray-300">

<Sparkles size={16} className="text-purple-400"/>

<span>AI powered automation</span>

</div>

</motion.div>

)

})}

</div>


{/* CTA */}

<div className="text-center mt-24">

<button className="bg-gradient-to-r from-purple-500 to-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition">

Activar agentes IA

</button>

</div>

</div>

</section>

)

}
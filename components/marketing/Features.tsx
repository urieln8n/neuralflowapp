"use client"

import { motion } from "framer-motion"
import {
Globe,
Bot,
MessageSquare,
Database,
Zap,
Rocket
} from "lucide-react"

export default function Features(){

const features = [

{
title:"Landing Page Inteligente",
icon:Globe,
desc:"Creamos una landing moderna optimizada para captar clientes y explicar tu negocio de forma clara."
},

{
title:"Chat AI Integrado",
icon:Bot,
desc:"Un asistente inteligente conversa con los visitantes y responde preguntas automáticamente."
},

{
title:"Automatización en WhatsApp",
icon:MessageSquare,
desc:"Los clientes continúan la conversación en WhatsApp con un asistente automatizado."
},

{
title:"CRM de Leads",
icon:Database,
desc:"Todos los contactos se guardan automáticamente para que puedas gestionarlos fácilmente."
},

{
title:"Automatizaciones Inteligentes",
icon:Zap,
desc:"El sistema captura leads, responde preguntas y filtra clientes potenciales automáticamente."
},

{
title:"Listo para lanzar",
icon:Rocket,
desc:"Tu sistema de captación queda listo para empezar a recibir clientes desde el primer día."
}

]

return(

<section className="relative bg-[#0b0b0f] text-white py-32 px-6 overflow-hidden">

{/* glow background */}

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/20 blur-[200px] pointer-events-none"/>

<div className="max-w-7xl mx-auto relative">

{/* HEADER */}

<div className="text-center mb-24">

<h2 className="text-5xl font-bold mb-6">

Todo lo que necesitas para  
<span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text ml-2">
captar clientes
</span>

</h2>

<p className="text-gray-400 text-lg max-w-2xl mx-auto">

NeuralFlow combina web, inteligencia artificial y automatización para convertir visitantes en clientes de forma automática.

</p>

</div>


{/* GRID */}

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{features.map((feature,i)=>{

const Icon = feature.icon

return(

<motion.div
key={i}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{delay:i*0.1}}
whileHover={{scale:1.04}}
className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 hover:border-cyan-400/40 transition"
>

{/* icon */}

<div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-400/20 text-cyan-400 mb-6">

<Icon size={26}/>

</div>

{/* title */}

<h3 className="text-xl font-semibold mb-3">

{feature.title}

</h3>

{/* desc */}

<p className="text-gray-400 leading-relaxed">

{feature.desc}

</p>

</motion.div>

)

})}

</div>

</div>

</section>

)

}
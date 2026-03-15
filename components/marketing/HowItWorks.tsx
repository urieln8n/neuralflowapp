"use client"

import { motion } from "framer-motion"
import { Brain, Bot, Rocket } from "lucide-react"

export default function HowItWorks(){

const steps = [

{
icon:Brain,
title:"Creamos tu landing inteligente",
desc:"Diseñamos una landing optimizada para captar clientes con IA integrada y experiencia moderna."
},

{
icon:Bot,
title:"Activamos los agentes IA",
desc:"Integramos Chat Agent y WhatsApp Agent para responder automáticamente a tus clientes 24/7."
},

{
icon:Rocket,
title:"Empiezas a recibir leads",
desc:"Los visitantes hablan con tu asistente IA y se convierten automáticamente en leads dentro de tu CRM."
}

]

return(

<section className="relative bg-[#0b0b0f] text-white py-32 px-6 overflow-hidden">

{/* fondo glow */}

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/20 blur-[200px] pointer-events-none"/>

<div className="max-w-7xl mx-auto relative">

{/* HEADER */}

<div className="text-center mb-24">

<h2 className="text-5xl font-bold mb-6">

Cómo funciona  
<span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text ml-2">
NeuralFlow
</span>

</h2>

<p className="text-gray-400 text-lg max-w-2xl mx-auto">

Un sistema automatizado que convierte visitantes en clientes usando inteligencia artificial.

</p>

</div>


{/* STEPS */}

<div className="grid md:grid-cols-3 gap-10 relative">

{steps.map((step,i)=>{

const Icon = step.icon

return(

<motion.div
key={i}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{delay:i*0.2}}
className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-10 hover:border-purple-400/40 transition"
>

{/* icon */}

<div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-400/20 text-cyan-400 mb-6">

<Icon size={26}/>

</div>

{/* step number */}

<div className="absolute top-6 right-6 text-sm text-gray-500 font-mono">

0{i+1}

</div>

{/* title */}

<h3 className="text-xl font-semibold mb-4">

{step.title}

</h3>

{/* description */}

<p className="text-gray-400 leading-relaxed">

{step.desc}

</p>

</motion.div>

)

})}

</div>


{/* FLOW LINE */}

<div className="hidden md:block absolute top-[55%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"/>


{/* CTA */}

<div className="text-center mt-24">

<button className="bg-gradient-to-r from-purple-500 to-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition">

Crear mi sistema con IA

</button>

</div>

</div>

</section>

)

}
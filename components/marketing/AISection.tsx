"use client"

import { motion } from "framer-motion"
import { ShieldCheck, CalendarCheck, Sparkles } from "lucide-react"

const automations = [
{
title:"Protocolo Centinela",
desc:"Detecta leads de alta intención y descarta curiosos automáticamente.",
icon:ShieldCheck
},
{
title:"Nexo de Conversión",
desc:"Cierra citas directamente en tu calendario analizando la urgencia del cliente.",
icon:CalendarCheck
},
{
title:"Pulso Viral",
desc:"Redacta respuestas personalizadas basadas en el sentimiento del usuario.",
icon:Sparkles
}
]

export default function AISection(){

return(

<section className="relative bg-[#0b0b0f] text-white py-32 px-6 overflow-hidden">

{/* glow background */}

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/20 blur-[220px] pointer-events-none"/>

<div className="max-w-7xl mx-auto text-center relative">

{/* HEADER */}

<motion.h2
className="text-5xl font-bold mb-6"
initial={{opacity:0,y:20}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
>
Automatizaciones  
<span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text ml-2">
IA
</span>
</motion.h2>

<motion.p
className="text-gray-400 mb-20 max-w-2xl mx-auto text-lg"
initial={{opacity:0}}
whileInView={{opacity:1}}
viewport={{once:true}}
transition={{delay:0.1}}
>
Nuestro sistema inteligente gestiona automáticamente tus leads, agendas y comunicaciones para que puedas enfocarte en crecer.
</motion.p>


{/* GRID */}

<div className="grid gap-10 md:grid-cols-3">

{automations.map((item,i)=>{

const Icon = item.icon

return(

<motion.div
key={item.title}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{delay:i*0.15}}
whileHover={{scale:1.05}}
className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 hover:border-cyan-400/40 transition"
>

{/* glow */}

<div className="absolute -top-20 -right-20 w-[200px] h-[200px] bg-gradient-to-r from-purple-500/20 to-cyan-400/20 blur-[120px]" />

{/* icon */}

<div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-400/20 text-cyan-400 mb-6">

<Icon size={26}/>

</div>

{/* title */}

<h3 className="text-2xl font-semibold mb-3">

{item.title}

</h3>

{/* desc */}

<p className="text-gray-400 leading-relaxed mb-6">

{item.desc}

</p>

{/* CTA */}

<button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-400 font-semibold hover:opacity-90 transition">

Ver automatización

</button>

</motion.div>

)

})}

</div>

</div>

</section>

)

}
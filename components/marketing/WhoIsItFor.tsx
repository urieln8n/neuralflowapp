"use client"

import { motion } from "framer-motion"
import {
User,
Building2,
Store,
Rocket,
Video,
Briefcase
} from "lucide-react"

export default function WhoIsItFor(){

const users = [

{
title:"Coaches y consultores",
icon:User,
desc:"Captura clientes automáticamente desde tu web mientras el asistente IA responde preguntas."
},

{
title:"Agencias",
icon:Building2,
desc:"Automatiza la captación de leads y gestiona nuevos clientes desde un solo lugar."
},

{
title:"Negocios locales",
icon:Store,
desc:"Permite que los clientes hablen con tu asistente IA y reserven citas directamente."
},

{
title:"Startups",
icon:Rocket,
desc:"Lanza rápidamente una landing con IA para validar tu producto y captar usuarios."
},

{
title:"Creadores de contenido",
icon:Video,
desc:"Convierte seguidores en clientes gracias a una landing automatizada."
},

{
title:"Freelancers",
icon:Briefcase,
desc:"Automatiza la captación de proyectos y filtra clientes potenciales."
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

¿Para quién es  
<span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text ml-2">
NeuralFlow?
</span>

</h2>

<p className="text-gray-400 text-lg max-w-2xl mx-auto">

Diseñado para negocios que quieren captar clientes automáticamente usando inteligencia artificial.

</p>

</div>


{/* GRID */}

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{users.map((user,i)=>{

const Icon = user.icon

return(

<motion.div
key={i}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{delay:i*0.1}}
whileHover={{scale:1.04}}
className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 hover:border-purple-400/40 transition"
>

{/* icon */}

<div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-400/20 text-cyan-400 mb-6">

<Icon size={26}/>

</div>

{/* title */}

<h3 className="text-xl font-semibold mb-3">

{user.title}

</h3>

{/* desc */}

<p className="text-gray-400 leading-relaxed">

{user.desc}

</p>

</motion.div>

)

})}

</div>

</div>

</section>

)

}
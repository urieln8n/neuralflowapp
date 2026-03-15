"use client"

import { motion } from "framer-motion"
import { Cpu, Bot, Workflow, Database, MessageSquare } from "lucide-react"

export default function Trusted(){

const tech = [

{
name:"Next.js",
icon:Cpu
},

{
name:"Artificial Intelligence",
icon:Bot
},

{
name:"Automation",
icon:Workflow
},

{
name:"CRM System",
icon:Database
},

{
name:"WhatsApp API",
icon:MessageSquare
}

]

return(

<section className="relative bg-[#0b0b0f] text-white py-24 px-6 border-y border-white/10 overflow-hidden">

{/* glow */}

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[160px] pointer-events-none"/>

<div className="max-w-7xl mx-auto relative">

{/* HEADER */}

<motion.div
initial={{opacity:0,y:20}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
className="text-center mb-16"
>

<p className="text-gray-400 tracking-wide text-sm uppercase mb-3">

Built with modern technology

</p>

<h3 className="text-3xl font-bold">

Tecnología que impulsa  
<span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text ml-2">
NeuralFlow
</span>

</h3>

</motion.div>


{/* GRID */}

<div className="grid grid-cols-2 md:grid-cols-5 gap-6">

{tech.map((item,i)=>{

const Icon = item.icon

return(

<motion.div
key={i}
initial={{opacity:0,y:20}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{delay:i*0.1}}
whileHover={{scale:1.05}}
className="flex flex-col items-center justify-center bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-6 hover:border-cyan-400/40 transition"
>

<Icon className="text-cyan-400 mb-3" size={26}/>

<span className="text-gray-300 text-sm font-semibold">

{item.name}

</span>

</motion.div>

)

})}

</div>

</div>

</section>

)

}
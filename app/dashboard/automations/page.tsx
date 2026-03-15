"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
Bot,
Zap,
Plus,
PlayCircle,
Workflow
} from "lucide-react"

export default function AutomationsPage(){

const [installed,setInstalled] = useState<string[]>([])

const automations = [

{
name:"Lead Capture AI",
desc:"Capture and qualify website visitors automatically."
},

{
name:"WhatsApp Followup",
desc:"Send automatic follow ups to new leads."
},

{
name:"AI Sales Agent",
desc:"AI agent that talks with prospects and books meetings."
},

{
name:"Customer Support AI",
desc:"AI bot that answers customer questions 24/7."
},

{
name:"Client Onboarding",
desc:"Automatically onboard new customers."
}

]

function installAutomation(name:string){

if(installed.includes(name)) return

setInstalled([...installed,name])

}

return(

<div className="min-h-screen bg-[#0b0b0f] text-white p-10">

<div className="max-w-7xl mx-auto">

{/* HEADER */}

<div className="flex items-center justify-between mb-12">

<div>

<h1 className="text-4xl font-bold flex items-center gap-3">

<Workflow className="text-cyan-400"/>

AI Automations

</h1>

<p className="text-gray-400 mt-2">
Build workflows that run your business automatically
</p>

</div>

<button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-cyan-400 px-5 py-3 rounded-lg font-semibold">

<Plus size={18}/>

New Automation

</button>

</div>

{/* AUTOMATION GRID */}

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">

{automations.map((a,i)=>(

<motion.div
key={a.name}
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{delay:i*0.1}}
className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl hover:border-cyan-400/40"
>

<div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-400/20 mb-6">

<Bot className="text-cyan-400"/>

</div>

<h3 className="text-xl font-semibold mb-3">

{a.name}

</h3>

<p className="text-gray-400 text-sm mb-6">

{a.desc}

</p>

<div className="flex items-center justify-between">

<span className="text-xs px-3 py-1 rounded-full bg-gray-700">

Template

</span>

<button
onClick={()=>installAutomation(a.name)}
className={`px-4 py-2 rounded-lg text-sm font-semibold

${installed.includes(a.name)
? "bg-green-600"
: "bg-gradient-to-r from-purple-500 to-cyan-400"}

`}
>

{installed.includes(a.name)
? "Installed"
: "Install"}

</button>

</div>

</motion.div>

))}

</div>

{/* AUTOMATION BUILDER */}

<div className="bg-white/5 border border-white/10 rounded-3xl p-10 mb-20">

<h2 className="text-2xl font-bold mb-8">

Automation Builder

</h2>

<div className="grid md:grid-cols-3 gap-6">

<BuilderStep
title="Trigger"
desc="New lead captured"
/>

<BuilderStep
title="AI Action"
desc="Qualify lead with AI"
/>

<BuilderStep
title="Output"
desc="Send WhatsApp message"
/>

</div>

<button className="mt-8 flex items-center gap-2 bg-gradient-to-r from-purple-500 to-cyan-400 px-6 py-3 rounded-lg font-semibold">

<PlayCircle size={18}/>

Run Automation

</button>

</div>

{/* EXECUTION LOGS */}

<div className="bg-white/5 border border-white/10 rounded-3xl p-10">

<h2 className="text-2xl font-bold mb-8">

Automation Logs

</h2>

<div className="space-y-4 text-sm">

<Log status="success" text="Lead Capture AI executed successfully"/>
<Log status="running" text="AI Sales Agent talking with prospect"/>
<Log status="success" text="WhatsApp followup sent"/>

</div>

</div>

</div>

</div>

)

}

function BuilderStep({title,desc}:{title:string,desc:string}){

return(

<div className="bg-black/40 border border-white/10 rounded-xl p-6">

<p className="text-xs text-gray-400 mb-2">
{title}
</p>

<p className="font-semibold">
{desc}
</p>

</div>

)

}

function Log({status,text}:{status:string,text:string}){

return(

<div className="flex items-center gap-3">

<span className={`w-2 h-2 rounded-full

${status==="success"
? "bg-green-400"
: "bg-yellow-400"}

`}/>

<p className="text-gray-300">
{text}
</p>

</div>

)

}
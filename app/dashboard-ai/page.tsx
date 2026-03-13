"use client"

import { useState,useEffect } from "react"

type Lead = {
id:number
company:string
industry:string
phone:string
email:string
website:string
score:number
status:string
}
}export default function LeadsPage(){

const data = [
 { name: "Mon", leads: 10 },
 { name: "Tue", leads: 18 },
 { name: "Wed", leads: 9 },
 { name: "Thu", leads: 25 },
 { name: "Fri", leads: 32 },
 { name: "Sat", leads: 20 },
 { name: "Sun", leads: 27 }
]

export default function Dashboard() {

 return (

<div className="flex bg-black text-white min-h-screen">

<Sidebar />

<main className="ml-64 p-10 w-full">

<h1 className="text-3xl font-bold mb-8">
Dashboard
</h1>

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.6}}
className="grid grid-cols-4 gap-6 mb-10"
>

<MetricCard
icon={<Users size={28} />}
title="Total Leads"
value={1248}
/>

<MetricCard
icon={<TrendingUp size={28} />}
title="Conversion Rate"
value={18}
/>

<MetricCard
icon={<Bot size={28} />}
title="Active Bots"
value={12}
/>

<MetricCard
icon={<Zap size={28} />}
title="Automations"
value={34}
/>

</motion.div>


<div className="bg-zinc-900/80 border border-cyan-500/20 rounded-xl p-6 hover:shadow-[0_0_20px_#22d3ee] transition">

<h2 className="text-xl mb-4">
Leads this week
</h2>

<ResponsiveContainer width="100%" height={300}>

<LineChart data={data}>

<CartesianGrid strokeDasharray="3 3" stroke="#27272a" />

<XAxis dataKey="name" stroke="#9ca3af" />

<YAxis stroke="#9ca3af" />

<Tooltip />

<Line
type="monotone"
dataKey="leads"
stroke="#22d3ee"
strokeWidth={3}
dot={{ r:5 }}
/>

</LineChart>

</ResponsiveContainer>

</div>

</main>

</div>

 )
}



function MetricCard({icon,title,value}:any){

return(

<motion.div
whileHover={{scale:1.05}}
className="bg-zinc-900/80 backdrop-blur border border-cyan-500/20 p-6 rounded-xl flex items-center gap-4 hover:shadow-[0_0_20px_#22d3ee] transition"
>

<div className="text-cyan-400">

{icon}

</div>

<div>

<p className="text-gray-400 text-sm">

{title}

</p>

<p className="text-2xl font-bold">

<CountUp end={value} duration={2} />

</p>

</div>

</motion.div>

)

}
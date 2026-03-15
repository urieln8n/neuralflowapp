"use client"

import { useState,useEffect } from "react"
import HotLeadEmailGenerator from "@/components/ui/HotLeadEmailGenerator"
import { Search,Mail,Phone,Globe,TrendingUp } from "lucide-react"

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

export default function LeadsPage(){

const [query,setQuery] = useState("")
const [leads,setLeads] = useState<Lead[]>([])
const [filtered,setFiltered] = useState<Lead[]>([])
const [loading,setLoading] = useState(false)
const [page,setPage] = useState(1)

const perPage = 20

const industries = [
"AI",
"SaaS",
"Marketing",
"Fintech",
"Ecommerce",
"HealthTech",
"EdTech",
"Real Estate"
]

const statuses = [
"Nuevo",
"Contactado",
"Interesado",
"Cliente"
]

function generateLeads(){

if(!query) return

setLoading(true)

const newLeads:Lead[] = []

for(let i=1;i<=500;i++){

newLeads.push({

id:i,
company:`${query} Company ${i}`,
industry:industries[i % industries.length],
phone:`+1 555 01${(100+i).toString().slice(-3)}`,
email:`contact${i}@${query.toLowerCase()}company.com`,
website:`${query.toLowerCase()}company${i}.com`,
score:Math.floor(Math.random()*100),
status:statuses[i % statuses.length]

})

}

setTimeout(()=>{

setLeads(newLeads)
setFiltered(newLeads)
setLoading(false)

},700)

}

useEffect(()=>{

setFiltered(

leads.filter(l=>

l.company.toLowerCase().includes(query.toLowerCase()) ||
l.industry.toLowerCase().includes(query.toLowerCase())

)

)

},[query,leads])

const start = (page-1)*perPage
const current = filtered.slice(start,start+perPage)
const totalPages = Math.ceil(filtered.length/perPage)

return(

<div className="min-h-screen bg-[#0b0b0f] text-white p-10">

<div className="max-w-7xl mx-auto">

{/* HEADER */}

<div className="flex items-center justify-between mb-10">

<div>

<h1 className="text-4xl font-bold flex items-center gap-3">

<TrendingUp className="text-cyan-400"/>

AI Lead Engine

</h1>

<p className="text-gray-400 mt-2">
Descubre empresas de alto valor con inteligencia artificial
</p>

</div>

</div>


{/* SEARCH */}

<div className="flex items-center gap-3 mb-12">

<div className="relative">

<Search className="absolute left-3 top-3 text-gray-500" size={18}/>

<input
value={query}
onChange={(e)=>setQuery(e.target.value)}
placeholder="Buscar industria o empresa..."
className="bg-gray-900 border border-gray-700 pl-10 pr-4 py-3 rounded-lg w-80"
/>

</div>

<button
onClick={generateLeads}
className="bg-gradient-to-r from-purple-500 to-cyan-400 px-6 py-3 rounded-lg font-semibold hover:opacity-90"
>
Generar Leads
</button>

</div>


{/* METRICS */}

<div className="grid md:grid-cols-4 gap-6 mb-12">

<Metric title="Total Leads" value={leads.length}/>

<Metric
title="Leads Calientes"
value={leads.filter(l=>l.score>70).length}
/>

<Metric
title="Contactados"
value={leads.filter(l=>l.status==="Contactado").length}
/>

<Metric
title="Clientes"
value={leads.filter(l=>l.status==="Cliente").length}
/>

</div>


{/* LOADING */}

{loading && (

<div className="text-gray-400 mb-6">
La IA está descubriendo empresas...
</div>

)}


{/* TABLE */}

<div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">

<table className="w-full text-sm">

<thead className="bg-gray-800 text-gray-300">

<tr>

<th className="p-4 text-left">Empresa</th>
<th className="p-4 text-left">Industria</th>
<th className="p-4 text-left">Contacto</th>
<th className="p-4 text-left">Web</th>
<th className="p-4 text-left">Score</th>
<th className="p-4 text-left">Estado</th>
<th className="p-4"></th>

</tr>

</thead>

<tbody>

{current.map((lead)=>(

<tr
key={lead.id}
className="border-t border-gray-800 hover:bg-gray-800 transition"
>

<td className="p-4 font-semibold">

{lead.company}

</td>

<td className="p-4 text-gray-400">

{lead.industry}

</td>

<td className="p-4">

<div className="flex flex-col text-sm">

<span className="flex items-center gap-2">
<Mail size={14}/> {lead.email}
</span>

<span className="flex items-center gap-2 text-gray-400">
<Phone size={14}/> {lead.phone}
</span>

</div>

</td>

<td className="p-4 text-cyan-400 flex items-center gap-2">

<Globe size={14}/>

{lead.website}

</td>

<td className="p-4">

<span className={`px-2 py-1 rounded text-xs font-semibold

${lead.score>70
? "bg-green-600"
: lead.score>40
? "bg-yellow-500 text-black"
: "bg-gray-700"}

`}>

{lead.score}

</span>

</td>

<td className="p-4">

<span className={`text-xs px-3 py-1 rounded-full

${lead.status==="Cliente"
? "bg-green-500/20 text-green-400"
: lead.status==="Interesado"
? "bg-yellow-500/20 text-yellow-400"
: lead.status==="Contactado"
? "bg-blue-500/20 text-blue-400"
: "bg-gray-600"}

`}>

{lead.status}

</span>

</td>

<td className="p-4">

<div className="flex gap-2">

<button className="bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded text-xs">
Capturar
</button>



</div>

</td>

</tr>

))}

</tbody>

</table>

</div>


{/* PAGINATION */}

<div className="flex items-center justify-between mt-8">

<button
onClick={()=>setPage(p=>Math.max(1,p-1))}
className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700"
>
Anterior
</button>

<span className="text-gray-400">

Página {page} de {totalPages}

</span>

<button
onClick={()=>setPage(p=>Math.min(totalPages,p+1))}
className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700"
>
Siguiente
</button>

</div>

</div>

</div>

)

}

function Metric({title,value}:{title:string,value:number}){

return(

<div className="bg-gray-900 p-6 rounded-xl border border-gray-800">

<p className="text-gray-400 text-sm">
{title}
</p>

<p className="text-3xl font-bold mt-2">
{value}
</p>

</div>

)

}
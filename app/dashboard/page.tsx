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

},600)

}

useEffect(()=>{

setFiltered(

leads.filter(l=>

l.company.toLowerCase().includes(query.toLowerCase()) ||

l.industry.toLowerCase().includes(query.toLowerCase())

)

)

},[query])

const start = (page-1)*perPage
const current = filtered.slice(start,start+perPage)
const totalPages = Math.ceil(filtered.length/perPage)

return(

<div className="min-h-screen bg-black text-white p-10">

<div className="max-w-7xl mx-auto">

{/* HEADER */}

<div className="mb-8">

<h1 className="text-4xl font-bold">
🤖 AI Lead Engine
</h1>

<p className="text-gray-400 mt-2">
Descubre empresas de alto valor con IA
</p>

</div>

{/* SEARCH */}

<div className="flex gap-3 mb-10">

<input

value={query}

onChange={(e)=>setQuery(e.target.value)}

placeholder="Buscar industria o empresa..."

className="bg-gray-900 border border-gray-700 px-4 py-3 rounded-lg w-96"

/>

<button

onClick={generateLeads}

className="bg-gradient-to-r from-purple-500 to-cyan-400 px-6 py-3 rounded-lg font-semibold"

>

Buscar Leads

</button>

</div>

{/* METRICS */}

<div className="grid md:grid-cols-4 gap-6 mb-10">

<div className="bg-gray-900 p-6 rounded-xl border border-gray-800">

<p className="text-gray-400 text-sm">
Total Leads
</p>

<p className="text-3xl font-bold">
{leads.length}
</p>

</div>

<div className="bg-gray-900 p-6 rounded-xl border border-gray-800">

<p className="text-gray-400 text-sm">
Leads Calientes
</p>

<p className="text-3xl font-bold">
{leads.filter(l=>l.score>70).length}
</p>

</div>

<div className="bg-gray-900 p-6 rounded-xl border border-gray-800">

<p className="text-gray-400 text-sm">
Contactados
</p>

<p className="text-3xl font-bold">
{leads.filter(l=>l.status==="Contactado").length}
</p>

</div>

<div className="bg-gray-900 p-6 rounded-xl border border-gray-800">

<p className="text-gray-400 text-sm">
Clientes
</p>

<p className="text-3xl font-bold">
{leads.filter(l=>l.status==="Cliente").length}
</p>

</div>

</div>

{/* LOADING */}

{loading && (

<p className="text-gray-400 mb-6">

La IA está descubriendo empresas...

</p>

)}

{/* TABLE */}

<div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">

<table className="w-full text-sm">

<thead className="bg-gray-800 text-gray-300">

<tr>

<th className="p-3 text-left">Empresa</th>

<th className="p-3 text-left">Industria</th>

<th className="p-3 text-left">Teléfono</th>

<th className="p-3 text-left">Email</th>

<th className="p-3 text-left">Web</th>

<th className="p-3 text-left">Score</th>

<th className="p-3 text-left">Estado</th>

<th className="p-3"></th>

</tr>

</thead>

<tbody>

{current.map((lead)=>(

<tr

key={lead.id}

className="border-t border-gray-800 hover:bg-gray-800"

>

<td className="p-3 font-semibold">

{lead.company}

</td>

<td className="p-3 text-gray-400">

{lead.industry}

</td>

<td className="p-3">

{lead.phone}

</td>

<td className="p-3">

{lead.email}

</td>

<td className="p-3 text-cyan-400">

{lead.website}

</td>

<td className="p-3">

<span className={`px-2 py-1 rounded text-xs ${

lead.score>70

? "bg-green-600"

: "bg-gray-700"

}`}>

{lead.score}

</span>

</td>

<td className="p-3">

{lead.status}

</td>

<td className="p-3">

<button className="bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded text-xs">

Capturar

</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

{/* PAGINATION */}

<div className="flex gap-2 mt-6">

<button

onClick={()=>setPage(p=>Math.max(1,p-1))}

className="bg-gray-800 px-4 py-2 rounded"

>

Anterior

</button>

<span className="px-4 py-2">

Página {page} de {totalPages}

</span>

<button

onClick={()=>setPage(p=>Math.min(totalPages,p+1))}

className="bg-gray-800 px-4 py-2 rounded"

>

Siguiente

</button>

</div>

</div>

</div>

)

}
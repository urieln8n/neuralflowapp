import fs from "fs"
import path from "path"
import { Mail, Phone, Calendar, MessageSquare } from "lucide-react"

export default function LeadsPage(){

const filePath = path.join(process.cwd(),"data","leads.json")

let leads:any[] = []

try{

const file = fs.readFileSync(filePath,"utf8")
leads = JSON.parse(file)

}catch(err){
leads = []
}

const total = leads.length
const today = new Date().toISOString().slice(0,10)

const todayLeads = leads.filter((l)=>l.date?.includes(today)).length

return(

<div className="min-h-screen bg-[#0b0b0f] text-white p-10">

<div className="max-w-7xl mx-auto">

{/* HEADER */}

<div className="mb-10">

<h1 className="text-4xl font-bold mb-3">
CRM de Leads
</h1>

<p className="text-gray-400">
Clientes capturados automáticamente por tu chatbot de IA
</p>

</div>

{/* STATS */}

<div className="grid md:grid-cols-3 gap-6 mb-10">

<div className="bg-white/5 border border-white/10 rounded-xl p-6">

<p className="text-gray-400 text-sm">
Total Leads
</p>

<p className="text-3xl font-bold mt-2">
{total}
</p>

</div>

<div className="bg-white/5 border border-white/10 rounded-xl p-6">

<p className="text-gray-400 text-sm">
Leads Hoy
</p>

<p className="text-3xl font-bold mt-2">
{todayLeads}
</p>

</div>

<div className="bg-white/5 border border-white/10 rounded-xl p-6">

<p className="text-gray-400 text-sm">
Conversión estimada
</p>

<p className="text-3xl font-bold mt-2">
{Math.round(total * 0.12)}
</p>

</div>

</div>

{/* TABLE */}

<div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">

<div className="overflow-x-auto">

<table className="w-full text-sm">

<thead className="bg-white/5 text-gray-400">

<tr>

<th className="p-4 text-left">Lead</th>
<th className="p-4 text-left">Teléfono</th>
<th className="p-4 text-left">Mensaje</th>
<th className="p-4 text-left">Fecha</th>
<th className="p-4 text-left">Estado</th>

</tr>

</thead>

<tbody>

{leads.length === 0 && (

<tr>

<td colSpan={5} className="p-10 text-center text-gray-500">

Aún no hay leads capturados

</td>

</tr>

)}

{leads.map((lead,index)=>(

<tr
key={index}
className="border-t border-white/10 hover:bg-white/5 transition"
>

<td className="p-4">

<div className="flex items-center gap-3">

<div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
<Mail size={16}/>
</div>

<div>

<p className="font-semibold">
{lead.email || "Sin email"}
</p>

<p className="text-xs text-gray-500">
Lead capturado
</p>

</div>

</div>

</td>

<td className="p-4">

<div className="flex items-center gap-2 text-gray-300">

<Phone size={14}/>

{lead.phone || "-"}

</div>

</td>

<td className="p-4 text-gray-300 max-w-md">

{lead.message}

</td>

<td className="p-4">

<div className="flex items-center gap-2 text-gray-400">

<Calendar size={14}/>

{lead.date}

</div>

</td>

<td className="p-4">

<span className="px-3 py-1 text-xs rounded-full bg-green-500/20 text-green-400">

Nuevo

</span>

</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

</div>

</div>

)

}
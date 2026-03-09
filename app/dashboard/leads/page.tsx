import fs from "fs"
import path from "path"

export default function LeadsPage(){

const filePath = path.join(process.cwd(),"data","leads.json")

let leads:any[] = []

try{

const file = fs.readFileSync(filePath,"utf8")
leads = JSON.parse(file)

}catch(err){
leads = []
}

return(

<div style={{padding:"40px"}}>

<h1 style={{fontSize:"28px",marginBottom:"20px"}}>
CRM de Leads
</h1>

<p style={{marginBottom:"20px",color:"#666"}}>
Clientes capturados automáticamente por el chatbot IA
</p>

<div style={{
background:"white",
borderRadius:"10px",
padding:"20px",
boxShadow:"0 2px 10px rgba(0,0,0,0.05)"
}}>

<table style={{width:"100%",borderCollapse:"collapse"}}>

<thead>

<tr style={{background:"#f5f5f5"}}>

<th style={{padding:"10px",textAlign:"left"}}>Email</th>
<th style={{padding:"10px",textAlign:"left"}}>Teléfono</th>
<th style={{padding:"10px",textAlign:"left"}}>Mensaje</th>
<th style={{padding:"10px",textAlign:"left"}}>Fecha</th>

</tr>

</thead>

<tbody>

{leads.length === 0 && (

<tr>
<td colSpan={4} style={{padding:"20px"}}>
No hay leads aún
</td>
</tr>

)}

{leads.map((lead,index)=>(

<tr key={index} style={{borderTop:"1px solid #eee"}}>

<td style={{padding:"10px"}}>
{lead.email || "-"}
</td>

<td style={{padding:"10px"}}>
{lead.phone || "-"}
</td>

<td style={{padding:"10px"}}>
{lead.message}
</td>

<td style={{padding:"10px"}}>
{lead.date}
</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

)

}
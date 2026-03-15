"use client"

import { useState } from "react"

type Lead = {
  company:string
  email:string
  message:string
}

type Props = {
  lead: Lead
}

export default function HotLeadEmailGenerator({ lead }: Props){

const [email,setEmail] = useState("")

const generateEmail = ()=>{

setEmail(`
Hola,

He visto ${lead.company} y creo que podríamos ayudaros a automatizar la captación de clientes con IA.

Si te interesa podemos mostrarte una demo rápida.

Un saludo.
`)

}

return(

<div className="mt-3">

<button
onClick={generateEmail}
className="bg-purple-600 px-3 py-1 rounded text-sm"
>
Generar email
</button>

{email && (

<textarea
className="w-full mt-2 p-2 bg-gray-800 rounded"
value={email}
readOnly
/>

)}

</div>

)

}
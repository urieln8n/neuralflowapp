import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function POST(req: Request) {

try {

const body = await req.json()

const message = body?.message || ""
const history = body?.history || []

/* -------- DETECTAR EMAIL Y TELEFONO -------- */

const emailMatch = message.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)

const phoneMatch = message.match(/[0-9]{7,15}/)

/* -------- GUARDAR LEAD -------- */

if(emailMatch || phoneMatch){

const filePath = path.join(process.cwd(),"data","leads.json")

let leads:any[] = []

try{

const file = fs.readFileSync(filePath,"utf8")
leads = JSON.parse(file)

}catch(err){
leads = []
}

leads.push({

email: emailMatch ? emailMatch[0] : null,
phone: phoneMatch ? phoneMatch[0] : null,
message: message,
date: new Date().toISOString()

})

fs.writeFileSync(filePath,JSON.stringify(leads,null,2))

}

/* -------- PROMPT IA -------- */

const systemPrompt = `
Eres un asistente experto en automatización de negocios.

Tu trabajo es:

- ayudar empresas a automatizar procesos
- recomendar chatbots con IA
- recomendar automatización de ventas
- captar clientes interesados

Responde claro, profesional y breve.

Si el usuario quiere información avanzada, sugiere:
agendar demostración o hablar por WhatsApp.
`

let conversation = systemPrompt + "\n"

history.forEach((msg:any)=>{
conversation += `${msg.role}: ${msg.content}\n`
})

conversation += `user: ${message}`

/* -------- LLAMADA A OLLAMA -------- */

const response = await fetch("http://localhost:11434/api/generate",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

model:"llama3",
prompt:conversation,
stream:false

})

})

const data = await response.json()

return NextResponse.json({

reply:data.response

})

}catch(error){

console.error(error)

return NextResponse.json(
{ reply:"Error con la IA" },
{ status:500 }
)

}

}
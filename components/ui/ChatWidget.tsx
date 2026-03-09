"use client"

import { useState, useRef, useEffect } from "react"
import { Send, MessageCircle, X } from "lucide-react"

type Message = {
  role: "user" | "assistant"
  content: string
}

export default function ChatWidget(){

const [open,setOpen] = useState(false)
const [input,setInput] = useState("")
const [loading,setLoading] = useState(false)

const bottomRef = useRef<HTMLDivElement>(null)

const [messages,setMessages] = useState<Message[]>([
{
role:"assistant",
content:"👋 Hola! Soy tu asistente de IA. ¿Qué necesitas automatizar?"
}
])

useEffect(()=>{
bottomRef.current?.scrollIntoView({behavior:"smooth"})
},[messages])

async function askAI(message:string){

setLoading(true)

try{

const res = await fetch("/api/chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify({
message: message,
history: messages
})
})

const data = await res.json()

setMessages(prev => [
...prev,
{
role:"assistant",
content: data.reply
}
])

}catch(error){

setMessages(prev => [
...prev,
{
role:"assistant",
content:"Error conectando con la IA"
}
])

}

setLoading(false)

}

function sendMessage(){

if(!input.trim()) return

const userMsg:Message = {
role:"user",
content:input
}

setMessages(prev => [...prev,userMsg])

askAI(input)

setInput("")

}

function quick(text:string){

const userMsg:Message = {
role:"user",
content:text
}

setMessages(prev => [...prev,userMsg])

askAI(text)

}

return(

<>

<button
onClick={()=>setOpen(!open)}
className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-center shadow-xl hover:scale-110 transition z-50"
>
{open ? <X size={26}/> : <MessageCircle size={26}/>}
</button>

{open && (

<div className="fixed bottom-24 right-6 w-[380px] h-[580px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 z-50">

<div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4">

<h3 className="font-semibold text-sm">
Asistente de ventas IA
</h3>

<p className="text-xs opacity-80">
Automatización para negocios
</p>

</div>

<div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">

{messages.map((msg,i)=>(

<div
key={i}
className={`flex ${
msg.role==="user"
? "justify-end"
: "justify-start"
}`}
>

<div
className={`px-4 py-2 rounded-xl text-sm max-w-[80%] ${
msg.role==="user"
? "bg-indigo-600 text-white"
: "bg-white text-gray-800 border"
}`}
>

{msg.content}

</div>

</div>

))}

{loading && (
<div className="text-sm text-gray-500 italic">
IA escribiendo...
</div>
)}

<div ref={bottomRef}/>

{messages.length < 3 && (

<div className="space-y-2 pt-2">

<button
onClick={()=>quick("Quiero automatizar mi negocio")}
className="w-full bg-indigo-600 text-white py-2 rounded-lg text-sm hover:bg-indigo-700"
>
Automatizar mi negocio
</button>

<button
onClick={()=>quick("Necesito un chatbot para mi web")}
className="w-full bg-purple-600 text-white py-2 rounded-lg text-sm hover:bg-purple-700"
>
Chatbot para mi web
</button>

</div>

)}

</div>

<div className="p-3 border-t flex gap-2 bg-white">

<input
value={input}
onChange={(e)=>setInput(e.target.value)}
onKeyDown={(e)=>{
if(e.key==="Enter") sendMessage()
}}
placeholder="Escribe tu mensaje..."
className="flex-1 border rounded-lg px-3 py-2 text-sm text-black focus:outline-none"
/>

<button
onClick={sendMessage}
className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition"
>
<Send size={18}/>
</button>

</div>

<div className="p-3 border-t bg-white space-y-2">

<button
className="w-full bg-indigo-600 text-white py-2 rounded-lg text-sm hover:bg-indigo-700"
>
Agendar demostración
</button>

<a
href="https://wa.me/34645466308"
target="_blank"
className="block text-center w-full bg-green-500 text-white py-2 rounded-lg text-sm hover:bg-green-600"
>
WhatsApp
</a>

</div>

</div>

)}

</>

)

}
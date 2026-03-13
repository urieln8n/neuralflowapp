"use client"

import React, { useState } from "react"

type Lead = {
  id: number
  company: string
  industry: string
  phone: string
  email: string
  score: number
  status: string
}

type EmailTemplate = {
  subject: string
  body: string
}

interface Props {
  leads: Lead[]
}

export default function HotLeadEmailGenerator({ leads }: Props) {
  const [generatedEmails, setGeneratedEmails] = useState<EmailTemplate[]>([])

  const generateEmails = () => {
    const hotLeads = leads.filter((l) => l.score >= 70)
    const emails = hotLeads.map((lead) => ({
      subject: `🚀 ${lead.company} + IA para acelerar tus ventas`,
      body: `Hola [Nombre del contacto],

Soy [Tu nombre] de neuralfloX.AI, una plataforma de IA que ayuda a empresas como ${lead.company} a generar leads de alto valor y automatizar el seguimiento en tiempo real.

Hemos identificado que tu empresa es un cliente caliente, y creemos que nuestra solución puede incrementar tu tasa de conversión significativamente.

Si quieres, puedo mostrarte una demo rápida de cómo funciona con tu sector y tus datos reales.

¿Te gustaría agendar 15 minutos esta semana para verlo en acción?

Saludos,
[Tu nombre]
[Cargo]
neuralfloX.AI
`
    }))
    setGeneratedEmails(emails)
  }

  return (
    <div className="bg-gray-900 text-white p-6 rounded-xl space-y-4">
      <h2 className="text-2xl font-bold">Generador de Emails para Leads Calientes</h2>
      <p className="text-gray-400">
        Se generarán emails para todos los leads con <strong>Score ≥ 70</strong>.
      </p>

      <button
        onClick={generateEmails}
        className="bg-linear-to-r from-purple-500 to-cyan-400 px-6 py-3 rounded-lg font-semibold"
      >
        Generar Emails
      </button>

      {generatedEmails.length > 0 && (
        <div className="mt-6 space-y-4">
          {generatedEmails.map((email, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg border border-gray-700"
            >
              <p className="text-yellow-400 font-semibold">Asunto:</p>
              <p className="mb-2">{email.subject}</p>

              <p className="text-yellow-400 font-semibold">Cuerpo:</p>
              <pre className="whitespace-pre-wrap text-gray-200">{email.body}</pre>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
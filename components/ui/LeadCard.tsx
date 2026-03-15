"use client"

import React from "react"
import HotLeadEmailGenerator from "@/components/ui/HotLeadEmailGenerator"

type Lead = {
  id: number
  name: string
  email: string
  company: string
  message: string
  status: string
}

type Props = {
  lead: Lead
}

export default function LeadCard({ lead }: Props) {

  return (

    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-4 text-white">

      {/* Nombre + empresa */}
      <h3 className="text-xl font-bold mb-2">
        {lead.name} — {lead.company}
      </h3>

      {/* Email */}
      <p className="text-gray-400">
        {lead.email}
      </p>

      {/* Mensaje */}
      <p className="text-gray-400 mt-2">
        {lead.message}
      </p>

      {/* Status */}
      <div className="mt-3">
        <span className="text-xs bg-purple-600 px-2 py-1 rounded">
          {lead.status}
        </span>
      </div>

      {/* Generador de email IA */}
      <div className="mt-4">
        <HotLeadEmailGenerator lead={lead} />
      </div>

    </div>

  )

}
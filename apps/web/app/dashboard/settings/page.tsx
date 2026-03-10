"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function SettingsPage(){

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [company,setCompany] = useState("")

  return(

    <div className="min-h-screen bg-black text-white p-10">

      <div className="max-w-4xl mx-auto">

        {/* HEADER */}

        <motion.div
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.5}}
          className="mb-10"
        >

          <h1 className="text-4xl font-bold mb-2">
            Settings
          </h1>

          <p className="text-gray-400">
            Manage your NeuralFlow workspace and account.
          </p>

        </motion.div>


        {/* SETTINGS CARD */}

        <motion.div
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          transition={{delay:0.1}}
          className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg"
        >

          <div className="grid gap-6">

            <div>

              <label className="block text-sm mb-2 text-gray-300">
                Full Name
              </label>

              <input
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="w-full p-3 rounded-lg bg-black border border-white/10 focus:border-cyan-400 outline-none"
              />

            </div>


            <div>

              <label className="block text-sm mb-2 text-gray-300">
                Email
              </label>

              <input
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full p-3 rounded-lg bg-black border border-white/10 focus:border-cyan-400 outline-none"
              />

            </div>


            <div>

              <label className="block text-sm mb-2 text-gray-300">
                Company
              </label>

              <input
                value={company}
                onChange={(e)=>setCompany(e.target.value)}
                className="w-full p-3 rounded-lg bg-black border border-white/10 focus:border-cyan-400 outline-none"
              />

            </div>


            <button className="mt-6 px-6 py-3 rounded-xl font-semibold
            bg-gradient-to-r from-cyan-500 to-blue-500
            shadow-lg shadow-cyan-500/20">

              Save Changes

            </button>

          </div>

        </motion.div>

      </div>

    </div>

  )
}
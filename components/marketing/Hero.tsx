"use client"

import { motion } from "framer-motion"
import Particles from "@/components/ui/Particles"

export default function Hero() {

  return (

    <section className="relative overflow-hidden bg-black text-white">

      {/* AI PARTICLES BACKGROUND */}

      <Particles />

      {/* glow backgrounds */}

      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-600/30 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/30 blur-[150px] rounded-full"></div>

      {/* MAIN CONTAINER */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-32 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}

        <div>

          {/* badge */}

          <motion.div
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.6}}
            className="inline-block px-4 py-1 mb-6 rounded-full bg-purple-600/30 text-sm text-purple-200"
          >
            AI Automation Platform
          </motion.div>


          {/* title */}

          <motion.h1
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.8}}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >

            Automate your <br />

            business with

            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">

              {" "}NeuralFlow AI

            </span>

          </motion.h1>


          {/* description */}

          <motion.p
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
            transition={{delay:0.2,duration:0.8}}
            className="text-gray-400 mt-6 max-w-xl"
          >

            NeuralFlow builds intelligent AI automations that scale your business.
            Connect workflows, deploy AI agents and manage everything from a
            single dashboard.

          </motion.p>


          {/* buttons */}

          <motion.div
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
            transition={{delay:0.3,duration:0.8}}
            className="flex gap-4 mt-8"
          >

            <button className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 hover:scale-105 transition">

              Start Free

            </button>

            <button className="px-6 py-3 rounded-xl border border-white/20 hover:border-cyan-400 transition">

              View Automations

            </button>

          </motion.div>


          {/* stats */}

          <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.6}}
            className="flex gap-10 mt-10 text-sm text-gray-400"
          >

            <div>
              <p className="text-2xl text-white font-bold">500+</p>
              AI Workflows
            </div>

            <div>
              <p className="text-2xl text-white font-bold">10k+</p>
              Automations
            </div>

            <div>
              <p className="text-2xl text-white font-bold">99.9%</p>
              Uptime
            </div>

          </motion.div>

        </div>

        {/* RIGHT SIDE DASHBOARD */}

        <motion.div

          initial={{opacity:0,scale:0.9}}
          animate={{opacity:1,scale:1}}
          transition={{duration:0.8}}

          whileHover={{scale:1.02}}

          className="relative"

        >

          {/* glow border */}

          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 blur-xl opacity-40"></div>

          {/* floating animation */}

          <motion.div

            animate={{y:[0,-12,0]}}
            transition={{duration:4,repeat:Infinity}}

            className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6"

          >

            <div className="flex justify-between mb-4">

              <p className="text-sm text-gray-400">AI Automations</p>

              <span className="text-green-400 text-xs">Active</span>

            </div>

            {/* automation cards */}

            <div className="space-y-4">

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">

                <p className="font-semibold">Lead Generation AI</p>

                <p className="text-sm text-gray-400">

                  Collects and processes leads automatically

                </p>

              </div>


              <div className="p-4 rounded-lg bg-white/5 border border-white/10">

                <p className="font-semibold">Customer Support Agent</p>

                <p className="text-sm text-gray-400">

                  AI chatbot answering support tickets

                </p>

              </div>


              <div className="p-4 rounded-lg bg-white/5 border border-white/10">

                <p className="font-semibold">Marketing Automation</p>

                <p className="text-sm text-gray-400">

                  AI campaigns and email workflows

                </p>

              </div>

            </div>

          </motion.div>

        </motion.div>

      </div>

    </section>

  )

}
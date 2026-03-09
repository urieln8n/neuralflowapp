"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Connect",
    description:
      "Integrate your tools, APIs, and data sources in seconds using NeuralFlow’s intelligent connectors.",
  },
  {
    number: "02",
    title: "Automate",
    description:
      "Our AI analyzes your workflows and automatically builds optimized automation pipelines.",
  },
  {
    number: "03",
    title: "Scale",
    description:
      "Deploy AI agents that continuously optimize operations and scale your business faster.",
  },
]

export default function HowItWorks() {
  return (
    <section className="relative py-32 bg-black text-white overflow-hidden">

      {/* background glow */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-purple-600/20 blur-[180px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* title */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It Works
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Our AI platform automates your workflows, analyzes data,
            and helps your business grow faster.
          </p>

        </motion.div>

        {/* steps */}

        <div className="grid md:grid-cols-3 gap-10">

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}

              whileHover={{
                y: -10,
                scale: 1.03,
              }}

              className="relative group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 transition-all duration-300"
            >

              {/* hover glow */}

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-purple-600/20 to-cyan-500/20 blur-xl"></div>

              <div className="relative z-10">

                {/* number */}

                <div className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">

                  {step.number}

                </div>

                {/* title */}

                <h3 className="text-2xl font-semibold mb-4">

                  {step.title}

                </h3>

                {/* description */}

                <p className="text-gray-400 leading-relaxed">

                  {step.description}

                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}
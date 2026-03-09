"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$19",
    description: "Perfect for small teams starting with AI automation.",
    features: [
      "5 AI Automations",
      "Basic AI Agents",
      "API Integrations",
      "Email Support",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$49",
    description: "Advanced AI workflows for growing companies.",
    features: [
      "Unlimited Automations",
      "Advanced AI Agents",
      "Priority Processing",
      "Advanced Analytics",
      "Priority Support",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "Full AI automation infrastructure for enterprises.",
    features: [
      "Unlimited AI Agents",
      "Custom AI Models",
      "Dedicated Infrastructure",
      "Security & Compliance",
      "24/7 Premium Support",
    ],
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section className="relative py-32 bg-black text-white overflow-hidden">

      {/* glow background */}

      <div className="absolute left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-purple-600/10 blur-[160px] rounded-full"></div>

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

            Simple Pricing

          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">

            Powerful AI tools to grow your business with intelligent automation.

          </p>

        </motion.div>

        {/* cards */}

        <div className="grid md:grid-cols-3 gap-10">

          {plans.map((plan, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}

              whileHover={{
                y: -12,
                scale: 1.03,
              }}

              className={`relative rounded-2xl border backdrop-blur-xl p-10 transition-all duration-300
              ${plan.highlight
                ? "border-cyan-400 bg-white/10 shadow-[0_0_40px_rgba(34,211,238,0.2)]"
                : "border-white/10 bg-white/5"
              }`}
            >

              {/* recommended badge */}

              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-semibold mb-2">

                {plan.name}

              </h3>

              <p className="text-gray-400 text-sm mb-6">

                {plan.description}

              </p>

              <div className="text-4xl font-bold mb-8">

                {plan.price}
                <span className="text-gray-400 text-sm"> / month</span>

              </div>

              <ul className="space-y-4 mb-10">

                {plan.features.map((feature, idx) => (

                  <li key={idx} className="flex items-center gap-3 text-gray-300">

                    <Check className="text-cyan-400" size={18} />

                    {feature}

                  </li>

                ))}

              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold transition
                ${plan.highlight
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105"
                  : "border border-white/20 hover:border-cyan-400"
                }`}
              >

                Get Started

              </button>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}
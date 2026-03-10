"use client"

import { motion } from "framer-motion"

const plans = [
  {
    name: "Starter",
    price: "€19",
    description: "Perfect for small websites starting with AI automation.",
    features: [
      "1 Website",
      "1,000 chats/month",
      "Basic AI automation",
      "Email support"
    ]
  },
  {
    name: "Pro",
    price: "€49",
    description: "Ideal for growing businesses using automation.",
    features: [
      "5 Websites",
      "10,000 chats/month",
      "Advanced automations",
      "Analytics dashboard",
      "Priority support"
    ]
  },
  {
    name: "Agency",
    price: "€199",
    description: "Built for agencies managing multiple clients.",
    features: [
      "Unlimited websites",
      "Unlimited chats",
      "White-label widget",
      "Team collaboration",
      "API access"
    ]
  }
]

export default function PricingPage() {

  return (

    <div className="min-h-screen bg-black text-white pt-32 px-6">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}

        <motion.div
          initial={{ opacity:0, y:20 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }}
          className="text-center mb-20"
        >

          <h1 className="text-5xl font-bold mb-6
          bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400
          bg-clip-text text-transparent">

            Simple Pricing

          </h1>

          <p className="text-gray-400 text-lg">
            Choose the plan that fits your automation workflow.
          </p>

        </motion.div>

        {/* PLANS */}

        <div className="grid md:grid-cols-3 gap-10">

          {plans.map((plan,i)=>(

            <motion.div
              key={i}
              initial={{ opacity:0, y:40 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:i*0.1 }}
              whileHover={{ scale:1.03 }}

              className="p-8 rounded-2xl border border-white/10
              bg-white/5 backdrop-blur-lg
              hover:border-cyan-400/40 transition"

            >

              <h3 className="text-2xl font-semibold mb-3">
                {plan.name}
              </h3>

              <p className="text-gray-400 mb-6">
                {plan.description}
              </p>

              <div className="text-4xl font-bold mb-6">
                {plan.price}
                <span className="text-gray-400 text-lg">/mo</span>
              </div>

              <ul className="space-y-3 mb-8">

                {plan.features.map((feature,j)=>(
                  <li key={j} className="text-gray-300">
                    ✓ {feature}
                  </li>
                ))}

              </ul>

              <button className="w-full py-3 rounded-xl font-semibold
              bg-gradient-to-r from-cyan-500 to-blue-500
              shadow-lg shadow-cyan-500/20">

                Start Free Trial

              </button>

            </motion.div>

          ))}

        </div>

      </div>

    </div>

  )
}
"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="relative bg-black text-white border-t border-white/10 pt-20 pb-10 overflow-hidden">

      {/* glow */}

      <div className="absolute left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-600/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid md:grid-cols-4 gap-12 mb-16">

          {/* logo */}

          <div>

            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">

              NeuralFlow

            </h3>

            <p className="text-gray-400 mt-4">

              AI automation platform helping companies deploy
              intelligent workflows and scale operations.

            </p>

          </div>

          {/* product */}

          <div>

            <h4 className="font-semibold mb-4">

              Product

            </h4>

            <ul className="space-y-3 text-gray-400">

              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Automations</li>
              <li className="hover:text-white cursor-pointer">Integrations</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>

            </ul>

          </div>

          {/* company */}

          <div>

            <h4 className="font-semibold mb-4">

              Company

            </h4>

            <ul className="space-y-3 text-gray-400">

              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Contact</li>

            </ul>

          </div>

          {/* newsletter */}

          <div>

            <h4 className="font-semibold mb-4">

              Stay Updated

            </h4>

            <p className="text-gray-400 mb-4">

              Get AI automation insights and updates.

            </p>

            <div className="flex gap-2">

              <input
                type="email"
                placeholder="Your email"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full"
              />

              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-sm">

                Join

              </button>

            </div>

          </div>

        </div>

        {/* bottom */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm border-t border-white/10 pt-8"
        >

          <p>

            © 2026 NeuralFlow AI. All rights reserved.

          </p>

          <div className="flex gap-6 mt-4 md:mt-0">

            <span className="hover:text-white cursor-pointer">Privacy</span>
            <span className="hover:text-white cursor-pointer">Terms</span>
            <span className="hover:text-white cursor-pointer">Security</span>

          </div>

        </motion.div>

      </div>

    </footer>
  )
}
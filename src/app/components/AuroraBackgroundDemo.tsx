"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { BiSolidCoffeeBean } from "react-icons/bi";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="relative flex flex-col gap-6 items-center justify-center px-4 py-12 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-7xl font-bold text-center tracking-tight"
        >
          <div className="inline-flex items-center font-bold gap-1 bg-clip-text text-transparent bg-gradient-to-r from-stone-200 to-stone-400">
            C
            <BiSolidCoffeeBean className="w-8 h-8 md:w-12 md:h-12 -mx-1 text-stone-300 mt-2" />
            deCafé
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-light text-lg md:text-2xl text-stone-300 text-center max-w-2xl leading-relaxed"
        >
          Real-Time Code Collaboration Made Easy.
        </motion.div>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 text-base px-6 py-2 rounded-full shadow-lg transition-all duration-200 bg-gradient-to-r from-stone-200 to-stone-400 hover:from-stone-300 hover:to-stone-500 text-gray-900 font-medium"
        >
          Start Now
        </motion.button>
      </motion.div>
    </AuroraBackground>
  );
}

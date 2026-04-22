"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function MainHero() {
  return (
    <section className="w-full min-h-screen bg-black flex flex-col justify-center items-center px-6 pt-24 pb-12">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-12">
        
        {/* العنوان الرئيسي: صادم، بارد، هندسي */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[10px] font-mono text-[#444] uppercase tracking-[0.5em] mb-2">
            Mortality Prediction Terminal
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] max-w-2xl">
            Trade on the <span className="text-[#800000]">Inevitable</span>.
          </h1>
          <p className="mt-6 text-sm md:text-base text-gray-500 font-serif italic max-w-lg leading-relaxed">
            "Every beat is a countdown. Turn the certainty of death into unyielding liquidity. The ultimate non-custodial market."
          </p>
        </motion.div>

        {/* الـ CTA: واضحة، كبيرة للموبايل، مغرية للجشع */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-6 w-full max-w-md"
        >
          <motion.a 
            href="/signup"
            whileHover={{ scale: 1.02, backgroundColor: "#fff", color: "#000" }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#800000] text-white py-5 text-xs font-bold uppercase tracking-[0.3em] text-center transition-colors shadow-[0_0_15px_rgba(128,0,0,0.3)]"
          >
            Create Anonymous Wallet
          </motion.a>
          
          <motion.a 
            href="/active-cases"
            whileHover={{ opacity: 0.7 }}
            className="text-white text-[10px] font-mono uppercase tracking-[0.3em] py-2"
          >
            View Active Cases
          </motion.a>
        </motion.div>

        {/* عنصر بصري خفيف: يوحي بالحركة والوقت (Minimal) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 w-full max-w-xs border-t border-[#111] pt-4 text-center"
        >
          <span className="text-[9px] font-mono text-gray-700 uppercase tracking-widest">
            Network Status: Live // Non-Custodial
          </span>
        </motion.div>

      </div>
    </section>
  );
}
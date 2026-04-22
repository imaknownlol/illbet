"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function MainBody() {
  const protocols = [
    {
      step: "01",
      title: "Zero-Knowledge Entry",
      desc: "No emails. No IDs. No KYC. Your identity is a 12-word seed phrase. Lose it, and you lose access forever. We keep nothing."
    },
    {
      step: "02",
      title: "XMR Liquidity",
      desc: "All stakes are processed via Monero (XMR). Untraceable, private, and decoupled from traditional banking surveillance."
    },
    {
      step: "03",
      title: "Non-Custodial Settlement",
      desc: "We don't hold your funds. Stakes are locked in automated smart contracts. Winners are paid instantly upon case resolution."
    }
  ];

  return (
    <section className="w-full bg-black py-24 px-6 border-t border-[#111]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header القسم */}
        <div className="mb-16">
          <span className="text-[10px] font-mono text-[#800000] uppercase tracking-[0.5em]">Security Protocol</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 uppercase tracking-tighter">
            Anonymity is not a feature. <br/> It is the foundation.
          </h2>
        </div>

        {/* شبكة البروتوكولات */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {protocols.map((p, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col gap-4 border-l border-[#111] pl-6 py-2"
            >
              <span className="text-xs font-mono text-gray-700">{p.step}</span>
              <h3 className="text-lg font-bold text-white uppercase tracking-tight">{p.title}</h3>
              <p className="text-sm text-gray-500 font-serif leading-relaxed italic">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
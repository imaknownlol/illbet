"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function MainAdsAndWins() {
  // نصوص تحفيزية جافة (أرباح وهمية لإغراء المراهن)
  const winningFeed = [
    "WALLET_ID: 0x...8f2a PAID 12.4 XMR (CASE #09)",
    "NEW HIGH-STAKE POSITION OPENED ON CASE #12 [240.0 XMR]",
    "TERMINAL UPDATE: 4 CASES RESOLVED IN THE LAST 1H",
    "WALLET_ID: 0x...31bc PAID 45.0 XMR (CASE #21)",
    "SYSTEM: ALL WITHDRAWALS PROCESSED VIA MONERO NETWORK",
  ];

  return (
    <section className="w-full bg-black pt-20 font-mono">
      {/* 1. شريط التحفيز (Ticker) */}
      <div className="w-full border-y border-[#111] bg-[#050505] overflow-hidden py-2 flex">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-12"
        >
          {[...winningFeed, ...winningFeed].map((text, i) => (
            <span 
              key={i} 
              className="text-[9px] text-gray-500 uppercase tracking-[0.2em] flex items-center gap-4"
            >
              <span className="w-1 h-1 bg-[#800000] rounded-full"></span>
              {text}
            </span>
          ))}
        </motion.div>
      </div>

      {/* 2. منطقة الإعلان (Ad Container) */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="w-full h-[120px] md:h-[160px] bg-[#0d0d0d] border border-[#1a1a1a] relative overflow-hidden group cursor-pointer">
          
          {/* الصورة الإعلانية كمثال */}
          <img 
            src="https://media.licdn.com/dms/image/v2/D4D12AQEnUkAGhDpuAw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1710134579250?e=2147483647&v=beta&t=5-hbO_VDTNPD_XjU6lLmj1ZARyMCiNm1haqmvg-kow0" 
            alt="Ad Banner"
            className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-50 transition-opacity duration-500"
          />

         


          {/* تأثير خطوط المسح (Scanlines) - لتعزيز الطابع التقني */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%] opacity-20"></div>
          
          {/* إطار حاد عند التحويم */}
          <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors duration-500"></div>
        </div>
      </div>
    </section>
  );
}
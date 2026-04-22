"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function MainHeader() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="w-full bg-black border-b border-[#111] fixed top-0 left-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* اليسار: اللوجو - جاف وداكن */}
        <div className="flex items-center">
          <img 
            src="/illbet.png" 
            alt="illBet Logo"
            className="h-6 w-auto object-contain grayscale opacity-80"
          />
        </div>

        {/* اليمين: SIGNUP LOGIN - نصوص بيضاء، تباعد واسع */}
        <div className="flex items-center gap-8 text-white text-[10px] font-bold  tracking-[0.4em]">
          <motion.a 
            href="/signup"
            whileHover={{ opacity: 0.6 }}
            className="transition-opacity"
          >
            Signup
          </motion.a>
          
          <motion.a 
            href="/login"
            whileHover={{ opacity: 0.6 }}
            className="transition-opacity"
          >
            Login
          </motion.a>
        </div>

      </div>
    </motion.header>
  );
}
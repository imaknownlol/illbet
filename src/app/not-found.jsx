"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center px-6 text-center">
      {/* عنصر بصري: رمز خطأ جاف */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-8"
      >
        <span className="text-[120px] font-black text-[#111] leading-none select-none">
          404
        </span>
      </motion.div>

      {/* نص الخطأ */}
      <div className="flex flex-col gap-4 max-w-xs">
        <h1 className="text-white text-sm font-bold uppercase tracking-[0.3em]">
          Record Not Found
        </h1>
        <p className="text-gray-600 text-[11px] font-serif italic leading-relaxed">
          "The file you are looking for has been purged, moved, or never existed in this terminal. Verify the link and try again."
        </p>
      </div>

      {/* زر العودة */}
      <motion.a 
        href="/"
        whileHover={{ x: -5 }}
        className="mt-12 flex items-center gap-3 text-white text-[10px] font-mono uppercase tracking-[0.2em] group"
      >
        <span className="text-[#800000] group-hover:text-white transition-colors">←</span>
        <span>Return to Terminal</span>
      </motion.a>

      {/* تفاصيل تقنية (خلفية) */}
      <div className="absolute bottom-10 left-10 hidden md:block">
        <p className="text-[8px] font-mono text-gray-800 uppercase vertical-text tracking-widest">
          Error_Code: 0x000404 // Null_Pointer_Exception
        </p>
      </div>
    </div>
  );
}
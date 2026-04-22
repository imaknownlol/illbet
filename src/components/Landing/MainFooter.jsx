"use client";
import React from 'react';

export default function MainFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black border-t border-[#111] px-6 py-12 pb-20 md:pb-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* اليسار: اللوجو والحقوق */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <img 
            src="/illbet.png" 
            alt="illBet Logo"
            className="h-5 w-auto object-contain grayscale opacity-30" 
          />
          <span className="text-[9px] font-mono text-gray-700 uppercase tracking-widest">
            © {currentYear} illBet Terminal. All rights reserved.
          </span>
        </div>

        {/* اليمين: الروابط القانونية - جافة جداً */}
        <div className="flex items-center gap-8 text-gray-500 text-[10px] font-mono uppercase tracking-[0.2em]">
          <a 
            href="/privacy" 
            className="hover:text-white transition-colors underline underline-offset-4 decoration-[#222]"
          >
            Privacy Policy
          </a>
          <a 
            href="/terms" 
            className="hover:text-white transition-colors underline underline-offset-4 decoration-[#222]"
          >
            Terms of Use
          </a>
        </div>


      </div>
    </footer>
  );
}
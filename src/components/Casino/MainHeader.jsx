"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, User } from 'lucide-react'; 
import Link from 'next/link';
import MobileNavBar from './MobileNavBar'; // استدعاء الكومبوننت الخاص بك

export default function MainHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [balance, setBalance] = useState("142.85");

  return (
    <>
      <header className="w-full bg-black border-b border-[#111] fixed top-0 left-0 z-50 px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* اليسار: اللوجو الأصلي illbet */}
          <div className="flex items-center">
            <Link href={'/home'}>
              <img 
                src="/illbet.png" 
                alt="illbet" 
                className="h-5 w-auto grayscale brightness-200"
              />
            </Link>
          </div>

          {/* اليمين: التفاعل (يظهر في الشاشات الكبيرة والمتوسطة) */}
          <div className="hidden md:flex items-center gap-4 md:gap-6">
            {isLoggedIn ? (
              <>
                <div className="flex flex-col items-end gap-0.5">
                  <span className="text-[8px] font-mono text-gray-500 uppercase tracking-tighter">Current Stake</span>
                  <div className="flex items-center gap-2 bg-[#0a0a0a] border border-[#1a1a1a] px-3 py-1.5 rounded-sm">
                    <span className="text-[#f60] font-bold text-xs">ɱ</span> 
                    <span className="text-white font-mono text-xs font-bold tracking-wider">{balance}</span>
                  </div>
                </div>

                <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
                  <Bell size={18} strokeWidth={1.5} />
                  <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#800000] rounded-full"></span>
                </button>

                <button className="w-9 h-9 border border-[#222] flex items-center justify-center rounded-full hover:border-white transition-all">
                  <User size={18} className="text-gray-300" strokeWidth={1.5} />
                </button>
              </>
            ) : (
              <div className="flex items-center gap-4 text-[10px] font-mono tracking-[0.2em]">
                <Link href="/login" className="text-gray-400 hover:text-white transition-colors">
                  LOGIN
                </Link>
                <Link href="/signup" className="bg-white text-black px-4 py-2 font-bold hover:bg-gray-200 transition-colors">
                  JOIN TERMINAL
                </Link>
              </div>
            )}
          </div>

          {/* في الموبايل: نعرض فقط الرصيد بشكل مبسط جداً بجانب اللوجو لو أردت، أو نتركه فارغاً والاعتماد كلياً على الـ NavBar بالأسفل */}
          <div className="flex md:hidden items-center gap-3">
             {isLoggedIn && (
               <div className="bg-[#0a0a0a] border border-[#1a1a1a] px-2 py-1 rounded-sm">
                 <span className="text-white font-mono text-[10px] font-bold tracking-wider">{balance} ɱ</span>
               </div>
             )}
          </div>
        </div>
      </header>

      {/* استدعاء نافبار الهاتف - يظهر فقط في الشاشات الصغيرة برمجياً داخل الكومبوننت نفسه */}
      {/* <MobileNavBar /> */}
    </>
  );
}
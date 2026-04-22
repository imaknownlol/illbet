"use client";
import React from 'react';
import { motion } from 'framer-motion';
import MainFooter from '../Landing/MainFooter';

export default function MainBody() {
  const patients = [
    {
      id: "RECORD_9920",
      image: "https://thepatientstory.com/wp-content/uploads/2023/06/20200226_093209.jpg",
      condition: "ACUTE MYOCARDIAL INFARCTION",
      status: "CRITICAL",
      pool: "142.85 XMR",
      location: "UNIT_04"
    },
    {
      id: "RECORD_9921",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo5tXBwcFE7clDvhW15m6fOcUxu0cMakw8Ug&s",
      condition: "STAGE IV ADENOCARCINOMA",
      status: "STABLE",
      pool: "12.00 XMR",
      location: "UNIT_09"
    }
  ];

  return (
    <div>
      <section className="w-full bg-black py-10 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header - جاف جداً */}
        <div className="border-b border-[#111] pb-4 mb-10 flex justify-between items-center">
          <h2 className="text-white text-xs tracking-[0.4em] uppercase">Active_Index</h2>
          <span className="text-[#800000] text-[10px] animate-pulse">● LIVE_FEED</span>
        </div>

        {/* Grid - بطاقتان في كل صف */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {patients.map((patient, index) => (
            <motion.a
              key={index}
              href={`/home/patient/${patient.id}`}
              className="relative group block bg-[#050505] border border-[#111]"
            >
              {/* الصورة - تأخذ مساحة كبيرة ومهيمنة */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-[#111]">
                <img 
                  src={patient.image} 
                  alt="Record" 
                  className="w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* ملصقات المعلومات فوق الصورة (Boxes) */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <div className="bg-[#800000] text-white text-[10px] px-3 py-1 font-bold uppercase tracking-widest">
                    {patient.status}
                  </div>
                  <div className="bg-white text-black text-[10px] px-3 py-1 font-bold uppercase tracking-widest">
                    {patient.condition}
                  </div>
                </div>

                {/* رقم السجل في الزاوية */}
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm text-gray-400 text-[9px] px-2 py-1">
                  ID: {patient.id}
                </div>
              </div>

              {/* المعلومات الأساسية تحت الصورة - التركيز على المال */}
              <div className="p-6 flex justify-between items-center bg-[#080808]">
                <div className="flex flex-col gap-1">
                  <span className="text-gray-600 text-[8px] uppercase tracking-widest font-bold">Total Stake Pool</span>
                  <span className="text-white text-xl font-bold tracking-tighter">
                    {patient.pool}
                  </span>
                </div>
                
                <div className="flex flex-col items-end gap-1">
                  <span className="text-gray-600 text-[8px] uppercase tracking-widest font-bold">Terminal Loc</span>
                  <span className="text-gray-300 text-[10px] uppercase border border-[#222] px-2 py-1">
                    {patient.location}
                  </span>
                </div>
              </div>

              {/* سهم الدخول - يظهر عند التحويم */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer بسيط للقسم */}
        <div className="mt-20 border-t border-[#111] pt-6 text-center">
          <span className="text-gray-800 text-[9px] uppercase tracking-[0.6em]">End_Of_Directory</span>
        </div>
      </div>
    </section>
    <MainFooter />
    </div>
  );
}
"use client";
import React, { use, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MainHeader  from '../../../../components/Casino/MainHeader';
import MainFooter from '../../../../components/Landing/MainFooter';
export default function PatientPage({ params }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  // State Management
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [betAmount, setBetAmount] = useState(0.1); // الحد الأدنى للرهان
  const [selectedDate, setSelectedDate] = useState("");
  
  // بيانات واقعية (بناءً على السكرابينق المتوقع)
  const patient = {
    id: id || "REF-9920",
    image: "https://thepatientstory.com/wp-content/uploads/2023/06/20200226_093209.jpg",
    disease_type: "HEART FAILURE / STAGE 4",
    description: "The subject is currently in the intensive care unit. Respiratory support is active. No family intervention recorded. High probability of system shutdown within the next 72 hours.",
    is_alive: true,
    market_stats: {
      pool_size: 142.85,
      min_bet: 0.1,
      consensus_date: "2026-04-25"
    }
  };

  // حاسبة الربح مع حماية من القيم السالبة
  const calculateReturn = () => {
    const amount = parseFloat(betAmount);
    if (isNaN(amount) || amount < patient.market_stats.min_bet || !selectedDate) return 0;
    
    const diffInDays = Math.abs(new Date(selectedDate) - new Date(patient.market_stats.consensus_date)) / (1000 * 60 * 60 * 24);
    const multiplier = 1.5 + (diffInDays * 0.4); 
    return (amount * multiplier).toFixed(3);
  };

  return (
    <div>
        <MainHeader />
        <main className="min-h-screen bg-black text-white font-sans pt-20 px-4 pb-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* اليسار: ملف الحالة */}
        <div className="lg:col-span-7 space-y-8">
          <div className="relative group">
            {/* عرض الصورة بشكل ضخم وملفت */}
            <div className="aspect-video w-full bg-[#111] overflow-hidden border border-[#222]">
              <img 
                src={patient.image} 
                className="w-full h-full object-cover grayscale contrast-125 opacity-60 group-hover:opacity-100 transition-opacity duration-500" 
                alt="Case Visual"
              />
              <div className="absolute top-4 left-4 bg-[#800000] px-3 py-1 text-[10px] font-bold tracking-widest">
                {patient.is_alive ? "STATUS: ACTIVE_LIFE" : "STATUS: TERMINATED"}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-[10px] text-gray-600  tracking-[0.4em]">{patient.id}</span>
              <div className="h-px flex-1 bg-[#111]"></div>
            </div>
            <h1 className="text-3xl font-black  tracking-tighter">{patient.disease_type}</h1>
            <p className="text-gray-500 text-sm leading-relaxed max-w-2xl border-l-2 border-[#800000] pl-6 py-2 italic font-sans">
              {patient.description}
            </p>
          </div>
        </div>

        {/* اليمين: محطة الرهان */}
        <div className="lg:col-span-5">
          <div className="sticky top-24 bg-[#050505] border border-[#111] p-8 space-y-8">
            <div>
              <span className="text-[9px] text-gray-600  tracking-widest block mb-2">Total Accumulated Pool</span>
              <div className="text-5xl font-black tracking-tighter text-white">
                {patient.market_stats.pool_size} <span className="text-sm text-gray-500 font-normal">XMR</span>
              </div>
            </div>

            <div className="space-y-4 border-t border-[#111] pt-6">
              <div className="flex justify-between text-[10px]">
                <span className="text-gray-600 ">Market Consensus</span>
                <span className="text-white">{patient.market_stats.consensus_date}</span>
              </div>
              <div className="flex justify-between text-[10px]">
                <span className="text-gray-600 ">Min Entry</span>
                <span className="text-white">{patient.market_stats.min_bet} XMR</span>
              </div>
            </div>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-white text-black py-5 text-xs font-black   hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            >
              Place Stake
            </button>
          </div>
        </div>
      </div>

      {/* Betting Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-md bg-[#080808] border border-[#222] p-8"
            >
              <h2 className="text-white text-lg font-black  tracking-tighter mb-8 border-b border-[#111] pb-4 font-sans">
                Stake Configuration
              </h2>

              <div className="space-y-6">
                {/* اختيار التاريخ */}
                <div className="space-y-2">
                  <label className="text-[9px] text-gray-600  tracking-widest">Expected Expiry Date</label>
                  <input 
                    type="date" 
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-black border border-[#222] p-4 text-white outline-none focus:border-[#800000] transition-colors"
                  />
                </div>

                {/* المبلغ مع التحقق */}
                <div className="space-y-2">
                  <label className="text-[9px] text-gray-600  tracking-widest">Amount (Min 0.1 XMR)</label>
                  <input 
                    type="number" 
                    step="0.1"
                    min="0.1"
                    value={betAmount}
                    onChange={(e) => setBetAmount(Math.max(0.1, parseFloat(e.target.value) || 0))}
                    className="w-full bg-black border border-[#222] p-4 text-white text-xl font-bold outline-none focus:border-[#800000]"
                  />
                </div>

                {/* حاسبة الشفافية */}
                <div className="bg-black p-6 border border-[#111] space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-gray-600 ">Estimated Payout</span>
                    <span className="text-xl font-black text-green-600">{calculateReturn()} XMR</span>
                  </div>
                  <p className="text-[8px] text-gray-800  leading-relaxed">
                    Accuracy Bonus: The closer you are to the actual time of clinical death, the higher your share of the pool.
                  </p>
                </div>

                <button className="w-full bg-[#800000] text-white py-5 text-xs font-black  tracking-[0.3em] hover:bg-red-700 transition-colors">
                  Confirm Anonymous Bet
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
    <MainFooter />
    </div>
  );
}
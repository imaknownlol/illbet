"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, RefreshCw } from 'lucide-react';
import Image from 'next/image';
import MainFooter from '../../components/Landing/MainFooter';
import MainHeader from '../../components/Landing/MainHeader';
import { useRouter } from 'next/navigation';
export default function AuthPage() {
  const [mode, setMode] = useState('signup'); // 'signup' or 'login'
  const [seedPhrase, setSeedPhrase] = useState([]);
  const [hasCopied, setHasCopied] = useState(false);

  const generateSeed = () => {
    const words = ["void", "logic", "cipher", "nexus", "dark", "grid", "secure", "static", "terminal", "alpha", "vector", "proxy", "nexus"];
    setSeedPhrase(words.sort(() => Math.random() - 0.5));
  };

  const router = useRouter()

  const handleCopy = () => {
    navigator.clipboard.writeText(seedPhrase.join(" "));
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  const handleGo = () => {
    router.push('/home')
  }

  return (
    <div>
      <MainHeader />
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 font-sans">
      
      {/* Logo Area */}
      <div className="mb-16">
        <Image src={'/illbet.png'} width={180} height={120} alt='illbet' />
      </div>

      <div className="w-full max-w-md space-y-12">
        
        {/* Navigation */}
        <div className="flex justify-center gap-8 border-b border-[#111] pb-4">
          <button 
            onClick={() => { setMode('signup'); setSeedPhrase([]); }}
            className={`text-[10px] uppercase tracking-[0.3em] transition-opacity ${mode === 'signup' ? 'opacity-100 font-bold' : 'opacity-30'}`}
          >
            Create
          </button>
          <button 
            onClick={() => setMode('login')}
            className={`text-[10px] uppercase tracking-[0.3em] transition-opacity ${mode === 'login' ? 'opacity-100 font-bold' : 'opacity-30'}`}
          >
            Access
          </button>
        </div>

        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            {mode === 'signup' ? (
              <motion.div 
                key="signup"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="space-y-10"
              >
                {!seedPhrase.length ? (
                  <button 
                    onClick={generateSeed}
                    className="w-full h-40 border border-[#111] flex items-center justify-center group hover:bg-white hover:text-black transition-all duration-500"
                  >
                    <span className="text-[10px] uppercase tracking-[0.4em]">Generate Keys</span>
                  </button>
                ) : (
                  <div className="space-y-8">
                    <div className="grid grid-cols-3 gap-3">
                      {seedPhrase.map((word, i) => (
                        <div key={i} className="text-center py-2 border border-[#111] text-[11px] text-gray-400">
                          {word}
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <button 
                        onClick={handleCopy}
                        className="w-full py-4 bg-white text-black text-[10px] font-bold uppercase tracking-widest"
                      >
                        {hasCopied ? "Copied" : "Copy Seed Phrase"}
                      </button>
                      <button onClick={handleGo} className="w-full py-4 border border-[#111] text-[10px] font-bold uppercase tracking-widest hover:bg-[#800000] hover:border-[#800000] transition-colors">
                        Enter Terminal
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div 
                key="login"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="space-y-8"
              >
                <textarea 
                  className="w-full bg-black border border-[#111] p-6 text-white text-xs h-40 focus:border-white outline-none transition-colors placeholder:text-gray-800"
                  placeholder="Paste your 13 words here..."
                />
                <button onClick={handleGo} className="w-full bg-white text-black py-4 text-[10px] font-bold uppercase tracking-[0.4em]">
                  Connect
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
    <MainFooter />
    </div>
  );
}
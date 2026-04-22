"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutGrid, 
  Activity, 
  Wallet, 
  Fingerprint 
} from 'lucide-react';

export default function MobileNavBar() {
  const pathname = usePathname();

  const navItems = [
    { icon: LayoutGrid, path: '/', label: 'Terminal' },
    { icon: Activity, path: '/live', label: 'Live' },
    { icon: Wallet, path: '/wallet', label: 'Assets' },
    { icon: Fingerprint, path: '/auth', label: 'Identity' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[100] md:hidden">
      {/* تأثير التدرج للخلفية لضمان قراءة الأيقونات فوق المحتوى */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent h-full -top-4 pointer-events-none" />
      
      <div className="bg-black/80 backdrop-blur-xl border-t border-[#111] px-8 py-5 flex justify-between items-center relative">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;

          return (
            <Link 
              key={item.path} 
              href={item.path}
              className="relative group"
            >
              <Icon 
                size={20} 
                strokeWidth={isActive ? 2.5 : 1.5}
                className={`transition-all duration-300 ${
                  isActive 
                    ? 'text-white scale-110' 
                    : 'text-gray-600 group-hover:text-gray-300'
                }`} 
              />
              
              {/* مؤشر نشط (Dot) صغير جداً وحاد */}
              {isActive && (
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#800000] rounded-full" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
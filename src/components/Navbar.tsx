import { motion } from 'motion/react';
import { Cross } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="max-w-[960px] mx-auto flex items-center justify-between py-8 px-4"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 border border-brand-gold rounded-full flex items-center justify-center bg-white/50">
          <span className="text-brand-gold text-sm font-serif italic">†</span>
        </div>
        <span className="text-lg font-bold tracking-tight text-brand-text">
          Вера <span className="text-brand-gold font-serif">+1</span>
        </span>
      </div>

      <div className="flex items-center gap-8">
        <nav className="hidden md:flex gap-8">
          <a href="#" className="nav-link">О проекте</a>
          <a href="#philosophy" className="nav-link">Философия</a>
          <a href="#features" className="nav-link">Галерея</a>
        </nav>
        
        <a 
          href="https://faith-trener.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden sm:inline-block gold-gradient px-6 py-2 rounded-full text-white font-black text-[10px] uppercase tracking-widest shadow-sm hover:scale-105 transition-transform"
        >
          Вход
        </a>
      </div>
    </motion.nav>
  );
}

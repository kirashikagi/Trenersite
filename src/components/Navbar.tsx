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
        <div className="w-8 h-8 border border-brand-gold rounded-full flex items-center justify-center">
          <span className="text-brand-gold text-xs font-serif italic">V</span>
        </div>
        <span className="text-lg font-semibold tracking-tight">
          Вера <span className="text-brand-gold font-serif">+1</span>
        </span>
      </div>

      <div className="flex items-center gap-8">
        <nav className="hidden md:flex gap-8">
          <a href="#" className="nav-link">О проекте</a>
          <a href="#" className="nav-link">Методология</a>
          <a href="#" className="nav-link">Сообщество</a>
        </nav>
        
        <a 
          href="https://faith-trener.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden sm:inline-block gold-gradient px-6 py-2 rounded-full text-brand-dark font-bold text-[10px] uppercase tracking-widest shadow-[0_4px_15px_rgba(212,175,55,0.3)] hover:scale-105 transition-transform"
        >
          Вход
        </a>
      </div>
    </motion.nav>
  );
}

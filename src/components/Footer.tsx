import { motion } from 'motion/react';
import { Cross, Github, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="max-w-[960px] mx-auto px-4 py-8 mt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/20 tracking-[0.2em] uppercase font-medium">
      <div className="mb-4 md:mb-0">
        © {new Date().getFullYear()} VERA PLUS ONE — МОСТ К ДИАЛОГУ
      </div>
      <div className="flex gap-8">
        <a href="#" className="hover:text-brand-gold transition-colors">ПОДДЕРЖАТЬ</a>
        <a href="#" className="hover:text-brand-gold transition-colors">КОНТАКТЫ</a>
      </div>
    </footer>
  );
}

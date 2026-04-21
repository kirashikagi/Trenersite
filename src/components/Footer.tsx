import { motion } from 'motion/react';
import { Cross, Github, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="max-w-[960px] mx-auto px-4 py-20 section-border text-center">
      <div className="flex flex-col items-center gap-8">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-serif text-brand-gold italic">†</span>
          <span className="text-xs font-black uppercase tracking-[0.4em] text-brand-text">Вера +1</span>
        </div>
        
        <p className="text-brand-text/30 text-[10px] uppercase tracking-widest max-w-[400px]">
          Мы создаем будущее, где технологии служат духу и помогают человеку быть услышанным.
        </p>

        <div className="flex gap-6">
          {['Telegram', 'YouTube', 'About'].map(link => (
            <a key={link} href="#" className="text-[10px] uppercase tracking-widest text-brand-text/40 hover:text-brand-gold transition-colors font-bold">
              {link}
            </a>
          ))}
        </div>

        <div className="text-[9px] text-brand-text/20 uppercase tracking-[0.2em] pt-12">
          © {new Date().getFullYear()} Интеллектуальное Наследие. Все права защищены.
        </div>
      </div>
    </footer>
  );
}

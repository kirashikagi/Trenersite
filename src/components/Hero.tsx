import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="max-w-[960px] mx-auto px-4 pt-32 pb-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold mb-6 block italic">
          Интеллектуальное Наследие
        </span>
        <h1 className="text-6xl md:text-8xl leading-[1] mb-8 font-serif">
          Искусство говорить<br />
          о <span className="italic text-brand-gold">вечном</span>
        </h1>
        <p className="text-lg md:text-xl text-white/50 font-light mb-12 leading-relaxed max-w-[600px] mx-auto">
          Первый в мире ИИ-тренажер для отработки навыков духовного общения. 
          Мост между древней мудростью и технологиями будущего.
        </p>
        
        <a 
          href="https://faith-trener.vercel.app" 
          className="gold-gradient inline-block px-12 py-5 rounded-full text-brand-dark font-black text-sm uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(212,175,55,0.25)] hover:scale-105 transition-transform"
        >
          Перейти в приложение
        </a>
      </motion.div>
    </section>
  );
}

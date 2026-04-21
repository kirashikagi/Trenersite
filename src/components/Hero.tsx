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
        <h1 className="text-6xl md:text-8xl leading-[1] mb-8 font-serif text-brand-text">
          Искусство говорить<br />
          о <span className="italic text-brand-gold">вечном</span>
        </h1>
        <p className="text-lg md:text-xl text-brand-text/50 font-light mb-12 leading-relaxed max-w-[600px] mx-auto">
          Первый в мире ИИ-тренажер для отработки навыков духовного общения. 
          Мост между древней мудростью и технологиями будущего.
        </p>
      </motion.div>
    </section>
  );
}

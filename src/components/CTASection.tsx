import { motion } from 'motion/react';

export default function CTASection() {
  return (
    <section className="max-w-[960px] mx-auto px-4 py-32 text-center section-border">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass rounded-[3rem] p-12 md:p-24 border-brand-accent/20 bg-white/40 shadow-xl"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold mb-6 block">
          Ваш путь начинается здесь
        </span>
        <h2 className="text-4xl md:text-6xl font-serif mb-12 text-brand-text leading-tight italic">
          Готовы <span className="not-italic text-brand-gold">заговорить</span> о главном?
        </h2>
        
        <a 
          href="https://faith-trener.vercel.app" 
          className="gold-gradient inline-block px-12 py-5 rounded-full text-white font-black text-sm uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(188,156,99,0.2)] hover:scale-105 transition-transform"
        >
          Перейти в приложение
        </a>
        
        <p className="mt-8 text-[10px] text-brand-text/30 uppercase tracking-widest">
          Бесплатный доступ к базовым сценариям общения
        </p>
      </motion.div>
    </section>
  );
}

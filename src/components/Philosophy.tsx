import { motion } from 'motion/react';

export default function Philosophy() {
  return (
    <section className="max-w-[960px] mx-auto px-4 py-24 section-border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif mb-8 leading-tight"
          >
            Философия <br />
            диалога <span className="italic text-brand-gold">с любовью</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6 text-white/60 font-light leading-relaxed"
          >
            <p>
              Мы верим, что христианское свидетельство — это не искусство побеждать в спорах, 
              а искусство строить мосты. В мире, полном шума и критики, важно сохранять кротость и трепет.
            </p>
            <p className="border-l border-brand-gold/30 pl-6 italic text-brand-gold/80">
              «Будьте всегда готовы всякому, требующему у вас отчета в вашем уповании, 
              дать ответ с кротостью и благоговением».
            </p>
            <p>
              «Вера +1» помогает перевести знания из теории в практику, создавая пространство 
              для безопасной отработки самых сложных сценариев общения.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="aspect-square glass rounded-full flex items-center justify-center relative"
        >
          <div className="absolute inset-0 border border-brand-gold/10 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="text-center p-12">
            <span className="text-6xl font-serif text-brand-gold block mb-4">†</span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">Основание смыслов</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

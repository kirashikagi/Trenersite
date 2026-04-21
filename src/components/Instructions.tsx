import { motion } from 'motion/react';
import { MousePointer2, MessageSquareText, SearchCode, Milestone } from 'lucide-react';

const steps = [
  {
    title: "Выбор сценария",
    desc: "Выберите тип собеседника: от ищущего истину до радикального скептика.",
    icon: Milestone
  },
  {
    title: "Практика ответа",
    desc: "Сформулируйте свой ответ, опираясь на знания и Библию.",
    icon: MessageSquareText
  },
  {
    title: "Глубокая аналитика",
    desc: "ИИ проанализирует ваш текст на точность, этику и логику.",
    icon: SearchCode
  },
  {
    title: "Финальный штрих",
    desc: "Получите рекомендации по улучшению своей аргументации.",
    icon: MousePointer2
  }
];

export default function Instructions() {
  return (
    <section className="max-w-[960px] mx-auto px-4 py-24 section-border">
      <div className="text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif mb-6"
        >
          Как это <span className="italic text-brand-gold">работает</span>
        </motion.h2>
        <p className="text-white/40 max-w-lg mx-auto uppercase text-[10px] tracking-[0.2em] font-bold">
          Четыре шага к уверенному свидетельству
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-2xl glass border-brand-gold/20 flex items-center justify-center mx-auto mb-6 text-brand-gold">
              <step.icon size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-serif mb-3 italic">{step.title}</h3>
            <p className="text-xs text-white/40 leading-relaxed font-light">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

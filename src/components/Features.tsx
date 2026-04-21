import { motion } from 'motion/react';
import { MessageSquare, Zap, BookOpen } from 'lucide-react';

const features = [
  {
    title: "Живые сценарии",
    description: "Диалоги с атеистами, скептиками и ищущими людьми в реальном времени.",
    icon: MessageSquare,
    delay: 0.1
  },
  {
    title: "Умный анализ",
    description: "Мгновенный разбор твоих ответов от ИИ на основе Библии, логики и риторики.",
    icon: Zap,
    delay: 0.2
  },
  {
    title: "Библиотека смыслов",
    description: "База знаний с аргументами великих апологетов — от Льюиса до наших дней.",
    icon: BookOpen,
    delay: 0.3
  }
];

export default function Features() {
  return (
    <section className="max-w-[960px] mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: feature.delay, duration: 0.6 }}
            className="glass p-6 group hover:border-brand-gold/30 transition-all rounded-2xl"
          >
            <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center mb-4 group-hover:bg-brand-gold/20 transition-colors">
              <feature.icon className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-serif mb-2">{feature.title}</h3>
            <p className="text-xs text-white/50 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

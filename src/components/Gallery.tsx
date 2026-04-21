import { motion } from 'motion/react';

const windows = [
  { label: "Dashboard", title: "Главный пульт управления", img: "https://picsum.photos/seed/dash1/1200/800" },
  { label: "Trainer", title: "Тренажер диалогов", img: "https://picsum.photos/seed/train1/1200/800" },
  { label: "Insights", title: "Библиотека аргументов", img: "https://picsum.photos/seed/insight1/1200/800" }
];

export default function Gallery() {
  return (
    <section className="max-w-[1100px] mx-auto px-4 py-24 section-border">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">Внутри <span className="italic text-brand-gold">системы</span></h2>
        <p className="text-white/30 text-xs uppercase tracking-widest font-bold">Визуальный обзор интерфейса</p>
      </div>

      <div className="space-y-32">
        {windows.map((win, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
          >
            <div className="w-full md:w-3/5">
              <div className="glass rounded-2xl p-2 border-white/5 relative shadow-2xl overflow-hidden group">
                <div className="flex gap-1.5 mb-2 px-4 pt-2">
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                </div>
                <div className="aspect-video rounded-xl overflow-hidden grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                  <img src={win.img} alt={win.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-2/5 text-center md:text-left">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-2 block">{win.label}</span>
              <h3 className="text-2xl font-serif mb-4 italic">{win.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed font-light">
                Интуитивно понятный интерфейс, созданный для максимальной концентрации на контенте и качестве вашего ответа.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { motion } from 'motion/react';

const windows = [
  { 
    label: "Персонажи", 
    title: "Лица веры", 
    desc: "Выберите собеседника с уникальным мировоззрением — от сомневающегося до подготовленного критика.",
    img: "/1.jpg" 
  },
  { 
    label: "Персонажи", 
    title: "Глубина контекста", 
    desc: "Каждый персонаж обладает своей историей и специфическими вопросами, требующими чуткости и знаний.",
    img: "/2.jpg" 
  },
  { 
    label: "Диалог", 
    title: "Живое общение", 
    desc: "Отрабатывайте ответы в реальном времени. Вера имитирует естественный ход беседы.",
    img: "/3.jpg" 
  },
  { 
    label: "Анализ", 
    title: "Разбор свидетельства", 
    desc: "Мгновенная обратная связь: насколько ваш ответ был точен, логичен и, главное, полон любви.",
    img: "/4.jpg" 
  },
  { 
    label: "Анализ", 
    title: "Путь к совершенству", 
    desc: "Детальные рекомендации по улучшению вашей аргументации и стиля общения.",
    img: "/5.jpg" 
  },
  { 
    label: "Библиотека", 
    title: "Сокровищница мудрости", 
    desc: "Доступ к базе знаний: цитаты, исторические факты и библейские основания для ваших ответов.",
    img: "/6.jpg" 
  }
];

export default function Gallery() {
  return (
    <section className="max-w-[1100px] mx-auto px-4 py-24 section-border">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-serif mb-4 italic">Внутри <span className="text-brand-gold not-italic">системы</span></h2>
        <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold">Путеводитель по интерфейсу общения</p>
      </div>

      <div className="space-y-40">
        {windows.map((win, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}
          >
            <div className="w-full md:w-3/5">
              <div className="glass rounded-2xl p-2 border-white/5 relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] group overflow-hidden">
                <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="flex gap-1.5 mb-2 px-4 pt-2">
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                </div>
                <div className="aspect-video rounded-xl overflow-hidden glass border border-white/5">
                  <img 
                    src={win.img} 
                    alt={win.title} 
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-[1.02]" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-2/5 text-center md:text-left">
              <div className="inline-block px-3 py-1 rounded-full glass border-brand-gold/10 mb-6">
                <span className="text-[9px] uppercase tracking-[0.2em] font-black text-brand-gold">{win.label}</span>
              </div>
              <h3 className="text-3xl font-serif mb-6 italic text-white/90">{win.title}</h3>
              <p className="text-base text-white/40 leading-relaxed font-light">
                {win.desc}
              </p>
              
              <div className="mt-8 flex justify-center md:justify-start gap-4 opacity-20">
                 <div className="w-8 h-[1px] bg-white" />
                 <span className="text-[10px] font-serif italic">0{index + 1}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

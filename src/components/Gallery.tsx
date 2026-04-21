import { motion } from 'motion/react';

const sections = [
  {
    category: "Персонажи",
    description: "Начните путь с выбора вашего собеседника",
    items: [
      { 
        title: "Лица веры", 
        desc: "Выберите собеседника с уникальным мировоззрением — от сомневающегося до подготовленного критика.",
        img: "https://raw.githubusercontent.com/kirashikagi/Trenersite/main/public/1.jpg" 
      },
      { 
        title: "Глубина контекста", 
        desc: "Каждый персонаж обладает своей историей и специфическими вопросами, требующими чуткости и знаний.",
        img: "https://raw.githubusercontent.com/kirashikagi/Trenersite/main/public/2.jpg" 
      }
    ]
  },
  {
    category: "Диалог",
    description: "Искусство живого свидетельства",
    items: [
      { 
        title: "Живое общение", 
        desc: "Отрабатывайте ответы в реальном времени. Вера имитирует естественный ход беседы.",
        img: "https://raw.githubusercontent.com/kirashikagi/Trenersite/main/public/3.jpg" 
      }
    ]
  },
  {
    category: "Анализ",
    description: "Мгновенная обратная связь и рост",
    items: [
      { 
        title: "Разбор свидетельства", 
        desc: "Мгновенная обратная связь: насколько ваш ответ был точен, логичен и, главное, полон любви.",
        img: "https://raw.githubusercontent.com/kirashikagi/Trenersite/main/public/4.jpg" 
      },
      { 
        title: "Путь к совершенству", 
        desc: "Детальные рекомендации по улучшению вашей аргументации и стиля общения.",
        img: "https://raw.githubusercontent.com/kirashikagi/Trenersite/main/public/5.jpg" 
      }
    ]
  },
  {
    category: "Библиотека",
    description: "Фундамент ваших знаний",
    items: [
      { 
        title: "Сокровищница мудрости", 
        desc: "Доступ к базе знаний: цитаты, исторические факты и библейские основания для ваших ответов.",
        img: "https://raw.githubusercontent.com/kirashikagi/Trenersite/main/public/6.jpg" 
      }
    ]
  }
];

export default function Gallery() {
  let globalIndex = 0;

  return (
    <section className="max-w-[1100px] mx-auto px-4 py-24 section-border">
      <div className="text-center mb-32">
        <h2 className="text-4xl md:text-5xl font-serif mb-4 italic">Внутри <span className="text-brand-gold not-italic">системы</span></h2>
        <p className="text-brand-text/30 text-[10px] uppercase tracking-[0.3em] font-bold">Путеводитель по интерфейсу общения</p>
      </div>

      <div className="space-y-48">
        {sections.map((section, sIndex) => (
          <div key={sIndex} className="space-y-32">
            <div className="flex items-center gap-8 mb-20 px-8">
               <span className="text-4xl font-serif text-brand-gold">0{sIndex + 1}</span>
               <div>
                  <h3 className="text-2xl font-serif italic text-brand-text/90 leading-tight">{section.category}</h3>
                  <p className="text-[10px] uppercase tracking-widest text-brand-text/30 font-bold">{section.description}</p>
               </div>
               <div className="flex-1 h-[1px] bg-brand-accent/30 ml-4 hidden md:block" />
            </div>

            {section.items.map((win, iIndex) => {
              const reverse = iIndex % 2 !== 0;
              globalIndex++;
              
              return (
                <motion.div
                  key={iIndex}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex flex-col ${reverse ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center px-4`}
                >
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="glass rounded-[2.5rem] p-3 border-brand-accent/20 relative shadow-2xl group overflow-hidden max-w-[300px] w-full">
                      <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-brand-text/10 z-20" />
                      
                      <div className="aspect-[9/16] rounded-[2rem] overflow-hidden glass border border-brand-accent/10">
                        <img 
                          src={win.img} 
                          alt={win.title} 
                          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-[1.05]" 
                          referrerPolicy="no-referrer" 
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <h4 className="text-3xl md:text-4xl font-serif mb-6 italic text-brand-text/90 leading-tight">{win.title}</h4>
                    <p className="text-base md:text-lg text-brand-text/50 leading-relaxed font-light">
                      {win.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}

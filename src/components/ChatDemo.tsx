import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `Ты — Вера, высокотехнологичный ИИ-тренажер христианского общения. 
Твоя цель — помочь пользователю научиться отвечать на сложные вопросы о вере с любовью, ясностью и глубоким пониманием библейских текстов.
Веди себя как мудрый, спокойный и образованный собеседник. 
Когда пользователь пишет вопрос (который может быть как от лица скептика, так и просто вопросом о духовной жизни), отвечай кратко, но содержательно, демонстрируя пример того, как мог бы ответить подготовленный человек. 
Используй современные аргументы (антропный принцип, аргумент от сознания, историческую достоверность), но всегда сохраняй доброжелательность.`;

export default function ChatDemo() {
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', content: string }[]>([
    { role: 'ai', content: 'Привет. Я — Вера. Попробуй задать мне любой сложный вопрос о христианстве, который тебя беспокоит или который часто задают скептики.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
            { role: 'user', parts: [{ text: `System context: ${SYSTEM_PROMPT}. User message: ${userMessage}` }] }
        ],
      });

      const text = response.text || "Извините, произошла ошибка при генерации ответа.";
      setMessages(prev => [...prev, { role: 'ai', content: text }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'ai', content: "Кажется, у меня возникли трудности с подключением. Попробуй еще раз чуть позже." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col glass rounded-2xl overflow-hidden border border-white/5 relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark via-transparent to-brand-gold/5 pointer-events-none" />
      
      {/* Header */}
      <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
          <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Интерактивная Демо-версия</span>
        </div>
        <Sparkles className="w-4 h-4 text-brand-gold opacity-50" />
      </div>

      {/* Messages */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 scroll-smooth"
      >
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`max-w-[85%] px-4 py-2.5 text-xs md:text-sm leading-relaxed ${
                msg.role === 'ai' ? 'chat-bubble-ai self-start' : 'chat-bubble-user self-end'
              }`}
            >
              {msg.content}
            </motion.div>
          ))}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="chat-bubble-ai self-start flex items-center gap-2 px-4 py-2.5 text-xs"
            >
              <Loader2 className="w-3 h-3 animate-spin" />
              Вера обдумывает...
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input */}
      <div className="p-4 bg-white/3 border-t border-white/5 flex gap-2">
        <input 
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Задай свой вопрос..."
          className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs text-white/80 focus:outline-none focus:border-brand-gold/50 transition-colors"
        />
        <button 
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
          className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

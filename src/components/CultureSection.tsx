import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const influences = [
  { icon: '🎸', title: 'Рок-музыканты', desc: 'Вдохновил поколения: «ДДТ», «Алиса», «Сплин» и многих других' },
  { icon: '🎬', title: 'Кино и сериалы', desc: 'Песни звучат в современных фильмах и сериалах' },
  { icon: '🎵', title: 'Каверы', desc: 'Новые исполнители постоянно записывают кавер-версии песен' },
  { icon: '💬', title: 'Крылатые фразы', desc: 'Цитаты из песен стали частью русского языка' },
];

export default function CultureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="slide-8" className="relative min-h-screen bg-zinc-950 flex items-center py-24">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-red-900/10 blur-3xl" />

      <div className="container mx-auto px-8 md:px-16">
        <div
          className={cn(
            'transform transition-all duration-1000 ease-out mb-16',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-red-400 mb-4">Слайд 8</p>
          <h2 className="text-4xl font-light text-white md:text-5xl">Влияние на культуру</h2>
          <div className="h-px w-16 bg-red-400 mt-6" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {influences.map((item, i) => (
            <div
              key={i}
              className={cn(
                'p-8 rounded-2xl border border-white/5 bg-white/2 hover:border-white/15 transition-all transform ease-out',
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              )}
              style={{ transitionDuration: '800ms', transitionDelay: `${200 + i * 150}ms` }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <p className="text-white text-xl font-light mb-3">{item.title}</p>
              <p className="text-white/50 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div
          className={cn(
            'mt-10 p-8 rounded-2xl border border-red-400/20 bg-red-400/5 transform transition-all duration-1000 delay-800 ease-out',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          <p className="text-red-400 text-sm uppercase tracking-widest mb-4">Масштаб влияния</p>
          <p className="text-white/80 text-lg leading-relaxed">
            Цой повлиял не только на музыку, но и на моду, кинематограф, молодёжную культуру и язык целого поколения. 
            Его образ — в чёрном, с гитарой — стал архетипом советского рок-музыканта.
          </p>
        </div>
      </div>
    </section>
  );
}

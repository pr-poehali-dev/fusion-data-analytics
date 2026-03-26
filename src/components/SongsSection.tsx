import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const songs = [
  {
    title: 'Перемен!',
    year: '1986',
    tag: 'Гимн эпохи',
    desc: 'Гимн эпохи перестройки. Песня стала символом борьбы за свободу и перемены в советском обществе.',
    quote: 'Перемен! — требуют наши сердца.\nПеремен! — требуют наши глаза.',
  },
  {
    title: 'Кукушка',
    year: '1990',
    tag: 'Философская лирика',
    desc: 'Философская лирика, размышления о судьбе и быстротечности времени. Одна из самых любимых песен.',
    quote: 'Солнце моё, взгляни на меня.\nМоя ладонь превратилась в кулак.',
  },
  {
    title: 'Пачка сигарет',
    year: '1989',
    tag: 'Меланхолия',
    desc: 'Меланхоличный гимн одиночества. История человека, который нашёл своё место в жизни.',
    quote: 'Если есть в кармане пачка сигарет,\nЗначит всё не так уж плохо на сегодняшний день.',
  },
];

export default function SongsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [active, setActive] = useState(0);
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
    <section ref={ref} id="slide-6" className="relative min-h-screen bg-zinc-950 flex items-center py-24">
      <div className="container mx-auto px-8 md:px-16">
        <div
          className={cn(
            'transform transition-all duration-1000 ease-out mb-16',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-red-400 mb-4">Слайд 6</p>
          <h2 className="text-4xl font-light text-white md:text-5xl">Знаковые песни</h2>
          <div className="h-px w-16 bg-red-400 mt-6" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-12">
          {songs.map((song, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={cn(
                'text-left p-6 rounded-2xl border transition-all duration-300 transform',
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
                active === i
                  ? 'border-red-400/50 bg-red-400/5'
                  : 'border-white/5 hover:border-white/20 bg-white/2'
              )}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              <p className="text-red-400 text-xs uppercase tracking-widest mb-1">{song.year}</p>
              <p className="text-white text-xl font-light mb-2">«{song.title}»</p>
              <span className="inline-block text-xs text-white/40 border border-white/10 rounded-full px-3 py-1">
                {song.tag}
              </span>
            </button>
          ))}
        </div>

        <div
          className={cn(
            'grid grid-cols-1 gap-8 md:grid-cols-2 transform transition-all duration-700 ease-out',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          <div className="p-8 rounded-2xl border border-white/5 bg-white/2">
            <p className="text-white/40 text-sm uppercase tracking-widest mb-4">Анализ</p>
            <p className="text-white/80 text-lg leading-relaxed">{songs[active].desc}</p>
          </div>
          <div className="p-8 rounded-2xl border border-red-400/20 bg-red-400/5">
            <p className="text-red-400 text-sm uppercase tracking-widest mb-4">Фрагмент текста</p>
            <p className="text-white/90 text-lg leading-relaxed whitespace-pre-line italic">
              "{songs[active].quote}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

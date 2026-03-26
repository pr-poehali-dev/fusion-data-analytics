import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const sources = [
  {
    num: '1',
    title: 'Калгин В. Виктор Цой',
    info: '— М.: Молодая гвардия, 2013. — 352 с. (серия «ЖЗЛ»)',
  },
  {
    num: '2',
    title: 'Цой М. Виктор Цой. Стихи, документы, воспоминания',
    info: '— СПб.: Новый геликон, 1991.',
  },
  {
    num: '3',
    title: 'Официальный сайт группы «Кино»',
    info: 'kino-group.ru',
  },
  {
    num: '4',
    title: 'Энциклопедия российского рока',
    info: '— Ст. «Кино». — URL: rock.ru',
  },
  {
    num: '5',
    title: 'Видеозаписи концертов группы «Кино»',
    info: '1987–1990 гг. (архивные материалы)',
  },
  {
    num: '6',
    title: 'Фильм «Игла»',
    info: 'Реж. Р. Нугманов. — Казахфильм, 1988.',
  },
  {
    num: '7',
    title: 'Статья «Виктор Цой» в Википедии',
    info: 'ru.wikipedia.org — [дата обращения: 2025]',
  },
];

export default function SourcesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="slide-13" className="relative min-h-screen bg-zinc-950 flex items-center py-24">
      <div className="container mx-auto px-8 md:px-16">
        <div
          className={cn(
            'transform transition-all duration-1000 ease-out mb-16',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-red-400 mb-4">Слайд 13</p>
          <h2 className="text-4xl font-light text-white md:text-5xl">Список источников</h2>
          <div className="h-px w-16 bg-red-400 mt-6" />
        </div>

        <div className="max-w-3xl space-y-4">
          {sources.map((source, i) => (
            <div
              key={i}
              className={cn(
                'flex gap-6 p-5 rounded-xl border border-white/5 hover:border-white/15 transition-all transform ease-out',
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
              style={{ transitionDuration: '700ms', transitionDelay: `${100 + i * 100}ms` }}
            >
              <span className="text-red-400 text-lg font-light w-6 flex-shrink-0">{source.num}.</span>
              <div>
                <p className="text-white/90">{source.title}</p>
                <p className="text-white/40 text-sm mt-1">{source.info}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={cn(
            'mt-20 text-center transform transition-all duration-1000 delay-1000 ease-out',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          <div className="h-px w-24 bg-white/10 mx-auto mb-8" />
          <p className="text-white/30 text-sm uppercase tracking-widest">Учебный проект · 8 класс · 2025</p>
          <p className="text-white/20 text-xs mt-2">Виктор Цой: голос поколения</p>
        </div>
      </div>
    </section>
  );
}

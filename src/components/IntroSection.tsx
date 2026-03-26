import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export default function IntroSection() {
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

  const tasks = [
    'Исследовать биографию музыканта',
    'Проанализировать ключевые песни и альбомы',
    'Оценить влияние творчества Цоя на культуру',
  ];

  return (
    <section ref={ref} id="slide-2" className="relative min-h-screen bg-zinc-950 flex items-center py-24">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-red-900 to-transparent" />
      </div>

      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div
            className={cn(
              'transform transition-all duration-1000 ease-out',
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            )}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-red-400 mb-4">Слайд 2</p>
            <h2 className="text-4xl font-light text-white mb-8 md:text-5xl">Введение</h2>
            <div className="h-px w-16 bg-red-400 mb-8" />

            <div className="mb-10">
              <p className="text-sm uppercase tracking-widest text-white/40 mb-3">Актуальность</p>
              <p className="text-white/80 text-lg leading-relaxed">
                Песни Цоя слушают уже более 30 лет — они стали символом эпохи и остаются популярными сегодня.
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-white/40 mb-3">Цель проекта</p>
              <p className="text-white/80 text-lg leading-relaxed">
                Изучить творческий путь Виктора Цоя и его влияние на российскую рок‑музыку.
              </p>
            </div>
          </div>

          <div
            className={cn(
              'transform transition-all duration-1000 delay-300 ease-out',
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            )}
          >
            <p className="text-sm uppercase tracking-widest text-white/40 mb-6 mt-14 md:mt-0">Задачи</p>
            <div className="space-y-4">
              {tasks.map((task, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <span className="text-red-400 text-2xl font-light mt-1 group-hover:scale-110 transition-transform">
                    0{i + 1}
                  </span>
                  <p className="text-white/70 text-lg leading-relaxed">{task}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl overflow-hidden opacity-70">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kino_band_logo.svg/1200px-Kino_band_logo.svg.png"
                alt="Логотип группы Кино"
                className="w-40 object-contain invert"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

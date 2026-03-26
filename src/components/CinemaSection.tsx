import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export default function CinemaSection() {
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

  const traits = ['Чёрный цвет', 'Минимализм', 'Сдержанная харизма', 'Немногословность'];

  return (
    <section ref={ref} id="slide-7" className="relative min-h-screen bg-black flex items-center py-24 overflow-hidden">
      <div className="absolute right-0 top-0 h-full w-2/5 opacity-30">
        <img
          src="https://upload.wikimedia.org/wikipedia/ru/thumb/5/5d/Igla_1988_film.jpg/800px-Igla_1988_film.jpg"
          alt="Фильм Игла"
          className="h-full w-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
      </div>

      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <div className="max-w-xl">
          <div
            className={cn(
              'transform transition-all duration-1000 ease-out',
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            )}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-red-400 mb-4">Слайд 7</p>
            <h2 className="text-4xl font-light text-white mb-8 md:text-5xl">
              Кино и образ Цоя
            </h2>
            <div className="h-px w-16 bg-red-400 mb-12" />
          </div>

          <div
            className={cn(
              'mb-10 transform transition-all duration-1000 delay-200 ease-out',
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            )}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-red-400 text-2xl font-light">1988</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <p className="text-white/80 text-lg leading-relaxed">
              Главная роль в фильме <span className="text-white">«Игла»</span> (режиссёр Рашид Нугманов).
              Цой стал не только музыкантом, но и киносимволом поколения.
            </p>
          </div>

          <div
            className={cn(
              'transform transition-all duration-1000 delay-400 ease-out',
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            )}
          >
            <p className="text-sm uppercase tracking-widest text-white/40 mb-4">Фирменный образ</p>
            <div className="flex flex-wrap gap-3">
              {traits.map((trait, i) => (
                <span
                  key={i}
                  className="text-sm text-white/70 border border-white/20 rounded-full px-4 py-2"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          <div
            className={cn(
              'mt-12 p-6 border-l-2 border-red-400 transform transition-all duration-1000 delay-600 ease-out',
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            )}
          >
            <p className="text-white/60 text-sm uppercase tracking-widest mb-2">Роль в фильме</p>
            <p className="text-white text-xl">Моро</p>
            <p className="text-white/40 text-sm mt-1">главный герой «Иглы»</p>
          </div>
        </div>
      </div>
    </section>
  );
}

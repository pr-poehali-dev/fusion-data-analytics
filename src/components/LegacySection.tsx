import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export default function LegacySection() {
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

  const stats = [
    { num: '100+', label: 'песен написано' },
    { num: '1', label: 'культовый фильм' },
    { num: '30+', label: 'лет популярности' },
    { num: '1990', label: 'год гибели' },
  ];

  return (
    <section ref={ref} id="slide-10" className="relative min-h-screen bg-zinc-950 flex items-center py-24">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 items-center">
          <div
            className={cn(
              'transform transition-all duration-1000 ease-out',
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            )}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-red-400 mb-4">Слайд 10</p>
            <h2 className="text-4xl font-light text-white mb-8 md:text-5xl">Гибель и наследие</h2>
            <div className="h-px w-16 bg-red-400 mb-10" />

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                <p className="text-white/80 text-lg">
                  Погиб <span className="text-white">15 августа 1990 года</span> в автокатастрофе под Ригой.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                <p className="text-white/80 text-lg">
                  Последний альбом <span className="text-white">«Чёрный альбом»</span> (1990) выпущен посмертно.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                <p className="text-white/80 text-lg">
                  Творчество Цоя изучают в школах и вузах.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-2xl overflow-hidden border border-white/10">
              <img
                src="https://upload.wikimedia.org/wikipedia/ru/c/ce/Chyorny_album.jpg"
                alt="Чёрный альбом"
                className="w-full max-w-xs object-cover grayscale"
              />
            </div>
          </div>

          <div
            className={cn(
              'transform transition-all duration-1000 delay-300 ease-out',
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            )}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-8 rounded-2xl border border-white/5 text-center hover:border-red-400/30 transition-all"
                >
                  <p className="text-4xl font-light text-red-400 mb-2">{stat.num}</p>
                  <p className="text-white/50 text-sm uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

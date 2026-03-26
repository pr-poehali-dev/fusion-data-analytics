import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export default function EarlyYearsSection() {
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

  const facts = [
    { year: '1962', text: 'Родился 21 июня в Ленинграде' },
    { year: 'Семья', text: 'Отец — инженер, мать — преподаватель физкультуры' },
    { year: 'Юность', text: 'Учился в художественной школе, играл на гитаре с юности' },
    { year: '1970-е', text: 'В конце 1970‑х участвовал в любительских группах' },
  ];

  return (
    <section ref={ref} id="slide-3" className="relative min-h-screen bg-black flex items-center py-24 overflow-hidden">
      <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Leningrad_1977-1981_%28aerial%29.jpg/1200px-Leningrad_1977-1981_%28aerial%29.jpg"
          alt="Ленинград"
          className="h-full w-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>

      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-red-400 mb-4">Слайд 3</p>
          <h2 className="text-4xl font-light text-white mb-2 md:text-5xl">Ранние годы</h2>
          <p className="text-white/40 mb-8 text-lg">1962 — 1981</p>
          <div className="h-px w-16 bg-red-400 mb-12" />

          <div className="space-y-8">
            {facts.map((fact, i) => (
              <div
                key={i}
                className={cn(
                  'flex gap-6 transform transition-all ease-out',
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                )}
                style={{ transitionDuration: '800ms', transitionDelay: `${i * 150}ms` }}
              >
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-red-400 text-sm font-medium">{fact.year}</span>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-px bg-white/20 self-stretch mt-1 min-h-[20px]" />
                  <p className="text-white/80 text-lg">{fact.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className={cn(
              'mt-16 p-6 border border-white/10 rounded-2xl transform transition-all duration-1000 delay-700 ease-out',
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            )}
          >
            <p className="text-white/40 text-sm uppercase tracking-widest mb-3">Место рождения</p>
            <p className="text-white text-xl">Ленинград, СССР</p>
            <p className="text-white/50 text-sm mt-1">ныне Санкт-Петербург, Россия</p>
          </div>
        </div>
      </div>
    </section>
  );
}

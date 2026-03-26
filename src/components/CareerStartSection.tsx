import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export default function CareerStartSection() {
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

  const milestones = [
    {
      year: '1981',
      title: 'Создание группы',
      desc: '«Гарин и Гиперболоиды» — будущее «Кино»',
    },
    {
      year: 'Состав',
      title: 'Участники',
      desc: 'Виктор Цой, Алексей Рыбин, Олег Валинский',
    },
    {
      year: '1982',
      title: 'Альбом «45»',
      desc: 'Первый альбом, названный по длительности звучания',
    },
    {
      year: 'Клуб',
      title: 'Ленинградский рок-клуб',
      desc: 'Участие в культовой площадке советского рока',
    },
  ];

  return (
    <section ref={ref} id="slide-4" className="relative min-h-screen bg-zinc-950 flex items-center py-24">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-red-900/10 blur-3xl" />

      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 items-center">
          <div
            className={cn(
              'transform transition-all duration-1000 ease-out',
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            )}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-red-400 mb-4">Слайд 4</p>
            <h2 className="text-4xl font-light text-white mb-8 md:text-5xl">
              Начало<br />творческого пути
            </h2>
            <div className="h-px w-16 bg-red-400 mb-12" />

            <div className="space-y-6">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className={cn(
                    'p-5 border border-white/5 rounded-xl bg-white/2 hover:border-white/20 transition-all transform ease-out',
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                  )}
                  style={{ transitionDuration: '800ms', transitionDelay: `${200 + i * 150}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-red-400 text-sm font-medium w-16 flex-shrink-0 mt-1">{m.year}</span>
                    <div>
                      <p className="text-white font-medium mb-1">{m.title}</p>
                      <p className="text-white/50 text-sm">{m.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={cn(
              'flex flex-col items-center gap-8 transform transition-all duration-1000 delay-400 ease-out',
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            )}
          >
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-white/10">
              <img
                src="https://upload.wikimedia.org/wikipedia/ru/7/7c/Kino-45.jpg"
                alt="Обложка альбома 45"
                className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black to-transparent p-6">
                <p className="text-white font-light text-lg">Альбом «45»</p>
                <p className="text-white/50 text-sm">1982 · дебютная запись</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const memorials = [
  {
    title: 'Стена Цоя',
    place: 'Арбат, Москва',
    desc: 'Место паломничества фанатов со всей страны',
  },
  {
    title: 'Памятники',
    place: 'СПб, Барнаул, Караганда',
    desc: 'Монументы в честь великого музыканта',
  },
  {
    title: 'Концерты памяти',
    place: 'По всей России',
    desc: 'Ежегодные трибьют-выступления',
  },
  {
    title: 'Трибьют-альбомы',
    place: '2000 и 2017',
    desc: '«Кинопробы» и «Мы вышли из Кино»',
  },
];

export default function MemorySection() {
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
    <section ref={ref} id="slide-9" className="relative min-h-screen bg-black flex items-center py-24 overflow-hidden">
      <div className="absolute left-0 top-0 w-1/3 h-full opacity-15">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Viktor_Tsoi_Wall_Moscow_2009.jpg/800px-Viktor_Tsoi_Wall_Moscow_2009.jpg"
          alt="Стена Цоя"
          className="h-full w-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black" />
      </div>

      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <div className="max-w-3xl ml-auto">
          <div
            className={cn(
              'transform transition-all duration-1000 ease-out mb-16',
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            )}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-red-400 mb-4">Слайд 9</p>
            <h2 className="text-4xl font-light text-white md:text-5xl">Память о Цое</h2>
            <div className="h-px w-16 bg-red-400 mt-6" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {memorials.map((item, i) => (
              <div
                key={i}
                className={cn(
                  'p-6 rounded-2xl border border-white/5 hover:border-red-400/30 transition-all transform ease-out',
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                )}
                style={{ transitionDuration: '800ms', transitionDelay: `${200 + i * 150}ms` }}
              >
                <p className="text-white text-lg font-light mb-1">{item.title}</p>
                <p className="text-red-400 text-sm mb-3">{item.place}</p>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

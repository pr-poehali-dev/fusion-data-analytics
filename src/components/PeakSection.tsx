import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const albums = [
  {
    title: 'Начальник Камчатки',
    year: '1984',
    desc: 'Первые хиты',
    cover: 'https://upload.wikimedia.org/wikipedia/ru/f/f3/Nachalnik_kamchatki.jpg',
  },
  {
    title: 'Это не любовь',
    year: '1985',
    desc: 'Молодёжный хит-парад',
    cover: 'https://upload.wikimedia.org/wikipedia/ru/e/e0/Eto_ne_lyubov.jpg',
  },
  {
    title: 'Группа крови',
    year: '1988',
    desc: 'Всесоюзная слава',
    cover: 'https://upload.wikimedia.org/wikipedia/ru/5/52/Gruppa_Krovi.jpg',
  },
  {
    title: 'Звезда по имени Солнце',
    year: '1989',
    desc: 'Зрелое творчество',
    cover: 'https://upload.wikimedia.org/wikipedia/ru/4/44/Zvezda_po_imeni_solnce.jpg',
  },
];

export default function PeakSection() {
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
    <section ref={ref} id="slide-5" className="relative min-h-screen bg-black flex items-center py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-red-900 to-transparent" />
      </div>

      <div className="container mx-auto px-8 md:px-16">
        <div
          className={cn(
            'transform transition-all duration-1000 ease-out mb-16',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-red-400 mb-4">Слайд 5</p>
          <h2 className="text-4xl font-light text-white md:text-5xl">
            Расцвет группы «Кино»
          </h2>
          <p className="text-white/40 mt-2 text-lg">1984 — 1989</p>
          <div className="h-px w-16 bg-red-400 mt-6" />
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {albums.map((album, i) => (
            <div
              key={i}
              className={cn(
                'group relative overflow-hidden rounded-2xl border border-white/5 transform transition-all ease-out hover:border-red-400/30',
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              )}
              style={{ transitionDuration: '800ms', transitionDelay: `${200 + i * 150}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={album.cover}
                  alt={album.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-4">
                <p className="text-red-400 text-xs mb-1">{album.year}</p>
                <p className="text-white text-sm font-medium leading-tight">{album.title}</p>
                <p className="text-white/40 text-xs mt-1">{album.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

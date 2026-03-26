import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const conclusions = [
  'Виктор Цой — символ эпохи перемен и свободы',
  'Его песни объединяют поколения',
  'Творчество остаётся актуальным благодаря искренности и глубине',
];

export default function ConclusionSection() {
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
    <section ref={ref} id="slide-12" className="relative min-h-screen bg-black flex items-center py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Viktor_Tsoi_1988.jpg/800px-Viktor_Tsoi_1988.jpg"
          alt="Виктор Цой"
          className="h-full w-full object-cover object-top grayscale opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
      </div>

      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className={cn(
              'transform transition-all duration-1000 ease-out',
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            )}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-red-400 mb-4">Слайд 12</p>
            <h2 className="text-4xl font-light text-white mb-8 md:text-6xl">Заключение</h2>
            <div className="h-px w-16 bg-red-400 mb-12 mx-auto" />
          </div>

          <div className="space-y-6 mb-16">
            {conclusions.map((item, i) => (
              <div
                key={i}
                className={cn(
                  'transform transition-all ease-out',
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                )}
                style={{ transitionDuration: '800ms', transitionDelay: `${200 + i * 200}ms` }}
              >
                <p className="text-white/80 text-xl leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div
            className={cn(
              'p-10 rounded-2xl border border-red-400/30 bg-red-400/5 transform transition-all duration-1000 delay-800 ease-out',
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            )}
          >
            <p className="text-red-400 text-sm uppercase tracking-widest mb-6">Личное мнение</p>
            <p className="text-white/80 text-xl leading-relaxed italic">
              «Для меня Цой — это не просто музыкант, а голос, который говорит о важных вещах просто и честно»
            </p>
          </div>

          <div
            className={cn(
              'mt-16 transform transition-all duration-1000 delay-1000 ease-out',
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            )}
          >
            <p className="text-3xl font-light text-white md:text-4xl">
              «Перемен! — требуют наши сердца»
            </p>
            <p className="text-white/30 mt-3 text-sm">— Виктор Цой</p>
          </div>
        </div>
      </div>
    </section>
  );
}

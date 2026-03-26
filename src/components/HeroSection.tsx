import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black" id="slide-1">
      <div className="absolute inset-0">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Viktor_Tsoi_1988.jpg/800px-Viktor_Tsoi_1988.jpg"
          alt="Виктор Цой"
          className="h-full w-full object-cover object-top grayscale opacity-50"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-3xl flex-col gap-8">
            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              )}
            >
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/50">
                Учебный проект по музыке
              </p>
              <h1 className="text-5xl font-light leading-tight text-white md:text-7xl lg:text-8xl">
                Виктор Цой
              </h1>
              <p className="mt-4 text-2xl font-light text-red-400 md:text-3xl">
                голос поколения
              </p>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-500 ease-out',
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              )}
            >
              <div className="h-px w-24 bg-white/30 mb-6" />
              <p className="text-white text-xl">Егор Долгих</p>
              <p className="text-white/60 text-lg mt-1">8 класс · 2025</p>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-700 ease-out',
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              )}
            >
              <a
                href="#slide-2"
                className="inline-flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
              >
                <span className="text-sm uppercase tracking-widest">Далее</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-px h-12 bg-white/30 mx-auto" />
      </div>
    </section>
  );
}
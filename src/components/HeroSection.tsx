import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';

const bgImages = [
  'https://cdn.poehali.dev/templates/creative-portfolio-ru/gallery-2.jpg',
  'https://cdn.poehali.dev/templates/creative-portfolio-ru/gallery-1.jpg',
  'https://cdn.poehali.dev/templates/creative-portfolio-ru/gallery-4.jpg',
  'https://cdn.poehali.dev/templates/creative-portfolio-ru/gallery-5.jpg',
];

const playlist = [
  { title: 'Трек 1', artist: 'Исполнитель', url: 'https://music.yandex.ru' },
  { title: 'Трек 2', artist: 'Исполнитель', url: 'https://music.yandex.ru' },
  { title: 'Трек 3', artist: 'Исполнитель', url: 'https://music.yandex.ru' },
];

const photos = [
  'https://cdn.poehali.dev/templates/creative-portfolio-ru/gallery-1.jpg',
  'https://cdn.poehali.dev/templates/creative-portfolio-ru/gallery-2.jpg',
  'https://cdn.poehali.dev/templates/creative-portfolio-ru/gallery-4.jpg',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bgImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          {bgImages.map((src, index) => (
            <div
              key={src}
              className={cn(
                'absolute inset-0 transition-opacity duration-1000 ease-in-out',
                currentIndex === index ? 'opacity-100' : 'opacity-0'
              )}
            >
              <img src={src} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-8 md:px-16">
            <div className="flex max-w-xl flex-col gap-8">
              {/* Avatar */}
              <div
                className={cn(
                  'transform transition-all duration-1000 ease-out',
                  isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                )}
              >
                <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 shadow-2xl md:h-56 md:w-56" style={{borderColor: '#2dd4bf'}}>
                  <img
                    src="https://cdn.poehali.dev/projects/f33eabec-073b-41ae-bacf-e85c6ec562ad/bucket/06d49d54-3797-4153-9d85-1435f3f0c53a.png"
                    alt="Diego DIO Brando"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Name & bio */}
              <div
                className={cn(
                  'transform transition-all duration-1000 delay-300 ease-out',
                  isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                )}
              >
                <p className="text-4xl font-light md:text-5xl lg:text-6xl">Diego <span style={{color: '#2dd4bf'}}>"DIO"</span> Brando</p>
                <p className="mt-2 text-xl font-light text-white/70 md:text-2xl">Музыкант · Автор · Исполнитель</p>
                <p className="mt-4 max-w-sm text-base text-white/60 leading-relaxed">
                  Небольшое описание о себе — жанр, стиль, вдохновение. Пара предложений, которые расскажут вашу историю.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-8 right-8 z-20 flex gap-2">
          {bgImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                'h-1 transition-all duration-300',
                currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
              )}
              aria-label={`Слайд ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Playlist */}
      <section className="bg-zinc-950 py-16 px-8 md:px-16">
        <div className="container mx-auto max-w-2xl">
          <h2 className="mb-8 text-2xl font-light tracking-widest uppercase text-white/50">Плейлист</h2>
          <div className="flex flex-col gap-3">
            {playlist.map((track, i) => (
              <a
                key={i}
                href={track.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition-all hover:border-white/30 hover:bg-white/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                  <Icon name="Play" size={18} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-white">{track.title}</p>
                  <p className="text-sm text-white/50">{track.artist}</p>
                </div>
                <Icon name="ExternalLink" size={16} className="text-white/30 group-hover:text-white/60 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="bg-black py-16 px-8 md:px-16">
        <div className="container mx-auto max-w-2xl">
          <h2 className="mb-8 text-2xl font-light tracking-widest uppercase text-white/50">Видео</h2>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 aspect-video flex items-center justify-center">
            <div className="text-center text-white/30">
              <Icon name="Video" size={48} className="mx-auto mb-3 opacity-40" />
              <p className="text-sm">Загрузите ваше видео</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="bg-zinc-950 py-16 px-8 md:px-16 pb-24">
        <div className="container mx-auto max-w-2xl">
          <h2 className="mb-8 text-2xl font-light tracking-widest uppercase text-white/50">Фотографии</h2>
          <div className="grid grid-cols-3 gap-3">
            {photos.map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-xl border border-white/10">
                <img src={src} alt={`Фото ${i + 1}`} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
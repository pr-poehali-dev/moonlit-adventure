import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';

const bgImages = [
  'https://cdn.poehali.dev/projects/f33eabec-073b-41ae-bacf-e85c6ec562ad/bucket/ae2d226b-eabc-409f-8b58-264f3ef833a3.jpg',
];

const playlist = [
  { title: 'Animal I Have Become', artist: 'Three Days Grace', url: 'https://vk.com/audio-2001027365_4027365' },
  { title: 'Natural', artist: 'Imagine Dragons', url: 'https://vk.com/audio-2001032301_45032301' },
  { title: 'Humble and Kind', artist: 'Tim McGraw', url: 'https://vk.com/audio-2001236907_41236907' },
];

const photos = [
  'https://cdn.poehali.dev/projects/f33eabec-073b-41ae-bacf-e85c6ec562ad/bucket/4be00ea0-b31f-43c6-afa4-6d7dba708b5b.jpg',
  'https://cdn.poehali.dev/projects/f33eabec-073b-41ae-bacf-e85c6ec562ad/bucket/9f1d63cc-8833-4faf-918f-2a2247302eca.jpg',
  'https://cdn.poehali.dev/projects/f33eabec-073b-41ae-bacf-e85c6ec562ad/bucket/425ed113-cb27-47fc-b36b-080eefc21a86.jpg',
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
              <img src={src} alt="" className="h-full w-full object-cover" style={{filter: 'contrast(1.15) brightness(1.1) saturate(1.2)'}} />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/20" />

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
                <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 shadow-2xl md:h-56 md:w-56" style={{borderColor: '#1e3a4a', boxShadow: '0 0 30px rgba(30,58,74,0.8), 0 0 60px rgba(30,58,74,0.3)'}}>
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
                <p className="text-4xl font-light md:text-5xl lg:text-6xl">Diego <span style={{color: '#7eb8cc'}}>"DIO"</span> Brando</p>
                <p className="mt-2 text-xl font-light text-white/70 md:text-2xl">British jockey</p>
                <p className="mt-4 max-w-sm text-base text-white/60 leading-relaxed">
                  Useless, useless! I thought I told you this, Johnny Joestar! That I'd tear you apart if you came within two meters of me... no other organism on Earth can match up to a dinosaur's speed!
                </p>
                <a
                  href="https://vk.com/idliketodosomethingnice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors"
                >
                  <Icon name="ExternalLink" size={14} />
                  Author's VK
                </a>
                <a
                  href="https://jojo.fandom.com/ru/wiki/Типы_стендов#Материализованные"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/60 hover:border-white/30 hover:bg-white/10 hover:text-white/90 transition-all"
                >
                  <Icon name="Zap" size={16} className="text-white/40" />
                  <span className="text-sm font-light tracking-wide">Scary Monsters</span>
                  <Icon name="ExternalLink" size={13} className="ml-auto text-white/30" />
                </a>
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
          <a
            href="https://www.tiktok.com/@im_veo/video/7594612852795755798"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 aspect-video flex items-center justify-center transition-all hover:border-white/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black" />
            <div className="relative z-10 text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors border border-white/20">
                <Icon name="Play" size={36} className="text-white ml-1" />
              </div>
              <p className="text-white/70 text-sm tracking-widest uppercase">Смотреть на TikTok</p>
            </div>
          </a>
          <a
            href="https://ru.pinterest.com/pin/115052965476739442/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors"
          >
            <Icon name="Heart" size={14} />
            For the most wonderful woman
          </a>
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
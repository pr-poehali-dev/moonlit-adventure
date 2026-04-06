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
      <section className="relative min-h-screen w-full overflow-hidden">
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

        <div className="relative z-10 flex min-h-screen items-center py-16">
          <div className="container mx-auto px-5 sm:px-8 md:px-16">
            <div className="flex max-w-xl flex-col gap-6">
              {/* Avatar */}
              <div
                className={cn(
                  'transform transition-all duration-1000 ease-out',
                  isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                )}
              >
                <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 shadow-2xl sm:h-40 sm:w-40 md:h-56 md:w-56" style={{borderColor: '#1e3a4a', boxShadow: '0 0 30px rgba(30,58,74,0.8), 0 0 60px rgba(30,58,74,0.3)'}}>
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
                <p className="text-3xl font-light sm:text-4xl md:text-5xl lg:text-6xl">Diego <span style={{color: '#7eb8cc'}}>"DIO"</span> Brando</p>
                <p className="mt-2 text-lg font-light text-white/70 sm:text-xl md:text-2xl">British jockey</p>
                <p className="mt-3 max-w-xs text-sm text-white/60 leading-relaxed sm:max-w-sm sm:text-base">
                  Useless, useless! I thought I told you this, Johnny Joestar! That I'd tear you apart if you came within two meters of me... no other organism on Earth can match up to a dinosaur's speed!
                </p>
                <div className="mt-4 flex gap-6">
                  <a
                    href="https://vk.com/idliketodosomethingnice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors"
                  >
                    <img src="https://cdn.poehali.dev/projects/f33eabec-073b-41ae-bacf-e85c6ec562ad/bucket/60f9802a-a4eb-4676-928b-40ac85c13c94.png" alt="" className="h-10 w-10 object-contain" />
                    Author's VK
                  </a>
                  <a
                    href="https://jojo.fandom.com/ru/wiki/Scary_Monsters"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors"
                  >
                    <img src="https://cdn.poehali.dev/projects/f33eabec-073b-41ae-bacf-e85c6ec562ad/bucket/91dc8539-f2eb-4297-bb11-26aa521a5caf.png" alt="" className="h-10 w-10 object-contain" />
                    Scary Monsters
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 right-4 z-20 flex gap-2 sm:bottom-8 sm:right-8">
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
      <section className="bg-zinc-950 py-12 px-5 sm:px-8 md:px-16">
        <div className="container mx-auto max-w-2xl">
          <h2 className="mb-6 text-xl font-light tracking-widest uppercase text-white/50 sm:text-2xl sm:mb-8">Плейлист</h2>
          <div className="flex flex-col gap-3">
            {playlist.map((track, i) => (
              <a
                key={i}
                href={track.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-all hover:border-white/30 hover:bg-white/10 sm:gap-5 sm:px-5 sm:py-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors sm:h-10 sm:w-10">
                  <Icon name="Play" size={16} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-white truncate text-sm sm:text-base">{track.title}</p>
                  <p className="text-xs text-white/50 sm:text-sm">{track.artist}</p>
                </div>
                <Icon name="ExternalLink" size={15} className="shrink-0 text-white/30 group-hover:text-white/60 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="bg-black py-12 px-5 sm:px-8 md:px-16">
        <div className="container mx-auto max-w-2xl">
          <h2 className="mb-6 text-xl font-light tracking-widest uppercase text-white/50 sm:text-2xl sm:mb-8">Видео</h2>
          <a
            href="https://www.tiktok.com/@im_veo/video/7594612852795755798"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 aspect-video flex items-center justify-center transition-all hover:border-white/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black" />
            <div className="relative z-10 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors border border-white/20 sm:h-20 sm:w-20">
                <Icon name="Play" size={28} className="text-white ml-1 sm:text-3xl" />
              </div>
              <p className="text-white/70 text-xs tracking-widest uppercase sm:text-sm">Смотреть на TikTok</p>
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
      <section className="bg-zinc-950 py-12 px-5 pb-20 sm:px-8 sm:py-16 sm:pb-24 md:px-16">
        <div className="container mx-auto max-w-2xl">
          <h2 className="mb-6 text-xl font-light tracking-widest uppercase text-white/50 sm:text-2xl sm:mb-8">Фотографии</h2>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {photos.map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-lg border border-white/10 sm:rounded-xl">
                <img src={src} alt={`Фото ${i + 1}`} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

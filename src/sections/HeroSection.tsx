import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
import GlassWave from '../components/GlassWave';
import { t, type Lang } from '../lib/content';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  lang: Lang;
}

export default function HeroSection({ lang }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const hero = t(lang, 'hero') as Record<string, string>;

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const ctx = gsap.context(() => {
      // Entrance animation (on load)
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
      
      tl.fromTo('.hero-tagline', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.3)
        .fromTo('.hero-title-word', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 }, 0.4)
        .fromTo('.hero-subtitle', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, 0.8)
        .fromTo('.hero-cta', { opacity: 0, y: 15, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.5 }, 1.0)
        .fromTo('.hero-scroll', { opacity: 0 }, { opacity: 0.6, duration: 0.4 }, 1.2);

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.5,
        },
      });

      scrollTl
        .fromTo(content, { opacity: 1, y: 0 }, { opacity: 0, y: -100, ease: 'power2.in' }, 0.7)
        .fromTo('.hero-wave', { scale: 1, opacity: 1 }, { scale: 0.6, opacity: 0.2, ease: 'power2.in' }, 0.7);
    }, section);

    return () => ctx.revert();
  }, [lang]);

  const titleWords = hero.title.split('\n');

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-background z-10"
    >
      <div className="hero-wave absolute inset-0 z-0">
        <GlassWave />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center"
      >
        <p className="hero-tagline text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary mb-6">
          {hero.tagline}
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-accent leading-[0.95] tracking-tight mb-6">
          {titleWords.map((line, i) => (
            <span key={i} className="block">
              {line.split(' ').map((word, j) => (
                <span key={j} className="hero-title-word inline-block mr-[0.3em]">
                  {word}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <p className="hero-subtitle text-base sm:text-lg md:text-xl text-text-secondary max-w-xl mb-10">
          {hero.subtitle}
        </p>

        <a
          href="#services"
          className="hero-cta gradient-btn text-white font-semibold px-8 py-4 rounded-lg hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-shadow"
        >
          {hero.cta}
        </a>

        <div className="hero-scroll absolute bottom-8 animate-bounce-slow">
          <span className="text-text-secondary text-xs uppercase tracking-widest flex flex-col items-center gap-2">
            {hero.scroll}
            <ChevronDown size={20} />
          </span>
        </div>
      </div>
    </section>
  );
}
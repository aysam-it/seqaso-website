import { useRef, useEffect } from 'react';
import { Search, PenTool, Code, Rocket } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionReveal from '../components/SectionReveal';
import { t, type Lang } from '../lib/content';

gsap.registerPlugin(ScrollTrigger);

const icons = [Search, PenTool, Code, Rocket];

interface ProcessSectionProps {
  lang: Lang;
}

export default function ProcessSection({ lang }: ProcessSectionProps) {
  const lineRef = useRef<HTMLDivElement>(null);
  const process = t(lang, 'process') as any;

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    const tween = gsap.fromTo(
      line,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: line,
          start: 'top 75%',
          end: 'top 50%',
          scrub: false,
        },
      }
    );

    return () => { tween.kill(); };
  }, []);

  return (
    <section className="relative section-padding bg-background-alt">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            {process.label}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-6 whitespace-pre-line">
            {process.title}
          </h2>
        </SectionReveal>

        <div className="relative">
          {/* Timeline Line */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute top-[32px] left-[12.5%] right-[12.5%] h-0.5 bg-primary/30 origin-left"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {process.steps.map((step: any, i: number) => {
              const Icon = icons[i];
              return (
                <SectionReveal key={i} delay={i * 0.12} className="text-center">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-primary bg-primary/10 mb-5 transition-transform duration-300 hover:scale-110">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-accent mb-2">{step.title}</h3>
                  <p className="text-text-secondary text-sm max-w-[200px] mx-auto">{step.desc}</p>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
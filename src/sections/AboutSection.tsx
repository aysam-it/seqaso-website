import { Award } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';
import { t, type Lang } from '../lib/content';

interface AboutSectionProps {
  lang: Lang;
}

export default function AboutSection({ lang }: AboutSectionProps) {
  const about = t(lang, 'about') as any;
  const titleLines = about.title.split('\n');

  return (
    <section id="about" className="relative section-padding bg-background-alt overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <SectionReveal direction="left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
                {about.label}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent leading-tight mb-8">
                {titleLines.map((line: string, i: number) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                {about.p1}
              </p>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                {about.p2}
              </p>
              <div className="flex flex-wrap gap-4">
                {about.badges.map((badge: string, i: number) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2"
                  >
                    <Award size={16} className="text-primary" />
                    <span className="text-sm font-medium text-accent">{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          <SectionReveal direction="right">
            <div className="relative flex items-center justify-center h-[400px]">
              {/* Wireframe Icosahedron */}
              <div className="relative w-64 h-64 animate-[spin_30s_linear_infinite]">
                <div
                  className="absolute inset-0 border-2 border-primary/20 rounded-full"
                  style={{ transform: 'rotateX(60deg) rotateY(45deg)' }}
                />
                <div
                  className="absolute inset-0 border-2 border-primary/20 rounded-full"
                  style={{ transform: 'rotateX(60deg) rotateY(-45deg)' }}
                />
                <div
                  className="absolute inset-0 border-2 border-primary/20 rounded-full"
                  style={{ transform: 'rotateX(120deg) rotateY(45deg)' }}
                />
                <div
                  className="absolute inset-8 border border-secondary/30 rounded-full"
                  style={{ transform: 'rotateX(30deg) rotateY(60deg)' }}
                />
                <div
                  className="absolute inset-8 border border-secondary/30 rounded-full"
                  style={{ transform: 'rotateX(-30deg) rotateY(60deg)' }}
                />
              </div>
              {/* Floating Orbs */}
              <div className="absolute w-3 h-3 rounded-full bg-primary shadow-[0_0_20px_rgba(37,99,235,0.6)] animate-orbit" />
              <div
                className="absolute w-2 h-2 rounded-full bg-secondary shadow-[0_0_15px_rgba(6,182,212,0.6)]"
                style={{ animation: 'orbit 15s linear infinite reverse' }}
              />
              <div
                className="absolute w-4 h-4 rounded-full bg-primary/50 shadow-[0_0_25px_rgba(37,99,235,0.4)]"
                style={{ animation: 'orbit 25s linear infinite', animationDelay: '-5s' }}
              />
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
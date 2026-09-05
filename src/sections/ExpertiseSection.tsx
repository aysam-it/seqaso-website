import { Landmark, Shield, Factory, Building2, ShoppingCart, HeartPulse } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';
import CountUp from '../components/CountUp';
import { t, type Lang } from '../lib/content';

const sectorIcons = [Landmark, Shield, Factory, Building2, ShoppingCart, HeartPulse];

interface ExpertiseSectionProps {
  lang: Lang;
}

export default function ExpertiseSection({ lang }: ExpertiseSectionProps) {
  const expertise = t(lang, 'expertise') as any;

  return (
    <section id="expertise" className="relative section-padding bg-background">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            {expertise.label}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-6">
            {expertise.title}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            {expertise.subtitle}
          </p>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {expertise.sectors.map((sector: any, i: number) => {
            const Icon = sectorIcons[i];
            return (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="glass-card p-8 text-center transition-all duration-300 hover:-translate-y-1.5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-accent mb-2">{sector.name}</h3>
                  <p className="text-text-secondary text-sm">{sector.desc}</p>
                </div>
              </SectionReveal>
            );
          })}
        </div>

        <SectionReveal>
          <div className="flex flex-wrap justify-center gap-12 lg:gap-20">
            {expertise.stats.map((stat: any, i: number) => (
              <div key={i} className="text-center">
                <div className="text-4xl lg:text-5xl font-extrabold text-primary mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-text-secondary text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
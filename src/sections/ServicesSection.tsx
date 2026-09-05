import { Code2, ShieldCheck, BarChart3 } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';
import { t, type Lang } from '../lib/content';

const icons = [Code2, ShieldCheck, BarChart3];

interface ServicesSectionProps {
  lang: Lang;
}

export default function ServicesSection({ lang }: ServicesSectionProps) {
  const services = t(lang, 'services') as any;

  return (
    <section id="services" className="relative section-padding bg-background-alt">
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(37, 99, 235, 0.08) 0%, transparent 60%)',
        }}
      />
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            {services.label}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-6">
            {services.title}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            {services.subtitle}
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.cards.map((card: any, i: number) => {
            const Icon = icons[i];
            return (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="glass-card p-8 lg:p-10 h-full transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-accent mb-3">{card.title}</h3>
                  <p className="text-text-secondary leading-relaxed mb-4">{card.desc}</p>
                  <span className="text-primary font-medium text-sm hover:underline cursor-pointer">
                    {card.link}
                  </span>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import { Award, GitBranch, Lock, Zap } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';
import { t, type Lang } from '../lib/content';

const icons = [Award, GitBranch, Lock, Zap];

interface WhySectionProps {
  lang: Lang;
}

export default function WhySection({ lang }: WhySectionProps) {
  const why = t(lang, 'why') as any;

  return (
    <section className="relative section-padding bg-background">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            {why.label}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-6 whitespace-pre-line">
            {why.title}
          </h2>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {why.cards.map((card: any, i: number) => {
            const Icon = icons[i];
            return (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="glass-card p-7 h-[280px] relative transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
                  <span className="absolute top-5 right-5 text-5xl font-extrabold text-primary/10 group-hover:text-primary/20 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-accent mb-2">{card.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{card.desc}</p>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
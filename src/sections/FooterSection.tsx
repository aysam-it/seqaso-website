import { t, type Lang } from '../lib/content';

interface FooterSectionProps {
  lang: Lang;
  onLangChange: () => void;
}

export default function FooterSection({ lang, onLangChange }: FooterSectionProps) {
  const footer = t(lang, 'footer') as any;
  const nav = t(lang, 'nav') as Record<string, string>;

  return (
    <footer className="bg-background-alt border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold text-accent mb-2">SEQASO</h3>
            <p className="text-text-secondary text-sm">{footer.tagline}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Navigation</h4>
            <div className="flex flex-col gap-3">
              {Object.entries(nav).map(([key, label]) => (
                <a
                  key={key}
                  href={`#${key}`}
                  className="text-text-secondary hover:text-primary transition-colors text-sm"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal & Language */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Legal</h4>
            <div className="flex flex-col gap-3 mb-6">
              {footer.legal.map((item: string, i: number) => (
                <span key={i} className="text-text-secondary/70 text-sm cursor-pointer hover:text-primary transition-colors">
                  {item}
                </span>
              ))}
            </div>
            <button
              onClick={onLangChange}
              className="flex items-center gap-1 text-sm font-semibold bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full transition-colors"
            >
              <span className={lang === 'en' ? 'text-primary' : 'text-text-secondary'}>EN</span>
              <span className="text-text-secondary">/</span>
              <span className={lang === 'fr' ? 'text-primary' : 'text-text-secondary'}>FR</span>
            </button>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-text-secondary/60 text-sm">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
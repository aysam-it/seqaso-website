import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { t, type Lang } from '../lib/content';
import { useScrollDirection } from '../hooks/useScrollDirection';

interface NavbarProps {
  lang: Lang;
  onLangChange: () => void;
}

export default function Navbar({ lang, onLangChange }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollDirection, scrollY } = useScrollDirection();
  const hidden = scrollDirection === 'down' && scrollY > 100;

  const nav = t(lang, 'nav') as Record<string, string>;
  const links = [
    { key: 'services', href: '#services' },
    { key: 'expertise', href: '#expertise' },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' },
  ];

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          hidden ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="bg-background/80 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <a href="#" className="text-xl font-extrabold text-accent tracking-tight">
                SEQASO
              </a>

              <div className="hidden md:flex items-center gap-8">
                {links.map((link) => (
                  <a
                    key={link.key}
                    href={link.href}
                    className="text-sm font-medium text-text-secondary hover:text-primary transition-colors tracking-wide"
                  >
                    {nav[link.key]}
                  </a>
                ))}
                <button
                  onClick={onLangChange}
                  className="flex items-center gap-1 text-sm font-semibold bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full transition-colors"
                >
                  <span className={lang === 'en' ? 'text-primary' : 'text-text-secondary'}>EN</span>
                  <span className="text-text-secondary">/</span>
                  <span className={lang === 'fr' ? 'text-primary' : 'text-text-secondary'}>FR</span>
                </button>
              </div>

              <button
                className="md:hidden text-accent"
                onClick={() => setMobileOpen(true)}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60] bg-background/98 backdrop-blur-xl transition-all duration-300 ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-12">
            <span className="text-xl font-extrabold text-accent">SEQASO</span>
            <button onClick={() => setMobileOpen(false)} className="text-accent">
              <X size={28} />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-semibold text-accent hover:text-primary transition-colors"
              >
                {nav[link.key]}
              </a>
            ))}
          </div>
          <div className="mt-auto">
            <button
              onClick={() => { onLangChange(); setMobileOpen(false); }}
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <span className={lang === 'en' ? 'text-primary' : 'text-text-secondary'}>English</span>
              <span className="text-text-secondary">/</span>
              <span className={lang === 'fr' ? 'text-primary' : 'text-text-secondary'}>Français</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
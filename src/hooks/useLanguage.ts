import { useState, useEffect, useCallback } from 'react';

export type Lang = 'en' | 'fr';

export function useLanguage() {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('seqaso-lang');
    return (saved as Lang) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('seqaso-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'fr' : 'en'));
  }, []);

  return { lang, toggleLang };
}
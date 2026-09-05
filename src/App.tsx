import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import ExpertiseSection from './sections/ExpertiseSection';
import AboutSection from './sections/AboutSection';
import WhySection from './sections/WhySection';
import ProcessSection from './sections/ProcessSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';
import { useLanguage } from './hooks/useLanguage';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const { lang, toggleLang } = useLanguage();

  useEffect(() => {
    // Global scroll snap for pinned sections only
    const setupSnap = () => {
      const pinned = ScrollTrigger.getAll()
        .filter((st) => st.vars.pin)
        .sort((a, b) => a.start - b.start);
      const maxScroll = ScrollTrigger.maxScroll(window);
      if (!maxScroll || pinned.length === 0) return;

      const pinnedRanges = pinned.map((st) => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      ScrollTrigger.create({
        snap: {
          snapTo: (value: number) => {
            const inPinned = pinnedRanges.some(
              (r) => value >= r.start - 0.02 && value <= r.end + 0.02
            );
            if (!inPinned) return value;
            const target = pinnedRanges.reduce(
              (closest, r) =>
                Math.abs(r.center - value) < Math.abs(closest - value) ? r.center : closest,
              pinnedRanges[0]?.center ?? 0
            );
            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: 'power2.out',
        },
      });
    };

    // Delay to ensure all ScrollTriggers are created
    const timer = setTimeout(setupSnap, 500);
    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [lang]);

  return (
    <div className="relative bg-background min-h-screen">
      <Navbar lang={lang} onLangChange={toggleLang} />
      
      <main>
        <HeroSection lang={lang} />
        <ServicesSection lang={lang} />
        <ExpertiseSection lang={lang} />
        <AboutSection lang={lang} />
        <WhySection lang={lang} />
        <ProcessSection lang={lang} />
        <ContactSection lang={lang} />
      </main>
      
      <FooterSection lang={lang} onLangChange={toggleLang} />
    </div>
  );
}

export default App;
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export default function CountUp({
  end,
  suffix = '',
  duration = 2000,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obj = { value: 0 };

    const tween = gsap.to(obj, {
      value: end,
      duration,
      ease: 'power2.out',
      snap: { value: 1 },

      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        once: true,
      },

      onUpdate: () => {
        el.textContent = `${Math.round(obj.value)}${suffix}`;
      },

      onComplete: () => {
        el.textContent = `${end}${suffix}`;
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [end, suffix, duration]);

  return <span ref={ref}>0{suffix}</span>;
}
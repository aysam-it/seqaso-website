import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export default function CountUp({ end, suffix = '', duration = 2000 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    const obj = { value: 0 };
    const tween = gsap.to(obj, {
      value: end,
      duration,
      ease: 'power2.out',
      snap: { value: 1 },
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        onEnter: () => setHasAnimated(true),
      },
      onUpdate: () => {
        el.textContent = Math.round(obj.value) + suffix;
      },
    });

    return () => { tween.kill(); };
  }, [end, suffix, duration, hasAnimated]);

  return <span ref={ref}>0{suffix}</span>;
}
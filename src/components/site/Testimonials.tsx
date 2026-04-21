import React from 'react';
import { ArrowLeft, ArrowRight, Hand } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { testimonials } from '../../data/site-content';
import type { Testimonial } from '../../types/site';
import { SmartImage } from './SmartImage';

interface TestimonialItemProps {
  t: Testimonial;
  idx: number;
  reduceMotion: boolean;
}

const TestimonialItem = React.memo(({ t, idx, reduceMotion }: TestimonialItemProps) => (
  <motion.div
    initial={reduceMotion ? false : { opacity: 0, y: 20 }}
    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
    viewport={reduceMotion ? undefined : { once: true }}
    transition={reduceMotion ? undefined : { delay: idx * 0.1 }}
    whileHover={reduceMotion ? undefined : { y: -6 }}
    className="lazy-render-item mobile-feedback-card surface-card surface-card-tight min-h-[300px] min-w-[260px] sm:min-w-[290px] lg:min-w-[320px] xl:min-w-[340px] max-w-[370px] p-6 sm:p-8 flex flex-col justify-between gap-6"
  >
    <div>
      <div className="mb-4 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-[14px] w-[14px] rounded-full bg-[#1d4ed8]" aria-hidden="true" />
        ))}
      </div>
      <p className="copy-pretty quote-copy italic">
        "{t.text}"
      </p>
    </div>

    <div className="hero-stats-divider flex items-center gap-3 pt-4 border-t">
      <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0">
        <SmartImage
          wrapperClassName="h-full w-full"
          skeletonClassName="absolute inset-0 h-full w-full rounded-none"
          src={t.image}
          alt={t.name}
          loading="lazy"
          fetchPriority="low"
          rootMargin="640px 0px"
          width={96}
          height={96}
          sizes="48px"
          className="h-full w-full object-cover grayscale hover:grayscale-0"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="min-w-0">
        <p className="card-title font-black text-[#0d1f2b] truncate">{t.name}</p>
        <p className="ui-pill-label text-[#5f6670] truncate">{t.company}</p>
      </div>
    </div>
  </motion.div>
));

TestimonialItem.displayName = 'TestimonialItem';

export const Testimonials = () => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const scrollRafRef = React.useRef<number | null>(null);
  const isDraggingRef = React.useRef(false);
  const dragStartX = React.useRef(0);
  const scrollStart = React.useRef(0);
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);
  const prefersReducedMotion = useReducedMotion();

  React.useEffect(() => {
    if (!carouselRef.current) return;
    const target = carouselRef.current.children[activeSlide] as HTMLElement | undefined;
    if (!target) return;
    const offset = target.offsetLeft - (carouselRef.current.clientWidth - target.offsetWidth) / 2;
    carouselRef.current.scrollTo({
      left: Math.max(0, offset),
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  }, [activeSlide, prefersReducedMotion]);

  React.useEffect(() => () => {
    if (scrollRafRef.current) {
      window.cancelAnimationFrame(scrollRafRef.current);
    }
  }, []);

  const goToSlide = React.useCallback((index: number) => {
    const total = testimonials.length;
    setActiveSlide((index + total) % total);
  }, []);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse') return;
    if (!carouselRef.current) return;
    isDraggingRef.current = true;
    setIsDragging(true);
    dragStartX.current = event.clientX;
    scrollStart.current = carouselRef.current.scrollLeft;
    carouselRef.current.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse') return;
    if (!isDraggingRef.current || !carouselRef.current) return;
    const delta = event.clientX - dragStartX.current;
    carouselRef.current.scrollLeft = scrollStart.current - delta;
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' && !isDraggingRef.current) return;
    if (!carouselRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);

    try {
      carouselRef.current.releasePointerCapture(event.pointerId);
    } catch (error) {
      // Ignore if capture already released.
    }

    const scrollCenter = carouselRef.current.scrollLeft + carouselRef.current.clientWidth / 2;
    const items = Array.from(carouselRef.current.children) as HTMLElement[];
    const closest = items.reduce((closestIndex, item, index) => {
      const center = item.offsetLeft + item.offsetWidth / 2;
      const currentDiff = Math.abs(scrollCenter - center);
      const bestItem = items[closestIndex];
      const bestCenter = bestItem ? bestItem.offsetLeft + bestItem.offsetWidth / 2 : 0;
      const bestDiff = Math.abs(scrollCenter - bestCenter);
      return currentDiff < bestDiff ? index : closestIndex;
    }, activeSlide);

    setActiveSlide(closest);
  };

  const handleTrackScroll = React.useCallback(() => {
    if (!carouselRef.current || isDraggingRef.current) return;
    if (scrollRafRef.current) return;

    scrollRafRef.current = window.requestAnimationFrame(() => {
      scrollRafRef.current = null;
      if (!carouselRef.current) return;

      const scrollCenter = carouselRef.current.scrollLeft + carouselRef.current.clientWidth / 2;
      const items = Array.from(carouselRef.current.children) as HTMLElement[];
      if (items.length === 0) return;

      const closest = items.reduce((closestIndex, item, index) => {
        const center = item.offsetLeft + item.offsetWidth / 2;
        const currentDiff = Math.abs(scrollCenter - center);
        const bestItem = items[closestIndex];
        const bestCenter = bestItem ? bestItem.offsetLeft + bestItem.offsetWidth / 2 : 0;
        const bestDiff = Math.abs(scrollCenter - bestCenter);
        return currentDiff < bestDiff ? index : closestIndex;
      }, activeSlide);

      setActiveSlide((prev) => (prev === closest ? prev : closest));
    });
  }, [activeSlide]);

  return (
    <section id="feedback" className="lazy-render-section section-shell section-tone-feedback section-spacing px-4 sm:px-5 md:px-6 xl:px-8 2xl:px-12">
      <div className="section-inner max-w-7xl mx-auto">
        <div className="section-header-stack">
          <p className="section-kicker section-kicker-label">
            <span className="accent-gradient-text">Recommendations</span>
          </p>
          <h2 className="section-heading-display copy-balance max-w-[12ch] font-black text-[#0d1f2b]">
            What teams say <span className="accent-gradient-text">about working with me</span>
          </h2>
          <p className="section-intro copy-pretty max-w-xl">
            Short notes from people I have worked with across teams and projects.
          </p>
        </div>

        <div className="mb-4 flex justify-center md:hidden">
          <p className="swipe-hint ui-pill-label">
            <Hand size={14} />
            Swipe cards
          </p>
        </div>

        <div
          ref={carouselRef}
          aria-label="Client testimonials"
          role="region"
          className={`mobile-testimonials-track flex gap-6 overflow-x-auto pb-6 no-scrollbar ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          onScroll={handleTrackScroll}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={(event) => {
            if (isDraggingRef.current && carouselRef.current) {
              handlePointerUp(event);
            }
          }}
        >
          {testimonials.map((testimonial, idx) => (
            <TestimonialItem key={idx} t={testimonial} idx={idx} reduceMotion={prefersReducedMotion} />
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => goToSlide(activeSlide - 1)}
            className="icon-button-soft h-11 w-11 text-[#334155] hover:text-[#1d4ed8]"
            aria-label="Previous testimonial"
          >
            <ArrowLeft size={16} />
          </button>

          <div className="flex justify-center gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`h-3 w-3 rounded-full transition-all ${activeSlide === idx ? 'bg-[#1d4ed8] scale-110' : 'bg-[#cbd5e1] hover:bg-[#94a3b8]'}`}
                aria-label={`Go to testimonial ${idx + 1}`}
                aria-pressed={activeSlide === idx}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goToSlide(activeSlide + 1)}
            className="icon-button-soft h-11 w-11 text-[#334155] hover:text-[#1d4ed8]"
            aria-label="Next testimonial"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

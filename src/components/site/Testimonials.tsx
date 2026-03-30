import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import { testimonials } from '../../data/site-content';
import type { Testimonial } from '../../types/site';
import { SmartImage } from './SmartImage';

interface TestimonialItemProps {
  t: Testimonial;
  idx: number;
}

const TestimonialItem = React.memo(({ t, idx }: TestimonialItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: idx * 0.1 }}
    whileHover={{ y: -6 }}
    className="lazy-render-item mobile-feedback-card surface-card surface-card-tight min-h-[300px] min-w-[260px] sm:min-w-[290px] lg:min-w-[320px] xl:min-w-[340px] max-w-[370px] p-6 sm:p-8 flex flex-col justify-between gap-6"
  >
    <div>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#72b39a" className="text-[#0fa3b1]" />)}
      </div>
      <p className="copy-pretty text-[13px] text-[#0d1f2b]/70 italic leading-[1.78] font-medium">
        "{t.text}"
      </p>
    </div>

    <div className="flex items-center gap-3 pt-4 border-t border-[#e3e8ef]">
      <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0">
        <SmartImage
          wrapperClassName="h-full w-full"
          skeletonClassName="absolute inset-0 h-full w-full rounded-none"
          src={t.image}
          alt={t.name}
          loading="lazy"
          fetchPriority="low"
          rootMargin="640px 0px"
          className="h-full w-full object-cover grayscale hover:grayscale-0"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="min-w-0">
        <h4 className="font-black text-[13px] text-[#0d1f2b] tracking-tight truncate">{t.name}</h4>
        <p className="text-[11px] text-[#5f6670] font-semibold tracking-[0.04em] truncate">{t.company}</p>
      </div>
    </div>
  </motion.div>
));

TestimonialItem.displayName = 'TestimonialItem';

export const Testimonials = () => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const isDraggingRef = React.useRef(false);
  const dragStartX = React.useRef(0);
  const scrollStart = React.useRef(0);
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);

  React.useEffect(() => {
    if (isDragging) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 3600);
    return () => clearInterval(interval);
  }, [testimonials.length, isDragging]);

  React.useEffect(() => {
    if (!carouselRef.current) return;
    const target = carouselRef.current.children[activeSlide] as HTMLElement | undefined;
    if (!target) return;
    const offset = target.offsetLeft - (carouselRef.current.clientWidth - target.offsetWidth) / 2;
    carouselRef.current.scrollTo({
      left: Math.max(0, offset),
      behavior: 'smooth',
    });
  }, [activeSlide]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    isDraggingRef.current = true;
    setIsDragging(true);
    dragStartX.current = event.clientX;
    scrollStart.current = carouselRef.current.scrollLeft;
    carouselRef.current.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !carouselRef.current) return;
    const delta = event.clientX - dragStartX.current;
    carouselRef.current.scrollLeft = scrollStart.current - delta;
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
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

  return (
    <section id="feedback" className="lazy-render-section section-shell section-tone-feedback py-16 lg:py-32 px-4 sm:px-5 md:px-6 xl:px-8 2xl:px-12">
      <div className="section-inner max-w-7xl mx-auto">
        <div className="mb-10 lg:mb-16">
          <p className="section-kicker text-[12px] font-semibold mb-3 tracking-[0.14em]">
            <span className="accent-gradient-text">Recommendations</span>
          </p>
          <h2 className="section-heading-display copy-balance max-w-[12ch] font-black text-[#0d1f2b]">
            What teams say <span className="accent-gradient-text">about working with me</span>
          </h2>
          <p className="section-intro copy-pretty max-w-xl mt-4 font-medium">
            <span className="accent-gradient-text">Short feedback that reflects delivery ownership, communication style, and day-to-day execution.</span>
          </p>
        </div>

        <div
          ref={carouselRef}
          className={`flex gap-6 overflow-x-auto pb-6 no-scrollbar ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
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
            <TestimonialItem key={idx} t={testimonial} idx={idx} />
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${activeSlide === idx ? 'bg-[#0f172a]' : 'bg-[#d1d5db]'}`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Skeleton } from './LoadingPrimitives';

interface SmartImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'loading'> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  wrapperClassName?: string;
  skeletonClassName?: string;
  loading?: 'eager' | 'lazy';
  priority?: boolean;
  rootMargin?: string;
  showSkeleton?: boolean;
}

export const SmartImage = ({
  src,
  alt,
  fallbackSrc,
  wrapperClassName = '',
  skeletonClassName = 'absolute inset-0 h-full w-full rounded-none',
  className = '',
  loading = 'lazy',
  priority = false,
  rootMargin = '480px 0px',
  showSkeleton = true,
  onLoad,
  onError,
  fetchPriority,
  referrerPolicy,
  sizes,
  srcSet,
  ...imgProps
}: SmartImageProps) => {
  const observerRef = React.useRef<HTMLDivElement | null>(null);
  const [currentSrc, setCurrentSrc] = React.useState(src);
  const [shouldLoad, setShouldLoad] = React.useState(() => priority || loading === 'eager');
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    setCurrentSrc(src);
    setIsLoaded(false);
    setShouldLoad(priority || loading === 'eager');
  }, [src, priority, loading]);

  React.useEffect(() => {
    if (shouldLoad) return;

    const target = observerRef.current;
    if (!target || typeof IntersectionObserver === 'undefined') {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [rootMargin, shouldLoad]);

  React.useEffect(() => {
    if (!shouldLoad) return;

    let isCancelled = false;
    const preloadImage = new Image();
    preloadImage.decoding = 'async';

    if (referrerPolicy) {
      preloadImage.referrerPolicy = referrerPolicy;
    }

    if (sizes) {
      preloadImage.sizes = sizes;
    }

    if (srcSet) {
      preloadImage.srcset = srcSet;
    }

    const revealImage = async () => {
      try {
        await preloadImage.decode();
      } catch {
        // Some browsers may reject decode even when the image is usable.
      }

      if (!isCancelled) {
        setIsLoaded(true);
      }
    };

    preloadImage.onload = () => {
      void revealImage();
    };

    preloadImage.onerror = () => {
      if (isCancelled) return;

      if (fallbackSrc && currentSrc !== fallbackSrc) {
        setCurrentSrc(fallbackSrc);
        setIsLoaded(false);
        return;
      }

      setIsLoaded(true);
    };

    preloadImage.src = currentSrc;

    if (preloadImage.complete) {
      void revealImage();
    }

    return () => {
      isCancelled = true;
      preloadImage.onload = null;
      preloadImage.onerror = null;
    };
  }, [currentSrc, fallbackSrc, referrerPolicy, shouldLoad, sizes, srcSet]);

  return (
    <div ref={observerRef} className={`relative ${wrapperClassName}`}>
      {showSkeleton && !isLoaded && <Skeleton className={skeletonClassName} />}
      {shouldLoad ? (
        <img
          {...imgProps}
          src={currentSrc}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          loading={priority ? 'eager' : loading}
          decoding={imgProps.decoding ?? 'async'}
          fetchPriority={priority ? 'high' : fetchPriority}
          referrerPolicy={referrerPolicy}
          onLoad={(event) => {
            setIsLoaded(true);
            onLoad?.(event);
          }}
          onError={(event) => {
            if (fallbackSrc && currentSrc !== fallbackSrc) {
              setCurrentSrc(fallbackSrc);
              setIsLoaded(false);
              return;
            }

            setIsLoaded(true);
            onError?.(event);
          }}
          className={`progressive-media transition duration-500 ease-out ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.01]'} ${className}`}
        />
      ) : null}
    </div>
  );
};

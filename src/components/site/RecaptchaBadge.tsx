import React from 'react';

export const RECAPTCHA_SITE_KEY = '6LcWeJ4sAAAAADi2AYnjGHNBIDgQaWAlXONNnYEm';

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
    __recaptchaToken?: string;
    __recaptchaTokenAction?: string;
    __recaptchaTokenIssuedAt?: number;
  }
}

export const executeRecaptchaAction = async (action: string) => (
  new Promise<string>((resolve, reject) => {
    if (!window.grecaptcha?.ready || !window.grecaptcha?.execute) {
      reject(new Error('reCAPTCHA API is not available.'));
      return;
    }

    window.grecaptcha.ready(() => {
      window.grecaptcha?.execute(RECAPTCHA_SITE_KEY, { action })
        .then((token) => {
          window.__recaptchaToken = token;
          window.__recaptchaTokenAction = action;
          window.__recaptchaTokenIssuedAt = Date.now();
          resolve(token);
        })
        .catch(reject);
    });
  })
);

export const RecaptchaBadge = ({ pathname }: { pathname: string }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  React.useEffect(() => {
    let isCancelled = false;
    let retryTimeout: number | null = null;
    let attempts = 0;

    const action = pathname === '/'
      ? 'homepage_view'
      : `route_${pathname.replaceAll('/', '_').replace(/^_+/, '') || 'home'}`;

    const primeRecaptcha = () => {
      if (isCancelled) return;

      if (!window.grecaptcha?.ready || !window.grecaptcha?.execute) {
        attempts += 1;

        if (attempts > 80) {
          return;
        }

        retryTimeout = window.setTimeout(primeRecaptcha, 150);
        return;
      }

      executeRecaptchaAction(action).catch(() => {
        // Keep the badge visible even if the background token warmup fails.
      });
    };

    primeRecaptcha();

    return () => {
      isCancelled = true;
      if (retryTimeout) {
        window.clearTimeout(retryTimeout);
      }
    };
  }, [pathname]);

  React.useEffect(() => {
    let observer: MutationObserver | null = null;
    const cleanups: Array<() => void> = [];

    const attachBadgeInteractions = (badge: HTMLElement) => {
      if (badge.dataset.interactiveBadgeReady === 'true') {
        return;
      }

      badge.dataset.interactiveBadgeReady = 'true';

      const handlePointerEnter = () => setIsExpanded(true);
      const handlePointerLeave = () => setIsExpanded(false);
      const handleFocusIn = () => setIsExpanded(true);
      const handleFocusOut = () => setIsExpanded(false);

      badge.addEventListener('pointerenter', handlePointerEnter);
      badge.addEventListener('pointerleave', handlePointerLeave);
      badge.addEventListener('focusin', handleFocusIn);
      badge.addEventListener('focusout', handleFocusOut);

      cleanups.push(() => {
        badge.removeEventListener('pointerenter', handlePointerEnter);
        badge.removeEventListener('pointerleave', handlePointerLeave);
        badge.removeEventListener('focusin', handleFocusIn);
        badge.removeEventListener('focusout', handleFocusOut);
        badge.classList.remove('grecaptcha-badge--expanded');
        delete badge.dataset.interactiveBadgeReady;
      });
    };

    const findAndAttach = () => {
      const badge = document.querySelector<HTMLElement>('.grecaptcha-badge');
      if (badge) {
        attachBadgeInteractions(badge);
      }
    };

    findAndAttach();

    observer = new MutationObserver(() => {
      findAndAttach();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer?.disconnect();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  React.useEffect(() => {
    const badge = document.querySelector<HTMLElement>('.grecaptcha-badge');
    if (!badge) return;

    badge.classList.toggle('grecaptcha-badge--expanded', isExpanded);
  }, [isExpanded]);

  React.useEffect(() => {
    if (!isExpanded) return;

    const collapseTimeout = window.setTimeout(() => {
      setIsExpanded(false);
    }, 2200);

    return () => {
      window.clearTimeout(collapseTimeout);
    };
  }, [isExpanded]);

  return (
    <div
      aria-hidden="true"
      className={`recaptcha-badge-trigger ${isExpanded ? 'recaptcha-badge-trigger--hidden' : ''}`}
      onMouseEnter={() => setIsExpanded(true)}
      onFocus={() => setIsExpanded(true)}
      onTouchStart={() => setIsExpanded(true)}
      onClick={() => setIsExpanded(true)}
    />
  );
};

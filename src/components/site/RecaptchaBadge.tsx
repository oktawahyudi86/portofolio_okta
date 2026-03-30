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
    let collapseTimeout: number | null = null;
    const cleanups: Array<() => void> = [];

    const clearCollapseTimeout = () => {
      if (collapseTimeout) {
        window.clearTimeout(collapseTimeout);
        collapseTimeout = null;
      }
    };

    const attachBadgeInteractions = (badge: HTMLElement) => {
      if (badge.dataset.interactiveBadgeReady === 'true') {
        return;
      }

      badge.dataset.interactiveBadgeReady = 'true';

      const expandBadge = () => {
        clearCollapseTimeout();
        badge.classList.add('grecaptcha-badge--expanded');
      };

      const collapseBadge = (delay = 0) => {
        clearCollapseTimeout();

        if (delay === 0) {
          badge.classList.remove('grecaptcha-badge--expanded');
          return;
        }

        collapseTimeout = window.setTimeout(() => {
          badge.classList.remove('grecaptcha-badge--expanded');
        }, delay);
      };

      const handlePointerEnter = () => expandBadge();
      const handlePointerLeave = () => collapseBadge(140);
      const handleFocusIn = () => expandBadge();
      const handleFocusOut = () => collapseBadge(220);
      const handleTouchStart = () => expandBadge();
      const handleTouchEnd = () => collapseBadge(2200);
      const handleTouchCancel = () => collapseBadge(600);
      const handleClick = () => collapseBadge(2400);

      badge.addEventListener('pointerenter', handlePointerEnter);
      badge.addEventListener('pointerleave', handlePointerLeave);
      badge.addEventListener('focusin', handleFocusIn);
      badge.addEventListener('focusout', handleFocusOut);
      badge.addEventListener('touchstart', handleTouchStart, { passive: true });
      badge.addEventListener('touchend', handleTouchEnd, { passive: true });
      badge.addEventListener('touchcancel', handleTouchCancel, { passive: true });
      badge.addEventListener('click', handleClick, { passive: true });

      cleanups.push(() => {
        badge.removeEventListener('pointerenter', handlePointerEnter);
        badge.removeEventListener('pointerleave', handlePointerLeave);
        badge.removeEventListener('focusin', handleFocusIn);
        badge.removeEventListener('focusout', handleFocusOut);
        badge.removeEventListener('touchstart', handleTouchStart);
        badge.removeEventListener('touchend', handleTouchEnd);
        badge.removeEventListener('touchcancel', handleTouchCancel);
        badge.removeEventListener('click', handleClick);
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
      clearCollapseTimeout();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
};

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

  return null;
};

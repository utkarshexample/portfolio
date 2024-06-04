// _app.tsx

import * as Sentry from '@sentry/nextjs';
import { ThemeProvider } from "@/components/ThemeProvider";
import type { AppProps } from 'next/app';
import '../styles/globals.css';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

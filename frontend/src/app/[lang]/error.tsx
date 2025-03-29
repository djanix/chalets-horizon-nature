'use client';

import * as Sentry from '@sentry/nextjs';
import Error from './components/Error';
import { useEffect } from 'react'; // Error components must be Client components

export default function RootErrorBoundary({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return <Error />;
}

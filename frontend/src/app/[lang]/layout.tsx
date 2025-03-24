import type { Metadata } from 'next';
import './globals.css';
import { getStrapiURL } from './utils/api-helpers';
import { fetchAPI } from './utils/fetch-api';

import { i18n } from '../../../i18n-config';
import { FALLBACK_SEO } from '@/app/[lang]/utils/constants';

async function getGlobal(lang: string): Promise<any> {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  if (!token) throw new Error('The Strapi API Token environment variable is not set.');

  const path = `/global`;
  const options = { headers: { Authorization: `Bearer ${token}` } };

  const urlParamsObject = {
    populate: ['metadata', 'favicon'],
    locale: lang,
  };
  return await fetchAPI(path, urlParamsObject, options);
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const meta = await getGlobal(params.lang);

  if (!meta.data?.metaTitle) return FALLBACK_SEO;

  const { metadata, favicon } = meta.data;

  return {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
    icons: {
      icon: [new URL(favicon.url, getStrapiURL())],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  readonly children: React.ReactNode;
  readonly params: { lang: string };
}) {
  const global = await getGlobal(params.lang);
  // TODO: CREATE A CUSTOM ERROR PAGE
  if (!global.data) return null;

  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

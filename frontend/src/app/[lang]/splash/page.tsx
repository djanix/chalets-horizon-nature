'use client';
import { useCallback, useEffect, useState } from 'react';
import { getStrapiMedia } from '@/app/[lang]/utils/api-helpers';
import { getPageBySlug } from '@/app/[lang]/utils/get-page-by-slug';
import Hero from '@/app/[lang]/components/Hero';
import Loader from '@/app/[lang]/components/Loader';

interface Button {
  id: string;
  url: string;
  text: string;
  type: string;
  newTab: boolean;
  color: string;
}

interface Picture {
  id: string;
  url: string;
  name: string;
  alternativeText: string;
}

interface Hero {
  id: string;
  title: string;
  description: string;
  picture: Picture;
  buttons: Button[];
}

export default function Splash({ params }: { readonly params: { lang: string } }) {
  const [isLoading, setLoading] = useState(true);
  const [heroSection, setHeroSection] = useState<Hero>();
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  const fetchData = useCallback(async (lang: string) => {
    setLoading(true);
    try {
      const page = await getPageBySlug('splash', lang);
      if (!page.data?.length) return;
      const contentSections = page.data[0].contentSections || [];
      setHeroSection(contentSections.find((section: any) => section.__component === 'sections.hero'));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(params.lang);
  }, [fetchData, params]);

  useEffect(() => {
    if (!heroSection) return;
    setBackgroundImage(getStrapiMedia(heroSection.picture.url));
  }, [heroSection]);

  if (isLoading || !heroSection) return <Loader />;

  return (
    <div
      style={{ '--image-url': `url(${backgroundImage})` }}
      className={'absolute top-0 left-0 right-0 bottom-0 bg-[image:var(--image-url)] bg-no-repeat bg-center bg-cover'}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 m-auto text-center backdrop-blur-[6px] backdrop-saturate-150 rounded-xl bg-[rgba(17,25,40,0.51)] w-[clamp(300px,60%,80%)] h-[clamp(280px,60%,80%)] border-[1px] border-white/10">
        <div className="flex items-center justify-center h-full box-border p-[7%]">
          <div className="min-w-[60%]">
            <h1 className="text-[#eae4e4] pb-4 text-[32px] font-bold border-b-[1px] border-[hsla(0,0%,100%,.1)]">
              {heroSection.title}
            </h1>
            <h2 className="text-[#abb2be] text-[21px] py-4">{heroSection.description}</h2>
            <p>
              {heroSection.buttons.map((link) => (
                <a
                  key={link.text}
                  href={link.url}
                  style={{ backgroundColor: `${link.color}` }}
                  className={
                    'inline-block rounded-md text-sm py-3.5 px-2.5 m-3 shadow bg-[linear-gradient(rgba(255,255,255,0.15),rgba(255,255,255,0))] hover:brightness-90'
                  }
                >
                  {link.text}
                </a>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

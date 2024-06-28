"use client";
import {fetchAPI} from "@/app/[lang]/utils/fetch-api";
import {getStrapiMedia} from "@/app/[lang]/utils/api-helpers";
import {getPageBySlug} from "@/app/[lang]/utils/get-page-by-slug";
import Hero from "@/app/[lang]/components/Hero";

interface Button {
  id: string;
  url: string;
  text: string;
  type: string;
  newTab: boolean;
}

interface Picture {
  data: {
    id: string;
    attributes: {
      url: string;
      name: string;
      alternativeText: string;
    };
  };
}

interface Hero {
  id: string;
  title: string;
  description: string;
  picture: Picture;
  buttons: Button[];
}

async function getGlobal(lang: string): Promise<any> {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  if (!token) throw new Error("The Strapi API Token environment variable is not set.");

  const path = `/global`;
  const options = {headers: {Authorization: `Bearer ${token}`}};

  const urlParamsObject = {
    populate: [
      "footer.socialLinks",
    ],
    locale: lang,
  };
  return await fetchAPI(path, urlParamsObject, options);
}

export default async function Splash({params}: {
  readonly params: { lang: string };
}) {
  const page = await getPageBySlug('splash', params.lang);
  if (!page.data?.length) return null;
  const contentSections = page.data[0].attributes.contentSections;
  const heroSection: Hero = contentSections.find((section: any) => section.__component === 'sections.hero');
  const backgroundImage = getStrapiMedia(heroSection.picture.data.attributes.url);

  const global = await getGlobal(params.lang);
  if (!global.data) return null;
  const {footer} = global.data.attributes;
  const links = footer.socialLinks as { social: 'Facebook' | 'Instagram'; url: string; color: string; }[];

  return (
    <div style={{'--image-url': `url(${backgroundImage})`}} className={"absolute top-0 left-0 right-0 bottom-0 bg-[image:var(--image-url)] bg-no-repeat bg-center bg-cover"}>
      <div className="absolute top-0 left-0 right-0 bottom-0 m-auto text-center backdrop-blur-[6px] backdrop-saturate-150 rounded-xl bg-[rgba(17,25,40,0.51)] w-[clamp(300px,60%,80%)] h-[clamp(280px,60%,80%)] border-[1px] border-white/10">
        <div className="flex items-center justify-center h-full box-border p-[7%]">
          <div className="min-w-[60%]">
            <h1 className="text-[#eae4e4] pb-4 text-[32px] font-bold border-b-[1px] border-[hsla(0,0%,100%,.1)]">{heroSection.title}</h1>
            <h2 className="text-[#abb2be] text-[21px] py-4">{heroSection.description}</h2>
            <p>
              {links.map(link =>
                <a key={link.social} href={link.url} style={{'backgroundColor': `${link.color}`}} className={"inline-block rounded-md text-sm py-3.5 px-2.5 m-3 shadow bg-[linear-gradient(rgba(255,255,255,0.15),rgba(255,255,255,0))] hover:brightness-90"}>
                  {link.social}
                </a>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

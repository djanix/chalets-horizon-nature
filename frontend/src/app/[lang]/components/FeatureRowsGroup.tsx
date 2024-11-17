import Image from "next/image";
import { getStrapiMedia } from "../utils/api-helpers";

interface Feature {
  title: string;
  description: string;
  media: {
    data: {
      id: number;
      attributes: {
        name: string;
        alternativeText: string;
        width: number;
        height: number;
        url: string;
      }
    }
  };
  link?: {
    url: string;
    newTab: boolean;
    text: string;
  };
}

interface FeatureColumnsGroupProps {
  data: {
    id: string;
    title: string;
    description: string;
    features: Feature[];
  };
}

function Feature({ title, description, media }: Readonly<Feature>) {
  const imageUrl = getStrapiMedia(media.data?.attributes.url);
  return (
    <div className="flex flex-col items-center mx-12 lg:mx-0">
      <div className="relative text-center">
        <p className="px-6 py-1 text-lg italic">{title}</p>
      </div>
      <div className="flex items-center">
        <div className="my-6">
          <Image
            src={imageUrl ?? ""}
            alt={media.data?.attributes.alternativeText || ""}
            className="inline-block h-32 w-32 rounded-full"
            width={media.data?.attributes.height || 200}
            height={media.data?.attributes.width || 200}
          />
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default function FeatureRowsGroup({data}: FeatureColumnsGroupProps) {
  if (!data.features) return null;

  return (
    <section className="m:py-12 lg:py-24">
      <div className="container mx-auto py-4 space-y-2 text-center">
        <h1 className="text-4xl font-semibold leading-none text-center">
          {data.title}
        </h1>
        <p className="mt-4 text-lg text-center">{data.description}</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
        {data.features.map((feature: Feature, index: number) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}

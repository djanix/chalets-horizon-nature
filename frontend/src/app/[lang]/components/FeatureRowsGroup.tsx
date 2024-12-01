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
    <div className="flex flex-col border-2 rounded-xl px-6 py-4">
      <div className="relative mb-1">
        <p className="text-lg font-bold">{title}</p>
      </div>
      <div className="flex items-center">
        <Image
          src={imageUrl ?? ""}
          alt={media.data?.attributes.alternativeText || ""}
          className="inline-block h-8 w-8"
          width={media.data?.attributes.height || 200}
          height={media.data?.attributes.width || 200}
        />

        <p className="text-gray-600 ml-2">{description}</p>
      </div>
    </div>
  );
}

export default function FeatureRowsGroup({data}: FeatureColumnsGroupProps) {
  if (!data.features) return null;

  return (
    <section className="">
      <div className="container mx-auto px-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.features.map((feature: Feature, index: number) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}

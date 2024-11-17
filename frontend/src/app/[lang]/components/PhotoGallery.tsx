import Image from "next/image";
import { getStrapiMedia } from "../utils/api-helpers";

interface Media {
  id: string;
  attributes: {
    url: string;
  };
}

interface PhotoGalleryProps {
  data: {
    mediaList: {
      data: Media[];
    }
  };
}

function Media({ attributes }: Readonly<Media>) {
  const imageUrl = getStrapiMedia(attributes.url);
  return (
    <Image
      src={imageUrl ?? ""}
      alt=""
      width={400}
      height={400}
    />
  );
}

export default function PhotoGallery({ data }: PhotoGalleryProps) {
  const mediaList = data.mediaList.data;

  return (
    <section className="m:py-12 lg:py-24">
      <div className="container mx-auto p-6 py-4 space-y-2 text-center">
        {mediaList.map((media: Media, index: number) => (
          <Media key={index} {...media} />
        ))}
      </div>
    </section>
  );
}

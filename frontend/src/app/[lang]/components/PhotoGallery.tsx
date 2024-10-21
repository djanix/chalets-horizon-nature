import Link from "next/link";
import Image from "next/image";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";
import { renderButtonStyle } from "../utils/render-button-style";

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
    <section className="dark:bg-black dark:text-gray-100  m:py-12 lg:py-24">
      <div className="container mx-auto py-4 space-y-2 text-center">
        {mediaList.map((media: Media, index: number) => (
          <Media key={index} {...media} />
        ))}
      </div>
    </section>
  );
}

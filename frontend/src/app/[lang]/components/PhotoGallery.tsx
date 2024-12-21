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
      className="object-cover"
      fill
    />
  );
}

export default function PhotoGallery({ data }: PhotoGalleryProps) {
  const mediaList = data.mediaList.data;

  return (
    <section className="m:py-12 lg:py-24">
      <div className="container flex mx-auto p-6 py-4 text-center">
        <div className="flex-1 mr-2">
          <div className="relative aspect-square">
            <Media {...mediaList[0]}></Media>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-2">
          {mediaList.map((media: Media, index: number) => {
            if (index === 0 || index > 4) return null;
            return (
              <div key={index} className="relative aspect-square">
                <Media {...media} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

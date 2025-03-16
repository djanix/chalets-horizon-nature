"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getStrapiMedia } from "../utils/api-helpers";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

interface MediaImage {
  url: string;
  width: number;
  height: number;
  hash: string;
}

interface Media extends MediaImage {
  id: string;
  formats: {
    thumbnail: MediaImage,
    small: MediaImage,
    medium: MediaImage,
    large: MediaImage,
  };
}

interface PhotoGalleryProps {
  data: {
    mediaList: Media[];
  };
}

function Media(attributes: Readonly<Media>) {
  // const imageThumbnailUrl = getStrapiMedia(attributes.formats?.large?.url || attributes.url);
  const imageUrl = getStrapiMedia(attributes.url);
  return (
    <a
      href={imageUrl ?? ""}
      data-pswp-width={attributes.width}
      data-pswp-height={attributes.height}
      data-cropped="true"
      target="_blank"
      rel="noreferrer"
    >
      <Image
        src={imageUrl ?? ""}
        alt=""
        className="object-cover"
        fill
      />
    </a>
  );
}

export default function PhotoGallery({ data }: PhotoGalleryProps) {
  const mediaList = data.mediaList;
  const [showFullList, setShowFullList] = useState(false);

  const toggleFullList = () => {
    setShowFullList(!showFullList);
  };

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#img-gallery',
      // dataSource: mediaList.map(m => ({ src: m.attributes.url })),
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      //@ts-expect-error
      lightbox = null;
    };
  }, [mediaList]);

  return (
    <section id="img-gallery" className="pswp-gallery">
      <div className="container relative flex mx-auto px-6">
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

        <div className="absolute right-10 bottom-4">
          <button onClick={toggleFullList} className="text-greyFriends border-2 border-greyFriends bg-natural-light px-2 py-1 align-bottom">
            <Squares2X2Icon className="h-7 w-7 text-greyFriends inline-block mr-1" aria-hidden="true" />
            {showFullList ? "Cacher les photos supplémentaires" : "Afficher toutes les photos"}
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-2 grid grid-cols-4 gap-2">
        {mediaList.map((media: Media, index: number) => {
          if (index < 5) return null;
          return (
            <div key={index} className={`${!showFullList && 'hidden'} relative aspect-square`}>
              <Media {...media} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

"use client";
import Image from "next/image";
import { getStrapiMedia } from "../utils/api-helpers";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import {useState} from "react";


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
  const [showFullList, setShowFullList] = useState(false);

  const toggleFullList = () => {
    setShowFullList(!showFullList);
  };

  return (
    <section>
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

        <div className="absolute right-0 bottom-0 pr-10 pb-4">
          <button onClick={toggleFullList} className="text-greyFriends border-2 border-greyFriends bg-natural-light px-2 py-1 align-bottom">
            <Squares2X2Icon className="h-7 w-7 text-greyFriends inline-block mr-1" aria-hidden="true" />
            Afficher toutes les photos
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-2 grid grid-cols-4 gap-2">
        {mediaList.map((media: Media, index: number) => {
          if (!showFullList || index < 5) return null;
          return (
            <div key={index} className="relative aspect-square">
              <Media {...media} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

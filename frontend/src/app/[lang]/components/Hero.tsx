import Link from "next/link";
import Image from "next/image";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";
import { renderButtonStyle } from "../utils/render-button-style";

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

interface HeroProps {
  data: {
    id: string;
    title: string;
    description: string;
    picture: Picture;
    buttons: Button[];
  };
}

export default function Hero({ data }: HeroProps) {
  const imgUrl = getStrapiMedia(data.picture.data.attributes.url);

  return (
    <section className="">
      <div className="flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="bg-greyFriends-dark text-greyFriends-light flex flex-1 justify-end text-center lg:text-left">
          <div className="max-w-2xl px-32 py-20 box-content">
            <HighlightedText
              text={data.title}
              tag="h1"
              className="text-5xl font-bold leading-none sm:text-6xl mb-8"
              color="dark:text-violet-400"
            />

            <HighlightedText
              text={data.description}
              tag="p"
              className="tmt-6 mb-8 text-lg sm:mb-12"
              color="dark:text-violet-400"
            />

            <div
              className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              {data.buttons.map((button: Button, index: number) => (
                <Link
                  key={index}
                  href={button.url}
                  target={button.newTab ? "_blank" : "_self"}
                  className={renderButtonStyle(button.type)}
                >
                  {button.text}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-greyFriends-light flex flex-1 min-h-96 relative">
          <Image
            src={imgUrl || ""}
            alt={
              data.picture.data.attributes.alternativeText || ""
            }
            className="object-cover"
            fill
          />
        </div>
      </div>
    </section>
);
}

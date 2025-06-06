import { getStrapiMedia } from '../utils/api-helpers';
import Image from 'next/image';

interface MediaProps {
  id: string;
  url: string;
  name: string;
  alternativeText: string;
}

export default function Media({ data }: { data: MediaProps }) {
  const imgUrl = getStrapiMedia(data.url);

  return (
    <div className="flex items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
      <Image
        src={imgUrl || ''}
        alt={data.alternativeText || 'none provided'}
        className="object-cover w-full h-full rounded-lg overflow-hidden"
        width={400}
        height={400}
      />
    </div>
  );
}

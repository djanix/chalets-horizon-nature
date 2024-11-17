interface Map {
  id: string;
  address: string;
}

interface LocalisationProps {
  data: {
    id: string;
    description: string;
    map: Map;
  };
}

export default function Localisation({ data }: LocalisationProps) {
  return (
    <section className="">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-lg lg:max-w-md xl:max-w-lg lg:text-left">
          {data.description}
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          {data.map.address}
        </div>
      </div>
    </section>
  );
}

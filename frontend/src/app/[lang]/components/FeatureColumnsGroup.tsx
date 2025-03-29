import Icon from './Icon';

interface Feature {
  title: string;
  description?: string;
  icon?: string;
}

interface FeatureColumnsGroupProps {
  data: {
    id: string;
    features: Feature[];
  };
}

function Feature({ title, description, icon }: Readonly<Feature>) {
  return (
    <div className="flex flex-row items-center pr-8">
      <div className="flex items-center">{icon && <Icon icon={icon} size={24} />}</div>
      <div className="flex items-center">
        <p className="px-3 text-lg">{title}</p>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

export default function FeatureColumnsGroup({ data }: FeatureColumnsGroupProps) {
  if (!data.features) return null;

  return (
    <section className="container mx-auto">
      <div className="pl-28 grid gap-6 grid-cols-1 sm:grid-cols-2 max-w-xl mx-auto">
        {data.features.map((feature: Feature, index: number) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}

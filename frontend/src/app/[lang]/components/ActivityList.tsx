import RichText from "./RichText";
import Media from "./Media";

interface Activity {
  id: string;
  title: string;
  picture: {
    data: {
      id: string;
      attributes: {
        url: string;
        name: string;
        alternativeText: string;
      };
    };
  };
  content: string;
}

interface ActivityListProps {
  data: {
    activities: Activity[];
  };
}

export default function ActivityList({ data }: ActivityListProps) {
  return (
    <section className="m:py-12 lg:py-24">
      <div className="container mx-auto p-6 py-4 space-y-2 text-center">
        {data.activities.map((activity: Activity, index: number) => (
          <div key={index}>
            <span>{activity.title}</span>
            <RichText data={{body: activity.content}} />
            <Media data={{file: activity.picture}} />
          </div>
        ))}
      </div>
    </section>
  );
}

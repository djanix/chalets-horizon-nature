import RichText from './RichText';
import Media from './Media';

interface Picture {
  id: string;
  url: string;
  name: string;
  alternativeText: string;
}

interface Activity {
  id: string;
  title: string;
  picture: Picture[];
  content: string;
}

interface ActivityListProps {
  data: {
    activities: Activity[];
  };
}

export default function ActivityList({ data }: ActivityListProps) {
  return (
    <section className="container mx-auto">
      <div className="px-6">
        {data.activities.map((activity: Activity, index: number) => (
          <div key={index}>
            <div className={`md:flex mb-12 gap-8 ${index % 2 === 0 && 'flex-row-reverse'}`}>
              <div className="flex-1">
                <Media data={activity.picture[0]} />
              </div>

              <div className="flex-1">
                <h3 className="text-greyFriends-dark font-bold text-3xl mb-2">{activity.title}</h3>
                <RichText data={{ body: activity.content }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

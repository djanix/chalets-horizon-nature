import RichText from '@/app/[lang]/components/RichText';

interface RichTextContainerProps {
  data: {
    body: string;
  };
}

export default function RichTextContainer({ data }: RichTextContainerProps) {
  return (
    <section className="container mx-auto">
      <div className="richtext-container px-8">
        <RichText data={data} />
      </div>
    </section>
  );
}

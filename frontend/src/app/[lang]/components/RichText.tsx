import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface RichTextProps {
  data: {
    body: string;
  };
}

export default function RichText({ data }: RichTextProps) {
  // TODO: STYLE THE MARKDOWN
  return (
    <div className="rich-text">
      <Markdown children={data.body} remarkPlugins={[remarkGfm]} />
    </div>
  );
}

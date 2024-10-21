interface HeadingProps {
  data: {
    heading: string,
    description?: string,
  }
}

export default function PageHeader({ data } : HeadingProps) {
  return (
    <div className="my-16 w-full text-center">
      <h2 className="text-4xl my-4 lg:text-5xl font-bold font-heading">{data.heading}</h2>
      { data.description && <span className="text-violet-400 font-bold">{data.description}</span> }
    </div>
  );
}

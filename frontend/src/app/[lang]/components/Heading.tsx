interface HeadingProps {
  data: {
    heading: string,
    description?: string,
    anchor?: string,
  }
}

export default function PageHeader({ data } : HeadingProps) {
  return (
    <div id={data.anchor} className="container mx-auto my-16 w-full text-center">
      <h2 className="text-4xl my-4 lg:text-5xl font-bold font-heading">{data.heading}</h2>
      { data.description && <span className="text-greyFriends font-bold">{data.description}</span> }
    </div>
  );
}

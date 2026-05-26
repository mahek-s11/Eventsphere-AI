type EventCardProps = {
  title: string;
  category: string;
  date: string;
};

export default function EventCard({
  title,
  category,
  date,
}: EventCardProps) {
  return (
    <div className="rounded-2xl border border-gray-800 bg-zinc-900 p-6 transition hover:border-purple-500">
      <h3 className="mb-2 text-xl font-bold">{title}</h3>

      <p className="mb-2 text-purple-400">
        {category}
      </p>

      <p className="text-gray-400">
        {date}
      </p>
    </div>
  );
}
type EventCardProps = {
  id: number;
  title: string;
  category: string;
  date: string;
  location: string;
};

export default function EventCard({
  id,
  title,
  category,
  date,
  location,
}: EventCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl bg-zinc-900 transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
      <div className="h-40 bg-gradient-to-r from-purple-600 to-pink-500"></div>

      <div className="p-6">
        <span className="rounded-full bg-purple-600 px-3 py-1 text-sm">
          {category}
        </span>

        <h3 className="mt-4 mb-2 text-2xl font-bold">
          {title}
        </h3>

        <p className="mb-2 text-gray-400">
          📅 {date}
        </p>

        <p className="mb-5 text-gray-400">
          📍 {location}
        </p>

        <a
          href={`/events/${id}`}
          className="block w-full rounded-lg bg-purple-600 py-2 text-center font-semibold hover:bg-purple-700"
        >
          View Details
        </a>
      </div>
    </div>
  );
}
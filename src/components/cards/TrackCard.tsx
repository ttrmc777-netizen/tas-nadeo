import Link from "next/link";

type Props = {
  game: string;

  id: string;

  tasTime: string;

  saved: string;

  authors: string[];

  date: string;
};

export default function TrackCard({
  game,
  id,
  tasTime,
  saved,
  authors,
  date,
}: Props) {
  return (
    <Link
      href={`/games/${game}/${id}`}
      className="block rounded-xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-blue-500 hover:bg-zinc-800"
    >
      <div className="flex justify-between items-center">

        <h2 className="text-2xl font-bold">
          {id}
        </h2>

        <span className="rounded bg-blue-600 px-3 py-1">
          {tasTime}
        </span>

      </div>

      <div className="mt-4 space-y-2 text-zinc-300">

        <p>
          Saved: {saved}
        </p>

        <p>
          {authors.join(" • ")}
        </p>

        <p>
          {date}
        </p>

      </div>

    </Link>
  );
}
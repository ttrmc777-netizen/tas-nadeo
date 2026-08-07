import Link from "next/link";

import { Track } from "@/types/track";

type Props = {
  game: string;

  track: Track;
};

export default function TrackCard({
  game,
  track,
}: Props) {
  return (
    <Link
      href={`/games/${game}/${track.id}`}
      className="block rounded-xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-blue-500 hover:bg-zinc-800"
    >
      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          {track.id}
        </h2>

        <span className="rounded bg-blue-600 px-3 py-1">
          {track.tas.time}
        </span>

      </div>

      <div className="mt-4 space-y-2 text-zinc-300">

        <p>
          Saved: {track.tas.saved}
        </p>

        <p>
          {track.tas.authors.join(" • ")}
        </p>

        <p>
          {track.tas.date}
        </p>

      </div>

    </Link>
  );
}
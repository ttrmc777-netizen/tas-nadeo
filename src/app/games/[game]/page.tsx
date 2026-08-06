import TrackCard from "@/components/cards/TrackCard";

import { getGame } from "@/lib/games";

type Props = {
  params: Promise<{
    game: string;
  }>;
};

export default async function GamePage({ params }: Props) {
  const { game } = await params;

  const tracks = await getGame(game);

  return (
    <main className="min-h-screen bg-black p-10 text-white">
      <h1 className="mb-8 text-5xl font-bold">
        {game.toUpperCase()}
      </h1>

      <p className="mb-8 text-zinc-400">
        {tracks.length} track(s)
      </p>

      <div className="space-y-4">
        {tracks.map((track: any) => (
          <TrackCard
    key={track.id}
    game={game}
    id={track.id}
    tasTime={track.tasTime}
    saved={track.saved}
    authors={track.authors}
    date={track.date}
/>
        ))}
      </div>
    </main>
  );
}
import { getTrack } from "@/lib/tracks";
import { getHistory } from "@/lib/history";

type Props = {
  params: Promise<{
    game: string;
    track: string;
  }>;
};

export default async function TrackPage({ params }: Props) {
  const { game, track } = await params;

  const data = await getTrack(game, track);
  const history = await getHistory(game, track);

  if (!data) {
    return (
      <main className="min-h-screen bg-black p-10 text-white">
        <h1 className="text-4xl font-bold">
          Track not found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black p-10 text-white">

      <h1 className="text-5xl font-bold mb-6">
        {data.id}
      </h1>

      <div className="rounded-xl bg-zinc-900 p-6 space-y-2">

        <p>
          <strong>TAS Time:</strong> {data.tasTime}
        </p>

        <p>
          <strong>Saved:</strong> {data.saved}
        </p>

        <p>
          <strong>Authors:</strong> {data.authors.join(", ")}
        </p>

        <p>
          <strong>Date:</strong> {data.date}
        </p>

      </div>

      <section className="mt-10">

        <h2 className="mb-4 text-3xl font-bold">
          History
        </h2>

        {history.length === 0 ? (
          <p className="text-zinc-400">
            No history available.
          </p>
        ) : (
          history.map((category) => (
            <div
              key={category.name}
              className="mb-8 rounded-xl bg-zinc-900 p-5"
            >
              <h3 className="mb-4 text-2xl font-bold text-blue-400">
                {category.name}
              </h3>

              {category.entries.map((entry, index) => (
                <div
                  key={index}
                  className="mb-3 border-l-2 border-blue-500 pl-4"
                >
                  <p>
                    <strong>{entry.record}</strong>
                  </p>

                  <p>
                    {entry.authors.join(", ")}
                  </p>

                  <p className="text-zinc-400">
                    {entry.date}
                  </p>
                </div>
              ))}
            </div>
          ))
        )}

      </section>

    </main>
  );
}
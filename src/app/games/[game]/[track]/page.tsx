import { getTrack } from "@/lib/tracks";
import { getHistory } from "@/lib/history";

import TrackInfo from "@/components/track/TrackInfo";
import TrackImage from "@/components/track/TrackImage";
import TrackHistory from "@/components/track/TrackHistory";

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
      <main className="min-h-screen bg-[#0d1117] p-10 text-white">
        <h1 className="text-4xl font-bold">
          Track not found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0d1117] p-10 text-white">

      <div className="mx-auto max-w-7xl space-y-8">

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          <div className="lg:col-span-2">
            <TrackInfo
              id={data.id}
              tas={data.tas}
            />
          </div>

          <TrackImage />

        </div>

        <TrackHistory history={history} />

      </div>

    </main>
  );
}
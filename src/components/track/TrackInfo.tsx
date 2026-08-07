type Props = {
  id: string;
  tas: {
    time: string;
    saved: string;
    authors: string[];
    date: string;
  };
};

export default function TrackInfo({
  id,
  tas,
}: Props) {
  return (
    <div className="rounded-2xl bg-[#1a2132] p-8 shadow-lg">

      <h1 className="mb-8 text-5xl font-bold text-white">
        {id}
      </h1>

      <h2 className="mb-6 text-2xl font-semibold text-cyan-400">
        Current TAS
      </h2>

      <div className="space-y-4 text-lg">

        <div className="flex justify-between">
          <span className="text-zinc-400">Time</span>
          <span>{tas.time}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-zinc-400">Saved</span>
          <span>{tas.saved}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-zinc-400">Authors</span>

          <span className="text-right">
            {tas.authors.join(", ")}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-zinc-400">Date</span>
          <span>{tas.date}</span>
        </div>

      </div>

      <div className="my-8 h-px bg-zinc-700" />

      <div className="grid grid-cols-3 gap-3">

        <button
          disabled
          className="rounded-lg bg-red-600 px-4 py-3 font-semibold opacity-60"
        >
          🎥 Video
        </button>

        <button
          disabled
          className="rounded-lg bg-blue-600 px-4 py-3 font-semibold opacity-60"
        >
          💾 Replay
        </button>

        <button
          disabled
          className="rounded-lg bg-green-600 px-4 py-3 font-semibold opacity-60"
        >
          ⌨ Inputs
        </button>

      </div>

    </div>
  );
}
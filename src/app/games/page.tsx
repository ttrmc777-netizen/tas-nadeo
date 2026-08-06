import Link from "next/link";

const games = [
  { id: "tmnf", name: "TMNF" },
  { id: "tmn-eswc", name: "TMN ESWC" },
  { id: "tmn-remakes", name: "TMN Remakes" },
  { id: "tmuf", name: "TMUF" },
  { id: "startrack", name: "StarTrack" },
  { id: "tms", name: "TMS" },
  { id: "tmo", name: "TMO" },
  { id: "demo-beta", name: "Demo / Beta" },
  { id: "tm2", name: "TM2" },
];

export default function GamesPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="mb-8 text-4xl font-bold">Games</h1>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {games.map((game) => (
          <Link
            key={game.id}
            href={`/games/${game.id}`}
            className="rounded-xl border border-zinc-700 bg-zinc-900 p-6 transition hover:bg-zinc-800"
          >
            <h2 className="text-2xl font-semibold">{game.name}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
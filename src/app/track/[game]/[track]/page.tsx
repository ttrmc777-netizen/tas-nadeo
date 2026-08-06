type Props = {
  params: {
    game: string;
    track: string;
  };
};

export default function TrackPage({ params }: Props) {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold">
        {params.game.toUpperCase()} - {params.track}
      </h1>
    </main>
  );
}
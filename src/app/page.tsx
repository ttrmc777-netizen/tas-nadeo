import Image from "next/image";
export default function Home() {
  return (
    <div className="space-y-12">

      <section className="rounded-2xl border border-cyan-500/20 bg-black/30 backdrop-blur-md p-10">

        <div className="relative flex justify-center">

         <div className="logo-glow"></div>
          <Image
           src="/images/logo.png"
           alt="TAS Nadeo"
           width={400}
           height={70}
           priority
           className="mx-auto select-none tas-logo relative z-5"
          />
      </div>

        <p className="mt-4 max-w-3xl text-zinc-300 text-lg">
          Archive for TrackMania Tool Assisted Speedruns.
        </p>

      <div className="mt-14 flex justify-center">

        <div className="search-box">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
           viewBox="0 0 24 24"
           strokeWidth={1.8}
           stroke="currentColor"
           className="search-icon"
          >
           <path
           strokeLinecap="round"
           strokeLinejoin="round"
          d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
         />
           </svg>

          <input
           placeholder="Search Nadeo track..."
           className="search-input"
         />

        </div>

      </div>

      </section>

      <section>

        <h2 className="menu-font mb-6 text-5xl tracking-widest text-cyan-300">
          Games
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">

          <GameCard
            title="TMNF"
            subtitle="TrackMania Nations Forever"
          />

          <GameCard
            title="TMUF"
            subtitle="TrackMania United Forever"
          />

          <GameCard
            title="TMN"
            subtitle="ESWC"
          />

          <GameCard
            title="TMO"
            subtitle="TrackMania Original"
          />

          <GameCard
            title="TMS"
            subtitle="TrackMania Sunrise"
          />

        </div>

      </section>

    </div>
  );
}

type GameCardProps = {
  title: string;
  subtitle: string;
};

function GameCard({
  title,
  subtitle,
}: GameCardProps) {
  return (
    <div className="group cursor-pointer rounded-2xl border border-cyan-500/20 bg-black/30 p-6 transition hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/10">

      <h3 className="title-font text-5xl tracking-wider text-cyan-300">
        {title}
      </h3>

      <p className="mt-3 text-zinc-400">
        {subtitle}
      </p>

    </div>
  );
}
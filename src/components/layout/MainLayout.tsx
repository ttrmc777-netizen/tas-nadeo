import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <main className="relative min-h-screen text-white">

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

          <Link
            href="/"
            className="title-font text-5xl tracking-[0.18em] text-cyan-300 transition hover:text-white"
          >
            TAS NADEO
          </Link>

          <nav className="menu-font flex items-center gap-8 text-2xl uppercase tracking-widest">

            <Link href="/" className="hover:text-cyan-300 transition">
              Home
            </Link>

            <Link href="/games" className="hover:text-cyan-300 transition">
              Games
            </Link>

            <Link href="/leaderboard" className="hover:text-cyan-300 transition">
              Leaderboard
            </Link>

            <Link href="/tasers" className="hover:text-cyan-300 transition">
              TASers
            </Link>

            <Link href="/highlights" className="hover:text-cyan-300 transition">
              Highlights
            </Link>

          </nav>

        </div>

      </header>

      <div className="mx-auto max-w-7xl px-8 py-10">
        {children}
      </div>

    </main>
  );
}
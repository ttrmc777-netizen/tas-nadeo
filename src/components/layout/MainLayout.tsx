import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link
            href="/"
            className="text-2xl font-bold text-blue-400 hover:text-blue-300"
          >
            tas-nadeo
          </Link>

          <nav className="flex items-center gap-6 text-sm">
            <Link href="/">Home</Link>
            <Link href="/games">Games</Link>
            <Link href="/leaderboard">Leaderboard</Link>
            <Link href="/tasers">TASers</Link>
            <Link href="/highlights">Highlights</Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-7xl p-6">
        {children}
      </div>
    </main>
  );
}
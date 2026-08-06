export default function Header() {
  return (
    <header className="w-full border-b border-zinc-800 bg-black">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold text-white">
          tas-nadeo
        </h1>

        <nav className="flex gap-6 text-sm text-zinc-300">
          <a href="/">Home</a>
          <a href="/games">Games</a>
          <a href="/tasers">TASers</a>
          <a href="/highlights">Highlights</a>
        </nav>
      </div>
    </header>
  );
}
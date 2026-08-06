import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-6xl font-bold">tas-nadeo</h1>

          <p className="text-sm text-zinc-600">
            Rebuild the TAS Nadeo site.
          </p>
        </div>
      </main>
    </>
  );
}
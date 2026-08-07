import Image from "next/image";
import GameCarousel from "@/components/GameCarousel";

export default function Home() {
  return (
    <div className="space-y-10">

      <section className="hero-section">

        <div className="hero-logo">
        

          <div className="logo-glow" />

          <Image
            src="/images/logo.png"
            alt="TAS Nadeo"
            width={600}
            height={110}
            priority
            className="tas-logo relative z-10"
          />

        </div>

        <p className="hero-description">
          The archive of Trackmania
          <br />
          Tool Assisted Speedruns
        </p>

        <div className="hero-search">

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
              className="search-input"
              placeholder="Search Nadeo track..."
            />

          </div>

        </div>

      </section>

      <GameCarousel />

    </div>
  );
}
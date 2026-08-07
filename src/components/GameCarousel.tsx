"use client";

import Image from "next/image";
import { games } from "@/data/games";
import useEmblaCarousel from "embla-carousel-react";
import { useRef } from "react";

export default function GameCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: false,
    loop: false,
    duration: 25,
  });

  return (
    <section className="mt-24">

      <div className="relative">

        <button
          className="carousel-arrow carousel-arrow-left"
          onClick={() => emblaApi?.scrollPrev()}
        >
          ←
        </button>

        <button
          className="carousel-arrow carousel-arrow-right"
          onClick={() => emblaApi?.scrollNext()}
        >
          →
        </button>

        <h2 className="section-title mb-8">
          Games
        </h2>

        <div
          ref={emblaRef}
          className="embla"
        >

          <div className="embla__container">

            {games.map((game) => (

              <div
                key={game.id}
                className="embla__slide"
              >

                <GameCard game={game} />

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

type Game = (typeof games)[number];

function GameCard({ game }: { game: Game }) {
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 14;
    const rotateX = ((0.5 - y / rect.height)) * 14;

    card.style.setProperty("--rx", `${rotateX}deg`);
    card.style.setProperty("--ry", `${rotateY}deg`);

    card.style.setProperty(
      "--mx",
      `${(x / rect.width) * 100}%`
    );

    card.style.setProperty(
      "--my",
      `${(y / rect.height) * 100}%`
    );
  }

  function reset() {
    const card = cardRef.current;

    if (!card) return;

    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");

    card.style.setProperty("--mx", "50%");
    card.style.setProperty("--my", "50%");
  }

  return (

    <div
      ref={cardRef}
      className="game-card parallax-card"
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >

      <Image
        src={`/images/games/${game.id}.webp`}
        alt={game.title}
        fill
        className="game-bg"
      />

      <div className="game-gradient" />

      <div className="card-shine" />

      <div className="game-info">

        <Image
          src={`/images/logos/${game.id}.png`}
          alt={game.title}
          width={180}
          height={90}
          className="game-logo"
        />

        <p className="game-subtitle">

          {game.subtitle}

        </p>

        <div className="game-progress">

          <div className="progress-text">

            <span>

              Tracks

            </span>

            <span>

              {game.tracks} / {game.total}

            </span>

          </div>

          <div className="progress-bar">

            <div
              className="progress-fill"
              style={{
                width: `${(game.tracks / game.total) * 100}%`,
              }}
            />

          </div>

        </div>

        <button className="browse-btn">

          Browse Tracks →

        </button>

      </div>

    </div>

  );
}
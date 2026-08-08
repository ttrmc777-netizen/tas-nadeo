const categories = [
  {
    title: "OPEN",
    description: "Current TAS World Record using any strategy.",
  },
  {
    title: "NOSEBOOST",
    description:
      "Fastest TAS without any noseboosts. Nosebugs under 400 speed are allowed.",
  },
  {
    title: "NO UBER",
    description:
      "Fastest TAS without noseboosts or new* ubers.",
    note: "*New = not done by the RTA World Record.",
  },
  {
    title: "WR ROUTE",
    description:
      "Fastest TAS following the RTA World Record route. SDs, ramms, and minor tricks are allowed.",
  },
  {
    title: "NO CUT",
    description:
      "Fastest TAS following the original Nadeo route. SDs, ramms, and minor tricks are allowed.",
  },
  {
    title: "LOW INPUT",
    description:
      "Minimum number of inputs required to finish the track. Ties are broken using the fastest time.",
  },
  {
    title: "RTA",
    description: "Current Real-Time Attack World Record.",
  },
];

const badges = [
  ["Novice", "2", "1.5", "5 SEC"],
  ["Apprentice", "5", "2.5", "15 SEC"],
  ["Adept", "10", "5", "30 SEC"],
  ["Expert", "20", "10", "60 SEC"],
  ["Elite", "40", "20", "90 SEC"],
  ["Master", "60", "40", "2 MIN"],
  ["Legend", "80", "70", "4 MIN"],
  ["Mythic", "100", "100", "6 MIN"],
];

const hallOfFame = [
  ["TMI Released", "30/05/2021"],
  ["Noseboost Discovery", "03/09/2021"],
  ["Stadium Start Trick Discovery", "03/02/2022"],
  ["Island/Coast Start Trick Discovery", "27/01/2023"],
  ["TMNF Sub 60 Minutes Campaign", "04/06/2023"],
  ["TMNF Sub 50 Minutes Campaign", "17/05/2025"],
  ["1000 TASes Completed", "09/07/2025"],
  ["TMNF 1 Hour Time Save", "10/05/2026"],
  ["TMNF Sub 45 Minutes Campaign", "???"],
  ["United Aftermovie", "???"],
];

import AboutRain from "@/components/layout/AboutRain";

export default function Page() {
  return (
    <>
      <AboutRain />

      <main className="about-page">

        <section className="about-hero">

          <h1 className="about-title">
            ABOUT
          </h1>

        <div className="about-title-line" />

        <p className="about-intro">
          An archive dedicated to TrackMania Tool Assisted Speedruns,
          their history, categories, achievements, and community.
        </p>
      </section>

      {/* ABOUT */}
      <section className="about-section">
        <div className="about-section-heading">
          <span>01</span>
          <h2>ABOUT TAS NADEO</h2>
        </div>

        <div className="about-glass-card">
          <p>
            TAS Nadeo is an archive and community platform dedicated to
            TrackMania Tool Assisted Speedruns.
          </p>

          <p>
            The goal is to preserve TAS records, document discoveries,
            recognize contributors, and make the history of TrackMania
            TASing easy to explore.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="about-section">
        <div className="about-section-heading">
          <span>02</span>
          <h2>TAS CATEGORIES</h2>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <article
              key={category.title}
              className="category-card"
            >
              <div className="category-icon">
                {category.title.charAt(0)}
              </div>

              <h3>{category.title}</h3>

              <p>{category.description}</p>

              {category.note && (
                <small>{category.note}</small>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* BADGES */}
      <section className="about-section">
        <div className="about-section-heading">
          <span>03</span>
          <h2>BADGE SYSTEM</h2>
        </div>

        <div className="about-glass-card badge-card">
          <p className="section-description">
            Badges represent the contribution of a TASer to the
            TrackMania TAS community.
          </p>

          <div className="badge-table-wrapper">
            <table className="badge-table">
              <thead>
                <tr>
                  <th>BADGE</th>
                  <th>TASES</th>
                  <th>CONTRIBUTION</th>
                  <th>TIME SAVED</th>
                </tr>
              </thead>

              <tbody>
                {badges.map((badge) => (
                  <tr key={badge[0]}>
                    <td className="badge-name">
                      {badge[0]}
                    </td>
                    <td>{badge[1]}</td>
                    <td>{badge[2]}</td>
                    <td>{badge[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* BADGE CALCULATION */}
      <section className="about-section">
        <div className="about-section-heading">
          <span>04</span>
          <h2>HOW TO CLAIM BADGE</h2>
        </div>

        <div className="about-glass-card">

          <p>
            These badges are awarded to those who make consistent progress and represent their dedication to the community.
          </p>

          <p>
            We want these badges to remain prestigious, so earning them is intended to be a challenge.
          </p>
          
          <p>
            Badges are allocated based on your average achievement across the three categories :
          </p>

          <div className="stat-pills">
            <span>TASES</span>
            <span>CONTRIBUTION</span>
            <span>TIME SAVED</span>
          </div>

          <p>
            Example: 12 TASes, 4.2 contributions, and 2.5 minutes saved correspond to ranks 3, 2, and 6. The average rank is 3.66, which is rounded up to 4, and that awarding the TASer Expert rank and Diamond badge.          </p>
        </div>
      </section>

      {/* HALL OF FAME */}
      <section className="about-section">
        <div className="about-section-heading">
          <span>05</span>
          <h2>HALL OF FAME</h2>
        </div>

        <div className="hall-of-fame">
          {hallOfFame.map(([event, date], index) => (
            <div
              key={event}
              className={`hall-event ${
                date === "???" ? "hall-event-future" : ""
              }`}
            >
              <div className="hall-marker">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="hall-content">
                <h3>{event}</h3>

                <time>{date}</time>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RESOURCES */}
      <section className="about-section">
        <div className="about-section-heading">
          <span>06</span>
          <h2>RESOURCES</h2>
        </div>

        <div className="resource-grid">
          <div className="resource-card">
            <span>01</span>
            <h3>TMINTERFACE</h3>
            <p>
              The primary tool used for creating and analyzing
              TrackMania TASes.
            </p>
          </div>

          <div className="resource-card">
            <span>02</span>
            <h3>REPLAYS</h3>
            <p>
              Explore recorded TAS replays and their performances.
            </p>
          </div>

          <div className="resource-card">
            <span>03</span>
            <h3>TUTORIALS</h3>
            <p>
              Learn about the techniques and tools used in TrackMania
              TASing.
            </p>
          </div>
        </div>
      </section>

      {/* RULES */}
      <section className="about-section about-section-last">
        <div className="about-section-heading">
          <span>07</span>
          <h2>SITE RULES</h2>
        </div>

        <div className="about-glass-card rules-card">
          <div className="rule">
            <span>01</span>
            <p>
              We take cheating very seriously. Users who intentionally attempt to represent Tool-Assisted runs as legitimate or upload them to sites such as TMX will be immediately banned from this site and have all their records permanently removed.
            </p>
          </div>

          <div className="rule">
            <span>02</span>
            <p>
              Respect everyone and do not attack each other for their opinions. This is not a place for settling personal matters. Impersonating, trolling, harassing, insulting, threatening, doxing, or attacking other users is strictly forbidden.
            </p>
          </div>

          <div className="rule">
            <span>03</span>
            <p>
              All content (including replays) uploaded to this site must be appropriate. It must not contain NSFW, offensive, hateful, intentionally misleading, or illegal content. It must not contain links to inappropriate sites. Never provide personal details or information (phone numbers, addresses, etc.).
            </p>
          </div>

          <div className="rule">
            <span>04</span>
            <p>
              Moderators reserve the right to decide the category of each TAS and whether a sufficient level of contribution qualifies for authorship status. However, if any TAS record contains incorrect or outdated information, we encourage you to report it via the official Discord.
            </p>
          </div>
        </div>
      </section>

    </main>
    </>
  );
}
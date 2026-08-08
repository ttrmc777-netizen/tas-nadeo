"use client";

import Link from "next/link";
import { ReactNode } from "react";
import Image from "next/image";

type Props = {
  children: ReactNode;
};

const links = [
  { href: "/", label: "HOME" },
  { href: "/games", label: "GAMES" },
  { href: "/leaderboard", label: "LEADERBOARD" },
  { href: "/tasers", label: "TASERS" },
  { href: "/highlights", label: "HIGHLIGHTS" },
];

export default function MainLayout({ children }: Props) {
  return (
    <>
      <header className="header">

        <div className="header-inner">

          <div className="navbar-menu-wrapper">

    <button
      className="menu-button"
      aria-label="Open menu"
    >
      ☰
    </button>

    <div className="navbar-dropdown">

      <Link
        href="/about"
        className="dropdown-link"
      >
        <span>01</span>
        ABOUT
      </Link>

      <Link
        href="/inputs"
        className="dropdown-link"
      >
        <span>02</span>
        INPUTS
      </Link>

      <Link
        href="/tasers/search"
        className="dropdown-link"
      >
        <span>03</span>
        SEARCH TASERS
      </Link>

      <Link
        href="/ideas"
        className="dropdown-link"
      >
        <span>04</span>
        IDEA ZONE
      </Link>

    </div>

         </div>

          <Link
            href="/"
            className="header-logo"
          >
            TAS-Nadeo
          </Link>

          <nav className="header-nav">

            {links.map((link) => (

              <Link
                key={link.href}
                href={link.href}
                className="header-link"
              >
                {link.label}
              </Link>

            ))}

          </nav>

          <div className="header-right">

            <button className="login-button">

             <svg
               xmlns="http://www.w3.org/2000/svg"
               width="18"
               height="18"
               viewBox="0 0 24 24"
               fill="currentColor"
               >
               <path d="M12 2a10 10 0 100 20 10 10 0 000-20Zm1.1 5.7v4.2l3.3 2-.8 1.3-4-2.4V7.7h1.5Z"/>
             </svg>

             Login

            </button>

            <button className="discord-button">
             <Image
              src="/images/icons/discord.png"
              alt="Discord"
              width={40}
              height={40}
             />
            </button>

          </div>

        </div>

      </header>

      <main className="page-wrapper">
        {children}
      </main>
    </>
  );
}
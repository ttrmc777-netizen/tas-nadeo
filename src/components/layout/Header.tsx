"use client";

import { useEffect, useState } from "react";
import MainLayout from "./MainLayout";

export default function Header({
  children,
}: {
  children: React.ReactNode;
}) {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 80);

    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <div className={scrolled ? "header-small" : "header-large"}>

      <MainLayout>

        {children}

      </MainLayout>

    </div>

  );

}
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import MobileLinks from "./MobileLinks";
import UserPanel from "./UserPanel";
import MobileUsersPanel from "./MobileUsersPanel";
import { Technology } from "@/app/lib/definitions";

type User = { id: string; name: string; role: string; image: string | null } | null;

export default function Header({ technologies, user }: { technologies: Technology[]; user: User }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="lg:fixed lg:h-screen lg:left-0 lg:top-0 flex top-0 sticky z-1 bg-cyan-900 border-y-8 lg:border-0 lg:border-r-4 border-solid border-emerald-400">
      <div className="w-full m-2.5 flex gap-4 items-center justify-between lg:flex-col lg:justify-start lg:h-full">
        <Link href="/technologies">
          <Image
            src="/code_club_logo.svg"
            width={50}
            height={50}
            className="rounded-full border-solid border-3 border-emerald-600"
            alt="Code club logo"
          />
        </Link>
        <button
          onClick={toggleMenu}
          className="text-3xl md:hidden"
          aria-label="Open menu"
        >
          &#9776;
        </button>
        <NavLinks technologies={technologies} />
        <UserPanel user={user} />
      </div>
      <section
        className={`absolute top-0 bg-gray-950 w-full h-screen overflow-y-auto text-5xl flex-col origin-top
        ${menuOpen ? "flex animate-open-menu" : "hidden"}`}
      >
        <button
          onClick={closeMenu}
          className="text-7xl self-end px-6"
          aria-label="Close menu"
        >
          &times;
        </button>
        <MobileUsersPanel user={user} closeMenu={closeMenu} />
        <MobileLinks closeMenu={closeMenu} technologies={technologies} />
      </section>
    </header>
  );
}
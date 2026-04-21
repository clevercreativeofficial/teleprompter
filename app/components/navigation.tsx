"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "./container";

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home",     href: "/" },
  { label: "Features", href: "/" },
  { label: "Download", href: "/" },
  { label: "Contact",  href: "/" },
];

const LINK_CLASS =
  "text-sm font-medium text-gray-500 hover:text-white transition-colors duration-200";

// ─── Component ────────────────────────────────────────────────────────────────

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10 font-sans backdrop-blur-sm bg-background/90">
      <Container>
        <div className="flex items-center justify-between py-6 border-b border-gray-200/10">
          {/* Logo */}
          <Link href="/">
            <Image src="./logo.svg" alt="PromptRoll Logo" width={180} height={40} />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(({ label, href }) => (
              <Link key={label} href={href} className={LINK_CLASS}>
                {label}
              </Link>
            ))}
            <Link
              href="/"
              className="text-sm font-medium text-background bg-amber-400 px-4 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 py-6 border-b border-gray-200/10">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={LINK_CLASS}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/"
              className="text-sm font-medium text-background bg-amber-400 px-4 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 text-center"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </Container>
    </nav>
  );
}
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "./container";

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home",     href: "/" },
  { label: "Features", href: "/#features" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact",  href: "/#contact" },
];

// ─── Styles ───────────────────────────────────────────────────────────────────

const S = {
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 10,
    fontFamily: "var(--font-sans)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    background: "var(--surface-overlay)",
  },
  inner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1.5rem 0",
    borderBottom: "1px solid var(--border)",
  },
  desktopLinks: {
    display: "flex",
    alignItems: "center",
    gap: "var(--space-6)",
  },
  link: {
    fontSize: "var(--text-sm)",
    fontWeight: 500,
    color: "var(--muted)",
    textDecoration: "none",
    transition: "color var(--ease-default)",
  },
  cta: {
    fontSize: "var(--text-sm)",
    fontWeight: 700,
    color: "var(--amber-foreground)",
    background: "var(--amber)",
    padding: "var(--space-2) var(--space-4)",
    borderRadius: "var(--radius-full)",
    textDecoration: "none",
    transition: "background var(--ease-default), color var(--ease-default)",
  },
  menuButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "var(--muted)",
    padding: "var(--space-1)",
    alignItems: "center",
    justifyContent: "center",
    transition: "color var(--ease-default)",
  },
  mobileMenu: {
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-4)",
    padding: "var(--space-6) 0",
    borderBottom: "1px solid var(--border)",
  },
  mobileCta: {
    textAlign: "center",
  },
} as const;

// ─── Sub-components ───────────────────────────────────────────────────────────

function NavLink({ href, onClick, children } : { href: string; onClick?: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      style={S.link}
      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
    >
      {children}
    </Link>
  );
}

function CTALink({ onClick, style } : { onClick?: () => void; style?: React.CSSProperties }) {
  return (
    <Link
      href="/record"
      onClick={onClick}
      style={{ ...S.cta, ...style }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--surface-3)";
        e.currentTarget.style.color = "var(--foreground)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "var(--amber)";
        e.currentTarget.style.color = "var(--amber-foreground)";
      }}
    >
      Get Started
    </Link>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <nav style={S.nav}>
      <Container>
        <div style={S.inner}>
          {/* Logo */}
          <Link href="/" onClick={close}>
            <Image src="./logo.svg" alt="PromptRoll Logo" width={180} height={40} />
          </Link>

          {/* Desktop links */}
          <div className="desktop-nav" style={S.desktopLinks}>
            {NAV_LINKS.map(({ label, href }) => (
              <NavLink key={label} href={href}>{label}</NavLink>
            ))}
            <CTALink />
          </div>

          {/* Mobile toggle */}
          <button
            className="mobile-toggle"
            style={S.menuButton}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div style={S.mobileMenu}>
            {NAV_LINKS.map(({ label, href }) => (
              <NavLink key={label} href={href} onClick={close}>{label}</NavLink>
            ))}
            <CTALink onClick={close} style={S.mobileCta} />
          </div>
        )}
      </Container>

      {/* Responsive: hide/show desktop vs mobile */}
      <style>{`
        .desktop-nav { display: flex; }
        .mobile-toggle { display: none; }

        @media (max-width: 768px) {
          .desktop-nav { display: none; }
          .mobile-toggle { display: flex; }
        }
      `}</style>
    </nav>
  );
}
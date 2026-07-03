'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  href: string;
  label: string;
  cta?: boolean;
};

const links: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/cv", label: "CV", cta: true }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <nav className="nav-links" aria-label="Main navigation">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                className={`nav-link${link.cta ? " nav-link-cta" : ""}${isActive ? " active" : ""}`}
                href={link.href}
                key={link.href}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

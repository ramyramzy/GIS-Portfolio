import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <nav className="nav-links" aria-label="Main navigation">
          {links.map((link) => (
            <Link className="nav-link" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

import Link from "next/link";
import Image from "next/image";
import { ArrowUpLeft, Mail } from "lucide-react";
import { site } from "@/data/site";

export function HeroSection() {
  const [firstName, ...rest] = site.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <Image
            src="/projects/ramyramzy19.png"
            alt="Personal photo of Ramy Ramzy"
            width={240}
            height={240}
            className="hero-image"
            priority
          />
          <p className="hero-role">{site.role}</p>
        </div>
        <h1>
          <span className="hero-name-first">{firstName}</span>{" "}
          <span className="hero-name-last">{lastName}</span>
        </h1>
        <p>{site.intro}</p>
        <div className="hero-actions">
          <Link className="btn btn-primary" href="#projects" lang="en">
            Browse Projects
            <ArrowUpLeft size={17} aria-hidden="true" />
          </Link>
          <Link className="btn" href="/contact" lang="en">
            <Mail size={17} aria-hidden="true" />
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}

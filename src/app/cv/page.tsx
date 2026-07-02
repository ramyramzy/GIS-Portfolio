import Link from "next/link";
import { Download, Mail } from "lucide-react";
import BadgeList from "@/components/ui/BadgeList";
import { site } from "@/data/site";

export const metadata = {
  title: "CV | Ramy Ramzy"
};

export default function CvPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="container about-grid">
          <div>
            <h1 className="section-title">Curriculum Vitae</h1>
            <p className="about-copy">
              A concise overview of professional experience, core tools, and a link to download the current resume.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={`mailto:${site.email}?subject=CV%20Request`}>
                <Download size={17} aria-hidden="true" />
                Request CV
              </a>
              <Link className="btn" href="/contact">
                <Mail size={17} aria-hidden="true" />
                Contact
              </Link>
            </div>
          </div>
          <aside className="hero-panel">
            <h2>Core Tools</h2>
            <div className="skill-list">
              <BadgeList items={site.skills} />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

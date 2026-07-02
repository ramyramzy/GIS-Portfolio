import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import BadgeList from "@/components/ui/BadgeList";
import ProjectGallery from "@/components/sections/ProjectGallery";
import { getProject, projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: `${project.titleEn} | Ramy Ramzy`,
    description: project.summary
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const Icon = project.icon;

  return (
    <main className="page-shell">
      <section className="project-hero">
        <div className="container">
          <Link className="btn" href="/#projects">
            <ArrowRight size={17} aria-hidden="true" />
            Back to Projects
          </Link>
          <div style={{ marginTop: 26, color: "var(--icon)" }}>
            <Icon size={48} strokeWidth={1.7} aria-hidden="true" />
          </div>
          <span className="section-kicker" style={{ marginTop: 18 }}>
            {project.titleEn}
          </span>
          <h1>{project.titleEn}</h1>
          <p>{project.summary}</p>
          <BadgeList items={project.tags} />
        </div>
      </section>

      <section className="section">
        <div className="container project-detail">
          <span className="section-kicker">Methodology</span>
          <h2>Methodology</h2>
          <div style={{ display: "grid", gap: 12, marginTop: 20 }}>
            {project.steps.map((step, index) => (
              <div className="hero-panel" key={step}>
                <span className="badge">{String(index + 1).padStart(2, "0")}</span>
                <p style={{ margin: "10px 0 0", color: "var(--muted)" }}>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="section-kicker">Image Gallery</span>
          <h2 className="section-title">Image Gallery</h2>
          <ProjectGallery images={project.images} />
        </div>
      </section>
    </main>
  );
}

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

  if (project.comingSoon) {
    return (
      <main className="page-shell">
        <section className="project-hero">
          <div className="container">
            <Link className="btn" href="/#projects">
              <ArrowRight size={17} aria-hidden="true" />
              Back to Projects
            </Link>
            <div className="project-hero-meta">
              <Icon size={48} strokeWidth={1.7} aria-hidden="true" />
            </div>
            <span className="section-kicker section-kicker--hero">
              {project.titleEn}
            </span>
            <h1>Coming soon</h1>
            <p className="project-description project-description--wide">
              This project is being prepared with care and precision. The full presentation will be available shortly, with refined visuals, thoughtful context, and a polished GIS story.
            </p>
            <p className="project-description project-description--small">
              Thank you for your interest. Please revisit this page soon to discover the completed project showcase.
            </p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <section className="project-hero">
        <div className="container">
          <Link className="btn" href="/#projects">
            <ArrowRight size={17} aria-hidden="true" />
            Back to Projects
          </Link>
          <div className="project-hero-meta">
            <Icon size={48} strokeWidth={1.7} aria-hidden="true" />
          </div>
          <span className="section-kicker section-kicker--hero">
            {project.titleEn}
          </span>
          <h1>{project.titleEn}</h1>
          <p className="project-description">{project.summary}</p>
          <BadgeList items={project.tags} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="section-kicker">Image Gallery</span>
          <h2 className="section-title">Image Gallery</h2>
          <ProjectGallery images={project.images} />
        </div>
      </section>

      <section className="section">
        <div className="container project-detail">
          <span className="section-kicker">Methodology</span>
          <h2>Methodology</h2>
          <div className="project-steps">
            {project.steps.map((step, index) => (
              <div className="hero-panel" key={step}>
                <span className="badge">{String(index + 1).padStart(2, "0")}</span>
                <p className="project-step-text">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

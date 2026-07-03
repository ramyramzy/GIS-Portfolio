import { site } from "@/data/site";
import ProjectCard from "@/components/sections/ProjectCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { projects } from "@/data/projects";

export function ContentSections() {
  return (
    <>
      <div className="container about-section about-grid" id="about">
        <div>
          <h2 className="section-title">About Me</h2>
          <p className="about-copy" lang="en">
            I treat maps as decision-making tools, not just visual outputs. My goal is to transform complex spatial data into understandable, organized, and user-friendly results.
          </p>
        </div>
      </div>

      <div className="container services-section" id="services">
        <h2 className="section-title">Services</h2>
        <div className="services-grid">
          {site.services.map((service) => (
            <div key={service.title} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container projects-section" id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects
            .slice()
            .sort((a, b) => (a.comingSoon === b.comingSoon ? 0 : a.comingSoon ? 1 : -1))
            .map((project) => (
              <RevealOnScroll key={project.slug} className="project-card-reveal">
                <ProjectCard project={project} />
              </RevealOnScroll>
            ))}
        </div>
      </div>
    </>
  );
}

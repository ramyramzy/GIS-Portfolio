import Link from "next/link";
import type { Project } from "@/data/projects";
import BadgeList from "@/components/ui/BadgeList";
import { ArrowUpLeft } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  return (
    <Link className="card" href={`/projects/${project.slug}`}>
      <div className="card-content">
        <div className="card-header">
          <div className="card-icon-area">
            <Icon size={24} strokeWidth={1.5} />
          </div>
          <div>
            <h3>{project.titleEn}</h3>
            {project.comingSoon ? <span className="card-status">Coming soon</span> : null}
          </div>
        </div>
        <p className="card-summary">{project.summary}</p>
        <div className="card-footer">
          <BadgeList items={project.tags} />
          <span className="card-cta" lang="en">
            Explore <ArrowUpLeft size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
}

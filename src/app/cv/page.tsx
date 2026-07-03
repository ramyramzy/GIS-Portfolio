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
            
Professional Summary
Web Developer and GIS / Remote Sensing (RS) Analyst. Experienced in combining programming expertise for web development with advanced spatial analysis, extracting geospatial indicators, and utilizing Geographic Artificial Intelligence (Geo-AI) to deliver comprehensive solutions.

Professional Experience

Geospatial Analyst & Developer (Freelance - Gulf Region Projects)

Collaborated with multiple clients across the Gulf region to extract indicators, maps, tables, statistical data, and charts.

Delivered data analysis and mapping solutions within specific sectors: Urban Planning, Agriculture, Environment, and Real Estate.

Utilized Google Earth Engine (GEE) and ArcGIS Pro for geospatial processing, while organizing and reporting data using Excel and Word.

Technical Skills

GIS & Remote Sensing: ArcGIS Pro, Google Earth Engine (GEE), Remote Sensing analysis, Geo-AI, GIS, RS.

Programming & Data Analysis: Python (Libraries: Geopandas, Rasterio, Matplotlib, Folium).

Web Development: Next.js, JavaScript, HTML, CSS.
            </p>
            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href="https://drive.google.com/file/d/1IPZcfAtV9egUzk9TbNvEfTJraAWoC0YR/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
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

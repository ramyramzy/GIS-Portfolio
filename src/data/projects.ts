import type { LucideIcon } from "lucide-react";
import { Layers3, Mountain, Network, PencilRuler, Satellite } from "lucide-react";
import type { ComponentType, SVGProps } from "react";


export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  titleEn: string;
  summary: string;
  icon: LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;
  tags: string[];
  images: ProjectImage[];
  steps: string[];
}

const gdrivePlaceholder =
  "https://lh3.googleusercontent.com/d/1IPZcfAtV9egUzk9TbNvEfTJraAWoC0YR";

export const projects: Project[] = [
  {
    slug: "dem-analysis",
    title: "Digital Elevation Model Analysis",
    titleEn: "DEM Analysis",
    summary: "Analyzing elevation data to extract slope, contour lines, hillshade, and hydrological drainage networks.",
    icon: Mountain,
    tags: ["ArcGIS Pro", "DEM", "Slope", "Hydrology", "Contour Lines", "Aspect", "Hillshade"],
    images: [
      { src: gdrivePlaceholder, alt: "DEM analysis preview" },
      { src: "/projects/dem-analysis-contour.jpg", alt: "Color contour map" }
    ],
    steps: [
      "Prepare the DEM and clip the study area.",
      "Compute slope, aspect and hillshade.",
      "Generate contour lines and drainage networks.",
      "Deliver a polished map for print and presentation."
    ]
  },
  {
    slug: "suitability-analysis",
    title: "Spatial Suitability Analysis",
    titleEn: "Suitability Analysis",
    summary: "Combining spatial criteria using Multi-Criteria Decision Analysis (MCDA) to identify the most suitable locations for development.",
    icon: Layers3,
    tags: ["MCDA", "Weighted Overlay", "Raster", "Reclassify"],
    images: [
      { src: gdrivePlaceholder, alt: "Suitability analysis preview" },
      { src: gdrivePlaceholder, alt: "Weighted overlay preview" }
    ],
    steps: [
      "Select influential criteria and prepare data layers.",
      "Reclassify layers onto a common scale.",
      "Apply relative weights for each criterion.",
      "Design the final suitability map."
    ]
  },
  {
    slug: "remote-sensing-indices",
    title: "Remote Sensing & Indices",
    titleEn: "Remote Sensing & Indices",
    summary: "Processing satellite imagery to extract NDVI, NDWI, and NDBI indices for studying environmental changes.",
    icon: Satellite,
    tags: ["Landsat", "Sentinel", "NDVI", "NDWI", "NDBI", "Image Processing", "Spectral Indices", "Remote Sensing", "Raster Analysis", "Classification"],
    images: [
      { src: gdrivePlaceholder, alt: "Remote sensing preview" },
      { src: gdrivePlaceholder, alt: "Spectral index preview" }
    ],
    steps: [
      "Clean imagery and select suitable scenes.",
      "Fuse bands and enhance visual contrast.",
      "Calculate required spectral indices.",
      "Convert results into comparable maps."
    ]
  },
  {
    slug: "network-analysis",
    title: "Network Analysis",
    titleEn: "Network Analysis",
    summary: "Analyzing road networks, optimal routes, and service areas to support transportation and spatial accessibility decisions.",
    icon: Network,
    tags: ["Routing", "Service Area", "Closest Facility", "Roads", "Utility Network", "Geometric Network"],
    images: [
      { src: gdrivePlaceholder, alt: "Network analysis preview" },
      { src: gdrivePlaceholder, alt: "Route analysis preview" }
    ],
    steps: [
      "Clean the road network and define travel attributes.",
      "Build routing rules and service area layers.",
      "Analyze closest facilities and optimal paths.",
      "Present results in clear static maps."
    ]
  },
  {
    slug: "digitizing",
    title: "Digitizing & Geodatabase Production",
    titleEn: "Digitizing & Geodatabase",
    summary: "Converting paper or raster data into organized vector layers with topology rules and data quality checks.",
    icon: PencilRuler,
    tags: ["Digitizing", "Geodatabase", "Topology", "Editing"],
    images: [
      { src: gdrivePlaceholder, alt: "Digitizing preview" },
      { src: gdrivePlaceholder, alt: "Geodatabase preview" }
    ],
    steps: [
      "Design the geodatabase structure.",
      "Digitize spatial features accurately.",
      "Apply topology rules and review errors.",
      "Deliver organized, ready-to-use layers."
    ]
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

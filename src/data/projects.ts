import type { LucideIcon } from "lucide-react";
import { Landmark, Layers3, Mountain, Network, PencilRuler, Satellite } from "lucide-react";
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
  comingSoon?: boolean;
}

export const projects: Project[] = [
  {
    slug: "dem-analysis",
    title: "Digital Elevation Model Analysis",
    titleEn: "DEM Analysis",
    summary: "Analyzing elevation data to extract slope, contour lines, hillshade, and hydrological drainage networks.",
    icon: Mountain,
    tags: ["ArcGIS Pro", "DEM", "Slope", "Hydrology", "Contour Lines", "Aspect", "Hillshade"],
    images: [
      { src: "/projects/Hillshade.webp", alt: "DEM hillshade map" },
      { src: "/projects/Slope.webp", alt: "DEM slope map" },
      { src: "/projects/Aspect.webp", alt: "DEM aspect analysis" },
      { src: "/projects/contour list.webp", alt: "DEM contour line study" },
      { src: "/projects/couter .webp", alt: "DEM contour line study" },
      { src: "/projects/hydrolgay.webp", alt: "DEM contour line study" },

    ],
    steps: [
      "Prepare the DEM and clip the study area.",
      "Compute slope, aspect and hillshade.",
      "Generate contour lines and drainage networks.",
      "Deliver a polished map for print and presentation."
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
      { src: "/projects/NDVI _Africa.webp", alt: "NDVI remote sensing index" },
      { src: "/projects/torba afc.webp", alt: "NDWI remote sensing index" },
      { src: "/projects/Saad El Nhda.webp", alt: "NDBI temporal analysis 1985" },
      { src: "/projects/asmalya.webp", alt: "NDBI temporal analysis 1985" },
      { src: "/projects/bassten.webp", alt: "NDBI temporal analysis 1985" },
      { src: "/projects/ndvi.webp", alt: "NDBI temporal analysis 2005" },
    ],
    steps: [
      "Clean imagery and select suitable scenes.",
      "Fuse bands and enhance visual contrast.",
      "Calculate required spectral indices.",
      "Convert results into comparable maps."
    ]
  },
  {
    slug: "dar-salam-al-basateen",
    title: "Dar Salam & Al-Basateen",
    titleEn: "Dar Salam & Al-Basateen",
    summary: "Creating a clear spatial presentation of Dar Salam and Al-Basateen to support urban understanding, planning context, and presentation-ready map communication.",
    icon: Landmark,
    tags: ["Urban Mapping", "Spatial Analysis", "Planning", "Cartography", "GIS"],
    images: [
      { src: "/projects/DarElsalam.webp", alt: "Dar Salam planning map" },
      { src: "/projects/bassten.webp", alt: "Al-Basateen spatial analysis" },
      { src: "/projects/NDBI2025.webp", alt: "Dar Salam & Al-Basateen overview" },
      { src: "/projects/ndvi2005.webp", alt: "Dar Salam & Al-Basateen overview" },
      { src: "/projects/ndvi1985.webp", alt: "Dar Salam & Al-Basateen overview" },
      { src: "/projects/ndvi.webp", alt: "Dar Salam & Al-Basateen overview" },
      { src: "/projects/ndvi2025.webp", alt: "Dar Salam & Al-Basateen overview" },
      { src: "/projects/ndvi2005.webp", alt: "Dar Salam & Al-Basateen overview" },
      { src: "/projects/ndvi1985.webp", alt: "Dar Salam & Al-Basateen overview" },

    ],
    steps: [
      "Collect and organize relevant spatial data for the study area.",
      "Prepare a clear base map and define key urban features.",
      "Visualize the area with balanced cartographic styling.",
      "Deliver a polished map suitable for presentation and planning discussions."
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
      { src: "/projects/helwan.webp", alt: "Digitizing vector conversion sample" },
      { src: "/projects/bsat.webp", alt: "Map digitizing and geodatabase work" },
      { src: "/projects/tawza.webp", alt: "Map digitizing and geodatabase work" },
      { src: "/projects/اqlubea.webp", alt: "Map digitizing and geodatabase work" },

    ],
    steps: [
      "Design the geodatabase structure.",
      "Digitize spatial features accurately.",
      "Apply topology rules and review errors.",
      "Deliver organized, ready-to-use layers."
    ]
  },
  {
    slug: "suitability-analysis",
    title: "Spatial Suitability Analysis",
    titleEn: "Suitability Analysis",
    summary: "Combining spatial criteria using Multi-Criteria Decision Analysis (MCDA) to identify the most suitable locations for development.",
    icon: Layers3,
    tags: ["MCDA", "Weighted Overlay", "Raster", "Reclassify"],
    comingSoon: true,
    images: [
      { src: "/projects/saad el nhda.webp", alt: "Suitability map for Saad El Nhda" },
      { src: "/projects/tawza.webp", alt: "Suitable site selection map" },
      { src: "/projects/helwan.webp", alt: "Urban suitability planning map" }
    ],
    steps: [
      "Select influential criteria and prepare data layers.",
      "Reclassify layers onto a common scale.",
      "Apply relative weights for each criterion.",
      "Design the final suitability map."
    ]
  },
  {
    slug: "network-analysis",
    title: "Network Analysis",
    titleEn: "Network Analysis",
    summary: "Analyzing road networks, optimal routes, and service areas to support transportation and spatial accessibility decisions.",
    icon: Network,
    tags: ["Routing", "Service Area", "Closest Facility", "Roads", "Utility Network", "Geometric Network"],
    comingSoon: true,
    images: [
      { src: "/projects/torba afc.webp", alt: "Network analysis road map" },
      { src: "/projects/ramyramzy19.png", alt: "Service area and routing analysis" },
      { src: "/projects/اqlubea.webp", alt: "Network connectivity planning" }
    ],
    steps: [
      "Clean the road network and define travel attributes.",
      "Build routing rules and service area layers.",
      "Analyze closest facilities and optimal paths.",
      "Present results in clear static maps."
    ]
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

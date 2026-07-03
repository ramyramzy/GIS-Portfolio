"use client";

import { useEffect, useState } from "react";
import type { ProjectImage } from "@/data/projects";

const FALLBACK = "/projects/map-placeholder.svg";

export default function StaticProjectImage({
  image,
  priority = false,
  contain = true,
  fallbackSrc
}: {
  image: ProjectImage;
  priority?: boolean;
  contain?: boolean;
  fallbackSrc?: string;
}) {
  const [src, setSrc] = useState(image.src);
  const isExternal = /^https?:\/\//i.test(src);
  const encodedSrc = isExternal ? src : encodeURI(src);

  useEffect(() => {
    setSrc(image.src);
  }, [image.src]);

  const handleError = () => {
    if (fallbackSrc && src !== fallbackSrc) {
      setSrc(fallbackSrc);
      return;
    }

    if (src !== FALLBACK) setSrc(FALLBACK);
  };

  return (
    <img
      src={encodedSrc}
      alt={image.alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      draggable={false}
      onError={handleError}
      className={`project-image ${contain ? "project-image-contain" : "project-image-cover"}`}
    />
  );
}

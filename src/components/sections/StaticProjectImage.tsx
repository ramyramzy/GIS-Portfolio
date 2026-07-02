"use client";

import Image from "next/image";
import type { ProjectImage } from "@/data/projects";

export default function StaticProjectImage({
  image,
  priority = false
}: {
  image: ProjectImage;
  priority?: boolean;
}) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={1200}
      height={750}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      sizes="(max-width: 900px) 100vw, 50vw"
      quality={85}
      draggable={false}
    />
  );
}

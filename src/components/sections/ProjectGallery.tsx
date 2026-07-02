"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { ProjectImage } from "@/data/projects";
import StaticProjectImage from "@/components/sections/StaticProjectImage";

export default function ProjectGallery({ images }: { images: ProjectImage[] }) {
  const [active, setActive] = useState<number | null>(null);
  const activeImage = active === null ? null : images[active];

  useEffect(() => {
    if (active === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null);
      }

      if (event.key === "ArrowRight") {
        setActive((index) => (index === null ? null : (index + 1) % images.length));
      }

      if (event.key === "ArrowLeft") {
        setActive((index) => (index === null ? null : (index - 1 + images.length) % images.length));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [active, images.length]);

  const open = (index: number) => setActive(index);
  const close = () => setActive(null);
  const next = () => setActive((index) => (index === null ? null : (index + 1) % images.length));
  const prev = () =>
    setActive((index) => (index === null ? null : (index - 1 + images.length) % images.length));

  return (
    <>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <button type="button" className="gallery-button" key={`${image.alt}-${index}`} onClick={() => open(index)}>
            <div className="gallery-image">
              <StaticProjectImage image={image} />
            </div>
          </button>
        ))}
      </div>

      {activeImage && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image gallery viewer">
          <div className="lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <div style={{ display: "flex", gap: 8 }}>
                <button type="button" className="icon-button" onClick={prev} aria-label="Previous image">
                  <ChevronLeft size={18} aria-hidden="true" />
                </button>
                <button type="button" className="icon-button" onClick={next} aria-label="Next image">
                  <ChevronRight size={18} aria-hidden="true" />
                </button>
              </div>
              <button type="button" className="icon-button" onClick={close} aria-label="Close gallery">
                <X size={18} aria-hidden="true" />
              </button>
            </div>
            <div className="lightbox-image">
              <StaticProjectImage image={activeImage} priority />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

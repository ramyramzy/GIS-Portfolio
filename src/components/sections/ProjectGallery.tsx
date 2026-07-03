"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { ProjectImage } from "@/data/projects";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import StaticProjectImage from "@/components/sections/StaticProjectImage";

export default function ProjectGallery({ images }: { images: ProjectImage[] }) {
  const [active, setActive] = useState<number | null>(null);
  const galleryImages = images;
  const activeImage = active === null ? null : galleryImages[active];


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
  }, [active, galleryImages.length]);

  const open = (index: number) => setActive(index);
  const close = () => setActive(null);

  const changeActive = (delta: number) =>
    setActive((current) => {
      if (current === null) return null;
      return (current + delta + galleryImages.length) % galleryImages.length;
    });

  const next = () => changeActive(1);
  const prev = () => changeActive(-1);

  return (
    <>
      {/* Show only images that look like maps to avoid non-map assets */}
      <div className="gallery-grid">
        {galleryImages.map((image, index) => {
            return (
              <RevealOnScroll key={`${image.alt}-${index}`}> 
                <button
                  type="button"
                  className="gallery-button"
                  onClick={() => open(index)}
                  aria-label={`Open image ${index + 1} of ${galleryImages.length}`}
                >
                  <div className="gallery-image">
                    <StaticProjectImage image={image} priority={index === 0} />
                  </div>
                </button>
              </RevealOnScroll>
            );
          })}
      </div>

      {activeImage && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image gallery viewer" onClick={close}>
          <div className="lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <div className="lightbox-toolbar">
              <div className="lightbox-actions">
                <button
                  type="button"
                  className="icon-button"
                  onPointerDown={(event) => event.stopPropagation()}
                  onMouseDown={(event) => event.stopPropagation()}
                  onClick={(event) => {
                    event.stopPropagation();
                    prev();
                  }}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={18} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="icon-button"
                  onPointerDown={(event) => event.stopPropagation()}
                  onMouseDown={(event) => event.stopPropagation()}
                  onClick={(event) => {
                    event.stopPropagation();
                    next();
                  }}
                  aria-label="Next image"
                >
                  <ChevronRight size={18} aria-hidden="true" />
                </button>
              </div>
              <button type="button" className="icon-button" onClick={close} aria-label="Close gallery">
                <X size={18} aria-hidden="true" />
              </button>
            </div>
            <div className="lightbox-image">
              <StaticProjectImage image={activeImage} contain />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

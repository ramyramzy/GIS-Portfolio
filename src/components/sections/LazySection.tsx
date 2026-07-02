"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function LazySection({
  id,
  children
}: {
  id?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || ready) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReady(true);
          observer.disconnect();
        }
      },
      { rootMargin: "180px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [ready]);

  return (
    <section className="section" id={id} ref={ref}>
      {ready ? children : <div className="lazy-placeholder" aria-hidden="true" />}
    </section>
  );
}

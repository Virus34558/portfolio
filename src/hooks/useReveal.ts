import { useEffect } from "react";

/**
 * Revelado al entrar en pantalla. Se observa la caja padre de la captura
 * y no el elemento recortado: en Chromium un elemento con `clip-path`
 * recortado cuenta como 0 % visible y el revelado nunca dispararía.
 */
export function useReveal(): void {
  useEffect(() => {
    document.documentElement.classList.add("reveal-ready");

    const targets = document.querySelectorAll(
      "[data-reveal], [data-reveal-group], [data-reveal-host]",
    );

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          entry.target
            .querySelectorAll("[data-clip]")
            .forEach((clip) => clip.classList.add("is-in"));
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

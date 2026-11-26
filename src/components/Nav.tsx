import { useEffect, useState } from "react";
import { useLang } from "../lib/lang";

export function Nav() {
  const { lang, t, setLang } = useLang();
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={stuck ? "nav is-stuck" : "nav"} aria-label={t.nav.label}>
      <span className="nav-mark">unai.sayago</span>
      <a href="#proyectos">{t.nav.projects}</a>
      <a href="#stack">{t.nav.stack}</a>
      <a href="#trayectoria">{t.nav.path}</a>
      <div className="lang" role="group" aria-label={t.nav.langLabel}>
        <button type="button" aria-pressed={lang === "es"} onClick={() => setLang("es")}>
          ES
        </button>
        <button type="button" aria-pressed={lang === "en"} onClick={() => setLang("en")}>
          EN
        </button>
      </div>
    </nav>
  );
}

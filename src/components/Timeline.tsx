import { useLang } from "../lib/lang";

export function Timeline() {
  const { t } = useLang();

  return (
    <section id="trayectoria" aria-labelledby="trayectoria-title">
      <div className="wrap">
        <h2 id="trayectoria-title" className="sec-title" data-reveal>
          {t.path.title}
        </h2>
        <p className="sec-sub" data-reveal>
          {t.path.sub}
        </p>

        <ol className="log" data-reveal-group>
          {t.path.items.map((item) => (
            <li key={`${item.when}-${item.what}`}>
              <span className="when">{item.when}</span>
              <span className="what">{item.what}</span>
              <span className="where">{item.where}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

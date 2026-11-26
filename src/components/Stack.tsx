import { useLang } from "../lib/lang";

export function Stack() {
  const { t } = useLang();

  return (
    <section id="stack" aria-labelledby="stack-title">
      <div className="wrap">
        <h2 id="stack-title" className="sec-title" data-reveal>
          {t.stack.title}
        </h2>
        <p className="sec-sub" data-reveal>
          {t.stack.sub}
        </p>

        <div className="stack" data-reveal-group>
          {t.stack.areas.map((area) => (
            <div key={area.name}>
              <h3>{area.name}</h3>
              <p>{area.tools}</p>
            </div>
          ))}
        </div>

        <p className="note" data-reveal>
          {t.stack.note}
        </p>
      </div>
    </section>
  );
}

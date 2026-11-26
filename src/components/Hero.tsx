import { useLang } from "../lib/lang";
import { links } from "../lib/content";

export function Hero() {
  const { t } = useLang();

  return (
    <header className="hero">
      <div className="wrap">
        <p className="badge rise d1">
          <span className="badge-dot" aria-hidden="true" />
          {t.hero.badge}
        </p>

        <h1 className="rise d2">
          <span className="t1">{t.hero.title1}</span>
          <br />
          {t.hero.title2}
        </h1>

        <p className="lede rise d3">{t.hero.lede}</p>

        <div className="ctas rise d4">
          <a className="btn btn-primary" href={links.demo} target="_blank" rel="noreferrer">
            {t.hero.ctaPrimary}
          </a>
          <a className="btn btn-ghost" href={links.email}>
            {t.hero.ctaSecondary}
          </a>
          <a className="btn btn-ghost" href="/cv-unai-sayago.pdf" download>
            {t.hero.ctaCv}
          </a>
        </div>

        <dl className="ledger rise d5">
          {t.hero.ledger.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
}

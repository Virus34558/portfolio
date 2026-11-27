import { useLang } from "../lib/lang";
import panel from "../assets/helpdesk-panel.png";

export function ShotBand() {
  const { t } = useLang();

  return (
    <div className="shot" data-reveal-host>
      <figure>
        <div className="shot-frame" data-clip>
          <div className="shot-bar">
            <i aria-hidden="true" />
            <i aria-hidden="true" />
            <i aria-hidden="true" />
            <span>{t.shot.url}</span>
          </div>
          <img
            src={panel}
            alt={t.shot.alt}
            width={1901}
            height={965}
            loading="lazy"
            decoding="async"
          />
        </div>
        <figcaption>{t.shot.caption}</figcaption>
      </figure>
    </div>
  );
}

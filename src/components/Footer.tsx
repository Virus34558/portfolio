import { useLang } from "../lib/lang";
import { links } from "../lib/content";

export function Footer() {
  const { t } = useLang();

  return (
    <footer>
      <div className="wrap">
        <p className="sec-sub footer-question" data-reveal>
          {t.footer.question}
        </p>
        <a className="big-mail" data-reveal href={links.email}>
          unai.sayago@gmail.com
        </a>
        <div className="foot-links" data-reveal>
          <a href={links.github} target="_blank" rel="noreferrer">
            github.com/Virus34558
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={links.demo} target="_blank" rel="noreferrer">
            {t.footer.demoLink}
          </a>
        </div>
        <p className="foot-note">{t.footer.note}</p>
      </div>
    </footer>
  );
}

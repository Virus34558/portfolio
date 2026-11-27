import { useLang } from "../lib/lang";

export function Credentials() {
  const { t } = useLang();
  const languages = t.credentials.langs;
  const certificates = t.credentials.certs;

  return (
    <section id="credenciales" aria-labelledby="credenciales-title">
      <div className="wrap">
        <h2 id="credenciales-title" className="sec-title" data-reveal>
          {t.credentials.title}
        </h2>
        <p className="sec-sub" data-reveal>
          {t.credentials.sub}
        </p>

        <div className="creds" data-reveal-group>
          <div>
            <h3>{t.credentials.langsTitle}</h3>
            <ul>
              {languages.map((lang) => (
                <li key={lang.name}>
                  <span>{lang.name}</span>
                  <span className="cred-meta">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>{t.credentials.certsTitle}</h3>
            <ul>
              {certificates.map((cert) => (
                <li key={cert.name}>
                  <span>{cert.name}</span>
                  <span className="cred-meta">
                    {[cert.issuer, cert.year].filter(Boolean).join(" · ")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

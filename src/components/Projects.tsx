import { useLang } from "../lib/lang";
import { projects } from "../lib/content";

export function Projects() {
  const { t } = useLang();

  return (
    <section id="proyectos" aria-labelledby="proyectos-title">
      <div className="wrap">
        <h2 id="proyectos-title" className="sec-title" data-reveal>
          {t.projects.title}
        </h2>
        <p className="sec-sub" data-reveal>
          {t.projects.sub}
        </p>

        <div data-reveal-group>
          {projects.map((project) => {
            const copy = t.projects.items[project.id];
            return (
              <article className="proj" key={project.id}>
                <div className="proj-top">
                  <div>
                    <span className="pcode">
                      {project.code} · {project.category}
                    </span>
                    <h3 className="pname">{copy.name}</h3>
                  </div>
                  <span className="pstatus" data-state={project.state}>
                    <span className="pstatus-dot" aria-hidden="true" />
                    {t.projects.states[project.state]}
                  </span>
                </div>

                <p className="pdesc">{copy.desc}</p>

                <div className="pfoot">
                  <ul className="tech">
                    {copy.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <a href={project.href} target="_blank" rel="noreferrer">
                    {copy.link}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

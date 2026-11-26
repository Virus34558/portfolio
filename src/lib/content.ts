/**
 * Datos fijos de cada proyecto: lo que no cambia con el idioma
 * (código, categoría, enlaces y estado). El texto vive en i18n.ts.
 */

export type ProjectId = "helpdesk" | "masters" | "nasa";
export type ProjectState = "done" | "wip" | "presented";

export interface ProjectMeta {
  id: ProjectId;
  code: string;
  category: string;
  href: string;
  state: ProjectState;
}

export const projects: ProjectMeta[] = [
  {
    id: "helpdesk",
    code: "PRJ-2026-0001",
    category: "API REST",
    href: "https://helpdesk-lite-6x8a.onrender.com",
    state: "done",
  },
  {
    id: "masters",
    code: "PRJ-2025-0004",
    category: "Android",
    href: "https://github.com/Virus34558/MASTERS3",
    state: "wip",
  },
  {
    id: "nasa",
    code: "PRJ-2026-0002",
    category: "Hackathon",
    href: "https://apsis.solvrak.com/app/",
    state: "presented",
  },
];

export const links = {
  email: "mailto:unai.sayago@gmail.com",
  github: "https://github.com/Virus34558",
  linkedin: "https://www.linkedin.com/in/unai-sayago-sanz-199285248/",
  demo: "https://helpdesk-lite-6x8a.onrender.com",
} as const;

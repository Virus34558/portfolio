/**
 * Todo el texto de la web, en los dos idiomas.
 * `Dict` se deduce de la versión española y `en` está tipado con él:
 * si a una traducción le falta una clave o le sobra, TypeScript falla
 * al compilar en vez de dejar un hueco vacío en la página.
 */

export type Lang = "es" | "en";

const es = {
  meta: {
    title: "Unai Sayago — Desarrollador de software",
    description:
      "Desarrollador de software junior en Zaragoza. Backend con Python y FastAPI, Android con Kotlin e IA aplicada. Proyectos desplegados y verificables.",
  },
  nav: {
    label: "Navegación principal",
    skip: "Saltar al contenido",
    projects: "Proyectos",
    stack: "Stack",
    path: "Trayectoria",
    langLabel: "Cambiar idioma",
  },
  hero: {
    badge: "Disponible desde ya · Zaragoza",
    title1: "Software que",
    title2: "se puede probar",
    lede: "Desarrollador junior en Zaragoza. Backend con Python y FastAPI, una app Android en Kotlin y un hackathon de la NASA. Nada de adjetivos: aquí están las pruebas.",
    ctaPrimary: "Abrir la demo",
    ctaSecondary: "Escríbeme",
    ctaCv: "Descargar CV",
    ledger: [
      { value: "3", label: "proyectos" },
      { value: "2", label: "cerrados" },
      { value: "175", label: "tests" },
      { value: "3.796", label: "líneas" },
      { value: "1", label: "demo pública" },
    ],
  },
  shot: {
    url: "helpdesk-lite-6x8a.onrender.com",
    alt: "Panel de HelpDesk Lite: formulario de nueva incidencia y listado con prioridades y estados",
    caption: "HelpDesk Lite · panel de incidencias en producción",
  },
  projects: {
    title: "Tres proyectos. Dos cerrados y funcionando.",
    sub: "Cada uno con su código, su estado real y un enlace para comprobarlo sin creerme nada.",
    items: {
      helpdesk: {
        name: "HelpDesk Lite",
        desc: "Sistema de gestión de incidencias IT con cuatro roles y JWT, prioridad calculada por matriz ITIL, SLAs con calendario laboral y «stop the clock», motor de reglas y auditoría inmutable.",
        link: "Abrir la demo",
        tags: ["FastAPI", "SQLAlchemy", "PostgreSQL", "Alembic", "Docker"],
      },
      masters: {
        name: "MASTERS 3",
        desc: "Simulador de liga de fútbol: alta de equipos y plantillas, calendario, clasificación, playoffs y estadísticas de temporada. Seis pantallas en Jetpack Compose con Material 3.",
        link: "Ver el repositorio",
        tags: ["Kotlin", "Compose", "Material 3", "Gradle"],
      },
      nasa: {
        name: "Apsis",
        desc: "Proyecto del NASA Space Apps Challenge 2026: videojuego de simulación de misiones espaciales con gestión de masa, energía, presupuesto y comunicaciones, decisiones encadenadas e informe final de misión. Cuatro personas, 48 horas.",
        link: "Ver el proyecto",
        tags: ["Diseño", "Simulación", "Equipo de 4"],
      },
    },
    states: {
      done: "en producción",
      wip: "en desarrollo",
      presented: "presentado",
    },
  },
  stack: {
    title: "Con qué trabajo",
    sub: "Lo que uso de verdad, separado de lo que solo he estudiado.",
    areas: [
      { name: "Backend", tools: "Python · FastAPI · SQLAlchemy · Java · SQL" },
      { name: "Datos", tools: "PostgreSQL · Alembic · Firestore" },
      { name: "Entorno", tools: "Docker · Git · GitHub Actions · Linux" },
      { name: "Interfaz", tools: "TypeScript · React · HTML · CSS" },
      { name: "Sistemas", tools: "Windows · Linux · TCP/IP · DNS · DHCP" },
      { name: "IA aplicada", tools: "Claude Code · agentes · desarrollo asistido" },
    ],
    note: "Cloud (AWS, Google Cloud, Azure, máquinas virtuales y contenedores): formación inicial, no experiencia profesional.",
  },
  path: {
    title: "Trayectoria",
    sub: "Formación y trabajos, en orden.",
    items: [
      {
        when: "2023 — 2026",
        what: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma · Ilerna",
        where: "Zaragoza",
      },
      {
        when: "mar — may 2026",
        what: "Desarrollador de Aplicaciones Multiplataforma · IDEA Consulting",
        where: "Zaragoza",
      },
      { when: "may — jun 2025", what: "Técnico de Sistemas · ZLC", where: "Zaragoza" },
      { when: "2024 — 2025", what: "Teleoperador · Teleperformance", where: "Zaragoza" },
      {
        when: "2021 — 2023",
        what: "Grado Medio en Sistemas Microinformáticos y Redes · IES Pablo Serrano",
        where: "Zaragoza",
      },
    ],
  },
  footer: {
    question: "¿Buscas un junior que ya haya desplegado algo?",
    demoLink: "Demo HelpDesk Lite",
    note: "Unai Sayago · Zaragoza · 2026",
  },
};

export type Dict = typeof es;

const en: Dict = {
  meta: {
    title: "Unai Sayago — Software developer",
    description:
      "Junior software developer in Zaragoza, Spain. Backend with Python and FastAPI, Android with Kotlin, applied AI. Deployed, verifiable projects.",
  },
  nav: {
    label: "Main navigation",
    skip: "Skip to content",
    projects: "Projects",
    stack: "Stack",
    path: "Path",
    langLabel: "Change language",
  },
  hero: {
    badge: "Available now · Zaragoza, Spain",
    title1: "Software you",
    title2: "can actually test",
    lede: "Junior developer in Zaragoza. Backend with Python and FastAPI, an Android app in Kotlin and a NASA hackathon. No adjectives: here is the evidence.",
    ctaPrimary: "Open the live demo",
    ctaSecondary: "Email me",
    ctaCv: "Download CV",
    ledger: [
      { value: "3", label: "projects" },
      { value: "2", label: "shipped" },
      { value: "175", label: "tests" },
      { value: "3,796", label: "lines" },
      { value: "1", label: "live demo" },
    ],
  },
  shot: {
    url: "helpdesk-lite-6x8a.onrender.com",
    alt: "HelpDesk Lite dashboard: new ticket form and ticket list with priorities and states",
    caption: "HelpDesk Lite · incident dashboard in production",
  },
  projects: {
    title: "Three projects. Two of them shipped and running.",
    sub: "Each one with its code, its real state and a link to check it without taking my word for it.",
    items: {
      helpdesk: {
        name: "HelpDesk Lite",
        desc: "IT incident management system with four roles and JWT, priority calculated from an ITIL matrix, SLAs with a business calendar and stop-the-clock, a rules engine and an immutable audit trail.",
        link: "Open the live demo",
        tags: ["FastAPI", "SQLAlchemy", "PostgreSQL", "Alembic", "Docker"],
      },
      masters: {
        name: "MASTERS 3",
        desc: "Football league simulator: squads and line-ups, fixture calendar, standings, play-offs and season statistics. Six screens in Jetpack Compose with Material 3.",
        link: "View the repository",
        tags: ["Kotlin", "Compose", "Material 3", "Gradle"],
      },
      nasa: {
        name: "Apsis",
        desc: "Built for the 2026 NASA Space Apps Challenge: a space mission simulation game covering mass, energy, budget and communications, with chained decisions and a final mission report. Four people, 48 hours.",
        link: "View the project",
        tags: ["Design", "Simulation", "Team of 4"],
      },
    },
    states: {
      done: "in production",
      wip: "in development",
      presented: "submitted",
    },
  },
  stack: {
    title: "What I work with",
    sub: "What I actually use, kept apart from what I have only studied.",
    areas: [
      { name: "Backend", tools: "Python · FastAPI · SQLAlchemy · Java · SQL" },
      { name: "Data", tools: "PostgreSQL · Alembic · Firestore" },
      { name: "Tooling", tools: "Docker · Git · GitHub Actions · Linux" },
      { name: "Interface", tools: "TypeScript · React · HTML · CSS" },
      { name: "Systems", tools: "Windows · Linux · TCP/IP · DNS · DHCP" },
      { name: "Applied AI", tools: "Claude Code · agents · AI-assisted development" },
    ],
    note: "Cloud (AWS, Google Cloud, Azure, virtual machines and containers): introductory training, not professional experience.",
  },
  path: {
    title: "Path",
    sub: "Education and jobs, in order.",
    items: [
      {
        when: "2023 — 2026",
        what: "Higher National Diploma in Multiplatform Application Development · Ilerna",
        where: "Zaragoza",
      },
      {
        when: "Mar — May 2026",
        what: "Multiplatform Application Developer · IDEA Consulting",
        where: "Zaragoza",
      },
      { when: "May — Jun 2025", what: "Systems Technician · ZLC", where: "Zaragoza" },
      { when: "2024 — 2025", what: "Customer Service Agent · Teleperformance", where: "Zaragoza" },
      {
        when: "2021 — 2023",
        what: "Vocational Diploma in Microcomputer Systems and Networks · IES Pablo Serrano",
        where: "Zaragoza",
      },
    ],
  },
  footer: {
    question: "Looking for a junior who has already shipped something?",
    demoLink: "HelpDesk Lite demo",
    note: "Unai Sayago · Zaragoza · 2026",
  },
};

export const dict: Record<Lang, Dict> = { es, en };

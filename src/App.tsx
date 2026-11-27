import { LangProvider, useLang } from "./lib/lang";
import { useReveal } from "./hooks/useReveal";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { ShotBand } from "./components/ShotBand";
import { Projects } from "./components/Projects";
import { Stack } from "./components/Stack";
import { Timeline } from "./components/Timeline";
import { Credentials } from "./components/Credentials";
import { Footer } from "./components/Footer";

function Page() {
  const { t } = useLang();
  useReveal();

  return (
    <>
      <a className="skip" href="#contenido">
        {t.nav.skip}
      </a>
      <Nav />
      <main id="contenido">
        <Hero />
        <ShotBand />
        <Projects />
        <Stack />
        <Timeline />
        <Credentials />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LangProvider>
      <Page />
    </LangProvider>
  );
}

import AboutMe from "../AboutMe/AboutMe";
import AboutMeSecond from "../AboutMeSecond/AboutMeSecond";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <AboutMe />
        <AboutMeSecond />
        <Skills />
        <Projects />
      </main>
    </>
  );
}

import AboutMe from "../AboutMe/AboutMe";
import AboutMeSecond from "../AboutMeSecond/AboutMeSecond";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Footer from "../Footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <AboutMe />
        <AboutMeSecond />
        <Skills />
        <Projects />
        <Education />
        <Footer />
      </main>
    </>
  );
}

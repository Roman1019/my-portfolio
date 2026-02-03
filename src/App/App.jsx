import AboutMe from "../AboutMe/AboutMe";
import AboutMeSecond from "../AboutMeSecond/AboutMeSecond";
import Header from "../Header/Header";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <AboutMe />
        <AboutMeSecond />
      </main>
    </>
  );
}

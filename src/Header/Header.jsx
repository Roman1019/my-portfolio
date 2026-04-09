import css from "./Header.module.css";
import { HiOutlineBars3 } from "react-icons/hi2";

export default function Header() {
  return (
    <section className={css.sectionHeader}>
      <header className={css.header}>
        <div className={css.container}>
          <nav className={css.navlist}>
            <div>
              <a href="./">R.R.</a>
            </div>
            <div className={css.navmenu}>
              <ul className={css.navlistul}>
                <li>
                  <a className={css.navitem} href="#about">
                    About Me
                  </a>
                </li>
                <li>
                  <a className={css.navitem} href="#skills">
                    Skills
                  </a>
                </li>
                <li>
                  <a className={css.navitem} href="#projects">
                    Projects
                  </a>
                </li>
                <li>
                  <a className={css.navitem} href="#education">
                    Education
                  </a>
                </li>
              </ul>
            </div>
            <button className={css.burger}>
              <HiOutlineBars3 />
            </button>
          </nav>
        </div>
      </header>
    </section>
  );
}

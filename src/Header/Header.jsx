import css from "./Header.module.css";
import clsx from "clsx";
import { useState } from "react";

// const getLinkStyle = ({ isActive }) => {
//   return clsx(css.navitem, isActive && css.active);
// };

export default function Header() {
  const [active, setActive] = useState("about");

  const linkClass = (name) => clsx(css.navitem, active === name && css.active);
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
                  <a
                    href="#about"
                    className={linkClass("about")}
                    onClick={() => setActive("about")}
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className={linkClass("skills")}
                    onClick={() => setActive("skills")}
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a className={css.navitem} href="">
                    Projects
                  </a>
                </li>
                <li>
                  <a className={css.navitem} href="">
                    Education
                  </a>
                </li>
                <li>
                  <a className={css.navitem} href="">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </section>
  );
}

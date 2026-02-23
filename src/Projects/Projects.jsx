import css from "./Projects.module.css";
import { MdArrowOutward } from "react-icons/md";

export default function Projects() {
  return (
    <section>
      <div className={css.container}>
        <h2 className={css.sectionTitle}>Projects</h2>
        <ul className={css.projectsList}>
          <li className={css.projectItem}>
            <a
              className={css.projectLink}
              href="https://roman1019.github.io/hw-01-tutorial/"
            >
              <img
                className={css.projectsImg}
                src="../../assets/photo/simplyChocolate.webp"
                alt="SimplyChocolate"
              />
            </a>
            <div className={css.projectContent}>
              <a
                className={css.projectText}
                href="https://roman1019.github.io/hw-01-tutorial/"
              >
                Simply Chocolate <MdArrowOutward size={15} />
              </a>
              <p className={css.projectDescription}>
                This was my first mini-project, implemented using HTML and CSS
                on my own, without the participation of a team, to improve my
                skills.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

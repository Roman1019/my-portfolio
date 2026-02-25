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
                Simply Chocolate{" "}
                <MdArrowOutward className={css.projectArrow} size={25} />
              </a>
              <p className={css.projectDescription}>
                This was my first mini-project, implemented using HTML and CSS
                on my own, without the participation of a team, to improve my
                skills.
              </p>
              <ul className={css.slillsList}>
                <li className={css.slillsItem}>HTML</li>
                <li className={css.slillsItem}>CSS</li>
              </ul>
            </div>
          </li>

          <li className={css.projectItem}>
            <a
              className={css.projectLink}
              href="https://roman1019.github.io/goit-markup-hw-06-01/"
            >
              <img
                className={css.projectsImg}
                src="../../assets/photo/business.webp"
                alt="Website Effective solutions for Your Business"
              />
            </a>
            <div className={css.projectContent}>
              <a
                className={css.projectText}
                href="https://roman1019.github.io/goit-markup-hw-06-01/"
              >
                Effective solutions for Your Business{" "}
                <MdArrowOutward className={css.projectArrow} size={25} />
              </a>
              <p className={css.projectDescription}>
                My first experience writing HTML + CSS code, this mini-project
                was implemented independently without the participation of a
                team
              </p>
              <ul className={css.slillsList}>
                <li className={css.slillsItem}>HTML</li>
                <li className={css.slillsItem}>CSS</li>
              </ul>
            </div>
          </li>
          <li className={css.projectItem}>
            <a
              className={css.projectLink}
              href="https://domitrii.github.io/project-group-6/"
            >
              <img
                className={css.projectsImg}
                src="../../assets/photo/photography.webp"
                alt="Photography School"
              />
            </a>
            <div className={css.projectContent}>
              <a
                className={css.projectText}
                href="https://roman1019.github.io/hw-01-tutorial/"
              >
                School of photographers{" "}
                <MdArrowOutward className={css.projectArrow} size={25} />
              </a>
              <p className={css.projectDescription}>
                The first team project, created using HTML, CSS, Vite and some
                JS functions. The site was created as part of training, for a
                photography school to attract new students. In this project, I
                developed the "Reviews" section by implementing the basic layout
                using HTML and CSS.
              </p>
              <ul className={css.slillsList}>
                <li className={css.slillsItem}>HTML</li>
                <li className={css.slillsItem}>CSS</li>
              </ul>
            </div>
          </li>
          <li className={css.projectItem}>
            <a
              className={css.projectLink}
              href="https://yuliiasheremeta.github.io/team-portfolio-project/"
            >
              <img
                className={css.projectsImg}
                src="../../assets/photo/PortfolioLLoyd.webp"
                alt="Portfolio LLoyd Jefferson"
              />
            </a>
            <div className={css.projectContent}>
              <a
                className={css.projectText}
                href="https://yuliiasheremeta.github.io/team-portfolio-project/"
              >
                Portfolio LLoyd Jefferson{" "}
                <MdArrowOutward className={css.projectArrow} size={25} />
              </a>
              <p className={css.projectDescription}>
                The second team project, created using HTML, CSS, JS and Vite.
                Also used the swipper and accordeon libraries. In this project,
                I developed the "About Me" section using HTML, CSS, and
                JavaScript, along with the Accordion and Swiper libraries.
              </p>
              <ul className={css.slillsList}>
                <li className={css.slillsItem}>HTML</li>
                <li className={css.slillsItem}>CSS</li>
              </ul>
            </div>
          </li>

          <li className={css.projectItem}>
            <a
              className={css.projectLink}
              href="https://domitrii.github.io/project-group-6/"
            >
              <img
                className={css.projectsImg}
                src="../../assets/photo/photography.webp"
                alt="Photography School"
              />
            </a>
            <div className={css.projectContent}>
              <a
                className={css.projectText}
                href="https://roman1019.github.io/hw-01-tutorial/"
              >
                School of photographers{" "}
                <MdArrowOutward className={css.projectArrow} size={25} />
              </a>
              <p className={css.projectDescription}>
                The first team project, created using HTML, CSS, Vite and some
                JS functions. The site was created as part of training, for a
                photography school to attract new students. In this project, I
                developed the "Reviews" section by implementing the basic layout
                using HTML and CSS.
              </p>
              <ul className={css.slillsList}>
                <li className={css.slillsItem}>HTML</li>
                <li className={css.slillsItem}>CSS</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

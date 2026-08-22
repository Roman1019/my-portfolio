import Line from "../Line/Line";
import css from "./Projects.module.css";
import { MdArrowOutward } from "react-icons/md";
import SimplyChocolate from "../../assets/photo/simplyChocolate.webp";
import EffectiveSolutions from "../../assets/photo/business.webp";
import PhotographySchool from "../../assets/photo/photography.webp";
import PortfolioLLoyd from "../../assets/photo/PortfolioLLoyd.webp";
import Tasteorama from "../../assets/photo/Tasteorama.webp";
import Phonebook from "../../assets/photo/contactApp.webp";
import CodeStore from "../../assets/photo/codeStore.webp";

export default function Projects() {
  return (
    <section id="projects">
      <div className={css.container}>
        <div className={css.generalDiv}>
          {" "}
          <h2 className={css.sectionTitle}>Projects</h2>
          <ul className={css.projectsList}>
            <li className={css.projectItem}>
              <a
                className={css.projectLink}
                href="https://roman1019.github.io/hw-01-tutorial/"
                target="_blank"
              >
                <img
                  className={css.projectsImg}
                  src={SimplyChocolate}
                  alt="SimplyChocolate Photo"
                />
              </a>
              <div className={css.projectContent}>
                <a
                  className={css.projectText}
                  href="https://roman1019.github.io/hw-01-tutorial/"
                  target="_blank"
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
                target="_blank"
              >
                <img
                  className={css.projectsImg}
                  src={EffectiveSolutions}
                  alt="Website Effective solutions for Your Business"
                />
              </a>
              <div className={css.projectContent}>
                <a
                  className={css.projectText}
                  href="https://roman1019.github.io/goit-markup-hw-06-01/"
                  target="_blank"
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
                target="_blank"
              >
                <img
                  className={css.projectsImg}
                  src={PhotographySchool}
                  alt="Photography School"
                />
              </a>
              <div className={css.projectContent}>
                <a
                  className={css.projectText}
                  href="https://domitrii.github.io/project-group-6/"
                  target="_blank"
                >
                  School of photographers{" "}
                  <MdArrowOutward className={css.projectArrow} size={25} />
                </a>
                <p className={css.projectDescription}>
                  The first team project, created using HTML, CSS, Vite and some
                  JS functions. The site was created as part of training, for a
                  photography school to attract new students. In this project, I
                  developed the "Reviews" section by implementing the basic
                  layout using HTML and CSS.
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
                target="_blank"
              >
                <img
                  className={css.projectsImg}
                  src={PortfolioLLoyd}
                  alt="Portfolio LLoyd Jefferson"
                />
              </a>
              <div className={css.projectContent}>
                <a
                  className={css.projectText}
                  href="https://yuliiasheremeta.github.io/team-portfolio-project/"
                  target="_blank"
                >
                  Portfolio LLoyd Jefferson{" "}
                  <MdArrowOutward className={css.projectArrow} size={25} />
                </a>
                <p className={css.projectDescription}>
                  The second team project, created using HTML, CSS, JS and Vite.
                  Also used the swipper and accordeon libraries. In this
                  project, I developed the "About Me" section using HTML, CSS,
                  and JavaScript, along with the Accordion and Swiper libraries.
                </p>
                <ul className={css.slillsList}>
                  <li className={css.slillsItem}>HTML</li>
                  <li className={css.slillsItem}>CSS</li>
                  <li className={css.slillsItem}>JavaScript</li>
                </ul>
              </div>
            </li>
            <li className={css.projectItem}>
              <a
                className={css.projectLink}
                href="https://goit-react-hw-08-zeta-virid.vercel.app/"
                target="_blank"
              >
                <img
                  className={css.projectsImg}
                  src={Phonebook}
                  alt="Phonebook photo"
                />
              </a>
              <div className={css.projectContent}>
                <a
                  className={css.projectText}
                  href="https://goit-react-hw-08-zeta-virid.vercel.app/"
                  target="_blank"
                >
                  Contacts App{" "}
                  <MdArrowOutward className={css.projectArrow} size={25} />
                </a>
                <p className={css.projectDescription}>
                  Implemented application with registration, LogIn, LogOut
                  capabilities. In the Contacts tab, you can add and delete
                  users, and search filtering by name is also implemented
                </p>
                <ul className={css.slillsList}>
                  <li className={css.slillsItem}>HTML</li>
                  <li className={css.slillsItem}>CSS</li>
                  <li className={css.slillsItem}>React</li>
                </ul>
              </div>
            </li>

            <li className={css.projectItem}>
              <a
                className={css.projectLink}
                href="https://front-end-repo-eosin.vercel.app/"
                target="_blank"
              >
                <img
                  className={css.projectsImg}
                  src={Tasteorama}
                  alt="Tasteorama recipe application interface"
                />
              </a>
              <div className={css.projectContent}>
                <a
                  className={css.projectText}
                  href="https://front-end-repo-eosin.vercel.app/"
                  target="_blank"
                >
                  Tasteorama — Recipe & Food Explorer{" "}
                  <MdArrowOutward className={css.projectArrow} size={25} />
                </a>
                <p className={css.projectDescription}>
                  This is a full-stack final project where both the frontend and
                  backend were developed. The frontend was built with React,
                  while the backend was implemented using Node.js. The
                  application allows users to browse, add, and delete recipes.
                  It also includes user authentication features such as
                  registration, login, and logout.
                </p>
                <ul className={css.slillsList}>
                  <li className={css.slillsItem}>HTML</li>
                  <li className={css.slillsItem}>CSS</li>
                  <li className={css.slillsItem}>React</li>
                  <li className={css.slillsItem}>Node.js</li>
                </ul>
              </div>
            </li>
            <li className={css.projectItem}>
              <a
                className={css.projectLink}
                href="https://roman1019.github.io/Documentation-IA/"
                target="_blank"
              >
                <img
                  className={css.projectsImg}
                  src={CodeStore}
                  alt="Phonebook photo"
                />
              </a>
              <div className={css.projectContent}>
                <a
                  className={css.projectText}
                  href="https://roman1019.github.io/Documentation-IA/"
                  target="_blank"
                >
                  Rétro-documentation IA
                  <MdArrowOutward className={css.projectArrow} size={25} />
                </a>
                <p className={css.projectDescription}>
                  I also independently developed an additional web project for
                  practice using HTML and CSS, with some JavaScript
                  functionality. I created the project from scratch to improve
                  my frontend development skills, practice responsive design,
                  and strengthen my understanding of JavaScript and website
                  structure.
                </p>
                <ul className={css.slillsList}>
                  <li className={css.slillsItem}>HTML</li>
                  <li className={css.slillsItem}>CSS</li>
                  <li className={css.slillsItem}>JS</li>
                </ul>
              </div>
            </li>
            <li className={css.projectItem}>
              <a
                className={css.projectLink}
                href="code-store-website.webflow.io"
                target="_blank"
              >
                <img
                  className={css.projectsImg}
                  src={CodeStore}
                  alt="Phonebook photo"
                />
              </a>
              <div className={css.projectContent}>
                <a
                  className={css.projectText}
                  href="code-store-website.webflow.io"
                  target="_blank"
                >
                  Rétro-documentation IA
                  <MdArrowOutward className={css.projectArrow} size={25} />
                </a>
                <p className={css.projectDescription}>
                  I also independently recreated a similar web project in
                  Webflow for additional practice. I built and customized the
                  website using Webflow, working with layouts, responsive
                  design, styles, interactions, and website structure. This
                  project helped me improve my practical Webflow skills and
                  better understand how to create modern, responsive websites
                  without writing all the code manually.
                </p>
                <ul className={css.slillsList}>
                  <li className={css.slillsItem}>HTML</li>
                  <li className={css.slillsItem}>CSS</li>
                  <li className={css.slillsItem}>JS</li>
                  <li className={css.slillsItem}>WebFlow</li>
                </ul>
              </div>
            </li>
          </ul>
          <Line />
        </div>
      </div>
    </section>
  );
}

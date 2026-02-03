import css from "./AboutMe.module.css";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
export default function AboutMe() {
  // const developer = {
  //   name: "Roman Romaniv",
  //   role: "Full Stack Developer",
  //   skills: {
  //     frontend: [
  //       "HTML",
  //       "CSS",
  //       "JavaScript",
  //       "React",
  //       "Redux Toolkit",
  //       "TypeScript",
  //     ],
  //     backend: ["Node.js", "Express", "MongoDB"],
  //     tools: ["Git", "Vite", "REST API"],
  //   },

  //   hardWorker: true,
  //   problemSolver: true,
  //   quickLeaner: true,

  //   hireable: function () {
  //     const totalSkills =
  //       this.skills.frontend.length +
  //       this.skills.backend.length +
  //       this.skills.tools.length;

  //     return this.hardWorker && this.problemSolver && totalSkills >= 6;
  //   },
  // };

  return (
    <section>
      <div className={css.container}>
        <div className={css.headandicons}>
          <h1 className={css.generalhead}>
            Hi, I`m - <span className={css.generalheadspan}>Roman Romaniv</span>
            <span className={css.generalheadpro}>Full Stack Developer</span>who
            likes to create new websites.
          </h1>
          <ul className={css.iconlist}>
            <li>
              <a
                className={css.iconitem}
                href="https://www.linkedin.com/in/romaniv-roman-fullstack-developer/?locale=uk_UA"
              >
                <FaLinkedin size={22} />
              </a>
            </li>
            <li>
              <a className={css.iconitem} href="https://github.com/Roman1019">
                <FaGithub size={22} />
              </a>
            </li>
            <li>
              <a className={css.iconitem} href="https://t.me/Roman_075">
                <FaFacebook size={22} />
              </a>
            </li>
            <li>
              <a className={css.iconitem} href="">
                <MdAlternateEmail size={22} />
              </a>
            </li>
            <li>
              <a className={css.iconitem} href="">
                <BsTelephone size={22} />
              </a>
            </li>
          </ul>
        </div>
        <div className={css.codeblock}>
          <div className={css.codeline}>
            <span className={css.keyword}>const</span>
            <span className={css.variable}>developer</span>
            <span className={css.operator}>=</span>
            <span>{"{"}</span>
          </div>

          <div className={`${css.codeline} ${css.indent1}`}>
            <span className={css.key}>name</span>
            <span>:</span>
            <span className={css.string}>"Roman Romaniv"</span>,
          </div>

          <div className={`${css.codeline} ${css.indent1}`}>
            <span className={css.key}>role</span>
            <span>:</span>
            <span className={css.string}>"Full Stack Developer"</span>,
          </div>

          <div className={`${css.codeline} ${css.indent1}`}>
            <span className={css.key}>skills</span>
            <span>:</span>
            <span>{"["}</span>
          </div>

          <div className={`${css.codeline} ${css.indent2}`}>
            <span className={css.string}>"HTML"</span>,
            <span className={css.string}>"CSS"</span>,
            <span className={css.string}>"JavaScript"</span>,
          </div>

          <div className={`${css.codeline} ${css.indent2}`}>
            <span className={css.string}>"React"</span>,
            <span className={css.string}>"Redux Toolkit"</span>,
            <span className={css.string}>"TypeScript"</span>,
          </div>

          <div className={`${css.codeline} ${css.indent2}`}>
            <span className={css.string}>"Node.js"</span>,
            <span className={css.string}>"Express"</span>,
            <span className={css.string}>"MongoDB"</span>
          </div>

          <div className={`${css.codeline} ${css.indent1}`}>
            <span>{"]"}</span>,
          </div>

          <div className={`${css.codeline} ${css.indent1}`}>
            <span className={css.key}>hardWorker</span>
            <span>:</span>
            <span className={css.boolean}>true</span>,
          </div>

          <div className={`${css.codeline} ${css.indent1}`}>
            <span className={css.key}>quickLearner</span>
            <span>:</span>
            <span className={css.boolean}>true</span>,
          </div>

          <div className={`${css.codeline} ${css.indent1}`}>
            <span className={css.key}>problemSolver</span>
            <span>:</span>
            <span className={css.boolean}>true</span>,
          </div>

          <div className={`${css.codeline} ${css.indent1}`}>
            <span className={css.key}>hireable</span>
            <span>:</span>
            <span className={css.keyword}>function</span>
            <span>{"()"}</span>
            <span>{" {"}</span>
          </div>

          <div className={`${css.codeline} ${css.indent2}`}>
            <span className={css.keyword}>return</span>
            <span>{"("}</span>
          </div>

          <div className={`${css.codeline} ${css.indent3}`}>
            <span className={css.variable}>this.hardWorker</span>
            <span>&&</span>
          </div>

          <div className={`${css.codeline} ${css.indent3}`}>
            <span className={css.variable}>this.problemSolver</span>
            <span>&&</span>
          </div>

          <div className={`${css.codeline} ${css.indent3}`}>
            <span className={css.variable}>this.skills.length</span>
            <span>&gt;=</span>
            <span className={css.number}>5</span>
          </div>

          <div className={`${css.codeline} ${css.indent2}`}>
            <span>{");"}</span>
          </div>

          <div className={`${css.codeline} ${css.indent1}`}>
            <span>{"}"}</span>,
          </div>

          <div className={css.codeline}>
            <span>{"};"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

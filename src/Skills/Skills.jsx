import css from "./Skills.module.css";
import Marquee from "react-fast-marquee";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import Line from "../Line/Line";

export default function Header() {
  return (
    <section className={css.sectionHeader}>
      <div className={css.container}>
        <div className={css.generalDiv}>
          <h2 className={css.sectionTitle}>Skills</h2>
          <Marquee pauseOnHover={true} speed={30}>
            <ul className={css.skillsList}>
              <li className={css.skillsItem}>
                <div className={css.skillsItemDiv}>
                  <div
                    className={`${css.iconSlillsBaze} ${css.iconSkillsHtml}`}
                  >
                    <FaHtml5 size={40} />
                  </div>
                  <h3 className={css.textIcon}>HTML</h3>
                </div>
              </li>
              <li className={css.skillsItem}>
                <div className={css.skillsItemDiv}>
                  <div className={`${css.iconSlillsBaze} ${css.iconSkillsCss}`}>
                    <FaCss3 size={40} />
                  </div>
                  <h3 className={css.textIcon}>CSS</h3>
                </div>
              </li>
              <li className={css.skillsItem}>
                <div className={css.skillsItemDiv}>
                  <div className={`${css.iconSlillsBaze} ${css.iconSkillsJs}`}>
                    <FaJsSquare size={40} />
                  </div>
                  <h3 className={css.textIcon}>Javascript</h3>
                </div>
              </li>
              <li className={css.skillsItem}>
                <div className={css.skillsItemDiv}>
                  <div
                    className={`${css.iconSlillsBaze} ${css.iconSkillsReact}`}
                  >
                    <FaReact size={40} />
                  </div>
                  <h3 className={css.textIcon}>React</h3>
                </div>
              </li>
              <li className={css.skillsItem}>
                <div className={css.skillsItemDiv}>
                  <div className={`${css.iconSlillsBaze} ${css.iconSkillsTs}`}>
                    <BiLogoTypescript size={40} />
                  </div>
                  <h3 className={css.textIcon}>TS</h3>
                </div>
              </li>
              <li className={css.skillsItem}>
                <div className={css.skillsItemDiv}>
                  <div
                    className={`${css.iconSlillsBaze} ${css.iconSkillsNode}`}
                  >
                    <FaNodeJs size={40} />
                  </div>
                  <h3 className={css.textIcon}>Node.js</h3>
                </div>
              </li>
              <li className={css.skillsItem}>
                <div className={css.skillsItemDiv}>
                  <div className={`${css.iconSlillsBaze} ${css.iconSkillsGit}`}>
                    <FaGitAlt size={40} />
                  </div>
                  <h3 className={css.textIcon}>Git</h3>
                </div>
              </li>
              <li className={css.skillsItem}>
                <div className={css.skillsItemDiv}>
                  <div
                    className={`${css.iconSlillsBaze} ${css.iconSkillsMongo}`}
                  >
                    <SiMongodb size={40} />
                  </div>
                  <h3 className={css.textIcon}>MongoDB</h3>
                </div>
              </li>
              <li className={css.skillsItem}>
                <div className={css.skillsItemDiv}>
                  <div
                    className={`${css.iconSlillsBaze} ${css.iconSkillsRedux}`}
                  >
                    <SiRedux size={40} />
                  </div>
                  <h3 className={css.textIcon}>Redux Toolkit</h3>
                </div>
              </li>
            </ul>
          </Marquee>
          <Line />
        </div>
      </div>
    </section>
  );
}

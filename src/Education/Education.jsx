import css from "./Education.module.css";
import Line from "../Line/Line";
import { FaUserGraduate } from "react-icons/fa";

export default function AboutMe() {
  return (
    <section id="education">
      <div className={css.container}>
        <div className={css.generalDiv}>
          <h2 className={css.educationTitle}>Education</h2>
          <div className={css.flexDiv}>
            <div className={css.educationImage}>
              <img
                src="../../assets/photo/undraw_programming_j1zw.svg"
                alt="Programming illustration"
              />
            </div>
            <ul className={css.educationList}>
              <li className={css.educationItem}>
                <div className={css.educationIcon}>
                  <FaUserGraduate size={35} />
                </div>
                <div>
                  <p className={css.educationYear}>2023 - 2025</p>
                  <h3 className={css.educationName}>
                    Certificate FullStack Developer
                  </h3>
                  <p className={css.educationInstutution}>GoIT Academy</p>
                </div>
              </li>
              <li className={css.educationItem}>
                <div className={css.educationIcon}>
                  <FaUserGraduate size={35} />
                </div>
                <div>
                  <p className={css.educationYear}>2022 - 2024</p>
                  <h3 className={css.educationName}>
                    Lviv State University of Internal Affairs
                  </h3>
                  <p className={css.educationInstutution}>
                    Master`s degree, 081 “Law”
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <Line className={css.line} />
        </div>
      </div>
    </section>
  );
}

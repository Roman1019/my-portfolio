import css from "./Education.module.css";
import Line from "../Line/Line";
import { FaUserGraduate } from "react-icons/fa";

export default function AboutMe() {
  return (
    <section>
      <div className={css.container}>
        <div className={css.generalDiv}>
          <h2 className={css.educationTitle}>Education</h2>
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
          </ul>
        </div>
      </div>
    </section>
  );
}

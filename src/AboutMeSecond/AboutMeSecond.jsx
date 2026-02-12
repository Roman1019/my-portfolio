import css from "./AboutMeSecond.module.css";
import myPhoto from "../../assets/photo/IMG_20250409_215858_172.webp";
import Line from "../Line/Line";

export default function AboutMeSecond() {
  const text = `Full Stack Developer with experience in HTML, CSS, JavaScript, React and Node.js.
Skilled in REST API, databases, Git and GitHub.

Completed five projects, including two team projects, with a focus on clean code and collaboration.

Motivated to grow within a team of developers and create user-friendly, valuable software solutions.`;

  return (
    <section id="about">
      <div className={css.container}>
        <h2 className={css.head}>About Me</h2>
        <div className={css.generaldiv}>
          <div>
            <h3 className={css.headSecond}>Who I am?</h3>
            <p className={css.textAboutMe}>{text}</p>
          </div>

          <div className={css.imgWrapper}>
            <img
              src={myPhoto}
              alt="Roman - Frontend Developer"
              className={css.myImg}
            />
          </div>
          <Line />
        </div>
      </div>
    </section>
  );
}

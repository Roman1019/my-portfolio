import css from "./AboutMe.module.css";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
export default function AboutMe() {
  // const developer = {
  //   name: "fff",
  //   skills: ["hh"],
  // };
  return (
    <section>
      <div className={css.container}>
        <div className={css.headandicons}>
          <h1>
            Hi, I`m - Roman Romaniv Full Stack Developer who likes to create new
            websites.
          </h1>
          <ul className={css.iconlist}>
            <li>
              <a className={css.iconitem} href="">
                <FaLinkedin size={18} />
              </a>
            </li>
            <li>
              <a className={css.iconitem} href="">
                <FaGithub />
              </a>
            </li>
            <li>
              <a className={css.iconitem} href="">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a className={css.iconitem} href="">
                <MdAlternateEmail />
              </a>
            </li>
            <li>
              <a className={css.iconitem} href="">
                <BsTelephone />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <span>const</span>
            <span>developer</span>
            <span>=</span>
            <span>{"{"}</span>
          </div>
          <div>
            <span>name</span>
            <span>:</span>
            <span>'Roman Romaniv',</span>
          </div>
          <div>
            <span>skills:</span>
            <span>{"["}</span>
            <span>'HTML'</span>
            <span>,</span>
            <span>'CSS'</span>
            <span>,</span>
            <span>'JavaScript'</span>
            <span>,</span>
            <span>'React'</span>
            <span>,</span>
            <span>'Node.js'</span>
          </div>
        </div>
      </div>
    </section>
  );
}

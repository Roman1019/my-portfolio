import css from "./Footer.module.css";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

export default function AboutMe() {
  return (
    <footer>
      <div className={css.container}>
        <p>
          © Portfolio by<span>Roman Romaniv</span>
        </p>
        <div>
          <a href="./">R.R.</a>
        </div>
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
    </footer>
  );
}

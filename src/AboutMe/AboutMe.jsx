// import css from "./AboutMe.module.css";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
export default function AboutMe() {
  return (
    <section>
      <div>
        <p>
          Hi, I`m - Roman Romaniv Full Stack Developer who likes to create new
          websites.
        </p>
        <a href="">
          <FaLinkedin />
        </a>
        <a href="">
          <FaGithub />
        </a>
        <a href="">
          <FaFacebook />
        </a>
        <a href="">
          <MdAlternateEmail />
        </a>
        <a href="">
          <BsTelephone />
        </a>
      </div>
    </section>
  );
}

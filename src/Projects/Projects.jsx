import css from "./Projects.module.css";

export default function Projects() {
  return (
    <section>
      <div className={css.container}>
        <ul className={css.projectsList}>
          <li className={css.projectItem}>
            <a
              className={css.projectLink}
              href="https://roman1019.github.io/hw-01-tutorial/"
            >
              <img
                className={css.projectsImg}
                src="../../assets/photo/simplyChocolate.webp"
                alt=""
              />
            </a>
            <p className={css.projectText}>Simply Chocolate</p>
            <button>link</button>
            <button>Github</button>
          </li>
          <li className={css.projectItem}>
            <a
              className={css.projectLink}
              href="https://roman1019.github.io/hw-01-tutorial/"
            >
              <img
                className={css.projectsImg}
                src="../../assets/photo/simplyChocolate.webp"
                alt=""
              />
            </a>
            <p className={css.projectText}>Simply Chocolate</p>
            <button>link</button>
            <button>Github</button>
          </li>
          <li className={css.projectItem}>
            <a
              className={css.projectLink}
              href="https://roman1019.github.io/hw-01-tutorial/"
            >
              <img
                className={css.projectsImg}
                src="../../assets/photo/simplyChocolate.webp"
                alt=""
              />
            </a>
            <p className={css.projectText}>Simply Chocolate</p>
            <button>link</button>
            <button>Github</button>
          </li>
        </ul>
      </div>
    </section>
  );
}

import css from "./Line.module.css";

export default function Line({ className }) {
  return <div className={`${css.line} ${className || ""}`}></div>;
}

import css from "./BackDrop.module.css";

export default function BackDrop({ handleMenu }) {
  return <div className={css.backDrop} onClick={handleMenu}></div>;
}

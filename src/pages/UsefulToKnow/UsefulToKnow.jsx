import Header from "../../components/Header/Header";
import css from "./UsefulToKnow.module.css";

export default function UsefulToKnow() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.usefulToKnowSection}>
        <div className="container"></div>
      </section>
    </div>
  );
}

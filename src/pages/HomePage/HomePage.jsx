import { NavLink } from "react-router-dom";
import mainLogo from "../../images/main-logo.png";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div>
      <section className={css.hero}>
        <div className="container">
          <div className={css.heroInformation}>
            <img
              src={mainLogo}
              alt="логотип компанії та лозунг смакуй кожну мить"
              className={css.mainImg}
            />
            <NavLink to="/about-us" className={css.heroBtn}>
              Про нас
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}

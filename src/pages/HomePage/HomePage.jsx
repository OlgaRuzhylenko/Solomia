import { NavLink } from "react-router-dom";
import mainLogo from "../../images/mainLogo.png";
import achievImg from "../../images/vybirKrainy.jpg";
import missionLogo from "../../images/missionLogo.png";
import css from "./HomePage.module.css";
import AboutUs from "../AboutUs/AboutUs";
import Brands from "../Brands/Brands";
import News from "../News/News";
import Footer from "../../components/Footer/Footer";

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
      <div className={css.aboutLink}>{<AboutUs />}</div>
      <div className="container">
        <div className={css.historyBox}>
          <NavLink to="/history" className={css.historyLink}>
            наша історія
          </NavLink>
        </div>
      </div>
      <div className={css.achiev}>
        <NavLink to="/our-achievements">
          <img src={achievImg} alt="пачки чаю Батік" className={css.acievImg} />
        </NavLink>
      </div>
      <div className={css.brendsLink}>{<Brands />}</div>
      <section className={css.mission}>
        <NavLink to="/mission-and-values">
          <img
            src={missionLogo}
            alt="місія бачення цінності"
            className={css.missionImg}
          />
        </NavLink>
        <NavLink to="/mission-and-values" className={css.missionBtn}>
          Детальніше
        </NavLink>
      </section>
      <div>{<News />}</div>
      <div>{<Footer />}</div>
    </div>
  );
}

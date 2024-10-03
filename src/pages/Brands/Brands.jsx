import css from "./brands.module.css";
import batikLogo from "../../images/brands/batik.png";
import askoldLogo from "../../images/brands/askold.png";
import askoldNobleLogo from "../../images/brands/askoldNoble.png";
import ardenLogo from "../../images/brands/arden.png";
import domLogo from "../../images/brands/domash.png";
import { NavLink } from "react-router-dom";

export default function Brands() {
  return (
    <div>
      <section className={css.brandsSection}>
        <div className="container">
          <h1 className={css.title}>Наші бренди</h1>
          <ul>
            <li>
              <NavLink to="/batik">
                <img src={batikLogo} alt="логотип Батік" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/askold-emotion-collection">
                <img src={askoldLogo} alt="логотип Аскольд" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/askold-noble-tea">
                <img src={askoldNobleLogo} alt="логотип Аскольд Нобл" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/arden">
                <img src={ardenLogo} alt="логотип Арден" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/domashnij-chaj">
                <img src={domLogo} alt="логотип Домашній чай" />
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

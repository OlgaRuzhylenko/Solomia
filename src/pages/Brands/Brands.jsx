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
          <div className={css.brandsSectionWrapper}>
            <h2 className={css.title}>Наші бренди</h2>
            <ul className={css.brandsList}>
              <li>
                <NavLink to="/batik">
                  <img
                    src={batikLogo}
                    alt="логотип Батік"
                    className={css.brandsImg}
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="/askold-emotion-collection">
                  <img
                    src={askoldLogo}
                    alt="логотип Аскольд"
                    className={css.brandsImg}
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="/askold-noble-tea">
                  <img
                    src={askoldNobleLogo}
                    alt="логотип Аскольд Нобл"
                    className={css.brandsImg}
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="/arden">
                  <img
                    src={ardenLogo}
                    alt="логотип Арден"
                    className={css.brandsImg}
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="/domashnij-chaj">
                  <img
                    src={domLogo}
                    alt="логотип Домашній чай"
                    className={css.brandsImg}
                  />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

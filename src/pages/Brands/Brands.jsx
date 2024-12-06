import css from "./brands.module.css";
import batikLogo from "../../images/brands/batik.png";
import askoldLogo from "../../images/brands/askold.png";
import askoldNobleLogo from "../../images/brands/askoldNoble.png";
import ardenLogo from "../../images/brands/arden.png";
import domLogo from "../../images/brands/domash.png";
import { NavLink } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Brands() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.mainBrandsSection}>
        <div className={css.brandsBgd}>
          <div className="container">
            <div className={css.brandsTitleWrap}>
              <h1 className={css.brandsTitle}>
                Компанія SOLOMIA має більше 25 років досвіду у виробництві чаю
                та є лідером з продажу у сегменті м’якої упаковки,
                гранульованого (стандарт «С.Т.С.») і дрібнолистового (стандарт
                «В.О.Р.») чаю. На сьогоднішній день асортимент компанії включає
                класичні моно чаї, купажовані чаї та складні багатокомпонентні
                суміші, що охоплюють всі цінові сегменти. Продукція представлена
                у всіх куточках України під власними брендами ASKOLD, BATIK та
                Домашній чай.
              </h1>
              <NavLink to="/" className={css.catalogBtn}>
                каталог
              </NavLink>
            </div>
          </div>
        </div>
        <div className={css.brandsSection}>
          <div className="container">
            <div className={css.brandsSectionWrapper}>
              <h2 className={css.title}>Наші бренди</h2>
              <ul className={css.brandsList}>
                <li className={css.brandsItem}>
                  <NavLink to="/batik">
                    <img
                      src={batikLogo}
                      alt="логотип Батік"
                      className={css.brandsImg}
                    />
                  </NavLink>
                </li>
                <li className={css.brandsItem}>
                  <NavLink to="/askold-emotion-collection">
                    <img
                      src={askoldLogo}
                      alt="логотип Аскольд"
                      className={css.brandsImg}
                    />
                  </NavLink>
                </li>
                <li className={css.brandsItem}>
                  <NavLink to="/askold-noble-tea">
                    <img
                      src={askoldNobleLogo}
                      alt="логотип Аскольд Нобл"
                      className={css.brandsImg}
                    />
                  </NavLink>
                </li>
                <li className={css.brandsItem}>
                  <NavLink to="/arden">
                    <img
                      src={ardenLogo}
                      alt="логотип Арден"
                      className={css.brandsImg}
                    />
                  </NavLink>
                </li>
                <li className={css.brandsItem}>
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
        </div>
      </section>
      <div>{<Footer />}</div>
    </div>
  );
}

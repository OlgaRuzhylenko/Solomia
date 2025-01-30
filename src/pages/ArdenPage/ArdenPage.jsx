import { NavLink } from "react-router-dom";
import Header from "../../components/Header/Header";
import ardenLogo from "../../images/arden/logo_arden.png";
import ardenImg1 from "../../images/arden/1.jpg";
import ardenImg2 from "../../images/arden/2.jpg";
import ardenImg3 from "../../images/arden/3.jpg";
import ardenImg4 from "../../images/arden/4.jpg";
import ardenImg5 from "../../images/arden/5.jpg";
import ardenImg6 from "../../images/arden/6.jpg";
import ardenImg7 from "../../images/arden/7.jpg";
import ardenImg8 from "../../images/arden/8.jpg";
import ardenImg9 from "../../images/arden/9.jpg";
import Footer from "../../components/Footer/Footer";
import css from "./ArdenPage.module.css";

export default function ArdenPage() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.ardenPageSection}>
        <div className={css.mainArdenPageSection}>
          <div className="container">
            <h1 className={css.ardenPageMainTitle}>Кава «ARDEN»</h1>
            <div className={css.ardenPageHeroWrap}>
              <img
                src={ardenLogo}
                alt="логотип Arden"
                className={css.ardenPageLogoImg}
              ></img>
              <div className={css.ardenPageTextWrap}>
                <p className={css.ardenPageText}>
                  Кава «ARDEN» – це ексклюзивні кавові бленди для
                  найвибагливіших поціновувачів кави. Для їх виготовлення
                  використовують виключно якісні кавові зерна сортів Арабіки та
                  Робусти з найкращих кавових плантацій Світу. Смачна кава – це
                  кава, яка подобається Вам! З кавою «ARDEN» ви розкриєте нові
                  відтінки смаку та оберете ту, яка смакує саме Вам!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <ul className={css.ardenPageList}>
            <li className={css.ardenPageItem}>
              <div className={css.ardenPageOverlayWrap}>
                <NavLink to="/arden-caramel-250">
                  <img
                    src={ardenImg1}
                    alt="пачка кави Arden Caramel 250 г, м/у"
                    className={css.ardenPageImg}
                  />
                  <div className={css.overlay}>
                    <p>ARDEN СARAMEL, 250 г, м/у </p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.ardenPageItem}>
              <div className={css.ardenPageOverlayWrap}>
                <NavLink to="/arden-irish-cream-250">
                  <img
                    src={ardenImg2}
                    alt="пачка кави Arden Irish Cream 250 г, м/у"
                    className={css.ardenPageImg}
                  />
                  <div className={css.overlay}>
                    <p>ARDEN IRISH CREAM 250 г, м/у </p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.ardenPageItem}>
              <div className={css.ardenPageOverlayWrap}>
                <NavLink to="/arden-arabica-250">
                  <img
                    src={ardenImg3}
                    alt="пачка кави Arden Arabica 250 г, м/у"
                    className={css.ardenPageImg}
                  />
                  <div className={css.overlay}>
                    <p>ARDEN ARABICA 250 г, м/у </p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.ardenPageItem}>
              <div className={css.ardenPageOverlayWrap}>
                <NavLink to="/arden-crema-250">
                  <img
                    src={ardenImg4}
                    alt="пачка кави Arden Crema 250 г, м/у"
                    className={css.ardenPageImg}
                  />
                  <div className={css.overlay}>
                    <p>Arden CREMA, 250 г, м/у </p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.ardenPageItem}>
              <div className={css.ardenPageOverlayWrap}>
                <NavLink to="/arden-espresso-250">
                  <img
                    src={ardenImg5}
                    alt="пачка кави Arden Espresso 250 г, м/у"
                    className={css.ardenPageImg}
                  />
                  <div className={css.overlay}>
                    <p>Arden ESPRESSO, 250 г, м/у </p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.ardenPageItem}>
              <div className={css.ardenPageOverlayWrap}>
                <NavLink to="/arden-irish-cream-1-kg">
                  <img
                    src={ardenImg6}
                    alt="пачка кави Arden Irish Cream, 1 кг"
                    className={css.ardenPageImg}
                  />
                  <div className={css.overlay}>
                    <p>Arden IRISH CREAM </p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.ardenPageItem}>
              <div className={css.ardenPageOverlayWrap}>
                <NavLink to="/arden-arabica-1-kg">
                  <img
                    src={ardenImg7}
                    alt="пачка кави Arden Arabica, 1 кг"
                    className={css.ardenPageImg}
                  />
                  <div className={css.overlay}>
                    <p>Arden ARABICA </p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.ardenPageItem}>
              <div className={css.ardenPageOverlayWrap}>
                <NavLink to="/arden-espresso-1-kg">
                  <img
                    src={ardenImg8}
                    alt="пачка кави Arden Espresso, 1 кг"
                    className={css.ardenPageImg}
                  />
                  <div className={css.overlay}>
                    <p>Arden ESPRESSO </p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.ardenPageItem}>
              <div className={css.ardenPageOverlayWrap}>
                <NavLink to="/arden-crema-1-kg">
                  <img
                    src={ardenImg9}
                    alt="пачка кави Arden Crema, 1 кг"
                    className={css.ardenPageImg}
                  />
                  <div className={css.overlay}>
                    <p>Arden CREMA </p>
                  </div>
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <div>{<Footer />}</div>
    </div>
  );
}

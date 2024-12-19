import { NavLink } from "react-router-dom";
import Header from "../../components/Header/Header";
import domashniyLogo from "../../images/domashniyChai/logo_dom.png";
import domashniyImg1 from "../../images/domashniyChai/1.png";
import domashniyImg2 from "../../images/domashniyChai/2.png";
import domashniyImg3 from "../../images/domashniyChai/3.png";
import domashniyImg4 from "../../images/domashniyChai/4.png";
import domashniyImg5 from "../../images/domashniyChai/5.png";
import domashniyImg6 from "../../images/domashniyChai/6.png";
import domashniyImg7 from "../../images/domashniyChai/7.png";
import domashniyImg8 from "../../images/domashniyChai/8.png";
import Footer from "../../components/Footer/Footer";
import css from "./DomashniyPages.module.css";

export default function DomashniyPages() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.domashniySection}>
        <div className={css.mainDomashniySection}>
          <div className="container">
            <h1 className={css.domashniyMainTitle}>
              «Домашній чай» – це завжди гарантована якість та доступна ціна
            </h1>
            <div className={css.domashniyHeroWrap}>
              <img
                src={domashniyLogo}
                alt="логотип Домашній чай"
                className={css.domashniyLogoImg}
              ></img>
              <div className={css.domashniyTextWrap}>
                <p className={css.domashniyText}>
                  «Домашній чай» з 1998 року дарує радість українським покупцям
                  смачними ароматизованими та класичними чорними чаями.
                  «Домашній чай» – це завжди гарантована якість та доступна
                  ціна. Продукція марки представлена в нижньому ціновому
                  сегменті, що дозволяє їй бути популярним серед самого широкого
                  кола споживачів.
                </p>
                <p className={css.domashniyText}>
                  «Домашній чай» поєднує улюблені смаки та рецепти, що
                  складалися різними поколіннями. Аромат домашнього чаю ми
                  знаємо з дитинства. А щоденне родине чаювання – це частина
                  наших сімейних традицій. Саме чаювання створює дружні стосунки
                  та тепле спілкування всієї родини за домашнім столом.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <ul className={css.domashniyList}>
            <li className={css.domashniyItem}>
              <div className={css.domashniyOverlayWrap}>
                <NavLink to="/domashnii-chai-mitsnyi-90">
                  <img
                    src={domashniyImg1}
                    alt="пачка чаю Домашній чай Міцний 90 г"
                    className={css.domashniyImg}
                  />
                  <div className={css.overlay}>
                    <p>Домашній чай МІЦНИЙ, 90 г </p>
                  </div>
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

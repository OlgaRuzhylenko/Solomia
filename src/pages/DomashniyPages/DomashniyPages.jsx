import { NavLink } from "react-router-dom";
import Header from "../../components/Header/Header";
import domashniyLogo from "../../images/domashniyChai/logo_dom.png";
import domashniyImg1 from "../../images/domashniyChai/1.jpg";
import domashniyImg2 from "../../images/domashniyChai/2.jpg";
import domashniyImg3 from "../../images/domashniyChai/3.jpg";
import domashniyImg4 from "../../images/domashniyChai/4.jpg";
import domashniyImg5 from "../../images/domashniyChai/5.jpg";
import domashniyImg6 from "../../images/domashniyChai/6.jpg";
import domashniyImg7 from "../../images/domashniyChai/7.jpg";
import domashniyImg8 from "../../images/domashniyChai/8.jpg";
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
          <li className={css.domashniyItem}>
            <div className={css.domashniyOverlayWrap}>
              <NavLink to="/domashnii-chai-mitsnyi-40-g-20-paketykiv">
                <img
                  src={domashniyImg2}
                  alt="пачка чаю Домашній чай Міцний 40 г, 20 пакетиків"
                  className={css.domashniyImg}
                />
                <div className={css.overlay}>
                  <p>Домашній чай МІЦНИЙ 40 г, 20 пакетиків </p>
                </div>
              </NavLink>
            </div>
          </li>
          <li className={css.domashniyItem}>
            <div className={css.domashniyOverlayWrap}>
              <NavLink to="/domashnii-chai-malynovyi-30-g-20-paketykiv">
                <img
                  src={domashniyImg3}
                  alt="пачка чаю Домашній чай Малиновий 30 г, 20 пакетиків"
                  className={css.domashniyImg}
                />
                <div className={css.overlay}>
                  <p>Домашній чай МАЛИНОВИЙ 30 г, 20 пакетиків </p>
                </div>
              </NavLink>
            </div>
          </li>
          <li className={css.domashniyItem}>
            <div className={css.domashniyOverlayWrap}>
              <NavLink to="/domashnii-chai-lymonnyi-30-g-20-paketykiv">
                <img
                  src={domashniyImg4}
                  alt="пачка чаю Домашній чай Лимонний 30 г, 20 пакетиків"
                  className={css.domashniyImg}
                />
                <div className={css.overlay}>
                  <p>Домашній чай ЛИМОННИЙ 30 г, 20 пакетиків </p>
                </div>
              </NavLink>
            </div>
          </li>
          <li className={css.domashniyItem}>
            <div className={css.domashniyOverlayWrap}>
              <NavLink to="/domashnii-chai-yahidnyi-30-g-20-paketykiv">
                <img
                  src={domashniyImg5}
                  alt="пачка чаю Домашній чай Ягідний 30 г, 20 пакетиків"
                  className={css.domashniyImg}
                />
                <div className={css.overlay}>
                  <p>Домашній чай ЯГІДНИЙ 30 г, 20 пакетиків </p>
                </div>
              </NavLink>
            </div>
          </li>
          <li className={css.domashniyItem}>
            <div className={css.domashniyOverlayWrap}>
              <NavLink to="/domashnii-chai-tropik-30-g-20-paketykiv">
                <img
                  src={domashniyImg6}
                  alt="пачка чаю Домашній чай Тропік 30 г, 20 пакетиків"
                  className={css.domashniyImg}
                />
                <div className={css.overlay}>
                  <p>Домашній чай ТРОПІК 30 г, 20 пакетиків </p>
                </div>
              </NavLink>
            </div>
          </li>
          <li className={css.domashniyItem}>
            <div className={css.domashniyOverlayWrap}>
              <NavLink to="/domashnii-chai-polunychnyi-30-g-20-paketykiv">
                <img
                  src={domashniyImg7}
                  alt="пачка чаю Домашній чай Полуничний 30 г, 20 пакетиків"
                  className={css.domashniyImg}
                />
                <div className={css.overlay}>
                  <p>Домашній чай ПОЛУНИЧНИЙ 30 г, 20 пакетиків </p>
                </div>
              </NavLink>
            </div>
          </li>
          <li className={css.domashniyItem}>
            <div className={css.domashniyOverlayWrap}>
              <NavLink to="/domashnii-chai-berhamotovyi-30-g-20-paketykiv">
                <img
                  src={domashniyImg8}
                  alt="пачка чаю Домашній чай Бергамотовий 30 г, 20 пакетиків"
                  className={css.domashniyImg}
                />
                <div className={css.overlay}>
                  <p>Домашній чай БЕРГАМОТОВИЙ 30 г, 20 пакетиків </p>
                </div>
              </NavLink>
            </div>
          </li>
        </ul>
      </section>
      <div>{<Footer />}</div>
    </div>
  );
}

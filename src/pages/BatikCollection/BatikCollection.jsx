import Header from "../../components/Header/Header";
import batikClassicImg1 from "../../images/batik/classic/1.png";
import batikClassicImg2 from "../../images/batik/classic/2.png";
import batikClassicImg3 from "../../images/batik/classic/3.png";
import batikClassicImg4 from "../../images/batik/classic/4.png";
import batikClassicImg5 from "../../images/batik/classic/5.png";
import batikClassicImg6 from "../../images/batik/classic/6.png";
import batikClassicImg7 from "../../images/batik/classic/7.png";
import batikClassicImg8 from "../../images/batik/classic/8.png";
import batikClassicImg9 from "../../images/batik/classic/9.png";
import batikClassicImg10 from "../../images/batik/classic/10.png";
import batikClassicImg11 from "../../images/batik/classic/11.png";
import batikClassicImg12 from "../../images/batik/classic/12.png";
import batikClassicImg13 from "../../images/batik/classic/13.png";
import batikClassicImg14 from "../../images/batik/classic/14.png";
import batikClassicImg15 from "../../images/batik/classic/15.png";
import batikClassicImg16 from "../../images/batik/classic/16.png";
import batikClassicImg17 from "../../images/batik/classic/17.png";
import batikClassicImg18 from "../../images/batik/classic/18.png";
import batikClassicImg19 from "../../images/batik/classic/19.png";
import batikClassicImg20 from "../../images/batik/classic/20.png";
import batikClassicImg21 from "../../images/batik/classic/21.png";
import batikClassicImg22 from "../../images/batik/classic/22.png";
import batikClassicImg23 from "../../images/batik/classic/23.png";
import { NavLink } from "react-router-dom";
import css from "./BatikCollection.module.css";

export default function BatikCollection() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.batikCollectionSection}>
        <div className={css.mainBatikCollectionSection}>
          <div className="container">
            <div className={css.batikCollectionHeroWpap}>
              <h1 className={css.batikCollectionMainTitle}>Batik Collection</h1>
              <p className={css.batikCollectionText}>
                У Batik Collection зібрані як класичні стандарти добірних
                цейлонських чаїв для поціновувачів міцності та терпкості, так і
                вишукані купажовані композиції з різних чайних плантацій світу
                та яскраві ягідно-фруктові з вибуховими смаками. Знайдіть час на
                чаювання з «Batik»! Переведіть подих, вгамуйте напругу та
                відчуйте себе!
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <ul className={css.batikCollectionList}>
            <li className={css.batikCollectionItem}>
              <div className={css.batikCollectionOverlayWrap}>
                <NavLink to="/batik-yahidnyi-tsilunok">
                  <img
                    src={batikClassicImg1}
                    alt="пачка чаю Батік Ягідний Цілунок"
                    className={css.batikCollectionImg}
                  />
                  <div className={css.overlay}>
                    <p>Batik ЯГІДНИЙ ЦІЛУНОК 37.5 г, 25 пакетиків </p>
                  </div>
                </NavLink>
              </div>
            </li>

            <li className={css.batikCollectionItem}>
              <div className={css.batikCollectionOverlayWrap}>
                <NavLink to="/batik-z-chornoiu-smorodynoui">
                  <img
                    src={batikClassicImg2}
                    alt="пачка чаю Батік з чорною смородиною"
                    className={css.batikCollectionImg}
                  />
                  <div className={css.overlay}>
                    <p>Batik з ЧОРНОЮ СМОРОДИНОЮ 37.5 г, 25 пакетиків </p>
                  </div>
                </NavLink>
              </div>
            </li>

            <li className={css.batikCollectionItem}>
              <div className={css.batikCollectionOverlayWrap}>
                <NavLink to="/batik-erl-hrei">
                  <img
                    src={batikClassicImg3}
                    alt="пачка чаю Батік Ерл Грей"
                    className={css.batikCollectionImg}
                  />
                  <div className={css.overlay}>
                    <p>Batik з ЕРЛ ГРЕЙ 37.5 г, 25 пакетиків </p>
                  </div>
                </NavLink>
              </div>
            </li>

            <li className={css.batikCollectionItem}>
              <div className={css.batikCollectionOverlayWrap}>
                <NavLink to="/batik-hranulovanyi-sts-250">
                  <img
                    src={batikClassicImg4}
                    alt="пачка чаю Батік гранульований стандарт С.Т.С. 250 грам в м'якій упаковці"
                    className={css.batikCollectionImg}
                  />
                  <div className={css.overlay}>
                    <p>Batik ГРАНУЛЬОВАНИЙ (С.Т.С) 250 г, м/у</p>
                  </div>
                </NavLink>
              </div>
            </li>

            <li className={css.batikCollectionItem}>
              <div className={css.batikCollectionOverlayWrap}>
                <NavLink to="/batik-hranulovanyi-sts-100-m-u">
                  <img
                    src={batikClassicImg5}
                    alt="пачка чаю Батік гранульований стандарт С.Т.С. 100 грам в м'якій упаковц"
                    className={css.batikCollectionImg}
                  />
                  <div className={css.overlay}>
                    <p>Batik ГРАНУЛЬОВАНИЙ (С.Т.С) 100 г, м/у</p>
                  </div>
                </NavLink>
              </div>
            </li>

            <li className={css.batikCollectionItem}>
              <div className={css.batikCollectionOverlayWrap}>
                <NavLink to="/batik-hranulovanyi-sts-100">
                  <img
                    src={batikClassicImg6}
                    alt="пачка чаю Батік гранульований стандарт С.Т.С. 100 грам в картонній упаковці"
                    className={css.batikCollectionImg}
                  />
                  <div className={css.overlay}>
                    <p>Batik ГРАНУЛЬОВАНИЙ (С.Т.С) 100 г</p>
                  </div>
                </NavLink>
              </div>
            </li>

            <li className={css.batikCollectionItem}>
              <NavLink to="/">
                <img
                  src={batikClassicImg7}
                  alt="пачка чаю Батік високогірний стандарт B.O.P. 250 грам в м'якій упаковці"
                  className={css.batikCollectionImg}
                />
              </NavLink>
            </li>
            <li className={css.batikCollectionItem}>
              <NavLink to="/">
                <img
                  src={batikClassicImg8}
                  alt="пачка чаю Батік високогірний стандарт B.O.P. 100 грам в картонній упаковці"
                  className={css.batikCollectionImg}
                />
              </NavLink>
            </li>
            <li className={css.batikCollectionItem}>
              <NavLink to="/">
                <img
                  src={batikClassicImg9}
                  alt="пачка чаю Батік середньолистовий стандарт F.B.O.P. 100 грам в картонній упаковці"
                  className={css.batikCollectionImg}
                />
              </NavLink>
            </li>
            <li className={css.batikCollectionItem}>
              <NavLink to="/">
                <img
                  src={batikClassicImg10}
                  alt="пачка чаю Батік Чорний Бархат 50+10 пакетиків"
                  className={css.batikCollectionImg}
                />
              </NavLink>
            </li>
            <li className={css.batikCollectionItem}>
              <NavLink to="/">
                <img
                  src={batikClassicImg11}
                  alt="пачка чаю Батік Чорний Бархат 90 грам в картонній упаковці"
                  className={css.batikCollectionImg}
                />
              </NavLink>
            </li>
            <li className={css.batikCollectionItem}>
              <NavLink to="/">
                <img
                  src={batikClassicImg12}
                  alt="пачка чаю Батік Чорний Бархат 25 пакетиків"
                  className={css.batikCollectionImg}
                />
              </NavLink>
            </li>
            <li className={css.batikCollectionItem}>
              <NavLink to="/">
                <img
                  src={batikClassicImg13}
                  alt="пачка чаю Батік крупнолистовий стандарт O.P.A. 150 грам в м'якій упаковці"
                  className={css.batikCollectionImg}
                />
              </NavLink>
            </li>
            <li className={css.batikCollectionItem}>
              <NavLink to="/">
                <img
                  src={batikClassicImg14}
                  alt="пачка чаю Батік Зелений Острів 90 грам в картонній упаковці"
                  className={css.batikCollectionImg}
                />
              </NavLink>
            </li>
            <li className={css.batikCollectionItem}>
              <NavLink to="/">
                <img
                  src={batikClassicImg15}
                  alt="пачка чаю Батік Бадьорий Лимон 25 пакетиків"
                  className={css.batikCollectionImg}
                />
              </NavLink>
            </li>
            <li className={css.batikCollectionItem}>
              <NavLink to="/">
                <img
                  src={batikClassicImg16}
                  alt="пачка чаю Батік Індійський чай 100 пакетиків"
                  className={css.batikCollectionImg}
                />
              </NavLink>
            </li>
            <li className={css.batikCollectionItem}>
              <NavLink to="/">
                <img
                  src={batikClassicImg17}
                  alt="пачка чаю Батік Індійський чай 25 пакетиків"
                  className={css.batikCollectionImg}
                />
              </NavLink>
            </li>
            <li className={css.batikCollectionItem}>
              <NavLink to="/">
                <img
                  src={batikClassicImg18}
                  alt="пачка чаю Батік Кенійський чай 25 пакетиків"
                  className={css.batikCollectionImg}
                />
              </NavLink>
            </li>
            <li className={css.batikCollectionItem}>
              <NavLink to="/">
                <img
                  src={batikClassicImg19}
                  alt="пачка чаю Батік Кенійський чай 85 грам в картонній упаковці"
                  className={css.batikCollectionImg}
                />
              </NavLink>
            </li>
            <li className={css.batikCollectionItem}>
              <NavLink to="/">
                <img
                  src={batikClassicImg20}
                  alt="пачка чаю Батік Королівський Стандарт 100 пакетиків"
                  className={css.batikCollectionImg}
                />
              </NavLink>
            </li>
            <li className={css.batikCollectionItem}>
              <NavLink to="/">
                <img
                  src={batikClassicImg21}
                  alt="пачка чаю Батік Королівський Стандарт 85 грам в картонній упаковці"
                  className={css.batikCollectionImg}
                />
              </NavLink>
            </li>
            <li className={css.batikCollectionItem}>
              <NavLink to="/">
                <img
                  src={batikClassicImg22}
                  alt="пачка чаю Батік Королівський Стандарт 25 пакетиків"
                  className={css.batikCollectionImg}
                />
              </NavLink>
            </li>
            <li className={css.batikCollectionItem}>
              <NavLink to="/">
                <img
                  src={batikClassicImg23}
                  alt="пачка чаю Батік Зелений Мохіто 25 пакетиків"
                  className={css.batikCollectionImg}
                />
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

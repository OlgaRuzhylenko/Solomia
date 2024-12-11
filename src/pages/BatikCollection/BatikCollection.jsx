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
import mandala from "../../images/batik/classic/mandala.png";
import { NavLink } from "react-router-dom";
import css from "./BatikCollection.module.css";
import Footer from "../../components/Footer/Footer";

export default function BatikCollection() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.batikCollectionSection}>
        <div className={css.mainBatikCollectionSection}>
          <div className="container">
            <div className={css.batikCollectionHeroWpap}>
              <div className={css.batikCollectionTitleWpap}>
                <h1 className={css.batikCollectionMainTitle}>
                  Batik Collection
                </h1>
                <p className={css.batikCollectionText}>
                  У Batik Collection зібрані як класичні стандарти добірних
                  цейлонських чаїв для поціновувачів міцності та терпкості, так
                  і вишукані купажовані композиції з різних чайних плантацій
                  світу та яскраві ягідно-фруктові з вибуховими смаками.
                  Знайдіть час на чаювання з «Batik»! Переведіть подих, вгамуйте
                  напругу та відчуйте себе!
                </p>
              </div>
              <img
                src={mandala}
                alt="мандала в червоних та фіолетових кольорах"
                className={css.batikMandala}
              />
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
                    alt="пачка чаю Батік гранульований стандарт С.Т.С. 100 грам в м'якій упаковці"
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
              <div className={css.batikCollectionOverlayWrap}>
                <NavLink to="/batik-vysokohirnyi-250-m-u">
                  <img
                    src={batikClassicImg7}
                    alt="пачка чаю Батік високогірний стандарт B.O.P. 250 грам в м'якій упаковці"
                    className={css.batikCollectionImg}
                  />

                  <div className={css.overlay}>
                    <p>Batik ВИСОКОГІРНИЙ (B.O.P) 250 г, м/у</p>
                  </div>
                </NavLink>
              </div>
            </li>

            <li className={css.batikCollectionItem}>
              <div className={css.batikCollectionOverlayWrap}>
                <NavLink to="/batik-vysokohirnyi-100">
                  <img
                    src={batikClassicImg8}
                    alt="пачка чаю Батік високогірний стандарт B.O.P. 100 грам в картонній упаковці"
                    className={css.batikCollectionImg}
                  />

                  <div className={css.overlay}>
                    <p>Batik ВИСОКОГІРНИЙ (B.O.P) 100 г</p>
                  </div>
                </NavLink>
              </div>
            </li>

            <li className={css.batikCollectionItem}>
              <div className={css.batikCollectionOverlayWrap}>
                <NavLink to="/batik-serednolystovyi-100">
                  <img
                    src={batikClassicImg9}
                    alt="пачка чаю Батік середньолистовий стандарт F.B.O.P. 100 грам в картонній упаковці"
                    className={css.batikCollectionImg}
                  />

                  <div className={css.overlay}>
                    <p>Batik СЕРЕДНЬОЛИСТОВИЙ (F.B.O.P) 100 г</p>
                  </div>
                </NavLink>
              </div>
            </li>

            <li className={css.batikCollectionItem}>
              <div className={css.batikCollectionOverlayWrap}>
                <NavLink to="/batik-chornyi-barkhat-120-hram-60-paketykiv">
                  <img
                    src={batikClassicImg10}
                    alt="пачка чаю Батік Чорний Бархат 50+10 пакетиків"
                    className={css.batikCollectionImg}
                  />

                  <div className={css.overlay}>
                    <p>Batik Чорний Бархат 120 г, 60 пакетиків</p>
                  </div>
                </NavLink>
              </div>
            </li>

            <li className={css.batikCollectionItem}>
              <div className={css.batikCollectionOverlayWrap}>
                <NavLink to="/batik-chornyi-barkhat-90">
                  <img
                    src={batikClassicImg11}
                    alt="пачка чаю Батік Чорний Бархат 90 грам в картонній упаковці"
                    className={css.batikCollectionImg}
                  />

                  <div className={css.overlay}>
                    <p>Batik Чорний Бархат 90 г</p>
                  </div>
                </NavLink>
              </div>
            </li>

            <li className={css.batikCollectionItem}>
              <div className={css.batikCollectionOverlayWrap}>
                <NavLink to="/batik-chornyi-barkhat-50-hram-25-paketykiv">
                  <img
                    src={batikClassicImg12}
                    alt="пачка чаю Батік Чорний Бархат 25 пакетиків"
                    className={css.batikCollectionImg}
                  />

                  <div className={css.overlay}>
                    <p>Batik Чорний Бархат 50 г, 25 пакетиків</p>
                  </div>
                </NavLink>
              </div>
            </li>

            <li className={css.batikCollectionItem}>
              <div className={css.batikCollectionOverlayWrap}>
                <NavLink to="/batik-krupnolystovyi-150-m-u">
                  <img
                    src={batikClassicImg13}
                    alt="пачка чаю Батік крупнолистовий стандарт O.P.A. 150 грам в м'якій упаковці"
                    className={css.batikCollectionImg}
                  />

                  <div className={css.overlay}>
                    <p>Batik КРУПНОЛИСТОВИЙ (О.Р.А) 150 г, м/у </p>
                  </div>
                </NavLink>
              </div>
            </li>

            <li className={css.batikCollectionItem}>
              <div className={css.batikCollectionOverlayWrap}>
                <NavLink to="/batik-zelenyi-ostriv-90">
                  <img
                    src={batikClassicImg14}
                    alt="пачка чаю Батік Зелений Острів 90 грам в картонній упаковці"
                    className={css.batikCollectionImg}
                  />

                  <div className={css.overlay}>
                    <p>Batik ЗЕЛЕНИЙ ОСТРІВ 90 г</p>
                  </div>
                </NavLink>
              </div>
            </li>

            <li className={css.batikCollectionItem}>
              <div className={css.batikCollectionOverlayWrap}>
                <NavLink to="/batik-badoryi-lymon-37-5-hram-25-paketykiv">
                  <img
                    src={batikClassicImg15}
                    alt="пачка чаю Батік Бадьорий Лимон 25 пакетиків"
                    className={css.batikCollectionImg}
                  />

                  <div className={css.overlay}>
                    <p>Batik БАДЬОРИЙ ЛИМОН 37.5 г, 25 пакетиків</p>
                  </div>
                </NavLink>
              </div>
            </li>

            <li className={css.batikCollectionItem}>
              <div className={css.batikCollectionOverlayWrap}>
                <NavLink to="/batik-indiiskyi-150-hram-100-paketykiv">
                  <img
                    src={batikClassicImg16}
                    alt="пачка чаю Батік Індійський чай 100 пакетиків"
                    className={css.batikCollectionImg}
                  />

                  <div className={css.overlay}>
                    <p>Batik ІНДІЙСЬКИЙ ЧАЙ 150 г, 100 пакетиків</p>
                  </div>
                </NavLink>
              </div>
            </li>

            <li className={css.batikCollectionItem}>
              <div className={css.batikCollectionOverlayWrap}>
                <NavLink to="/batik-indiiskyi-37-5-hram-25-paketykiv">
                  <img
                    src={batikClassicImg17}
                    alt="пачка чаю Батік Індійський чай 25 пакетиків"
                    className={css.batikCollectionImg}
                  />

                  <div className={css.overlay}>
                    <p>Batik ІНДІЙСЬКИЙ ЧАЙ 37.5 г, 25 пакетиків</p>
                  </div>
                </NavLink>
              </div>
            </li>

            <li className={css.batikCollectionItem}>
              <div className={css.batikCollectionOverlayWrap}>
                <NavLink to="/batik-keniiskyi-50-hram-25-paketykiv">
                  <img
                    src={batikClassicImg18}
                    alt="пачка чаю Батік Кенійський чай 25 пакетиків"
                    className={css.batikCollectionImg}
                  />

                  <div className={css.overlay}>
                    <p>Batik КЕНІЙСЬКИЙ ЧАЙ, 25 пакетиків </p>
                  </div>
                </NavLink>
              </div>
            </li>

            <li className={css.batikCollectionItem}>
              <div className={css.batikCollectionOverlayWrap}>
                <NavLink to="/batik-keniiskyi-85">
                  <img
                    src={batikClassicImg19}
                    alt="пачка чаю Батік Кенійський чай 85 грам в картонній упаковці"
                    className={css.batikCollectionImg}
                  />

                  <div className={css.overlay}>
                    <p>Batik КЕНІЙСЬКИЙ ЧАЙ 85 </p>
                  </div>
                </NavLink>
              </div>
            </li>

            <li className={css.batikCollectionItem}>
              <div className={css.batikCollectionOverlayWrap}>
                <NavLink to="/batik-korolivskyi-standart-200-hram-100-paketykiv">
                  <img
                    src={batikClassicImg20}
                    alt="пачка чаю Батік Королівський Стандарт 100 пакетиків"
                    className={css.batikCollectionImg}
                  />

                  <div className={css.overlay}>
                    <p>Batik КОРОЛІВСЬКИЙ СТАНДАРТ 200 г, 100 пакетиків</p>
                  </div>
                </NavLink>
              </div>
            </li>

            <li className={css.batikCollectionItem}>
              <div className={css.batikCollectionOverlayWrap}>
                <NavLink to="/batik-korolivskyi-standart-85">
                  <img
                    src={batikClassicImg21}
                    alt="пачка чаю Батік Королівський Стандарт 85 грам в картонній упаковці"
                    className={css.batikCollectionImg}
                  />

                  <div className={css.overlay}>
                    <p>Batik КОРОЛІВСЬКИЙ СТАНДАРТ 85</p>
                  </div>
                </NavLink>
              </div>
            </li>

            <li className={css.batikCollectionItem}>
              <div className={css.batikCollectionOverlayWrap}>
                <NavLink to="/batik-korolivskyi-standart-50-hram-25-paketykiv">
                  <img
                    src={batikClassicImg22}
                    alt="пачка чаю Батік Королівський Стандарт 25 пакетиків"
                    className={css.batikCollectionImg}
                  />

                  <div className={css.overlay}>
                    <p>Batik КОРОЛІВСЬКИЙ СТАНДАРТ 50 г, 25 пакетиків</p>
                  </div>
                </NavLink>
              </div>
            </li>

            <li className={css.batikCollectionItem}>
              <div className={css.batikCollectionOverlayWrap}>
                <NavLink to="/batik-zelenyi-mokhito-37-5-hram-25-paketykiv">
                  <img
                    src={batikClassicImg23}
                    alt="пачка чаю Батік Зелений Мохіто 25 пакетиків"
                    className={css.batikCollectionImg}
                  />

                  <div className={css.overlay}>
                    <p> Batik ЗЕЛЕНИЙ МОХІТТО, 37.5 г, 25 пакетиків </p>
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

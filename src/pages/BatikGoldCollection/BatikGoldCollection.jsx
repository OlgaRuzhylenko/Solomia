import Header from "../../components/Header/Header";
import mandala from "../../images/batik/batik-gold/mandala.jpg";
import batikGoldImg1 from "../../images/batik/batik-gold/1.jpg";
import batikGoldImg2 from "../../images/batik/batik-gold/2.jpg";
import batikGoldImg3 from "../../images/batik/batik-gold/3.jpg";
import batikGoldImg4 from "../../images/batik/batik-gold/4.jpg";
import batikGoldImg5 from "../../images/batik/batik-gold/5.jpg";
import batikGoldImg6 from "../../images/batik/batik-gold/6.jpg";
import batikGoldImg7 from "../../images/batik/batik-gold/7.png";
import batikGoldImg8 from "../../images/batik/batik-gold/8.png";
import { NavLink } from "react-router-dom";
import css from "./BatikGoldCollection.module.css";
import Footer from "../../components/Footer/Footer";

export default function BatikGoldCollection() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.batikGoldCollectionSection}>
        <div className={css.mainBatikGoldCollectionSection}>
          <div className="container">
            <div className={css.batikGoldCollectionHeroWpap}>
              <div className={css.batikGoldCollectionTitleWpap}>
                <h1 className={css.batikGoldCollectionMainTitle}>
                  Колекція Gold
                </h1>
                <p className={css.batikGoldCollectionText}>
                  Gold Collection – це справжнє чайне золото. Відбірні
                  преміальні стандарти улюбленого насиченого смаку, міцності,
                  терпкості та сонячної енергії Цейлону у Вашій чашці, що
                  дарують тепло і затишок з кожним ковтком ароматного чаю.
                  Знайдіть час на чаювання з «Batik»! Переведіть подих, вгамуйте
                  напругу та відчуйте себе!
                </p>
              </div>
              <img
                src={mandala}
                alt="мандала в червоних та золотих кольорах"
                className={css.batikGoldMandala}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <ul className={css.batikGoldCollectionList}>
            <li className={css.batikGoldCollectionItem}>
              <div className={css.batikGoldCollectionOverlayWrap}>
                <NavLink to="/batik-gold-krupnyi-lyst-berhamotovyi-100">
                  <img
                    src={batikGoldImg1}
                    alt="пачка чаю Батік Голд крупний лист бергамотовий 100 г"
                    className={css.batikGoldCollectionImg}
                  />
                  <div className={css.overlay}>
                    <p> Batik Gold КРУПНИЙ ЛИСТ БЕРГАМОТОВИЙ</p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.batikGoldCollectionItem}>
              <div className={css.batikGoldCollectionOverlayWrap}>
                <NavLink to="/batik-gold-krupnyi-lyst-opa-100">
                  <img
                    src={batikGoldImg2}
                    alt="пачка чаю Батік Голд крупний лист OPA 100 г"
                    className={css.batikGoldCollectionImg}
                  />
                  <div className={css.overlay}>
                    <p> Batik Gold КРУПНИЙ ЛИСТ ОРА</p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.batikGoldCollectionItem}>
              <div className={css.batikGoldCollectionOverlayWrap}>
                <NavLink to="/batik-gold-smarahdovyi-ostriv">
                  <img
                    src={batikGoldImg3}
                    alt="пачка чаю Батік Голд Смарагдовий Острів"
                    className={css.batikGoldCollectionImg}
                  />
                  <div className={css.overlay}>
                    <p>
                      Batik Gold СМАРАГДОВИЙ ОСТРІВ, 37,5 г, 25 пакетиків у
                      конвертах
                    </p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.batikGoldCollectionItem}>
              <div className={css.batikGoldCollectionOverlayWrap}>
                <NavLink to="/batik-gold-rubinova-nich">
                  <img
                    src={batikGoldImg4}
                    alt="пачка чаю Батік Голд Рубінова Ніч"
                    className={css.batikGoldCollectionImg}
                  />
                  <div className={css.overlay}>
                    <p>
                      Batik Gold РУБІНОВА НІЧ, 50 г, 25 пакетиків у конвертах
                    </p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.batikGoldCollectionItem}>
              <div className={css.batikGoldCollectionOverlayWrap}>
                <NavLink to="/batik-gold-berhamotovyi-buket">
                  <img
                    src={batikGoldImg5}
                    alt="пачка чаю Батік Голд Бергамотовий Букет"
                    className={css.batikGoldCollectionImg}
                  />
                  <div className={css.overlay}>
                    <p>
                      Batik Gold БЕРГАМОТОВИЙ БУКЕТ, 50 г, 25 пакетиків у
                      конвертах
                    </p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.batikGoldCollectionItem}>
              <div className={css.batikGoldCollectionOverlayWrap}>
                <NavLink to="/batik-gold-tseilonske-sontse">
                  <img
                    src={batikGoldImg6}
                    alt="пачка чаю Батік Голд Цейлонське Сонце"
                    className={css.batikGoldCollectionImg}
                  />
                  <div className={css.overlay}>
                    <p>
                      Batik Gold ЦЕЙЛОНСЬКЕ СОНЦЕ, 50 г, 25 пакетиків у
                      конвертах
                    </p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.batikGoldCollectionItem}>
              <div className={css.batikGoldCollectionOverlayWrap}>
                <NavLink to="/batik-gold-tseilonskyi-vysokohirnyi">
                  <img
                    src={batikGoldImg7}
                    alt="пачка чаю Батік Голд Цейлонський високогірний"
                    className={css.batikGoldCollectionImg}
                  />
                  <div className={css.overlay}>
                    <p>
                      Batik Gold ЦЕЙЛОНСЬКИЙ ВИСОКОГІРНИЙ, 50 г, 25 пакетиків
                    </p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.batikGoldCollectionItem}>
              <div className={css.batikGoldCollectionOverlayWrap}>
                <NavLink to="/batik-gold-erl-hrei">
                  <img
                    src={batikGoldImg8}
                    alt="пачка чаю Батік Голд Ерл Грей"
                    className={css.batikGoldCollectionImg}
                  />
                  <div className={css.overlay}>
                    <p>Batik Gold ЕРЛ ГРЕЙ, 50 г, 25 пакетиків</p>
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

import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import krupnolystovyi150 from "../../../images/batik/classic/13.png";
import css from "./Krupnolystovyi150.module.css";

export default function Krupnolystovyi150() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.krupnolystovyi150Section}>
        <div className="container">
          <div className={css.krupnolystovyi150Box}>
            <img
              src={krupnolystovyi150}
              alt="пачка чаю Батік крупнолистовий стандарт O.P.A. 150 грам в м'якій упаковці"
              className={css.krupnolystovyi150Img}
            />
            <div className={css.krupnolystovyi150Wrapper}>
              <h1 className={css.krupnolystovyi150Title}>
                Batik <br />
                <span>КРУПНОЛИСТОВИЙ (О.Р.А)</span>
              </h1>
              <h2 className={css.krupnolystovyi150Subtitle}>
                Чай чорний цейлонський крупнолистовий,
                <br />
                150г, м/у
              </h2>
              <p className={css.krupnolystovyi150Text}>
                Чорний Крупнолистовий чай стандарту «O.P.А.» (Orange Pekoe A.) –
                чай найвищої якості, для створення якого використовується лише
                велике цілісне листя з верхівок чайного куща. Тендітний, майже
                шовковий, смак цього чаю з легким фруктовим відтінком особливо
                цінується шанувальниками затишного вечірнього чаювання.
              </p>
              <p className={css.krupnolystovyi150Text}>
                Терпкий та насичений смак, ніжний квітково – солодовий аромат.
              </p>
              <ul className={css.krupnolystovyi150List}>
                <li className={css.krupnolystovyi150Item}>
                  <p className={css.krupnolystovyi150ItemText}>
                    Різновид чаю: чорний чай
                  </p>
                </li>
                <li className={css.krupnolystovyi150Item}>
                  <p className={css.krupnolystovyi150ItemText}>
                    Маса нетто: 150 г
                  </p>
                </li>
                <li className={css.krupnolystovyi150Item}>
                  <p className={css.krupnolystovyi150ItemText}>
                    Країна походження: Шрі-Ланка (о. Цейлон)
                  </p>
                </li>
                <li className={css.krupnolystovyi150Item}>
                  <p className={css.krupnolystovyi150ItemText}>
                    Форма випуску: розсипний
                  </p>
                </li>
                <li className={css.krupnolystovyi150Item}>
                  <p className={css.krupnolystovyi150ItemText}>
                    Тип упаковки: м’яка упаковка
                  </p>
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

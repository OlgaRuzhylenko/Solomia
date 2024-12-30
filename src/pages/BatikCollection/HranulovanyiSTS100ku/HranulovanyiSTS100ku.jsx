import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import hranulovanyiSTS100ku from "../../../images/batik/classic/6.jpg";
import css from "./HranulovanyiSTS100ku.module.css";

export default function HranulovanyiSTS100ku() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.hranulovanyiSTS100kuSection}>
        <div className="container">
          <div className={css.hranulovanyiSTS100kuBox}>
            <img
              src={hranulovanyiSTS100ku}
              alt="пачка чаю Батік гранульований стандарт С.Т.С. 100 грам в картонній упаковці"
              className={css.hranulovanyiSTS100kuImg}
            />
            <div className={css.hranulovanyiSTS100kuWrapper}>
              <h1 className={css.hranulovanyiSTS100kuTitle}>
                Batik <br />
                <span>ГРАНУЛЬОВАНИЙ (С.Т.С)</span>
              </h1>
              <h2 className={css.hranulovanyiSTS100kuSubtitle}>
                Чай чорний цейлонський гранульований,
                <br />
                100г
              </h2>
              <p className={css.hranulovanyiSTS100kuText}>
                Чорний чай стандарту «С.Т.С.» (від англійського Crush, Tear and
                Curl – давити, рвати, скручувати) виготовляється з молодого
                верхнього чайного листя, яке ріжеться та скручується у гранули
                за спеціальною технологією. Саме такий спосіб обробки дозволяє
                швидко отримувати найміцніший чай інтенсивного кольору, для чого
                знадобиться його зовсім невелика кількість.
              </p>
              <p className={css.hranulovanyiSTS100kuText}>
                Міцний та насичений смак з пряним ароматом.
              </p>
              <ul className={css.hranulovanyiSTS100kuList}>
                <li className={css.hranulovanyiSTS100kuItem}>
                  <p className={css.hranulovanyiSTS100kuItemText}>
                    Різновид чаю: чорний чай
                  </p>
                </li>
                <li className={css.hranulovanyiSTS100kuItem}>
                  <p className={css.hranulovanyiSTS100kuItemText}>
                    Маса нетто: 100 г
                  </p>
                </li>
                <li className={css.hranulovanyiSTS100kuItem}>
                  <p className={css.hranulovanyiSTS100kuItemText}>
                    Країна походження: Шрі-Ланка (о. Цейлон)
                  </p>
                </li>
                <li className={css.hranulovanyiSTS100kuItem}>
                  <p className={css.hranulovanyiSTS100kuItemText}>
                    Форма випуску: розсипний
                  </p>
                </li>
                <li className={css.hranulovanyiSTS100kuItem}>
                  <p className={css.hranulovanyiSTS100kuItemText}>
                    Тип упаковки: картонна
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

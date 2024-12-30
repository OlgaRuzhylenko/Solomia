import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import hranulovanyiSTS100mu from "../../../images/batik/classic/5.jpg";
import css from "./HranulovanyiSTS100mu.module.css";

export default function HranulovanyiSTS100mu() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.hranulovanyiSTS100muSection}>
        <div className="container">
          <div className={css.hranulovanyiSTS100muBox}>
            <img
              src={hranulovanyiSTS100mu}
              alt="пачка чаю Батік гранульований стандарт С.Т.С. 100 грам в м'якій упаковці"
              className={css.hranulovanyiSTS100muImg}
            />
            <div className={css.hranulovanyiSTS100muWrapper}>
              <h1 className={css.hranulovanyiSTS100muTitle}>
                Batik <br />
                <span>ГРАНУЛЬОВАНИЙ (С.Т.С)</span>
              </h1>
              <h2 className={css.hranulovanyiSTS100muSubtitle}>
                Чай чорний цейлонський гранульований,
                <br />
                100г, м/у
              </h2>
              <p className={css.hranulovanyiSTS100muText}>
                Чорний чай стандарту «С.Т.С.» (від англійського Crush, Tear and
                Curl – давити, рвати, скручувати) виготовляється з молодого
                верхнього чайного листя, яке ріжеться та скручується у гранули
                за спеціальною технологією. Саме такий спосіб обробки дозволяє
                швидко отримувати найміцніший чай інтенсивного кольору, для чого
                знадобиться його зовсім невелика кількість.
              </p>
              <p className={css.hranulovanyiSTS100muText}>
                Міцний та насичений смак з пряним ароматом.
              </p>
              <ul className={css.hranulovanyiSTS100muList}>
                <li className={css.hranulovanyiSTS100muItem}>
                  <p className={css.hranulovanyiSTS100muItemText}>
                    Різновид чаю: чорний чай
                  </p>
                </li>
                <li className={css.hranulovanyiSTS100muItem}>
                  <p className={css.hranulovanyiSTS100muItemText}>
                    Маса нетто: 100 г
                  </p>
                </li>
                <li className={css.hranulovanyiSTS100muItem}>
                  <p className={css.hranulovanyiSTS100muItemText}>
                    Країна походження: Шрі-Ланка (о. Цейлон)
                  </p>
                </li>
                <li className={css.hranulovanyiSTS100muItem}>
                  <p className={css.hranulovanyiSTS100muItemText}>
                    Форма випуску: розсипний
                  </p>
                </li>
                <li className={css.hranulovanyiSTS100muItem}>
                  <p className={css.hranulovanyiSTS100muItemText}>
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

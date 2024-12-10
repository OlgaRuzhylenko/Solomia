import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import hranulovanyiSTS250mu from "../../../images/batik/classic/4.png";
import css from "./HranulovanyiSTS250mu.module.css";

export default function HranulovanyiSTS250mu() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.hranulovanyiSTS250muSection}>
        <div className="container">
          <div className={css.hranulovanyiSTS250muBox}>
            <img
              src={hranulovanyiSTS250mu}
              alt="пачка чаю Батік гранульований стандарт С.Т.С. 250 грам в м'якій упаковці"
              className={css.hranulovanyiSTS250muImg}
            />
            <div className={css.hranulovanyiSTS250muWrapper}>
              <h1 className={css.hranulovanyiSTS250muTitle}>
                Batik <br />
                <span>ГРАНУЛЬОВАНИЙ (С.Т.С)</span>
              </h1>
              <h2 className={css.hranulovanyiSTS250muSubtitle}>
                Чай чорний цейлонський гранульований,
                <br />
                250г, м/у
              </h2>
              <p className={css.hranulovanyiSTS250muText}>
                Чорний чай стандарту «С.Т.С.» (від англійського Crush, Tear and
                Curl – давити, рвати, скручувати) виготовляється з молодого
                верхнього чайного листя, яке ріжеться та скручується у гранули
                за спеціальною технологією. Саме такий спосіб обробки дозволяє
                швидко отримувати найміцніший чай інтенсивного кольору, для чого
                знадобиться його зовсім невелика кількість.
              </p>
              <p className={css.hranulovanyiSTS250muText}>
                Міцний та насичений смак з пряним ароматом.
              </p>
              <ul className={css.hranulovanyiSTS250muList}>
                <li className={css.hranulovanyiSTS250muItem}>
                  <p className={css.hranulovanyiSTS250muItemText}>
                    Різновид чаю: чорний чай
                  </p>
                </li>
                <li className={css.hranulovanyiSTS250muItem}>
                  <p className={css.hranulovanyiSTS250muItemText}>
                    Маса нетто: 250 г
                  </p>
                </li>
                <li className={css.hranulovanyiSTS250muItem}>
                  <p className={css.hranulovanyiSTS250muItemText}>
                    Країна походження: Шрі-Ланка (о. Цейлон)
                  </p>
                </li>
                <li className={css.hranulovanyiSTS250muItem}>
                  <p className={css.hranulovanyiSTS250muItemText}>
                    Форма випуску: розсипний
                  </p>
                </li>
                <li className={css.hranulovanyiSTS250muItem}>
                  <p className={css.hranulovanyiSTS250muItemText}>
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

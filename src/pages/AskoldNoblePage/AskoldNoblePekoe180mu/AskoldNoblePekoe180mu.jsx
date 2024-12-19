import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import askoldNoblePekoe180mu from "../../../images/askold/askoldNoble/9.png";
import css from "./AskoldNoblePekoe180mu.module.css";

export default function AskoldNoblePekoe180mu() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.askoldNoblePekoe180muSection}>
        <div className="container">
          <div className={css.askoldNoblePekoe180muBox}>
            <img
              src={askoldNoblePekoe180mu}
              alt="пачка чаю Askold Noble Tea pekoe, 180 г"
              className={css.askoldNoblePekoe180muImg}
            />
            <div className={css.askoldNoblePekoe180muWrapper}>
              <h1 className={css.askoldNoblePekoe180muTitle}>
                Askold Noble Tea
                <br />
                <span>ПЕКОЕ ГОЛД</span>
              </h1>
              <h2 className={css.askoldNoblePekoe180muSubtitle}>
                Чай чорний цейлонський листовий,
                <br />
                180 г, м/у
              </h2>
              <p className={css.askoldNoblePekoe180muText}>
                Askold Pekoe Gold – це листовий чорний цейлонський чай ґатунку
                «Букет» стандарту «Pekoe» з особливо скрученого чайного листя,
                що додає напою виразнішого аромату та терпкішого смаку.
              </p>
              <ul className={css.askoldNoblePekoe180muList}>
                <li className={css.askoldNoblePekoe180muItem}>
                  <p className={css.askoldNoblePekoe180muItemText}>
                    Різновид чаю: чорний чай
                  </p>
                </li>
                <li className={css.askoldNoblePekoe180muItem}>
                  <p className={css.askoldNoblePekoe180muItemText}>
                    Маса нетто: 180 г
                  </p>
                </li>
                <li className={css.askoldNoblePekoe180muItem}>
                  <p className={css.askoldNoblePekoe180muItemText}>
                    Країна походження: Шрі-Ланка (о. Цейлон)
                  </p>
                </li>
                <li className={css.askoldNoblePekoe180muItem}>
                  <p className={css.askoldNoblePekoe180muItemText}>
                    Форма випуску: розсипний
                  </p>
                </li>
                <li className={css.askoldNoblePekoe180muItem}>
                  <p className={css.askoldNoblePekoe180muItemText}>
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

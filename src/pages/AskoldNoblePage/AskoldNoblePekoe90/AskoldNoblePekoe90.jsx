import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import askoldNoblePekoe90 from "../../../images/askold/askoldNoble/6.png";
import css from "./AskoldNoblePekoe90.module.css";

export default function AskoldaskoldNoblePekoe90() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.askoldNoblePekoe90Section}>
        <div className="container">
          <div className={css.askoldNoblePekoe90Box}>
            <img
              src={askoldNoblePekoe90}
              alt="пачка чаю Askold Noble Tea pekoe, 90 г"
              className={css.askoldNoblePekoe90Img}
            />
            <div className={css.askoldNoblePekoe90Wrapper}>
              <h1 className={css.askoldNoblePekoe90Title}>
                Askold Noble Tea
                <br />
                <span>ПЕКОЕ ГОЛД (PEKOE GOLD)</span>
              </h1>
              <h2 className={css.askoldNoblePekoe90Subtitle}>
                Чай чорний цейлонський листовий,
                <br />
                90 г
              </h2>
              <p className={css.askoldNoblePekoe90Text}>
                Askold Pekoe Gold – це листовий чорний цейлонський чай ґатунку
                «Букет» стандарту «Pekoe» з особливо скрученого чайного листя,
                що додає напою виразнішого аромату та терпкішого смаку.
              </p>
              <ul className={css.askoldNoblePekoe90List}>
                <li className={css.askoldNoblePekoe90Item}>
                  <p className={css.askoldNoblePekoe90ItemText}>
                    Різновид чаю: чорний чай
                  </p>
                </li>
                <li className={css.askoldNoblePekoe90Item}>
                  <p className={css.askoldNoblePekoe90ItemText}>
                    Маса нетто: 90 г
                  </p>
                </li>
                <li className={css.askoldNoblePekoe90Item}>
                  <p className={css.askoldNoblePekoe90ItemText}>
                    Країна походження: Шрі-Ланка (о. Цейлон)
                  </p>
                </li>
                <li className={css.askoldNoblePekoe90Item}>
                  <p className={css.askoldNoblePekoe90ItemText}>
                    Форма випуску: розсипний
                  </p>
                </li>
                <li className={css.askoldNoblePekoe90Item}>
                  <p className={css.askoldNoblePekoe90ItemText}>
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

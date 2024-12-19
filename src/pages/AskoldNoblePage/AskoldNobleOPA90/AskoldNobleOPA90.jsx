import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import askoldNobleOPA90 from "../../../images/askold/askoldNoble/7.png";
import css from "./AskoldNobleOPA90.module.css";

export default function AskoldNobleOPA90() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.askoldNobleOPA90Section}>
        <div className="container">
          <div className={css.askoldNobleOPA90Box}>
            <img
              src={askoldNobleOPA90}
              alt="пачка чаю Askold Noble Tea OPA, 90 г"
              className={css.askoldNobleOPA90Img}
            />
            <div className={css.askoldNobleOPA90Wrapper}>
              <h1 className={css.askoldNobleOPA90Title}>
                Askold Noble Tea
                <br />
                <span>КРУПНИЙ ЛИСТ (O.P.А.)</span>
              </h1>
              <h2 className={css.askoldNobleOPA90Subtitle}>
                Чай чорний цейлонський крупнолистовий,
                <br />
                90 г
              </h2>
              <p className={css.askoldNobleOPA90Text}>
                Askold O.P.А. – це крупнолистовий чорний цейлонський чай «Orange
                Pekoe A» ґатунку «Букет» з приємним насиченим терпким смаком та
                яскравим солодовим ароматом.
              </p>
              <ul className={css.askoldNobleOPA90List}>
                <li className={css.askoldNobleOPA90Item}>
                  <p className={css.askoldNobleOPA90ItemText}>
                    Різновид чаю: чорний чай
                  </p>
                </li>
                <li className={css.askoldNobleOPA90Item}>
                  <p className={css.askoldNobleOPA90ItemText}>
                    Маса нетто: 90 г
                  </p>
                </li>
                <li className={css.askoldNobleOPA90Item}>
                  <p className={css.askoldNobleOPA90ItemText}>
                    Країна походження: Шрі-Ланка (о. Цейлон)
                  </p>
                </li>
                <li className={css.askoldNobleOPA90Item}>
                  <p className={css.askoldNobleOPA90ItemText}>
                    Форма випуску: розсипний
                  </p>
                </li>
                <li className={css.askoldNobleOPA90Item}>
                  <p className={css.askoldNobleOPA90ItemText}>
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

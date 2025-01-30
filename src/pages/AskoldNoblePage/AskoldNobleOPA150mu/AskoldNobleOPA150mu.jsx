import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import askoldNobleOPA150mu from "../../../images/askold/askoldNoble/10.jpg";
import css from "./AskoldNobleOPA150mu.module.css";

export default function AskoldNobleOPA150mu() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.askoldNobleOPA150muSection}>
        <div className="container">
          <div className={css.askoldNobleOPA150muBox}>
            <img
              src={askoldNobleOPA150mu}
              alt="пачка чаю Askold Noble Tea OPA, 150 г"
              className={css.askoldNobleOPA150muImg}
            />
            <div className={css.askoldNobleOPA150muWrapper}>
              <h1 className={css.askoldNobleOPA150muTitle}>
                Askold Noble Tea
                <br />
                <span>КРУПНИЙ ЛИСТ (О.Р.А.)</span>
              </h1>
              <h2 className={css.askoldNobleOPA150muSubtitle}>
                Чай чорний цейлонський крупнолистовий,
                <br />
                150 г, м/у
              </h2>
              <p className={css.askoldNobleOPA150muText}>
                Askold O.P.А. – це крупнолистовий чорний цейлонський чай «Orange
                Pekoe A» ґатунку «Букет» з приємним насиченим терпким смаком та
                яскравим солодовим ароматом.
              </p>
              <ul className={css.askoldNobleOPA150muList}>
                <li className={css.askoldNobleOPA150muItem}>
                  <p className={css.askoldNobleOPA150muItemText}>
                    Різновид чаю: чорний чай
                  </p>
                </li>
                <li className={css.askoldNobleOPA150muItem}>
                  <p className={css.askoldNobleOPA150muItemText}>
                    Маса нетто: 150 г
                  </p>
                </li>
                <li className={css.askoldNobleOPA150muItem}>
                  <p className={css.askoldNobleOPA150muItemText}>
                    Країна походження: Шрі-Ланка (о. Цейлон)
                  </p>
                </li>
                <li className={css.askoldNobleOPA150muItem}>
                  <p className={css.askoldNobleOPA150muItemText}>
                    Форма випуску: розсипний
                  </p>
                </li>
                <li className={css.askoldNobleOPA150muItem}>
                  <p className={css.askoldNobleOPA150muItemText}>
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

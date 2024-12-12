import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import krupnyiLystOPAImg from "../../../images/batik/batik-gold/2.png";
import css from "./KrupnyiLystOPA.module.css";

export default function KrupnyiLystOPA() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.krupnyiLystOPASection}>
        <div className="container">
          <div className={css.krupnyiLystOPABox}>
            <img
              src={krupnyiLystOPAImg}
              alt="пачка чаю Батік Крупний Лист OPA 100 г"
              className={css.krupnyiLystOPAImg}
            />
            <div className={css.krupnyiLystOPAWrapper}>
              <h1 className={css.krupnyiLystOPATitle}>
                Batik GOLD <br />
                <span>КРУПНИЙ ЛИСТ (O.P.A.)</span>
              </h1>
              <h2 className={css.krupnyiLystOPASubtitle}>
                Чай чорний цейлонський крупнолистовий,
                <br />
                100 г
              </h2>
              <p className={css.krupnyiLystOPAText}>
                Крупнолистовий чай стандарту «O.P.А.» (Orange Pekoe A.) – чай
                найвищої якості, для створення якого використовується лише
                велике цілісне листя з верхівок чайного куща. Тендітний, майже
                шовковий, смак цього чаю з легким фруктовим відтінком особливо
                цінується шанувальниками затишного вечірнього чаювання.
              </p>
              <ul className={css.krupnyiLystOPAList}>
                <li className={css.krupnyiLystOPAItem}>
                  <p className={css.krupnyiLystOPAItemText}>
                    Різновид чаю: чорний чай
                  </p>
                </li>
                <li className={css.krupnyiLystOPAItem}>
                  <p className={css.krupnyiLystOPAItemText}>
                    Маса нетто: 100 г
                  </p>
                </li>
                <li className={css.krupnyiLystOPAItem}>
                  <p className={css.krupnyiLystOPAItemText}>
                    Країна походження: Шрі-Ланка (о. Цейлон)
                  </p>
                </li>
                <li className={css.krupnyiLystOPAItem}>
                  <p className={css.krupnyiLystOPAItemText}>
                    Форма випуску: розсипний
                  </p>
                </li>
                <li className={css.krupnyiLystOPAItem}>
                  <p className={css.krupnyiLystOPAItemText}>
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

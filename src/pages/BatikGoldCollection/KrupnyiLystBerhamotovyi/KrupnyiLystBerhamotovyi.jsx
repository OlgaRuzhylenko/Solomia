import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import krupnyiLystBerhamotovyiImg from "../../../images/batik/batik-gold/1.jpg";
import css from "./KrupnyiLystBerhamotovyi.module.css";

export default function KrupnyiLystBerhamotovyi() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.krupnyiLystBerhamotovyiSection}>
        <div className="container">
          <div className={css.krupnyiLystBerhamotovyiBox}>
            <img
              src={krupnyiLystBerhamotovyiImg}
              alt="пачка чаю Батік Крупний Лист Бергамотовий букет 100 г"
              className={css.krupnyiLystBerhamotovyiImg}
            />
            <div className={css.krupnyiLystBerhamotovyiWrapper}>
              <h1 className={css.krupnyiLystBerhamotovyiTitle}>
                Batik GOLD <br />
                <span>КРУПНИЙ ЛИСТ БЕРГАМОТОВИЙ</span>
              </h1>
              <h2 className={css.krupnyiLystBerhamotovyiSubtitle}>
                Чай чорний цейлонський крупнолистовий з ароматом бергамота,
                <br />
                100 г
              </h2>
              <p className={css.krupnyiLystBerhamotovyiText}>
                Крупнолистовий Бергамотовий чай стандарту «O.P.А.» (Orange Pekoe
                A.) – чай найвищої якості, для створення якого використовується
                лише велике цілісне листя з верхівок чайного куща. Тендітний
                смак цього чаю у поєднанні з вишуканим ароматом бергамоту
                прийдеться до смаку всім шанувальникам затишного чаювання.
              </p>
              <ul className={css.krupnyiLystBerhamotovyiList}>
                <li className={css.krupnyiLystBerhamotovyiItem}>
                  <p className={css.krupnyiLystBerhamotovyiItemText}>
                    Різновид чаю: чорний чай ароматизований
                  </p>
                </li>
                <li className={css.krupnyiLystBerhamotovyiItem}>
                  <p className={css.krupnyiLystBerhamotovyiItemText}>
                    Маса нетто: 100 г
                  </p>
                </li>
                <li className={css.krupnyiLystBerhamotovyiItem}>
                  <p className={css.krupnyiLystBerhamotovyiItemText}>
                    Країна походження: Шрі-Ланка (о. Цейлон)
                  </p>
                </li>
                <li className={css.krupnyiLystBerhamotovyiItem}>
                  <p className={css.krupnyiLystBerhamotovyiItemText}>
                    Форма випуску: розсипний
                  </p>
                </li>
                <li className={css.krupnyiLystBerhamotovyiItem}>
                  <p className={css.krupnyiLystBerhamotovyiItemText}>
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

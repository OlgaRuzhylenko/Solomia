import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import erlHreiImg from "../../../images/batik/classic/3.png";
import css from "./ErlHrei.module.css";

export default function ErlHrei() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.erlHreiSection}>
        <div className="container">
          <div className={css.erlHreiBox}>
            <img
              src={erlHreiImg}
              alt="пачка чаю Батік Ерл Грей"
              className={css.erlHreiImg}
            />
            <div className={css.erlHreiWrapper}>
              <h1 className={css.erlHreiTitle}>
                Batik <br />
                <span>ЕРЛ ГРЕЙ</span>
              </h1>
              <h2 className={css.erlHreiSubtitle}>
                Чай чорний купажований дрібний з ароматом бергамота,
                <br />
                25 пакетиків
              </h2>
              <p className={css.erlHreiText}>
                Вишукана та класична чайна композицію, в якій витончений
                цитрусовий аромат бергамоту гармонійно поєднаний з насиченим і
                терпким смаком чорних чаїв з найкращих плантацій Цейлону і
                Кенії.
              </p>
              <ul className={css.erlHreiList}>
                <li className={css.erlHreiItem}>
                  <p className={css.erlHreiText}>
                    Різновид чаю: чорний ароматизований
                  </p>
                </li>
                <li className={css.erlHreiItem}>
                  <p className={css.erlHreiText}>Маса нетто: 37,5 г</p>
                </li>
                <li className={css.erlHreiItem}>
                  <p className={css.erlHreiText}>
                    Кількість пакетиків: 25 штук
                  </p>
                </li>
                <li className={css.erlHreiItem}>
                  <p className={css.erlHreiText}>
                    Країна походження: Індія, Шрі-Ланка (о. Цейлон)
                  </p>
                </li>
                <li className={css.erlHreiItem}>
                  <p className={css.erlHreiText}>
                    Форма випуску: пакетований з ярликом
                  </p>
                </li>
                <li className={css.erlHreiItem}>
                  <p className={css.erlHreiText}>Тип упаковки: картонна</p>
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

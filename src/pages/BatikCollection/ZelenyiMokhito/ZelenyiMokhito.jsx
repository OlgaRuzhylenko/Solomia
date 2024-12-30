import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import zelenyiMokhitoImg from "../../../images/batik/classic/23.jpg";
import css from "./ZelenyiMokhito.module.css";

export default function ZelenyiMokhito() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.zelenyiMokhitoSection}>
        <div className="container">
          <div className={css.zelenyiMokhitoBox}>
            <img
              src={zelenyiMokhitoImg}
              alt="пачка чаю Батік Зелений Мохіто 25 пакетиків"
              className={css.zelenyiMokhitoImg}
            />
            <div className={css.zelenyiMokhitoWrapper}>
              <h1 className={css.zelenyiMokhitoTitle}>
                Batik <br />
                <span>ЗЕЛЕНИЙ МОХІТТО</span>
              </h1>
              <h2 className={css.zelenyiMokhitoSubtitle}>
                Чай зелений китайський дрібний з м’ятою та цедрою цитрусових
                ароматизований,
                <br />
                25 пакетиків
              </h2>
              <p className={css.zelenyiMokhitoText}>
                Освіжаюча та яскрава композиція, у якій відтворений смак
                улюбленого всіма освіжаючого коктейлю Мохіто. Зелений чай з
                найкращих чайних плантацій, м’ята, цедра цитрусових доповнені
                соковитими ароматами лайма та лимону. Свіжість та насолода у
                кожній чашці!
              </p>
              <ul className={css.zelenyiMokhitoList}>
                <li className={css.zelenyiMokhitoItem}>
                  <p className={css.zelenyiMokhitoItemText}>
                    Різновид чаю: зелений ароматизований
                  </p>
                </li>
                <li className={css.zelenyiMokhitoItem}>
                  <p className={css.zelenyiMokhitoItemText}>
                    Маса нетто: 37,5 г
                  </p>
                </li>
                <li className={css.zelenyiMokhitoItem}>
                  <p className={css.zelenyiMokhitoItemText}>
                    Кількість пакетиків: 25 штук
                  </p>
                </li>
                <li className={css.zelenyiMokhitoItem}>
                  <p className={css.zelenyiMokhitoItemText}>
                    Країна походження: Китай
                  </p>
                </li>
                <li className={css.zelenyiMokhitoItem}>
                  <p className={css.zelenyiMokhitoItemText}>
                    Форма випуску: пакетований з ярликом
                  </p>
                </li>
                <li className={css.zelenyiMokhitoItem}>
                  <p className={css.zelenyiMokhitoItemText}>
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

import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import champagneSpillsImg from "../../../images/askold/askoldEmotion/4.png";
import css from "./ChampagneSpills.module.css";

export default function ChampagneSpills() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.champagneSpillsSection}>
        <div className="container">
          <div className={css.champagneSpillsBox}>
            <img
              src={champagneSpillsImg}
              alt="пачка чаю Askold Emotion Lippy Fruit 20 конвертів"
              className={css.champagneSpillsImg}
            />
            <div className={css.champagneSpillsWrapper}>
              <h1 className={css.champagneSpillsTitle}>
                Askold Emotion <br />
                <span>CHAMPAGNE SPILLS</span>
              </h1>
              <h2 className={css.champagneSpillsSubtitle}>
                Чай чорний та зелений дрібний з полуницею і пелюстками волошки
                ароматизований,
                <br />
                20 пакетиків у конвертах
              </h2>
              <p className={css.champagneSpillsText}>
                Танець чорного і зеленого чаю під полуничну музику огортає
                м’яким теплом, а легкий аромат шампанського додає святковий
                настрій.
              </p>
              <ul className={css.champagneSpillsList}>
                <li className={css.champagneSpillsItem}>
                  <p className={css.champagneSpillsItemText}>
                    Різновид чаю: чорний і зелений чай ароматизований
                  </p>
                </li>
                <li className={css.champagneSpillsItem}>
                  <p className={css.champagneSpillsItemText}>
                    Маса нетто: 40 г
                  </p>
                </li>
                <li className={css.champagneSpillsItem}>
                  <p className={css.champagneSpillsItemText}>
                    Кількість пакетиків: 20 штук
                  </p>
                </li>
                <li className={css.champagneSpillsItem}>
                  <p className={css.champagneSpillsItemText}>
                    Країна походження: Шрі-Ланка (о.Цейлон), Китай
                  </p>
                </li>
                <li className={css.champagneSpillsItem}>
                  <p className={css.champagneSpillsItemText}>
                    Форма випуску: пакетований з ярликом у конвертах
                  </p>
                </li>
                <li className={css.champagneSpillsItem}>
                  <p className={css.champagneSpillsItemText}>
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

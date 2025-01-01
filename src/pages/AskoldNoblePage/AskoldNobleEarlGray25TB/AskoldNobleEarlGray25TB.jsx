import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import askoldNobleEarlGray50 from "../../../images/askold/askoldNoble/2.jpg";
import css from "./AskoldNobleEarlGray25TB.module.css";

export default function AskoldNobleEarlGray25TB() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.askoldNobleEarlGray50Section}>
        <div className="container">
          <div className={css.askoldNobleEarlGray50Box}>
            <img
              src={askoldNobleEarlGray50}
              alt="пачка чаю Askold Noble Tea Ерл Грей, 25 пакетиків"
              className={css.askoldNobleEarlGray50Img}
            />
            <div className={css.askoldNobleEarlGray50Wrapper}>
              <h1 className={css.askoldNobleEarlGray50Title}>
                Askold Noble Tea
                <br />
                <span>ЕРЛ ГРЕЙ</span>
              </h1>
              <h2 className={css.askoldNobleEarlGray50Subtitle}>
                Чай чорний цейлонський дрібний з рослинною сировиною та ароматом
                бергамота,
                <br />
                25 пакетиків
              </h2>
              <p className={css.askoldNobleEarlGray50Text}>
                Шанувальникам витонченого смаку прийдеться до вподоби цей чай,
                виготовлений з цейлонського чаю найвищої якості ґатунку «Букет»
                з додаванням цедри цитрусових, пелюсток квітів та аромату
                бергамота.
              </p>
              <ul className={css.askoldNobleEarlGray50List}>
                <li className={css.askoldNobleEarlGray50Item}>
                  <p className={css.askoldNobleEarlGray50ItemText}>
                    Різновид чаю: чорний ароматизований
                  </p>
                </li>
                <li className={css.askoldNobleEarlGray50Item}>
                  <p className={css.askoldNobleEarlGray50ItemText}>
                    Маса нетто: 50 г
                  </p>
                </li>
                <li className={css.askoldNobleEarlGray50Item}>
                  <p className={css.askoldNobleEarlGray50ItemText}>
                    Кількість пакетиків: 25 штук
                  </p>
                </li>
                <li className={css.askoldNobleEarlGray50Item}>
                  <p className={css.askoldNobleEarlGray50ItemText}>
                    Країна походження: Шрі-Ланка (о. Цейлон)
                  </p>
                </li>
                <li className={css.askoldNobleEarlGray50Item}>
                  <p className={css.askoldNobleEarlGray50ItemText}>
                    Форма випуску: пакетований з ярликом
                  </p>
                </li>
                <li className={css.askoldNobleEarlGray50Item}>
                  <p className={css.askoldNobleEarlGray50ItemText}>
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

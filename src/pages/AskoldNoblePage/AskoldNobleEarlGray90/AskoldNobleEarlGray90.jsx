import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import askoldNobleEarlGray90 from "../../../images/askold/askoldNoble/4.jpg";
import css from "./AskoldNobleEarlGray90.module.css";

export default function AskoldNobleEarlGray90() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.askoldNobleEarlGray90Section}>
        <div className="container">
          <div className={css.askoldNobleEarlGray90Box}>
            <img
              src={askoldNobleEarlGray90}
              alt="пачка чаю Askold Noble Tea Ерл Грей, 90 г"
              className={css.askoldNobleEarlGray90Img}
            />
            <div className={css.askoldNobleEarlGray90Wrapper}>
              <h1 className={css.askoldNobleEarlGray90Title}>
                Askold Noble Tea
                <br />
                <span>ЕРЛ ГРЕЙ</span>
              </h1>
              <h2 className={css.askoldNobleEarlGray90Subtitle}>
                Чай чорний цейлонський листовий з рослинною сировиною та
                ароматом бергамота,
                <br />
                90 г
              </h2>
              <p className={css.askoldNobleEarlGray90Text}>
                Askold Earl Grey – це листовий чорний цейлонський чай ґатунку
                «Букет» стандарту «Flowery Broken Orange Pekoe» з насиченим
                оксамитовим смаком та вишуканим цитрусовим ароматом бергамоту.
              </p>
              <ul className={css.askoldNobleEarlGray90List}>
                <li className={css.askoldNobleEarlGray90Item}>
                  <p className={css.askoldNobleEarlGray90ItemText}>
                    Різновид чаю: чорний ароматизований
                  </p>
                </li>
                <li className={css.askoldNobleEarlGray90Item}>
                  <p className={css.askoldNobleEarlGray90ItemText}>
                    Маса нетто: 90 г
                  </p>
                </li>
                <li className={css.askoldNobleEarlGray90Item}>
                  <p className={css.askoldNobleEarlGray90ItemText}>
                    Країна походження: Шрі-Ланка (о. Цейлон)
                  </p>
                </li>
                <li className={css.askoldNobleEarlGray90Item}>
                  <p className={css.askoldNobleEarlGray90ItemText}>
                    Форма випуску: розсипний
                  </p>
                </li>
                <li className={css.askoldNobleEarlGray90Item}>
                  <p className={css.askoldNobleEarlGray90ItemText}>
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

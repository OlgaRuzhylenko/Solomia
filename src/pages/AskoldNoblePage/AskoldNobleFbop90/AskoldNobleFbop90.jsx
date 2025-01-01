import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import askoldNobleFbop90Img from "../../../images/askold/askoldNoble/5.jpg";
import css from "./AskoldNobleFbop90.module.css";

export default function AskoldNobleFbop90() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.askoldNobleFbop90Section}>
        <div className="container">
          <div className={css.askoldNobleFbop90Box}>
            <img
              src={askoldNobleFbop90Img}
              alt="пачка чаю Askold Noble Tea FBOP, 90 г"
              className={css.askoldNobleFbop90Img}
            />
            <div className={css.askoldNobleFbop90Wrapper}>
              <h1 className={css.askoldNobleFbop90Title}>
                Askold Noble Tea
                <br />
                <span>СЕРЕДНІЙ ЛИСТ (F.B.O.P.)</span>
              </h1>
              <h2 className={css.askoldNobleFbop90Subtitle}>
                Чай чорний цейлонський листовий,
                <br />
                90 г
              </h2>
              <p className={css.askoldNobleFbop90Text}>
                Askold F.B.O.P. – це середньолистовий чорний цейлонський чай
                стандарту «Flowery Broken Orange Pekoe» ґатунку «Букет», в якому
                гармонійно поєднані насичений терпкий смак та яскравий аромат з
                квітковими відтінками
              </p>
              <ul className={css.askoldNobleFbop90List}>
                <li className={css.askoldNobleFbop90Item}>
                  <p className={css.askoldNobleFbop90ItemText}>
                    Різновид чаю: чорний чай
                  </p>
                </li>
                <li className={css.askoldNobleFbop90Item}>
                  <p className={css.askoldNobleFbop90ItemText}>
                    Маса нетто: 90 г
                  </p>
                </li>
                <li className={css.askoldNobleFbop90Item}>
                  <p className={css.askoldNobleFbop90ItemText}>
                    Країна походження: Шрі-Ланка (о. Цейлон)
                  </p>
                </li>
                <li className={css.askoldNobleFbop90Item}>
                  <p className={css.askoldNobleFbop90ItemText}>
                    Форма випуску: розсипний
                  </p>
                </li>
                <li className={css.askoldNobleFbop90Item}>
                  <p className={css.askoldNobleFbop90ItemText}>
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

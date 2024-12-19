import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import askoldNobleFbop180mu from "../../../images/askold/askoldNoble/8.png";
import css from "./AskoldNobleFbop180mu.module.css";

export default function AskoldNobleFbop180mu() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.askoldNobleFbop180muSection}>
        <div className="container">
          <div className={css.askoldNobleFbop180muBox}>
            <img
              src={askoldNobleFbop180mu}
              alt="пачка чаю Askold Noble Tea FBOP, 180 г"
              className={css.askoldNobleFbop180muImg}
            />
            <div className={css.askoldNobleFbop180muWrapper}>
              <h1 className={css.askoldNobleFbop180muTitle}>
                Askold Noble Tea
                <br />
                <span>СЕРЕДНІЙ ЛИСТ (F.B.O.P.)</span>
              </h1>
              <h2 className={css.askoldNobleFbop180muSubtitle}>
                Чай чорний цейлонський листовий,
                <br />
                180 г, м/у
              </h2>
              <p className={css.askoldNobleFbop180muText}>
                Askold F.B.O.P. – це середньолистовий чорний цейлонський чай
                стандарту «Flowery Broken Orange Pekoe» ґатунку «Букет», в якому
                гармонійно поєднані насичений терпкий смак та яскравий аромат з
                квітковими відтінками.
              </p>
              <ul className={css.askoldNobleFbop180muList}>
                <li className={css.askoldNobleFbop180muItem}>
                  <p className={css.askoldNobleFbop180muItemText}>
                    Різновид чаю: чорний чай
                  </p>
                </li>
                <li className={css.askoldNobleFbop180muItem}>
                  <p className={css.askoldNobleFbop180muItemText}>
                    Маса нетто: 180 г
                  </p>
                </li>
                <li className={css.askoldNobleFbop180muItem}>
                  <p className={css.askoldNobleFbop180muItemText}>
                    Країна походження: Шрі-Ланка (о. Цейлон)
                  </p>
                </li>
                <li className={css.askoldNobleFbop180muItem}>
                  <p className={css.askoldNobleFbop180muItemText}>
                    Форма випуску: розсипний
                  </p>
                </li>
                <li className={css.askoldNobleFbop180muItem}>
                  <p className={css.askoldNobleFbop180muItemText}>
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

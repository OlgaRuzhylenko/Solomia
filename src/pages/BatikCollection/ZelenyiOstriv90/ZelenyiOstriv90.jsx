import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import zelenyiOstriv90Img from "../../../images/batik/classic/14.png";
import css from "./ZelenyiOstriv90.module.css";

export default function ZelenyiOstriv90() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.zelenyiOstriv90Section}>
        <div className="container">
          <div className={css.zelenyiOstriv90Box}>
            <img
              src={zelenyiOstriv90Img}
              alt="пачка чаю Батік Зелений Острів 90 грам в картонній упаковці"
              className={css.zelenyiOstriv90Img}
            />
            <div className={css.zelenyiOstriv90Wrapper}>
              <h1 className={css.zelenyiOstriv90Title}>
                Batik <br />
                <span>ЗЕЛЕНИЙ ОСТРІВ</span>
              </h1>
              <h2 className={css.zelenyiOstriv90Subtitle}>
                Чай зелений китайський крупнолистовий,
                <br />
                90 г
              </h2>
              <p className={css.zelenyiOstriv90Text}>
                Променями сонця, прохолодним гірським повітрям та росою сповитий
                кожен молодий листочок чаю, що бережно збирається в ранкову пору
                та перетворюється у неперевершений смарагдовий напій – подарунок
                вічно зеленої країни.
              </p>
              <p className={css.zelenyiOstriv90Text}>
                Терпкий та насичений смак, з характерною гірчинкою та квітковим
                ароматом.
              </p>
              <ul className={css.zelenyiOstriv90List}>
                <li className={css.zelenyiOstriv90Item}>
                  <p className={css.zelenyiOstriv90ItemText}>
                    Різновид чаю: чорний чай
                  </p>
                </li>
                <li className={css.zelenyiOstriv90Item}>
                  <p className={css.zelenyiOstriv90ItemText}>
                    Маса нетто: 150 г
                  </p>
                </li>
                <li className={css.zelenyiOstriv90Item}>
                  <p className={css.zelenyiOstriv90ItemText}>
                    Країна походження: Шрі-Ланка (о. Цейлон)
                  </p>
                </li>
                <li className={css.zelenyiOstriv90Item}>
                  <p className={css.zelenyiOstriv90ItemText}>
                    Форма випуску: розсипний
                  </p>
                </li>
                <li className={css.zelenyiOstriv90Item}>
                  <p className={css.zelenyiOstriv90ItemText}>
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

import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import askoldNobleBlack100 from "../../../images/askold/askoldNoble/3.1.jpg";
import css from "./AskoldNobleBlack100TB.module.css";

export default function AskoldNobleBlack100TB() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.askoldNobleBlack100Section}>
        <div className="container">
          <div className={css.askoldNobleBlack100Box}>
            <img
              src={askoldNobleBlack100}
              alt="пачка чаю Askold Noble Tea чорний чай, 100 пакетиків"
              className={css.askoldNobleBlack100Img}
            />
            <div className={css.askoldNobleBlack100Wrapper}>
              <h1 className={css.askoldNobleBlack100Title}>
                Askold Noble Tea
                <br />
                <span>ЧОРНИЙ ЧАЙ</span>
              </h1>
              <h2 className={css.askoldNobleBlack100Subtitle}>
                Чай чорний цейлонський дрібний,
                <br />
                100 пакетиків
              </h2>
              <p className={css.askoldNobleBlack100Text}>
                Чорний цейлонський Високогірний чай найвищої якості ґатунку
                «Букет» з ідеальним балансом терпкості і міцності та яскравим
                кольором настою.
              </p>
              <ul className={css.askoldNobleBlack100List}>
                <li className={css.askoldNobleBlack100Item}>
                  <p className={css.askoldNobleBlack100ItemText}>
                    Різновид чаю: чорний чай
                  </p>
                </li>
                <li className={css.askoldNobleBlack100Item}>
                  <p className={css.askoldNobleBlack100ItemText}>
                    Маса нетто: 200 г
                  </p>
                </li>
                <li className={css.askoldNobleBlack100Item}>
                  <p className={css.askoldNobleBlack100ItemText}>
                    Кількість пакетиків: 100 штук
                  </p>
                </li>
                <li className={css.askoldNobleBlack100Item}>
                  <p className={css.askoldNobleBlack100ItemText}>
                    Країна походження: Шрі-Ланка (о. Цейлон)
                  </p>
                </li>
                <li className={css.askoldNobleBlack100Item}>
                  <p className={css.askoldNobleBlack100ItemText}>
                    Форма випуску: пакетований з ярликом
                  </p>
                </li>
                <li className={css.askoldNobleBlack100Item}>
                  <p className={css.askoldNobleBlack100ItemText}>
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

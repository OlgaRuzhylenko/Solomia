import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import askoldNobleBlack50 from "../../../images/askold/askoldNoble/3.jpg";
import css from "./AskoldNobleBlack25TB.module.css";

export default function AskoldNobleBlack25TB() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.askoldNobleBlack50Section}>
        <div className="container">
          <div className={css.askoldNobleBlack50Box}>
            <img
              src={askoldNobleBlack50}
              alt="пачка чаю Askold Noble Tea чорний чай, 25 пакетиків"
              className={css.askoldNobleBlack50Img}
            />
            <div className={css.askoldNobleBlack50Wrapper}>
              <h1 className={css.askoldNobleBlack50Title}>
                Askold Noble Tea
                <br />
                <span>ЧОРНИЙ ЧАЙ</span>
              </h1>
              <h2 className={css.askoldNobleBlack50Subtitle}>
                Чай чорний цейлонський дрібний,
                <br />
                25 пакетиків
              </h2>
              <p className={css.askoldNobleBlack50Text}>
                Чорний цейлонський Високогірний чай найвищої якості ґатунку
                «Букет» з ідеальним балансом терпкості і міцності та яскравим
                кольором настою.
              </p>
              <ul className={css.askoldNobleBlack50List}>
                <li className={css.askoldNobleBlack50Item}>
                  <p className={css.askoldNobleBlack50ItemText}>
                    Різновид чаю: чорний чай
                  </p>
                </li>
                <li className={css.askoldNobleBlack50Item}>
                  <p className={css.askoldNobleBlack50ItemText}>
                    Маса нетто: 50 г
                  </p>
                </li>
                <li className={css.askoldNobleBlack50Item}>
                  <p className={css.askoldNobleBlack50ItemText}>
                    Кількість пакетиків: 25 штук
                  </p>
                </li>
                <li className={css.askoldNobleBlack50Item}>
                  <p className={css.askoldNobleBlack50ItemText}>
                    Країна походження: Шрі-Ланка (о. Цейлон)
                  </p>
                </li>
                <li className={css.askoldNobleBlack50Item}>
                  <p className={css.askoldNobleBlack50ItemText}>
                    Форма випуску: пакетований з ярликом
                  </p>
                </li>
                <li className={css.askoldNobleBlack50Item}>
                  <p className={css.askoldNobleBlack50ItemText}>
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

import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import askoldNobleGreenTea50 from "../../../images/askold/askoldNoble/1.jpg";
import css from "./AskoldNobleGreenTea.module.css";

export default function AskoldNobleGreenTea() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.askoldNobleGreenTea50Section}>
        <div className="container">
          <div className={css.askoldNobleGreenTea50Box}>
            <img
              src={askoldNobleGreenTea50}
              alt="пачка чаю Askold Noble Tea зелений чай, 25 пакетиків"
              className={css.askoldNobleGreenTea50Img}
            />
            <div className={css.askoldNobleGreenTea50Wrapper}>
              <h1 className={css.askoldNobleGreenTea50Title}>
                Askold Noble Tea
                <br />
                <span>ЗЕЛЕНИЙ ЧАЙ</span>
              </h1>
              <h2 className={css.askoldNobleGreenTea50Subtitle}>
                Чай зелений китайський дрібний,
                <br />
                25 пакетиків
              </h2>
              <p className={css.askoldNobleGreenTea50Text}>
                Класичний зелений чай, який виготовлений з подрібненого листя
                найкращих сортів китайського чаю ґатунку «Букет» з терпким
                смаком та яскраво вираженим ароматом
              </p>
              <ul className={css.askoldNobleGreenTea50List}>
                <li className={css.askoldNobleGreenTea50Item}>
                  <p className={css.askoldNobleGreenTea50ItemText}>
                    Різновид чаю: зелений чай
                  </p>
                </li>
                <li className={css.askoldNobleGreenTea50Item}>
                  <p className={css.askoldNobleGreenTea50ItemText}>
                    Маса нетто: 43,75 г
                  </p>
                </li>
                <li className={css.askoldNobleGreenTea50Item}>
                  <p className={css.askoldNobleGreenTea50ItemText}>
                    Кількість пакетиків: 25 штук
                  </p>
                </li>
                <li className={css.askoldNobleGreenTea50Item}>
                  <p className={css.askoldNobleGreenTea50ItemText}>
                    Країна походження: Китай
                  </p>
                </li>
                <li className={css.askoldNobleGreenTea50Item}>
                  <p className={css.askoldNobleGreenTea50ItemText}>
                    Форма випуску: пакетований з ярликом
                  </p>
                </li>
                <li className={css.askoldNobleGreenTea50Item}>
                  <p className={css.askoldNobleGreenTea50ItemText}>
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

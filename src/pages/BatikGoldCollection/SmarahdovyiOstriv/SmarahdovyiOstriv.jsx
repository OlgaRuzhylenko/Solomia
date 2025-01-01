import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import smarahdovyiOstrivImg from "../../../images/batik/batik-gold/3.jpg";
import css from "./SmarahdovyiOstriv.module.css";

export default function SmarahdovyiOstriv() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.smarahdovyiOstrivSection}>
        <div className="container">
          <div className={css.smarahdovyiOstrivBox}>
            <img
              src={smarahdovyiOstrivImg}
              alt="пачка чаю Батік Смарагдовий Острів 25 конвертів"
              className={css.smarahdovyiOstrivImg}
            />
            <div className={css.smarahdovyiOstrivWrapper}>
              <h1 className={css.smarahdovyiOstrivTitle}>
                Batik GOLD <br />
                <span>СМАРАГДОВИЙ ОСТРІВ</span>
              </h1>
              <h2 className={css.smarahdovyiOstrivSubtitle}>
                Чай зелений цейлонський дрібний з мʼятою та цедрою цитрусових
                ароматизований,
                <br />
                25 пакетиків у конвертах
              </h2>
              <p className={css.smarahdovyiOstrivText}>
                Кожний молодий листочок, що вирощується високо у горах під
                проміннями цейлонського сонця, перетворюється у неперевершений
                смарагдовий напій. Освіжаюча чайна композиція на основі
                вишуканого зеленого цейлонського чаю з додаванням солодкої м’яти
                та освіжаючих ароматів лимона і лайма – це справжній подарунок
                вічнозеленого острова у вашій чашці.
              </p>
              <ul className={css.smarahdovyiOstrivList}>
                <li className={css.smarahdovyiOstrivItem}>
                  <p className={css.smarahdovyiOstrivItemText}>
                    Різновид чаю: чай зелений ароматизований
                  </p>
                </li>
                <li className={css.smarahdovyiOstrivItem}>
                  <p className={css.smarahdovyiOstrivItemText}>
                    Маса нетто: 37,5 г
                  </p>
                </li>
                <li className={css.smarahdovyiOstrivItem}>
                  <p className={css.smarahdovyiOstrivItemText}>
                    Кількість пакетиків: 25 штук
                  </p>
                </li>
                <li className={css.smarahdovyiOstrivItem}>
                  <p className={css.smarahdovyiOstrivItemText}>
                    Країна походження: Шрі-Ланка (о. Цейлон)
                  </p>
                </li>
                <li className={css.smarahdovyiOstrivItem}>
                  <p className={css.smarahdovyiOstrivItemText}>
                    Форма випуску: пакетований з ярликом у конвертах
                  </p>
                </li>
                <li className={css.smarahdovyiOstrivItem}>
                  <p className={css.smarahdovyiOstrivItemText}>
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

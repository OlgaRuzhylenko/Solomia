import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import tseilonskeSontseImg from "../../../images/batik/batik-gold/6.png";
import css from "./TseilonskeSontse.module.css";

export default function TseilonskeSontse() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.tseilonskeSontseSection}>
        <div className="container">
          <div className={css.tseilonskeSontseBox}>
            <img
              src={tseilonskeSontseImg}
              alt="пачка чаю Батік Голд Цейлонське Сонце"
              className={css.tseilonskeSontseImg}
            />
            <div className={css.tseilonskeSontseWrapper}>
              <h1 className={css.tseilonskeSontseTitle}>
                Batik GOLD <br />
                <span>ЦЕЙЛОНСЬКЕ СОНЦЕ</span>
              </h1>
              <h2 className={css.tseilonskeSontseSubtitle}>
                Чай чорний цейлонський дрібний,
                <br />
                25 пакетиків у конвертах
              </h2>
              <p className={css.tseilonskeSontseText}>
                Batik GOLD ЦЕЙЛОНСЬКЕ СОНЦЕ Чай чорний цейлонський дрібний, 25
                пакетиків у конвертах Подрібнений чорний чай з листя відбірних
                цейлонських чайних кущів, які вирощуються високо у горах. Вони
                вбирають у себе всю сонячну енергію і міць та перетворюються на
                справжній чайний шедевр міцності, терпкості та неперевершеного
                смаку і аромату.
              </p>
              <ul className={css.tseilonskeSontseList}>
                <li className={css.tseilonskeSontseItem}>
                  <p className={css.tseilonskeSontseItemText}>
                    Різновид чаю: чорний чай
                  </p>
                </li>
                <li className={css.tseilonskeSontseItem}>
                  <p className={css.tseilonskeSontseItemText}>
                    Маса нетто: 50 г
                  </p>
                </li>
                <li className={css.tseilonskeSontseItem}>
                  <p className={css.tseilonskeSontseItemText}>
                    Кількість пакетиків: 25 штук
                  </p>
                </li>
                <li className={css.tseilonskeSontseItem}>
                  <p className={css.tseilonskeSontseItemText}>
                    Країна походження: Шрі-Ланка (о. Цейлон)
                  </p>
                </li>
                <li className={css.tseilonskeSontseItem}>
                  <p className={css.tseilonskeSontseItemText}>
                    Форма випуску: пакетований з ярликом у конвертах
                  </p>
                </li>
                <li className={css.tseilonskeSontseItem}>
                  <p className={css.tseilonskeSontseItemText}>
                    Тип упаковки: картонна
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

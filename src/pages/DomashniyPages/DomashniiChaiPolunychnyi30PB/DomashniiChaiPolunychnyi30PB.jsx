import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import domashniiChaiPolunychnyi30PBImg from "../../../images/domashniyChai/7.jpg";
import css from "./DomashniiChaiPolunychnyi30PB.module.css";

export default function DomashniiChaiPolunychnyi30PB() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.domashniiChaiPolunychnyi30PBSection}>
        <div className="container">
          <div className={css.domashniiChaiPolunychnyi30PBBox}>
            <img
              src={domashniiChaiPolunychnyi30PBImg}
              alt="пачка чаю Домашній чай полуничний 30 грам, 20 пакетиків в картонній упаковці"
              className={css.domashniiChaiPolunychnyi30PBImg}
            />
            <div className={css.domashniiChaiPolunychnyi30PBWrapper}>
              <h1 className={css.domashniiChaiPolunychnyi30PBTitle}>
                Домашній чай <br />
                <span>ПОЛУНИЧНИЙ</span>
              </h1>
              <h2 className={css.domashniiChaiPolunychnyi30PBSubtitle}>
                Чай чорний купажований дрібний ароматизований з полуницею,
                <br />
                20 пакетиків
              </h2>
              <p className={css.domashniiChaiPolunychnyi30PBText}>
                Склад: чай чорний байховий індійський дрібний, чай чорний
                байховий аргентинський дрібний, чай чорний байховий
                індонезійський дрібний, полуниця подрібнена (5%), ароматизатор
                «Полуниця».
              </p>
              <ul className={css.domashniiChaiPolunychnyi30PBList}>
                <li className={css.domashniiChaiPolunychnyi30PBItem}>
                  <p className={css.domashniiChaiPolunychnyi30PBItemText}>
                    Різновид чаю: чорний чай ароматизований
                  </p>
                </li>
                <li className={css.domashniiChaiPolunychnyi30PBItem}>
                  <p className={css.domashniiChaiPolunychnyi30PBItemText}>
                    Маса нетто: 30 г
                  </p>
                </li>
                <li className={css.domashniiChaiPolunychnyi30PBItem}>
                  <p className={css.domashniiChaiPolunychnyi30PBItemText}>
                    Кількість пакетиків: 20 штук
                  </p>
                </li>
                <li className={css.domashniiChaiPolunychnyi30PBItem}>
                  <p className={css.domashniiChaiPolunychnyi30PBItemText}>
                    Країна походження: Індія, Аргентина, Індонезія
                  </p>
                </li>
                <li className={css.domashniiChaiPolunychnyi30PBItem}>
                  <p className={css.domashniiChaiPolunychnyi30PBItemText}>
                    Форма випуску: пакетований без ярлику
                  </p>
                </li>
                <li className={css.domashniiChaiPolunychnyi30PBItem}>
                  <p className={css.domashniiChaiPolunychnyi30PBItemText}>
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

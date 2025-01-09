import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import domashniiChaiBerhamotovyi30PBImg from "../../../images/domashniyChai/8.png";
import css from "./DomashniiChaiBerhamotovyi30PB.module.css";

export default function DomashniiChaiBerhamotovyi30PB() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.domashniiChaiBerhamotovyi30PBSection}>
        <div className="container">
          <div className={css.domashniiChaiBerhamotovyi30PBBox}>
            <img
              src={domashniiChaiBerhamotovyi30PBImg}
              alt="пачка чаю Домашній чай бергамотовий 30 грам, 20 пакетиків в картонній упаковці"
              className={css.domashniiChaiBerhamotovyi30PBImg}
            />
            <div className={css.domashniiChaiBerhamotovyi30PBWrapper}>
              <h1 className={css.domashniiChaiBerhamotovyi30PBTitle}>
                Домашній чай <br />
                <span>БЕРГАМОТОВИЙ</span>
              </h1>
              <h2 className={css.domashniiChaiBerhamotovyi30PBSubtitle}>
                Чай чорний купажований дрібний з ароматом бергамота,
                <br />
                20 пакетиків
              </h2>
              <p className={css.domashniiChaiBerhamotovyi30PBText}>
                Склад: чай чорний байховий індійський дрібний, чай чорний
                байховий аргентинський дрібний, чай чорний байховий
                індонезійський дрібний, ароматизатор «Бергамот».
              </p>
              <ul className={css.domashniiChaiBerhamotovyi30PBList}>
                <li className={css.domashniiChaiBerhamotovyi30PBItem}>
                  <p className={css.domashniiChaiBerhamotovyi30PBItemText}>
                    Різновид чаю: чорний чай ароматизований
                  </p>
                </li>
                <li className={css.domashniiChaiBerhamotovyi30PBItem}>
                  <p className={css.domashniiChaiBerhamotovyi30PBItemText}>
                    Маса нетто: 30 г
                  </p>
                </li>
                <li className={css.domashniiChaiBerhamotovyi30PBItem}>
                  <p className={css.domashniiChaiBerhamotovyi30PBItemText}>
                    Кількість пакетиків: 20 штук
                  </p>
                </li>
                <li className={css.domashniiChaiBerhamotovyi30PBItem}>
                  <p className={css.domashniiChaiBerhamotovyi30PBItemText}>
                    Країна походження: Індія, Аргентина, Індонезія
                  </p>
                </li>
                <li className={css.domashniiChaiBerhamotovyi30PBItem}>
                  <p className={css.domashniiChaiBerhamotovyi30PBItemText}>
                    Форма випуску: пакетований без ярлику
                  </p>
                </li>
                <li className={css.domashniiChaiBerhamotovyi30PBItem}>
                  <p className={css.domashniiChaiBerhamotovyi30PBItemText}>
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

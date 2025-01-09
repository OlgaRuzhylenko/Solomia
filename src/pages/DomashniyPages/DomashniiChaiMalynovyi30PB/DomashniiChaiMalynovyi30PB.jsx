import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import domashniiChaiMalynovyi30PBImg from "../../../images/domashniyChai/3.png";
import css from "./DomashniiChaiMalynovyi30PB.module.css";

export default function DomashniiChaiMalynovyi30PB() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.domashniiChaiMalynovyi30PBSection}>
        <div className="container">
          <div className={css.domashniiChaiMalynovyi30PBBox}>
            <img
              src={domashniiChaiMalynovyi30PBImg}
              alt="пачка чаю Домашній чай малиновий 30 грам, 20 пакетиків в картонній упаковці"
              className={css.domashniiChaiMalynovyi30PBImg}
            />
            <div className={css.domashniiChaiMalynovyi30PBWrapper}>
              <h1 className={css.domashniiChaiMalynovyi30PBTitle}>
                Домашній чай <br />
                <span>МАЛИНОВИЙ</span>
              </h1>
              <h2 className={css.domashniiChaiMalynovyi30PBSubtitle}>
                Чай чорний купажований дрібний ароматизований з малиною,
                <br />
                20 пакетиків
              </h2>
              <p className={css.domashniiChaiMalynovyi30PBText}>
                Склад: чай чорний байховий індійський дрібний, чай чорний
                байховий аргентинський дрібний, чай чорний байховий
                індонезійський дрібний, малина подрібнена (5%), ароматизатор
                «Малина».
              </p>
              <ul className={css.domashniiChaiMalynovyi30PBList}>
                <li className={css.domashniiChaiMalynovyi30PBItem}>
                  <p className={css.domashniiChaiMalynovyi30PBItemText}>
                    Різновид чаю: чорний чай ароматизований
                  </p>
                </li>
                <li className={css.domashniiChaiMalynovyi30PBItem}>
                  <p className={css.domashniiChaiMalynovyi30PBItemText}>
                    Маса нетто: 30 г
                  </p>
                </li>
                <li className={css.domashniiChaiMalynovyi30PBItem}>
                  <p className={css.domashniiChaiMalynovyi30PBItemText}>
                    Кількість пакетиків: 20 штук
                  </p>
                </li>
                <li className={css.domashniiChaiMalynovyi30PBItem}>
                  <p className={css.domashniiChaiMalynovyi30PBItemText}>
                    Країна походження: Індія, Аргентина, Індонезія
                  </p>
                </li>
                <li className={css.domashniiChaiMalynovyi30PBItem}>
                  <p className={css.domashniiChaiMalynovyi30PBItemText}>
                    Форма випуску: пакетований без ярлику
                  </p>
                </li>
                <li className={css.domashniiChaiMalynovyi30PBItem}>
                  <p className={css.domashniiChaiMalynovyi30PBItemText}>
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

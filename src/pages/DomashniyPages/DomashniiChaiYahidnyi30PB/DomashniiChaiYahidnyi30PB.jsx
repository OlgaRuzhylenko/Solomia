import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import domashniiChaiYahidnyi30PBImg from "../../../images/domashniyChai/5.png";
import css from "./DomashniiChaiYahidnyi30PB.module.css";

export default function DomashniiChaiYahidnyi30PB() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.domashniiChaiYahidnyi30PBSection}>
        <div className="container">
          <div className={css.domashniiChaiYahidnyi30PBBox}>
            <img
              src={domashniiChaiYahidnyi30PBImg}
              alt="пачка чаю Домашній чай ягідний 30 грам, 20 пакетиків в картонній упаковці"
              className={css.domashniiChaiYahidnyi30PBImg}
            />
            <div className={css.domashniiChaiYahidnyi30PBWrapper}>
              <h1 className={css.domashniiChaiYahidnyi30PBTitle}>
                Домашній чай <br />
                <span>ЯГІДНИЙ</span>
              </h1>
              <h2 className={css.domashniiChaiYahidnyi30PBSubtitle}>
                Чай чорний купажований дрібний ароматизований з малиною,
                полуницею та чорною смородиною,
                <br />
                20 пакетиків
              </h2>
              <p className={css.domashniiChaiYahidnyi30PBText}>
                Склад: чай чорний байховий індійський дрібний, чай чорний
                байховий аргентинський дрібний, чай чорний байховий
                індонезійський дрібний, малина подрібнена (3%), полуниця
                подрібнена (3%), чорна смородина подрібнена (3%), ароматизатори
                «Полуниця», «Чорна Смородина», «Малина».
              </p>
              <ul className={css.domashniiChaiYahidnyi30PBList}>
                <li className={css.domashniiChaiYahidnyi30PBItem}>
                  <p className={css.domashniiChaiYahidnyi30PBItemText}>
                    Різновид чаю: чорний чай ароматизований
                  </p>
                </li>
                <li className={css.domashniiChaiYahidnyi30PBItem}>
                  <p className={css.domashniiChaiYahidnyi30PBItemText}>
                    Маса нетто: 30 г
                  </p>
                </li>
                <li className={css.domashniiChaiYahidnyi30PBItem}>
                  <p className={css.domashniiChaiYahidnyi30PBItemText}>
                    Кількість пакетиків: 20 штук
                  </p>
                </li>
                <li className={css.domashniiChaiYahidnyi30PBItem}>
                  <p className={css.domashniiChaiYahidnyi30PBItemText}>
                    Країна походження: Індія, Аргентина, Індонезія
                  </p>
                </li>
                <li className={css.domashniiChaiYahidnyi30PBItem}>
                  <p className={css.domashniiChaiYahidnyi30PBItemText}>
                    Форма випуску: пакетований без ярлику
                  </p>
                </li>
                <li className={css.domashniiChaiYahidnyi30PBItem}>
                  <p className={css.domashniiChaiYahidnyi30PBItemText}>
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

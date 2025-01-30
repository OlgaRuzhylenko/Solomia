import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import domashniiChaiLymonnyi30PBImg from "../../../images/domashniyChai/4.jpg";
import css from "./DomashniiChaiLymonnyi30PB.module.css";

export default function DomashniiChaiLymonnyi30PB() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.domashniiChaiLymonnyi30PBSection}>
        <div className="container">
          <div className={css.domashniiChaiLymonnyi30PBBox}>
            <img
              src={domashniiChaiLymonnyi30PBImg}
              alt="пачка чаю Домашній чай лимонний 30 грам, 20 пакетиків в картонній упаковці"
              className={css.domashniiChaiLymonnyi30PBImg}
            />
            <div className={css.domashniiChaiLymonnyi30PBWrapper}>
              <h1 className={css.domashniiChaiLymonnyi30PBTitle}>
                Домашній чай <br />
                <span>ЛИМОННИЙ</span>
              </h1>
              <h2 className={css.domashniiChaiLymonnyi30PBSubtitle}>
                Чай чорний купажований дрібний ароматизований з лимоном,
                <br />
                20 пакетиків
              </h2>
              <p className={css.domashniiChaiLymonnyi30PBText}>
                Склад: чай чорний байховий індійський дрібний, чай чорний
                байховий аргентинський дрібний, чай чорний байховий
                індонезійський дрібний, цедра лимону подрібнена (5%),
                ароматизатор «Лимон».
              </p>
              <ul className={css.domashniiChaiLymonnyi30PBList}>
                <li className={css.domashniiChaiLymonnyi30PBItem}>
                  <p className={css.domashniiChaiLymonnyi30PBItemText}>
                    Різновид чаю: чорний чай ароматизований
                  </p>
                </li>
                <li className={css.domashniiChaiLymonnyi30PBItem}>
                  <p className={css.domashniiChaiLymonnyi30PBItemText}>
                    Маса нетто: 30 г
                  </p>
                </li>
                <li className={css.domashniiChaiLymonnyi30PBItem}>
                  <p className={css.domashniiChaiLymonnyi30PBItemText}>
                    Кількість пакетиків: 20 штук
                  </p>
                </li>
                <li className={css.domashniiChaiLymonnyi30PBItem}>
                  <p className={css.domashniiChaiLymonnyi30PBItemText}>
                    Країна походження: Індія, Аргентина, Індонезія
                  </p>
                </li>
                <li className={css.domashniiChaiLymonnyi30PBItem}>
                  <p className={css.domashniiChaiLymonnyi30PBItemText}>
                    Форма випуску: пакетований без ярлику
                  </p>
                </li>
                <li className={css.domashniiChaiLymonnyi30PBItem}>
                  <p className={css.domashniiChaiLymonnyi30PBItemText}>
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

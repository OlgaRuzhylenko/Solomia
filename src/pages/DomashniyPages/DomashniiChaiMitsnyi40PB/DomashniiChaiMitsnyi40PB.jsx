import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import domashniiChaiMitsnyi40PBImg from "../../../images/domashniyChai/2.png";
import css from "./DomashniiChaiMitsnyi40PB.module.css";

export default function DomashniiChaiMitsnyi40PB() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.domashniiChaiMitsnyi40PBSection}>
        <div className="container">
          <div className={css.domashniiChaiMitsnyi40PBBox}>
            <img
              src={domashniiChaiMitsnyi40PBImg}
              alt="пачка чаю Домашній чай міцний 40 грам, 20 пакетиків в картонній упаковці"
              className={css.domashniiChaiMitsnyi40PBImg}
            />
            <div className={css.domashniiChaiMitsnyi40PBWrapper}>
              <h1 className={css.domashniiChaiMitsnyi40PBTitle}>
                Домашній чай <br />
                <span>МІЦНИЙ</span>
              </h1>
              <h2 className={css.domashniiChaiMitsnyi40PBSubtitle}>
                Чай чорний купажований дрібний,
                <br />
                20 пакетиків
              </h2>
              <p className={css.domashniiChaiMitsnyi40PBText}>
                Склад: чай чорний байховий індійський дрібний, чай чорний
                байховий аргентинський дрібний, чай чорний байховий
                індонезійський дрібний.
              </p>
              <ul className={css.domashniiChaiMitsnyi40PBList}>
                <li className={css.domashniiChaiMitsnyi40PBItem}>
                  <p className={css.domashniiChaiMitsnyi40PBItemText}>
                    Різновид чаю: чорний чай
                  </p>
                </li>
                <li className={css.domashniiChaiMitsnyi40PBItem}>
                  <p className={css.domashniiChaiMitsnyi40PBItemText}>
                    Маса нетто: 40 г
                  </p>
                </li>
                <li className={css.domashniiChaiMitsnyi40PBItem}>
                  <p className={css.domashniiChaiMitsnyi40PBItemText}>
                    Кількість пакетиків: 20 штук
                  </p>
                </li>
                <li className={css.domashniiChaiMitsnyi40PBItem}>
                  <p className={css.domashniiChaiMitsnyi40PBItemText}>
                    Країна походження: Індія, Аргентина, Індонезія
                  </p>
                </li>
                <li className={css.domashniiChaiMitsnyi40PBItem}>
                  <p className={css.domashniiChaiMitsnyi40PBItemText}>
                    Форма випуску: пакетований без ярлику
                  </p>
                </li>
                <li className={css.domashniiChaiMitsnyi40PBItem}>
                  <p className={css.domashniiChaiMitsnyi40PBItemText}>
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

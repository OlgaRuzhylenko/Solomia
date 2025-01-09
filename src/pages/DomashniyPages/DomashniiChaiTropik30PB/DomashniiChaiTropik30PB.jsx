import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import domashniiChaiTropik30PBImg from "../../../images/domashniyChai/6.png";
import css from "./DomashniiChaiTropik30PB.module.css";

export default function DomashniiChaiTropik30PB() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.domashniiChaiTropik30PBSection}>
        <div className="container">
          <div className={css.domashniiChaiTropik30PBBox}>
            <img
              src={domashniiChaiTropik30PBImg}
              alt="пачка чаю Домашній чай тропік 30 грам, 20 пакетиків в картонній упаковці"
              className={css.domashniiChaiTropik30PBImg}
            />
            <div className={css.domashniiChaiTropik30PBWrapper}>
              <h1 className={css.domashniiChaiTropik30PBTitle}>
                Домашній чай <br />
                <span>ТРОПІК</span>
              </h1>
              <h2 className={css.domashniiChaiTropik30PBSubtitle}>
                Чай чорний купажований дрібний ароматизований з апельсином,
                ананасом та манго,
                <br />
                20 пакетиків
              </h2>
              <p className={css.domashniiChaiTropik30PBText}>
                Склад: чай чорний байховий індійський дрібний, чай чорний
                байховий аргентинський дрібний, чай чорний байховий
                індонезійський дрібний, цедра апельсину подрібнена (3%), ананас
                подрібнений (3%), манго подрібнене (3%), ароматизатор «Тропічні
                фрукти».
              </p>
              <ul className={css.domashniiChaiTropik30PBList}>
                <li className={css.domashniiChaiTropik30PBItem}>
                  <p className={css.domashniiChaiTropik30PBItemText}>
                    Різновид чаю: чорний чай ароматизований
                  </p>
                </li>
                <li className={css.domashniiChaiTropik30PBItem}>
                  <p className={css.domashniiChaiTropik30PBItemText}>
                    Маса нетто: 30 г
                  </p>
                </li>
                <li className={css.domashniiChaiTropik30PBItem}>
                  <p className={css.domashniiChaiTropik30PBItemText}>
                    Кількість пакетиків: 20 штук
                  </p>
                </li>
                <li className={css.domashniiChaiTropik30PBItem}>
                  <p className={css.domashniiChaiTropik30PBItemText}>
                    Країна походження: Індія, Аргентина, Індонезія
                  </p>
                </li>
                <li className={css.domashniiChaiTropik30PBItem}>
                  <p className={css.domashniiChaiTropik30PBItemText}>
                    Форма випуску: пакетований без ярлику
                  </p>
                </li>
                <li className={css.domashniiChaiTropik30PBItem}>
                  <p className={css.domashniiChaiTropik30PBItemText}>
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

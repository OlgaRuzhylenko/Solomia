import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import domashniiChaiMitsnyi90Img from "../../../images/domashniyChai/1.png";
import css from "./DomashniiChaiMitsnyi90.module.css";

export default function DomashniiChaiMitsnyi90() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.domashniiChaiMitsnyi90Section}>
        <div className="container">
          <div className={css.domashniiChaiMitsnyi90Box}>
            <img
              src={domashniiChaiMitsnyi90Img}
              alt="пачка чаю Домашній чай міцний 90 грам в картонній упаковці"
              className={css.domashniiChaiMitsnyi90Img}
            />
            <div className={css.domashniiChaiMitsnyi90Wrapper}>
              <h1 className={css.domashniiChaiMitsnyi90Title}>
                Домашній чай <br />
                <span>МІЦНИЙ</span>
              </h1>
              <h2 className={css.domashniiChaiMitsnyi90Subtitle}>
                Чай чорний купажований листовий,
                <br />
                90 г
              </h2>
              <p className={css.domashniiChaiMitsnyi90Text}>
                Склад: чай чорний байховий індонезійський листовий, чай чорний
                байховий в’єтнамський листовий.
              </p>
              <ul className={css.domashniiChaiMitsnyi90List}>
                <li className={css.domashniiChaiMitsnyi90Item}>
                  <p className={css.domashniiChaiMitsnyi90ItemText}>
                    Різновид чаю: чорний чай
                  </p>
                </li>
                <li className={css.domashniiChaiMitsnyi90Item}>
                  <p className={css.domashniiChaiMitsnyi90ItemText}>
                    Маса нетто: 90 г
                  </p>
                </li>
                <li className={css.domashniiChaiMitsnyi90Item}>
                  <p className={css.domashniiChaiMitsnyi90ItemText}>
                    Країна походження: Індонезія, В’єтнам
                  </p>
                </li>
                <li className={css.domashniiChaiMitsnyi90Item}>
                  <p className={css.domashniiChaiMitsnyi90ItemText}>
                    Форма випуску: розсипний
                  </p>
                </li>
                <li className={css.domashniiChaiMitsnyi90Item}>
                  <p className={css.domashniiChaiMitsnyi90ItemText}>
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

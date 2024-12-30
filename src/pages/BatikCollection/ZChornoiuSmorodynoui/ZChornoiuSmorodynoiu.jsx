import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import zChornoiuSmorodynoiuImg from "../../../images/batik/classic/2.jpg";
import css from "./ZChornoiuSmorodynoiu.module.css";

export default function ZChornoiuSmorodynoiu() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.zChornoiuSmorodynoiuSection}>
        <div className="container">
          <div className={css.zChornoiuSmorodynoiuBox}>
            <img
              src={zChornoiuSmorodynoiuImg}
              alt="пачка чаю Батік з чорною смородиною"
              className={css.zChornoiuSmorodynoiuImg}
            />
            <div className={css.zChornoiuSmorodynoiuWrapper}>
              <h1 className={css.zChornoiuSmorodynoiuTitle}>
                Batik <br />
                <span>З ЧОРНОЮ СМОРОДИНОЮ</span>
              </h1>
              <h2 className={css.zChornoiuSmorodynoiuSubtitle}>
                Чай чорний купажований дрібний з ягодами та листям чорної
                смородини, <br />
                25 пакетиків
              </h2>
              <p className={css.zChornoiuSmorodynoiuText}>
                Гармонійно збалансована чайно – ягідна композиція в якій чудово
                поєднанні терпкість та насиченість кенійського чаю,
                квітково-фруктовий аромат індійського чаю зі свіжим та солодким
                смаком чорної смородини.
              </p>
              <ul className={css.zChornoiuSmorodynoiuList}>
                <li className={css.zChornoiuSmorodynoiuItem}>
                  <p className={css.zChornoiuSmorodynoiuItemText}>
                    Різновид чаю: чорний ароматизований
                  </p>
                </li>
                <li className={css.zChornoiuSmorodynoiuItem}>
                  <p className={css.zChornoiuSmorodynoiuItemText}>
                    Маса нетто: 37,5 г
                  </p>
                </li>
                <li className={css.zChornoiuSmorodynoiuItem}>
                  <p className={css.zChornoiuSmorodynoiuItemText}>
                    Кількість пакетиків: 25 штук
                  </p>
                </li>
                <li className={css.zChornoiuSmorodynoiuItem}>
                  <p className={css.zChornoiuSmorodynoiuItemText}>
                    Країна походження: Індія, Шрі-Ланка (о. Цейлон)
                  </p>
                </li>
                <li className={css.zChornoiuSmorodynoiuItem}>
                  <p className={css.zChornoiuSmorodynoiuItemText}>
                    Форма випуску: пакетований з ярликом
                  </p>
                </li>
                <li className={css.zChornoiuSmorodynoiuItem}>
                  <p className={css.zChornoiuSmorodynoiuItemText}>
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

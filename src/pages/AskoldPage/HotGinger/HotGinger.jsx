import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import hotGingerImg from "../../../images/askold/askoldEmotion/7.png";
import css from "./HotGinger.module.css";

export default function HotGinger() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.hotGingerSection}>
        <div className="container">
          <div className={css.hotGingerBox}>
            <img
              src={hotGingerImg}
              alt="пачка чаю Askold Emotion Hot Ginger 20 конвертів"
              className={css.hotGingerImg}
            />
            <div className={css.hotGingerWrapper}>
              <h1 className={css.hotGingerTitle}>
                Askold Emotion <br />
                <span>HOT GINGER</span>
              </h1>
              <h2 className={css.hotGingerSubtitle}>
                Суміш з імбиру, цедри лимону, ехінацеї, шипшини та чорного чаю
                ароматизована,
                <br />
                20 пакетиків у конвертах
              </h2>
              <p className={css.hotGingerText}>
                Імбир та лимон, ехінацея та шипшина – це справжнє джерело
                здоров’я та вибух енергії в твоїй чашці. Магічний рецепт –
                бадьорить влітку, зігріває взимку.
              </p>
              <ul className={css.hotGingerList}>
                <li className={css.hotGingerItem}>
                  <p className={css.hotGingerItemText}>
                    Різновид чаю: суміш на основі імбиру ароматизована
                  </p>
                </li>
                <li className={css.hotGingerItem}>
                  <p className={css.hotGingerItemText}>Маса нетто: 36 г</p>
                </li>
                <li className={css.hotGingerItem}>
                  <p className={css.hotGingerItemText}>
                    Кількість пакетиків: 20 штук
                  </p>
                </li>
                <li className={css.hotGingerItem}>
                  <p className={css.hotGingerItemText}>
                    Форма випуску: пакетований з ярликом у конвертах
                  </p>
                </li>
                <li className={css.hotGingerItem}>
                  <p className={css.hotGingerItemText}>
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

import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import brightNightImg from "../../../images/askold/askoldEmotion/6.png";
import css from "./BrightNight.module.css";

export default function BrightNight() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.brightNightSection}>
        <div className="container">
          <div className={css.brightNightBox}>
            <img
              src={brightNightImg}
              alt="пачка чаю Askold Emotion Bright Night 20 конвертів"
              className={css.brightNightImg}
            />
            <div className={css.brightNightWrapper}>
              <h1 className={css.brightNightTitle}>
                Askold Emotion <br />
                <span>BRIGHT NIGHT</span>
              </h1>
              <h2 className={css.brightNightSubtitle}>
                Чай чорний цейлонський дрібний з ананасом, пелюстками троянд і
                календули ароматизований,
                <br />
                20 пакетиків у конвертах
              </h2>
              <p className={css.brightNightText}>
                Це екзотична суміш на основі чорного чаю зі східними ароматами
                винограду та маракуйї. У ній тануть цукати ананаса та
                розцвітають бутони троянд.
              </p>
              <ul className={css.brightNightList}>
                <li className={css.brightNightItem}>
                  <p className={css.brightNightItemText}>
                    Різновид чаю: чорний чай ароматизований
                  </p>
                </li>
                <li className={css.brightNightItem}>
                  <p className={css.brightNightItemText}>Маса нетто: 40 г</p>
                </li>
                <li className={css.brightNightItem}>
                  <p className={css.brightNightItemText}>
                    Кількість пакетиків: 20 штук
                  </p>
                </li>
                <li className={css.brightNightItem}>
                  <p className={css.brightNightItemText}>
                    Країна походження: Шрі-Ланка (о.Цейлон)
                  </p>
                </li>
                <li className={css.brightNightItem}>
                  <p className={css.brightNightItemText}>
                    Форма випуску: пакетований з ярликом у конвертах
                  </p>
                </li>
                <li className={css.brightNightItem}>
                  <p className={css.brightNightItemText}>
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

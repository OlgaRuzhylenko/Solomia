import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import emotionBlackTeaImg from "../../../images/askold/askoldEmotion/8.jpg";
import css from "./EmotionBlackTea.module.css";

export default function EmotionBlackTea() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.emotionBlackTeaSection}>
        <div className="container">
          <div className={css.emotionBlackTeaBox}>
            <img
              src={emotionBlackTeaImg}
              alt="пачка чаю Askold Emotion Black Tea 20 конвертів"
              className={css.emotionBlackTeaImg}
            />
            <div className={css.emotionBlackTeaWrapper}>
              <h1 className={css.emotionBlackTeaTitle}>
                Askold Emotion <br />
                <span>BLACK TEA</span>
              </h1>
              <h2 className={css.emotionBlackTeaSubtitle}>
                Чай чорний цейлонський дрібний,
                <br />
                20 пакетиків у конвертах
              </h2>
              <p className={css.emotionBlackTeaText}>
                Цейлонський високогірний чорний чай найвищої якості, бездоганний
                за балансом терпкості, міцності і аромату.
              </p>
              <ul className={css.emotionBlackTeaList}>
                <li className={css.emotionBlackTeaItem}>
                  <p className={css.emotionBlackTeaItemText}>
                    Різновид чаю: чорний чай
                  </p>
                </li>
                <li className={css.emotionBlackTeaItem}>
                  <p className={css.emotionBlackTeaItemText}>
                    Маса нетто: 40 г
                  </p>
                </li>
                <li className={css.emotionBlackTeaItem}>
                  <p className={css.emotionBlackTeaItemText}>
                    Кількість пакетиків: 20 штук
                  </p>
                </li>
                <li className={css.emotionBlackTeaItem}>
                  <p className={css.emotionBlackTeaItemText}>
                    Країна походження: Шрі-Ланка (о.Цейлон)
                  </p>
                </li>
                <li className={css.emotionBlackTeaItem}>
                  <p className={css.emotionBlackTeaItemText}>
                    Форма випуску: пакетований з ярликом у конвертах
                  </p>
                </li>
                <li className={css.emotionBlackTeaItem}>
                  <p className={css.emotionBlackTeaItemText}>
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

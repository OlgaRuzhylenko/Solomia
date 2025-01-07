import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import emotionEarlGrayImg from "../../../images/askold/askoldEmotion/5.jpg";
import css from "./EmotionEarlGray.module.css";

export default function EmotionEarlGray() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.emotionEarlGraySection}>
        <div className="container">
          <div className={css.emotionEarlGrayBox}>
            <img
              src={emotionEarlGrayImg}
              alt="пачка чаю Askold Emotion Earl Gray 20 конвертів"
              className={css.emotionEarlGrayImg}
            />
            <div className={css.emotionEarlGrayWrapper}>
              <h1 className={css.emotionEarlGrayTitle}>
                Askold Emotion <br />
                <span>EARL GREY</span>
              </h1>
              <h2 className={css.emotionEarlGraySubtitle}>
                Чай чорний цейлонський дрібний з ароматом бергамота,
                <br />
                20 пакетиків у конвертах
              </h2>
              <p className={css.emotionEarlGrayText}>
                Бездоганне поєднання цейлонського високогірного чорного чаю
                найвищої якості з неперевершеним цитрусовим ароматом бергамота.
              </p>
              <ul className={css.emotionEarlGrayList}>
                <li className={css.emotionEarlGrayItem}>
                  <p className={css.emotionEarlGrayItemText}>
                    Різновид чаю: чорний чай ароматизований
                  </p>
                </li>
                <li className={css.emotionEarlGrayItem}>
                  <p className={css.emotionEarlGrayItemText}>
                    Маса нетто: 40 г
                  </p>
                </li>
                <li className={css.emotionEarlGrayItem}>
                  <p className={css.emotionEarlGrayItemText}>
                    Кількість пакетиків: 20 штук
                  </p>
                </li>
                <li className={css.emotionEarlGrayItem}>
                  <p className={css.emotionEarlGrayItemText}>
                    Країна походження: Шрі-Ланка (о.Цейлон)
                  </p>
                </li>
                <li className={css.emotionEarlGrayItem}>
                  <p className={css.emotionEarlGrayItemText}>
                    Форма випуску: пакетований з ярликом у конвертах
                  </p>
                </li>
                <li className={css.emotionEarlGrayItem}>
                  <p className={css.emotionEarlGrayItemText}>
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

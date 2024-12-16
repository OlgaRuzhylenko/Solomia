import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import lovelyMelissaImg from "../../../images/askold/askoldEmotion/2.png";
import css from "./LovelyMelissa.module.css";

export default function LovelyMelissa() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.lovelyMelissaSection}>
        <div className="container">
          <div className={css.lovelyMelissaBox}>
            <img
              src={lovelyMelissaImg}
              alt="пачка чаю Askold Emotion Lovely Melissa 20 конвертів"
              className={css.lovelyMelissaImg}
            />
            <div className={css.lovelyMelissaWrapper}>
              <h1 className={css.lovelyMelissaTitle}>
                Askold Emotion <br />
                <span>LOVELY MELISSA</span>
              </h1>
              <h2 className={css.lovelyMelissaSubtitle}>
                Чай зелений китайський дрібний з мелісою, мʼятою та
                лемонграссом,
                <br />
                20 пакетиків у конвертах
              </h2>
              <p className={css.lovelyMelissaText}>
                Досконале поєднання зеленого чаю з духмяною мелісою, прохолодною
                м’ятою та лемонграссом з ніжним цитрусовим смаком.
              </p>
              <ul className={css.lovelyMelissaList}>
                <li className={css.lovelyMelissaItem}>
                  <p className={css.lovelyMelissaItemText}>
                    Різновид чаю: зелений чай з мелісою, м’ятою та лемонграссом
                  </p>
                </li>
                <li className={css.lovelyMelissaItem}>
                  <p className={css.lovelyMelissaItemText}>Маса нетто: 30 г</p>
                </li>
                <li className={css.lovelyMelissaItem}>
                  <p className={css.lovelyMelissaItemText}>
                    Кількість пакетиків: 20 штук
                  </p>
                </li>
                <li className={css.lovelyMelissaItem}>
                  <p className={css.lovelyMelissaItemText}>
                    Країна походження: Китай
                  </p>
                </li>
                <li className={css.lovelyMelissaItem}>
                  <p className={css.lovelyMelissaItemText}>
                    Форма випуску: пакетований з ярликом у конвертах
                  </p>
                </li>
                <li className={css.lovelyMelissaItem}>
                  <p className={css.lovelyMelissaItemText}>
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

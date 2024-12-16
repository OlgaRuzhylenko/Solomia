import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import lippyFruitImg from "../../../images/askold/askoldEmotion/3.png";
import css from "./LippyFruit.module.css";

export default function LippyFruit() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.lippyFruitSection}>
        <div className="container">
          <div className={css.lippyFruitBox}>
            <img
              src={lippyFruitImg}
              alt="пачка чаю Askold Emotion Lippy Fruit 20 конвертів"
              className={css.lippyFruitImg}
            />
            <div className={css.lippyFruitWrapper}>
              <h1 className={css.lippyFruitTitle}>
                Askold Emotion <br />
                <span>LIPPY FRUIT</span>
              </h1>
              <h2 className={css.lippyFruitSubtitle}>
                Суміш з пелюсток квітів, шипшини, апельсину, малини та ананасу
                ароматизована,
                <br />
                20 пакетиків у конвертах
              </h2>
              <p className={css.lippyFruitText}>
                Тепле і радісне літо сховалося в цій пачці. В яскравих фарбах
                квітів, в ароматах ягід, в соковитих фруктах. Зроби ковток,
                спробуй літо на смак.
              </p>
              <ul className={css.lippyFruitList}>
                <li className={css.lippyFruitItem}>
                  <p className={css.lippyFruitItemText}>
                    Різновид чаю: суміш на основі каркаде ароматизована
                  </p>
                </li>
                <li className={css.lippyFruitItem}>
                  <p className={css.lippyFruitItemText}>Маса нетто: 40 г</p>
                </li>
                <li className={css.lippyFruitItem}>
                  <p className={css.lippyFruitItemText}>
                    Кількість пакетиків: 20 штук
                  </p>
                </li>

                <li className={css.lippyFruitItem}>
                  <p className={css.lippyFruitItemText}>
                    Форма випуску: пакетований з ярликом у конвертах
                  </p>
                </li>
                <li className={css.lippyFruitItem}>
                  <p className={css.lippyFruitItemText}>
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

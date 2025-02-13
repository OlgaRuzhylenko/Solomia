import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import blackTeaCollectionImg from "../../../images/askold/askoldEmotion/9.jpg";
import css from "./BlackTeaCollection.module.css";

export default function BlackTeaCollection() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.blackTeaCollectionSection}>
        <div className="container">
          <div className={css.blackTeaCollectionBox}>
            <img
              src={blackTeaCollectionImg}
              alt="пачка чаю Askold Emotion Black tea collection 20 конвертів"
              className={css.blackTeaCollectionImg}
            />
            <div className={css.blackTeaCollectionWrapper}>
              <h1 className={css.blackTeaCollectionTitle}>
                Askold Emotion <br />
                <span>BLACK TEA COLLECTION</span>
              </h1>
              <h2 className={css.blackTeaCollectionSubtitle}>
                Набір з чотирьох видів чаю,
                <br />4 види по 5 пакетиків у конвертах
              </h2>
              <p className={css.blackTeaCollectionText}>
                Чайна колекція для поціновувачів чорного чаю та вишуканих чайних
                композицій на основі чорного чаю.
              </p>
              <p className={css.blackTeaCollectionCompundDesc}>Склад набору:</p>
              <ul className={css.blackTeaCollectionCompundList}>
                <li className={css.blackTeaCollectionCompundItem}>
                  <div className={css.blackTeaCollectionCompundBox}>
                    <span
                      className={css.blackTeaCollectionCompundItemCircle}
                    ></span>
                    <p className={css.blackTeaCollectionItemText}>Black Tea</p>
                  </div>
                </li>
                <li className={css.blackTeaCollectionCompundItem}>
                  <div className={css.blackTeaCollectionCompundBox}>
                    <span
                      className={css.blackTeaCollectionCompundItemCircle}
                    ></span>
                    <p className={css.blackTeaCollectionItemText}>Earl Grey</p>
                  </div>
                </li>
                <li className={css.blackTeaCollectionCompundItem}>
                  <div className={css.blackTeaCollectionCompundBox}>
                    <span
                      className={css.blackTeaCollectionCompundItemCircle}
                    ></span>
                    <p className={css.blackTeaCollectionItemText}>
                      Bright Night
                    </p>
                  </div>
                </li>
                <li className={css.blackTeaCollectionCompundItem}>
                  <div className={css.blackTeaCollectionCompundBox}>
                    <span
                      className={css.blackTeaCollectionCompundItemCircle}
                    ></span>
                    <p className={css.blackTeaCollectionItemText}>
                      Champagne Spills
                    </p>
                  </div>
                </li>
              </ul>

              <ul className={css.blackTeaCollectionList}>
                <li className={css.blackTeaCollectionItem}>
                  <p className={css.blackTeaCollectionItemText}>
                    Різновид чаю: чорний чай та чорний чай ароматизований
                  </p>
                </li>
                <li className={css.blackTeaCollectionItem}>
                  <p className={css.blackTeaCollectionItemText}>
                    Маса нетто: 40 г
                  </p>
                </li>
                <li className={css.blackTeaCollectionItem}>
                  <p className={css.blackTeaCollectionItemText}>
                    Кількість пакетиків: 20 штук
                  </p>
                </li>
                <li className={css.blackTeaCollectionItem}>
                  <p className={css.blackTeaCollectionItemText}>
                    Країна походження: Шрі-Ланка (о. Цейлон), Китай
                  </p>
                </li>
                <li className={css.blackTeaCollectionItem}>
                  <p className={css.blackTeaCollectionItemText}>
                    Форма випуску: пакетований з ярликом у конвертах
                  </p>
                </li>
                <li className={css.blackTeaCollectionItem}>
                  <p className={css.blackTeaCollectionItemText}>
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

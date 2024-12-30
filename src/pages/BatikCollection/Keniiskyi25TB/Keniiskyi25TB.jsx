import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import keniiskyi25TB from "../../../images/batik/classic/18.jpg";
import css from "./Keniiskyi25TB.module.css";

export default function Keniiskyi25TB() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.keniiskyi25TBSection}>
        <div className="container">
          <div className={css.keniiskyi25TBBox}>
            <img
              src={keniiskyi25TB}
              alt="пачка чаю Батік Кенійський чай 25 пакетиків"
              className={css.keniiskyi25TBImg}
            />
            <div className={css.keniiskyi25TBWrapper}>
              <h1 className={css.keniiskyi25TBTitle}>
                Batik <br />
                <span>КЕНІЙСЬКИЙ ЧАЙ</span>
              </h1>
              <h2 className={css.keniiskyi25TBSubtitle}>
                Чай чорний кенійський дрібний,
                <br />
                25 пакетиків
              </h2>
              <p className={css.keniiskyi25TBText}>
                Вирощений високо в горах під промінням яскравого кенійського
                сонця цей чай зачарує вас дивовижним смаком з квітково –
                цитрусовими відтінками та горіхово – шоколадним післясмаком.
                Влаштуйте собі справжню чайну подорож особливо насиченим та
                глибоким смаком.
              </p>
              <ul className={css.keniiskyi25TBList}>
                <li className={css.keniiskyi25TBItem}>
                  <p className={css.keniiskyi25TBItemText}>
                    Різновид чаю: чорний чай
                  </p>
                </li>
                <li className={css.keniiskyi25TBItem}>
                  <p className={css.keniiskyi25TBItemText}>Маса нетто: 50 г</p>
                </li>
                <li className={css.keniiskyi25TBItem}>
                  <p className={css.keniiskyi25TBItemText}>
                    Кількість пакетиків: 25 штук
                  </p>
                </li>
                <li className={css.keniiskyi25TBItem}>
                  <p className={css.keniiskyi25TBItemText}>
                    Країна походження: Кенія
                  </p>
                </li>
                <li className={css.keniiskyi25TBItem}>
                  <p className={css.keniiskyi25TBItemText}>
                    Форма випуску: пакетований з ярликом
                  </p>
                </li>
                <li className={css.keniiskyi25TBItem}>
                  <p className={css.keniiskyi25TBItemText}>
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

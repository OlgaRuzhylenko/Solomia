import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import keniiskyi85 from "../../../images/batik/classic/19.jpg";
import css from "./Keniiskyi85.module.css";

export default function Keniiskyi85() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.keniiskyi85Section}>
        <div className="container">
          <div className={css.keniiskyi85Box}>
            <img
              src={keniiskyi85}
              alt="пачка чаю Батік Кенійський чай 85 грам в картонній упаковці"
              className={css.keniiskyi85Img}
            />
            <div className={css.keniiskyi85Wrapper}>
              <h1 className={css.keniiskyi85Title}>
                Batik <br />
                <span>КЕНІЙСЬКИЙ ЧАЙ</span>
              </h1>
              <h2 className={css.keniiskyi85Subtitle}>
                Чай чорний кенійський крупнолистовий
              </h2>
              <p className={css.keniiskyi85Text}>
                Вирощений високо в горах під промінням яскравого кенійського
                сонця цей чай зачарує вас дивовижним смаком з квітково –
                цитрусовими відтінками та горіхово – шоколадним післясмаком.
                Влаштуйте собі справжню чайну подорож особливо насиченим та
                глибоким смаком.
              </p>
              <ul className={css.keniiskyi85List}>
                <li className={css.keniiskyi85Item}>
                  <p className={css.keniiskyi85ItemText}>
                    Різновид чаю: чорний чай
                  </p>
                </li>
                <li className={css.keniiskyi85Item}>
                  <p className={css.keniiskyi85ItemText}>Маса нетто: 85 г</p>
                </li>
                <li className={css.keniiskyi85Item}>
                  <p className={css.keniiskyi85ItemText}>
                    Країна походження: Кенія
                  </p>
                </li>
                <li className={css.keniiskyi85Item}>
                  <p className={css.keniiskyi85ItemText}>
                    Форма випуску: розсипний
                  </p>
                </li>
                <li className={css.keniiskyi85Item}>
                  <p className={css.keniiskyi85ItemText}>
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

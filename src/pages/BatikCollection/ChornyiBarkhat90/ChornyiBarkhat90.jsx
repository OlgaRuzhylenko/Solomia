import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import chornyiBarkhat90 from "../../../images/batik/classic/11.jpg";
import css from "./ChornyiBarkhat90.module.css";

export default function ChornyiBarkhat90() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.chornyiBarkhat90Section}>
        <div className="container">
          <div className={css.chornyiBarkhat90Box}>
            <img
              src={chornyiBarkhat90}
              alt="пачка чаю Батік Чорний Бархат 90 грам в картонній упаковці"
              className={css.chornyiBarkhat90Img}
            />
            <div className={css.chornyiBarkhat90Wrapper}>
              <h1 className={css.chornyiBarkhat90Title}>
                Batik <br />
                <span>ЧОРНИЙ БАРХАТ</span>
              </h1>
              <h2 className={css.chornyiBarkhat90Subtitle}>
                Чай чорний купажований дрібний та гранульований,
                <br />
                90 г
              </h2>
              <p className={css.chornyiBarkhat90Text}>
                За чорним оксамитом ховається різноманіття барв, оскільки цей
                чай поєднання декількох чайних культур. Його багатогранність
                зачарує найвибагливіших шанувальників чорних чаїв. Терпкість та
                насиченість, тонка нота, яка нагадує цитрусовий аромат, і все це
                на фоні виключної міцності робить Чорний бархат одним з
                найкращих чаїв у своєму класі.
              </p>
              <p className={css.chornyiBarkhat90Text}>
                Міцний і насичений смак, ніжний аромат з горіхово – цитрусовими
                відтінками.
              </p>
              <ul className={css.chornyiBarkhat90List}>
                <li className={css.chornyiBarkhat90Item}>
                  <p className={css.chornyiBarkhat90ItemText}>
                    Різновид чаю: чорний чай
                  </p>
                </li>
                <li className={css.chornyiBarkhat90Item}>
                  <p className={css.chornyiBarkhat90ItemText}>
                    Маса нетто: 90 г
                  </p>
                </li>
                <li className={css.chornyiBarkhat90Item}>
                  <p className={css.chornyiBarkhat90ItemText}>
                    Країна походження: Шрі-Ланка (о. Цейлон), Кенія
                  </p>
                </li>
                <li className={css.chornyiBarkhat90Item}>
                  <p className={css.chornyiBarkhat90ItemText}>
                    Форма випуску: розсипний
                  </p>
                </li>
                <li className={css.chornyiBarkhat90Item}>
                  <p className={css.chornyiBarkhat90ItemText}>
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

import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import chornyiBarkhat50 from "../../../images/batik/classic/12.png";
import css from "./ChornyiBarkhat50.module.css";

export default function ChornyiBarkhat50() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.chornyiBarkhat50Section}>
        <div className="container">
          <div className={css.chornyiBarkhat50Box}>
            <img
              src={chornyiBarkhat50}
              alt="пачка чаю Батік Чорний Бархат 25 пакетиків"
              className={css.chornyiBarkhat50Img}
            />
            <div className={css.chornyiBarkhat50Wrapper}>
              <h1 className={css.chornyiBarkhat50Title}>
                Batik <br />
                <span>ЧОРНИЙ БАРХАТ</span>
              </h1>
              <h2 className={css.chornyiBarkhat50Subtitle}>
                Чай чорний купажований дрібний,
                <br />
                25 пакетиків
              </h2>
              <p className={css.chornyiBarkhat50Text}>
                За чорним оксамитом ховається різноманіття барв, оскільки цей
                чай поєднання декількох чайних культур. Його багатогранність
                зачарує найвибагливіших шанувальників чорних чаїв. Терпкість та
                насиченість, тонка нота, яка нагадує цитрусовий аромат, і все це
                на фоні виключної міцності робить Чорний бархат одним з
                найкращих чаїв у своєму класі.
              </p>
              <p className={css.chornyiBarkhat50Text}>
                Міцний і насичений смак, ніжний аромат з горіхово – цитрусовими
                відтінками.
              </p>
              <ul className={css.chornyiBarkhat50List}>
                <li className={css.chornyiBarkhat50Item}>
                  <p className={css.chornyiBarkhat50ItemText}>
                    Різновид чаю: чорний чай
                  </p>
                </li>
                <li className={css.chornyiBarkhat50Item}>
                  <p className={css.chornyiBarkhat50ItemText}>
                    Маса нетто: 50 г
                  </p>
                </li>
                <li className={css.chornyiBarkhat50Item}>
                  <p className={css.chornyiBarkhat50ItemText}>
                    Кількість пакетиків: 25 штук
                  </p>
                </li>
                <li className={css.chornyiBarkhat50Item}>
                  <p className={css.chornyiBarkhat50ItemText}>
                    Країна походження: Шрі-Ланка (о. Цейлон), Кенія
                  </p>
                </li>
                <li className={css.chornyiBarkhat50Item}>
                  <p className={css.chornyiBarkhat50ItemText}>
                    Форма випуску: пакетований з ярликом
                  </p>
                </li>
                <li className={css.chornyiBarkhat50Item}>
                  <p className={css.chornyiBarkhat50ItemText}>
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

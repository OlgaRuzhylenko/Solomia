import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import korolivskyiStandart85Img from "../../../images/batik/classic/21.jpg";
import css from "./KorolivskyiStandart85.module.css";

export default function KorolivskyiStandart85() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.korolivskyiStandart85Section}>
        <div className="container">
          <div className={css.korolivskyiStandart85Box}>
            <img
              src={korolivskyiStandart85Img}
              alt="пачка чаю Батік Королівський Стандарт 85 грам в картонній упаковці"
              className={css.korolivskyiStandart85Img}
            />
            <div className={css.korolivskyiStandart85Wrapper}>
              <h1 className={css.korolivskyiStandart85Title}>
                Batik <br />
                <span>КОРОЛІВСЬКИЙ СТАНДАРТ</span>
              </h1>
              <h2 className={css.korolivskyiStandart85Subtitle}>
                Чай чорний цейлонський крупнолистовий,
                <br />
                85 г
              </h2>
              <p className={css.korolivskyiStandart85Text}>
                У стародавні роки чайні майстри Цейлону із покоління в покоління
                передавали секрет чаю, що призначався лише королівській
                династії. Лише у XX сторіччі була розгадана таємниця
                королівського стандарту і сьогодні цей напій прикрашає меню
                сучасних чайних гурманів своїм аристократичним смаком та
                по-королівські вишуканим ароматом.
              </p>
              <p className={css.korolivskyiStandart85Text}>
                Терпкий та насичений смак, ніжний фруктово – солодовий аромат.
              </p>
              <ul className={css.korolivskyiStandart85List}>
                <li className={css.korolivskyiStandart85Item}>
                  <p className={css.korolivskyiStandart85ItemText}>
                    Різновид чаю: чорний чай
                  </p>
                </li>
                <li className={css.korolivskyiStandart85Item}>
                  <p className={css.korolivskyiStandart85ItemText}>
                    Маса нетто: 85 г
                  </p>
                </li>
                <li className={css.korolivskyiStandart85Item}>
                  <p className={css.korolivskyiStandart85ItemText}>
                    Країна походження: Шрі-Ланка (о. Цейлон)
                  </p>
                </li>
                <li className={css.korolivskyiStandart85Item}>
                  <p className={css.korolivskyiStandart85ItemText}>
                    Форма випуску: розсипний
                  </p>
                </li>
                <li className={css.korolivskyiStandart85Item}>
                  <p className={css.korolivskyiStandart85ItemText}>
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

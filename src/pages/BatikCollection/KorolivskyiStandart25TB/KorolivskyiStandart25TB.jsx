import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import korolivskyiStandart25TBImg from "../../../images/batik/classic/22.png";
import css from "./KorolivskyiStandart25TB.module.css";

export default function KorolivskyiStandart25TB() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.korolivskyiStandart25TBSection}>
        <div className="container">
          <div className={css.korolivskyiStandart25TBBox}>
            <img
              src={korolivskyiStandart25TBImg}
              alt="пачка чаю Батік Королівський Стандарт 25 пакетиків"
              className={css.korolivskyiStandart25TBImg}
            />
            <div className={css.korolivskyiStandart25TBWrapper}>
              <h1 className={css.korolivskyiStandart25TBTitle}>
                Batik <br />
                <span>КОРОЛІВСЬКИЙ СТАНДАРТ</span>
              </h1>
              <h2 className={css.korolivskyiStandart25TBSubtitle}>
                Чай чорний цейлонський дрібний,
                <br />
                25 пакетиків
              </h2>
              <p className={css.korolivskyiStandart25TBText}>
                У стародавні роки чайні майстри Цейлону із покоління в покоління
                передавали секрет чаю, що призначався лише королівській
                династії. Лише у XX сторіччі була розгадана таємниця
                королівського стандарту і сьогодні цей напій прикрашає меню
                сучасних чайних гурманів своїм аристократичним смаком та
                по-королівські вишуканим ароматом.
              </p>
              <p className={css.korolivskyiStandart25TBText}>
                Терпкий та насичений смак, ніжний фруктово – солодовий аромат.
              </p>
              <ul className={css.korolivskyiStandart25TBList}>
                <li className={css.korolivskyiStandart25TBItem}>
                  <p className={css.korolivskyiStandart25TBItemText}>
                    Різновид чаю: чорний чай
                  </p>
                </li>
                <li className={css.korolivskyiStandart25TBItem}>
                  <p className={css.korolivskyiStandart25TBItemText}>
                    Маса нетто: 50 г
                  </p>
                </li>
                <li className={css.korolivskyiStandart25TBItem}>
                  <p className={css.korolivskyiStandart25TBItemText}>
                    Кількість пакетиків: 25 штук
                  </p>
                </li>
                <li className={css.korolivskyiStandart25TBItem}>
                  <p className={css.korolivskyiStandart25TBItemText}>
                    Країна походження: Шрі-Ланка (о. Цейлон)
                  </p>
                </li>
                <li className={css.korolivskyiStandart25TBItem}>
                  <p className={css.korolivskyiStandart25TBItemText}>
                    Форма випуску: пакетований з ярликом
                  </p>
                </li>
                <li className={css.korolivskyiStandart25TBItem}>
                  <p className={css.korolivskyiStandart25TBItemText}>
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

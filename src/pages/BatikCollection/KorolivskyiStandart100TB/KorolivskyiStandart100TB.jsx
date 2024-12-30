import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import korolivskyiStandart100TBImg from "../../../images/batik/classic/20.jpg";
import css from "./KorolivskyiStandart100TB.module.css";

export default function KorolivskyiStandart100TB() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.korolivskyiStandart100TBSection}>
        <div className="container">
          <div className={css.korolivskyiStandart100TBBox}>
            <img
              src={korolivskyiStandart100TBImg}
              alt="пачка чаю Батік Королівський Стандарт 100 пакетиків"
              className={css.korolivskyiStandart100TBImg}
            />
            <div className={css.korolivskyiStandart100TBWrapper}>
              <h1 className={css.korolivskyiStandart100TBTitle}>
                Batik <br />
                <span>КОРОЛІВСЬКИЙ СТАНДАРТ</span>
              </h1>
              <h2 className={css.korolivskyiStandart100TBSubtitle}>
                Чай чорний цейлонський дрібний,
                <br />
                100 пакетиків
              </h2>
              <p className={css.korolivskyiStandart100TBText}>
                У стародавні роки чайні майстри Цейлону із покоління в покоління
                передавали секрет чаю, що призначався лише королівській
                династії. Лише у XX сторіччі була розгадана таємниця
                королівського стандарту і сьогодні цей напій прикрашає меню
                сучасних чайних гурманів своїм аристократичним смаком та
                по-королівські вишуканим ароматом.
              </p>
              <p className={css.korolivskyiStandart100TBText}>
                Терпкий та насичений смак, ніжний фруктово – солодовий аромат.
              </p>
              <ul className={css.korolivskyiStandart100TBList}>
                <li className={css.korolivskyiStandart100TBItem}>
                  <p className={css.korolivskyiStandart100TBItemText}>
                    Різновид чаю: чорний чай
                  </p>
                </li>
                <li className={css.korolivskyiStandart100TBItem}>
                  <p className={css.korolivskyiStandart100TBItemText}>
                    Маса нетто: 200 г
                  </p>
                </li>
                <li className={css.korolivskyiStandart100TBItem}>
                  <p className={css.korolivskyiStandart100TBItemText}>
                    Кількість пакетиків: 100 штук
                  </p>
                </li>
                <li className={css.korolivskyiStandart100TBItem}>
                  <p className={css.korolivskyiStandart100TBItemText}>
                    Країна походження: Шрі-Ланка (о. Цейлон)
                  </p>
                </li>
                <li className={css.korolivskyiStandart100TBItem}>
                  <p className={css.korolivskyiStandart100TBItemText}>
                    Форма випуску: пакетований з ярликом
                  </p>
                </li>
                <li className={css.korolivskyiStandart100TBItem}>
                  <p className={css.korolivskyiStandart100TBItemText}>
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

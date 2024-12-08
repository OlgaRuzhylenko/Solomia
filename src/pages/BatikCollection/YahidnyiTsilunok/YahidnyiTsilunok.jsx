import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import YahidnyiTsilunokImg from "../../../images/batik/classic/1.png";
import css from "./YahidnyiTsilunok.module.css";

export default function YahidnyiTsilunok() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.yahidnyiTsilunokSection}>
        <div className="container">
          <div className={css.yahidnyiTsilunokSectionBox}>
            <img
              src={YahidnyiTsilunokImg}
              alt="пачка чаю Батік Ягідний Цілунок"
              className={css.yahidnyiTsilunokImg}
            />
            <div className={css.yahidnyiTsilunokWrapper}>
              <h1 className={css.yahidnyiTsilunokTitle}>
                Batik <br />
                <span>ЯГІДНИЙ ЦІЛУНОК</span>
              </h1>
              <h2 className={css.yahidnyiTsilunokSubtitle}>
                Чай чорний купажований дрібний ароматизований з полуницею,
                малиною та чорною смородиною, <br />
                25 пакетиків
              </h2>
              <p className={css.yahidnyiTsilunokText}>
                Улюблені та найцінніші смакові характеристики чаїв з найкращих
                плантацій Індії та острова Цейлон поєднані у вибуховій та
                яскравій ягідній композиції з додаванням полуничних, малинових і
                смородинових смаків та ароматів. Ягідне натхнення і гарній
                настрій у кожній чашці.
              </p>
              <ul className={css.yahidnyiTsilunokList}>
                <li className={css.yahidnyiTsilunokItem}>
                  <p className={css.yahidnyiTsilunokItemText}>
                    Різновид чаю: чорний чай ароматизований
                  </p>
                </li>
                <li className={css.yahidnyiTsilunokItem}>
                  <p className={css.yahidnyiTsilunokItemText}>
                    Маса нетто: 37,5 г
                  </p>
                </li>
                <li className={css.yahidnyiTsilunokItem}>
                  <p className={css.yahidnyiTsilunokItemText}>
                    Кількість пакетиків: 25 штук
                  </p>
                </li>
                <li className={css.yahidnyiTsilunokItem}>
                  <p className={css.yahidnyiTsilunokItemText}>
                    Країна походження: Індія, Шрі-Ланка (о. Цейлон)
                  </p>
                </li>
                <li className={css.yahidnyiTsilunokItem}>
                  <p className={css.yahidnyiTsilunokItemText}>
                    Форма випуску: пакетований з ярликом
                  </p>
                </li>
                <li className={css.yahidnyiTsilunokItem}>
                  <p className={css.yahidnyiTsilunokItemText}>
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

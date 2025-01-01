import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import badoryiLymon from "../../../images/batik/classic/15.jpg";
import css from "./BadoryiLymon.module.css";

export default function BadoryiLymon() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.badoryiLymonSection}>
        <div className="container">
          <div className={css.badoryiLymonBox}>
            <img
              src={badoryiLymon}
              alt="пачка чаю Батік Бадьорий Лимон 25 пакетиків"
              className={css.badoryiLymonImg}
            />
            <div className={css.badoryiLymonWrapper}>
              <h1 className={css.badoryiLymonTitle}>
                Batik <br />
                <span>БАДЬОРИЙ ЛИМОН</span>
              </h1>
              <h2 className={css.badoryiLymonSubtitle}>
                Чай чорний купажований дрібний ароматизований з лимоном,
                <br />
                25 пакетиків
              </h2>
              <p className={css.badoryiLymonText}>
                Улюблені та найцінніші смакові характеристики чаїв з найкращих
                плантацій Індії та острова Цейлон поєднані з приємним і
                улюбленим соковитим смаком та ароматом лимону. Заряд бадьорості
                і гарного настрою у кожній чашці.
              </p>
              <ul className={css.badoryiLymonList}>
                <li className={css.badoryiLymonItem}>
                  <p className={css.badoryiLymonItemText}>
                    Різновид чаю: чорний чай ароматизований
                  </p>
                </li>
                <li className={css.badoryiLymonItem}>
                  <p className={css.badoryiLymonItemText}>Маса нетто: 37,5 г</p>
                </li>
                <li className={css.badoryiLymonItem}>
                  <p className={css.badoryiLymonItemText}>
                    Кількість пакетиків: 25 штук
                  </p>
                </li>
                <li className={css.badoryiLymonItem}>
                  <p className={css.badoryiLymonItemText}>
                    Країна походження: Індія, Шрі-Ланка (о. Цейлон)
                  </p>
                </li>
                <li className={css.badoryiLymonItem}>
                  <p className={css.badoryiLymonItemText}>
                    Форма випуску: пакетований з ярликом
                  </p>
                </li>
                <li className={css.badoryiLymonItem}>
                  <p className={css.badoryiLymonItemText}>
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

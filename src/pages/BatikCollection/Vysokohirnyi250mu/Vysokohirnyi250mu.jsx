import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import vysokohirnyi250mu from "../../../images/batik/classic/7.png";
import css from "./Vysokohirnyi250mu.module.css";

export default function Vysokohirnyi250mu() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.vysokohirnyi250muSection}>
        <div className="container">
          <div className={css.vysokohirnyi250muBox}>
            <img
              src={vysokohirnyi250mu}
              alt="пачка чаю Батік високогірний стандарт B.O.P. 250 грам в м'якій упаковці"
              className={css.vysokohirnyi250muImg}
            />
            <div className={css.vysokohirnyi250muWrapper}>
              <h1 className={css.vysokohirnyi250muTitle}>
                Batik <br />
                <span>ВИСОКОГІРНИЙ (В.О.Р)</span>
              </h1>
              <h2 className={css.vysokohirnyi250muSubtitle}>
                Чай чорний цейлонський дрібний,
                <br />
                250г, м/у
              </h2>
              <p className={css.vysokohirnyi250muText}>
                Чорний чай стандарту «В.О.Р.» (Broken Orange Pekoe) вирощений
                виключно на високогірних плантаціях острову Цейлон. Молоде чайне
                листя збирається лише вручну. Спеціально подрібнений чай швидко
                заварюється, створюючи міцний напій з яскравим терпким смаком та
                тонким ароматом.
              </p>
              <p className={css.vysokohirnyi250muText}>
                Терпкий смак та вишуканий тонкий аромат, що притаманний
                Високогір’ю.
              </p>
              <ul className={css.vysokohirnyi250muList}>
                <li className={css.vysokohirnyi250muItem}>
                  <p className={css.vysokohirnyi250muItemText}>
                    Різновид чаю: чорний чай
                  </p>
                </li>
                <li className={css.vysokohirnyi250muItem}>
                  <p className={css.vysokohirnyi250muItemText}>
                    Маса нетто: 250 г
                  </p>
                </li>
                <li className={css.vysokohirnyi250muItem}>
                  <p className={css.vysokohirnyi250muItemText}>
                    Країна походження: Шрі-Ланка (о. Цейлон)
                  </p>
                </li>
                <li className={css.vysokohirnyi250muItem}>
                  <p className={css.vysokohirnyi250muItemText}>
                    Форма випуску: розсипний
                  </p>
                </li>
                <li className={css.vysokohirnyi250muItem}>
                  <p className={css.vysokohirnyi250muItemText}>
                    Тип упаковки: м’яка упаковка
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

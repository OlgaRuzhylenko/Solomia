import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import vysokohirnyi100 from "../../../images/batik/classic/8.jpg";
import css from "./Vysokohirnyi100.module.css";

export default function Vysokohirnyi100() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.vysokohirnyi100Section}>
        <div className="container">
          <div className={css.vysokohirnyi100Box}>
            <img
              src={vysokohirnyi100}
              alt="пачка чаю Батік високогірний стандарт B.O.P. 100 грам в картонній упаковці"
              className={css.vysokohirnyi100Img}
            />
            <div className={css.vysokohirnyi100Wrapper}>
              <h1 className={css.vysokohirnyi100Title}>
                Batik <br />
                <span>ВИСОКОГІРНИЙ (В.О.Р)</span>
              </h1>
              <h2 className={css.vysokohirnyi100Subtitle}>
                Чай чорний цейлонський дрібний,
                <br />
                100 г
              </h2>
              <p className={css.vysokohirnyi100Text}>
                Чорний чай стандарту «В.О.Р.» (Broken Orange Pekoe) вирощений
                виключно на високогірних плантаціях острову Цейлон. Молоде чайне
                листя збирається лише вручну. Спеціально подрібнений чай швидко
                заварюється, створюючи міцний напій з яскравим терпким смаком та
                тонким ароматом.
              </p>
              <p className={css.vysokohirnyi100Text}>
                Терпкий смак та вишуканий тонкий аромат, що притаманний
                Високогір’ю.
              </p>
              <ul className={css.vysokohirnyi100List}>
                <li className={css.vysokohirnyi100Item}>
                  <p className={css.vysokohirnyi100ItemText}>
                    Різновид чаю: чорний чай
                  </p>
                </li>
                <li className={css.vysokohirnyi100Item}>
                  <p className={css.vysokohirnyi100ItemText}>
                    Маса нетто: 100 г
                  </p>
                </li>
                <li className={css.vysokohirnyi100Item}>
                  <p className={css.vysokohirnyi100ItemText}>
                    Країна походження: Шрі-Ланка (о. Цейлон)
                  </p>
                </li>
                <li className={css.vysokohirnyi100Item}>
                  <p className={css.vysokohirnyi100ItemText}>
                    Форма випуску: розсипний
                  </p>
                </li>
                <li className={css.vysokohirnyi100Item}>
                  <p className={css.vysokohirnyi100ItemText}>
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

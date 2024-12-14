import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import tseilonskyiVysokohirnyiImg from "../../../images/batik/batik-gold/7.png";
import css from "./TseilonskyiVysokohirnyi.module.css";

export default function TseilonskyiVysokohirnyi() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.tseilonskyiVysokohirnyiSection}>
        <div className="container">
          <div className={css.tseilonskyiVysokohirnyiBox}>
            <img
              src={tseilonskyiVysokohirnyiImg}
              alt="пачка чаю Батік Голд Цейлонський високогірний"
              className={css.tseilonskyiVysokohirnyiImg}
            />
            <div className={css.tseilonskyiVysokohirnyiWrapper}>
              <h1 className={css.tseilonskyiVysokohirnyiTitle}>
                Batik GOLD <br />
                <span>ЦЕЙЛОНСЬКИЙ ВИСОКОГІРНИЙ</span>
              </h1>
              <h2 className={css.tseilonskyiVysokohirnyiSubtitle}>
                Чай чорний цейлонський дрібний,
                <br />
                25 пакетиків
              </h2>
              <p className={css.tseilonskyiVysokohirnyiText}>
                Чорний чай з подрібненого листя найкращого цейлонського
                високогірного чаю, у якому гармонійно поєднані вишуканий
                яскравий аромат та класичний смак з помірною терпкістю і
                міцністю, притаманній Високогір’ю.
              </p>
              <p className={css.tseilonskyiVysokohirnyiText}>
                Терпкий та насичений смак, ніжний фруктово – солодовий аромат.
              </p>
              <ul className={css.tseilonskyiVysokohirnyiList}>
                <li className={css.tseilonskyiVysokohirnyiItem}>
                  <p className={css.tseilonskyiVysokohirnyiItemText}>
                    Різновид чаю: чорний чай
                  </p>
                </li>
                <li className={css.tseilonskyiVysokohirnyiItem}>
                  <p className={css.tseilonskyiVysokohirnyiItemText}>
                    Маса нетто: 50 г
                  </p>
                </li>
                <li className={css.tseilonskyiVysokohirnyiItem}>
                  <p className={css.tseilonskyiVysokohirnyiItemText}>
                    Кількість пакетиків: 25 штук
                  </p>
                </li>
                <li className={css.tseilonskyiVysokohirnyiItem}>
                  <p className={css.tseilonskyiVysokohirnyiItemText}>
                    Країна походження: Шрі-Ланка (о. Цейлон)
                  </p>
                </li>
                <li className={css.tseilonskyiVysokohirnyiItem}>
                  <p className={css.tseilonskyiVysokohirnyiItemText}>
                    Форма випуску: пакетований з ярликом
                  </p>
                </li>
                <li className={css.tseilonskyiVysokohirnyiItem}>
                  <p className={css.tseilonskyiVysokohirnyiItemText}>
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

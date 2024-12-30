import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import serednolystovyi from "../../../images/batik/classic/9.jpg";
import css from "./Serednolystovyi.module.css";

export default function Serednolystovyi() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.serednolystovyiSection}>
        <div className="container">
          <div className={css.serednolystovyiBox}>
            <img
              src={serednolystovyi}
              alt="пачка чаю Батік середньолистовий стандарт F.B.O.P. 100 грам в картонній упаковці"
              className={css.serednolystovyiImg}
            />
            <div className={css.serednolystovyiWrapper}>
              <h1 className={css.serednolystovyiTitle}>
                Batik <br />
                <span>СЕРЕДНЬОЛИСТОВИЙ (F.B.O.P)</span>
              </h1>
              <h2 className={css.serednolystovyiSubtitle}>
                Чай чорний цейлонський середньолистовий,
                <br />
                100 г
              </h2>
              <p className={css.serednolystovyiText}>
                Чорний середньолистовий чай стандарту «F.B.O.P.» (Flowery Broken
                Orange Pekoe) містить тіпси – чайні бруньки, завдяки чому чай
                насичений ефірними маслами, які додають його смаку шляхетної
                терпкості, а аромату – витончених квіткових нот. Міцність та
                м’якість, насиченість та ніжність – усі відтінки ідеально
                співзвучні, немов кольори на цейлонському батику.
              </p>
              <p className={css.serednolystovyiText}>
                Насичений та вишуканий смак, витончений з яскравими квітковими
                відтінками аромат.
              </p>
              <ul className={css.serednolystovyiList}>
                <li className={css.serednolystovyiItem}>
                  <p className={css.serednolystovyiItemText}>
                    Різновид чаю: чорний чай
                  </p>
                </li>
                <li className={css.serednolystovyiItem}>
                  <p className={css.serednolystovyiItemText}>
                    Маса нетто: 100 г
                  </p>
                </li>
                <li className={css.serednolystovyiItem}>
                  <p className={css.serednolystovyiItemText}>
                    Країна походження: Шрі-Ланка (о. Цейлон)
                  </p>
                </li>
                <li className={css.serednolystovyiItem}>
                  <p className={css.serednolystovyiItemText}>
                    Форма випуску: розсипний
                  </p>
                </li>
                <li className={css.serednolystovyiItem}>
                  <p className={css.serednolystovyiItemText}>
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

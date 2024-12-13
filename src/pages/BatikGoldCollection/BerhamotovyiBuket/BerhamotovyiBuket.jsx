import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import berhamotovyiBuketImg from "../../../images/batik/batik-gold/5.png";
import css from "./BerhamotovyiBuket.module.css";

export default function BerhamotovyiBuket() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.berhamotovyiBuketSection}>
        <div className="container">
          <div className={css.berhamotovyiBuketBox}>
            <img
              src={berhamotovyiBuketImg}
              alt="пачка чаю Батік Голд Бергамотовий Букет"
              className={css.berhamotovyiBuketImg}
            />
            <div className={css.berhamotovyiBuketWrapper}>
              <h1 className={css.berhamotovyiBuketTitle}>
                Batik GOLD <br />
                <span>БЕРГАМОТОВИЙ БУКЕТ</span>
              </h1>
              <h2 className={css.berhamotovyiBuketSubtitle}>
                Чай чорний цейлонський дрібний з ароматом бергамота,
                <br />
                25 пакетиків у конвертах
              </h2>
              <p className={css.berhamotovyiBuketText}>
                Бездоганне поєднання відбірного чорного цейлонського чаю з
                неперевершеним цитрусовим ароматом бергамота. Насиченість,
                терпкість та легкі цитрусові аромати бергамота неодмінно
                прийдуться до вподоби всім шанувальникам цієї чайної композиції.
              </p>
              <ul className={css.berhamotovyiBuketList}>
                <li className={css.berhamotovyiBuketItem}>
                  <p className={css.berhamotovyiBuketItemText}>
                    Різновид чаю: чорний чай ароматизований
                  </p>
                </li>
                <li className={css.berhamotovyiBuketItem}>
                  <p className={css.berhamotovyiBuketItemText}>
                    Маса нетто: 50 г
                  </p>
                </li>
                <li className={css.berhamotovyiBuketItem}>
                  <p className={css.berhamotovyiBuketItemText}>
                    Кількість пакетиків: 25 штук
                  </p>
                </li>
                <li className={css.berhamotovyiBuketItem}>
                  <p className={css.berhamotovyiBuketItemText}>
                    Країна походження: Шрі-Ланка (о. Цейлон)
                  </p>
                </li>
                <li className={css.berhamotovyiBuketItem}>
                  <p className={css.berhamotovyiBuketItemText}>
                    Форма випуску: пакетований з ярликом у конвертах
                  </p>
                </li>
                <li className={css.berhamotovyiBuketItem}>
                  <p className={css.berhamotovyiBuketItemText}>
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

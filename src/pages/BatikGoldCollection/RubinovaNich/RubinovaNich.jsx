import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import rubinovaNichImg from "../../../images/batik/batik-gold/4.png";
import css from "./RubinovaNich.module.css";

export default function RubinovaNich() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.rubinovaNichSection}>
        <div className="container">
          <div className={css.rubinovaNichBox}>
            <img
              src={rubinovaNichImg}
              alt="пачка чаю Батік Голд Рубінова Ніч"
              className={css.rubinovaNichImg}
            />
            <div className={css.rubinovaNichWrapper}>
              <h1 className={css.rubinovaNichTitle}>
                Batik GOLD <br />
                <span>РУБІНОВА НІЧ</span>
              </h1>
              <h2 className={css.rubinovaNichSubtitle}>
                Чай чорний цейлонський дрібний з каркаде та ароматами малини і
                вишні,
                <br />
                25 пакетиків у конвертах
              </h2>
              <p className={css.rubinovaNichText}>
                Насичений та терпкий смак, коричнево-рубіновий колір настою,
                солодкий та звабливий аромат малини та вишні. Справжній шедевр у
                вашій чашці, що зачарує вас з першого погляду та залишить палким
                шанувальником цієї чайної композиції.
              </p>
              <ul className={css.rubinovaNichList}>
                <li className={css.rubinovaNichItem}>
                  <p className={css.rubinovaNichItemText}>
                    Різновид чаю: чорний чай ароматизований
                  </p>
                </li>
                <li className={css.rubinovaNichItem}>
                  <p className={css.rubinovaNichItemText}>Маса нетто: 50 г</p>
                </li>
                <li className={css.rubinovaNichItem}>
                  <p className={css.rubinovaNichItemText}>
                    Кількість пакетиків: 25 штук
                  </p>
                </li>
                <li className={css.rubinovaNichItem}>
                  <p className={css.rubinovaNichItemText}>
                    Країна походження: Шрі-Ланка (о. Цейлон)
                  </p>
                </li>
                <li className={css.rubinovaNichItem}>
                  <p className={css.rubinovaNichItemText}>
                    Форма випуску: пакетований з ярликом у конвертах
                  </p>
                </li>
                <li className={css.rubinovaNichItem}>
                  <p className={css.rubinovaNichItemText}>
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

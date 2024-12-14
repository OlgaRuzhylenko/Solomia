import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import goldErlHreiImg from "../../../images/batik/batik-gold/8.png";
import css from "./GoldErlHrei.module.css";

export default function GoldErlHrei() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.goldErlHreiSection}>
        <div className="container">
          <div className={css.goldErlHreiBox}>
            <img
              src={goldErlHreiImg}
              alt="пачка чаю Батік Голд Ерл Грей"
              className={css.goldErlHreiImg}
            />
            <div className={css.goldErlHreiWrapper}>
              <h1 className={css.goldErlHreiTitle}>
                Batik GOLD <br />
                <span>ЕРЛ ГРЕЙ</span>
              </h1>
              <h2 className={css.goldErlHreiSubtitle}>
                Чай чорний цейлонський дрібний з ароматом бергамота,
                <br />
                25 пакетиків
              </h2>
              <p className={css.goldErlHreiText}>
                Для поціновувачів терпкого і яскравого аромату подрібнене листя
                найкращих сортів цейлонського чаю поєднано з вишуканим ароматом
                бергамота. Це класична, улюблена та добре відома композиція, яку
                ми обираємо, коли хочемо насолодитися знайомим і перевіреним
                роками смаком.
              </p>
              <p className={css.goldErlHreiText}>
                Терпкий насичений смак з відчутними цитрусовими смаком
                бергамота, з ніжним цитрусово-квітковим ароматом.
              </p>
              <ul className={css.goldErlHreiList}>
                <li className={css.goldErlHreiItem}>
                  <p className={css.goldErlHreiItemText}>
                    Різновид чаю: чорний чай
                  </p>
                </li>
                <li className={css.goldErlHreiItem}>
                  <p className={css.goldErlHreiItemText}>Маса нетто: 50 г</p>
                </li>
                <li className={css.goldErlHreiItem}>
                  <p className={css.goldErlHreiItemText}>
                    Кількість пакетиків: 25 штук
                  </p>
                </li>
                <li className={css.goldErlHreiItem}>
                  <p className={css.goldErlHreiItemText}>
                    Країна походження: Шрі-Ланка (о. Цейлон)
                  </p>
                </li>
                <li className={css.goldErlHreiItem}>
                  <p className={css.goldErlHreiItemText}>
                    Форма випуску: пакетований з ярликом
                  </p>
                </li>
                <li className={css.goldErlHreiItem}>
                  <p className={css.goldErlHreiItemText}>
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

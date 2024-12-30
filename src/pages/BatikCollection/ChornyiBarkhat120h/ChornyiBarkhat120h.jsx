import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import chornyiBarkhat120h from "../../../images/batik/classic/10.jpg";
import css from "./ChornyiBarkhat120h.module.css";

export default function ChornyiBarkhat120h() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.chornyiBarkhat120hSection}>
        <div className="container">
          <div className={css.chornyiBarkhat120hBox}>
            <img
              src={chornyiBarkhat120h}
              alt="пачка чаю Батік Чорний Бархат 50+10 пакетиків"
              className={css.chornyiBarkhat120hImg}
            />
            <div className={css.chornyiBarkhat120hWrapper}>
              <h1 className={css.chornyiBarkhat120hTitle}>
                Batik <br />
                <span>ЧОРНИЙ БАРХАТ</span>
              </h1>
              <h2 className={css.chornyiBarkhat120hSubtitle}>
                Чай чорний купажований дрібний,
                <br />
                50+10 пакетиків
              </h2>
              <p className={css.chornyiBarkhat120hText}>
                За чорним оксамитом ховається різноманіття барв, оскільки цей
                чай поєднання декількох чайних культур. Його багатогранність
                зачарує найвибагливіших шанувальників чорних чаїв. Терпкість та
                насиченість, тонка нота, яка нагадує цитрусовий аромат, і все це
                на фоні виключної міцності робить Чорний бархат одним з
                найкращих чаїв у своєму класі.
              </p>
              <p className={css.chornyiBarkhat120hText}>
                Міцний і насичений смак, ніжний аромат з горіхово – цитрусовими
                відтінками.
              </p>
              <ul className={css.chornyiBarkhat120hList}>
                <li className={css.chornyiBarkhat120hItem}>
                  <p className={css.chornyiBarkhat120hItemText}>
                    Різновид чаю: чорний чай
                  </p>
                </li>
                <li className={css.chornyiBarkhat120hItem}>
                  <p className={css.chornyiBarkhat120hItemText}>
                    Маса нетто: 120 г
                  </p>
                </li>
                <li className={css.chornyiBarkhat120hItem}>
                  <p className={css.chornyiBarkhat120hItemText}>
                    Кількість пакетиків: 60 штук
                  </p>
                </li>
                <li className={css.chornyiBarkhat120hItem}>
                  <p className={css.chornyiBarkhat120hItemText}>
                    Країна походження: Шрі-Ланка (о. Цейлон), Кенія
                  </p>
                </li>
                <li className={css.chornyiBarkhat120hItem}>
                  <p className={css.chornyiBarkhat120hItemText}>
                    Форма випуску: пакетований без ярлику
                  </p>
                </li>
                <li className={css.chornyiBarkhat120hItem}>
                  <p className={css.chornyiBarkhat120hItemText}>
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

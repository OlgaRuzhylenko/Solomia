import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import sweetBerryImg from "../../../images/askold/askoldEmotion/1.jpg";
import css from "./SweetBerry.module.css";

export default function SweetBerry() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.sweetBerrySection}>
        <div className="container">
          <div className={css.sweetBerryBox}>
            <img
              src={sweetBerryImg}
              alt="пачка чаю Askold Emotion Sweet Berry 20 конвертів"
              className={css.sweetBerryImg}
            />
            <div className={css.sweetBerryWrapper}>
              <h1 className={css.sweetBerryTitle}>
                Askold Emotion <br />
                <span>SWEET BERRY</span>
              </h1>
              <h2 className={css.sweetBerrySubtitle}>
                Суміш з каркаде, шипшини, малини та цедри апельсина
                ароматизована,
                <br />
                20 пакетиків у конвертах
              </h2>
              <p className={css.sweetBerryText}>
                Яскравий аромат стиглої малини та рубіновий колір настою
                зачаровують. Спокусливий напій з малини, шипшини, гібіскуса
                чудово смакує гарячим та освіжає з льодом.
              </p>
              <ul className={css.sweetBerryList}>
                <li className={css.sweetBerryItem}>
                  <p className={css.sweetBerryItemText}>
                    Різновид чаю: cуміш на основі каркаде ароматизована
                  </p>
                </li>
                <li className={css.sweetBerryItem}>
                  <p className={css.sweetBerryItemText}>Маса нетто: 36 г</p>
                </li>
                <li className={css.sweetBerryItem}>
                  <p className={css.sweetBerryItemText}>
                    Кількість пакетиків: 20 штук
                  </p>
                </li>
                <li className={css.sweetBerryItem}>
                  <p className={css.sweetBerryItemText}>
                    Форма випуску: пакетований з ярликом у конвертах
                  </p>
                </li>
                <li className={css.sweetBerryItem}>
                  <p className={css.sweetBerryItemText}>
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

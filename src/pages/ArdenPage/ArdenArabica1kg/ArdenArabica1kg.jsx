import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import ardenArabica1kgImg from "../../../images/arden/7.jpg";
import css from "./ArdenArabica1kg.module.css";

export default function ArdenArabica1kg() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.ardenArabica1kgSection}>
        <div className="container">
          <div className={css.ardenArabica1kgBox}>
            <img
              src={ardenArabica1kgImg}
              alt="пачка кави Arden Arabica, 1 кг"
              className={css.ardenArabica1kgImg}
            />
            <div className={css.ardenArabica1kgWrapper}>
              <h1 className={css.ardenArabica1kgTitle}>
                Arden
                <br />
                <span>ARABICA</span>
              </h1>
              <h2 className={css.ardenArabica1kgSubtitle}>
                Кава натуральна смажена в зернах,
                <br />
                1000г, м/у
              </h2>
              <p className={css.ardenArabica1kgText}>
                Вишуканий, м’який та водночас насичений за смаком бленд з
                високоякісних сортів Арабіки з різних континентів з дивовижним
                ароматом, ідеальним балансом кислинки і гірчинки та солодким
                післясмаком з відтінками шоколаду та карамелі. Спеціальна
                методика обсмажування, яка зберігає аромат, гарантує незабутню
                насолоду всім шанувальникам цього виду кави!
              </p>
              <ul className={css.ardenArabica1kgList}>
                <li className={css.ardenArabica1kgItem}>
                  <p className={css.ardenArabica1kgItemText}>
                    Різновид кави: смажена в зернах
                  </p>
                </li>
                <li className={css.ardenArabica1kgItem}>
                  <p className={css.ardenArabica1kgItemText}>
                    Маса нетто: 1000 г
                  </p>
                </li>
                <li className={css.ardenArabica1kgItem}>
                  <p className={css.ardenArabica1kgItemText}>
                    Склад: 100% кава ботанічних сортів Арабіка
                  </p>
                </li>
                <li className={css.ardenArabica1kgItem}>
                  <p className={css.ardenArabica1kgItemText}>
                    Країна походження: Бразилія, Гватемала, Індія
                  </p>
                </li>
                <li className={css.ardenArabica1kgItem}>
                  <p className={css.ardenArabica1kgItemText}>
                    Форма випуску: зернова кава
                  </p>
                </li>
                <li className={css.ardenArabica1kgItem}>
                  <p className={css.ardenArabica1kgItemText}>
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

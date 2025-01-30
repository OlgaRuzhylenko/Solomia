import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import ardenArabica250Img from "../../../images/arden/3.jpg";
import css from "./ArdenArabica250.module.css";

export default function ArdenArabica250() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.ardenArabica250Section}>
        <div className="container">
          <div className={css.ardenArabica250Box}>
            <img
              src={ardenArabica250Img}
              alt="пачка кави Arden Arabica 250 г, м/у"
              className={css.ardenArabica250Img}
            />
            <div className={css.ardenArabica250Wrapper}>
              <h1 className={css.ardenArabica250Title}>
                Arden
                <br />
                <span>ARABICA</span>
              </h1>
              <h2 className={css.ardenArabica250Subtitle}>
                Кава натуральна смажена мелена,
                <br />
                250г, м/у
              </h2>
              <p className={css.ardenArabica250Text}>
                Вишуканий, м’який та водночас насичений за смаком бленд з
                високоякісних сортів Арабіки з різних континентів з дивовижним
                ароматом, ідеальним балансом кислинки і гірчинки та солодким
                післясмаком з відтінками шоколаду та карамелі. Спеціальна
                методика обсмажування, яка зберігає аромат, гарантує незабутню
                насолоду всім шанувальникам цього виду кави!
              </p>
              <ul className={css.ardenArabica250List}>
                <li className={css.ardenArabica250Item}>
                  <p className={css.ardenArabica250ItemText}>
                    Різновид кави: смажена мелена
                  </p>
                </li>
                <li className={css.ardenArabica250Item}>
                  <p className={css.ardenArabica250ItemText}>
                    Маса нетто: 250 г
                  </p>
                </li>
                <li className={css.ardenArabica250Item}>
                  <p className={css.ardenArabica250ItemText}>
                    Склад: 100% кава ботанічних сортів Арабіка
                  </p>
                </li>
                <li className={css.ardenArabica250Item}>
                  <p className={css.ardenArabica250ItemText}>
                    Країна походження: Бразилія, Гватемала, Індія
                  </p>
                </li>
                <li className={css.ardenArabica250Item}>
                  <p className={css.ardenArabica250ItemText}>
                    Форма випуску: мелена кава
                  </p>
                </li>
                <li className={css.ardenArabica250Item}>
                  <p className={css.ardenArabica250ItemText}>
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

import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import ardenCaramel250Img from "../../../images/arden/1.jpg";
import css from "./ArdenCaramel250.module.css";

export default function ArdenCaramel250() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.ardenCaramel250Section}>
        <div className="container">
          <div className={css.ardenCaramel250Box}>
            <img
              src={ardenCaramel250Img}
              alt="пачка кави Arden Caramel 250 г, м/у"
              className={css.ardenCaramel250Img}
            />
            <div className={css.ardenCaramel250Wrapper}>
              <h1 className={css.ardenCaramel250Title}>
                Arden
                <br />
                <span>CARAMEL</span>
              </h1>
              <h2 className={css.ardenCaramel250Subtitle}>
                Кава натуральна смажена мелена ароматизована,
                <br />
                250г, м/у
              </h2>
              <p className={css.ardenCaramel250Text}>
                Улюблений різновид ароматизованої кави на кожен день, в якому
                гармонійно поєднані найкращі сорти добірної Арабіки та Робусти з
                солодким ароматом карамелі. Вишуканий, міцний та
                насичено-глибокий смак з м’якою гірчинкою та яскравими
                карамельними відтінками, без сумніву, зробить Вас постійним
                прихильником цієї кави.
              </p>
              <ul className={css.ardenCaramel250List}>
                <li className={css.ardenCaramel250Item}>
                  <p className={css.ardenCaramel250ItemText}>
                    Різновид кави: смажена мелена ароматизована
                  </p>
                </li>
                <li className={css.ardenCaramel250Item}>
                  <p className={css.ardenCaramel250ItemText}>
                    Маса нетто: 250 г
                  </p>
                </li>
                <li className={css.ardenCaramel250Item}>
                  <p className={css.ardenCaramel250ItemText}>
                    Склад: кава ботанічних сортів Арабіка і Робуста
                  </p>
                </li>
                <li className={css.ardenCaramel250Item}>
                  <p className={css.ardenCaramel250ItemText}>
                    Країна походження: Бразилія, Індія
                  </p>
                </li>
                <li className={css.ardenCaramel250Item}>
                  <p className={css.ardenCaramel250ItemText}>
                    Форма випуску: мелена кава
                  </p>
                </li>
                <li className={css.ardenCaramel250Item}>
                  <p className={css.ardenCaramel250ItemText}>
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

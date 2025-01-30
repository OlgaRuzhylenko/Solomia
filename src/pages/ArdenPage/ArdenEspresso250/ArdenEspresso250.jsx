import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import ardenEspresso250Img from "../../../images/arden/5.jpg";
import css from "./ArdenEspresso250.module.css";

export default function ArdenEspresso250() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.ardenEspresso250Section}>
        <div className="container">
          <div className={css.ardenEspresso250Box}>
            <img
              src={ardenEspresso250Img}
              alt="пачка кави Arden Espresso 250 г, м/у"
              className={css.ardenEspresso250Img}
            />
            <div className={css.ardenEspresso250Wrapper}>
              <h1 className={css.ardenEspresso250Title}>
                Arden
                <br />
                <span>ESPRESSO</span>
              </h1>
              <h2 className={css.ardenEspresso250Subtitle}>
                Кава натуральна смажена мелена,
                <br />
                250г, м/у
              </h2>
              <p className={css.ardenEspresso250Text}>
                Бездоганний купаж з кавових зерен Робусти та Арабіки для
                поціновувачів справжньої міцної кави з добре відчутною гірчинкою
                та кислинкою. Насичений, гармонійний та довершений смак з довгим
                та приємним післясмаком темного шоколаду і карамелі. Для
                справжніх любителів кави, що бадьорить.
              </p>
              <ul className={css.ardenEspresso250List}>
                <li className={css.ardenEspresso250Item}>
                  <p className={css.ardenEspresso250ItemText}>
                    Різновид кави: смажена мелена
                  </p>
                </li>
                <li className={css.ardenEspresso250Item}>
                  <p className={css.ardenEspresso250ItemText}>
                    Маса нетто: 250 г
                  </p>
                </li>
                <li className={css.ardenEspresso250Item}>
                  <p className={css.ardenEspresso250ItemText}>
                    Склад: кава ботанічних сортів Робуста і Арабіка
                  </p>
                </li>
                <li className={css.ardenEspresso250Item}>
                  <p className={css.ardenEspresso250ItemText}>
                    Країна походження: Індія, Бразилія
                  </p>
                </li>
                <li className={css.ardenEspresso250Item}>
                  <p className={css.ardenEspresso250ItemText}>
                    Форма випуску: мелена кава
                  </p>
                </li>
                <li className={css.ardenEspresso250Item}>
                  <p className={css.ardenEspresso250ItemText}>
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

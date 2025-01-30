import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import ardenIrishCream250Img from "../../../images/arden/2.jpg";
import css from "./ArdenIrishCream250.module.css";

export default function ArdenIrishCream250() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.ardenIrishCream250Section}>
        <div className="container">
          <div className={css.ardenIrishCream250Box}>
            <img
              src={ardenIrishCream250Img}
              alt="пачка кави Arden Irish Cream 250 г, м/у"
              className={css.ardenIrishCream250Img}
            />
            <div className={css.ardenIrishCream250Wrapper}>
              <h1 className={css.ardenIrishCream250Title}>
                Arden
                <br />
                <span>IRISH CREAM</span>
              </h1>
              <h2 className={css.ardenIrishCream250Subtitle}>
                Кава натуральна смажена мелена ароматизована,
                <br />
                250г, м/у
              </h2>
              <p className={css.ardenIrishCream250Text}>
                Всесвітньо відомий і популярних різновид ароматизованої кави з
                неперевершеним смаком, в якому гармонійно поєднані найкращі
                сорти добірної Арабіки та Робусти з ароматом ірландського лікеру
                на основі вершків. М’який, насичений та збалансований смак з
                витонченим ароматом, без сумніву, зроблять Вас постійним
                прихильником цієї кави.
              </p>
              <ul className={css.ardenIrishCream250List}>
                <li className={css.ardenIrishCream250Item}>
                  <p className={css.ardenIrishCream250ItemText}>
                    Різновид кави: смажена мелена ароматизована
                  </p>
                </li>
                <li className={css.ardenIrishCream250Item}>
                  <p className={css.ardenIrishCream250ItemText}>
                    Маса нетто: 250 г
                  </p>
                </li>
                <li className={css.ardenIrishCream250Item}>
                  <p className={css.ardenIrishCream250ItemText}>
                    Склад: кава ботанічних сортів Арабіка і Робуста
                  </p>
                </li>
                <li className={css.ardenIrishCream250Item}>
                  <p className={css.ardenIrishCream250ItemText}>
                    Країна походження: Бразилія, Індія
                  </p>
                </li>
                <li className={css.ardenIrishCream250Item}>
                  <p className={css.ardenIrishCream250ItemText}>
                    Форма випуску: мелена кава
                  </p>
                </li>
                <li className={css.ardenIrishCream250Item}>
                  <p className={css.ardenIrishCream250ItemText}>
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

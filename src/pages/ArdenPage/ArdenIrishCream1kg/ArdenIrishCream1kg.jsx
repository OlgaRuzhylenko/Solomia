import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import ardenIrishCream1kgImg from "../../../images/arden/6.png";
import css from "./ArdenIrishCream1kg.module.css";

export default function ArdenIrishCream1kg() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.ardenIrishCream1kgSection}>
        <div className="container">
          <div className={css.ardenIrishCream1kgBox}>
            <img
              src={ardenIrishCream1kgImg}
              alt="пачка кави Arden Irish Cream, 1 кг"
              className={css.ardenIrishCream1kgImg}
            />
            <div className={css.ardenIrishCream1kgWrapper}>
              <h1 className={css.ardenIrishCream1kgTitle}>
                Arden
                <br />
                <span>IRISH CREAM</span>
              </h1>
              <h2 className={css.ardenIrishCream1kgSubtitle}>
                Кава натуральна смажена в зернах ароматизована,
                <br />
                1000г, м/у
              </h2>
              <p className={css.ardenIrishCream1kgText}>
                Всесвітньо відомий і популярних різновид ароматизованої кави з
                неперевершеним смаком, в якому гармонійно поєднані найкращі
                сорти добірної Арабіки та Робусти з ароматом ірландського лікеру
                на основі вершків. М’який, насичений та збалансований смак з
                витонченим ароматом, без сумніву, зроблять Вас постійним
                прихильником цієї кави.
              </p>
              <ul className={css.ardenIrishCream1kgList}>
                <li className={css.ardenIrishCream1kgItem}>
                  <p className={css.ardenIrishCream1kgItemText}>
                    Різновид кави: смажена в зернах ароматизована
                  </p>
                </li>
                <li className={css.ardenIrishCream1kgItem}>
                  <p className={css.ardenIrishCream1kgItemText}>
                    Маса нетто: 1000 г
                  </p>
                </li>
                <li className={css.ardenIrishCream1kgItem}>
                  <p className={css.ardenIrishCream1kgItemText}>
                    Склад: кава ботанічних сортів Арабіка і Робуста
                  </p>
                </li>
                <li className={css.ardenIrishCream1kgItem}>
                  <p className={css.ardenIrishCream1kgItemText}>
                    Країна походження: Бразилія, Індія
                  </p>
                </li>
                <li className={css.ardenIrishCream1kgItem}>
                  <p className={css.ardenIrishCream1kgItemText}>
                    Форма випуску: зернова кава
                  </p>
                </li>
                <li className={css.ardenIrishCream1kgItem}>
                  <p className={css.ardenIrishCream1kgItemText}>
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

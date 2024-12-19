import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import ardenCrema1kgImg from "../../../images/arden/9.png";
import css from "./ArdenCrema1kg.module.css";

export default function ArdenCrema1kg() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.ardenCrema1kgSection}>
        <div className="container">
          <div className={css.ardenCrema1kgBox}>
            <img
              src={ardenCrema1kgImg}
              alt="пачка кави Arden Crema, 1 кг"
              className={css.ardenCrema1kgImg}
            />
            <div className={css.ardenCrema1kgWrapper}>
              <h1 className={css.ardenCrema1kgTitle}>
                Arden
                <br />
                <span>CREMA</span>
              </h1>
              <h2 className={css.ardenCrema1kgSubtitle}>
                Кава натуральна смажена в зернах,
                <br />
                1000г, м/у
              </h2>
              <p className={css.ardenCrema1kgText}>
                Збалансований за смаком та ароматом бленд, що поєднав у собі
                благородні зерна Арабіки та високоякісні зерна Робусти.
                Популярний у всьому світі бленд з солодким і гармонійним смаком,
                в якому переважають квітково – фруктові відтінки з м’якими
                шоколадно- ванільними нотами і тонкою кислинкою.
              </p>
              <ul className={css.ardenCrema1kgList}>
                <li className={css.ardenCrema1kgItem}>
                  <p className={css.ardenCrema1kgItemText}>
                    Різновид кави: смажена в зернах
                  </p>
                </li>
                <li className={css.ardenCrema1kgItem}>
                  <p className={css.ardenCrema1kgItemText}>
                    Маса нетто: 1000 г
                  </p>
                </li>
                <li className={css.ardenCrema1kgItem}>
                  <p className={css.ardenCrema1kgItemText}>
                    Склад: кава ботанічних сортів Арабіка і Робуста
                  </p>
                </li>
                <li className={css.ardenCrema1kgItem}>
                  <p className={css.ardenCrema1kgItemText}>
                    Країна походження: Бразилія, Індія
                  </p>
                </li>
                <li className={css.ardenCrema1kgItem}>
                  <p className={css.ardenCrema1kgItemText}>
                    Форма випуску: зернова кава
                  </p>
                </li>
                <li className={css.ardenCrema1kgItem}>
                  <p className={css.ardenCrema1kgItemText}>
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

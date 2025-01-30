import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import ardenCrema250Img from "../../../images/arden/4.jpg";
import css from "./ArdenCrema250.module.css";

export default function ArdenCrema250() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.ardenCrema250Section}>
        <div className="container">
          <div className={css.ardenCrema250Box}>
            <img
              src={ardenCrema250Img}
              alt="пачка кави Arden Crema 250 г, м/у"
              className={css.ardenCrema250Img}
            />
            <div className={css.ardenCrema250Wrapper}>
              <h1 className={css.ardenCrema250Title}>
                Arden
                <br />
                <span>CREMA</span>
              </h1>
              <h2 className={css.ardenCrema250Subtitle}>
                Кава натуральна смажена мелена,
                <br />
                250г, м/у
              </h2>
              <p className={css.ardenCrema250Text}>
                Збалансований за смаком та ароматом бленд, що поєднав у собі
                благородні зерна Арабіки та високоякісні зерна Робусти.
                Популярний у всьому світі бленд з солодким і гармонійним смаком,
                в якому переважають квітково – фруктові відтінки з м’якими
                шоколадно- ванільними нотами і тонкою кислинкою.
              </p>
              <ul className={css.ardenCrema250List}>
                <li className={css.ardenCrema250Item}>
                  <p className={css.ardenCrema250ItemText}>
                    Різновид кави: смажена мелена
                  </p>
                </li>
                <li className={css.ardenCrema250Item}>
                  <p className={css.ardenCrema250ItemText}>Маса нетто: 250 г</p>
                </li>
                <li className={css.ardenCrema250Item}>
                  <p className={css.ardenCrema250ItemText}>
                    Склад: кава ботанічних сортів Арабіка і Робуста
                  </p>
                </li>
                <li className={css.ardenCrema250Item}>
                  <p className={css.ardenCrema250ItemText}>
                    Країна походження: Бразилія, Індія
                  </p>
                </li>
                <li className={css.ardenCrema250Item}>
                  <p className={css.ardenCrema250ItemText}>
                    Форма випуску: мелена кава
                  </p>
                </li>
                <li className={css.ardenCrema250Item}>
                  <p className={css.ardenCrema250ItemText}>
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

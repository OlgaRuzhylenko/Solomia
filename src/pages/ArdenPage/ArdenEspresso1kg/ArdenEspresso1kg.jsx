import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import ardenEspresso1kgImg from "../../../images/arden/8.jpg";
import css from "./ArdenEspresso1kg.module.css";

export default function ArdenEspresso1kg() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.ardenEspresso1kgSection}>
        <div className="container">
          <div className={css.ardenEspresso1kgBox}>
            <img
              src={ardenEspresso1kgImg}
              alt="пачка кави Arden Espresso, 1 кг"
              className={css.ardenEspresso1kgImg}
            />
            <div className={css.ardenEspresso1kgWrapper}>
              <h1 className={css.ardenEspresso1kgTitle}>
                Arden
                <br />
                <span>ESPRESSO</span>
              </h1>
              <h2 className={css.ardenEspresso1kgSubtitle}>
                Кава натуральна смажена в зернах,
                <br />
                1000г, м/у
              </h2>
              <p className={css.ardenEspresso1kgText}>
                Бездоганний купаж з кавових зерен Робусти та Арабіки для
                поціновувачів справжньої міцної кави з добре відчутною гірчинкою
                та кислинкою. Насичений, гармонійний та довершений смак з довгим
                та приємним післясмаком темного шоколаду і карамелі. Для
                справжніх любителів кави, що бадьорить.
              </p>
              <ul className={css.ardenEspresso1kgList}>
                <li className={css.ardenEspresso1kgItem}>
                  <p className={css.ardenEspresso1kgItemText}>
                    Різновид кави: смажена в зернах
                  </p>
                </li>
                <li className={css.ardenEspresso1kgItem}>
                  <p className={css.ardenEspresso1kgItemText}>
                    Маса нетто: 1000 г
                  </p>
                </li>
                <li className={css.ardenEspresso1kgItem}>
                  <p className={css.ardenEspresso1kgItemText}>
                    Склад: кава ботанічних сортів Робуста і Арабіка
                  </p>
                </li>
                <li className={css.ardenEspresso1kgItem}>
                  <p className={css.ardenEspresso1kgItemText}>
                    Країна походження: Індія, Бразилія
                  </p>
                </li>
                <li className={css.ardenEspresso1kgItem}>
                  <p className={css.ardenEspresso1kgItemText}>
                    Форма випуску: зернова кава
                  </p>
                </li>
                <li className={css.ardenEspresso1kgItem}>
                  <p className={css.ardenEspresso1kgItemText}>
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

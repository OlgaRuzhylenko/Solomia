import Header from "../../components/Header/Header";
import { NavLink } from "react-router-dom";
import fact1 from "../../images/facts/fact-coffee1.jpg";
import fact2 from "../../images/facts/fact-coffee2.jpg";
import fact3 from "../../images/facts/factWhyTeaIsTea.jpg";
import fact4 from "../../images/facts/factTea2.jpg";
import fact5 from "../../images/facts/factTea3.jpg";
import fact6 from "../../images/facts/factTea4.jpg";
import css from "./UsefulToKnow.module.css";

export default function UsefulToKnow() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.usefulToKnowSection}>
        <h1 className={css.usefulToKnowMainTitle}>Корисно знати</h1>
        <div className="container">
          <ul className={css.usefulToKnowList}>
            <li className={css.usefulToKnowItem}>
              <img
                src={fact1}
                alt="кавові зерна на темному фоні, поруч портафільтр для заварювання кави"
                className={css.usefulToKnowImage}
              ></img>

              <h2 className={css.usefulToKnowTitle}>Цікаві факти про каву.</h2>
              <p className={css.usefulToKnowText}>
                Цікаві факти про каву. Кава – це більше, ніж просто напій, це
                справжня насолода, що розкриває свої таємниці та дива перед
                нами.
              </p>
              <NavLink to="/">
                <p className={css.usefulToKnowlink}>Читати далі </p>
              </NavLink>
            </li>

            <li className={css.usefulToKnowItem}>
              <img
                src={fact2}
                alt="чоловіча рука, яка наливає каву в білу чашку і формує гарний візерунок на поверхні"
                className={css.usefulToKnowImage}
              ></img>

              <h2 className={css.usefulToKnowTitle}>Арабіка чи Робуста?</h2>
              <p className={css.usefulToKnowText}>
                Арабіка чи Робуста? Розкриваємо таємниці двох видів кавових
                зерен. Давайте поглянемо на два найпопулярніших види кавових
                зерен – Арабіка і Робуста та розкриємо їхні таємниці.
              </p>
              <NavLink to="/">
                <p className={css.usefulToKnowlink}>Читати далі </p>
              </NavLink>
            </li>

            <li className={css.usefulToKnowItem}>
              <img
                src={fact3}
                alt="чашка із зеленим чаєм на зеленій тарілочці. Поруч чаїнки, які написані у дерев'яну ложку"
                className={css.usefulToKnowImage}
              ></img>

              <h2 className={css.usefulToKnowTitle}>
                Чому чай називають чаєм?
              </h2>
              <p className={css.usefulToKnowText}>
                Чому чай називають чаєм? Протягом століть чай став більше, ніж
                напій. Чаювання – традиція: сімейна, дружня, ділова. Чаювання –
                час і привід зібратися разом.
              </p>
              <NavLink to="/">
                <p className={css.usefulToKnowlink}>Читати далі </p>
              </NavLink>
            </li>

            <li className={css.usefulToKnowItem}>
              <img
                src={fact4}
                alt="долоні, в яких насипаний чорний чай"
                className={css.usefulToKnowImage}
              ></img>

              <h2 className={css.usefulToKnowTitle}>
                Від чого залежить якість чаю?
              </h2>
              <p className={css.usefulToKnowText}>
                Як визначити якість чаю? Маємо кілька підказок щодо оцінки чаю,
                який ви купуєте. Однак це лише підказки, а не правила.
              </p>
              <NavLink to="/">
                <p className={css.usefulToKnowlink}>Читати далі </p>
              </NavLink>
            </li>

            <li className={css.usefulToKnowItem}>
              <img
                src={fact5}
                alt="три ложки, в яких знаходиться різний чай"
                className={css.usefulToKnowImage}
              ></img>

              <h2 className={css.usefulToKnowTitle}>Стандарти чайного листа</h2>
              <p className={css.usefulToKnowText}>
                Стандарти чайного листа: РEKOE, В.О.P., O.P.A., F.B.О.P., GUN
                POWDER, С.Т.С., УЛУН (OOLONG) - які таємниці приховують ці
                назви?
              </p>
              <NavLink to="/">
                <p className={css.usefulToKnowlink}>Читати далі </p>
              </NavLink>
            </li>

            <li className={css.usefulToKnowItem}>
              <img
                src={fact6}
                alt="прозорий заварник із чаєм та чай в дерев'яній ложці поруч"
                className={css.usefulToKnowImage}
              ></img>

              <h2 className={css.usefulToKnowTitle}>
                7 помилок при заварюванні чаю
              </h2>
              <p className={css.usefulToKnowText}>
                7 помилок при заварюванні чаю Ніхто не застрахований, помилки
                трапляються. Але коли знаєш про помилки при заварюванні чаю
                заздалегідь, їх можна не допустити і отримати винятковий чай.
              </p>
              <NavLink to="/">
                <p className={css.usefulToKnowlink}>Читати далі </p>
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

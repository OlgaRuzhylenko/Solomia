import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import arabicaOrRobustaImg from "../../../images/facts/fact-coffee_2Page.jpg";
import css from "./ArabicaOrRobusta.module.css";

export default function ArabicaOrRobusta() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.arabicaOrRobustaSection}>
        <div className="container">
          <article className={css.arabicaOrRobustaArticle}>
            <img
              src={arabicaOrRobustaImg}
              alt="рука баристи, як аналиває каву і білу чашку. Зверху візерунок з пінки"
              className={css.arabicaOrRobustaImg}
            />
            <h1 className={css.arabicaOrRobustaTitle}>Арабіка чи Робуста?</h1>
            <div className={css.arabicaOrRobustaWrap}>
              <p className={css.arabicaOrRobustaText}>
                Розкриваємо таємниці двох видів кавових зерен.
              </p>
              <p className={css.arabicaOrRobustaText}>
                Кава – це не просто напій, а справжнє мистецтво, яке завоювало
                серця мільйонів людей по всьому світу. Кожен любить каву за її
                неповторний смак та аромат, але чи знаєте ви, що за цим стоїть?
                Давайте поглянемо на два найпопулярніших види кавових зерен –
                Арабіка і Робуста та розкриємо їхні таємниці.
              </p>
            </div>
            <ul className={css.arabicaOrRobustaList}>
              <li className={css.arabicaOrRobustaItem}>
                <h2 className={css.arabicaOrRobustaSubTitle}>Арабіка:</h2>
                <p className={css.arabicaOrRobustaText}>
                  Арабіка – це найпоширеніший та найбільш популярний вид кавових
                  зерен у світі. Вона вирощується на висоті близько 600-2000
                  метрів над рівнем моря у таких країнах, як Колумбія, Бразилія,
                  Ефіопія, Кенія та інших тропічних регіонах. Арабіка має безліч
                  сортів, кожен з яких характеризується своїми унікальними
                  смаковими властивостями.
                </p>
                <h3 className={css.arabicaOrRobustaSubTitle}>
                  Особливості Арабіки:
                </h3>
                <ul>
                  <li>
                    <p className={css.arabicaOrRobustaText}>
                      – Смак та аромат: Арабіка вирізняється ніжним та
                      витонченим смаком з багатим ароматом. У ній відчуваються
                      нотки фруктів, квітів, шоколаду чи горіхів, залежно від
                      регіону вирощування та обробки.
                    </p>
                  </li>
                  <li>
                    <p className={css.arabicaOrRobustaText}>
                      – Вміст кофеїну: Арабіка містить менше кофеїну, зазвичай в
                      діапазоні 0.8-1.4%. Це робить її більш м’якою та менш
                      стимулюючою, ідеальною для тих, хто уникає інтенсивного
                      впливу кофеїну на організм.
                    </p>
                  </li>
                </ul>
              </li>
              <li className={css.arabicaOrRobustaItem}>
                <h2 className={css.arabicaOrRobustaSubTitle}>Робуста:</h2>
                <p className={css.arabicaOrRobustaText}>
                  Робуста – менш поширений, але також дуже популярний вид
                  кавових зерен. Вона вирощується на нижчих висотах, від 200 до
                  800 метрів над рівнем моря, головним чином у В’єтнамі,
                  Бразилії, Індонезії та Центральній Африці. Робуста була
                  винайдена як більш стійкий вид кави до шкідливих факторів
                  середовища.
                </p>
                <h3 className={css.arabicaOrRobustaSubTitle}>
                  Особливості Робусти:
                </h3>
                <ul>
                  <li>
                    <p className={css.arabicaOrRobustaText}>
                      – Смак та аромат: Робуста має більш насичений та гіркіший
                      смак з менш виразним ароматом. У смаку можна відчути ноти
                      горіхів чи шоколаду.
                    </p>
                  </li>
                  <li>
                    <p className={css.arabicaOrRobustaText}>
                      – Вміст кофеїну: Робуста містить більше кофеїну, зазвичай
                      в діапазоні 1.7-4.0%. Це робить її більш стимулюючою та
                      енергетичною, ідеальною для тих, хто шукає витриманий і
                      динамічний напій.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </article>
        </div>
      </section>
      <div>{<Footer />}</div>
    </div>
  );
}

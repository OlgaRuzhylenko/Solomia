import Header from "../../../components/Header/Header";
import mistakesImg from "../../../images/facts/factTea4Page.jpg";
import cupImg from "../../../images/facts/fact4CupOfTea.jpg";
import css from "./7Mistakes.module.css";

export default function Mistakes7() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.mistakesSection}>
        <div className="container">
          <article className={css.mistakesArticle}>
            <img
              src={mistakesImg}
              alt="прозорий заварник із чаєм та чай в дерев'яній ложці поруч"
              className={css.mistakesImg}
            />
            <h1 className={css.mistakesTitle}>7 помилок при заварюванні чаю</h1>
            <p className={css.mistakesText}>
              Ніхто не застрахований, помилки трапляються. Але коли знаєш про
              помилки при заварюванні чаю заздалегідь, їх можна не допустити і
              отримати винятковий чай.
            </p>
            <h2 className={css.mistakesSubtitle}>
              7 помилок при заварюванні чаю:
            </h2>
            <ul className={css.mistakesList}>
              <li className={css.mistakesItem}>
                <div className={css.mistakesListItemsWrap}>
                  <span className={css.qualityOfTeaSymb}>&#9658;</span>
                  <h3 className={css.mistakesListTitle}>
                    Використання водопровідної, підігрітої в мікрохвильовій печі
                    або нагрітої повторно води.
                  </h3>
                </div>
                <p className={css.mistakesText}>
                  Якість води впливає на смак готового напою. Водопровідна вода
                  дає хімічний присмак. Вода з мікрохвильовки – металевий
                  присмак. Повторно нагріта вода втрачає кисень, що надалі
                  позбавляє смаку напій.
                </p>
              </li>

              <li className={css.mistakesItem}>
                <div className={css.mistakesListItemsWrap}>
                  <span className={css.qualityOfTeaSymb}>&#9658;</span>
                  <h3 className={css.mistakesListTitle}>
                    Використання води неправильної температури.
                  </h3>
                </div>
                <p className={css.mistakesText}>
                  Кожен сорт чаю потребує відповідної «ідеальної» температури
                  для заварювання. Заварюючи чай окропом – напій стає гірким. Ні
                  в якому разі не можна кип’ятити заварку в чайнику, можна
                  обпалити ніжне чайне листя.
                </p>
              </li>

              <li className={css.mistakesItem}>
                <div className={css.mistakesListItemsWrap}>
                  <span className={css.qualityOfTeaSymb}>&#9658;</span>
                  <h3 className={css.mistakesListTitle}>
                    Додавання вершків до чаю.
                  </h3>
                </div>
                <p className={css.mistakesText}>
                  Вершки дуже важкі і жирні для змішування з чаєм і пригнічують
                  смак напою. Для збалансованого смаку додайте трохи молока. Але
                  стежте за кількістю, велика доза молока зіпсує чай.
                </p>
              </li>

              <li className={css.mistakesItem}>
                <div className={css.mistakesListItemsWrap}>
                  <span className={css.qualityOfTeaSymb}>&#9658;</span>
                  <h3 className={css.mistakesListTitle}>
                    Занадто довге заварювання.
                  </h3>
                </div>
                <p className={css.mistakesText}>
                  У спробі отримати міцний напій, деякі споживачі, збільшують
                  час заварювання чаю. Але напій не стане міцнішим, якщо
                  заварювати довше. Чим більше час заварювання, тим більше в
                  настій виділиться дубильних речовин з чайного листя і це
                  зробить напій гірким.
                </p>
              </li>

              <li className={css.mistakesItem}>
                <div className={css.mistakesListItemsWrap}>
                  <span className={css.qualityOfTeaSymb}>&#9658;</span>
                  <h3 className={css.mistakesListTitle}>
                    Використання зіпсованих чайних аксесуарів.
                  </h3>
                </div>
                <p className={css.mistakesText}>
                  Чайник з часом іржавіє або утворюється наліт на стінках
                  всередині, що призводить до погіршення якості води для
                  чаювання.
                </p>
              </li>

              <li className={css.mistakesItem}>
                <img
                  src={cupImg}
                  alt="прозора чашка із чаєм"
                  className={css.mistakesListItemImg}
                />
              </li>

              <li className={css.mistakesItem}>
                <div className={css.mistakesListItemsWrap}>
                  <span className={css.qualityOfTeaSymb}>&#9658;</span>
                  <h3 className={css.mistakesListTitle}>
                    «Викручування» чайного пакетика до останньої краплі.
                  </h3>
                </div>
                <p className={css.mistakesText}>
                  Коли стискаєте чайний пакетик, вивільняється дуже багато
                  танінів з чайного листа в настій, що робить напій гірким і
                  псує смак.
                </p>
              </li>

              <li className={css.mistakesItem}>
                <div className={css.mistakesListItemsWrap}>
                  <span className={css.qualityOfTeaSymb}>&#9658;</span>
                  <h3 className={css.mistakesListTitle}>
                    Зберігання чаю в неправильних умовах.
                  </h3>
                </div>
                <p className={css.mistakesText}>
                  Зберігати чай рекомендується в прохолодному, темному, сухому
                  місці, подалі від спецій і ароматних продуктів. Не можна
                  зберігати чай в холодильнику або близько до плити.
                </p>
              </li>
              <div className={css.mistakesListItemsWrap}>
                <p className={css.mistakesText}>
                  <span className={css.mistakesTextSpan}>Резюмуємо:</span>
                  Щоб кожного разу насолоджуватися улюбленим, ароматним напоєм,
                  використовуйте холодну, свіжу, фільтровану воду. Заварюйте
                  чай, який зберігався в правильних умовах, при рекомендованій
                  для кожного виду чаю температурі води і часі заварювання.
                </p>
              </div>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}

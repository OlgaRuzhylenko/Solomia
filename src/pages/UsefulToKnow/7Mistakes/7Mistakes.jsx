import Header from "../../../components/Header/Header";
import mistakesImg from "../../../images/facts/factTea4Page.jpg";
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
                      <h2 className={css.mistakesSubtitle
                          
            }>7 помилок при заварюванні чаю:</h2>
          </article>
        </div>
      </section>
    </div>
  );
}

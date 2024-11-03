import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import css from "./Quality.module.css";

export default function Quality() {
  return (
    <div>
      <div>{<Header />}</div>
      <article>
        <section className={css.qualitySection}>
          <div className={css.qualityImg}></div>
          <div className="container">
            <h1 className={css.qualitymainTitle}>
              Стандарти якості компанії Соломія
            </h1>
            <ul className={css.qualityList}>
              <li className={css.qualityListItem}>
                <p className={css.qualityListText}>
                  Для виробництва своєї продукції ми використовуємо тільки
                  якісну сировину і матеріали від надійних і перевірених часом
                  постачальників. На підприємстві діє атестована лабораторія,
                  яка постійно перевіряє та контролює сировину і готову
                  продукцію на відповідність нормативній документації та
                  встановленим еталонам-взірцям. Вся сировина, інгредієнти та
                  матеріали, які використовуються при виробництві продукції,
                  відповідають критеріям якості і безпечності, затвердженими в
                  нашій країні.
                </p>
              </li>
              <li className={css.qualityListItem}>
                <p className={css.qualityListText}>
                  Продукція виготовляється на підприємствах, які сертифіковані
                  за системами IFS Food, ISO 22000:2018. Власний відділ R&D дає
                  можливість розробляти інноваційні рецептури та ексклюзивні
                  чайні купажі для найвибагливіших споживачів.
                </p>
              </li>
            </ul>
          </div>
        </section>
      </article>
      <div>{<Footer />}</div>
    </div>
  );
}

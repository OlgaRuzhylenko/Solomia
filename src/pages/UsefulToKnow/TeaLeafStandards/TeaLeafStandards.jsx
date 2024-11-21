import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import teaLeafStandardsImg from "../../../images/facts/factTea3Page.jpg";
import teaStandardsImg from "../../../images/facts/teaStandarts.jpg";
import css from "./TeaLeafStandards.module.css";

export default function TeaLeafStandards() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.teaLeafStandardsSection}>
        <div className="container">
          <article className={css.teaLeafStandardsArticle}>
            <img
              src={teaLeafStandardsImg}
              alt="три ложки, в яких знаходиться різний чай"
              className={css.teaLeafStandardsImg}
            />
            <h1 className={css.teaLeafStandardsTitle}>
              Стандарти чайного листа
            </h1>
            <ul className={css.teaLeafStandardsMainList}>
              <li className={css.teaLeafStandardsMainItem}>
                <h2 className={css.teaLeafStandardsSubtitle}>цілий лист</h2>
                <ul className={css.teaLeafStandardsSecondList}>
                  <li className={css.teaLeafStandardsSecondItem}>
                    <h3 className={css.teaLeafStandardsDesc}>РEKOE</h3>
                    <p className={css.teaLeafStandardstext}>
                      Верхнє молоде листя чаю, бруньки вже розпустились. Цей
                      сорт чаю має коротше листя ніж О.Р.А та скручене по
                      особливому. Чай з яскравим кольором настою, середньої
                      міцності та з надзвичайно вишуканим смаком і тонким
                      квітковим ароматом.
                    </p>
                  </li>

                  <li className={css.teaLeafStandardsSecondItem}>
                    <h3 className={css.teaLeafStandardsDesc}>
                      O.P.A.
                      <br />
                      (Orange Pekoe «A» quality)
                    </h3>
                    <p className={css.teaLeafStandardstext}>
                      Листя для цього чаю збирають з кущів після того, як
                      бруньки повністю розкриваються. Збирається перший
                      (верхній) і другий листок. Це велике, однорідне, скручене
                      листя з високим вмістом ароматичних олій. Напій з такого
                      чаю має терпкий насичений смак і тонкий
                      квітково-солодкуватий аромат.
                    </p>
                  </li>

                  <li className={css.teaLeafStandardsSecondItem}>
                    <h3 className={css.teaLeafStandardsDesc}>GUN POWDER</h3>
                    <p className={css.teaLeafStandardstext}>
                      Завдяки тому, що при виробництві цього сорту китайського
                      зеленого чаю ферментація не застосовується, він зберігає
                      всі вітаміни і мікроелементи, властиві свіжому чайному
                      листу. При обробці листя прокочується і скручується, в
                      маленькі кульки, схожі на порох. У Китаї цей чай
                      називається «Зелені перлини». Скручене листя зберігає
                      велику частину свого аромату і смаку. При заварюванні
                      виходить напій із золотавим кольором настою, з терпким
                      смаком сухофруктів та трохи димним ароматом.
                    </p>
                  </li>

                  <li className={css.teaLeafStandardsSecondItem}>
                    <h3 className={css.teaLeafStandardsDesc}>УЛУН (OOLONG)</h3>
                    <p className={css.teaLeafStandardstext}>
                      Улун – напівферментований чай. Ферментації піддається не
                      весь лист, а лише його край та частина поверхні. Улун
                      поєднує в собі властивості як зеленого – яскравий аромат,
                      так і чорного чаю – насичений смак. Справжній улун завжди
                      цільнолистовий, його листя розгортається в процесі
                      заварювання. Настій: яскраво-жовтий. Аромат насичений,
                      багатий, повний, з яскравими квітковими, медовими,
                      фруктовими нотками. Смак м’який, злегка трав’янистий, з
                      в’язкою ноткою та післясмаком, що запам’ятовується.
                    </p>
                  </li>
                </ul>
              </li>
              <li className={css.teaLeafStandardsMainItem}>
                <h2 className={css.teaLeafStandardsSubtitle}>різаний лист</h2>
                <ul className={css.teaLeafStandardsSecondList}>
                  <li className={css.teaLeafStandardsSecondItem}>
                    <h3 className={css.teaLeafStandardsDesc}>
                      В.О.P. (Broken Orange Pekoe)
                    </h3>
                    <p className={css.teaLeafStandardstext}>
                      Основний сорт дрібного різаного чаю. Ламане або різане
                      велике листя. Настій – міцний, має насичений колір. Аромат
                      – вишуканий, тонкий притаманний високогір’ю.
                    </p>
                  </li>

                  <li className={css.teaLeafStandardsSecondItem}>
                    <h3 className={css.teaLeafStandardsDesc}>
                      F.B.О.P. (Flowery Broken Orange Pekoe)
                    </h3>
                    <p className={css.teaLeafStandardstext}>
                      Чайний лист середнього розміру з чайними бруньками, що не
                      розпустились. Настій має яскравий бурштиновий колір, смак
                      – терпкий та вишуканий. Наявність чайних бруньок надає
                      квітково-фруктові ноти аромату.
                    </p>
                  </li>

                  <li className={css.teaLeafStandardsSecondItem}>
                    <h3 className={css.teaLeafStandardsDesc}>
                      С.Т.С.(Сrushing, Tearning, Сurling)
                    </h3>
                    <p className={css.teaLeafStandardstext}>
                      Гранули з подрібненого і скрученого чайного листа.
                      Абревіатура походить від технології виробництва
                      (роздавити, розірвати, скрутити.) В процессі виробництва
                      чайний лист рветься, клітини руйнуються і вивільняється
                      багато фітинів, які забеспечують глибокий темний колір
                      настою. Чай швидко заварюється стає насиченним, терпким і
                      міцним. Вживати гранульований чай через підвищений вмісту
                      таніну і кофеїну рекомендується в перший половині дня.
                    </p>
                  </li>
                  <li className={css.teaLeafStandardsSecondItem}>
                    <img
                      src={teaStandardsImg}
                      alt="чайний листок і написи зі стандартами чаю"
                      className={css.teaStandardsImg}
                    />
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

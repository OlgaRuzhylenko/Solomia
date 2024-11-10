import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import batikInAtbImg from "../../../images/news/news-batik-atb.jpg";
import css from "./newBatikInAtb.module.css";

export default function NewBatikInAtb() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.batikInAtbSection}>
        <div className="container">
          <article className={css.batikInAtbArticle}>
            <h1 className={css.batikInAtbMainTitle}>
              Відчуйте всю палітру смаків та отримайте насолоду від улюблених
              чайних композицій!
            </h1>
            <img
              src={batikInAtbImg}
              alt="пачки чаю Батік з чорною смородиною та Батік Ерл Грей"
              className={css.batikInAtbImg}
            />
            <ul className={css.batikInAtbList}>
              <li className={css.batikInAtbItem}>
                <h2 className={css.batikInAtbTitle}>
                  “Batik” З Чорною Смородиною”
                </h2>
                <h3 className={css.batikInAtbSubTitle}>
                  25 пакетиків з ярличками.
                </h3>
                <p className={css.batikInAtbText1}>
                  Гармонійно збалансована чайно – ягідна композиція в якій
                  чудово поєднанні терпкість та насиченість кенійського чаю,
                  квітково-фруктовий аромат індійського чаю зі свіжим та
                  солодким смаком чорної смородини.
                </p>
                <p className={css.batikInAtbText2}>
                  Поринь у атмосферу тепла, затишку та яскраво – вибухового
                  смородинового смаку та аромату разом із запашною чашечкою
                  цього чаю!
                </p>
              </li>
              <li className={css.batikInAtbItem}>
                <h2 className={css.batikInAtbTitle}>“Batik” Ерл Грей”</h2>
                <h3 className={css.batikInAtbSubTitle}>
                  25 пакетиків з ярличками.
                </h3>
                <p className={css.batikInAtbText1}>
                  Неодмінно спробуйте цю вишукану та класичну чайну композицію,
                  в якій витончений цитрусовий аромат бергамоту гармонійно
                  поєднаний з насиченим і терпким смаком чорних чаїв з найкращих
                  плантацій Цейлону і Кенії.
                </p>
                <p className={css.batikInAtbText2}>
                  Відчуйте всі відтінки вишуканого смаку та отримуйте насолоду з
                  кожною чашечкою цього чаю!
                </p>
              </li>
            </ul>
          </article>
        </div>
      </section>
      <div>{<Footer />}</div>
    </div>
  );
}

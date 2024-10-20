import Header from "../../components/Header/Header";
import uaSvg from "../../images/svg/ua02.svg";
import cashbackImg from "../../images/achievments/знімокЕкрана.png";
import css from "./NationalCashback.module.css";
import Footer from "../../components/Footer/Footer";

export default function NationalCashback() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.cashbackSection}>
        <div className="container">
          <article className={css.cashbackArticle}>
            <h1 className={css.cashbackTitle}>
              Усі в плюсі, коли купуєш і продаєш українське!
              {/* <img
                src={uaSvg}
                alt="жовто-блакитний прапор"
                className={css.cashbackSvg}
              /> */}
            </h1>

            <img
              src={cashbackImg}
              alt="пачки чаю Батік та Аскольд та жовто-синій штрихкод зроблено в Україні"
              className={css.cashbackImg}
            />
            <ul className={css.cashbackList}>
              <li className={css.cashbackItem}>
                <p className={css.cashbackText}>
                  <img
                    src={uaSvg}
                    alt="жовто-блакитний прапор"
                    className={css.textSvg}
                  />
                  Чайні бренди Batik та Askold приєднались до проєкту “Зроблено
                  в Україні” та програми “Національний кешбек”. Відтепер,
                  купуючи улюблені чаї Batik, Askold Emotion та Askold. Noble
                  tea, ви отримаєте 10% кешбеку з кожної покупки!
                </p>
              </li>
              <li className={css.cashbackItem}>
                <p className={css.cashbackText}>
                  Отримайте віртуальну або фізичну карту у додатках чи
                  відділеннях банків.
                </p>
              </li>
              <li className={css.cashbackItem}>
                <p className={css.cashbackText}>
                  Купуйте будь-який чай Batik, Askold Emotion та Askold. Noble
                  tea у торгових мережах та магазинах.
                </p>
              </li>
              <li className={css.cashbackItem}>
                <p className={css.cashbackText}>
                  Накопичуйте кешбек та витрачайте його на оплату комунальних
                  або медичних послуг, кінотеатри, спортзали, поїздки, мобільний
                  зв’язок, придбання військових облігацій або донати на
                  підтримку ЗСУ.
                </p>
              </li>
              <li className={css.cashbackItem}>
                <p className={css.cashbackText}>
                  Усі в плюсі, коли купуєш і продаєш українське!
                  <img
                    src={uaSvg}
                    alt="жовто-блакитний прапор"
                    className={css.textSvg}
                  />
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

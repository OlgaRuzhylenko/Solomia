import { NavLink } from "react-router-dom";
import Header from "../../components/Header/Header";
import batikLogo from "../../images/batik/Batik-logo-eng.png";
import batikCollectionImg from "../../images/batik/batik-collections-background.jpg";
import batikGoldImg from "../../images/batik/batik-gold-background.jpg";
import css from "./BatikPage.module.css";
import Footer from "../../components/Footer/Footer";

export default function BatikPage() {
  return (
    <div>
      <div>{<Header />}</div>
      <section>
        <div className={css.mainBatikSection}>
          <div className="container">
            <h1 className={css.batikMainTitle}>
              Чай «Batik» – один з лідерів чайного ринку України в масовому
              сегменті.
            </h1>
            {/* <img
              src={batikLogo}
              alt="логотип Батік та напис this is my tea"
            ></img> */}
            <article>
              <p className={css.batikText}>
                Чай «Batik» – один з лідерів чайного ринку України в масовому
                сегменті. В Україні чай «Batik» з’явився у 1993 році. Це був
                перший справжній цейлонський чай, який спробували українські
                споживачі. «Batik» – це чай з найкращих плантацій світу. Це
                завжди найвища якість, це яскравий характер і витончений аромат.
                Це втілення життєвої мудрості та справжніх незмінних цінностей.
              </p>
              <p className={css.batikSlogan}>«Batik» – це мій чай!</p>
            </article>
          </div>
        </div>
        <div className={css.batikCollectionSection}>
          <img
            src={batikCollectionImg}
            alt="Batik Collection"
            className={css.batikCollectionImg}
          />
          <div className="container">
            <h2 className={css.batikCollectionTitle}>Batik Collection</h2>
            <p className={css.batikCollectionText}>
              У Batik Collection зібрані як класичні стандарти добірних
              цейлонських чаїв для поціновувачів міцності та терпкості, так і
              вишукані купажовані композиції з різних чайних плантацій світу та
              яскраві ягідно-фруктові з вибуховими смаками. Знайдіть час на
              чаювання з «Batik»! Переведіть подих, вгамуйте напругу та відчуйте
              себе!
            </p>
            <NavLink to="/batik-classic-collection" className={css.batikBtn}>
              Ознайомитись
            </NavLink>
          </div>
        </div>
        <div className={css.batikGoldSection}>
          <img src={batikGoldImg} alt="Batik Gold Collection" />
          <h2>Batik Gold Collection</h2>
          <p>
            Gold Collection – це справжнє чайне золото. Відбірні преміальні
            стандарти улюбленого насиченого смаку, міцності, терпкості та
            сонячної енергії Цейлону у Вашій чашці, що дарують тепло і затишок з
            кожним ковтком ароматного чаю. Знайдіть час на чаювання з «Batik»!
            Переведіть подих, вгамуйте напругу та відчуйте себе!
          </p>
          <NavLink to="/batik-gold-collection" className={css.batikBtn}>
            Ознайомитись
          </NavLink>
        </div>
      </section>
      <div>{<Footer />}</div>
    </div>
  );
}

import Header from "../../components/Header/Header";
import batikLogo from "../../images/batik/batik_logo.png";
import collectionImg from "../../images/batik/batik-collections-background.jpg";
import goldCollectionImg from "../../images/batik/batik-gold-background.jpg";
import css from "./BatikPage2.module.css";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

export default function BatikPage2() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.batikSection}>
        <div className={css.mainBatikSection}>
          <div className="container">
            <h1 className={css.batikMainTitle}>
              Чай «Batik» – один з лідерів чайного ринку України в масовому
              сегменті.
            </h1>
            <div className={css.batikLogoTextWrap}>
              <img
                src={batikLogo}
                alt="логотип Батік та напис this is my tea"
                className={css.batikLogoImg}
              ></img>
              <article className={css.batikArticle}>
                <p className={css.batikText}>
                  Чай «Batik» – один з лідерів чайного ринку України в масовому
                  сегменті. <br />В Україні чай «Batik» з’явився у 1993 році. Це
                  був перший справжній цейлонський чай, який спробували
                  українські споживачі. «Batik» – це чай з найкращих плантацій
                  світу. Це завжди найвища якість, це яскравий характер і
                  витончений аромат. Це втілення життєвої мудрості та справжніх
                  незмінних цінностей.
                </p>
                <p className={css.batikSlogan}>«Поруч, як би там не було!»</p>
              </article>
            </div>
          </div>
        </div>

        <div className={css.collectionWrapper}>
          <img
            src={collectionImg}
            alt="рожева мандала на фоні якої розміщений золотий напис Batik Collection"
            className={css.collectionImg}
          ></img>
          <div className={css.batikCollectionSectionWrapper}>
            <h2 className={css.batikTitle}>Batik Collection</h2>
            <p className={css.batikDescription}>
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

        <div className={css.goldCollectionWrapper}>
          <img
            src={goldCollectionImg}
            alt="золота мандала на червоному на фоні якої розміщений золотий напис Batik Gold Collection"
            className={css.collectionImg}
          ></img>
          <div className={css.batikGoldSectionWrapper}>
            <h2 className={css.batikTitle}>Batik Gold Collection</h2>
            <p className={css.batikDescription}>
              Gold Collection – це справжнє чайне золото. Відбірні преміальні
              стандарти улюбленого насиченого смаку, міцності, терпкості та
              сонячної енергії Цейлону у Вашій чашці, що дарують тепло і затишок
              з кожним ковтком ароматного чаю. Знайдіть час на чаювання з
              «Batik»! Переведіть подих, вгамуйте напругу та відчуйте себе!
            </p>
            <NavLink to="/batik-gold-collection" className={css.batikBtn}>
              Ознайомитись
            </NavLink>
          </div>
        </div>
      </section>
      <div>{<Footer />}</div>
    </div>
  );
}

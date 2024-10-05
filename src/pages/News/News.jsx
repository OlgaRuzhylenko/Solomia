import { NavLink } from "react-router-dom";
import css from "./News.module.css";
import batikAtb from "../../images/news/batik-atb.jpg";
import coffe from "../../images/news/arden.jpg";

export default function News() {
  return (
    <section className={css.newsSection}>
      <div className="container">
        <h2 className={css.title}>Новини</h2>
        <ul className={css.list}>
          <li className={css.item}>
            <NavLink to="/blog/:atb" className={css.link}>
              <img
                src={batikAtb}
                alt="забраження двох пачок чаю Батік із емблемобю магазину АТБ"
                className={css.img}
              ></img>
              <div className={css.subTitleWrap}>
                <p className={css.subTitle}>новини</p>
              </div>
              <div className={css.descriptionWrap}>
                <h3 className={css.description}>
                  Купуйте у магазинах мережі АТБ ” Batik”З Чорною Смородиною” та
                  “Batik” Ерл Грей” у зручних пакетиках для заварювання!
                </h3>
                <p className={css.text}>
                  Відчуйте всю палітру смаків та отримайте насолоду від
                  улюблених чайних композицій!
                </p>
                <p className={css.linkText}>Читати далі </p>
              </div>
            </NavLink>
            <div className={css.date}>
              <time datetime="2023-11-24">24 Листопада, 2023</time>
            </div>
          </li>
          <li className={css.item}>
            <NavLink to="/blog/:coffee-arden" className={css.link}>
              <img
                src={coffe}
                alt="забраження двох пачок чаю Батік із емблемобю магазину АТБ"
                className={css.img}
              ></img>
              <div className={css.subTitleWrap}>
                <p className={css.subTitle}>новини</p>
              </div>
              <div className={css.descriptionWrap}>
                <h3 className={css.description}>
                  Насолоджуйся улюбленими кавовими блендами разом з нашою
                  палітрою меленої кави ARDEN!
                </h3>
                <p className={css.text}>
                  Спробуйте мелену каву ARDEN та розкрийте для себе нові
                  відтінки смаку!
                </p>
                <p className={css.linkText}>Читати далі </p>
              </div>
            </NavLink>
            <div className={css.date}>
              <time datetime="2023-11-08">8 Листопада, 2023</time>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

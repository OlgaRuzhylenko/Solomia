import { NavLink } from "react-router-dom";
import batikAtb375 from "../../images/news/batik-atb375.jpg";
import batikAtb1054 from "../../images/news/batik-atb1054.jpg";
import coffe375 from "../../images/news/arden375.jpg";
import coffe1054 from "../../images/news/arden1054.jpg";
import madeInUkraine375 from "../../images/news/made-ua375.jpg";
import madeInUkraine1054 from "../../images/news/news-ua1054.jpg";
import uaSvg from "../../images/svg/ua02.svg";
import css from "./News.module.css";

export default function News() {
  return (
    <section className={css.newsSection}>
      <div className="container">
        <div className={css.newsWrapper}>
          {/* <h2 className={css.title}>Новини</h2> */}
          <ul className={css.list}>
            <li className={css.item}>
              <picture>
                <source
                  srcSet={`${madeInUkraine1054} 1x`}
                  media="(min-width: 1440px)"
                  type="image/jpeg"
                />
                <source
                  srcSet={`${madeInUkraine375} 1x`}
                  media="(min-width: 768px)"
                  type="image/jpeg"
                />
                <source srcSet={`${madeInUkraine375} 1x`} type="image/jpeg" />
                <img
                  src={madeInUkraine375}
                  alt="забраження пачок чаю Батік, Аскольд та Аскольд Нобл і штрихкоду зроблено в Україні"
                  className={css.img}
                ></img>
              </picture>
              <div className={css.descriptionWrap}>
                <h3 className={css.description}>
                  <img
                    src={uaSvg}
                    alt="жовто-блакитний прапор"
                    className={css.uaTitleSvg}
                  />
                  Чайні бренди Batik та Askold приєднались до проєкту “Зроблено
                  в Україні” та програми “Національний кешбек”.
                </h3>
                <p className={css.text}>
                  Усі в плюсі, коли купуєш і продаєш українське!
                  <img
                    src={uaSvg}
                    alt="жовто-блакитний прапор"
                    className={css.uaSvg}
                  />
                </p>
                <NavLink to="/made-in-ukraine" className={css.link}>
                  <p className={css.linkText}>Детальніше</p>
                </NavLink>
              </div>
              <div className={css.date}>
                <time datetime="2024-10-06">6 Жовтня, 2024</time>
              </div>
            </li>

            <li className={css.item}>
              <picture>
                <source
                  srcSet={`${batikAtb1054} 1x`}
                  media="(min-width: 1440px)"
                  type="image/jpeg"
                />
                <source
                  srcSet={`${batikAtb375} 1x`}
                  media="(min-width: 768px)"
                  type="image/jpeg"
                />
                <source srcSet={`${batikAtb375} 1x`} type="image/jpeg" />
                <img
                  src={batikAtb375}
                  alt="забраження двох пачок чаю Батік із емблемобю магазину АТБ"
                  className={css.img}
                ></img>
              </picture>

              <div className={css.descriptionWrap}>
                <h3 className={css.description}>
                  Купуйте у магазинах мережі АТБ ”Batik” з Чорною Смородиною” та
                  “Batik” Ерл Грей у зручних пакетиках для заварювання!
                </h3>
                <p className={css.text}>
                  Відчуйте всю палітру смаків та отримайте насолоду від
                  улюблених чайних композицій!
                </p>
                <NavLink to="/blog/batik-in-atb" className={css.link}>
                  <p className={css.linkText}>Детальніше</p>
                </NavLink>
              </div>
              <div className={css.date}>
                <time datetime="2023-11-24">24 Листопада, 2023</time>
              </div>
            </li>

            <li className={css.item}>
              <picture>
                <source
                  srcSet={`${coffe1054} 1x`}
                  media="(min-width: 1440px)"
                  type="image/jpeg"
                />
                <source
                  srcSet={`${coffe1054} 1x`}
                  media="(min-width: 768px)"
                  type="image/jpeg"
                />
                <source srcSet={`${coffe375} 1x`} type="image/jpeg" />
                <img
                  src={coffe375}
                  alt="забраження двох пачок чаю Батік із емблемобю магазину АТБ"
                  className={css.img}
                ></img>
              </picture>

              <div className={css.descriptionWrap}>
                <h3 className={css.description}>
                  Насолоджуйся улюбленими кавовими блендами разом з нашою
                  палітрою меленої кави ARDEN!
                </h3>
                <p className={css.text}>
                  Спробуйте мелену каву ARDEN та розкрийте для себе нові
                  відтінки смаку!
                </p>
                <NavLink to="/blog/coffee-arden" className={css.link}>
                  <p className={css.linkText}>Детальніше</p>
                </NavLink>
              </div>
              <div className={css.date}>
                <time datetime="2023-11-08">8 Листопада, 2023</time>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

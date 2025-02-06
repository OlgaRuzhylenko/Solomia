import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import asortiBlack from "../../../images/news/asortie_black375.jpg";
import css from "./AskoldEmotionBlackCollection.module.css";

export default function AskoldEmotionBlackCollection() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.askoldEmBlackCollSection}>
        <div className="container">
          <article className={css.askoldEmBlackCollArticle}>
            <h1 className={css.askoldEmBlackCollMainTitle}>
              Вже у продажі 4 улюблені смаки в одній пачці!
            </h1>
            <img
              src={asortiBlack}
              alt="зображення пачки чаю Аскольд Emotion Black Collection"
              className={css.askoldEmBlackCollImg}
            />
            <p className={css.askoldEmBlackCollDesc}>
              Пориньте у світ витонченості разом із нашим унікальним емоційним
              та яскравим набором Askold Emotion “Black Tea Collection”, до
              складу якого входять чотири шедеври на основі чорного чаю:
            </p>
            <ul className={css.askoldEmBlackCollList}>
              <li className={css.askoldEmBlackCollItem}>
                <p className={css.askoldEmBlackCollText}>
                  <div className={css.askoldEmBlackCollItemCircle1}></div>
                  Black tea – класичний цейлонський високогірний чай для
                  поціновувачів традиційного смаку.
                </p>
              </li>
              <li className={css.askoldEmBlackCollItem}>
                <p className={css.askoldEmBlackCollText}>
                  <div className={css.askoldEmBlackCollItemCircle2}></div>
                  Earl Grey – витонченість чорного чаю з цитрусовим ароматом
                  бергамота, що дарує спокій і натхнення.
                </p>
              </li>
              <li className={css.askoldEmBlackCollItem}>
                <p className={css.askoldEmBlackCollText}>
                  <div className={css.askoldEmBlackCollItemCircle3}></div>
                  Champagne Spills – оригінальне поєднання чорного та зеленого
                  чаю з полуницею і нотками шампанського – справжній святковий
                  настрій у чашці!
                </p>
              </li>
              <li className={css.askoldEmBlackCollItem}>
                <p className={css.askoldEmBlackCollText}>
                  <div className={css.askoldEmBlackCollItemCircle4}></div>
                  Bright Night – екзотична симфонія чорного чаю з ананасом та
                  ароматами винограду і маракуйї.
                </p>
              </li>
            </ul>
            <p className={css.askoldEmBlackCollDesc}>
              Цей набір створений для тих, хто любить відкривати нові смаки та
              насолоджуватися вишуканим та смачним чаєм!
            </p>
            <p className={css.askoldEmBlackCollLastDesc}>
              Askold Emotion – смакуйте кожну мить!
            </p>
          </article>
        </div>
      </section>
      <div>{<Footer />}</div>
    </div>
  );
}

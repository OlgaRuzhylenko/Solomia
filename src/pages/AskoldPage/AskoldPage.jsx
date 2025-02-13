import { NavLink } from "react-router-dom";
import Header from "../../components/Header/Header";
import askoldEmotionImg1 from "../../images/askold/askoldEmotion/1.jpg";
import askoldEmotionImg2 from "../../images/askold/askoldEmotion/2.jpg";
import askoldEmotionImg3 from "../../images/askold/askoldEmotion/3.jpg";
import askoldEmotionImg4 from "../../images/askold/askoldEmotion/4.jpg";
import askoldEmotionImg5 from "../../images/askold/askoldEmotion/5.jpg";
import askoldEmotionImg6 from "../../images/askold/askoldEmotion/6.jpg";
import askoldEmotionImg7 from "../../images/askold/askoldEmotion/7.jpg";
import askoldEmotionImg8 from "../../images/askold/askoldEmotion/8.jpg";
import askoldEmotionImg9 from "../../images/askold/askoldEmotion/9.jpg";
import askoldLogo from "../../images/askold/askoldEmotion/logo_askold.png";
import css from "./AskoldPage.module.css";
import Footer from "../../components/Footer/Footer";

export default function AskoldPage() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.askoldSection}>
        <div className={css.mainAskoldSection}>
          <div className="container">
            <h1 className={css.askoldMainTitle}>ASKOLD – Смакуй кожну мить!</h1>
            <img
              src={askoldLogo}
              alt="логотип Askold"
              className={css.askoldLogoImg}
            ></img>
            <div className={css.askoldTextWrap}>
              <p className={css.askoldText}>
                Askold Emotion – це емоційність та яскравість! Все це – про Вас!
                Та про наш чай, який дарує яскраві та незабутні емоції. Справжні
                шматочки екзотичних фруктів, пелюстки квітів та улюблені трави —
                усе це ретельно підібрано в авторських чайних сумішах. Вибухові,
                яскраві та смачні композиції вишуканого чаю піднімуть настрій та
                додадуть яскравих барв Вашим будням.
              </p>
              <p className={css.askoldText}> ASKOLD – Смакуй кожну мить!</p>
            </div>
          </div>
        </div>
        <div className="container">
          <ul className={css.askoldList}>
            <li className={css.askoldItem}>
              <div className={css.askoldOverlayWrap}>
                <NavLink to="/askold-emotion-black-tea-collection">
                  <img
                    src={askoldEmotionImg9}
                    alt="пачка чаю Askold Emotion Black tea collection 20 конвертів"
                    className={css.askoldImg}
                  />
                  <div className={css.overlay}>
                    <p>
                      Askold Emotion Black Tea Collection 40 г, 20 конвертів
                    </p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.askoldItem}>
              <div className={css.askoldOverlayWrap}>
                <NavLink to="/askold-emotion-sweet-berry">
                  <img
                    src={askoldEmotionImg1}
                    alt="пачка чаю Askold Emotion Sweet Berry 20 конвертів"
                    className={css.askoldImg}
                  />
                  <div className={css.overlay}>
                    <p> Askold Emotion Sweet Berry 36 г, 20 конвертів </p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.askoldItem}>
              <div className={css.askoldOverlayWrap}>
                <NavLink to="/askold-emotion-lovely-melissa">
                  <img
                    src={askoldEmotionImg2}
                    alt="пачка чаю Askold Emotion Lovely Melissa 20 конвертів"
                    className={css.askoldImg}
                  />
                  <div className={css.overlay}>
                    <p> Askold Emotion Lovely Melissa 30 г, 20 конвертів </p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.askoldItem}>
              <div className={css.askoldOverlayWrap}>
                <NavLink to="/askold-emotion-lippy-fruit">
                  <img
                    src={askoldEmotionImg3}
                    alt="пачка чаю Askold Emotion Lippy Fruit 20 конвертів"
                    className={css.askoldImg}
                  />
                  <div className={css.overlay}>
                    <p> Askold Emotion Lippy Fruit 40 г, 20 конвертів </p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.askoldItem}>
              <div className={css.askoldOverlayWrap}>
                <NavLink to="/askold-emotion-champagne-spills">
                  <img
                    src={askoldEmotionImg4}
                    alt="пачка чаю Askold Emotion Champagne Spills 20 конвертів"
                    className={css.askoldImg}
                  />
                  <div className={css.overlay}>
                    <p> Askold Emotion Champagne Spills 40 г, 20 конвертів </p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.askoldItem}>
              <div className={css.askoldOverlayWrap}>
                <NavLink to="/askold-emotion-earl-gray">
                  <img
                    src={askoldEmotionImg5}
                    alt="пачка чаю Askold Emotion Earl Gray 20 конвертів"
                    className={css.askoldImg}
                  />
                  <div className={css.overlay}>
                    <p> Askold Emotion Earl Gray 40 г, 20 конвертів </p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.askoldItem}>
              <div className={css.askoldOverlayWrap}>
                <NavLink to="/askold-emotion-bright-night">
                  <img
                    src={askoldEmotionImg6}
                    alt="пачка чаю Askold Emotion Bright Night 20 конвертів"
                    className={css.askoldImg}
                  />
                  <div className={css.overlay}>
                    <p> Askold Emotion Bright Night 40 г, 20 конвертів </p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.askoldItem}>
              <div className={css.askoldOverlayWrap}>
                <NavLink to="/askold-emotion-hot-ginger">
                  <img
                    src={askoldEmotionImg7}
                    alt="пачка чаю Askold Emotion Hot Ginger 20 конвертів"
                    className={css.askoldImg}
                  />
                  <div className={css.overlay}>
                    <p> Askold Emotion Hot Ginger 40 г, 20 конвертів </p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.askoldItem}>
              <div className={css.askoldOverlayWrap}>
                <NavLink to="/askold-emotion-black-tea">
                  <img
                    src={askoldEmotionImg8}
                    alt="пачка чаю Askold Emotion Black Tea 20 конвертів"
                    className={css.askoldImg}
                  />
                  <div className={css.overlay}>
                    <p> Askold Emotion Black Tea 40 г, 20 конвертів </p>
                  </div>
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <div>{<Footer />}</div>
    </div>
  );
}

import { NavLink } from "react-router-dom";
import Header from "../../components/Header/Header";
import askoldEmotionImg1 from "../../images/askold/askoldEmotion/1.png";
import askoldEmotionImg2 from "../../images/askold/askoldEmotion/2.png";
import askoldEmotionImg3 from "../../images/askold/askoldEmotion/3.png";
import askoldEmotionImg4 from "../../images/askold/askoldEmotion/4.png";
import askoldEmotionImg5 from "../../images/askold/askoldEmotion/5.png";
import askoldEmotionImg6 from "../../images/askold/askoldEmotion/6.png";
import askoldEmotionImg7 from "../../images/askold/askoldEmotion/7.png";
import askoldEmotionImg8 from "../../images/askold/askoldEmotion/8.png";
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
              alt="логотип Askol"
              className={css.askoldLogoImg}
            ></img>
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
        <div className="container">
          <ul className={css.askoldList}>
            <li className={css.askoldItem}>
              <div className={css.askoldOverlayWrap}>
                <NavLink to="/askold-emotion-sweet-berry">
                  <img
                    src={askoldEmotionImg1}
                    alt="пачка чаю Askold Emotion Sweet Berry"
                    className={css.askoldImg}
                  />
                  <div className={css.overlay}>
                    <p> Askold Emotion Sweet Berry 36г, 20 конвертів </p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.askoldItem}>
              <div className={css.askoldOverlayWrap}>
                <NavLink to="/askold-emotion-lovely-melissa">
                  <img
                    src={askoldEmotionImg2}
                    alt="пачка чаю Askold Emotion Lovely Melissa"
                    className={css.askoldImg}
                  />
                  <div className={css.overlay}>
                    <p> Askold Emotion Lovely Melissa 30г, 20 конвертів </p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.askoldItem}>
              <div className={css.askoldOverlayWrap}>
                <NavLink to="/askold-emotion-lippy-fruit">
                  <img
                    src={askoldEmotionImg3}
                    alt="пачка чаю Askold Emotion Lippy Fruit"
                    className={css.askoldImg}
                  />
                  <div className={css.overlay}>
                    <p> Askold Emotion Lippy Fruit 40г, 20 конвертів </p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.askoldItem}>
              <div className={css.askoldOverlayWrap}>
                <NavLink to="/askold-emotion-champagne-spills">
                  <img
                    src={askoldEmotionImg4}
                    alt="пачка чаю Askold Emotion Champagne Spills"
                    className={css.askoldImg}
                  />
                  <div className={css.overlay}>
                    <p> Askold Emotion Champagne Spills 40г, 20 конвертів </p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.askoldItem}>
              <div className={css.askoldOverlayWrap}>
                <NavLink to="/askold-emotion-earl-gray">
                  <img
                    src={askoldEmotionImg5}
                    alt="пачка чаю Askold Emotion Earl Gray"
                    className={css.askoldImg}
                  />
                  <div className={css.overlay}>
                    <p> Askold Emotion Earl Gray 40г, 20 конвертів </p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.askoldItem}>
              <div className={css.askoldOverlayWrap}>
                <NavLink to="/askold-emotion-bright-night">
                  <img
                    src={askoldEmotionImg6}
                    alt="пачка чаю Askold Emotion Bright Night"
                    className={css.askoldImg}
                  />
                  <div className={css.overlay}>
                    <p> Askold Emotion Bright Night 40г, 20 конвертів </p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.askoldItem}>
              <div className={css.askoldOverlayWrap}>
                <NavLink to="/askold-emotion-hot-ginger">
                  <img
                    src={askoldEmotionImg7}
                    alt="пачка чаю Askold Emotion Hot Ginger"
                    className={css.askoldImg}
                  />
                  <div className={css.overlay}>
                    <p> Askold Emotion Hot Ginger 40г, 20 конвертів </p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.askoldItem}>
              <div className={css.askoldOverlayWrap}>
                <NavLink to="/askold-emotion-black-tea">
                  <img
                    src={askoldEmotionImg8}
                    alt="пачка чаю Askold Emotion Black Tea"
                    className={css.askoldImg}
                  />
                  <div className={css.overlay}>
                    <p> Askold Emotion Black Tea 40г, 20 конвертів </p>
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

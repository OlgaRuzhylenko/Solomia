import { NavLink } from "react-router-dom";
import Header from "../../components/Header/Header";
import askoldNobleLogo from "../../images/askold/askoldNoble/logo_askold_noble.png";
import askoldNobleImg1 from "../../images/askold/askoldNoble/1.png";
import askoldNobleImg2 from "../../images/askold/askoldNoble/2.png";
import askoldNobleImg3 from "../../images/askold/askoldNoble/3.png";
import askoldNobleImg4 from "../../images/askold/askoldNoble/4.png";
import askoldNobleImg5 from "../../images/askold/askoldNoble/5.png";
import askoldNobleImg6 from "../../images/askold/askoldNoble/6.png";
import askoldNobleImg7 from "../../images/askold/askoldNoble/7.png";
import askoldNobleImg8 from "../../images/askold/askoldNoble/8.png";
import askoldNobleImg9 from "../../images/askold/askoldNoble/9.png";
import askoldNobleImg10 from "../../images/askold/askoldNoble/10.png";
import css from "./AskoldNoblePage.module.css";
import Footer from "../../components/Footer/Footer";

export default function AskoldNoblePage() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.askoldNobleSection}>
        <div className={css.mainAskoldNobleSection}>
          <div className="container">
            <h1 className={css.askoldNobleMainTitle}>
              ASKOLD – Смакуй кожну мить!
            </h1>
            <img
              src={askoldNobleLogo}
              alt="логотип Askold Noble"
              className={css.askoldLogoImg}
            ></img>
            <ul className={css.askoldNobleTextList}>
              <li className={css.askoldNobleTextListItem}>
                <p className={css.askoldNobleItemText}>
                  Чай «ASKOLD» уперше з’явився в Україні в 1998 році. Асортимент
                  чайних позицій був розроблений для України на основі світового
                  досвіду з оптимальною адаптацією до смаку українського
                  споживача.
                </p>
              </li>
              <li className={css.askoldNobleTextListItem}>
                <p className={css.askoldNobleItemText}>
                  Відмінна особливість чаю «ASKOLD NOBLE TEA» – це витончена
                  терпкість та класичне поєднання смаку і вишуканого аромату,
                  які не залишать байдужим жодного поціновувача чаю.
                </p>
              </li>
              <li className={css.askoldNobleTextListItem}>
                <p className={css.askoldNobleItemText}>
                  ASKOLD – Смакуй кожну мить!
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <ul className={css.askoldNobleList}>
            <li className={css.askoldNobleItem}>
              <div className={css.askoldNobleOverlayWrap}>
                <NavLink to="/askold-noble-green-tea-25-paketykiv">
                  <img
                    src={askoldNobleImg1}
                    alt="пачка чаю Askold Noble Tea зелений чай, 25 пакетиків		"
                    className={css.askoldNobleImg}
                  />
                  <div className={css.overlay}>
                    <p> Askold Noble Tea Зелений чай, 25 пакетиків</p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.askoldNobleItem}>
              <div className={css.askoldNobleOverlayWrap}>
                <NavLink to="/askold-noble-earl-gray-tea-25-paketykiv">
                  <img
                    src={askoldNobleImg2}
                    alt="пачка чаю Askold Noble Tea Ерл Грей, 25 пакетиків"
                    className={css.askoldNobleImg}
                  />
                  <div className={css.overlay}>
                    <p> Askold Noble Tea Ерл Грей, 25 пакетиків</p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.askoldNobleItem}>
              <div className={css.askoldNobleOverlayWrap}>
                <NavLink to="/askold-noble-black-tea-25-paketykiv">
                  <img
                    src={askoldNobleImg3}
                    alt="пачка чаю Askold Noble Tea чорний чай, 25 пакетиків"
                    className={css.askoldNobleImg}
                  />
                  <div className={css.overlay}>
                    <p> Askold Noble Tea Чорний чай, 25 пакетиків</p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.askoldNobleItem}>
              <div className={css.askoldNobleOverlayWrap}>
                <NavLink to="/askold-noble-earl-gray-tea-90">
                  <img
                    src={askoldNobleImg4}
                    alt="пачка чаю Askold Noble Tea Ерл Грей, 90 г"
                    className={css.askoldNobleImg}
                  />
                  <div className={css.overlay}>
                    <p> Askold Noble Tea Ерл Грей, 90 г</p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.askoldNobleItem}>
              <div className={css.askoldNobleOverlayWrap}>
                <NavLink to="/askold-noble-medium-FBOP-90">
                  <img
                    src={askoldNobleImg5}
                    alt="пачка чаю Askold Noble Tea FBOP, 90 г"
                    className={css.askoldNobleImg}
                  />
                  <div className={css.overlay}>
                    <p>Askold Noble Tea CЕРЕДНІЙ ЛИСТ (F.B.O.P.) 90 г </p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.askoldNobleItem}>
              <div className={css.askoldNobleOverlayWrap}>
                <NavLink to="/askold-noble-pekoe-90">
                  <img
                    src={askoldNobleImg6}
                    alt="пачка чаю Askold Noble Tea pekoe, 90 г"
                    className={css.askoldNobleImg}
                  />
                  <div className={css.overlay}>
                    <p>Askold Noble Tea ПЕКОЕ ГОЛД (PEKOE GOLD) 90 г </p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.askoldNobleItem}>
              <div className={css.askoldNobleOverlayWrap}>
                <NavLink to="/askold-noble-OPA-90">
                  <img
                    src={askoldNobleImg7}
                    alt="пачка чаю Askold Noble Tea OPA, 90 г"
                    className={css.askoldNobleImg}
                  />
                  <div className={css.overlay}>
                    <p>Askold Noble Tea Крупний Лист (O.P.А.) 90 г </p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.askoldNobleItem}>
              <div className={css.askoldNobleOverlayWrap}>
                <NavLink to="/askold-noble-medium-FBOP-180-mu">
                  <img
                    src={askoldNobleImg8}
                    alt="пачка чаю Askold Noble Tea FBOP, 180 г"
                    className={css.askoldNobleImg}
                  />
                  <div className={css.overlay}>
                    <p>Askold Noble Tea CЕРЕДНІЙ ЛИСТ (F.B.O.P.) 180 г, м/у </p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.askoldNobleItem}>
              <div className={css.askoldNobleOverlayWrap}>
                <NavLink to="/askold-noble-pekoe-180-mu">
                  <img
                    src={askoldNobleImg9}
                    alt="пачка чаю Askold Noble Tea pekoe, 180 г"
                    className={css.askoldNobleImg}
                  />
                  <div className={css.overlay}>
                    <p>Askold Noble Tea ПЕКОЕ ГОЛД (PEKOE GOLD) 180 г, м/у </p>
                  </div>
                </NavLink>
              </div>
            </li>
            <li className={css.askoldNobleItem}>
              <div className={css.askoldNobleOverlayWrap}>
                <NavLink to="/askold-noble-OPA-180-mu">
                  <img
                    src={askoldNobleImg10}
                    alt="пачка чаю Askold Noble Tea OPA, 180 г"
                    className={css.askoldNobleImg}
                  />
                  <div className={css.overlay}>
                    <p>Askold Noble Tea Крупний Лист (O.P.А.), м/у </p>
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

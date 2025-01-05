import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import atbImg from "../../images/stores/atb.png";
import css from "./Stores.module.css";
import { DiVim } from "react-icons/di";

export default function Stores() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.storesSection}>
        <div className="container">
          <h1 className={css.storesMainTitle}>
            Де купити продукцію компанії Соломія
          </h1>
          <h2 className={css.storesTitle}>Замовляй онлайн</h2>
          <ul>
            <li>
              <NavLink
                to="https://www.atbmarket.com/catalog/318-chay/f/torgova-marka=batik"
                className={css.storesLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={atbImg}
                  alt="логотип магазину АТБ"
                  className={css.storesImg}
                />
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

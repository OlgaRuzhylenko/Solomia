import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import atbImg from "../../images/stores/Logo_partners_atb.jpg";
import rozetkaImg from "../../images/stores/Logo_partners_rztka.jpg";
import epitsentrImg from "../../images/stores/Logo_partners_epicentr.jpg";
import silpoImg from "../../images/stores/Logo_partners_silpo.jpg";
import tavriaImg from "../../images/stores/Logo_partners_tavria.jpg";
import velmartImg from "../../images/stores/Logo_partners_velmart.jpg";
import ekoImg from "../../images/stores/Logo_partners_eko.jpg";
import kopiikaImg from "../../images/stores/Logo_partners_kopiyka.jpg";
import rostImg from "../../images/stores/Logo_partners_rost.jpg";
import delviImg from "../../images/stores/Logo_partners_delvi.jpg";
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
          <ul className={css.storesListOnline}>
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
                  className={css.storesOnlineImg}
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://rozetka.com.ua/ua/chai/c4625004/producer=askold,batik/"
                className={css.storesLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={rozetkaImg}
                  alt="логотип магазину Розетка"
                  className={css.storesOnlineImg}
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://epicentrk.ua/ua/shop/chay/filter/brand-is-e3562e361e904b1983e57e2da415afd5-or-b4b029b49c0f42f9a7dda2902c68671d-or-4632168291e9459eafc679cc46bb9cd3/apply/"
                className={css.storesLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={epitsentrImg}
                  alt="логотип магазину Епіцентр"
                  className={css.storesOnlineImg}
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://silpo.ua/category/kava-chai-359?filters=brand-is-1edc3e0c-ebcb-6440-a03f-5fb80796bff8-or-1edc3e15-8b91-6f76-b1bd-5fb80796bff8-or-1edc44b0-a004-6354-b1a3-377f4c169cfc"
                className={css.storesLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={silpoImg}
                  alt="логотип магазину Сільпо"
                  className={css.storesOnlineImg}
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://tavriav.ua/ca/%D1%87%D0%B0%D0%B8-%D0%BA%D0%B0%D0%B2%D0%B0-%D1%82%D0%B0-%D0%BA%D0%B0%D0%BA%D0%B0%D0%BE/9829?brands=Batik"
                className={css.storesLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={tavriaImg}
                  alt="логотип магазину Таврія"
                  className={css.storesOnlineImg}
                />
              </NavLink>
            </li>
          </ul>
          <h2 className={css.storesTitle}>Купуй в магазинах мереж</h2>
          <ul className={css.storesListOfline}>
            <li>
              <img
                src={atbImg}
                alt="логотип магазину Таврія"
                className={css.storesOflineImg}
              />
            </li>
            <li>
              <img
                src={tavriaImg}
                alt="логотип магазину Таврія"
                className={css.storesOflineImg}
              />
            </li>
            <li>
              <img
                src={epitsentrImg}
                alt="логотип магазину Епіцентр"
                className={css.storesOflineImg}
              />
            </li>
            <li>
              <img
                src={velmartImg}
                alt="логотип магазину Велмарт"
                className={css.storesOflineImg}
              />
            </li>
            <li>
              <img
                src={ekoImg}
                alt="логотип магазину Екомаркет"
                className={css.storesOflineImg}
              />
            </li>
            <li>
              <img
                src={kopiikaImg}
                alt="логотип магазину Копійка"
                className={css.storesOflineImg}
              />
            </li>
            <li>
              <img
                src={silpoImg}
                alt="логотип магазину Сільпо"
                className={css.storesOflineImg}
              />
            </li>
            <li>
              <img
                src={rostImg}
                alt="логотип магазину супермаркет Рост"
                className={css.storesOflineImg}
              />
            </li>
            <li>
              <img
                src={delviImg}
                alt="логотип магазину супермаркет Делві"
                className={css.storesOflineImg}
              />
            </li>
          </ul>
        </div>
      </section>
      <div>{<Footer />}</div>
    </div>
  );
}

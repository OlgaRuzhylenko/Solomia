import Footer from "../../components/Footer/Footer";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import Header from "../../components/Header/Header";
import css from "./Contacts.module.css";

export default function Contacts() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.contactsSection}>
        <h1 className={css.contactsMainTitle}>Контакти компанії 'Соломія'</h1>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d96401.81475484133!2d30.396651999999996!3d50.465784!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ccf7be32758d%3A0x30f9aa6099a4a52!2z0LLRg9C70LjRhtGPINCc0YDRltGXLCAxMtCcLCDQmtC40ZfQsiwg0KPQutGA0LDRl9C90LAsIDAzMDYy!5e1!3m2!1suk!2sus!4v1736417472973!5m2!1suk!2sus"
            style={{ width: "100%", height: "450px", border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
        <h2 className={css.contactsTitle}>Контакти</h2>
        <div className={css.contactsSeparatorFirst}></div>
        <div className={css.contactsSeparatorSecond}></div>
        <address>
          <p>
            Юридична адреса:
            <br /> м.Київ, вул. Берковецька, 6-A
          </p>
          <p>
            Фактична адреса: <br />
            м.Київ, вул. Мрії, 12-М
          </p>
          <a href="tel:+380664540330" className={css.footerLink}>
            тел:+38 (066) 454 03 30
          </a>
          <br />
          <a href="mailto:info@solomia.com.ua" className={css.footerLink}>
            e-mail: info@solomia.com.ua
          </a>
        </address>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/solomia.ukraine/"
              target="_blank"
              rel="noopener noreferrer"
              className={css.socialMediaLink}
            >
              {<BsFacebook className={css.socialMediaSvg} />}
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/solomia.com.ua/"
              target="_blank"
              rel="noopener noreferrer"
              className={css.socialMediaLink}
            >
              {<BsInstagram className={css.socialMediaSvg} />}
            </a>
          </li>
        </ul>
        <h2 className={css.contactsTitle}>Напишіть нам</h2>
        <div className={css.contactsSeparatorFirst}></div>
        <div className={css.contactsSeparatorSecond}></div>
      </section>
    </div>
  );
}

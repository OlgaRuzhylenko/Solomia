import mainLittleLogo from "../../images/mainLittleLogo.png";
import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

export default function Header(params) {
  return (
    <header className={css.headerSection}>
      <div className="container">
        <NavLink to="/">
          <img
            src={mainLittleLogo}
            alt="логотип Соломія"
            className={css.headerLogo}
          />
        </NavLink>
      </div>
    </header>
  );
}

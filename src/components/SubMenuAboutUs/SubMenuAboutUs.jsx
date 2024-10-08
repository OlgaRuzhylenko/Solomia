import { NavLink } from "react-router-dom";
import css from "./SubMenuAboutUs.module.css";

export default function SubMenuAboutUs({ onNavigate }) {
  const handleLinkClick = () => {
    onNavigate();
  };
  return (
    <div className={css.subtitleList}>
      <NavLink
        to="/history"
        onClick={handleLinkClick}
        className={css.subtitleLink}
      >
        історія компанії
      </NavLink>
      <NavLink
        to="/mission-and-values"
        onClick={handleLinkClick}
        className={css.subtitleLink}
      >
        місія, бачення та цінності
      </NavLink>
      <NavLink
        to="/quality"
        onClick={handleLinkClick}
        className={css.subtitleLink}
      >
        якість
      </NavLink>
      <NavLink
        to="/financial-reporting"
        onClick={handleLinkClick}
        className={css.subtitleLink}
      >
        фінансова звітність
      </NavLink>
      <NavLink
        to="/stores-and-online-shopping"
        onClick={handleLinkClick}
        className={css.subtitleLink}
      >
        де придбати нашу продукцію
      </NavLink>
    </div>
  );
}

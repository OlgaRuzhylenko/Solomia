import { NavLink } from "react-router-dom";
import css from "./SubMenuBrands.module.css";

export default function SubMenuBrands({ onNavigate }) {
  const handleLinkClick = () => {
    onNavigate();
  };

  return (
    <div className={css.subtitleList}>
      <NavLink
        to="/batik"
        onClick={handleLinkClick}
        className={css.subtitleLink}
      >
        batik
      </NavLink>
      <NavLink
        to="/askold-noble-tea"
        onClick={handleLinkClick}
        className={css.subtitleLink}
      >
        askold noble tea
      </NavLink>
      <NavLink
        to="/askold-emotion-collection"
        onClick={handleLinkClick}
        className={css.subtitleLink}
      >
        askold emotion
      </NavLink>
      <NavLink
        to="/domashnij-chaj"
        onClick={handleLinkClick}
        className={css.subtitleLink}
      >
        домашній чай
      </NavLink>
      <NavLink
        to="/arden"
        onClick={handleLinkClick}
        className={css.subtitleLink}
      >
        arden
      </NavLink>
    </div>
  );
}

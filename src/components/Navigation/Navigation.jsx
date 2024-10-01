import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
import { IoMdClose } from "react-icons/io";

export default function Navigation({ onNavigate }) {
  const getNavLinkByClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  const handleCloseClick = () => {
    onNavigate();
  };
  const handleLinkClick = () => {
    onNavigate();
  };

  return (
    <div className="container">
      <div className={css.menuContainer}>
        <IoMdClose onClick={handleCloseClick} className={css.closeIcon} />

        <nav className={css.navigation}>
          <NavLink
            to="/about-us"
            className={getNavLinkByClass}
            onClick={handleLinkClick}
          >
            про нас
          </NavLink>
          <NavLink
            to="/brands"
            className={getNavLinkByClass}
            onClick={handleLinkClick}
          >
            бренди
          </NavLink>
          <NavLink
            to="/our-achievements"
            className={getNavLinkByClass}
            onClick={handleLinkClick}
          >
            наші досягнення
          </NavLink>
          <NavLink
            to="/useful-to-know"
            className={getNavLinkByClass}
            onClick={handleLinkClick}
          >
            корисно знати
          </NavLink>
          <NavLink
            to="/blog"
            className={getNavLinkByClass}
            onClick={handleLinkClick}
          >
            новини
          </NavLink>
          <NavLink
            to="/contacts"
            className={getNavLinkByClass}
            onClick={handleLinkClick}
          >
            контакти
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

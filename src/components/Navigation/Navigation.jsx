import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

export default function Navigation() {
  const getNavLinkByClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <nav className={css.navigation}>
      <NavLink to="/about-us" className={getNavLinkByClass}>
        про нас
      </NavLink>
      <NavLink to="/brands" className={getNavLinkByClass}>
        бренди
      </NavLink>
      <NavLink to="/our-achievements" className={getNavLinkByClass}>
        наші досягнення
      </NavLink>
      <NavLink to="/useful-to-know" className={getNavLinkByClass}>
        корисно знати
      </NavLink>
      <NavLink to="/blog" className={getNavLinkByClass}>
        новини
      </NavLink>
      <NavLink to="/contacts" className={getNavLinkByClass}>
        контакти
      </NavLink>
    </nav>
  );
}

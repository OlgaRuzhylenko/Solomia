import { NavLink } from "react-router-dom";
import css from "./NavigationList.module.css";
import { IoIosArrowDown } from "react-icons/io";

export default function NavigationList() {
  return (
    <div>
      <nav className={css.navigation}>
        <div className={css.navWrap}>
          <NavLink to="/about-us" className={css.navigationItem}>
            про нас
          </NavLink>
          <IoIosArrowDown className={css.navigationSvg} />
        </div>
        <div className={css.navWrap}>
          <NavLink to="/brands" className={css.navigationItem}>
            бренди
          </NavLink>
          <IoIosArrowDown className={css.navigationSvg} />
        </div>
        <NavLink to="/our-achievements" className={css.navigationItem}>
          наші досягнення
        </NavLink>
        <NavLink to="/useful-to-know" className={css.navigationItem}>
          корисно знати
        </NavLink>
        <NavLink to="/blog" className={css.navigationItem}>
          новини
        </NavLink>
        <NavLink to="/contacts" className={css.navigationItem}>
          контакти
        </NavLink>
      </nav>
    </div>
  );
}

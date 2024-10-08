import { NavLink } from "react-router-dom";
import css from "./NavigationList.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import SubMenuAboutUs from "../SubMenuAboutUs/SubMenuAboutUs";
import BackDrop from "../BackDrop/BackDrop";
import SubMenuBrands from "../SubMenuBrands/SubMenuBrands";

export default function NavigationList({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    onNavigate();
  };
  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  const handleCloseMenu = () => {
    setIsOpen(false); // Закриття меню при кліку на BackDrop
  };

  return (
    <div>
      <nav className={css.navigation}>
        <div className={css.navWrap}>
          <NavLink to="/about-us" className={css.navigationItem}>
            про нас
          </NavLink>
          {!isOpen && (
            <button onClick={handleMenu}>
              <IoIosArrowDown className={css.navigationSvg} />
            </button>
          )}
          {isOpen && <SubMenuAboutUs onNavigate={handleLinkClick} />}
        </div>
        <div className={css.navWrap}>
          <div className={css.navWrap}>
            <NavLink to="/brands" className={css.navigationItem}>
              бренди
            </NavLink>
            {!isOpen && (
              <button onClick={handleMenu}>
                <IoIosArrowDown className={css.navigationSvg} />
              </button>
            )}
            {isOpen && <SubMenuBrands onNavigate={handleLinkClick} />}
          </div>

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
      {isOpen && <BackDrop handleMenu={handleCloseMenu} />}
    </div>
  );
}

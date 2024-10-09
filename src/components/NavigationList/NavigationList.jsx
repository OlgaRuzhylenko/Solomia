import { NavLink } from "react-router-dom";
import css from "./NavigationList.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import SubMenuAboutUs from "../SubMenuAboutUs/SubMenuAboutUs";
import BackDrop from "../BackDrop/BackDrop";
import SubMenuBrands from "../SubMenuBrands/SubMenuBrands";

export default function NavigationList({ onNavigate }) {
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);

  const handleLinkClick = () => {
    onNavigate();
    setIsAboutUsOpen(false);
    setIsBrandsOpen(false);
  };
  const handleAboutUsMenu = () => {
    setIsAboutUsOpen((prev) => !prev);
    setIsBrandsOpen(false); // Закриваємо інше меню
  };

  const handleBrandsMenu = () => {
    setIsBrandsOpen((prev) => !prev);
    setIsAboutUsOpen(false); // Закриваємо інше меню
  };
  const handleCloseMenu = () => {
    setIsAboutUsOpen(false);
    setIsBrandsOpen(false);
  };

  return (
    <div>
      <nav className={css.navigation}>
        <div className={css.navWrap}>
          <NavLink to="/about-us" className={css.navigationItem}>
            про нас
          </NavLink>
          <button onClick={handleAboutUsMenu} className={css.navButton}>
            <IoIosArrowDown
              className={`${css.navigationSvg} ${
                isAboutUsOpen ? css.open : ""
              }`}
            />
          </button>
          {isAboutUsOpen && <SubMenuAboutUs onNavigate={handleLinkClick} />}
        </div>

        <div className={css.navWrap}>
          <NavLink to="/brands" className={css.navigationItem}>
            бренди
          </NavLink>
          <button onClick={handleBrandsMenu} className={css.navButton}>
            <IoIosArrowDown
              className={`${css.navigationSvg} ${isBrandsOpen ? css.open : ""}`}
            />
          </button>
          {isBrandsOpen && <SubMenuBrands onNavigate={handleLinkClick} />}
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
      {(isAboutUsOpen || isBrandsOpen) && (
        <BackDrop handleMenu={handleCloseMenu} />
      )}
    </div>
  );
}

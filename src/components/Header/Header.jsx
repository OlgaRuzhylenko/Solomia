import mainLittleLogo from "../../images/svg/solomia_logo_1_color.svg";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import css from "./Header.module.css";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import NavigationList from "../NavigationList/NavigationList";
import SubMenuAboutUs from "../SubMenuAboutUs/SubMenuAboutUs";
import SubMenuBrands from "../SubMenuBrands/SubMenuBrands";
import BackDrop from "../BackDrop/BackDrop";

export default function Header({ onNavigate }) {
  const isTabletOrLarger = useMediaQuery({ query: "(min-width: 768px)" });
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);

  const handleLinkClick = () => {
    onNavigate();
    setIsAboutUsOpen(false);
    setIsBrandsOpen(false);
  };
  const handleAboutUsMenu = () => {
    setIsAboutUsOpen((prev) => !prev);
    setIsBrandsOpen(false);
  };

  const handleBrandsMenu = () => {
    setIsBrandsOpen((prev) => !prev);
    setIsAboutUsOpen(false);
  };
  const handleCloseMenu = () => {
    setIsAboutUsOpen(false);
    setIsBrandsOpen(false);
  };

  return (
    <header className={css.headerSection}>
      <div className="container">
        <div className={css.headerSectionBox}>
          <NavLink to="/">
            <img
              src={mainLittleLogo}
              alt="логотип Соломія"
              className={css.headerLogo}
            />
          </NavLink>
          {/* починаючи із планшетної версії */}
          {isTabletOrLarger && (
            <div className={css.navigationBox}>
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
                  {isAboutUsOpen && (
                    <div className={css.aboutUsFirstSubmenu}>
                      <SubMenuAboutUs onNavigate={handleLinkClick} />
                    </div>
                  )}
                </div>

                <div className={css.navWrap}>
                  <NavLink to="/brands" className={css.navigationItem}>
                    бренди
                  </NavLink>
                  <button onClick={handleBrandsMenu} className={css.navButton}>
                    <IoIosArrowDown
                      className={`${css.navigationSvg} ${
                        isBrandsOpen ? css.open : ""
                      }`}
                    />
                  </button>
                  {isBrandsOpen && (
                    <div className={css.aboutUsSecondSubmenu}>
                      <SubMenuBrands onNavigate={handleLinkClick} />
                    </div>
                  )}
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
          )}
        </div>
      </div>
    </header>
  );
}

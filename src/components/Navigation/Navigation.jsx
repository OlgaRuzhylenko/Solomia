import { NavLink, useNavigate } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import SubMenuAboutUs from "../SubMenuAboutUs/SubMenuAboutUs";
import SubMenuBrands from "../SubMenuBrands/SubMenuBrands";

export default function Navigation({ onNavigate }) {
  const navigate = useNavigate();

  const getNavLinkByClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  const handleCloseClick = () => {
    onNavigate();
  };
  const handleLinkClick = () => {
    onNavigate();
  };

  const [isAboutUsMenuOpen, setIsAboutUsMenuOpen] = useState(false);
  const [isBrandsMenuOpen, setIsBrandsMenuOpen] = useState(false);

  const toggleAboutUsMenu = (evt) => {
    evt.preventDefault();
    if (isAboutUsMenuOpen) {
      // Якщо підменю вже відкрите, здійснюємо перехід на сторінку
      navigate("/about-us");
      onNavigate();
    } else {
      setIsAboutUsMenuOpen(true); // Інакше відкриваємо підменю
    }
  };

  const toggleBrandsMenu = (evt) => {
    evt.preventDefault();
    if (isBrandsMenuOpen) {
      // Якщо підменю вже відкрите, здійснюємо перехід на сторінку
      navigate("/brands");
      onNavigate();
    } else {
      setIsBrandsMenuOpen(true); // Інакше відкриваємо підменю
    }
  };

  return (
    <div className="container">
      <div className={css.menuContainer}>
        <IoMdClose onClick={handleCloseClick} className={css.closeIcon} />

        <nav className={css.navigation}>
          <NavLink
            to="/about-us"
            className={getNavLinkByClass}
            onClick={toggleAboutUsMenu}
          >
            про нас
          </NavLink>

          {isAboutUsMenuOpen && (
            <SubMenuAboutUs
              onNavigate={handleLinkClick}
              getNavLinkByClass={toggleAboutUsMenu}
            />
          )}

          <NavLink
            to="/brands"
            className={getNavLinkByClass}
            onClick={toggleBrandsMenu}
          >
            бренди
          </NavLink>
          {isBrandsMenuOpen && (
            <SubMenuBrands
              onNavigate={handleLinkClick}
              getNavLinkByClass={getNavLinkByClass}
            />
          )}

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

import React, { useState, useEffect } from "react";
import mainLittleLogo from "../../images/mainLittleLogo.png";
import { NavLink } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { GoChevronUp } from "react-icons/go";
import css from "./footer.module.css";

export default function Footer({ onNavigate }) {
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    const onScroll = () => handleScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => {
    onNavigate();
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className={css.footerSection}>
      <div className="container">
        <div className={css.footerInformation}>
          <img
            src={mainLittleLogo}
            alt="логотип Соломія"
            className={css.footerLogo}
          />

          <div className={css.footerNavigation}>
            <nav className={css.footerNavItem}>
              <NavLink
                to="/about-us"
                onClick={handleLinkClick}
                className={css.footerNavLink}
              >
                про нас
              </NavLink>
              <NavLink
                to="/brands"
                onClick={handleLinkClick}
                className={css.footerNavLink}
              >
                бренди
              </NavLink>
              <NavLink
                to="/our-achievements"
                onClick={handleLinkClick}
                className={css.footerNavLink}
              >
                наші досягнення
              </NavLink>
              <NavLink
                to="/useful-to-know"
                onClick={handleLinkClick}
                className={css.footerNavLink}
              >
                корисно знати
              </NavLink>
              <NavLink
                to="/blog"
                onClick={handleLinkClick}
                className={css.footerNavLink}
              >
                новини
              </NavLink>
              <NavLink
                to="/contacts"
                onClick={handleLinkClick}
                className={css.footerNavLink}
              >
                контакти
              </NavLink>
            </nav>
          </div>
        </div>
        <p className={css.footerCopy}>
          © 2023 Solomia. При використанні матеріалів сайту (в т.ч фотографій),
          активне гіперпосилання на сайт www.solomia.com.ua обов’язкове
        </p>
        <div className={css.nameAddressSocialMediaWrapper}>
          <div className={css.nameAddressWrapper}>
            <p className={css.footerName}>Торгово-виробнича компанія SOLOMIA</p>
            <address className={css.address}>
              м.Київ, вул. Берковецька, 6-A
              <br />
              <a href="tel:+380664540330" className={css.footerLink}>
                тел:+38 (066) 454 03 30
              </a>
              <br />
              <a href="mailto:info@solomia.com.ua" className={css.footerLink}>
                e-mail: info@solomia.com.ua
              </a>
            </address>
          </div>
          <div className={css.socialMediaWrapper}>
            <p className={css.footerSocialMedia}>Ми в соцмережах:</p>
            <ul className={css.socialMediaList}>
              <li className={css.socialMediaItem}>
                <a
                  href="https://www.facebook.com/solomia.ukraine/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css.socialMediaLink}
                >
                  {<BsFacebook className={css.socialMediaSvg} />}
                </a>
              </li>
              <li className={css.socialMediaItem}>
                <a
                  href="https://www.instagram.com/solomia.com.ua/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css.socialMediaLink}
                >
                  {<BsInstagram className={css.socialMediaSvg} />}
                </a>
              </li>
            </ul>
          </div>
        </div>
        {isVisible && (
          <button onClick={scrollToTop} className={css.bntUp}>
            <GoChevronUp className={css.bntUpSvg} />
          </button>
        )}
      </div>
    </section>
  );
}

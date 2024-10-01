import { Suspense, useState } from "react";
import Navigation from "../Navigation/Navigation";
import css from "./Layout.module.css";
import BackDrop from "../BackDrop/BackDrop";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Layout({ children, className }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  const handleNavigationClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={className}>
      <div className={css.navSection}>
        {isOpen && <BackDrop handleMenu={handleMenu} />}{" "}
        {!isOpen && (
          <button onClick={handleMenu} className={css.navigationBtn}>
            <GiHamburgerMenu className={css.iconMenu} />
          </button>
        )}
        {isOpen && <Navigation onNavigate={handleNavigationClick} />}
      </div>
      <Suspense fallback={<div>Please wait loading page...</div>}>
        {children}
      </Suspense>
    </div>
  );
}

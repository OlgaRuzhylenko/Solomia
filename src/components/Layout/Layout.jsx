import { Suspense, useState } from "react";
import Navigation from "../Navigation/Navigation";
import css from "./Layout.module.css";
import BackDrop from "../BackDrop/BackDrop";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  const handleNavigationClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && <BackDrop handleMenu={handleMenu} />}{" "}
      {!isOpen && (
        <button onClick={handleMenu}>
          <GiHamburgerMenu />
        </button>
      )}
      {isOpen && <Navigation onNavigate={handleNavigationClick} />}
      <Suspense fallback={<div>Please wait loading page...</div>}>
        {children}
      </Suspense>
    </div>
  );
}

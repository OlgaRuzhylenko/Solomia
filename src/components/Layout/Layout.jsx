import { Suspense, useState } from "react";
import Navigation from "../Navigation/Navigation";
import css from "./Layout.module.css";
import BackDrop from "../BackDrop/BackDrop";

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
      {/* {isOpen && <BackDrop handleMenu={handleMenu} />} */}

      {isOpen ? (
        <button onClick={handleMenu}>Close</button>
      ) : (
        <button onClick={handleMenu}>Open</button>
      )}

      {isOpen && <Navigation onNavigate={handleNavigationClick} />}

      <Suspense fallback={<div>Please wait loading page...</div>}>
        {children}
      </Suspense>
    </div>
  );
}

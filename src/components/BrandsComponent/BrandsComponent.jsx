import batikLogo from "../../images/brands/batik.png";
import askoldLogo from "../../images/brands/askold.png";
import askoldNobleLogo from "../../images/brands/askoldNoble.png";
import ardenLogo from "../../images/brands/arden.png";
import domLogo from "../../images/brands/domash.png";
import { useTransition, animated } from "react-spring";
import { NavLink } from "react-router-dom";
import css from "./BrandsComponent.module.css";
import { useEffect, useRef, useState } from "react";

export default function BrandsComponent() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const brands = [
    { to: "/batik", img: batikLogo, alt: "логотип Батік" },
    {
      to: "/askold-emotion-collection",
      img: askoldLogo,
      alt: "логотип Аскольд",
    },
    {
      to: "/askold-noble-tea",
      img: askoldNobleLogo,
      alt: "логотип Аскольд Нобл",
    },
    { to: "/arden", img: ardenLogo, alt: "логотип Арден" },
    { to: "/domashnij-chaj", img: domLogo, alt: "логотип Домашній чай" },
  ];

  const transitions = useTransition(isVisible ? brands : [], {
    from: { opacity: 0, transform: "translateY(20px)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 200, friction: 20 },
    trail: 300,
  });

  return (
    <div>
      <section className={css.brandsSection} ref={sectionRef}>
        <div className="container">
          <div className={css.brandsSectionWrapper}>
            <h2 className={css.title}>Наші бренди</h2>

            <ul className={css.brandsList}>
              {transitions((style, brand) => (
                <animated.li
                  className={css.brandsItem}
                  style={style}
                  key={brand.to}
                >
                  <NavLink to={brand.to}>
                    <img
                      src={brand.img}
                      alt={brand.alt}
                      className={css.brandsImg}
                    />
                  </NavLink>
                </animated.li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

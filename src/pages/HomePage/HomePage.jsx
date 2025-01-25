import { NavLink } from "react-router-dom";
import mainLogo from "../../images/mainLogo.png";
import achievImg from "../../images/vybirKrainy.jpg";
import nationalCashbackImg from "../../images/nationalCashBack.jpg";
import missionLogo from "../../images/missionLogo.png";
import AboutUs from "../AboutUs/AboutUs";
import Brands from "../Brands/Brands";
import News from "../News/News";
import Footer from "../../components/Footer/Footer";
import NavigationList from "../../components/NavigationList/NavigationList";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, EffectFlip } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-flip";
import { useMediaQuery } from "react-responsive";
import "./flickity.css";
import "flickity/css/flickity.css";
import AboutUsInformation from "../../components/AboutUsInformation/AboutUsInformation";
import css from "./HomePage.module.css";
import BrandsComponent from "../../components/BrandsComponent/BrandsComponent";

export default function HomePage() {
  const isTabletOrLarger = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div className={css.pageContainer}>
      <div className={css.main}>
        {/* тільки для моб версії */}
        <div className={css.box}></div>
        <section className={css.hero}>
          <div className="container">
            <div className={css.heroInformation}>
              {/* починаючи із планшетної версії */}
              {isTabletOrLarger && <NavigationList />}
              <img
                src={mainLogo}
                alt="логотип компанії та лозунг смакуй кожну мить"
                className={css.mainImg}
              />
              <NavLink to="/about-us" className={css.heroBtn}>
                Про нас
              </NavLink>
            </div>
          </div>
        </section>
        <div className={css.AboutUsAndHistiryWrapper}>
          <div className={css.aboutLink}>{<AboutUsInformation />}</div>
          <div className={css.historyBoxWrapper}>
            <div className="container">
              <div className={css.historyBox}>
                <NavLink to="/history" className={css.historyLink}>
                  наша історія
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className={css.achiev}>
          <div className="App">
            <Swiper
              modules={[Navigation, Pagination, A11y, EffectFlip]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              effect="flip"
            >
              <SwiperSlide>
                <NavLink to="/national-cashback">
                  <img
                    src={nationalCashbackImg}
                    alt="пачки чаю Батік та Аскольд та жовто-синій штрихкод зроблено в Україні"
                    className={css.acievImg}
                  />
                </NavLink>
              </SwiperSlide>
              <SwiperSlide>
                <NavLink to="/our-achievements">
                  <img
                    src={achievImg}
                    alt="пачки чаю Батік"
                    className={css.acievImg}
                  />
                </NavLink>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className={css.brendsLink}>{<BrandsComponent />}</div>
        <section className={css.mission}>
          <NavLink to="/mission-and-values">
            <img
              src={missionLogo}
              alt="місія бачення цінності"
              className={css.missionImg}
            />
          </NavLink>
          <NavLink to="/mission-and-values" className={css.missionBtn}>
            Детальніше
          </NavLink>
        </section>
        <div className={css.newsSection}>
          <h2 className={css.newsTitle}>Новини</h2>
          <div>{<News />}</div>
        </div>
      </div>
      <div>{<Footer />}</div>
    </div>
  );
}

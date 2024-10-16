import Header from "../../components/Header/Header";
import css from "./AboutUs.module.css";
import aboutUsImg from "../../images/aboutUs/aboutUs.jpg";
import AboutUsInformation from "../../components/AboutUsInformation/AboutUsInformation";
import Brands from "../Brands/Brands";
import missionLogo from "../../images/missionLogo.png";
import Mission from "../Mission/Mission";
import Footer from "../../components/Footer/Footer";

export default function AboutUs() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.aboutSection}>
        <img
          src={aboutUsImg}
          alt="чашка із чаєм та чашка із кавою"
          className={css.aboutUsImg}
        />
        {<AboutUsInformation />}
      </section>
      {<Brands />}
      {<Mission />}
      <div>{<Footer />}</div>
    </div>
  );
}

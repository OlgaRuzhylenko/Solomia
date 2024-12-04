import AboutUs from "../../pages/AboutUs/AboutUs";
import Brands from "../../pages/Brands/Brands";
import Contacts from "../../pages/Contacts/Contacts";
import History from "../../pages/History/History";
import HomePage from "../../pages/HomePage/HomePage";
import News from "../../pages/News/News";
import OurAchievements from "../../pages/OurAchievements/OurAchievements";
import UsefulToKnow from "../../pages/UsefulToKnow/UsefulToKnow";
import Layout from "../Layout/Layout";
import AskoldPage from "../../pages/AskoldPage/AskoldPage";
import AskoldNoblePage from "../../pages/AskoldNoblePage/AskoldNoblePage";
import ArdenPage from "../../pages/ArdenPage/ArdenPage";
import DomashniyPages from "../../pages/DomashniyPages/DomashniyPages";
import { Route, Routes } from "react-router-dom";
import Mission from "../../pages/Mission/Mission";
import NewsDetails from "../NewsDetails/NewsDetails";
import Quality from "../../pages/Quality/Quality";
import FinancialReporting from "../../pages/FinancialReporting/FinancialReporting";
import Stores from "../../pages/Stores/Stores";
import NationalCashback from "../../pages/NationalCashback/NationalCashback";
import BatikCollection from "../../pages/BatikCollection/BatikCollection";
import BatikGoldCollection from "../../pages/BatikGoldCollection/BatikGoldCollection";
import NewsSection from "../../pages/News/NewsSection";
import NewBatikInAtb from "../../pages/News/newBatikInAtb/newBatikInAtb";
import NewCoffeArden from "../../pages/News/NewCoffeArden/NewCoffeArden";
import FactsAboutCoffee from "../../pages/UsefulToKnow/FactsAboutCoffee/FactsAboutCoffee";
import ArabicaOrRobusta from "../../pages/UsefulToKnow/ArabicaOrRobusta/ArabicaOrRobusta";
import WhyIsTeaCalledTea from "../../pages/UsefulToKnow/WhyIsTeaCalledTea/WhyIsTeaCalledTea";
import QualityOfTea from "../../pages/UsefulToKnow/QualityOfTea/QualityOfTea";
import TeaLeafStandards from "../../pages/UsefulToKnow/TeaLeafStandards/TeaLeafStandards";
import Mistakes7 from "../../pages/UsefulToKnow/7Mistakes/7Mistakes";
import BatikPage from "../../pages/BatikPage/BatikPage";
import YahidnyiTsilunok from "../../pages/BatikCollection/YahidnyiTsilunok/YahidnyiTsilunok";
import ZChornoiuSmorodynoiu from "../../pages/BatikCollection/ZChornoiuSmorodynoui/ZChornoiuSmorodynoiu";
import ErlHrei from "../../pages/BatikCollection/ErlHrei/ErlHrei";
import HranulovanyiSTS250mu from "../../pages/BatikCollection/HranulovanyiSTS250mu/HranulovanyiSTS250mu";
import HranulovanyiSTS100mu from "../../pages/BatikCollection/HranulovanyiSTS100mu/HranulovanyiSTS100mu";
import HranulovanyiSTS100ku from "../../pages/BatikCollection/HranulovanyiSTS100ku/HranulovanyiSTS100ku";

export default function App() {
  return (
    // <Layout className="container">
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/our-achievements" element={<OurAchievements />} />
        <Route path="/useful-to-know" element={<UsefulToKnow />} />
        <Route path="/blog" element={<NewsSection />} />
        <Route path="/blog/:slug" element={<NewsDetails />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/history" element={<History />} />
        <Route path="/batik" element={<BatikPage />} />
        <Route path="/askold-emotion-collection" element={<AskoldPage />} />
        <Route path="/askold-noble-tea" element={<AskoldNoblePage />} />
        <Route path="/arden" element={<ArdenPage />} />
        <Route path="/domashnij-chaj" element={<DomashniyPages />} />
        <Route path="/mission-and-values" element={<AboutUs />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/financial-reporting" element={<FinancialReporting />} />
        <Route path="/stores-and-online-shopping" element={<Stores />} />
        <Route path="/national-cashback" element={<NationalCashback />} />
        <Route path="/batik-in-atb" element={<NewBatikInAtb />} />
        <Route path="/coffee-arden" element={<NewCoffeArden />} />
        <Route path="/batik-classic-collection" element={<BatikCollection />} />
        <Route
          path="/batik-gold-collection"
          element={<BatikGoldCollection />}
        />
        <Route path="/made-in-ukraine" element={<NationalCashback />} />
        <Route path="/facts-about-coffee" element={<FactsAboutCoffee />} />
        <Route path="/arabica-or-robusta" element={<ArabicaOrRobusta />} />
        <Route path="/why-is-tea-called-tea" element={<WhyIsTeaCalledTea />} />
        <Route path="/quality-of-tea" element={<QualityOfTea />} />
        <Route path="/tea-leaf-standards" element={<TeaLeafStandards />} />
        <Route path="/7-mistakes" element={<Mistakes7 />} />
        <Route path="/batik-yahidnyi-tsilunok" element={<YahidnyiTsilunok />} />
        <Route
          path="/batik-z-chornoiu-smorodynoui"
          element={<ZChornoiuSmorodynoiu />}
        />
        <Route path="/batik-erl-hrei" element={<ErlHrei />} />
        <Route
          path="/batik-hranulovanyi-sts-250"
          element={<HranulovanyiSTS250mu />}
        />
        <Route
          path="/batik-hranulovanyi-sts-100-m-u"
          element={<HranulovanyiSTS100mu />}
        />
        <Route
          path="/batik-hranulovanyi-sts-100"
          element={<HranulovanyiSTS100ku />}
        />
      </Routes>
    </Layout>
  );
}

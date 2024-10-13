import AboutUs from "../../pages/AboutUs/AboutUs";
import BatikPage from "../../pages/BatikPage/BatikPage";
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
// import New231123 from "../../pages/News/new231123/new231123";
// import New081123 from "../../pages/News/new081123/new081123";
import NewsDetails from "../NewsDetails/NewsDetails";
import Quality from "../../pages/Quality/Quality";
import FinancialReporting from "../../pages/FinancialReporting/FinancialReporting";
import Stores from "../../pages/Stores/Stores";
import NationalCashback from "../../pages/NationalCashback/NationalCashback";

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
        <Route path="/blog" element={<News />} />
        <Route path="/blog/:slug" element={<NewsDetails />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/history" element={<History />} />
        <Route path="/batik" element={<BatikPage />} />
        <Route path="/askold-emotion-collection" element={<AskoldPage />} />
        <Route path="/askold-noble-tea" element={<AskoldNoblePage />} />
        <Route path="/arden" element={<ArdenPage />} />
        <Route path="/domashnij-chaj" element={<DomashniyPages />} />
        <Route path="/mission-and-values" element={<Mission />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/financial-reporting" element={<FinancialReporting />} />
        <Route path="/stores-and-online-shopping" element={<Stores />} />
        <Route path="/national-cashback" element={<NationalCashback />} />
      </Routes>
    </Layout>
  );
}

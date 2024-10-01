import AboutUs from "../../pages/AboutUs/AboutUs";
import Brands from "../../pages/Brands/Brands";
import Contacts from "../../pages/Contacts/Contacts";
import HomePage from "../../pages/HomePage/HomePage";
import News from "../../pages/News/News";
import OurAchievements from "../../pages/OurAchievements/OurAchievements";
import UsefulToKnow from "../../pages/UsefulToKnow/UsefulToKnow";
import Layout from "../Layout/Layout";
import { Route, Routes } from "react-router-dom";

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
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Layout>
  );
}

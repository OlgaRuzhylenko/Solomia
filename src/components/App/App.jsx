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
import Vysokohirnyi250mu from "../../pages/BatikCollection/Vysokohirnyi250mu/Vysokohirnyi250mu";
import Vysokohirnyi100 from "../../pages/BatikCollection/Vysokohirnyi100/Vysokohirnyi100";
import Serednolystovyi from "../../pages/BatikCollection/Serednolystovyi/Serednolystovyi";
import ChornyiBarkhat120h from "../../pages/BatikCollection/ChornyiBarkhat120h/ChornyiBarkhat120h";
import ChornyiBarkhat90 from "../../pages/BatikCollection/ChornyiBarkhat90/ChornyiBarkhat90";
import Krupnolystovyi150 from "../../pages/BatikCollection/Krupnolystovyi150/Krupnolystovyi150";
import ZelenyiOstriv90 from "../../pages/BatikCollection/ZelenyiOstriv90/ZelenyiOstriv90";
import BadoryiLymon from "../../pages/BatikCollection/BadoryiLymon/BadoryiLymon";
import Indiiskyi150 from "../../pages/BatikCollection/Indiiskyi150/Indiiskyi150";
import Indiiskyi25TB from "../../pages/BatikCollection/Indiiskyi25TB/Indiiskyi25TB";
import Keniiskyi25TB from "../../pages/BatikCollection/Keniiskyi25TB/Keniiskyi25TB";
import Keniiskyi85 from "../../pages/BatikCollection/Keniiskyi85/Keniiskyi85";
import KorolivskyiStandart100TB from "../../pages/BatikCollection/KorolivskyiStandart100TB/KorolivskyiStandart100TB";
import KorolivskyiStandart85 from "../../pages/BatikCollection/KorolivskyiStandart85/KorolivskyiStandart85";
import KorolivskyiStandart25TB from "../../pages/BatikCollection/KorolivskyiStandart25TB/KorolivskyiStandart25TB";
import ChornyiBarkhat50 from "../../pages/BatikCollection/ChornyiBarkhat50/ChornyiBarkhat50";
import ZelenyiMokhito from "../../pages/BatikCollection/ZelenyiMokhito/ZelenyiMokhito";
import KrupnyiLystBerhamotovyi from "../../pages/BatikGoldCollection/KrupnyiLystBerhamotovyi/KrupnyiLystBerhamotovyi";
import KrupnyiLystOPA from "../../pages/BatikGoldCollection/KrupnyiLystOPA/KrupnyiLystOPA";
import SmarahdovyiOstriv from "../../pages/BatikGoldCollection/SmarahdovyiOstriv/SmarahdovyiOstriv";
import RubinovaNich from "../../pages/BatikGoldCollection/RubinovaNich/RubinovaNich";
import BerhamotovyiBuket from "../../pages/BatikGoldCollection/BerhamotovyiBuket/BerhamotovyiBuket";
import TseilonskeSontse from "../../pages/BatikGoldCollection/TseilonskeSontse/TseilonskeSontse";
import TseilonskyiVysokohirnyi from "../../pages/BatikGoldCollection/TseilonskyiVysokohirnyi/TseilonskyiVysokohirnyi";
import GoldErlHrei from "../../pages/BatikGoldCollection/GoldErlHrei/GoldErlHrei";
import SweetBerry from "../../pages/AskoldPage/SweetBerry/SweetBerry";
import LovelyMelissa from "../../pages/AskoldPage/LovelyMelissa/LovelyMelissa";
import LippyFruit from "../../pages/AskoldPage/LippyFruit/LippyFruit";
import ChampagneSpills from "../../pages/AskoldPage/ChampagneSpills/ChampagneSpills";
import EmotionEarlGray from "../../pages/AskoldPage/EmotionEarlGray/EmotionEarlGray";
import BrightNight from "../../pages/AskoldPage/BrightNight/BrightNight";
import HotGinger from "../../pages/AskoldPage/HotGinger/HotGinger";
import EmotionBlackTea from "../../pages/AskoldPage/EmotionBlackTea/EmotionBlackTea";
import AskoldNobleGreenTea from "../../pages/AskoldNoblePage/AskoldNobleGreenTea/AskoldNobleGreenTea";
import AskoldNobleEarlGray25TB from "../../pages/AskoldNoblePage/AskoldNobleEarlGray25TB/AskoldNobleEarlGray25TB";
import AskoldNobleBlack25TB from "../../pages/AskoldNoblePage/AskoldNobleBlack25TB/AskoldNobleBlack25TB";
import AskoldNobleEarlGray90 from "../../pages/AskoldNoblePage/AskoldNobleEarlGray90/AskoldNobleEarlGray90";
import AskoldNobleFbop90 from "../../pages/AskoldNoblePage/AskoldNobleFbop90/AskoldNobleFbop90";
import AskoldNoblePekoe90 from "../../pages/AskoldNoblePage/AskoldNoblePekoe90/AskoldNoblePekoe90";
import AskoldNobleOPA90 from "../../pages/AskoldNoblePage/AskoldNobleOPA90/AskoldNobleOPA90";
import AskoldNobleFbop180mu from "../../pages/AskoldNoblePage/AskoldNobleFbop180mu/AskoldNobleFbop180mu";
import AskoldNoblePekoe180mu from "../../pages/AskoldNoblePage/AskoldNoblePekoe180mu/AskoldNoblePekoe180mu";
import AskoldNobleOPA150mu from "../../pages/AskoldNoblePage/AskoldNobleOPA150mu/AskoldNobleOPA150mu";
import ArdenCaramel250 from "../../pages/ArdenPage/ArdenCaramel250/ArdenCaramel250";
import ArdenIrishCream250 from "../../pages/ArdenPage/ArdenIrishCream250/ArdenIrishCream250";
import ArdenArabica250 from "../../pages/ArdenPage/ArdenArabica250/ArdenArabica250";
import ArdenCrema250 from "../../pages/ArdenPage/ArdenCrema250/ArdenCrema250";
import ArdenEspresso250 from "../../pages/ArdenPage/ArdenEspresso250/ArdenEspresso250";
import ArdenIrishCream1kg from "../../pages/ArdenPage/ArdenIrishCream1kg/ArdenIrishCream1kg";
import ArdenEspresso1kg from "../../pages/ArdenPage/ArdenEspresso1kg/ArdenEspresso1kg";
import ArdenArabica1kg from "../../pages/ArdenPage/ArdenArabica1kg/ArdenArabica1kg";
import ArdenCrema1kg from "../../pages/ArdenPage/ArdenCrema1kg/ArdenCrema1kg";
import DomashniiChaiMitsnyi90 from "../../pages/DomashniyPages/DomashniiChaiMitsnyi90/DomashniiChaiMitsnyi90";
import DomashniiChaiMitsnyi40PB from "../../pages/DomashniyPages/DomashniiChaiMitsnyi40PB/DomashniiChaiMitsnyi40PB";
import AskoldNobleBlack100TB from "../../pages/AskoldNoblePage/AskoldNobleBlack100TB/AskoldNobleBlack100TB";
import DomashniiChaiMalynovyi30PB from "../../pages/DomashniyPages/DomashniiChaiMalynovyi30PB/DomashniiChaiMalynovyi30PB";
import DomashniiChaiLymonnyi30PB from "../../pages/DomashniyPages/DomashniiChaiLymonnyi30PB/DomashniiChaiLymonnyi30PB";
import DomashniiChaiYahidnyi30PB from "../../pages/DomashniyPages/DomashniiChaiYahidnyi30PB/DomashniiChaiYahidnyi30PB";
import DomashniiChaiTropik30PB from "../../pages/DomashniyPages/DomashniiChaiTropik30PB/DomashniiChaiTropik30PB";
import DomashniiChaiPolunychnyi30PB from "../../pages/DomashniyPages/DomashniiChaiPolunychnyi30PB/DomashniiChaiPolunychnyi30PB";
import DomashniiChaiBerhamotovyi30PB from "../../pages/DomashniyPages/DomashniiChaiBerhamotovyi30PB/DomashniiChaiBerhamotovyi30PB";

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
        <Route
          path="/batik-vysokohirnyi-250-m-u"
          element={<Vysokohirnyi250mu />}
        />
        <Route path="/batik-vysokohirnyi-100" element={<Vysokohirnyi100 />} />
        <Route
          path="/batik-serednolystovyi-100"
          element={<Serednolystovyi />}
        />
        <Route
          path="/batik-chornyi-barkhat-120-hram-60-paketykiv"
          element={<ChornyiBarkhat120h />}
        />
        <Route
          path="/batik-chornyi-barkhat-90"
          element={<ChornyiBarkhat90 />}
        />
        <Route
          path="/batik-chornyi-barkhat-50-hram-25-paketykiv"
          element={<ChornyiBarkhat50 />}
        />
        <Route
          path="/batik-krupnolystovyi-150-m-u"
          element={<Krupnolystovyi150 />}
        />
        <Route path="/batik-zelenyi-ostriv-90" element={<ZelenyiOstriv90 />} />
        <Route
          path="/batik-badoryi-lymon-37-5-hram-25-paketykiv"
          element={<BadoryiLymon />}
        />
        <Route
          path="/batik-indiiskyi-150-hram-100-paketykiv"
          element={<Indiiskyi150 />}
        />
        <Route
          path="/batik-indiiskyi-37-5-hram-25-paketykiv"
          element={<Indiiskyi25TB />}
        />
        <Route
          path="/batik-keniiskyi-50-hram-25-paketykiv"
          element={<Keniiskyi25TB />}
        />
        <Route path="/batik-keniiskyi-85" element={<Keniiskyi85 />} />
        <Route
          path="/batik-korolivskyi-standart-200-hram-100-paketykiv"
          element={<KorolivskyiStandart100TB />}
        />
        <Route
          path="/batik-korolivskyi-standart-85"
          element={<KorolivskyiStandart85 />}
        />
        <Route
          path="/batik-korolivskyi-standart-50-hram-25-paketykiv"
          element={<KorolivskyiStandart25TB />}
        />
        <Route
          path="/batik-zelenyi-mokhito-37-5-hram-25-paketykiv"
          element={<ZelenyiMokhito />}
        />
        <Route
          path="/batik-gold-krupnyi-lyst-berhamotovyi-100"
          element={<KrupnyiLystBerhamotovyi />}
        />
        <Route
          path="/batik-gold-krupnyi-lyst-opa-100"
          element={<KrupnyiLystOPA />}
        />
        <Route
          path="/batik-gold-smarahdovyi-ostriv"
          element={<SmarahdovyiOstriv />}
        />
        <Route path="/batik-gold-rubinova-nich" element={<RubinovaNich />} />
        <Route
          path="/batik-gold-berhamotovyi-buket"
          element={<BerhamotovyiBuket />}
        />
        <Route
          path="/batik-gold-tseilonske-sontse"
          element={<TseilonskeSontse />}
        />
        <Route
          path="/batik-gold-tseilonskyi-vysokohirnyi"
          element={<TseilonskyiVysokohirnyi />}
        />
        <Route path="/batik-gold-erl-hrei" element={<GoldErlHrei />} />
        <Route path="/askold-emotion-sweet-berry" element={<SweetBerry />} />
        <Route
          path="/askold-emotion-lovely-melissa"
          element={<LovelyMelissa />}
        />
        <Route path="/askold-emotion-lippy-fruit" element={<LippyFruit />} />
        <Route
          path="/askold-emotion-champagne-spills"
          element={<ChampagneSpills />}
        />
        <Route path="/askold-emotion-earl-gray" element={<EmotionEarlGray />} />
        <Route path="/askold-emotion-bright-night" element={<BrightNight />} />
        <Route path="/askold-emotion-hot-ginger" element={<HotGinger />} />
        <Route path="/askold-emotion-black-tea" element={<EmotionBlackTea />} />
        <Route
          path="/askold-noble-green-tea-25-paketykiv"
          element={<AskoldNobleGreenTea />}
        />
        <Route
          path="/askold-noble-earl-gray-tea-25-paketykiv"
          element={<AskoldNobleEarlGray25TB />}
        />
        <Route
          path="/askold-noble-black-tea-25-paketykiv"
          element={<AskoldNobleBlack25TB />}
        />
        <Route
          path="/askold-noble-black-tea-100-paketykiv"
          element={<AskoldNobleBlack100TB />}
        />
        <Route
          path="/askold-noble-earl-gray-tea-90"
          element={<AskoldNobleEarlGray90 />}
        />
        <Route
          path="/askold-noble-medium-FBOP-90"
          element={<AskoldNobleFbop90 />}
        />
        <Route path="/askold-noble-pekoe-90" element={<AskoldNoblePekoe90 />} />
        <Route path="/askold-noble-OPA-90" element={<AskoldNobleOPA90 />} />
        <Route
          path="/askold-noble-medium-FBOP-180-mu"
          element={<AskoldNobleFbop180mu />}
        />
        <Route
          path="/askold-noble-pekoe-180-mu"
          element={<AskoldNoblePekoe180mu />}
        />
        <Route
          path="/askold-noble-OPA-150-mu"
          element={<AskoldNobleOPA150mu />}
        />
        <Route path="/arden-caramel-250" element={<ArdenCaramel250 />} />
        <Route path="/arden-irish-cream-250" element={<ArdenIrishCream250 />} />
        <Route path="/arden-arabica-250" element={<ArdenArabica250 />} />
        <Route path="/arden-crema-250" element={<ArdenCrema250 />} />
        <Route path="/arden-espresso-250" element={<ArdenEspresso250 />} />
        <Route
          path="/arden-irish-cream-1-kg"
          element={<ArdenIrishCream1kg />}
        />
        <Route path="/arden-arabica-1-kg" element={<ArdenArabica1kg />} />
        <Route path="/arden-espresso-1-kg" element={<ArdenEspresso1kg />} />
        <Route path="/arden-crema-1-kg" element={<ArdenCrema1kg />} />
        <Route
          path="/domashnii-chai-mitsnyi-90"
          element={<DomashniiChaiMitsnyi90 />}
        />
        <Route
          path="/domashnii-chai-mitsnyi-40-g-20-paketykiv"
          element={<DomashniiChaiMitsnyi40PB />}
        />
        <Route
          path="/domashnii-chai-malynovyi-30-g-20-paketykiv"
          element={<DomashniiChaiMalynovyi30PB />}
        />
        <Route
          path="/domashnii-chai-lymonnyi-30-g-20-paketykiv"
          element={<DomashniiChaiLymonnyi30PB />}
        />
        <Route
          path="/domashnii-chai-yahidnyi-30-g-20-paketykiv"
          element={<DomashniiChaiYahidnyi30PB />}
        />
        <Route
          path="/domashnii-chai-tropik-30-g-20-paketykiv"
          element={<DomashniiChaiTropik30PB />}
        />
        <Route
          path="/domashnii-chai-polunychnyi-30-g-20-paketykiv"
          element={<DomashniiChaiPolunychnyi30PB />}
        />
        <Route
          path="/domashnii-chai-berhamotovyi-30-g-20-paketykiv"
          element={<DomashniiChaiBerhamotovyi30PB />}
        />
      </Routes>
    </Layout>
  );
}

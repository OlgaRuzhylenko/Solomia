import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "../../ScrollToTop";
import AskoldEmotionBlackCollection from "../../pages/News/AskoldEmotionBlackCollection/AskoldEmotionBlackCollection";
import BlackTeaCollection from "../../pages/AskoldPage/BlackTeaCollection/BlackTeaCollection";

const AboutUs = lazy(() => import("../../pages/AboutUs/AboutUs"));
const Brands = lazy(() => import("../../pages/Brands/Brands"));
const Contacts = lazy(() => import("../../pages/Contacts/Contacts"));
const History = lazy(() => import("../../pages/History/History"));
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const OurAchievements = lazy(() =>
  import("../../pages/OurAchievements/OurAchievements")
);
const UsefulToKnow = lazy(() =>
  import("../../pages/UsefulToKnow/UsefulToKnow")
);
const Layout = lazy(() => import("../Layout/Layout"));
const AskoldPage = lazy(() => import("../../pages/AskoldPage/AskoldPage"));
const AskoldNoblePage = lazy(() =>
  import("../../pages/AskoldNoblePage/AskoldNoblePage")
);
const ArdenPage = lazy(() => import("../../pages/ArdenPage/ArdenPage"));
const DomashniyPages = lazy(() =>
  import("../../pages/DomashniyPages/DomashniyPages")
);
const NewsDetails = lazy(() => import("../NewsDetails/NewsDetails"));
const Quality = lazy(() => import("../../pages/Quality/Quality"));
const FinancialReporting = lazy(() =>
  import("../../pages/FinancialReporting/FinancialReporting")
);
const Stores = lazy(() => import("../../pages/Stores/Stores"));
const NationalCashback = lazy(() =>
  import("../../pages/NationalCashback/NationalCashback")
);
const BatikCollection = lazy(() =>
  import("../../pages/BatikCollection/BatikCollection")
);
const BatikGoldCollection = lazy(() =>
  import("../../pages/BatikGoldCollection/BatikGoldCollection")
);
const NewsSection = lazy(() => import("../../pages/News/NewsSection"));
const NewBatikInAtb = lazy(() =>
  import("../../pages/News/newBatikInAtb/newBatikInAtb")
);
const NewCoffeArden = lazy(() =>
  import("../../pages/News/NewCoffeArden/NewCoffeArden")
);
const FactsAboutCoffee = lazy(() =>
  import("../../pages/UsefulToKnow/FactsAboutCoffee/FactsAboutCoffee")
);
const ArabicaOrRobusta = lazy(() =>
  import("../../pages/UsefulToKnow/ArabicaOrRobusta/ArabicaOrRobusta")
);
const WhyIsTeaCalledTea = lazy(() =>
  import("../../pages/UsefulToKnow/WhyIsTeaCalledTea/WhyIsTeaCalledTea")
);
const QualityOfTea = lazy(() =>
  import("../../pages/UsefulToKnow/QualityOfTea/QualityOfTea")
);
const TeaLeafStandards = lazy(() =>
  import("../../pages/UsefulToKnow/TeaLeafStandards/TeaLeafStandards")
);
const Mistakes7 = lazy(() =>
  import("../../pages/UsefulToKnow/7Mistakes/7Mistakes")
);
const BatikPage = lazy(() => import("../../pages/BatikPage/BatikPage"));
const YahidnyiTsilunok = lazy(() =>
  import("../../pages/BatikCollection/YahidnyiTsilunok/YahidnyiTsilunok")
);
const ZChornoiuSmorodynoiu = lazy(() =>
  import(
    "../../pages/BatikCollection/ZChornoiuSmorodynoui/ZChornoiuSmorodynoiu"
  )
);
const ErlHrei = lazy(() =>
  import("../../pages/BatikCollection/ErlHrei/ErlHrei")
);
const HranulovanyiSTS250mu = lazy(() =>
  import(
    "../../pages/BatikCollection/HranulovanyiSTS250mu/HranulovanyiSTS250mu"
  )
);
const HranulovanyiSTS100mu = lazy(() =>
  import(
    "../../pages/BatikCollection/HranulovanyiSTS100mu/HranulovanyiSTS100mu"
  )
);
const HranulovanyiSTS100ku = lazy(() =>
  import(
    "../../pages/BatikCollection/HranulovanyiSTS100ku/HranulovanyiSTS100ku"
  )
);
const Vysokohirnyi250mu = lazy(() =>
  import("../../pages/BatikCollection/Vysokohirnyi250mu/Vysokohirnyi250mu")
);
const Vysokohirnyi100 = lazy(() =>
  import("../../pages/BatikCollection/Vysokohirnyi100/Vysokohirnyi100")
);
const Serednolystovyi = lazy(() =>
  import("../../pages/BatikCollection/Serednolystovyi/Serednolystovyi")
);
const ChornyiBarkhat120h = lazy(() =>
  import("../../pages/BatikCollection/ChornyiBarkhat120h/ChornyiBarkhat120h")
);
const ChornyiBarkhat90 = lazy(() =>
  import("../../pages/BatikCollection/ChornyiBarkhat90/ChornyiBarkhat90")
);
const Krupnolystovyi150 = lazy(() =>
  import("../../pages/BatikCollection/Krupnolystovyi150/Krupnolystovyi150")
);
const ZelenyiOstriv90 = lazy(() =>
  import("../../pages/BatikCollection/ZelenyiOstriv90/ZelenyiOstriv90")
);
const BadoryiLymon = lazy(() =>
  import("../../pages/BatikCollection/BadoryiLymon/BadoryiLymon")
);
const Indiiskyi150 = lazy(() =>
  import("../../pages/BatikCollection/Indiiskyi150/Indiiskyi150")
);
const Indiiskyi25TB = lazy(() =>
  import("../../pages/BatikCollection/Indiiskyi25TB/Indiiskyi25TB")
);
const Keniiskyi25TB = lazy(() =>
  import("../../pages/BatikCollection/Keniiskyi25TB/Keniiskyi25TB")
);
const Keniiskyi85 = lazy(() =>
  import("../../pages/BatikCollection/Keniiskyi85/Keniiskyi85")
);
const KorolivskyiStandart100TB = lazy(() =>
  import(
    "../../pages/BatikCollection/KorolivskyiStandart100TB/KorolivskyiStandart100TB"
  )
);
const KorolivskyiStandart85 = lazy(() =>
  import(
    "../../pages/BatikCollection/KorolivskyiStandart85/KorolivskyiStandart85"
  )
);
const KorolivskyiStandart25TB = lazy(() =>
  import(
    "../../pages/BatikCollection/KorolivskyiStandart25TB/KorolivskyiStandart25TB"
  )
);
const ChornyiBarkhat50 = lazy(() =>
  import("../../pages/BatikCollection/ChornyiBarkhat50/ChornyiBarkhat50")
);
const ZelenyiMokhito = lazy(() =>
  import("../../pages/BatikCollection/ZelenyiMokhito/ZelenyiMokhito")
);
const KrupnyiLystBerhamotovyi = lazy(() =>
  import(
    "../../pages/BatikGoldCollection/KrupnyiLystBerhamotovyi/KrupnyiLystBerhamotovyi"
  )
);
const KrupnyiLystOPA = lazy(() =>
  import("../../pages/BatikGoldCollection/KrupnyiLystOPA/KrupnyiLystOPA")
);
const SmarahdovyiOstriv = lazy(() =>
  import("../../pages/BatikGoldCollection/SmarahdovyiOstriv/SmarahdovyiOstriv")
);
const RubinovaNich = lazy(() =>
  import("../../pages/BatikGoldCollection/RubinovaNich/RubinovaNich")
);
const BerhamotovyiBuket = lazy(() =>
  import("../../pages/BatikGoldCollection/BerhamotovyiBuket/BerhamotovyiBuket")
);
const TseilonskeSontse = lazy(() =>
  import("../../pages/BatikGoldCollection/TseilonskeSontse/TseilonskeSontse")
);
const TseilonskyiVysokohirnyi = lazy(() =>
  import(
    "../../pages/BatikGoldCollection/TseilonskyiVysokohirnyi/TseilonskyiVysokohirnyi"
  )
);
const GoldErlHrei = lazy(() =>
  import("../../pages/BatikGoldCollection/GoldErlHrei/GoldErlHrei")
);
const SweetBerry = lazy(() =>
  import("../../pages/AskoldPage/SweetBerry/SweetBerry")
);
const LovelyMelissa = lazy(() =>
  import("../../pages/AskoldPage/LovelyMelissa/LovelyMelissa")
);
const LippyFruit = lazy(() =>
  import("../../pages/AskoldPage/LippyFruit/LippyFruit")
);
const ChampagneSpills = lazy(() =>
  import("../../pages/AskoldPage/ChampagneSpills/ChampagneSpills")
);
const EmotionEarlGray = lazy(() =>
  import("../../pages/AskoldPage/EmotionEarlGray/EmotionEarlGray")
);
const BrightNight = lazy(() =>
  import("../../pages/AskoldPage/BrightNight/BrightNight")
);
const HotGinger = lazy(() =>
  import("../../pages/AskoldPage/HotGinger/HotGinger")
);
const EmotionBlackTea = lazy(() =>
  import("../../pages/AskoldPage/EmotionBlackTea/EmotionBlackTea")
);
const AskoldNobleGreenTea = lazy(() =>
  import("../../pages/AskoldNoblePage/AskoldNobleGreenTea/AskoldNobleGreenTea")
);
const AskoldNobleEarlGray25TB = lazy(() =>
  import(
    "../../pages/AskoldNoblePage/AskoldNobleEarlGray25TB/AskoldNobleEarlGray25TB"
  )
);
const AskoldNobleBlack25TB = lazy(() =>
  import(
    "../../pages/AskoldNoblePage/AskoldNobleBlack25TB/AskoldNobleBlack25TB"
  )
);
const AskoldNobleEarlGray90 = lazy(() =>
  import(
    "../../pages/AskoldNoblePage/AskoldNobleEarlGray90/AskoldNobleEarlGray90"
  )
);
const AskoldNobleFbop90 = lazy(() =>
  import("../../pages/AskoldNoblePage/AskoldNobleFbop90/AskoldNobleFbop90")
);
const AskoldNoblePekoe90 = lazy(() =>
  import("../../pages/AskoldNoblePage/AskoldNoblePekoe90/AskoldNoblePekoe90")
);
const AskoldNobleOPA90 = lazy(() =>
  import("../../pages/AskoldNoblePage/AskoldNobleOPA90/AskoldNobleOPA90")
);
const AskoldNobleFbop180mu = lazy(() =>
  import(
    "../../pages/AskoldNoblePage/AskoldNobleFbop180mu/AskoldNobleFbop180mu"
  )
);
const AskoldNoblePekoe180mu = lazy(() =>
  import(
    "../../pages/AskoldNoblePage/AskoldNoblePekoe180mu/AskoldNoblePekoe180mu"
  )
);
const AskoldNobleOPA150mu = lazy(() =>
  import("../../pages/AskoldNoblePage/AskoldNobleOPA150mu/AskoldNobleOPA150mu")
);
const ArdenCaramel250 = lazy(() =>
  import("../../pages/ArdenPage/ArdenCaramel250/ArdenCaramel250")
);
const ArdenIrishCream250 = lazy(() =>
  import("../../pages/ArdenPage/ArdenIrishCream250/ArdenIrishCream250")
);
const ArdenArabica250 = lazy(() =>
  import("../../pages/ArdenPage/ArdenArabica250/ArdenArabica250")
);
const ArdenCrema250 = lazy(() =>
  import("../../pages/ArdenPage/ArdenCrema250/ArdenCrema250")
);
const ArdenEspresso250 = lazy(() =>
  import("../../pages/ArdenPage/ArdenEspresso250/ArdenEspresso250")
);
const ArdenIrishCream1kg = lazy(() =>
  import("../../pages/ArdenPage/ArdenIrishCream1kg/ArdenIrishCream1kg")
);
const ArdenEspresso1kg = lazy(() =>
  import("../../pages/ArdenPage/ArdenEspresso1kg/ArdenEspresso1kg")
);
const ArdenArabica1kg = lazy(() =>
  import("../../pages/ArdenPage/ArdenArabica1kg/ArdenArabica1kg")
);
const ArdenCrema1kg = lazy(() =>
  import("../../pages/ArdenPage/ArdenCrema1kg/ArdenCrema1kg")
);
const DomashniiChaiMitsnyi90 = lazy(() =>
  import(
    "../../pages/DomashniyPages/DomashniiChaiMitsnyi90/DomashniiChaiMitsnyi90"
  )
);
const DomashniiChaiMitsnyi40PB = lazy(() =>
  import(
    "../../pages/DomashniyPages/DomashniiChaiMitsnyi40PB/DomashniiChaiMitsnyi40PB"
  )
);
const AskoldNobleBlack100TB = lazy(() =>
  import(
    "../../pages/AskoldNoblePage/AskoldNobleBlack100TB/AskoldNobleBlack100TB"
  )
);
const DomashniiChaiMalynovyi30PB = lazy(() =>
  import(
    "../../pages/DomashniyPages/DomashniiChaiMalynovyi30PB/DomashniiChaiMalynovyi30PB"
  )
);
const DomashniiChaiLymonnyi30PB = lazy(() =>
  import(
    "../../pages/DomashniyPages/DomashniiChaiLymonnyi30PB/DomashniiChaiLymonnyi30PB"
  )
);
const DomashniiChaiYahidnyi30PB = lazy(() =>
  import(
    "../../pages/DomashniyPages/DomashniiChaiYahidnyi30PB/DomashniiChaiYahidnyi30PB"
  )
);
const DomashniiChaiTropik30PB = lazy(() =>
  import(
    "../../pages/DomashniyPages/DomashniiChaiTropik30PB/DomashniiChaiTropik30PB"
  )
);
const DomashniiChaiPolunychnyi30PB = lazy(() =>
  import(
    "../../pages/DomashniyPages/DomashniiChaiPolunychnyi30PB/DomashniiChaiPolunychnyi30PB"
  )
);
const DomashniiChaiBerhamotovyi30PB = lazy(() =>
  import(
    "../../pages/DomashniyPages/DomashniiChaiBerhamotovyi30PB/DomashniiChaiBerhamotovyi30PB"
  )
);

export default function App() {
  return (
    // <Layout className="container">
    <Layout>
      <Suspense>
        {<ScrollToTop />}
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
          <Route
            path="/batik-classic-collection"
            element={<BatikCollection />}
          />
          <Route
            path="/batik-gold-collection"
            element={<BatikGoldCollection />}
          />
          <Route
            path="/askold-emotion-black-collection"
            element={<AskoldEmotionBlackCollection />}
          />
          <Route path="/made-in-ukraine" element={<NationalCashback />} />
          <Route path="/facts-about-coffee" element={<FactsAboutCoffee />} />
          <Route path="/arabica-or-robusta" element={<ArabicaOrRobusta />} />
          <Route
            path="/why-is-tea-called-tea"
            element={<WhyIsTeaCalledTea />}
          />
          <Route path="/quality-of-tea" element={<QualityOfTea />} />
          <Route path="/tea-leaf-standards" element={<TeaLeafStandards />} />
          <Route path="/7-mistakes" element={<Mistakes7 />} />
          <Route
            path="/batik-yahidnyi-tsilunok"
            element={<YahidnyiTsilunok />}
          />
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
          <Route
            path="/batik-zelenyi-ostriv-90"
            element={<ZelenyiOstriv90 />}
          />
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
            path="/askold-emotion-black-tea-collection"
            element={<BlackTeaCollection />}
          />
          <Route
            path="/askold-emotion-lovely-melissa"
            element={<LovelyMelissa />}
          />
          <Route path="/askold-emotion-lippy-fruit" element={<LippyFruit />} />
          <Route
            path="/askold-emotion-champagne-spills"
            element={<ChampagneSpills />}
          />
          <Route
            path="/askold-emotion-earl-gray"
            element={<EmotionEarlGray />}
          />
          <Route
            path="/askold-emotion-bright-night"
            element={<BrightNight />}
          />
          <Route path="/askold-emotion-hot-ginger" element={<HotGinger />} />
          <Route
            path="/askold-emotion-black-tea"
            element={<EmotionBlackTea />}
          />
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
          <Route
            path="/askold-noble-pekoe-90"
            element={<AskoldNoblePekoe90 />}
          />
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
          <Route
            path="/arden-irish-cream-250"
            element={<ArdenIrishCream250 />}
          />
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
      </Suspense>
    </Layout>
  );
}

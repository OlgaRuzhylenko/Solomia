import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import News from "./News";
import css from "../News/NewsSection.module.css";

export default function NewsSection() {
  return (
    <div>
      <div>{<Header />}</div>
      <div>{<News />}</div>
      <div>{<Footer />}</div>
    </div>
  );
}

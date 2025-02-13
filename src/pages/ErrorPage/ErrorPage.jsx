import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import css from "./ErrorPage.module.css";

export default function ErrorPage() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.errorPageSection}>сторінка не знайдена</section>
      <div>{<Footer />}</div>
    </div>
  );
}

import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import BerhamotovyiBuketImg from "../../../images/batik/classic/14.png";
import css from "./BerhamotovyiBuket.module.css";

export default function BerhamotovyiBuket() {
  return (
    <div>
      <div>{<Header />}</div>
      <section className={css.berhamotovyiBuketSection}></section>
    </div>
  );
}
